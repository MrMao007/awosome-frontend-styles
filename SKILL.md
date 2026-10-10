---
name: awosome-frontend-styles
description: "Generates polished HTML and React interfaces from 110 selectable design styles: ten foundational visual systems plus 100 product-homepage-inspired presets. Use when designing, restyling, or implementing landing pages, portfolios, dashboards, campaigns, editorial sites, or requesting styles such as Notion, Anthropic, Cursor, Vercel, Stripe, Apple, Capsule, Cobalt Grid, or any preset in the style index. Recommends a style when none is named and preserves user content when restyling."
license: MIT
---

# Awosome Frontend Styles

Generate production-ready HTML or React interfaces using one of 110 bundled design specifications. Treat each specification as a system of fixed visual atoms, not a loose mood board.

## Supported styles

110 selectable presets: ten foundational systems and 100 independent product-homepage studies. Read [references/STYLE_INDEX.md](references/STYLE_INDEX.md) to select a style, then read exactly one primary specification unless the user explicitly requests a hybrid. The [live gallery](https://mrmao007.github.io/awosome-frontend-styles/) compares examples.

Use a display name or ID. Foundational styles are Creative Mode, BlockFrame, Biennale Yellow, Blue Professional, Bold Poster, Broadside, Capsule, Cartesian, Cobalt Grid and Coral. Product presets include Notion, Figma, Anthropic, Cursor, Vercel, Stripe, Apple and 93 more, grouped in the index. Categories are reference industries, not restrictions on use.

All bundled public examples use English. Keep GitHub showcase pages, metadata, accessibility labels and preview screenshots in English when maintaining this package. This does not override the user's requested language for newly generated work.

## Workflow

1. Determine the output target.
   - Existing web project: follow its framework, component conventions, styling approach, and repository instructions.
   - New React artifact: create a self-contained component with defaults and no required props.
   - Static page: create one self-contained HTML file with inline CSS and JavaScript.
2. Determine the style.
   - If the user names a supported style, use it exactly.
   - If no style is named, use `references/STYLE_INDEX.md` and state the recommendation briefly.
   - If two styles are equally suitable and the choice materially changes the result, ask the user.
3. Read `references/<id>-design-spec.md` before designing. Product presets include a Reusable Style Contract, Signature Atoms, Do/Don't and Implementation Tokens. Inspect `examples/<id>.html` for the actual responsive CSS and `examples/<id>.png` for composition. Do not load unrelated specs.
4. Extract its non-negotiable atoms: palette, type roles, border/shadow system, geometry, spacing, composition patterns, and explicit Do/Don't rules.
5. Map the user's content to a composition from the specification. Never copy showcase text, source branding or claims. For a style-only restyle, preserve the user's brand, language, copy, data and interactions; change presentation only.
6. Implement semantic, accessible markup and responsive layout.
7. Validate at desktop and mobile widths. Fix overflow, clipping, unreadable contrast, broken fonts, and console errors before delivery.

## Host compatibility

This skill follows the portable Agent Skills `SKILL.md` structure. Do not assume a specific agent host or filesystem layout.

- Use the current host's file, shell, browser, and artifact tools.
- Follow repository-level instructions such as `AGENTS.md`, `CLAUDE.md`, or equivalent when present.
- Save deliverables where the current host makes them accessible to the user.
- If visual browser tooling is unavailable, perform structural checks and clearly state that visual inspection remains pending.
- Do not require QoderWork-specific tools, paths, or APIs.

## Style fidelity

- Foundational specifications define fixed systems. Product-inspired specifications distinguish observed source measurements from independent example tokens and adaptations; do not present adaptations as official brand rules.
- Preserve the selected preset's implementation tokens and font roles. Source-only typography is evidence, not permission to distribute a brand font.
- Preserve numerical constraints such as border widths, shadow offsets, line heights, tracking, rotation ranges, grid modules, and accent-count limits.
- Follow every explicit Don't rule. Do not add forbidden gradients, shadows, radii, colors, or typefaces. Preserve distinctive geometry and graphic devices instead of flattening every preset into generic SaaS cards.
- If a value is explicitly unspecified, choose a restrained value consistent with nearby specified components and record it as an implementation choice.
- Never mix visual atoms from another bundled style unless the user explicitly requests a hybrid.
- Apply “atoms sacred, composition free”: keep the system fixed while adapting layout to the content.

## Style selection

Use the full matrix in [references/STYLE_INDEX.md](references/STYLE_INDEX.md). Default tendencies:

- Executive, consulting, or corporate content: Blue Professional.
- Maximalist candy neo-brutalism: BlockFrame.
- Literary, cultural, or exhibition editorial: Biennale Yellow.
- Loud magazine or campaign poster: Bold Poster or Coral.
- Industrial protest-poster editorial: Broadside.
- Playful rounded consumer or lifestyle experience: Capsule.
- Restrained museum, architecture, or premium editorial: Cartesian.
- Technical editorial, archive, or data catalogue: Cobalt Grid.
- General candy editorial frame system: Creative Mode.

Product-inspired alternatives: use the index to compare calm document-first (Notion), warm editorial (Anthropic), developer monochrome (Vercel), vibrant financial/product storytelling (Stripe), or minimal premium product staging (Apple). Read their contracts before using these labels; never infer the look from brand familiarity alone.

## HTML output

- Produce a single `.html` file unless the user asks for a project structure.
- Keep CSS and JavaScript inline.
- Use CSS custom properties for design tokens.
- External font imports are allowed; provide system fallbacks. Examples bundle no font binaries. For offline delivery, use system fonts or separately obtain licensed fonts and disclose substitutions. Avoid dependencies that require a build step.
- Do not use browser storage APIs unless the user explicitly requests them.
- Add responsive behavior for desktop and mobile.

## React output

- Match the repository's existing toolchain and conventions.
- Prefer reusable sections and data-driven repeated content.
- Do not add dependencies when CSS and existing packages suffice.
- Components must have no required props unless integrated into an existing typed interface.
- Keep design tokens centralized in CSS variables or the project's theme layer.
- Do not replace an existing architecture merely to reproduce a style.

## Accessibility

- Use semantic landmarks and heading order.
- Give every interactive element keyboard focus styling and meaningful labels.
- Maintain readable contrast even when the reference relies on subtle tones.
- Respect `prefers-reduced-motion` when motion is added.
- Hide decorative graphics from assistive technology.

## Verification checklist

- [ ] The selected reference was read before implementation.
- [ ] Preset tokens and type roles are used; measured source values and implementation choices are not conflated.
- [ ] User content and interactions are unchanged when this is a style-only restyle.
- [ ] Border, shadow, radius, and geometry rules match the specification.
- [ ] Accent count and surface restrictions are respected.
- [ ] No explicit anti-pattern appears.
- [ ] Desktop and mobile layouts were inspected when browser tooling is available.
- [ ] No horizontal overflow, clipped content, broken font, or known console error remains.
- [ ] Final files are accessible to the user in the current host.

## References

- [Style selection matrix](references/STYLE_INDEX.md)
- [Creative Mode](references/creative-mode-design-spec.md)
- [BlockFrame](references/blockframe-design-spec.md)
- [Biennale Yellow](references/biennale-yellow-design-spec.md)
- [Blue Professional](references/blue-professional-design-spec.md)
- [Bold Poster](references/bold-poster-design-spec.md)
- [Broadside](references/broadside-design-spec.md)
- [Capsule](references/capsule-design-spec.md)
- [Cartesian](references/cartesian-design-spec.md)
- [Cobalt Grid](references/cobalt-grid-design-spec.md)
- [Coral](references/coral-design-spec.md)

### Product-inspired reference files

- [Notion](references/notion-design-spec.md)
- [Asana](references/asana-design-spec.md)
- [monday.com](references/monday-design-spec.md)
- [ClickUp](references/clickup-design-spec.md)
- [Miro](references/miro-design-spec.md)
- [Airtable](references/airtable-design-spec.md)
- [Coda](references/coda-design-spec.md)
- [Basecamp](references/basecamp-design-spec.md)
- [Todoist](references/todoist-design-spec.md)
- [Craft](references/craft-design-spec.md)
- [Obsidian](references/obsidian-design-spec.md)
- [Loom](references/loom-design-spec.md)
- [Cal.com](references/cal-design-spec.md)
- [Calendly](references/calendly-design-spec.md)
- [SavvyCal](references/savvycal-design-spec.md)
- [Amie](references/amie-design-spec.md)
- [folk](references/folk-design-spec.md)
- [Attio](references/attio-design-spec.md)
- [Front](references/front-design-spec.md)
- [SambaNova](references/sambanova-design-spec.md)
- [Figma](references/figma-design-spec.md)
- [Framer](references/framer-design-spec.md)
- [Spline](references/spline-design-spec.md)
- [Rive](references/rive-design-spec.md)
- [Readymag](references/readymag-design-spec.md)
- [Pitch](references/pitch-design-spec.md)
- [Descript](references/descript-design-spec.md)
- [Jitter](references/jitter-design-spec.md)
- [tldraw](references/tldraw-design-spec.md)
- [Penpot](references/penpot-design-spec.md)
- [Sketch](references/sketch-design-spec.md)
- [Procreate](references/procreate-design-spec.md)
- [Tally](references/tally-design-spec.md)
- [Kittl](references/kittl-design-spec.md)
- [Milanote](references/milanote-design-spec.md)
- [Visme](references/visme-design-spec.md)
- [Photopea](references/photopea-design-spec.md)
- [Linearity](references/linearity-design-spec.md)
- [CorelDRAW](references/coreldraw-design-spec.md)
- [Graphite](references/graphite-design-spec.md)
- [Anthropic](references/anthropic-design-spec.md)
- [Cursor](references/cursor-design-spec.md)
- [v0](references/v0-design-spec.md)
- [ElevenLabs](references/elevenlabs-design-spec.md)
- [Runway](references/runway-design-spec.md)
- [Synthesia](references/synthesia-design-spec.md)
- [Jasper](references/jasper-design-spec.md)
- [Grammarly](references/grammarly-design-spec.md)
- [Replicate](references/replicate-design-spec.md)
- [Together AI](references/together-design-spec.md)
- [Cohere](references/cohere-design-spec.md)
- [Devin Desktop](references/devin-design-spec.md)
- [DeepL](references/deepl-design-spec.md)
- [Fireflies](references/fireflies-design-spec.md)
- [Otter](references/otter-design-spec.md)
- [Writer](references/writer-design-spec.md)
- [AssemblyAI](references/assemblyai-design-spec.md)
- [Groq](references/groq-design-spec.md)
- [Cerebras](references/cerebras-design-spec.md)
- [Modal](references/modalai-design-spec.md)
- [Vercel](references/vercel-design-spec.md)
- [Supabase](references/supabase-design-spec.md)
- [Netlify](references/netlify-design-spec.md)
- [Render](references/render-design-spec.md)
- [Fly.io](references/fly-design-spec.md)
- [Cloudflare](references/cloudflare-design-spec.md)
- [Sentry](references/sentry-design-spec.md)
- [Postman](references/postman-design-spec.md)
- [Insomnia](references/insomnia-design-spec.md)
- [Resend](references/resend-design-spec.md)
- [Clerk](references/clerk-design-spec.md)
- [Auth0](references/auth0-design-spec.md)
- [Neon](references/neon-design-spec.md)
- [PlanetScale](references/planetscale-design-spec.md)
- [Upstash](references/upstash-design-spec.md)
- [Turso](references/turso-design-spec.md)
- [Convex](references/convex-design-spec.md)
- [Appwrite](references/appwrite-design-spec.md)
- [Bun](references/bun-design-spec.md)
- [Astro](references/astro-design-spec.md)
- [Stripe](references/stripe-design-spec.md)
- [Wise](references/wise-design-spec.md)
- [Monzo](references/monzo-design-spec.md)
- [Mercury](references/mercury-design-spec.md)
- [Ramp](references/ramp-design-spec.md)
- [Robinhood](references/robinhood-design-spec.md)
- [Square](references/square-design-spec.md)
- [Shopify](references/shopify-design-spec.md)
- [Mailchimp](references/mailchimp-design-spec.md)
- [Intercom](references/intercom-design-spec.md)
- [Apple](references/apple-design-spec.md)
- [IKEA](references/ikea-design-spec.md)
- [Sonos](references/sonos-design-spec.md)
- [Oatly](references/oatly-design-spec.md)
- [Uber](references/uber-design-spec.md)
- [GoPro](references/gopro-design-spec.md)
- [Duolingo](references/duolingo-design-spec.md)
- [Headspace](references/headspace-design-spec.md)
- [Oura](references/oura-design-spec.md)
- [Allbirds](references/allbirds-design-spec.md)
