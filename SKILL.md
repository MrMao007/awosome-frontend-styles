---
name: frontend-design-styles
description: Generates polished HTML and React front-end pages from ten curated HyperFrames visual systems. Use when users ask to design, restyle, or implement a landing page, portfolio, dashboard, campaign page, editorial page, presentation-like web page, or explicitly mention Creative Mode, BlockFrame, Biennale Yellow, Blue Professional, Bold Poster, Broadside, Capsule, Cartesian, Cobalt Grid, or Coral.
version: 1.0.0
---

# Frontend Design Styles

Generate production-ready HTML or React interfaces using one of ten bundled design specifications. Treat each specification as a system of fixed visual atoms, not a loose mood board.

## Supported styles

Read [references/STYLE_INDEX.md](references/STYLE_INDEX.md) to select a style, then read exactly one primary specification unless the user explicitly requests a hybrid.

- Creative Mode
- BlockFrame
- Biennale Yellow
- Blue Professional
- Bold Poster
- Broadside
- Capsule
- Cartesian
- Cobalt Grid
- Coral

## Workflow

1. Determine the output target.
   - Existing React project: follow its framework, component conventions, and styling approach.
   - New React artifact: create a self-contained component with defaults and no required props.
   - Static page: create one self-contained HTML file with inline CSS and JavaScript.
2. Determine the style.
   - If the user names a supported style, use it exactly.
   - If no style is named, use the selection matrix in `references/STYLE_INDEX.md` and state the recommendation briefly.
   - If two styles are equally suitable and the choice materially changes the result, ask the user.
3. Read the selected specification in `references/` before designing.
4. Extract its non-negotiable atoms: palette, type roles, border/shadow system, geometry, spacing, composition patterns, and explicit Do/Don't rules.
5. Map the content to a composition from the specification. Do not copy showcase text; apply the system to the user's content.
6. Implement semantic, accessible markup and responsive layout.
7. Validate visually at desktop and mobile widths. Fix overflow, clipping, unreadable contrast, broken fonts, and console errors before delivery.

## Style fidelity

- Preserve exact color values and font roles from the selected specification.
- Preserve stated numerical constraints such as border widths, shadow offsets, line heights, tracking, rotation ranges, grid modules, and accent-count limits.
- Follow every explicit Don't rule. Do not “improve” the style by adding forbidden gradients, shadows, radii, colors, or typefaces.
- If a value is explicitly unspecified, choose a restrained value consistent with nearby specified components and record it as an implementation choice.
- Never mix visual atoms from another bundled style unless the user explicitly requests a hybrid.
- Use the working principle “atoms sacred, composition free”: keep the system fixed while adapting layout to the content.

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

## HTML output

- Produce a single `.html` file unless the user asks for a project structure.
- Keep CSS and JavaScript inline.
- Use CSS custom properties for design tokens.
- External font imports are allowed; avoid dependencies that require a build step.
- Do not use browser storage APIs unless the user explicitly requests them.
- Add responsive behavior at least for desktop and mobile.

## React output

- Match the repository's existing toolchain and conventions.
- Prefer reusable sections and data-driven repeated content.
- Do not add dependencies when CSS and existing packages suffice.
- Components must have no required props unless integrated into an existing typed interface.
- Keep design tokens centralized in CSS variables or the project's theme layer.
- Do not replace an existing project's architecture merely to reproduce a style.

## Accessibility

- Use semantic landmarks and heading order.
- Ensure every interactive element has keyboard focus styling and meaningful labels.
- Maintain readable contrast even when the reference relies on subtle tones.
- Respect `prefers-reduced-motion` when motion is added.
- Decorative graphics must be hidden from assistive technology.

## Verification checklist

- [ ] The selected reference was read before implementation.
- [ ] Exact palette and type roles are used.
- [ ] Border, shadow, radius, and geometry rules match the specification.
- [ ] Accent count and surface restrictions are respected.
- [ ] No explicit anti-pattern appears.
- [ ] Desktop and mobile layouts were visually inspected.
- [ ] No horizontal overflow, clipped content, or browser console errors remain.
- [ ] Final files are placed in the user-visible output location.

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
