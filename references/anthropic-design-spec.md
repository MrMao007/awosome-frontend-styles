# Anthropic — Observed Homepage Design Paradigm

Source: [Anthropic](https://www.anthropic.com/). Category: AI Products. Capture: 2026-10-10T14:02:22.056Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Warm institutional editorial design: heavy sans-serif statements counterbalanced by serif reading text, paper-colored fields, very limited chromatic accent and low ornament.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(240, 238, 230)` | Computed on main at (0, 0); applied to the NOVA bg role. |
| ink | `rgb(20, 20, 19)` | Computed on main at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(20, 20, 19)` | Computed on main at (0, 0); applied to the NOVA muted role. |
| accent | `rgb(20, 20, 19)` | Computed on main at (0, 0); applied to the NOVA accent role. |
| on-accent | `rgb(250, 249, 245)` | Computed on main at (0, 0); applied to the NOVA on-accent role. |
| surface | `rgb(250, 249, 245)` | Computed on main at (0, 0); applied to the NOVA surface role. |
| line | `rgba(20,20,19,.18)` | Local supporting UI value for contrast or separation, not claimed to be a measured brand color. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| AI research and products that put safety at the frontier AI research a | "Anthropic Sans", Arial, sans-serif | 60.8653px / 66.9518px | 700 | normal |
| Claude  Haiku 5.5 | "Anthropic Serif", Georgia, sans-serif | 79.72px / 92.236px | 400 | -1.1958px |
| Latest releases | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |
| Introducing Haiku 5.5 | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |
| Introducing Sonnet 5.5 | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |
| Introducing Opus 5.5 | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |
| At Anthropic, we build AI to serve humanity’s long-term well-being. | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |
| ‍ | "Anthropic Sans", Arial, sans-serif | 24px / 31.2px | 600 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The capture places the headline at x78/y219 in a 736px-wide region, with a serif explanatory column to its right. The next release block switches to centered composition on a lighter paper field. NOVA adopts the two-column opening and the alternating editorial rhythm.

## Component Grammar

Source controls are compact black rectangles with modest corner rounding. Cards use quiet rules instead of thick shadows. NOVA feature cards become an editorial index: a narrow numbered rail, heading, summary and a rule at the base.

## Visual Treatment and Graphic Language

The screenshot contains an arched fine-line motif in the centered release block. NOVA uses an abstract curved line behind the metrics, not the source release names or claims. Serif secondary headings are an explicit localized approximation.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Research institutes, policy publications, thoughtful professional services and editorial launches. Avoid when: Dense live dashboards or exuberant consumer campaigns need immediate visual energy.

### Signature Atoms

- Paper canvas rgb(240,238,230), ink rgb(20,20,19), lighter surface rgb(250,249,245).
- Inter headline 61px, weight 700, line-height 1.12, tracking -.06em; Noto Serif SC secondary headings 36px.
- Split introduction uses 1.35fr and 1fr columns, a 62px gap and 78px desktop gutters.
- Black rectangular buttons have 6px corners; flat content uses 1px rgba(20,20,19,.18) rules.
- A 130px-high curved outline with 50% radius and .35 opacity spans the lighter metrics field.
- Three-column editorial feature index uses 36px gaps, bottom rules and 25px sans-serif titles.

### Do

- Use Inter with Noto Sans SC for statements and Noto Serif SC for reading text; treat Anthropic Sans and Anthropic Serif as references only.
- Set a strong left statement beside a serif explanatory column, then alternate paper tones between sections.
- Organize capabilities as numbered editorial entries with open backgrounds and bottom rules.
- Keep actions compact, black and modestly rounded; reserve serif emphasis for secondary hierarchy.
- Use a single quiet curved line as decoration and stack the reading columns on narrow screens.

### Don't

- Do not copy Anthropic logos, trademarks, product screenshots, illustrations or marketing copy.
- Do not introduce saturated gradients, neon accents or an all-black technology canvas.
- Do not replace the sans-serif and serif contrast with one uniform geometric typeface.
- Do not turn editorial entries into floating shadowed cards or oversized pill controls.
- Do not center every section or bury the opening statement beneath a large product mockup.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(240, 238, 230);
  --ink: rgb(20, 20, 19);
  --muted: rgb(20, 20, 19);
  --accent: rgb(20, 20, 19);
  --on-accent: rgb(250, 249, 245);
  --surface: rgb(250, 249, 245);
  --line: rgba(20,20,19,.18);
  --radius: 0px;
  --weight: 700;
  --button-radius: 6px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/anthropic.html) and [preview](../examples/anthropic.png). [Style selection index](STYLE_INDEX.md).
