# Allbirds — Observed Homepage Design Paradigm

Source: [Allbirds](https://www.allbirds.com/). Category: Consumer Products. Capture: 2026-10-10T14:12:02.618Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A low-key footwear editorial built from an inset dual-photo hero, small typography placed near the lower right and a floating white pill-shaped navigation rail. The initial shipping-region dialog is an ordinary choice overlay, documented separately and dismissed in a supplemental capture.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(224, 218, 207)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(33, 33, 33)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(87, 87, 87)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(33, 33, 33)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(0, 0, 0, 0.15)` | Exact computed color in allbirds.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| CART (0) | Geograph, system-ui, sans-serif | 12px / 16px | 500 | normal |
| Wildly Comfortable. Super Natural. | Geograph, system-ui, sans-serif | 24px / 32px | 400 | 0.6px |
| NEW ARRIVALS | Geograph, system-ui, sans-serif | 12px / 15px | 500 | 0.3px |
| Summer Travel Essentials | "Self Modern", ui-serif, serif | 40px / 60px | 400 | normal |
| New Arrivals | "Self Modern", ui-serif, serif | 40px / 60px | 400 | normal |
| Fresh Colors For Summer | "Self Modern", ui-serif, serif | 40px / 60px | 400 | normal |
| FOLLOW THE FLOCK | "Akkurat Mono", ui-monospace, monospace | 12px / 16px | 400 | 0.6px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The rendered Geograph H1 is24px/32px weight400 at x951/y773,415px wide. This is deliberately much smaller than conventional campaign hero type. NOVA keeps a quiet compact title lower-right inside an expansive rounded stage, with two abstract material textures substituting for the shoe/person photo split.

## Measured navigation, type and controls

The captured H1 uses Geograph, system-ui, sans-serif at 24px, weight 400, line-height 32px and tracking 0.6px. Control “WOMEN” measures 53 × 16, radius 0px, padding 0px. Control “0” measures 24 × 24, radius 0px, padding 0px. Control “SHOP MEN” measures 122 × 33, radius 3.35544e+07px, padding 8px 16px. Control “SHOP WOMEN” measures 122 × 33, radius 3.35544e+07px, padding 8px 16px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The initial screenshot shows a512 ×357 region dialog at x464/y322 with8px radius. Source hero actions are33px high and effectively infinite pill radius, but NOVA keeps44px minimum accessible hit targets. Below-fold category tiles are348px wide and451px high; the adaptation uses varied feature spans and low-key metadata instead of repeated giant headings.

## Imagery, graphic language and observational boundaries

The source contains footwear photos, people and handwritten marks. NOVA uses CSS textile-like repeating stripes and neutral paper surfaces; neither shoe imagery, shipping threshold, cart, fashion taxonomy nor purchase controls is introduced. Native oklab colors are kept only when actually measured; the page avoids claiming image colors as tokens.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Independent lifestyle brands, material-focused portfolios, understated editorial catalogs. Avoid when: Monumental display copy or dense utility navigation must dominate.

### Signature Atoms

- Canvas rgb(224, 218, 207), ink rgb(33, 33, 33), white surfaces rgb(255, 255, 255)
- Hero inset 10px at sides, 884px minimum height, 20px radius; quiet copy anchored lower-right
- Desktop headline 33px, weight 400, line-height 1.4; source title reference 24px with 0.6px tracking
- Floating white navigation 48px minimum height and 18px corners; action pills 999px radius and 44px minimum height
- Split textile stripes at 65deg and 115deg; four-column varied tiles with 10px gaps and 20px corners

### Do

- Keep the hero expansive while placing quiet compact copy near the lower-right edge.
- Use original split material textures and a floating white navigation capsule.
- Maintain accessible 44px minimum action hit targets despite the source's smaller visual controls.
- Continue with varied feature spans, low-key metadata, and restrained neutral surfaces.
- Use the delivered system sans stack; keep Geograph and Self Modern only as source references.

### Don't

- Do not copy Allbirds logos, trademarks, product screenshots, illustrations, footwear photos, or marketing copy.
- Do not inflate the quiet campaign title into a giant centered SaaS headline.
- Do not add bright accent colors, glossy gradients, heavy shadows, or busy badges.
- Do not flatten the split texture stage into identical uniform product cards.
- Do not recreate shipping-region overlays or shrink controls below accessible hit targets.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(224, 218, 207);
  --ink: rgb(33, 33, 33);
  --muted: rgb(87, 87, 87);
  --accent: rgb(33, 33, 33);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgba(0, 0, 0, 0.15);
  --radius: 20px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/allbirds.html) and [preview](../examples/allbirds.png). [Style selection index](STYLE_INDEX.md).
