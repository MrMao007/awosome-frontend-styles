# Render — Observed Homepage Design Paradigm

Source: [Render](https://render.com/). Category: Developer Tools. Capture: 2026-10-10T14:06:38.153Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Lightweight oversized typography on a rigorously ruled white canvas. Render combines rectangular black controls, an intentionally spare staircase grid and a measured violet-to-copper headline accent; the lavender announcement rail is secondary.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed style: controls[1].bg, controls[1].parentBg, surfaces[0].bg. |
| surface | `rgb(255, 255, 255)` | Computed style: controls[1].bg, controls[1].parentBg, surfaces[0].bg. |
| ink | `rgb(13, 13, 13)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| muted | `rgb(77, 77, 77)` | Computed style: textSamples[5].color. |
| accent | `rgb(13, 13, 13)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| on-accent | `rgb(255, 255, 255)` | Computed style: controls[1].bg, controls[1].parentBg, surfaces[0].bg. |
| line | `rgb(227, 227, 227)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. Interpretation / adaptation value; not independently established as an exact source token. |
| violet | `rgb(138, 5, 255)` | Computed style: textSamples[1].image, surfaces[2].image. |
| copper | `rgb(214, 127, 46)` | Computed style: textSamples[1].image, surfaces[2].image. |
| lavender | `rgb(231, 219, 255)` | Computed style: controls[0].parentBg. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Your fastest path to production for any workload | Roobert, "Roobert Fallback", sans-serif | 80px / 80px | 300 | -2.4px |
| Deploy apps and agents with zero ops | Roobert, "Roobert Fallback", sans-serif | 64px / 68px | 300 | -1.28px |
| Intuitive hosting and private networking for web services, Postgres da | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |
| Full-stack previews for every pull request | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |
| Load-based autoscaling that handles 100x traffic bursts and beyond | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |
| Durable, long-running workflows as code | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |
| Enterprise-grade Postgres databases | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |
| Integrated logs and monitoring for builds, deploys and live services | Roobert, "Roobert Fallback", sans-serif | 40px / 44px | 300 | -0.6px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use a fine-rule navigation topped by a narrow lavender stripe; the left-aligned localized headline dominates a 615px stage. A stepped grid occupies the empty right side instead of inventing a missing source product demo. The source headline sampled at (90, 197) occupies 720 × 249px and uses 80px/80px, weight 300, tracking -2.4px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Remove pill corners throughout. Open metric columns, edge-sharing 2-column features, tab underlines and a vertically separated chart repeat the architectural grid. Source heading weight 300 motivates the deliberately light Chinese display. A sampled main at (0, 0) is 1440 × 6679px; background rgb(255, 255, 255), border 0px solid rgb(227, 227, 227), radius 0px, padding 0px. A sampled header at (0, 40) is 1440 × 67px; background rgb(255, 255, 255), border not represented by a single shorthand, radius 0px, padding 0px. A sampled span at (90, 346) is 453 × 101px; background rgba(0, 0, 0, 0), border 0px solid rgb(227, 227, 227), radius 0px, padding 0px. A sampled div at (990, 287) is 450 × 320px; background rgba(0, 0, 0, 0), border not represented by a single shorthand, radius 0px, padding 0px.

## Product Visualization and Background Language

Reconstruct only abstract grid stairs and the exact measured gradient endpoints from surfaces.image. The capture contains several broken customer images; they are not treated as intentional brand motifs and are not reproduced. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

The source 80px Latin display becomes a 74px Chinese heading with 1.15 line height; all original NOVA content survives. The final CTA uses measured lavender to echo the announcement bar without copying its migration credit claim.

The observed source display family is Roobert, "Roobert Fallback", sans-serif. The configured display stack is 'Manrope','Noto Sans SC',sans-serif; the UI font reference is Manrope from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Engineering portfolios, industrial services, analytics introductions, and architectural product pages. Avoid when: Soft consumer warmth or playful rounded components are central.

### Signature Atoms

- White rgb(255, 255, 255), ink rgb(13, 13, 13), rules rgb(227, 227, 227).
- Manrope with Noto Sans SC; adapted display 74px, weight 300, line-height 1.15, tracking -.055em.
- Headline gradient spans rgb(138, 5, 255) to rgb(214, 127, 46); secondary rail rgb(231, 219, 255).
- Square content and controls: 0px radius; black outlined buttons at least 48px high.
- 615px minimum hero with a clipped staircase grid at 90px spacing; header has an 18px lavender top rule.
- Zero-gap paired feature cells, 3px active-tab underline, and 22px square gradient chart tracks.

### Do

- Use open-source Manrope and Noto Sans SC; treat observed Roobert only as a visual reference.
- Keep display text deliberately light and large rather than bold and compressed.
- Carry fine rules continuously through open metrics, paired capabilities, and chart alignment.
- Build the right-side hero ornament from a stepped grid, leaving it visually subordinate to the headline.
- Limit gradient emphasis to selected headline and chart signals; echo lavender in the closing section.

### Don't

- Do not introduce pill buttons, rounded cards, or soft floating-card shadows.
- Do not substitute heavy display typography for the lightweight hierarchy.
- Do not turn the measured accent gradient into full-page glowing scenery.
- Do not reproduce broken customer images or invent a missing product demo.
- Do not copy Render logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --ink: rgb(13, 13, 13);
  --muted: rgb(77, 77, 77);
  --accent: rgb(13, 13, 13);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(227, 227, 227);
  --radius: 0px;
  --button-radius: 0px;
  --weight: 300;
  --violet: rgb(138, 5, 255);
  --copper: rgb(214, 127, 46);
  --lavender: rgb(231, 219, 255);
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/render.html) and [preview](../examples/render.png). [Style selection index](STYLE_INDEX.md).
