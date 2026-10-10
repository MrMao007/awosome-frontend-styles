# Neon — Observed Homepage Design Paradigm

Source: [Neon](https://neon.com/). Category: Developer Tools. Capture: 2026-10-10T14:10:52.730Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A stripped-back black infrastructure page with a bottom-anchored hero, large blank upper stage, slim rules and selective green. The captured hero has no visible elaborate neon illustration; the adaptation preserves that evidence rather than inventing one.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(0, 0, 0)` | Computed style: headings[10].color, headings[10].border, headings[10].borderTop. |
| surface | `rgb(24, 25, 27)` | Computed style: controls[0].bg, controls[19].border, controls[19].borderTop. |
| ink | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| muted | `rgb(148, 151, 158)` | Computed style: controls[9].color, controls[9].border, controls[9].borderTop. |
| accent | `rgb(52, 213, 154)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |
| on-accent | `rgb(0, 0, 0)` | Computed style: headings[10].color, headings[10].border, headings[10].borderTop. |
| line | `rgb(48, 50, 54)` | Computed style: controls[0].borderTop, surfaces[5].borderTop. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The backend for apps and agents, built to scale on Lakebase  Postgres. | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 56px / 63px | 400 | -2.24px |
| Not just a Database. Neon is a complete backend platform with Authenti | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 44px / 49.5px | 400 | -1.76px |
| Ready for coding agents. Create and branch environments the way you wo | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 44px / 49.5px | 400 | -1.76px |
| Instant operations | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 20px | 400 | -0.32px |
| Branch everything | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 20px | 400 | -0.32px |
| Safe automation | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 20px | 400 | -0.32px |
| Scale from your first users to the Fortune 500. Startups ship on the s | Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 44px / 49.5px | 400 | -1.76px |
| WHERE STARTUPS START | GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace | 52px / 52px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use a 680px black stage with copy anchored low, following the source headline at y=518. Leave the upper area empty. The source proof rail becomes an open gray NOVA metric row instead of a glowing hero mockup. The source headline sampled at (32, 518) occupies 1152 × 126px and uses 56px/63px, weight 400, tracking -2.24px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

White pill actions and understated gray proof typography lead into split editorial sections: a narrow heading rail beside paired ruled features and a similarly aligned weekly chart. Square content cells contrast with the pill controls. A sampled a at (1015, 127) is 320 × 340px; background rgb(0, 0, 0), border 1px solid rgb(24, 25, 27), radius 0px, padding 24px. A sampled a at (634, 161) is 330 × 112px; background rgb(0, 0, 0), border 0px solid rgb(255, 255, 255), radius 0px, padding 16px. A sampled span at (635, 162) is 328 × 110px; background rgb(255, 255, 255), border 0px solid rgb(255, 255, 255), radius 0px, padding 0px. A sampled a at (634, 289) is 330 × 112px; background rgb(0, 0, 0), border 0px solid rgb(255, 255, 255), radius 0px, padding 16px.

## Product Visualization and Background Language

No fabricated hero image is introduced. The thin green bars of the genuine NOVA chart supply the infrastructure signal; green is the computed rgb(52,213,154) source accent. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Use open-source Inter as the same-family reference and Noto Sans SC for Chinese. Original semantic section order is retained even when CSS places capability headers beside the feature matrix. The source platform ownership statement and third-party logos are not copied.

The observed source display family is Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji". The configured display stack is 'Inter','Noto Sans SC',sans-serif; the UI font reference is Inter from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Infrastructure services, technical portfolios, analytics platforms, and sober product introductions. Avoid when: Visible hero illustration or energetic consumer storytelling is necessary.

### Signature Atoms

- Black rgb(0, 0, 0), surface rgb(24, 25, 27), muted rgb(148, 151, 158), green rgb(52, 213, 154).
- Inter with Noto Sans SC; adapted hero 56px, weight 400, line-height 1.18, tracking -.045em.
- 680px minimum hero with 320px top padding, copy anchored low, and no decorative hero image.
- White primary pills have 999px corners and 46px minimum height; content and modal corners are 0px.
- Capability and impact layouts use a 300px heading rail with 60px gaps; paired zero-gap feature cells.
- Rules rgb(48, 50, 54), open gray 46px metrics, and square green chart signals only 4px high.

### Do

- Use open-source Inter and Noto Sans SC with regular-weight display and monospaced detail labels.
- Anchor the hero copy low and preserve the empty black upper stage as a deliberate visual feature.
- Use white primary pills against square, finely ruled content cells.
- Align narrow section-heading rails beside paired capabilities and the chart.
- Reserve green for selected states and thin data signals; keep proof typography understated gray.

### Don't

- Do not infer a glowing hero illustration from the product name.
- Do not add a neon orb, elaborate database mockup, or luminous background mesh.
- Do not round content cells or elevate them into separated floating cards.
- Do not replace the low-anchored regular-weight composition with a centered heavy display.
- Do not copy Neon logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(0, 0, 0);
  --surface: rgb(24, 25, 27);
  --ink: rgb(255, 255, 255);
  --muted: rgb(148, 151, 158);
  --accent: rgb(52, 213, 154);
  --on-accent: rgb(0, 0, 0);
  --line: rgb(48, 50, 54);
  --radius: 0px;
  --button-radius: 999px;
  --weight: 400;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/neon.html) and [preview](../examples/neon.png). [Style selection index](STYLE_INDEX.md).
