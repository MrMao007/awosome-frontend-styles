# Turso — Observed Homepage Design Paradigm

Source: [Turso](https://turso.tech/). Category: Developer Tools. Capture: 2026-10-10T14:06:07.828Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A dark framed database architecture page with an aqua announcement rail, heavy sans display, a real code-window visual and carefully separated proof cells. It is more dense and practical than the sparse Neon or Resend captures.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(16, 19, 23)` | Computed style: surfaces[0].bg, surfaces[1].parentBg. |
| surface | `rgb(13, 19, 24)` | Computed style: textSamples[6].color, textSamples[6].border, textSamples[6].borderTop. |
| ink | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| muted | `rgba(255, 255, 255, 0.6)` | Computed style: textSamples[16].color, surfaces[4].color. |
| accent | `rgb(79, 248, 210)` | Computed style: headings[17].borderTop, headings[18].borderTop, textSamples[1].color. |
| on-accent | `rgb(13, 19, 24)` | Computed style: textSamples[6].color, textSamples[6].border, textSamples[6].borderTop. |
| line | `rgba(40, 57, 69, 0.8)` | Computed style: surfaces[2].border, surfaces[2].borderTop. Interpretation / adaptation value; not independently established as an exact source token. |
| pink | `rgb(232, 121, 249)` | Computed style: textSamples[19].color, textSamples[19].border, textSamples[19].borderTop. |
| blue | `rgb(125, 211, 252)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Millions of Databases. One Architecture. | __Inter_f367f3, __Inter_Fallback_f367f3 | 60px / 60px | 800 | -1.5px |
| The database wasn't built for a world where every agent wants its own. | __Inter_f367f3, __Inter_Fallback_f367f3 | 36px / 40px | 700 | -0.9px |
| Centralized Model | __Inter_f367f3, __Inter_Fallback_f367f3 | 20px / 28px | 600 | normal |
| Five properties of the architecture, not features layered on top. | __Inter_f367f3, __Inter_Fallback_f367f3 | 36px / 40px | 700 | -0.9px |
| A database per agent, user, or tenant | __Inter_f367f3, __Inter_Fallback_f367f3 | 18px / 28px | 600 | normal |
| Lightweight as a file, scalable as a cloud | __Inter_f367f3, __Inter_Fallback_f367f3 | 18px / 28px | 600 | normal |
| Economics that scale with you | __Inter_f367f3, __Inter_Fallback_f367f3 | 18px / 28px | 600 | normal |
| Private by design | __Inter_f367f3, __Inter_Fallback_f367f3 | 18px / 28px | 600 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Build a framed navigation above a balanced split hero: 530px NOVA text column left and an abstract terminal pane right. Follow it with a bordered metrics strip including a narrow introduction cell, reflecting the source proof rail. The source headline sampled at (137, 201) occupies 529 × 180px and uses 60px/60px, weight 800, tracking -1.5px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Use rounded 12px technical cards, monospaced detail labels, aqua pill actions and low-contrast slate borders. The metrics row is a single segmented frame, not three floating decorative cards. A sampled div at (0, 0) is 1440 × 8193px; background rgb(16, 19, 23), border 0px none rgb(255, 255, 255), radius 0px, padding 0px. A sampled div at (0, 0) is 1440 × 125px; background rgba(13, 19, 24, 0.7), border not represented by a single shorthand, radius 0px, padding 0px. A sampled div at (722, 181) is 581 × 416px; background rgb(13, 19, 24), border 1px solid rgba(40, 57, 69, 0.8), radius 12px, padding 0px. A sampled div at (137, 653) is 1166 × 94px; background rgba(0, 0, 0, 0), border 1px solid rgba(40, 57, 69, 0.6), radius 12px, padding 0px.

## Product Visualization and Background Language

The empty code-window bars use the measured aqua, blue and pink syntax colors, but no literal code or Turso API text is copied. There is no bull logo or source performance claim in the generated body. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Open-source Inter and Noto Sans SC replace the deployed Inter build name without redistributing source fonts. The NOVA chart and feature filters remain actual interactions, while the terminal is aria-hidden CSS geometry.

The observed source display family is __Inter_f367f3, __Inter_Fallback_f367f3. The configured display stack is 'Inter','Noto Sans SC',sans-serif; the UI font reference is Inter from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Technical utilities, performance-oriented services, analytics tools, and engineering product launches. Avoid when: Sparse editorial luxury or soft consumer storytelling should dominate.

### Signature Atoms

- Dark canvas rgb(16, 19, 23), surface rgb(13, 19, 24), aqua rgb(79, 248, 210).
- Inter with Noto Sans SC; adapted hero 58px, weight 800, line-height 1.1, tracking -.035em.
- Aqua 20px announcement edge; split hero has a 530px text column and a terminal pane capped at 580px.
- Terminal and technical cards have 12px corners and rgba(40, 57, 69, 0.8) outlines; primary actions use 999px corners.
- Decorative syntax bars use rgb(125, 211, 252), rgb(79, 248, 210), and rgb(232, 121, 249).
- One 12px proof frame contains a 250px introduction cell and shared-edge metrics; three-column cards have 18px gaps.

### Do

- Use open-source Inter and Noto Sans SC with heavy display and monospaced technical details.
- Balance the left hero copy with an original empty terminal pane on the right.
- Keep the announcement rail and primary pills aqua while borders remain subdued slate.
- Group proof into one segmented frame with a narrow introduction cell rather than floating metric cards.
- Use aqua, pink, and blue only for sparse abstract syntax bars and data signals.

### Don't

- Do not adopt the large empty hero stage of a sparse black editorial style.
- Do not add elaborate glow, pastel scenery, or photorealistic database imagery.
- Do not separate the proof rail into independently elevated rounded cards.
- Do not fill the decorative terminal with copied code, API names, or performance claims.
- Do not copy Turso logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(16, 19, 23);
  --surface: rgb(13, 19, 24);
  --ink: rgb(255, 255, 255);
  --muted: rgba(255, 255, 255, 0.6);
  --accent: rgb(79, 248, 210);
  --on-accent: rgb(13, 19, 24);
  --line: rgba(40, 57, 69, 0.8);
  --radius: 12px;
  --button-radius: 999px;
  --weight: 800;
  --pink: rgb(232, 121, 249);
  --blue: rgb(125, 211, 252);
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/turso.html) and [preview](../examples/turso.png). [Style selection index](STYLE_INDEX.md).
