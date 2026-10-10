# Fly.io — Observed Homepage Design Paradigm

Source: [Fly.io](https://fly.io/). Category: Developer Tools. Capture: 2026-10-10T14:07:36.123Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A welcoming, illustrative infrastructure site: serif Latin headline, violet controls and a sky-to-pink scenic hero. The capture is playful and paper-like rather than the black terminal aesthetic of neighboring developer products.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed style: headings[23].color, textSamples[15].color, controls[0].bg. |
| surface | `rgb(244, 246, 235)` | Computed style: surfaces[2].bg. |
| ink | `rgb(40, 25, 80)` | Computed style: textSamples[17].color, textSamples[18].color, textSamples[19].color. |
| muted | `rgb(104, 96, 130)` | Computed style: textSamples[2].color, textSamples[3].color, textSamples[4].color. |
| accent | `rgb(124, 58, 237)` | Computed style: textSamples[15].bg, controls[21].color, controls[22].bg. |
| on-accent | `rgb(255, 255, 255)` | Computed style: headings[23].color, textSamples[15].color, controls[0].bg. |
| line | `rgb(231, 230, 244)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. Interpretation / adaptation value; not independently established as an exact source token. |
| sky | `rgb(202, 227, 253)` | Source PNG RGB pixel at desktop coordinate (15, 120); image/composite sample, not an inferred CSS brand token. |
| rose | `rgb(237, 213, 223)` | Source PNG RGB pixel at desktop coordinate (15, 780); image/composite sample, not an inferred CSS brand token. |
| pale | `rgb(230, 224, 254)` | Computed style: controls[21].bg. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Computers for agents | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 72px / 68.4px | 500 | -1.44px |
| Teams building on Fly.io | "Fricolage Grotesque", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 24px | 325 | normal |
| Sprites: where your agent runs. Machines: where you run what it builds | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 36px / 41.4px | 500 | -0.72px |
| Sprites | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 24px / 27.6px | 500 | -0.48px |
| Machines | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 24px / 27.6px | 500 | -0.48px |
| Your Agent's Favorite Cloud | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 36px / 41.4px | 500 | -0.72px |
| Machines that Remember | Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif | 36px / 41.4px | 500 | -0.72px |
| Coding Agents | "Fricolage Grotesque", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 19px / 28.5px | 450 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use the source 96px white navigation followed by a broad pastel landscape. Chinese copy stays on the left and abstract dimensional compute shapes occupy the right. The three NOVA metrics become a generous open trust row below the landscape. The source headline sampled at (74, 324) occupies 1292 × 137px and uses 72px/68.4px, weight 500, tracking -1.44px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Keep medium-small violet buttons with 6px corners, comfortable cream feature sections and softly offset card edges. The weekly chart is a lightly rotated lavender panel; capabilities are paired rather than packed into a dense three-column matrix. A sampled header at (0, 0) is 1440 × 96px; background rgb(255, 255, 255), border 0px solid rgb(231, 230, 244), radius 0px, padding 0px 80px. A sampled div at (0, 0) is 1440 × 7417px; background rgb(255, 255, 255), border 0px solid rgb(231, 230, 244), radius 0px, padding 0px. A sampled div at (0, 96) is 1440 × 744px; background rgb(244, 246, 235), border 0px solid rgb(231, 230, 244), radius 0px, padding 0px.

## Product Visualization and Background Language

Sky and rose are explicitly sampled image pixels, not claimed source CSS tokens. Violet outlined rounded cuboids and a looping orbit replace the illustrated birds, winged servers and flowing ribbons without copying those assets. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Georgia is a system-serif substitute for Mackinac on Latin; Chinese headings still use Noto Sans SC and are not falsely described as a measured Chinese serif face. Hero, chart tilt, two-column features and pastel landscape define the adaptation, while original NOVA text and functionality stay unchanged.

The observed source display family is Mackinac, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif. The configured display stack is Georgia,'Noto Sans SC',serif; the UI font reference is Manrope from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: Georgia,'Noto Sans SC',serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Learning tools, community products, creative utilities, and approachable technical services. Avoid when: Severe corporate minimalism or dense terminal-like presentation is required.

### Signature Atoms

- Sky rgb(202, 227, 253), rose rgb(237, 213, 223), cream rgb(244, 246, 235), violet rgb(124, 58, 237).
- System Georgia display with Noto Sans SC; Manrope body; adapted hero 68px, weight 500, line-height 1.13.
- 96px white navigation above a 745px pastel hero; left copy is balanced by right-side cuboid and orbit geometry.
- 6px action corners, 18px paired feature cards, 32px card gaps, and a 5px offset neutral card edge.
- Decorative cuboid has 2px outlines and 25px radius; looping orbit has a 13px border.
- Lavender chart rgb(230, 224, 254), 24px radius, -2deg rotation, and 18px tracks.

### Do

- Use system Georgia for Latin display, open-source Manrope for UI, and Noto Sans SC for Chinese; reference Mackinac only.
- Use a spacious pastel landscape rather than a black terminal stage.
- Draw original rounded cuboids and a looping orbit to suggest dimensional, friendly technology.
- Pair white feature cards over cream, using a small offset edge instead of dramatic elevation.
- Remove decorative hero shapes and straighten the tilted chart on narrow screens.

### Don't

- Do not replace the warm scenic palette with monochrome infrastructure styling.
- Do not describe Chinese Noto Sans SC headings as a measured serif face.
- Do not crowd capabilities into a dense three-column matrix.
- Do not add aggressive neon halos, thick black slabs, or uniformly pill-shaped controls.
- Do not copy Fly.io logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --surface: rgb(244, 246, 235);
  --ink: rgb(40, 25, 80);
  --muted: rgb(104, 96, 130);
  --accent: rgb(124, 58, 237);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(231, 230, 244);
  --radius: 18px;
  --button-radius: 6px;
  --weight: 500;
  --sky: rgb(202, 227, 253);
  --rose: rgb(237, 213, 223);
  --pale: rgb(230, 224, 254);
  --display: Georgia,'Noto Sans SC',serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/fly.html) and [preview](../examples/fly.png). [Style selection index](STYLE_INDEX.md).
