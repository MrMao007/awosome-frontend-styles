# Groq — Observed Homepage Design Paradigm

Source: [Groq](https://groq.com/). Category: AI Products. Capture: 2026-10-10T14:07:38.792Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

An inference manifesto rather than a sales-card landing: a warm-gray canvas, bold paragraph-like statements in a narrow offset column and tiny orange pixel fragments scattered along the page margins. Monospace micro-labels provide an industrial tone.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(243, 243, 238)` | Computed on div at (0, 49); applied to the NOVA bg role. |
| ink | `rgb(48, 43, 40)` | Computed on div at (0, 49); applied to the NOVA ink role. |
| muted | `rgb(105, 105, 93)` | Computed on a at (784, 32); applied to the NOVA muted role. |
| accent | `rgb(244, 62, 1)` | Computed on a at (1125, 96); applied to the NOVA accent role. |
| on-accent | `rgb(243, 243, 238)` | Computed on div at (0, 49); applied to the NOVA on-accent role. |
| surface | `rgb(243, 243, 238)` | Computed on div at (0, 49); applied to the NOVA surface role. |
| line | `rgb(105, 105, 93)` | Computed on a at (784, 32); applied to the NOVA line role. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Every customer served. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| Every product sold. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| Every commit merged. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| Every agent task completed. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| That’s inference. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| Training creates the possibility. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| Inference creates the value. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |
| The more we ask of AI, the more inference it takes. | esBuild, "esBuild Fallback", "system-ui", "Helvetica Neue", Helvetica, Arial, "sans-serif" | 50.498px / 50.498px | 500 | -1.51494px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The source has no visible heading elements; its statement paragraphs use esBuild at50.498px/50.498px weight500 with -1.515px tracking, in a732px column starting x354/y289. NOVA keeps that left-aligned central column and unusually generous vertical pacing.

## Component Grammar

The header has thin rules and an orange outlined pill. NOVA metric cards become a linear typographic statement row; feature cards become an indexed list with strong horizontal dividers rather than a dense grid.

## Visual Treatment and Graphic Language

Measured accent is rgb(244,62,1) and canvas rgb(243,243,238). Screenshot-visible pixel fragments are adapted to original small CSS squares; no source slogans, funding claims or business examples are copied.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Space Grotesk is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Space Grotesk','Noto Sans SC',sans-serif; body: 'Space Grotesk','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Technical manifestos, industrial services, research narratives and focused engineering launches. Avoid when: Dense card catalogs or immersive media-first experiences require broad visual staging.

### Signature Atoms

- Canvas rgb(243,243,238), brown-black ink rgb(48,43,40), orange accent rgb(244,62,1).
- Space Grotesk hero 52px, weight 500, line-height 1.18 and tracking -.035em in a 732px column.
- Statement opening has 278px top padding; supporting line is 30px with 1.55 line-height.
- Orange fragments use 25px square blocks and a 13px by 54px bar near the margins.
- Indexed feature list uses 80px, 1fr and 1.3fr columns with 20px gaps and 1px #69695d66 dividers.
- Orange action pills use 999px radius and 12px monospace labels; delivered primary text is #171611.

### Do

- Use Space Grotesk with Noto Sans SC; treat esBuild as an observed source reference only.
- Build a narrow offset manifesto column with paragraph-like statements and unusually generous vertical pacing.
- Use orange only for small original pixel fragments, understated actions, indices and selected-tab accents.
- Replace card grids with linear metric rows and strongly ruled indexed feature entries.
- Use delivered #171611 text on orange primary actions and #b92700 secondary hero labels to retain readable contrast.
- Stack indexed entries on narrow screens and keep their numbers in normal flow so descriptions remain readable.

### Don't

- Do not copy Groq logos, trademarks, product screenshots, pixel arrangements, slogans or marketing copy.
- Do not turn the manifesto into a centered SaaS billboard with a large mockup beneath it.
- Do not add rounded floating cards, diffuse gradients or neon infrastructure glow.
- Do not fill the canvas with orange or let decorative pixel fragments overlap the statement column.
- Do not assume source paragraphs imply a missing heading hierarchy; use semantic headings appropriate to the new page.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(243, 243, 238);
  --ink: rgb(48, 43, 40);
  --muted: rgb(105, 105, 93);
  --accent: rgb(244, 62, 1);
  --on-accent: rgb(243, 243, 238);
  --surface: rgb(243, 243, 238);
  --line: rgb(105, 105, 93);
  --radius: 0px;
  --weight: 500;
  --button-radius: 999px;
  --display: 'Space Grotesk','Noto Sans SC',sans-serif;
  --body: 'Space Grotesk','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/groq.html) and [preview](../examples/groq.png). [Style selection index](STYLE_INDEX.md).
