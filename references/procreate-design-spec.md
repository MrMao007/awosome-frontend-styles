# Procreate — Observed Homepage Design Paradigm

Source: [Procreate](https://procreate.com/). Category: Design & Creation. Capture: 2026-10-10T14:07:14.387Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An immersive artist’s stage: full-bleed creative footage, white type anchored low in the hero, then two large black product plates. The interface accent is a measured electric blue, while the saturated artwork is not promoted into a generic brand palette.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(0, 0, 0)` | Computed div background in source evidence; sampled element at x=0, y=0. |
| Ink | `rgb(255, 255, 255)` | Computed h2 text in source evidence; sampled element at x=434, y=523. |
| Primary action | `rgb(0, 118, 255)` | Computed a background in source evidence; sampled element at x=405, y=894. |
| Surface | `rgb(18, 18, 18)` | Computed div background in source evidence; sampled element at x=77, y=740. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Art is for everyone. | system-ui, sans-serif | 70px / 77px | 600 | -0.35px |
| LEARN & SUPPORT | system-ui, sans-serif | 18px / 17.64px | 600 | 0.9px |
| Procreate Beginners Series | system-ui, sans-serif | 30px / 33px | 600 | -0.15px |
| Lesson ideas | system-ui, sans-serif | 30px / 33px | 600 | -0.15px |
| We're hiring engineers. | system-ui, sans-serif | 60px / 60px | 600 | normal |
| STORIES & INSIGHT | system-ui, sans-serif | 18px / 17.64px | 600 | 0.9px |
| The making of Procreate 5.4, and crafting a whole new brush library. | system-ui, sans-serif | 24px / 31.2px | 600 | -0.12px |
| Procreate receives a shiny new look to feel at home on iPadOS 26. | system-ui, sans-serif | 24px / 31.2px | 600 | -0.12px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source H1 is x=434, y=523, 571 × 77px at 70px/77px system-ui weight 600. The navigation overlays the footage. Two dark product panels start at x=77 and x=736, y=740, each 627px wide with 24px corners. The lower positioning of the hero copy leaves the upper viewport to the art.

## Components and Controls

The product plates use rgb(18,18,18), secondary pills rgb(38,38,38), and Buy now uses rgb(0,118,255) with 100px pill corners. Secondary text is rgb(168,168,168). The adaptation retains real NOVA buttons rather than adding purchase claims or product prices.

## Graphic Language and Evidence Boundaries

The captured still shows a hand drawing on a tablet. No photograph, tablet UI or artwork is copied. The study uses large anonymous charcoal brush-like strokes, a dark lower gradient and an angled blue-edged canvas plane, preserving the spatial theater but not impersonating original illustrations.

## Adaptation to the NOVA Example

NOVA content sits lower on a dark abstract art stage, with blue pill controls and wide black tiles beneath. Metrics follow as a quiet dark strip. Capabilities use paired product-plate proportions, and the chart uses blue bars on graphite tracks. Inter approximates the system sans; Noto Sans SC provides Chinese at weight 600.

The observed display sample uses system-ui, sans-serif, 70px / 77px, weight 600, tracking -0.35px. Original proprietary font files are not redistributed. Inter is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Artist portfolios, creative launches, cultural campaigns, and visual learning pages. Avoid when: Text-first reading or compact administrative controls dominate the experience.

### Signature Atoms

- Canvas #000000, ink #ffffff, action #0076ff, product plates #121212, tracks #262626.
- Inter with Noto Sans SC; adapted heading 62px, weight 600, line-height 1.18, tracking -.025em.
- Hero min-height 880px and top padding 390px preserve a large upper art zone above centered copy.
- Blue and charcoal action pills use 100px corners with 44px hero min-height and 14px labels.
- Paired broad feature plates use 24px corners, 360px min-height, 40px padding, and 32px gaps.
- Angled art plane has 35px corners and a 12px #121212 frame; final blue CTA uses #061019 labels.

### Do

- Use Inter and Noto Sans SC at medium display weight with white headings on the dark stage.
- Anchor the main copy low enough to leave the upper viewport to original art or anonymous charcoal strokes.
- Use blue pill controls and pair large black product-like plates beneath the immersive opening.
- Keep artwork separate from interface tokens and use a dark overlay to protect text over imagery.
- Retain #061019 text on the final blue CTA and check action and muted-copy contrast across the dark page.
- Preserve broad visual rhythm on desktop, then hide the decorative art plane and stack plates on mobile.

### Don't

- Do not copy Procreate logos, trademarks, tablet screenshots, drawings, photographs, or marketing copy.
- Do not convert saturated source artwork into a universal rainbow interface theme.
- Do not move the copy to the very top and eliminate the immersive upper art zone.
- Do not replace paired broad dark plates with tiny pastel cards or sharp enterprise tiles.
- Do not revert the final blue CTA to pale labels after its delivered contrast correction.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #000000;
  --ink: #ffffff;
  --muted: #a8a8a8;
  --accent: #0076ff;
  --on-accent: #ffffff;
  --surface: #121212;
  --line: #262626;
  --radius: 24px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 600;
  --button-radius: 100px;
}
```

Example: [HTML](../examples/procreate.html) and [preview](../examples/procreate.png). [Style selection index](STYLE_INDEX.md).
