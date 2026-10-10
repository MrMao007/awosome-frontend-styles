# Sketch — Observed Homepage Design Paradigm

Source: [Sketch](https://www.sketch.com/). Category: Design & Creation. Capture: 2026-10-10T14:07:03.004Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A designer’s editorial home: serif welcome at left, explanatory copy and action at right, a soft atmospheric background and a broad native-app preview. The split composition is essential; it is not a centered headline placed above standard cards.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(245, 245, 245)` | Computed div background in source evidence; sampled element at x=48, y=741. |
| Ink | `rgb(33, 33, 35)` | Computed h1 text in source evidence; sampled element at x=120, y=208. |
| Primary action | `rgb(21, 21, 21)` | Computed a background in source evidence; sampled element at x=782, y=336. |
| Surface | `rgb(255, 255, 255)` | Computed h3 text in source evidence; sampled element at x=764, y=2541. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Designers, welcome home. | Reckless, "serif" | 76px / 76px | 500 | -1.5px |
| Now in beta: Component variants and sections | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 17px / 24px | 600 | normal |
| Flexible foundations | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |
| Every point perfect | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |
| Zero to done | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |
| Offline? Any time | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |
| Let AI do the busywork | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |
| Create with focus (or friends) | InterVariable, Inter, system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 24px | 600 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The display starts at x=120, y=208 in a 570px-wide column. Reckless is 76px/76px, weight 500, -1.5px tracking. Supporting Inter copy sits at x=778, y=208 at 24px/32px. A white update banner measures 792 × 134px at x=324, y=527; a large app preview enters at y=741.

## Components and Controls

Primary actions are near-black rgb(21,21,21), white text and 24px corners, with inset highlights visible in the screenshot. The update slab has 20px corners, while the app preview has 26px top corners and rgb(245,245,245) fill. The study differentiates these component scales.

## Graphic Language and Evidence Boundaries

The source uses diffuse lavender and pink atmospheric lighting behind black type; these raster/artwork colors are not presented as measured brand tokens. The NOVA study uses a restrained neutral atmospheric wash and a single outlined spectral rim interpreted from the screenshot. A white product frame is an anonymous CSS silhouette.

## Adaptation to the NOVA Example

The unchanged NOVA heading is placed left; the subtitle and working actions detach to a right column on wide screens and return to flow on mobile. Metrics become a centered update-like banner, capabilities form a native-app tile grid, and the weekly chart receives inset tracks. DM Serif Display plus Noto Serif SC is the explicit headline substitution.

The observed display sample uses Reckless, "serif", 76px / 76px, weight 500, tracking -1.5px. Original proprietary font files are not redistributed. DM Serif Display is the explicit open-source display substitute; Inter fills the body role. Chinese uses Noto Serif SC for display and Noto Sans SC for body as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'DM Serif Display','Noto Serif SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Boutique services, thoughtful product launches, editorial portfolios, and creative communities. Avoid when: Dense operational data or an aggressive full-screen campaign is primary.

### Signature Atoms

- Canvas #f5f5f5, ink #212123, action #151515 with #ffffff labels; white content surfaces.
- DM Serif Display with Noto Serif SC; adapted heading 65px, weight 400, line-height 1.18, tracking -.05em.
- Inter body with Noto Sans SC; desktop heading column 570px and detached supporting copy at 23px.
- Primary controls use 24px corners, 52px min-height, a 3px #d2c7d2 rim, and inset highlights.
- Native-app stage starts at 650px with 26px top corners and a restrained perspective tilt.
- Centered white metric slab uses 20px corners; white feature panels share 20px corners and #dedee4 rules.

### Do

- Use DM Serif Display and Noto Serif SC for editorial headings, contrasting Inter and Noto Sans SC body text.
- Keep the title at left and detach explanatory copy and actions into the right desktop column.
- Use a diffuse neutral atmospheric wash behind dark typography, not a measured multicolor brand palette.
- Give black actions a subtle inset highlight and distinguish their corners from the update slab and app frame.
- Place an original wide native-app silhouette below the split hero and use a centered update-like metric slab.
- Restore detached content to normal flow and hide the preview on mobile before it overlaps the text.

### Don't

- Do not copy Sketch logos, trademarks, product screenshots, interface artwork, or marketing copy.
- Do not center all hero content or replace the serif welcome with a generic heavy SaaS slogan.
- Do not promote source atmospheric artwork colors into exact unmeasured interface tokens.
- Do not use one uniform pill radius across buttons, update slabs, and native-app frames.
- Do not add intense glows, hard brutalist borders, or saturated backgrounds to every panel.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #f5f5f5;
  --ink: #212123;
  --muted: #212123;
  --accent: #151515;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --line: rgba(0,0,0,.18);
  --radius: 20px;
  --display: 'DM Serif Display','Noto Serif SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 500;
  --button-radius: 24px;
}
```

Example: [HTML](../examples/sketch.html) and [preview](../examples/sketch.png). [Style selection index](STYLE_INDEX.md).
