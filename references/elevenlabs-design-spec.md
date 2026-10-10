# ElevenLabs — Observed Homepage Design Paradigm

Source: [ElevenLabs](https://elevenlabs.io/). Category: AI Products. Capture: 2026-10-10T14:05:19.370Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A tactile sound-product showroom: light type, split introduction, warm off-white navigation and a wide rounded product deck. Multicolored spherical media specimens are the dominant graphic, not an all-over accent hue.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(253, 252, 252)` | Computed on div at (0, 112); applied to the NOVA bg role. |
| ink | `rgb(0, 0, 0)` | Computed on div at (0, 112); applied to the NOVA ink role. |
| muted | `rgb(119, 113, 105)` | Computed on h3 at (756, 3159); applied to the NOVA muted role. |
| accent | `rgb(0, 0, 0)` | Computed on div at (0, 112); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on a at (1055, 8); applied to the NOVA on-accent role. |
| surface | `rgb(245, 243, 241)` | Computed on div at (131, 487); applied to the NOVA surface role. |
| line | `rgb(229, 229, 229)` | Computed on div at (0, 112); applied to the NOVA line role. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Bringing technology to life | Waldenburg, "Waldenburg Fallback" | 48px / 52px | 300 | -0.96px |
| Powering the best enterprises, creators, and developers. From ElevenAg | Inter, "Inter Fallback" | 16px / 24px | 400 | 0.16px |
| Trusted by leading developers and enterprises | Inter, "Inter Fallback" | 16px / 24px | 400 | 0.16px |
| Two platforms built on the same research foundation | Waldenburg, "Waldenburg Fallback" | 36px / 42px | 300 | normal |
| ElevenCreative | Inter, "Inter Fallback" | 16px / 24px | 500 | 0.16px |
| ElevenAgents | Inter, "Inter Fallback" | 16px / 24px | 500 | 0.16px |
| Create, edit, and localize in one AI platform | Waldenburg, "Waldenburg Fallback" | 36px / 42px | 300 | normal |
| Create ultra-realistic speech, turn ideas into videos, compose music i | Inter, "Inter Fallback" | 16px / 24px | 400 | 0.16px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The first headline is 48px/52px with weight300 at x132/y232. The supporting text sits in a second 564px column. A 1178px-wide rounded tab/deck begins at y431, with visual spheres underneath. NOVA follows this split opening and low wide showroom.

## Component Grammar

Measured deck radius is24px and surface rgb(245,243,241). Primary actions are black pills, with white secondary pills. Feature cards use open showroom spacing and round abstract thumbnails rather than a dense dashboard.

## Visual Treatment and Graphic Language

The source spheres contain textured orange, pink and blue imagery. NOVA approximates the graphic category with CSS radial gradients; these decorative colors are explicitly adaptations, not sampled brand tokens. No source voice names, recordings or customer content is reused.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creative portfolios, tactile product showcases, media libraries and experiential service launches. Avoid when: Dense administrative workflows or hard-edged industrial information hierarchies are required.

### Signature Atoms

- Canvas rgb(253,252,252), black ink rgb(0,0,0), showroom surface rgb(245,243,241).
- Inter hero 48px, weight 300, line-height 1.18 and tracking -.05em; section headings 38px.
- Split opening uses equal columns, a 48px gap and 132px desktop gutters.
- Wide media deck uses 24px corners; black and white action pills use 999px radius and 44px minimum height.
- Original 256px sphere uses radial colors #fffbd8, #ffb059, #ed632c and #963c2a; feature spheres are 90px.
- Segmented filter rail uses #ebe8e4; selected white tab has 0 1px 5px #0000000a shadow.

### Do

- Use Inter with Noto Sans SC at light display weights; treat Waldenburg as a source reference only.
- Place the introduction in two calm columns above a broad, low rounded showroom.
- Keep UI controls black and white; confine warm and lilac color to original spherical specimens.
- Use open, centered feature groups and generous spacing instead of dense dashboard boxes.
- Use delivered #615b53 feature descriptions on warm surfaces where needed to preserve readable contrast.

### Don't

- Do not copy ElevenLabs logos, trademarks, product screenshots, sphere imagery, recordings or marketing copy.
- Do not promote decorative sphere colors into a page-wide action palette.
- Do not substitute heavy bold headlines or square industrial paneling for the light showroom language.
- Do not fill every feature with borders, large shadows or simulated audio controls.
- Do not let the sphere deck crowd the split introduction or compress its generous spacing.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(253, 252, 252);
  --ink: rgb(0, 0, 0);
  --muted: rgb(119, 113, 105);
  --accent: rgb(0, 0, 0);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(245, 243, 241);
  --line: rgb(229, 229, 229);
  --radius: 24px;
  --weight: 300;
  --button-radius: 999px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/elevenlabs.html) and [preview](../examples/elevenlabs.png). [Style selection index](STYLE_INDEX.md).
