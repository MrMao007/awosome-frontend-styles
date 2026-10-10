# Apple — Observed Homepage Design Paradigm

Source: [Apple](https://www.apple.com/). Category: Consumer Products. Capture: 2026-10-10T14:04:56.720Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Product-as-monument minimalism: a black first product stage with compact centered 56px headline, a blue pill pair, enormous isolated product art, then a clean light-gray second product stage separated by a12px white gap. The visually clipped 1px Apple H1 is not the hero scale.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(29, 29, 31)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(110, 110, 115)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(0, 113, 227)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(245, 245, 247)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(110, 110, 115)` | Exact computed color in apple.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Apple | "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 34px / 50px | 600 | -0.374px |
| iPhone 18 Pro | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 56px / 60px | 600 | -0.28px |
| iPhone Duo | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 56px / 60px | 600 | -0.28px |
| Apple Watch Series 12 | "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 25.5px / 37.5px | 600 | -0.374px |
| Apple Watch Ultra 4 | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 40px / 44px | 600 | normal |
| MacBook Air | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 40px / 44px | 600 | normal |
| iPad Air | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 40px / 44px | 600 | normal |
| AirPods Pro 3 | "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif | 40px / 44px | 600 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The visible iPhone heading is H2 at56px/60px weight600, x553/y100; the brand H1 is a1 ×1 accessibility element. Navigation is44px high and centered in a narrow rail. NOVA uses the visible product hierarchy, a centered two-line title, and a giant abstract three-panel workbench silhouette below it.

## Measured navigation, type and controls

The captured H2 uses "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif at 56px, weight 600, line-height 60px and tracking -0.28px. The sampled NAV is 1440 × 44 at x0/y0, with padding 0px and gap normal. Control “Learn more” measures 131 × 44, radius 980px, padding 11px 21px. Control “Buy” measures 73 × 44, radius 980px, padding 11px 21px. Control “Learn more” measures 131 × 44, radius 980px, padding 11px 21px. Control “View pricing” measures 138 × 44, radius 980px, padding 11px 21px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The first surface is1440 ×692 black at y44; the second is1440 ×692 rgb(245,245,247) at y748. Primary actions are44px, radius980px, rgb(0,113,227) fill. NOVA alternating sections use dark/light large fields and quiet borderless panels, never a financial dashboard wrapper.

## Imagery, graphic language and observational boundaries

The capture genuinely shows phone product art. The adaptation does not reuse proprietary devices or introduce buying/pricing links. Three CSS slabs with subtle blue rim illumination serve as an abstract AI workspace graphic; all button text and modal behavior are the unchanged NOVA demo.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Delivery Accessibility Adjustments

At widths up to 640px, the expanded navigation uses a white panel with links in the dark ink token, rgb(29, 29, 31), and blue hover states. Desktop translucent-white navigation text is not carried onto the mobile white surface. This contrast correction is an example adaptation, not a claim about the source site's mobile design.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Focused product launches, hardware showcases, premium feature announcement pages. Avoid when: Dense navigation, many competing offers, or decorative editorial texture dominate.

### Signature Atoms

- White rgb(255, 255, 255), ink rgb(29, 29, 31), light stage rgb(245, 245, 247)
- Primary blue rgb(0, 113, 227); outlined hero action and rim light rgb(41,151,255)
- Centered desktop title 54px, weight 600, line-height 1.15; narrow navigation rail 980px wide and 44px high
- Hero action pills 980px radius, 44px minimum height, 17px text; stage separators 12px white
- Two-column borderless feature stages with 12px gaps and square outer corners

### Do

- Treat the product or an original abstract object as a monument beneath concise centered copy.
- Alternate expansive black and light-gray stages, separated by crisp white gutters.
- Use a filled blue primary pill and a blue outlined secondary pill.
- Keep navigation narrow, typography semibold, and supporting detail restrained.
- Use the delivered system Arial stack; treat SF Pro Display only as a reference.
- Use dark ink links on the white mobile menu; do not carry desktop translucent-white text onto it.

### Don't

- Do not copy Apple logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not use the source's clipped accessibility heading as the visible hero scale.
- Do not wrap the page in dashboard chrome or fill stages with repeated bordered cards.
- Do not add rainbow gradients, multiple accent colors, or busy background decoration.
- Do not reproduce proprietary device silhouettes, renders, purchase labels, or pricing claims.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(29, 29, 31);
  --muted: rgb(110, 110, 115);
  --accent: rgb(0, 113, 227);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(245, 245, 247);
  --line: rgb(110, 110, 115);
  --radius: 22px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 600;
  --button-radius: 980px;
}
```

Example: [HTML](../examples/apple.html) and [preview](../examples/apple.png). [Style selection index](STYLE_INDEX.md).
