# Writer — Observed Homepage Design Paradigm

Source: [Writer](https://writer.com/). Category: AI Products. Capture: 2026-10-10T14:06:55.671Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Black-stage enterprise storytelling with white geometric typography and a vivid violet conversion pill. The hero is centered; multiple white software cards flank a photographic subject. The visual tension is black space versus bright panels.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(0, 0, 0)` | Computed on div at (0, 0); applied to the NOVA bg role. |
| ink | `rgb(255, 255, 255)` | Computed on div at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(232, 235, 240)` | Computed on input at (490, 403); applied to the NOVA muted role. |
| accent | `rgb(85, 81, 255)` | Computed on a at (1301, 19); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (0, 0); applied to the NOVA on-accent role. |
| surface | `rgb(17, 24, 39)` | Computed on div at (1095, 557); applied to the NOVA surface role. |
| line | `rgba(228,233,255,.85)` | Local supporting UI value for contrast or separation, not claimed to be a measured brand color. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| From first touch to close. AI agents for marketing and revenue teams. | Poppins, sans-serif | 64px / 64px | 500 | -2px |
| Always on, across marketing and revenue | Poppins, sans-serif | 40px / 48px | 500 | -0.8px |
| Every brief starts smarter | Poppins, sans-serif | 18px / 21.6px | 500 | normal |
| FEATURES | Poppins, sans-serif | 14.093px / 16.9116px | 500 | 1.084px |
| CONNECTORS | Poppins, sans-serif | 14.093px / 16.9116px | 500 | 1.084px |
| Ship on-brand content assets at scale | Poppins, sans-serif | 18px / 21.6px | 500 | normal |
| FEATURES | Poppins, sans-serif | 14.093px / 16.9116px | 500 | 1.084px |
| CONNECTORS | Poppins, sans-serif | 14.093px / 16.9116px | 500 | 1.084px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

Measured source H1 is64px/64px weight500 with -2px tracking in an800px centered region at y185. The source CTA is embedded inside a pale email pill. NOVA keeps its own existing subtitle and actions, styling the action row as a pill without introducing an email form.

## Component Grammar

The source violet control is rgb(85,81,255), with50px to82px radius. The observed floating card has16px corners and a pale border. NOVA features become white framed panels on black, using controlled violet tags rather than ubiquitous glow.

## Visual Treatment and Graphic Language

The screenshot includes a person and an on-demand recording overlay. These are not copied. NOVA uses an original pastel graphic stage with blank white panel geometry and explicitly keeps the only modal as the unchanged NOVA start dialog.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Poppins is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Poppins','Noto Sans SC',sans-serif; body: 'Poppins','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Enterprise launches, premium services, professional platforms and high-contrast product storytelling. Avoid when: Long-form paper-like reading or compact neutral administration must dominate.

### Signature Atoms

- Black canvas rgb(0,0,0), white ink rgb(255,255,255), violet action rgb(85,81,255), dark surface rgb(17,24,39).
- Poppins hero 64px, weight 500, line-height 1.18 and tracking -.055em; supporting text 19px.
- Pale #e8ebf0 action rail has 999px radius and 5px padding; violet inner controls have 50px corners.
- Original 385px-high pastel stage uses #edbaa6, #a3b6eb and #dce1f3 with flanking white 16px panels.
- Two-column white feature panels use 25px gaps, 16px corners and 1px #e4e9ffd9 borders.
- White-card text is #111827 with #525a67 descriptions; violet tags sit on #ececff and dark chart corners are 16px.

### Do

- Use open-source Poppins with Noto Sans SC for white geometric headlines and supporting copy.
- Center the introduction on black and use a pale action rail containing a vivid violet conversion pill.
- Create an original pastel graphic stage with bright white flanking panel geometry, not borrowed portraits.
- Keep white software cards visually distinct from the dark canvas and use dark text within those cards.
- Restrict violet to conversion controls, small tags and data accents rather than ubiquitous glow.

### Don't

- Do not copy Writer logos, trademarks, product screenshots, depicted people, illustrations or marketing copy.
- Do not wash the entire page violet or replace black negative space with a generic gradient mesh.
- Do not use serif editorial headlines, hard square actions or dense tiny first-view type.
- Do not make the decorative action rail imply an email form without actual input behavior.
- Do not add recording overlays, extra dialogs or glowing outlines to every white panel.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(0, 0, 0);
  --ink: rgb(255, 255, 255);
  --muted: rgb(232, 235, 240);
  --accent: rgb(85, 81, 255);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(17, 24, 39);
  --line: rgba(228,233,255,.85);
  --radius: 16px;
  --weight: 500;
  --button-radius: 50px;
  --display: 'Poppins','Noto Sans SC',sans-serif;
  --body: 'Poppins','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/writer.html) and [preview](../examples/writer.png). [Style selection index](STYLE_INDEX.md).
