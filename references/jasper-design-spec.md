# Jasper — Observed Homepage Design Paradigm

Source: [Jasper](https://www.jasper.ai/). Category: AI Products. Capture: 2026-10-10T14:06:46.008Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A high-contrast typographic marketing collage: large editorial serif headings, navy copy, orange-red square actions and vivid geometric graphics beneath. It intentionally differs from soft rounded enterprise SaaS systems.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(242, 242, 243)` | Computed on div at (0, 0); applied to the NOVA bg role. |
| ink | `rgb(0, 6, 61)` | Computed on div at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(0, 6, 61)` | Computed on div at (0, 0); applied to the NOVA muted role. |
| accent | `rgb(250, 64, 40)` | Computed on a at (20, 21); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (0, 0); applied to the NOVA on-accent role. |
| surface | `rgb(255, 255, 255)` | Computed on div at (0, 0); applied to the NOVA surface role. |
| line | `rgb(0, 6, 61)` | Computed on div at (0, 0); applied to the NOVA line role. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Put AI agents to work for marketing | Feature, Georgia, sans-serif | 80px / 80px | 450 | -2.4px |
| World-class marketing teams trust Jasper | Feature, Georgia, sans-serif | 24px / 26.4px | 450 | normal |
| The execution platform for intelligent marketing | Feature, Georgia, sans-serif | 54px / 56.7px | 450 | -1.62px |
| Agents | Feature, Georgia, sans-serif | 38px / 38px | 450 | -0.76px |
| Content Pipelines | Feature, Georgia, sans-serif | 38px / 38px | 450 | -0.76px |
| Jasper IQ | Feature, Georgia, sans-serif | 38px / 38px | 450 | -0.76px |
| Why modern marketing teams choose Jasper | Feature, Georgia, sans-serif | 54px / 56.7px | 450 | -1.62px |
| Get cited by AI, the new front door of search | Feature, Georgia, sans-serif | 24px / 26.4px | 450 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

Source headline uses Feature at80px/80px with weight450 and -2.4px tracking in a centered715px region. The first screen is a pale gray field with a graphic collage entering from the bottom. NOVA uses a Chinese serif substitute and an original geometric collage, not the depicted person.

## Component Grammar

The screenshot shows square CTA buttons and thin navy outlines. The generated capability cards use strict square geometry, oversize index numerals and contrast blocks rather than pill-card repetition. A soft mint chip only appears as a measured secondary color.

## Visual Treatment and Graphic Language

Source computed accent is rgb(250,64,40); source background is rgb(242,242,243). The graphic green/pink grid is visually observed, not returned as flat CSS tokens. NOVA interpretation labels the collage colors as decorative approximations rather than invented measured palette.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. DM Sans is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creative campaigns, cultural launches, editorial services and bold professional portfolios. Avoid when: Quiet administrative workflows or restrained monochrome documentation require minimal spectacle.

### Signature Atoms

- Canvas rgb(242,242,243), navy ink and rules rgb(0,6,61), action orange-red rgb(250,64,40).
- Noto Serif SC hero 68px, weight 500, line-height 1.24 and tracking -.06em; DM Sans supports body text.
- Buttons and content panels have 0px corners; actions use 48px minimum height and thin navy outlines.
- A 320px-high stepped collage combines #68bf48 grid fields, #00aeef rules and a rotated #fb64cc triangle.
- Connected two-column feature panels use 1px navy borders, 40px padding and rgb(230,255,217) contrast blocks.
- Serif metric figures are 61px; the delivered orange-red primary controls use #070707 text.

### Do

- Use Noto Serif SC for display and DM Sans with Noto Sans SC for body; treat Feature as a source reference only.
- Lead with centered editorial serif statements, then introduce an original stepped geometric collage below.
- Use square actions and connected ruled panels; reserve bright orange-red for conversion accents.
- Combine navy structure with selective mint contrast blocks and disciplined monospace index details.
- Use delivered #070707 labels on orange-red primary controls rather than white to preserve readable contrast.

### Don't

- Do not copy Jasper logos, trademarks, product screenshots, depicted people, illustrations or marketing copy.
- Do not soften the design into a pastel SaaS system with pill buttons and rounded floating cards.
- Do not replace serif display type with a uniform geometric sans-serif hierarchy.
- Do not spread collage colors across body copy or treat interpretive graphic colors as measured brand tokens.
- Do not add gradient meshes or diffuse glow in place of the hard-edged grid and collage geometry.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(242, 242, 243);
  --ink: rgb(0, 6, 61);
  --muted: rgb(0, 6, 61);
  --accent: rgb(250, 64, 40);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(0, 6, 61);
  --radius: 0px;
  --weight: 450;
  --button-radius: 0px;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/jasper.html) and [preview](../examples/jasper.png). [Style selection index](STYLE_INDEX.md).
