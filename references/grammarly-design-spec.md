# Grammarly — Observed Homepage Design Paradigm

Source: [Grammarly](https://www.grammarly.com/). Category: AI Products. Capture: 2026-10-10T14:07:05.268Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Confident writing-assistance simplicity: strong left-aligned black sans-serif headline, teal rectangular actions and a white document illustration with a small floating correction card. Trust content sits in spacious unboxed rows below.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed on h2 at (259, 4785); applied to the NOVA bg role. |
| ink | `rgb(14, 16, 26)` | Computed on div at (80, 721); applied to the NOVA ink role. |
| muted | `rgb(77, 83, 110)` | Computed on button at (266, 415); applied to the NOVA muted role. |
| accent | `rgb(2, 126, 111)` | Computed on a at (1272, 15); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on h2 at (259, 4785); applied to the NOVA on-accent role. |
| surface | `rgb(255, 255, 255)` | Computed on h2 at (259, 4785); applied to the NOVA surface role. |
| line | `rgb(77, 83, 110)` | Computed on button at (266, 415); applied to the NOVA line role. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| You think big. We’ll take care of the details. | matter, sans-serif | 52px / 58px | 670 | -0.52px |
| Better writing, better results | matter, sans-serif | 36px / 40px | 670 | -0.36px |
| Keep your voice, make it clear | matter, sans-serif | 36px / 40px | 670 | -0.36px |
| Get a read on your writing | matter, sans-serif | 36px / 40px | 670 | -0.36px |
| This is responsible AI | matter, sans-serif | 36px / 40px | 670 | -0.36px |
| Choose the right Grammarly plan | matter, sans-serif | 52px / 58px | 670 | -0.52px |
| Free | matter, sans-serif | 36px / 40px | 670 | -0.36px |
| $0 | matter, sans-serif | 36px / 40px | 670 | -0.36px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

Measured source headline is52px/58px weight670 in a624px region at x80/y159. The illustration occupies the right half, not a full-bleed backdrop. NOVA adopts this split and places an original blank review panel to the right.

## Component Grammar

The actual teal rgb(2,126,111) belongs to the CTA and review accents; raw browser blue links in the histogram are not a brand palette. NOVA uses restrained4px controls, rules and open feature rows, with no artificial gradient wash.

## Visual Treatment and Graphic Language

Source document UI contains writing content and a correction suggestion. NOVA uses only abstract lines and a teal outline; no original messages or account sign-up claims are transferred. Later supporting text uses the measured blue-gray rgb(77,83,110).

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Productivity services, review tools, professional guidance and clear benefit-led landing pages. Avoid when: Immersive media, ornate editorial styling or playful saturated spectacle must lead.

### Signature Atoms

- White canvas rgb(255,255,255), ink rgb(14,16,26), teal action rgb(2,126,111), muted text rgb(77,83,110).
- Inter hero 52px, weight 670, line-height 1.2 and tracking -.035em; section titles 36px.
- Left introduction uses 80px desktop gutters and a 620px text column beside a 365px document stage.
- Teal controls have 4px corners, 56px minimum height and 13px weight-650 labels.
- White correction pane uses a 2px teal outline and 12px corners over flat document rules.
- Open two-column features use 34px by 64px gaps and #d7d8de bottom rules; selected tabs have a 3px teal underline.

### Do

- Use Inter with Noto Sans SC for strong practical typography; treat matter as an observed source reference.
- Keep a confident left-aligned introduction and reserve the right half for original blank document geometry.
- Limit teal to actions, review outlines, selected-tab underlines and small feature metadata.
- Use open trust rows and ruled feature entries instead of a wall of boxed dashboard cards.
- Preserve high-contrast body copy, pale supporting sections and clearly outlined actionable controls.

### Don't

- Do not copy Grammarly logos, trademarks, product screenshots, correction messages, illustrations or marketing copy.
- Do not add a gradient wash, neon glow or browser-default blue as a second primary accent.
- Do not center the opening or make the document illustration a full-bleed backdrop.
- Do not use light serif headlines, oversized pill actions or heavily rounded content cards.
- Do not fabricate review suggestions or signup claims inside decorative document panes.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(14, 16, 26);
  --muted: rgb(77, 83, 110);
  --accent: rgb(2, 126, 111);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(77, 83, 110);
  --radius: 4px;
  --weight: 670;
  --button-radius: 4px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/grammarly.html) and [preview](../examples/grammarly.png). [Style selection index](STYLE_INDEX.md).
