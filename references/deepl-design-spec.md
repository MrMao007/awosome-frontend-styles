# DeepL — Observed Homepage Design Paradigm

Source: [DeepL](https://www.deepl.com/en). Category: AI Products. Capture: 2026-10-10T14:02:20.549Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Lightweight international productivity interface: thin centered typography, dark navy actions, a soft blue-lilac illumination field and a large translucent tool workspace with a white inner panel.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed on div at (0, 62); applied to the NOVA bg role. |
| ink | `rgb(41, 41, 41)` | Computed on h1 at (270, 98); applied to the NOVA ink role. |
| muted | `rgb(25, 25, 25)` | Computed on div at (0, 62); applied to the NOVA muted role. |
| accent | `rgb(15, 43, 70)` | Computed on a at (1177, 7); applied to the NOVA accent role. |
| on-accent | `rgb(245, 245, 245)` | Computed on a at (1269, 11); applied to the NOVA on-accent role. |
| surface | `rgb(245, 245, 245)` | Computed on a at (1269, 11); applied to the NOVA surface role. |
| line | `rgb(198, 198, 198)` | Computed on div at (0, 62); applied to the NOVA line role. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| AI solutions that help you get work done | robotoLatin, "robotoLatin Fallback", sans-serif | 48px / 57.6px | 300 | normal |
| Drag-and-drop translation for any file type | robotoLatin, "robotoLatin Fallback", sans-serif | 36px / 40px | 300 | normal |
| Trusted by over 200,000 businesses globally | robotoLatin, "robotoLatin Fallback", sans-serif | 18px / 27px | 500 | normal |
| Real-time voice translation that still sounds like you | robotoLatin, "robotoLatin Fallback", sans-serif | 48px / 50.4px | 300 | -0.96px |
| DeepL is transforming how 200,000+ businesses communicate globally | robotoLatin, "robotoLatin Fallback", sans-serif | 56px / 58.8px | 300 | -1.2px |
| Sumitomo Corporation | robotoLatin, "robotoLatin Fallback", sans-serif | 56px / 58.8px | 300 | -1.2px |
| Merck KGaA | robotoLatin, "robotoLatin Fallback", sans-serif | 56px / 58.8px | 300 | -1.2px |
| Cybozu | robotoLatin, "robotoLatin Fallback", sans-serif | 56px / 58.8px | 300 | -1.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The measured main headline is48px/57.6px at weight300. A1144×420 translucent workspace begins at x148/y352 with24px outer corners; its white inner panel has8px corners. NOVA adopts a centered opening and then a translucent capabilities workspace.

## Component Grammar

Source buttons use navy rgb(15,43,70), with8px corner rounding. Category selectors are pill tabs. NOVA retains navy actions and pill filters, while keeping the four original NOVA categories and dialog unchanged.

## Visual Treatment and Graphic Language

The blurred blue-lilac backdrop is visually observed in the source screenshot but not returned as a flat color token. The local CSS gradient is therefore documented as an approximation. The legal Roboto face closely matches the observed robotoLatin family.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Roboto is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Roboto','Noto Sans SC',sans-serif; body: 'Roboto','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: International services, productivity tools, professional utilities and calm workspace onboarding. Avoid when: Hard-edged industrial presentation or loud consumer campaigns require high visual aggression.

### Signature Atoms

- White canvas rgb(255,255,255), ink rgb(41,41,41), navy action rgb(15,43,70), pale surface rgb(245,245,245).
- Roboto hero 49px, weight 300, line-height 1.28 and tracking -.035em; section headings 35px.
- Translucent workspace uses 24px outer corners, rgba(255,255,255,.5) fill and 0 8px 32px #0000001f shadow.
- White inner feature panels and navy buttons use 8px corners; action minimum height is 44px.
- Original illumination uses #dce4ff and #cdeef9; pill filter rail has 999px radius and 5px padding.
- Workspace maximum width is 1144px; two-column feature panels use 18px gaps and 32px padding.

### Do

- Use open-source Roboto with Noto Sans SC at light display weights; treat robotoLatin as a source reference.
- Center a calm introduction and navy actions before the large translucent tool workspace.
- Use soft blue-lilac illumination as an original backdrop rather than a saturated action palette.
- Separate translucent outer framing from white inner panels, keeping shadows soft and concentrated.
- Keep pill category selectors distinct from modestly rounded navy controls and stack workspace panels on narrow screens.

### Don't

- Do not copy DeepL logos, trademarks, product screenshots, translation content, illustrations or marketing copy.
- Do not use heavy black billboard type or square industrial grids in place of the light workspace hierarchy.
- Do not let gradients tint body text, overpower navy actions or replace white inner surfaces.
- Do not apply glass translucency to every card or introduce neon outlines and deep floating shadows.
- Do not imply translation, file handling or account functionality with decorative workspace geometry.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(41, 41, 41);
  --muted: rgb(25, 25, 25);
  --accent: rgb(15, 43, 70);
  --on-accent: rgb(245, 245, 245);
  --surface: rgb(245, 245, 245);
  --line: rgb(198, 198, 198);
  --radius: 24px;
  --weight: 300;
  --button-radius: 8px;
  --display: 'Roboto','Noto Sans SC',sans-serif;
  --body: 'Roboto','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/deepl.html) and [preview](../examples/deepl.png). [Style selection index](STYLE_INDEX.md).
