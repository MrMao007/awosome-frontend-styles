# Supabase — Observed Homepage Design Paradigm

Source: [Supabase](https://supabase.com/). Category: Developer Tools. Capture: 2026-10-10T14:04:35.107Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A light, almost-white development platform with practical green actions, two-column introductory copy and a tightly integrated service bento. The observed page is light; the familiar dark-theme recollection is not used.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `oklch(0.99 0.00275 157.5)` | Computed style: textSamples[14].color, controls[12].color, controls[14].color. |
| surface | `oklch(1 0 337.5)` | Computed style: textSamples[15].parentBg, controls[0].bg, controls[0].parentBg. |
| ink | `oklch(0.1 0 337.5)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| muted | `oklch(0.52065 0 337.5)` | Computed style: headings[8].color, headings[9].color, headings[10].color. |
| accent | `oklch(0.525 0.12 157.5)` | Computed style: textSamples[1].color, textSamples[14].parentBg, controls[12].bg. |
| on-accent | `oklch(1 0 337.5)` | Computed style: textSamples[15].parentBg, controls[0].bg, controls[0].parentBg. |
| line | `oklch(0.1 0 337.5 / 0.0812725)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Build in a weekend Scale to millions | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 46px / 46px | 500 | normal |
| Postgres Database | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Authentication | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Edge Functions | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Storage | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Realtime | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Vector | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |
| Data APIs | Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 16px / 24px | 600 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Place the Chinese headline and description in parallel columns inside the observed 1088px content rail. Keep the hero short enough for the integrated cards to become the main visual, reflecting the source card grid starting at y=451. The source headline sampled at (176, 225) occupies 536 × 92px and uses 46px/46px, weight 500, tracking normal. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

The first metric is double width; capabilities form a 4-unit bento with two wider cells. Service titles are modest and medium-weight, fine neutral borders use the measured OKLCH alpha, and compact 8px action corners contrast with 16px card corners. A sampled div at (176, 451) is 538 × 400px; background oklch(1 0 337.5), border 0px solid oklch(0.1 0 337.5 / 0.0812725), radius 16px, padding 1px. A sampled div at (177, 452) is 536 × 398px; background oklch(1 0 337.5), border 0px solid oklch(0.1 0 337.5 / 0.0812725), radius 15px, padding 24px 16px. A sampled div at (726, 451) is 263 × 400px; background oklch(1 0 337.5), border 0px solid oklch(0.1 0 337.5 / 0.0812725), radius 16px, padding 1px. A sampled div at (727, 452) is 261 × 398px; background oklch(1 0 337.5), border 0px solid oklch(0.1 0 337.5 / 0.0812725), radius 15px, padding 24px 16px.

## Product Visualization and Background Language

Table-line panels and offset database rings suggest integrated data services without copying the elephant logo, authentication addresses or deployment command. Green appears on actions and numeric signals, not every surface. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Preserve all six NOVA features and filters. The source small service headings inspire 19px localized card titles; the three fixed metrics become a 2:1:1 service-row arrangement. The weekly chart remains the real NOVA 42/68/84/96 data, not source database metrics.

The observed source display family is Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif. The configured display stack is 'Manrope','Noto Sans SC',sans-serif; the UI font reference is Manrope from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Operations suites, educational platforms, and multi-capability productivity applications. Avoid when: A cinematic hero or highly expressive consumer identity is required.

### Signature Atoms

- Canvas oklch(0.99 0.00275 157.5), white surface oklch(1 0 337.5), green oklch(0.525 0.12 157.5).
- Manrope with Noto Sans SC; adapted display 46px, weight 500, line-height 1.15, tracking -.035em.
- 1088px content rail; parallel hero columns with 55px gaps and a short 425px minimum hero.
- 16px card corners, 8px action corners, 12px bento gaps; first metric spans the larger 2fr column.
- Four-unit feature bento with selected double-width cells; 19px titles at weight 600.
- Table-line decorations repeat every 18px; offset 140px rings suggest data geometry without a screenshot.

### Do

- Use open-source Manrope and Noto Sans SC for approachable, medium-weight typography.
- Keep the introduction brief so the integrated capability bento becomes the principal visual.
- Give selected cells extra width while maintaining tight, consistent gutters.
- Apply green to actions and numeric signals; keep most cards white with fine neutral borders.
- Use empty table rows and offset rings as restrained decoration, not a fabricated application interface.

### Don't

- Do not replace the observed light treatment with a dark database theme.
- Do not enlarge the headline into a cinematic wall of type.
- Do not use pill corners for every control or round all surfaces equally.
- Do not flood cards with green fills, glowing borders, or large elevation shadows.
- Do not copy Supabase logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: oklch(0.99 0.00275 157.5);
  --surface: oklch(1 0 337.5);
  --ink: oklch(0.1 0 337.5);
  --muted: oklch(0.52065 0 337.5);
  --accent: oklch(0.525 0.12 157.5);
  --on-accent: oklch(1 0 337.5);
  --line: oklch(0.1 0 337.5 / 0.0812725);
  --radius: 16px;
  --button-radius: 8px;
  --weight: 500;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/supabase.html) and [preview](../examples/supabase.png). [Style selection index](STYLE_INDEX.md).
