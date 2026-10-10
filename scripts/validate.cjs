const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const issues = [];
const requireFile = file => { if (!fs.existsSync(path.join(root, file))) issues.push('Missing file: ' + file); };
const data = JSON.parse(fs.readFileSync(path.join(root, 'styles.json'), 'utf8'));
const styles = data.styles;
const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const index = fs.readFileSync(path.join(root, 'references/STYLE_INDEX.md'), 'utf8');
const gallery = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (data.count !== styles.length || styles.length !== 110) issues.push('Expected 110 catalog entries');
if (new Set(styles.map(s => s.id)).size !== styles.length) issues.push('Duplicate style IDs');
if (styles.filter(s => s.kind === 'foundational').length !== 10) issues.push('Expected 10 foundational systems');
if (styles.filter(s => s.kind === 'product-inspired').length !== 100) issues.push('Expected 100 product-inspired presets');
if (skill.split('\n').length >= 500) issues.push('SKILL.md must be shorter than 500 lines');
const desc = skill.match(/^description:\s*(.+)$/m)?.[1];
if (!desc || desc.length > 1024 || !desc.includes('110')) issues.push('Invalid skill description');
if (!/^name: awosome-frontend-styles$/m.test(skill)) issues.push('Unexpected portable skill name');
if (!readme.includes('100+ Design Styles') || !readme.includes('110 selectable design styles')) issues.push('README does not highlight the catalog');
if (/\/Users\/|file:\/\/|FONT_NOTICES/.test(skill + readme + index + gallery)) issues.push('Nonportable local path or obsolete font notice');
const expectedBody = new Map();
for (const s of styles) {
  for (const key of ['spec', 'example', 'preview']) requireFile(s[key]);
  if (!skill.includes('(' + s.spec + ')')) issues.push('Missing direct SKILL reference: ' + s.id);
  if (!index.includes(s.name)) issues.push('Missing index entry: ' + s.id);
  if (!readme.includes(s.preview)) issues.push('Missing README preview: ' + s.id);
  if (!gallery.includes('href="' + s.example + '"')) issues.push('Missing gallery example: ' + s.id);
  const spec = fs.readFileSync(path.join(root, s.spec), 'utf8');
  const html = fs.readFileSync(path.join(root, s.example), 'utf8');
  if (/data:font\/|data:application\/|base64/.test(html)) issues.push('Bundled binary in example: ' + s.id);
  if (/\/Users\/|file:\/\//.test(spec + html)) issues.push('Local absolute path in preset: ' + s.id);
  if (!/<html\b/.test(html) || !/<body[\s>]/.test(html)) issues.push('Invalid HTML example: ' + s.id);
  if (s.kind === 'product-inspired') {
    for (const heading of ['## Reusable Style Contract', '### Signature Atoms', '### Do', "### Don't", '### Implementation Tokens']) {
      if (!spec.includes(heading)) issues.push('Missing ' + heading + ': ' + s.id);
    }
    if (!s.source || !spec.includes(s.source)) issues.push('Missing provenance: ' + s.id);
    if (s.keywords.length < 3 || s.signatureAtoms.length < 4 || s.do.length < 4 || s.dont.length < 4) issues.push('Thin reusable metadata: ' + s.id);
    const body = html.slice(html.indexOf('<body>'));
    expectedBody.set(s.id, body);
    if (/\[FONT_NOTICES\]|\.\.\/evidence\//.test(spec)) issues.push('Obsolete source-bundle reference: ' + s.id);
  }
}
if (new Set(expectedBody.values()).size !== 1) issues.push('The 100 NOVA examples do not share identical content and interactions');
function localLink(file, value) {
  if (/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(value)) return;
  const clean = value.split(/[?#]/)[0];
  if (!clean || /[<>*]/.test(clean)) return;
  const target = path.resolve(path.dirname(file), decodeURIComponent(clean));
  if (!fs.existsSync(target)) issues.push('Broken local link in ' + path.relative(root, file) + ': ' + value);
}
for (const file of ['SKILL.md', 'README.md', 'NOTICE.md', 'CONTRIBUTING.md', 'references/STYLE_INDEX.md', ...styles.map(s => s.spec)]) {
  const abs = path.join(root, file), text = fs.readFileSync(abs, 'utf8');
  for (const m of text.matchAll(/\]\(([^)]+)\)/g)) localLink(abs, m[1]);
  for (const m of text.matchAll(/(?:href|src)="([^"]+)"/g)) localLink(abs, m[1]);
}
for (const m of gallery.matchAll(/href="([^"]+)"/g)) localLink(path.join(root, 'index.html'), m[1]);
const specFiles = fs.readdirSync(path.join(root, 'references')).filter(f => f.endsWith('-design-spec.md'));
const htmlFiles = fs.readdirSync(path.join(root, 'examples')).filter(f => f.endsWith('.html'));
const previews = fs.readdirSync(path.join(root, 'examples')).filter(f => f.endsWith('.png'));
if (specFiles.length !== 110 || htmlFiles.length !== 110 || previews.length !== 110) issues.push('Preset/example/preview counts differ from 110');
console.log(JSON.stringify({styles:styles.length,specs:specFiles.length,examples:htmlFiles.length,previews:previews.length,skillLines:skill.split('\n').length,issues}, null, 2));
if (issues.length) process.exitCode = 1;
