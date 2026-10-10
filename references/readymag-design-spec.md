# Readymag — Observed Homepage Design Paradigm

Source: [Readymag](https://readymag.com/). Category: Design & Creation. Capture: 2026-10-10T14:26:52.830Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An art-directed web collage with a centered white statement card floating over edge-to-edge editorial images. Separate navigation capsules and an oversized orange pill are the core interface vocabulary, not a generic product grid.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed span text in source evidence; sampled element at x=1347, y=25. |
| Ink | `rgb(0, 0, 0)` | Computed span text in source evidence; sampled element at x=442, y=342. |
| Primary action | `rgb(255, 89, 0)` | Repeated computed color, 1 occurrences in the captured viewport. Not an inferred official brand token. |
| Surface | `rgb(244, 244, 244)` | Computed div text in source evidence; sampled element at x=466, y=401. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Make the web more like you. | custom_157067 | 30px / 31px | 400 | -1.6px |
| A human-powered design tool for creating distinctive websites | custom_157067 | 30px / 31px | 400 | -1.6px |
| Try Readymag | custom_190030 | 16px / 60px | 500 | normal |
| Solutions | -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, Arial, sans-serif | 16px / 20px | 400 | -0.04px |
| Pricing | -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, Arial, sans-serif | 16px / 20px | 400 | -0.1px |
| Examples | -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, Arial, sans-serif | 16px / 20px | 400 | -0.1px |
| Templates | -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, Arial, sans-serif | 16px / 20px | 400 | -0.1px |
| Learn | -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, Arial, sans-serif | 16px / 20px | 400 | -0.1px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source fills the first 1440 × 1000 viewport with a collage. Its central white card sits around x=418, y=328 in the screenshot. Computed display samples report custom_157067 at 30px/31px, weight 400 and -1.6px tracking, while the raster shows larger text; the mismatch is documented rather than inventing a precise scale. Navigation items are separate 200px-radius capsules.

## Components and Controls

Navigation capsule fill is rgba(244,244,244,.96) with black labels. The main orange CTA is rgb(255,89,0), and a blue promotional sticker is rgb(0,71,255). The adaptation omits that promotion and the cookie controls; the unchanged NOVA actions occupy a large pill row on the central paper.

## Graphic Language and Evidence Boundaries

The collage combines photographic posters, type specimens and interface planes at irregular scales. Instead of copying any of those assets, NOVA uses anonymous huge arcs, stripes and offset typographic-like rules in neutral plates. The orange primary action is retained as measured; the background artwork is not rebranded as a set of official tokens.

## Adaptation to the NOVA Example

NOVA lives inside a central white paper card, surrounded by a CSS-only editorial collage. Navigation becomes separate floating capsules. Metrics and capabilities use asymmetric editorial block proportions, and the closing action is broad and orange. DM Sans replaces the unspecified custom face; Noto Sans SC is the explicit Chinese fallback at regular weight.

The observed display sample uses custom_157067, 30px / 31px, weight 400, tracking -1.6px. Original proprietary font files are not redistributed. DM Sans is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Art publications, festival campaigns, independent portfolios, and exhibition announcements. Avoid when: Predictable dense navigation and utilitarian data screens are essential.

### Signature Atoms

- Paper #ffffff, ink #000000, neutral plates #f4f4f4 and #282828, conversion orange #ff5900.
- DM Sans with Noto Sans SC; adapted heading 50px, weight 400, line-height 1.17, tracking -.055em.
- Central paper width 660px, padding 35px, radius 8px; edge-to-edge hero min-height 1000px.
- Navigation capsules use 200px corners and rgba(244,244,244,.96); hero actions have 66px min-height.
- Editorial grid columns use 1.25fr and 1fr; square panels share 1px #282828 rules with no gaps.
- Collage combines a 430px circle with a 75px pale ring and an angled 340px by 275px striped plate.

### Do

- Use regular DM Sans and Noto Sans SC with tight display tracking and editorial line breaks.
- Float a central white paper card above original large arcs, stripes, and irregularly scaled collage planes.
- Separate navigation into individual pale capsules and reserve orange for broad conversion moments.
- Use unequal editorial block proportions, shared dark rules, and occasional inverted panels below the hero.
- Keep metric labels #222 for contrast, including on orange; check action text contrast instead of assuming white is legible.
- Collapse actions and collage into readable mobile flow without shrinking copy into the background artwork.

### Don't

- Do not copy Readymag logos, trademarks, product screenshots, collage images, or marketing copy.
- Do not replace the layered collage and central paper with a generic centered SaaS hero.
- Do not make every tile equally sized, softly shadowed, and detached from its neighbors.
- Do not add the source's promotional blue sticker or infer a global multicolor palette from artwork.
- Do not use heavy display weights or allow pale labels to disappear against orange panels.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #000000;
  --muted: #666666;
  --accent: #ff5900;
  --on-accent: #ffffff;
  --surface: #f4f4f4;
  --line: #282828;
  --radius: 8px;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
  --weight: 400;
  --button-radius: 200px;
}
```

Example: [HTML](../examples/readymag.html) and [preview](../examples/readymag.png). [Style selection index](STYLE_INDEX.md).
