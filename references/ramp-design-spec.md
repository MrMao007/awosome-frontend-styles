# Ramp — Observed Homepage Design Paradigm

Source: [Ramp](https://ramp.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:03:07.782Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A precise AI operations workbench with a stippled white field, flat lemon actions and layered inspection panels. The 64px regular-weight Lausanne headline and left-aligned email capsule create a utilitarian, not exuberant, finance identity.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `lab(100 0 0)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `lab(2.83994 0.367254 0.969091)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `lab(2.83994 0.367254 0.969091 / 0.6)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `lab(92.1406 -20.4979 84.7726)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `lab(2.83994 0.367254 0.969091)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `lab(95.604 0.426412 1.20401)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(33, 33, 33, 0.1)` | Exact computed color in ramp.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Time is money. Save both. | Lausanne, Arial, sans-serif | 64px / 64px | 400 | -0.01px |
| Join 70,000 of the world’s most ambitious companies growing 3.2x faste | Lausanne, Arial, sans-serif | 28px / 32px | 400 | normal |
| One platform for all of finance. Agents for every workflow, working 24 | Lausanne, Arial, sans-serif | 40px / 42px | 400 | -0.005px |
| Cards & Expenses that handle themselves | Lausanne, Arial, sans-serif | 24px / 28px | 400 | normal |
| Procure to pay without chasing approvals | Lausanne, Arial, sans-serif | 24px / 28px | 400 | normal |
| Accounting automation eliminates month-end madness | Lausanne, Arial, sans-serif | 24px / 28px | 400 | normal |
| Banking that flows money to the highest return | Lausanne, Arial, sans-serif | 24px / 28px | 400 | normal |
| 200+ Integrations to the tools you already use | Lausanne, Arial, sans-serif | 24px / 28px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The source headline begins at x64/y229 with a 1050px box. The screenshot shows a white dotted background, 40px dark announcement strip and left aligned 64px text. A wide visualization starts at x64/y465; the adaptation places a text-free inspection-canvas below the NOVA title, not a decorative side illustration.

## Measured navigation, type and controls

The captured H1 uses Lausanne, Arial, sans-serif at 64px, weight 400, line-height 64px and tracking -0.01px. The sampled NAV is 1440 × 102 at x0/y0, with padding 0px and gap normal. Control “See a demo” measures 107 × 34, radius 6px, padding 12px 16px. Control “Get started” measures 103 × 34, radius 6px, padding 12px 16px. Control “banking*” measures 72 × 24, radius 0px, padding 0px. Control “Get started for free” measures 176 × 52, radius 8px, padding 0px 20px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source visualization has a 1312 × 586 outline, radius12px, and rgba(33,33,33,.1) border. Small document panels are pinned by black corner markers. NOVA metrics become a slim ruled counter rail; feature cards become asymmetric inspection tiles with small corner-registration marks rather than round colored cards.

## Imagery, graphic language and observational boundaries

Measured colors are reported in native lab() notation, not converted to invented RGB approximations. The source shows invoice inspection and accounting markers; NOVA uses only blank abstract document layers, never invoice totals, card spending or corporate payment data.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Workflow platforms, analytical tools, operations software, technical service pages. Avoid when: Soft lifestyle storytelling or decorative luxury imagery should dominate.

### Signature Atoms

- Canvas lab(100 0 0), ink lab(2.83994 0.367254 0.969091), lemon lab(92.1406 -20.4979 84.7726)
- Desktop headline 64px, weight 400, line-height 1.1, tracking -.045em
- Dotted hero field uses .8px radial dots on a 12px by 12px repeat
- Inspection stage 410px tall, 12px radius, 1px rgba(33, 33, 33, 0.1) outline; actions 8px radius
- Four-column asymmetric tiles, 20px gaps, hard corners, 5px corner-registration markers

### Do

- Use a regular-weight left headline above a broad inspection canvas, not a side illustration.
- Preserve the native lab color values rather than inventing approximate RGB tokens.
- Keep lemon actions flat and group controls in a lightly outlined utility capsule.
- Combine dotted fields, blank layered documents, fine rules, and small registration marks.
- Use the delivered system sans stack; retain Lausanne only as a visual reference.

### Don't

- Do not copy Ramp logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not use heavy display type, oversized pills, or soft pastel feature cards.
- Do not convert native lab tokens into unmeasured hex or RGB values.
- Do not replace the inspection stage with a floating decorative mascot.
- Do not add gradients, glass effects, or deep shadows to the flat technical surfaces.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: lab(100 0 0);
  --ink: lab(2.83994 0.367254 0.969091);
  --muted: lab(2.83994 0.367254 0.969091 / 0.6);
  --accent: lab(92.1406 -20.4979 84.7726);
  --on-accent: lab(2.83994 0.367254 0.969091);
  --surface: lab(95.604 0.426412 1.20401);
  --line: rgba(33, 33, 33, 0.1);
  --radius: 12px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/ramp.html) and [preview](../examples/ramp.png). [Style selection index](STYLE_INDEX.md).
