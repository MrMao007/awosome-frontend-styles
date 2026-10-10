# Vercel — Observed Homepage Design Paradigm

Source: [Vercel](https://vercel.com/). Category: Developer Tools. Capture: 2026-10-10T14:04:17.010Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An unusually quiet, light monochrome infrastructure homepage: the headline, central primitive and short explanatory rail share a broad horizontal stage. This study follows the current white capture, not an assumed black Vercel theme.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(250, 250, 250)` | Source PNG RGB pixel at desktop coordinate (900, 120); image/composite sample, not an inferred CSS brand token. |
| surface | `rgb(255, 255, 255)` | Computed style: textSamples[2].color, textSamples[3].parentBg, textSamples[11].parentBg. |
| ink | `rgb(23, 23, 23)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| muted | `rgb(77, 77, 77)` | Computed style: textSamples[7].color, textSamples[8].color, textSamples[9].color. |
| accent | `rgb(23, 23, 23)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| on-accent | `rgb(255, 255, 255)` | Computed style: textSamples[2].color, textSamples[3].parentBg, textSamples[11].parentBg. |
| line | `rgb(235, 235, 235)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Agentic Infrastructure | GeistSans, "GeistSans Fallback" | 64px / 64px | 400 | -3.84px |
| Build agents on infrastructure that thinks like them | GeistSans, "GeistSans Fallback" | 56px / 56px | 450 | -3.36px |
| Ship apps that scale from zero to millions instantly | GeistSans, "GeistSans Fallback" | 56px / 56px | 450 | -3.36px |
| Host platforms that serve every customer | GeistSans, "GeistSans Fallback" | 56px / 56px | 450 | -3.36px |
| Recently shipped | GeistSans, "GeistSans Fallback" | 56px / 56px | 450 | -3.36px |
| Built by you, or your agents | GeistSans, "GeistSans Fallback" | 56px / 56px | 450 | -3.36px |
| Agent Stack | GeistSans, "GeistSans Fallback" | 14px / 20px | 500 | normal |
| Core Platform | GeistSans, "GeistSans Fallback" | 14px / 20px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Translate the three-part stage into a CSS grid: Chinese headline left, a non-logo concentric compute primitive centered, and existing NOVA explanation right. The eyebrow becomes the small top announcement rhythm. The 64px source navigation and oversized whitespace guide the desktop scale. The source headline sampled at (24, 378) occupies 444 × 128px and uses 64px/64px, weight 400, tracking -3.84px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Use nearly invisible neutral rules, restrained pill actions, unboxed metrics with vertical dividers, and a continuous 3-column capabilities matrix. Secondary sections remain editorial rather than becoming floating dashboard cards.

## Product Visualization and Background Language

A central black circle with two inset rings replaces the source trademark triangle; there is no copied trademark or claim. No colored glow is added because it is absent from this measured capture. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Keep the NOVA title and subtitle as separate accessible elements. Reposition them into the lateral source rhythm; reduce the 64px Latin source headline to a 58px Chinese display and allow a compact 40px mobile treatment. Existing metrics become a continuous proof rail and the weekly chart becomes a hairline infrastructure signal.

The observed source display family is GeistSans, "GeistSans Fallback". The configured display stack is 'Inter','Noto Sans SC',sans-serif; the UI font reference is Inter from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Research platforms, professional portfolios, enterprise operations, and restrained product introductions. Avoid when: Expressive illustration, colorful storytelling, or compact transactional layouts are essential.

### Signature Atoms

- Canvas rgb(250, 250, 250), ink rgb(23, 23, 23), rules rgb(235, 235, 235).
- Inter with Noto Sans SC; adapted display 58px, weight 400, line-height 1.15, tracking -.06em.
- Hero columns 1fr 240px 1fr with 48px gaps; announcement centered above the lateral copy.
- Central 190px black circle with 32px and 65px inset rings; no colored glow.
- Content radius 0px, button radius 999px, controls at least 44px high; edge-sharing three-column feature matrix.
- Open 54px metric numerals with vertical rules; chart tracks 6px high.

### Do

- Use open-source Inter and Noto Sans SC; treat observed GeistSans only as a visual reference.
- Separate headline, abstract central primitive, and explanation into a broad lateral hero.
- Keep content cells square, edge-sharing, and ruled rather than elevated or individually boxed.
- Reserve strong black for type, primary actions, and the central geometric primitive.
- Collapse the lateral composition on mobile and remove the decorative primitive before it crowds the copy.

### Don't

- Do not substitute a black full-page theme for the observed near-white canvas.
- Do not add colored gradients, luminous halos, or saturated accent buttons.
- Do not make feature cells floating rounded cards with broad shadows.
- Do not use heavy display weights or crowd the generous whitespace.
- Do not copy Vercel logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(250, 250, 250);
  --surface: rgb(255, 255, 255);
  --ink: rgb(23, 23, 23);
  --muted: rgb(77, 77, 77);
  --accent: rgb(23, 23, 23);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(235, 235, 235);
  --radius: 0px;
  --button-radius: 999px;
  --weight: 400;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/vercel.html) and [preview](../examples/vercel.png). [Style selection index](STYLE_INDEX.md).
