# CorelDRAW — Observed Homepage Design Paradigm

Source: [CorelDRAW](https://www.coreldraw.com/en/). Category: Design & Creation. Capture: 2026-10-10T14:30:45.248Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A classic graphic-design suite with an energetic illustrated pink hero, regular-weight black display, a compact product-release badge and two pill actions. Below it, a white catalog presents three clearly tiered software cards rather than a dark abstract SaaS gallery.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed h2 text in source evidence; sampled element at x=427, y=2666. |
| Ink | `rgb(0, 0, 0)` | Computed h1 text in source evidence; sampled element at x=78, y=256. |
| Primary action | `rgb(0, 103, 203)` | Computed a background in source evidence; sampled element at x=78, y=442. |
| Surface | `rgb(248, 248, 248)` | Computed div background in source evidence; sampled element at x=78, y=862. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Professional graphic design software | NB-International, -apple-system, "system-ui", sans-serif | 56px / 56px | 400 | -0.8px |
| Graphic design options for all skill levels | NB-International, -apple-system, "system-ui", sans-serif | 32px / 40px | 500 | normal |
| Featured customers | NB-International, -apple-system, "system-ui", sans-serif | 32px / 40px | 500 | normal |
| You’re in good company | NB-International, -apple-system, "system-ui", sans-serif | 32px / 40px | 500 | normal |
| Test drive CorelDRAW for FREE, no credit card required! | NB-International, -apple-system, "system-ui", sans-serif | 32px / 40px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The white header is 73px high. The hero is 1440 × 612px beginning y=73, with computed rgb(249,185,196) under its background image. The left statement starts at x=78, y=256, 627 × 112px at 56px/56px NB-International weight 400, -0.8px tracking. The next product catalog starts at y=685; three 408px-wide cards enter at y=862.

## Components and Controls

The primary Learn more action uses rgb(0,103,203), white text and 100px pill corners. Secondary Try free is a black outlined pill. Product cards are rgb(248,248,248) with 12px corners; the highlighted tier has rgb(246,243,253) and a violet outline. The NOVA study keeps the source’s component hierarchy without copying product tiers or purchase claims.

## Graphic Language and Evidence Boundaries

The source includes exuberant illustrated characters and the company balloon on the right half of the hero. Those assets are not copied. NOVA uses large overlapping vector-like circles, outlined curves and a central paper shape as an anonymous illustration on the measured pink field. The illustration palette is not asserted as official brand tokens.

## Adaptation to the NOVA Example

The NOVA statement stays left, with blue and outlined pill actions beneath and an abstract vector drawing at right. Metrics become a white catalog introduction; capabilities use three equal tier-like columns with one lightly highlighted treatment. The chart uses the blue action family on neutral tracks. Inter substitutes NB-International and Noto Sans SC provides Chinese at regular headline weight.

The observed display sample uses NB-International, -apple-system, "system-ui", sans-serif, 56px / 56px, weight 400, tracking -0.8px. Original proprietary font files are not redistributed. Inter is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Professional service catalogs, product collections, training launches, and capability comparisons. Avoid when: Dark minimal theater or a freeform editorial collage is desired.

### Signature Atoms

- White canvas #ffffff, pink hero #f9b9c4, ink #000000, action blue #0067cb, catalog surface #f8f8f8.
- Inter with Noto Sans SC; adapted heading 54px, weight 400, line-height 1.15, tracking -.035em.
- White header 73px; desktop hero copy max-width 635px; original vector illustration occupies the right 37%.
- Release badge has 3px corners; blue and black-outline actions use 100px corners and 44px hero min-height.
- Three-column catalog uses 12px-corner cards, 330px min-height, and 30px gaps.
- Highlighted catalog treatment uses #f6f3fd with a 2px #4911d8 border; blue chart bars use 6px corners.

### Do

- Use Inter and Noto Sans SC at regular display weight with black text on the pink hero.
- Keep the statement left-aligned and reserve the right half for original overlapping vector circles and outlined curves.
- Introduce a compact release-like badge and pair a blue pill with a black outlined secondary action.
- Transition into a white catalog with three equal columns and one restrained violet-highlighted treatment.
- Keep catalog text clear and use neutral tracks with blue bars for information sections.
- Hide the decorative right illustration and collapse catalog columns on mobile while preserving the hierarchy.

### Don't

- Do not copy CorelDRAW logos, trademarks, balloon artwork, characters, product screenshots, or marketing copy.
- Do not replace the pink illustrated stage with a dark abstract SaaS gallery.
- Do not set the regular headline in extra-heavy tightly compressed type.
- Do not give every catalog card a violet border or treat illustration colors as universal interface tokens.
- Do not copy product tiers, prices, or purchase claims when applying the style to unrelated content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #000000;
  --muted: #424242;
  --accent: #0067cb;
  --on-accent: #ffffff;
  --surface: #f8f8f8;
  --line: rgba(0,0,0,.17);
  --radius: 12px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 400;
  --button-radius: 100px;
}
```

Example: [HTML](../examples/coreldraw.html) and [preview](../examples/coreldraw.png). [Style selection index](STYLE_INDEX.md).
