# Replicate — Observed Homepage Design Paradigm

Source: [Replicate](https://replicate.com/). Category: Developer Tools. Capture: 2026-10-10T14:08:09.199Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An expressive developer showcase: square black controls sit on a bright halftone image-like field, with heavy white type and an API/output demonstration. Below, category pills and square catalog tiles shift back to a practical marketplace.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(252, 252, 252)` | Computed on div at (64, 510); applied to the NOVA bg role. |
| ink | `rgb(32, 32, 32)` | Computed on div at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(100, 100, 100)` | Computed on a at (861, 57); applied to the NOVA muted role. |
| accent | `rgb(0, 0, 0)` | Computed on a at (64, 60); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (0, 8); applied to the NOVA on-accent role. |
| surface | `rgb(240, 240, 240)` | Computed on div at (736, 510); applied to the NOVA surface role. |
| line | `rgb(187, 187, 187)` | Exact value in the captured visible-element color histogram; selected after screenshot review. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Run AI with an API. | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 72px / 72px | 700 | -1.8px |
| Run and fine-tune models. Deploy custom models. All with one line of c | basier-square, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 24px / 32px | 400 | normal |
| Thousands of models contributed by our community | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 48px / 48px | 400 | normal |
| How it works | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 48px / 48px | 400 | normal |
| Run models | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 30px / 36px | 600 | normal |
| Fine-tune models with your own data | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 30px / 36px | 600 | normal |
| Deploy custom models | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 30px / 36px | 600 | normal |
| Scale on Replicate | rb-freigeist-neue, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 48px / 48px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The largest visible source text is an H2 at72px/72px, while the semantic H1 is the24px explanatory line. A672px-wide code pane begins x64/y510. NOVA preserves the visual hierarchy rather than incorrectly assuming H1 is always the biggest token.

## Component Grammar

Measured primary controls have0px radius, and the demo surface is flat white. Capability filters use outlined pills; inventory cards retain square borders and numbered metadata. Local decorative code lines do not expose tokens or copy original examples.

## Visual Treatment and Graphic Language

The capture has a pink-to-red halftone hero supplied as media, not a flat brand-color CSS token. NOVA uses a new CSS color field and fixed dots, explicitly interpretive. The factual palette table uses only captured neutral interface colors.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Developer showcases, creative marketplaces, technical launches and experimental tool catalogs. Avoid when: Conservative institutional reading or calm monochrome administration must dominate.

### Signature Atoms

- Neutral UI uses rgb(252,252,252) canvas, rgb(32,32,32) ink and rgb(240,240,240) secondary surfaces.
- Inter hero 67px, weight 700, line-height 1.12 and tracking -.045em; supporting line is 23px.
- Original hero color field mixes #572b84, #e44bed, #e94abc and #f32116 with a 6px dot grid at .18 opacity.
- Primary actions and catalog panels have 0px corners; black hero actions use 48px minimum height.
- Flat 278px-high demonstration pane uses a 60% white column and a secondary output column.
- Three-column catalog uses 28px gaps, 1px dark borders, monospace metadata and 999px outlined filter pills.

### Do

- Use Inter with Noto Sans SC; treat rb-freigeist-neue and basier-square as observed references only.
- Pair heavy white display text with an original vivid halftone field and flat demonstration geometry.
- Keep black primary controls and catalog cards square while allowing category filters to be outlined pills.
- Reset to neutral surfaces below the expressive hero and organize content as a practical bordered inventory.
- Use monospace labels and restrained metadata to balance the colorful first view with technical precision.

### Don't

- Do not copy Replicate logos, trademarks, product screenshots, generated media, code examples or marketing copy.
- Do not treat the interpretive pink-red hero colors as universal interface or brand tokens.
- Do not round every panel or add soft floating shadows to the square catalog.
- Do not assume the semantic H1 must always be the visually largest text on new content.
- Do not imply executable code or live output with blank decorative demonstration panes.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(252, 252, 252);
  --ink: rgb(32, 32, 32);
  --muted: rgb(100, 100, 100);
  --accent: rgb(0, 0, 0);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(240, 240, 240);
  --line: rgb(187, 187, 187);
  --radius: 0px;
  --weight: 700;
  --button-radius: 0px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/replicate.html) and [preview](../examples/replicate.png). [Style selection index](STYLE_INDEX.md).
