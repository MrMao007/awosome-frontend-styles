# Oatly — Observed Homepage Design Paradigm

Source: [Oatly](https://www.oatly.com/). Category: Consumer Products. Capture: 2026-10-10T14:17:29.280Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An irreverent newspaper/packaging grid with thin black rules, roughly condensed all-caps display, hand-drawn-feeling annotations and deliberately unequal editorial tiles. It is a flat graphic system, not a wellness-style pastel collection.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 254, 246)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(0, 0, 0)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(0, 0, 0)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(253, 207, 133)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(0, 0, 0)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(0, 0, 0)` | Exact computed color in oatly.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| the Original Oat Drink Company | "Margo Pro Regular", sans-serif | 32px / 41.6px | 700 | normal |
| WE EXIST TO MAKE IT EASIER FOR PEOPLE TO LIVE HEALTHIER LIVES WITHOUT  | "Margo Pro Regular", sans-serif | 29.8947px / 29.8947px | 400 | normal |
| LOOK BOOK VOL. 3 | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |
| PEE FOR THE PLANET | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |
| AFTERTASTE | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |
| OATLY & AVAVAV GOES TO MILAN FASHION WEEK | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |
| FREQUENTLY ASKED QUESTIONS | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |
| THE FUTURE OF TASTE | "Margo Pro Regular", sans-serif | 16px / 19.2px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The visible Margo Pro mission H1 is29.8947px/29.8947px weight400 at x66/y219 inside a627 ×90 box. The page has a1397px-wide outlined navigation at x22/y22 and two equal main columns. NOVA uses condensed typography and an outlined two-part editorial hero; no source mission or oat-drink claim is copied.

## Measured navigation, type and controls

The captured H1 uses "Margo Pro Regular", sans-serif at 29.8947px, weight 400, line-height 29.8947px and tracking normal. The sampled NAV is 1223 × 42 at x22/y22, with padding 0px and gap normal. Control “HEALTH” measures 279 × 47, radius 0px, padding 6px 0px. Control “READ MORE →” measures 143 × 43, radius 0px, padding 12px 16px. Control “LOOK BOOK VOL. 3” measures 108 × 20, radius 0px, padding 0px. Control “PEE FOR THE PLANET” measures 131 × 20, radius 0px, padding 0px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source right feature frame is643 ×643 at x738/y150; below it are303px and643px wide tiles with1px black borders. The left tile at x58/y490 is643 ×303. NOVA uses a4-column mosaic with unequal spans, hard corners, rule-defined metrics and line-only buttons. A600px cookie panel initially covers part of this, then is dismissed in supplemental evidence.

## Imagery, graphic language and observational boundaries

The source graphic language includes packaging, handwritten-looking type and editorial labels. NOVA uses blank abstract stacked sheets, rough outlined circles and black registration rules. No food packaging, sustainability assertions or source slogan is copied. Warm peach is an actually sampled badge color, assigned sparingly to NOVA emphasis.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: 'Arial Narrow','NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Independent magazines, cultural campaigns, unconventional creative product pages. Avoid when: Polished corporate neutrality or soft therapeutic reassurance is necessary.

### Signature Atoms

- Paper rgb(255, 254, 246), black rgb(0, 0, 0), peach emphasis rgb(253, 207, 133)
- Display Arial Narrow with system localized fallbacks; body Arial; annotations monospace
- Desktop title 49px, weight 600, line-height 1.28, rotation -1deg
- Navigation inset 20px; tiles and buttons 0px radius, with 1px black rules
- Four-column mosaic with double-span tiles and 20px gaps; irregular outlined circles around tilted sheets

### Do

- Use condensed display typography and monospace metadata over a flat warm-paper canvas.
- Follow the delivered system Arial Narrow stack; treat Margo Pro Regular only as a source reference.
- Define every major editorial region with thin black rules and hard corners.
- Build an unequal newspaper mosaic with slightly tilted sheets and rough outlined circles.
- Reserve peach for occasional emphasis and keep line-only controls graphic and direct.

### Don't

- Do not copy Oatly logos, trademarks, product screenshots, illustrations, packaging, or marketing copy.
- Do not soften the grid into rounded wellness cards or pastel bubbles.
- Do not add glossy shadows, glass blur, gradients, or polished corporate icon sets.
- Do not make every tile the same size or remove the black registration rules.
- Do not distort live text into illegible faux handwriting or borrow source sustainability claims.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 254, 246);
  --ink: rgb(0, 0, 0);
  --muted: rgb(0, 0, 0);
  --accent: rgb(253, 207, 133);
  --on-accent: rgb(0, 0, 0);
  --surface: rgb(255, 255, 255);
  --line: rgb(0, 0, 0);
  --radius: 0px;
  --display: 'Arial Narrow','NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 700;
  --button-radius: 0px;
}
```

Example: [HTML](../examples/oatly.html) and [preview](../examples/oatly.png). [Style selection index](STYLE_INDEX.md).
