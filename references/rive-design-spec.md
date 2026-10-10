# Rive — Observed Homepage Design Paradigm

Source: [Rive](https://rive.app/). Category: Design & Creation. Capture: 2026-10-10T14:26:33.885Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A compact interactive-engine console on black: a right-positioned technical statement, outlined industrial display type and a recessed action tray. The empty left region in the captured page is not invented into a fully loaded animation.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(0, 0, 0)` | Computed nav text in source evidence; sampled element at x=220, y=0. |
| Ink | `rgb(255, 255, 255)` | Computed h1 text in source evidence; sampled element at x=589, y=322. |
| Primary action | `rgb(25, 242, 255)` | Repeated computed color, 2 occurrences in the captured viewport. Not an inferred official brand token. |
| Surface | `rgb(17, 17, 17)` | Computed div background in source evidence; sampled element at x=589, y=535. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| THE INTERACTIVE EXPERIENCE ENGINE | Orbitron, "Orbitron Placeholder", sans-serif | 40px / 48px | 900 | 0.4px |
| RIVE CLI | Tomorrow, "Tomorrow Placeholder", sans-serif | 14px / 14px | 500 | 1.4px |
| RIVE EDITOR | Tomorrow, "Tomorrow Placeholder", sans-serif | 14px / 14px | 500 | 1.4px |
| RIVE EDITOR | Tomorrow, "Tomorrow Placeholder", sans-serif | 14px / 14px | 500 | 1.4px |
| DESIGN, CODE, AND ANIMATE | Orbitron, "Orbitron Placeholder", sans-serif | 24px / 33.6px | 700 | normal |
| RIVE RUNTIMES | Tomorrow, "Tomorrow Placeholder", sans-serif | 14px / 14px | 500 | 1.4px |
| BUILD ONCE, SHIP ANYWHERE | Orbitron, "Orbitron Placeholder", sans-serif | 24px / 33.6px | 700 | normal |
| PRODUCTS BUILT WITH RIVE REACH OVER 2 BILLION USERS WORLDWIDE | Orbitron, "Orbitron Placeholder", sans-serif | 24px / 31.2px | 700 | 0.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The observed headline begins at x=589, y=322 in a 631 × 96px region. Computed Orbitron is 40px/48px, weight 900 and 0.4px tracking; the screenshot shows a sans-like rendered result and the font-face list contains its placeholder, so exact loading is not claimed. A 631 × 210px black console tray begins at x=589, y=535.

## Components and Controls

The console surface is rgb(17,17,17) with 4px corners. Header and editor actions are rgb(29,29,29), also 4px-radius, with modest uppercase labels. Secondary copy uses rgba(255,255,255,.6). Cyan rgb(25,242,255) and lime rgb(113,255,25) occur in the command example rather than a universal CTA fill.

## Graphic Language and Evidence Boundaries

The screenshot is overwhelmingly black, leaving a large unused left stage. NOVA interprets it with an anonymous outlined state diagram and an engine-console rhythm, not copied code, icons or a nonfunctional terminal. Sparse cyan lines are a documented extension of the measured command syntax color.

## Adaptation to the NOVA Example

NOVA uses a right-shifted industrial headline and a recessed rectangular action console on desktop. A static state diagram occupies the otherwise empty left region. Metrics form instrument readouts; capabilities are square technical tiles, and the data chart receives segmented tracks. Orbitron is an explicit open-source design choice, with Noto Sans SC for Chinese and Inter for body copy.

The observed display sample uses Orbitron, "Orbitron Placeholder", sans-serif, 40px / 48px, weight 900, tracking 0.4px. Original proprietary font files are not redistributed. Orbitron is the explicit open-source display substitute; Inter fills the body role. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Orbitron','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Engineering launches, simulation tools, technical demos, and hardware showcases. Avoid when: Warm lifestyle storytelling or decorative editorial reading is the priority.

### Signature Atoms

- Canvas #000000, ink #ffffff, console #111111, rules #262626, sparse cyan #19f2ff.
- Orbitron display 45px, weight 700, line-height 1.22, tracking .01em; Inter body with Noto Sans SC.
- Desktop content width 1000px; right-shifted copy max-width 630px; left state diagram 280px by 330px.
- Recessed action tray has 4px corners, 30px 20px padding, min-height 130px, and #1d1d1d controls.
- Technical tiles use 4px corners and 1px #262626 borders; tool labels use monospace at 11px.
- Chart tracks are 10px tall and square; cyan segments use an 8px fill followed by #111 gaps.

### Do

- Use open-source Orbitron for industrial headings, Inter for body copy, and Noto Sans SC for Chinese.
- Shift desktop copy right and preserve a sparse left technical stage with original outlined state geometry.
- Keep controls recessed and nearly rectangular; use cyan for fine guides, selected states, and instrument details.
- Set compact technical labels in monospace and align metrics as instrument readouts.
- Carry thin dark rules and segmented tracks through feature panels and charts.
- Restore normal left-to-right document flow and remove the state diagram on narrow screens.

### Don't

- Do not copy Rive logos, trademarks, code examples, product screenshots, animations, or marketing copy.
- Do not turn cyan command syntax into a universal bright CTA fill.
- Do not use soft pill controls, pastel cards, or diffuse rainbow glows.
- Do not fabricate a loaded animation or functioning terminal in the source's empty stage.
- Do not replace the asymmetric console rhythm with a centered lifestyle poster.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #000000;
  --ink: #ffffff;
  --muted: rgba(255,255,255,.6);
  --accent: #19f2ff;
  --on-accent: #000000;
  --surface: #111111;
  --line: #262626;
  --radius: 4px;
  --display: 'Orbitron','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 700;
  --button-radius: 4px;
}
```

Example: [HTML](../examples/rive.html) and [preview](../examples/rive.png). [Style selection index](STYLE_INDEX.md).
