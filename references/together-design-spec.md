# Together AI — Observed Homepage Design Paradigm

Source: [Together AI](https://www.together.ai/). Category: AI Products. Capture: 2026-10-10T14:08:21.800Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A pale atmospheric infrastructure split with floating translucent mechanical geometry. Heavy black-and-gray headline lines, a detached rounded navigation bar and small monospace action labels create a mix of approachable scale and engineering precision.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed on h2 at (48, 1939); applied to the NOVA bg role. |
| ink | `rgb(0, 0, 0)` | Computed on section at (0, 44); applied to the NOVA ink role. |
| muted | `rgb(0, 0, 0)` | Computed on section at (0, 44); applied to the NOVA muted role. |
| accent | `rgb(0, 0, 0)` | Computed on section at (0, 44); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on h2 at (48, 1939); applied to the NOVA on-accent role. |
| surface | `rgba(0, 0, 0, 0.08)` | Computed on a at (192, 489); applied to the NOVA surface role. |
| line | `rgb(189, 187, 255)` | Exact value in the captured visible-element color histogram; selected after screenshot review. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Build what's next on the AI Native Cloud | "The Future", Arial, sans-serif | 64px / 70.4px | 500 | -1.92px |
| The Together AI Platform | "The Future", Arial, sans-serif | 40px / 48px | 500 | -0.8px |
| Grounded in cutting-edge research | "The Future", Arial, sans-serif | 40px / 48px | 500 | -0.8px |
| AI natives build on Together AI | "The Future", Arial, sans-serif | 40px / 48px | 500 | -0.8px |
| What’s new at Together AI | "The Future", Arial, sans-serif | 40px / 48px | 500 | -0.8px |
| Start building on Together AI | "The Future", Arial, sans-serif | 40px / 48px | 500 | -0.8px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The captured H1 is64px/70.4px weight500 at x48/y269 in a656px column. The first section spans724px below the44px announcement strip. NOVA adopts that generous left introduction and right-side abstract mechanism.

## Component Grammar

Source primary actions are black4px rectangles; secondary actions use rgba(0,0,0,.08). The narrow lavender divider is measured rgb(189,187,255). Local features mix pale open panels and thin rule labels rather than uniform pill cards.

## Visual Treatment and Graphic Language

The source pale blue gradient and translucent3D mechanism are visually observed image treatments, not computed flat palette colors. NOVA creates original intersecting CSS discs and a pale illumination field, keeping them explicitly separate from measured neutral UI tokens.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Manrope is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Infrastructure launches, engineering services, scientific tools and approachable technical platforms. Avoid when: Dense console interfaces or highly ornamental consumer branding need stronger density.

### Signature Atoms

- White canvas rgb(255,255,255), black ink rgb(0,0,0), translucent secondary fill rgba(0,0,0,0.08).
- Manrope hero 61px, weight 500, line-height 1.2 and tracking -.05em; section headings 39px.
- Detached navigation sits 20px from the top and 16px from the sides with 8px corners.
- Left hero column is 700px wide; original pale illumination uses #e1f1fe and #e0effa.
- Abstract mechanism combines a 330px translucent disc and a 535px by 95px tilted purple ellipse.
- Actions use 4px corners, 42px minimum height and 12px monospace labels with .03em tracking.

### Do

- Use Manrope with Noto Sans SC for headings and body; treat The Future as an observed reference only.
- Build a generous left introduction opposite original intersecting translucent disc geometry.
- Keep the palette pale and neutral, restricting purple-blue tones to the abstract mechanism and small dividers.
- Float a restrained white navigation bar above the illumination field rather than enclosing the page in a heavy shell.
- Use small monospace actions, lightly separated inventory panels and a deliberate black contrast section below.

### Don't

- Do not copy Together AI logos, trademarks, product screenshots, mechanical artwork or marketing copy.
- Do not replace the pale atmosphere with a dark neon console or saturated page-wide gradient.
- Do not make the translucent mechanism a functional control or allow it to obstruct readable text.
- Do not use oversized pill actions, dense framed dashboards or deep shadows on every panel.
- Do not prescribe The Future font files or treat decorative disc colors as measured neutral UI tokens.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(0, 0, 0);
  --muted: rgb(0, 0, 0);
  --accent: rgb(0, 0, 0);
  --on-accent: rgb(255, 255, 255);
  --surface: rgba(0, 0, 0, 0.08);
  --line: rgb(189, 187, 255);
  --radius: 4px;
  --weight: 500;
  --button-radius: 4px;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/together.html) and [preview](../examples/together.png). [Style selection index](STYLE_INDEX.md).
