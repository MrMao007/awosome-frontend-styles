# Penpot — Observed Homepage Design Paradigm

Source: [Penpot](https://penpot.app/). Category: Design & Creation. Capture: 2026-10-10T14:06:52.090Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An open, collaborative product canvas: a calm centered headline, navy typography, turquoise controls and a broad editor preview on a very pale blue field. The headline uses mostly regular weight, saving heavier emphasis for its final word.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(245, 248, 251)` | Computed div background in source evidence; sampled element at x=0, y=0. |
| Ink | `rgb(21, 16, 53)` | Computed h1 text in source evidence; sampled element at x=320, y=196. |
| Primary action | `rgb(20, 206, 202)` | Computed a background in source evidence; sampled element at x=1239, y=16. |
| Surface | `rgb(250, 250, 250)` | Computed h2 text in source evidence; sampled element at x=431, y=6266. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Think and build digital products. Together. | "Work Sans" | 72px / 86.4px | 400 | normal |
| Full-stack design for every future. | "Work Sans" | 65px / 78px | 400 | normal |
| UI Design | "Work Sans" | 48px / 57.6px | 400 | normal |
| AI Workflows | "Work Sans" | 48px / 57.6px | 400 | normal |
| Design Systems | "Work Sans" | 48px / 57.6px | 400 | normal |
| Code | "Work Sans" | 48px / 57.6px | 400 | normal |
| Product | "Work Sans" | 18px / 27px | 700 | normal |
| Company | "Work Sans" | 18px / 27px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source headline is x=320, y=196, 800 × 173px at 72px/86.4px Work Sans weight 400; the final Together span is 600. The header is 80px high. A wide dark editor image enters around y=675 below the two-button row, contrasting with the soft blue page.

## Components and Controls

Primary actions use rgb(20,206,202) fill, navy rgb(21,16,53) text and 8px corners. Secondary controls use a navy outline. The header has a rgb(250,250,250) surface. A small announcement capsule introduces the centered headline.

## Graphic Language and Evidence Boundaries

A measured radial gradient uses rgba(42,211,207,.08) against transparent pale blue. The source editor has dark sidebars and colorful artwork; the study translates only its broad framed silhouette with CSS guides and a turquoise selection outline. Artwork, logos and app labels are not copied.

## Adaptation to the NOVA Example

The NOVA hero is centered in Work Sans with a Chinese Noto Sans SC fallback at a lighter title weight. A broad preview stage below uses a navy shell, anonymous paper plane and turquoise guides. Capability panels remain calm rectangular canvases; the chart uses exact NOVA data and turquoise fills.

The observed display sample uses "Work Sans", 72px / 86.4px, weight 400, tracking normal. Original proprietary font files are not redistributed. Work Sans is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Work Sans','Noto Sans SC',sans-serif; body: 'Work Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Collaborative platforms, educational resources, community tools, and approachable technical launches. Avoid when: Aggressive campaign typography or luxurious editorial imagery must dominate.

### Signature Atoms

- Canvas #f5f8fb, navy ink #151035, primary turquoise #14ceca, surface #fafafa.
- Work Sans with Noto Sans SC; adapted headline 64px, weight 400, line-height 1.3, tracking -.03em.
- Centered copy width 850px; announcement capsule radius 999px; paired actions have 8px corners.
- Broad editor stage starts at 650px with 18px top corners; navy shell surrounds a pale 35px grid.
- Anonymous paper selection uses a 2px #14ceca outline; feature tiles have 8px corners and fine navy rules.
- Metrics use 2px turquoise bottom rules; chart bars are 12px tall with 3px corners.

### Do

- Use Work Sans and Noto Sans SC with regular display weight and restrained selective emphasis.
- Center the heading and paired actions on a pale blue field with navy text and subtle ambient light.
- Use turquoise action fills with navy labels and navy outlines for secondary controls.
- Place a broad navy preview shell below the copy with original pale canvas planes and turquoise selection guides.
- Keep feature panels calm and rectangular, using thin borders rather than pervasive shadows.
- Carry turquoise into metric rules and chart fills, then remove the decorative shell on mobile.

### Don't

- Do not copy Penpot logos, trademarks, editor screenshots, artwork, app labels, or marketing copy.
- Do not make the headline extra-bold or replace navy text with generic black.
- Do not put white text on turquoise controls when navy is the established label color.
- Do not replace the broad editor silhouette with scattered glossy floating cards.
- Do not turn the faint ambient gradient into a saturated multicolor background.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #f5f8fb;
  --ink: #151035;
  --muted: #151035;
  --accent: #14ceca;
  --on-accent: #151035;
  --surface: #fafafa;
  --line: rgba(21,16,53,.18);
  --radius: 8px;
  --display: 'Work Sans','Noto Sans SC',sans-serif;
  --body: 'Work Sans','Noto Sans SC',sans-serif;
  --weight: 400;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/penpot.html) and [preview](../examples/penpot.png). [Style selection index](STYLE_INDEX.md).
