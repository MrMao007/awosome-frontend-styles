# Photopea — Observed Homepage Design Paradigm

Source: [Photopea](https://www.photopea.com/). Category: Design & Creation. Capture: 2026-10-10T14:28:27.695Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A practical browser photo editor presented through a restrained dark landing page: bold centered utility statement, outline pill action and a balanced photograph / explanation split. The atmospheric background is supporting color, not a neon interface.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(17, 20, 24)` | Computed div background in source evidence; sampled element at x=0, y=0. |
| Ink | `rgb(230, 230, 230)` | Computed h1 text in source evidence; sampled element at x=29, y=98. |
| Primary action | `rgb(255, 255, 255)` | Computed button text in source evidence; sampled element at x=590, y=310. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Free Online Photo Editor | "Open Sans", "Segoe UI", sans-serif | 62.4px / normal | 700 | -1.872px |
| Unlock your creativity with the best free photo editor. | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Fully Local | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Cost-Effective | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Convenient Editor | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Runs Everywhere | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Professional Editor | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |
| Full PSD support | "Open Sans", "Segoe UI", sans-serif | 23.4px / normal | 700 | -0.702px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source heading is 62.4px Open Sans, weight 700, -1.872px tracking, in a 1382 × 87px block starting x=29, y=98. The header is 67px high. Below the action, a square photo at x≈225 pairs with an explanatory column starting x=720. Four 23.4px bold subheadings form a vertically stacked feature list.

## Components and Controls

The header surface is rgb(17,20,24), text rgb(230,230,230). Both start actions use rgba(255,255,255,.03) fill with white text and 500px pill corners, plus a thin light outline. The study uses these restrained outline controls rather than a fictitious bright branded button.

## Graphic Language and Evidence Boundaries

The screenshot shows a laptop photograph over a muted, multicolor atmospheric background. The photograph and editor pixels are not copied. NOVA replaces them with a square anonymous crop-grid plane and a subdued neutral atmosphere; exact source glow colors are not claimed as tokens.

## Adaptation to the NOVA Example

NOVA adopts a centered utility headline, outline capsule actions and a wide crop-grid preview. The capability section becomes a split editorial composition through wide tiles and thin feature separators. Metrics remain light text on a dark field, and the weekly chart uses fine monochrome bars. Open Sans retains the Latin role; Noto Sans SC explicitly localizes Chinese.

The observed display sample uses "Open Sans", "Segoe UI", sans-serif, 62.4px / normal, weight 700, tracking -1.872px. Original proprietary font files are not redistributed. Open Sans is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Open Sans','Noto Sans SC',sans-serif; body: 'Open Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Practical utilities, privacy tools, technical resources, and capability-led service launches. Avoid when: Bright playful campaigns or luxurious decorative editorial design must lead.

### Signature Atoms

- Canvas #111418, display #e6e6e6, supporting text #b6b6b6, action text #ffffff.
- Open Sans with Noto Sans SC; adapted headline 58px, weight 700, line-height 1.2, tracking -.035em.
- Header height 67px; centered hero copy max-width 1150px; crop-grid stage starts at 510px.
- Hero actions use 500px corners, 60px min-height, 19px bold labels, #ffffff08 fill, and thin light outlines.
- Preview has 24px corners and a 35%-wide crop plane with a thirds grid; explanatory rules occupy the other side.
- Feature tiles share square edges and #ffffff24 separators; monochrome chart bars are 7px tall.

### Do

- Use Open Sans and Noto Sans SC for a bold centered utility statement and clear explanatory copy.
- Keep the page dark with muted neutral atmospheric light rather than neon interface accents.
- Style primary and secondary hero actions as lightly filled outline capsules with white labels.
- Pair an original crop-grid plane with an explanatory column beneath the headline.
- Use fine separators, wide feature tiles, quiet metrics, and narrow monochrome chart bars.
- Remove the crop-grid stage and stack explanatory sections on mobile without losing the utility-first hierarchy.

### Don't

- Do not copy Photopea logos, trademarks, photographs, editor screenshots, or marketing copy.
- Do not invent a bright branded CTA color or replace outline actions with solid neon controls.
- Do not treat atmospheric source artwork as exact measured glow tokens.
- Do not turn the balanced image-and-explanation composition into floating glossy dashboard cards.
- Do not use decorative serif type, pastel surfaces, or an oversized cinematic poster headline.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #111418;
  --ink: #e6e6e6;
  --muted: #b6b6b6;
  --accent: #ffffff;
  --on-accent: #111418;
  --surface: rgba(255,255,255,.03);
  --line: rgba(230,230,230,.35);
  --radius: 24px;
  --display: 'Open Sans','Noto Sans SC',sans-serif;
  --body: 'Open Sans','Noto Sans SC',sans-serif;
  --weight: 700;
  --button-radius: 500px;
}
```

Example: [HTML](../examples/photopea.html) and [preview](../examples/photopea.png). [Style selection index](STYLE_INDEX.md).
