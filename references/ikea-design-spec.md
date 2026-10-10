# IKEA — Observed Homepage Design Paradigm

Source: [IKEA](https://www.ikea.com/). Category: Consumer Products. Capture: 2026-10-10T14:11:54.612Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A simple global editorial portal, not a reconstructed store: a two-thirds media story beside a one-third bright-yellow destination tile, restrained black type, shallow8px corners and generous edge gutters. The cookie panel is observed then dismissed; the study never mistakes it for the page hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 254, 251)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(17, 17, 17)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(17, 17, 17)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(255, 219, 0)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(17, 17, 17)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 240, 148)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(17, 17, 17)` | Exact computed color in ikea.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Welcome to IKEA Global! | "Omani Rial", "Emirati Dirham", "Saudi Riyal", "Noto IKEA", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Sans", Roboto, "Open Sans", system-ui, sans-serif | 16px / normal | 400 | normal |
| Back at it! | "Omani Rial", "Emirati Dirham", "Saudi Riyal", "Noto IKEA", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Sans", Roboto, "Open Sans", system-ui, sans-serif | 45.7143px / 50.2857px | 700 | -1.59184px |
| Designer stories | "Omani Rial", "Emirati Dirham", "Saudi Riyal", "Noto IKEA", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Sans", Roboto, "Open Sans", system-ui, sans-serif | 45.7143px / 50.2857px | 700 | -1.59184px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The source has a96px horizontal navigation and a921px-wide media tile on the left,451px-wide yellow tile on the right starting y96. The visible right label is large but not a giant display headline; a clipped1px H1 is accessibility text. NOVA maps its unchanged headline into the yellow destination region and gives the left stage a blank abstract workbench illustration.

## Measured navigation, type and controls

The captured SPAN uses "Omani Rial", "Emirati Dirham", "Saudi Riyal", "Noto IKEA", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", "Noto Sans TC", "Noto Sans", Roboto, "Open Sans", system-ui, sans-serif at 45.7143px, weight 700, line-height 50.2857px and tracking -1.59184px. The sampled NAV is 409 × 54 at x129/y21, with padding 0px and gap normal. Control “Play video” measures 56 × 56, radius 50%, padding 0px. Control “Go shopping at IKEA dot c n(English), or use the store ” measures 451 × 784, radius 0px, padding 16px 50px. Control “Store: IKEA.cn (en)” measures 451 × 100, radius 0px 0px 8px 8px, padding 16px 50px. Control “https://www.ikea.com/ae/ar/” measures 1 × 22, radius 0px, padding 0px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

Measured yellow is rgb(255,219,0), pale inset yellow rgb(255,240,148), warm white rgb(255,254,251). The right tile has8px lower corners and a fine divider around y880. NOVA uses a2:1 split, squared shallow-round feature tiles and a framed metric strip, without product categories, shopping destinations or retail claims.

## Imagery, graphic language and observational boundaries

The source media is a game-on-the-sofa story video, paired with a shopping destination module. Neither video, IKEA logo nor store-selector business is copied. CSS line and cabinet-like geometry is explicitly abstract NOVA work. The source blue logo color is not promoted to an accent without computed evidence; the adaptation centers measured yellow.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Editorial portals, destination hubs, cultural programs, practical service introductions. Avoid when: Monumental luxury typography or dense application controls are central.

### Signature Atoms

- Warm white rgb(255, 254, 251), ink rgb(17, 17, 17), yellow rgb(255, 219, 0)
- Inset yellow rgb(255, 240, 148); hero side gutters 24px and stage gap 20px
- Desktop hero media width 66.2%, yellow copy width 32.4%, minimum height 790px, corners 8px
- Destination headline 38px, weight 800, line-height 1.32, tracking -.04em
- Feature tiles 8px radius with 20px gaps; actions 24px radius and 44px minimum height

### Do

- Build a dominant media region beside a smaller yellow destination or message region.
- Use warm white and measured yellow surfaces with plain black practical typography.
- Keep corners shallow and gutters generous across the modular portal layout.
- Use original abstract cabinet-like geometry or media, keeping the message region uncluttered.
- Use the delivered system sans stack; keep Noto IKEA only as an observed source reference.

### Don't

- Do not copy IKEA logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not promote the blue logo color into an unmeasured interface accent.
- Do not replace the split portal with a giant centered campaign headline.
- Do not add deep shadows, glass gradients, or excessively round feature cards.
- Do not recreate the store selector, source video, or cookie overlay as page content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 254, 251);
  --ink: rgb(17, 17, 17);
  --muted: rgb(17, 17, 17);
  --accent: rgb(255, 219, 0);
  --on-accent: rgb(17, 17, 17);
  --surface: rgb(255, 240, 148);
  --line: rgb(17, 17, 17);
  --radius: 8px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 700;
  --button-radius: 24px;
}
```

Example: [HTML](../examples/ikea.html) and [preview](../examples/ikea.png). [Style selection index](STYLE_INDEX.md).
