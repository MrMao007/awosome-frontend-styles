# Contributing

Contributions are welcome for new visual systems, corrections to existing specifications, better style selection, and stronger verification workflows.

## Adding a style

Add one English specification under `references/<id>-design-spec.md`, with its source URL and observation scope. Distinguish measured source values from implementation choices; document palette, typography, geometry, components, compositions, signature atoms, Do/Don't rules and unspecified values. Product-inspired presets must not present adaptation tokens as official brand standards.

Follow the existing flat example layout: `examples/<id>.html` and `examples/<id>.png`. Keep HTML CSS/JavaScript inline, use licensed web-font links or system fallbacks, and do not bundle font binaries or source-site screenshots. Every published example must use English for visible copy, page metadata, accessibility labels and JavaScript-generated UI text. Product-inspired examples must preserve the common NOVA English body and interactions for visual comparison. Capture or derive a 1200 × 675 preview after verifying the page.

Add the preset to `styles.json`, `references/STYLE_INDEX.md`, the direct references in `SKILL.md`, the README category gallery and `index.html`. Include suitable use cases, visual character, avoid conditions and mood keywords. Keep specification files one directory level below `SKILL.md`; use progressive disclosure rather than loading the entire catalogue into the agent's context.

## Quality requirements

- Preserve exact numerical constraints when the source provides them.
- Do not invent missing values; mark them as unspecified.
- Do not mix style atoms unless a hybrid is explicitly documented.
- Keep `SKILL.md` below 500 lines.
- Verify example output at desktop and mobile widths.
- Check for horizontal overflow, clipped content, inaccessible interactions, broken fonts, and console errors.

Run `node scripts/validate.cjs` from the repository root to check catalogue counts, direct skill references, example content consistency, local links and prohibited font binaries. Run `npx --yes skills@1.7.1 add . --list` to confirm portable skill discovery. Browser verification is separate: inspect desktop and mobile output with both available web fonts and system-font fallbacks. If a future contribution changes the total number of styles, update the validator and the published counts together.

## Pull requests

Keep each pull request focused on one style or one workflow improvement. Explain what changed, why it improves generation quality, and how you verified it.
