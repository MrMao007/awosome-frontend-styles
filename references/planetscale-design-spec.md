# PlanetScale — Observed Homepage Design Paradigm

Source: [PlanetScale](https://planetscale.com/). Category: Developer Tools. Capture: 2026-10-10T14:11:08.332Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A deliberately utilitarian monospace database homepage: compact 16px source headline, long technical paragraphs, black ruled logo matrix, yellow announcement band and orange rectangular actions. This capture must not be restyled as a huge glossy space-themed marketing page.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(250, 250, 250)` | Computed style: controls[1].bg. |
| surface | `rgb(255, 255, 255)` | Computed style: textSamples[1].color, textSamples[4].color, controls[0].color. |
| ink | `rgb(17, 17, 17)` | Computed style: textSamples[0].color, textSamples[1].bg, controls[0].bg. |
| muted | `rgb(65, 65, 65)` | Computed style: headings[1].color, headings[1].border, headings[1].borderTop. |
| accent | `rgb(243, 88, 21)` | Computed style: headings[0].borderTop, textSamples[3].border, textSamples[3].borderTop. |
| on-accent | `rgb(255, 255, 255)` | Computed style: textSamples[1].color, textSamples[4].color, controls[0].color. |
| line | `rgb(65, 65, 65)` | Computed style: headings[1].color, headings[1].border, headings[1].borderTop. |
| yellow | `rgb(251, 202, 0)` | Computed style: textSamples[0].parentBg. |
| blue | `rgb(11, 110, 197)` | Computed style: textSamples[12].color, textSamples[14].color, textSamples[16].color. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The world’s fastest and most scalable cloud databases | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Performance | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Uptime | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Cost | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Security | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Features | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| Shared PlanetScale features | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |
| PlanetScale Vitess features | ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace | 16px / 24px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Make the NOVA title intentionally compact at 25px within a left orange rule; the original line break is retained. A short introductory region leads directly into an edge-sharing ruled matrix, reflecting the source unusually dense, document-like reading order. The source headline sampled at (160, 152) occupies 1104 × 24px and uses 16px/24px, weight 700, tracking normal. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Use system monospace for Latin, explicit Noto Sans SC for Chinese, no card radii, 1px graphite borders and small blue technical labels. The feature matrix and metrics share table-like cells; the CTA repeats the observed yellow bar. A sampled div at (176, 464) is 219 × 128px; background rgba(0, 0, 0, 0), border 1px solid rgb(65, 65, 65), radius 0px, padding 0px. A sampled a at (393, 464) is 219 × 128px; background rgba(0, 0, 0, 0), border 1px solid rgb(65, 65, 65), radius 0px, padding 0px. A sampled div at (611, 464) is 219 × 128px; background rgba(0, 0, 0, 0), border 1px solid rgb(65, 65, 65), radius 0px, padding 0px. A sampled a at (828, 464) is 219 × 128px; background rgba(0, 0, 0, 0), border 1px solid rgb(65, 65, 65), radius 0px, padding 0px.

## Product Visualization and Background Language

No planet illustration is fabricated. The grid itself is the product visual language. All orange, yellow, blue, paper and graphite values are computed source samples; no third-party customer marks enter the generated HTML. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Source headline size 16px is reported exactly in the spec; Chinese increases to 25px for readability and clear hierarchy. NOVA numbers and all six features are preserved inside the compact table architecture. System monospace is legal and not a proprietary font substitution claim.

The observed source display family is ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace. The configured display stack is ui-monospace,'Noto Sans SC',monospace; the UI font reference is IBM Plex Mono from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: ui-monospace,'Noto Sans SC',monospace; body: 'IBM Plex Mono','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Technical documentation, comparison pages, specialist services, and dense capability catalogs. Avoid when: Large cinematic headlines or polished illustration-led marketing is expected.

### Signature Atoms

- Paper rgb(250, 250, 250), ink rgb(17, 17, 17), graphite rules rgb(65, 65, 65), yellow rgb(251, 202, 0).
- Use ui-monospace display, IBM Plex Mono for UI, and Noto Sans SC; adapted heading 25px, weight 700, line-height 1.6.
- Orange rgb(243, 88, 21), blue labels rgb(11, 110, 197); delivered primary labels #171717.
- Short 340px introduction on a 1088px rail; headline has a 2px orange left rule and zero tracking.
- All content and button corners 0px; three-column zero-gap matrices have 1px graphite borders.
- Yellow 24px announcement edge; small 22px section headings and outlined 12px chart tracks.

### Do

- Use system ui-monospace for display, open-source IBM Plex Mono for UI, and Noto Sans SC for Chinese.
- Keep the title compact and the reading order document-like, moving quickly into shared-edge matrices.
- Use square graphite table cells, small blue technical labels, and yellow announcement surfaces.
- Use the delivered dark primary-action labels on orange to maintain control contrast.
- Keep paragraphs and data legible on mobile without inflating the page into a large-display marketing template.

### Don't

- Do not fabricate a planet illustration, space scene, or glossy database hero.
- Do not enlarge the compact heading into an oversized centered display.
- Do not introduce pill controls, rounded cards, or soft floating shadows.
- Do not use low-contrast white primary labels on the orange action fill.
- Do not copy PlanetScale logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(250, 250, 250);
  --surface: rgb(255, 255, 255);
  --ink: rgb(17, 17, 17);
  --muted: rgb(65, 65, 65);
  --accent: rgb(243, 88, 21);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(65, 65, 65);
  --radius: 0px;
  --button-radius: 0px;
  --weight: 600;
  --yellow: rgb(251, 202, 0);
  --blue: rgb(11, 110, 197);
  --display: ui-monospace,'Noto Sans SC',monospace;
  --body: 'IBM Plex Mono','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/planetscale.html) and [preview](../examples/planetscale.png). [Style selection index](STYLE_INDEX.md).
