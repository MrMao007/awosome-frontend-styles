# Shopify — Observed Homepage Design Paradigm

Source: [Shopify](https://www.shopify.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:04:20.482Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A founder-led cinematic commerce story: black full-bleed media, exceptionally light oversized left-aligned typography and white pill actions, followed by a deep-green-black rounded shoulder section. The captured palette does not contain a measured Shopify green UI accent; it is therefore not invented.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(2, 9, 10)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(255, 255, 255)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(161, 161, 170)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(255, 255, 255)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(0, 0, 0)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(2, 9, 10)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(229, 231, 235)` | Exact computed color in shopify.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Be the next AI all-star | Shopify-Inter, Helvetica, Arial, sans-serif | 96px / 103.68px | 300 | -1.92px |
| Your brand has entered the chat | Shopify-Inter, Helvetica, Arial, sans-serif | 56px / 60.48px | 330 | -1.68px |
| Show up everywhere. Without going anywhere. | Shopify-Inter, Helvetica, Arial, sans-serif | 56px / 60.48px | 300 | -1.68px |
| Grow around the world | Shopify-Inter, Helvetica, Arial, sans-serif | 56px / 60.48px | 330 | -1.68px |
| For anyone from entrepreneurs to enterprise | Shopify-Inter, Helvetica, Arial, sans-serif | 56px / 60.48px | 330 | -1.68px |
| Meet your secret weapon, Sidekick | Shopify-Inter, Helvetica, Arial, sans-serif | 56px / 60.48px | 330 | -1.68px |
| Your very own commerce AI | Shopify-Inter, Helvetica, Arial, sans-serif | 20px / 26px | 450 | normal |
| What winning looks like | Shopify-Inter, Helvetica, Arial, sans-serif | 20px / 26px | 450 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The Shopify-Inter H1 is 96px/103.68px weight300 at x90/y296. The screenshot shows the message on the left and a person filling the right side; navigation floats above. NOVA keeps the same left-first composition, applies thin Chinese display typography and uses a text-free large sculptural panel rather than merchant photography.

## Measured navigation, type and controls

The captured H1 uses Shopify-Inter, Helvetica, Arial, sans-serif at 96px, weight 300, line-height 103.68px and tracking -1.92px. The sampled NAV is 1260 × 72 at x90/y0, with padding 0px and gap normal 32px. Control “Commerce for Agents  Build with our agent tools” measures 278 × 38, radius 0px, padding 0px. Control “Shopify App Store  Largest commerce ecosystem” measures 278 × 38, radius 0px, padding 0px. Control “Shopify.dev  Dev docs, CLI, and more” measures 305 × 38, radius 0px, padding 0px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The next section begins at approximately y799 with very large rounded top corners in the screenshot; its measured background is rgb(2,9,10). The 56px light section typography has -1.68px tracking. NOVA carries this dark continuity through an unequal tile arrangement and expansive borderless feature panels.

## Imagery, graphic language and observational boundaries

The scene is a real homepage video of a founder/person. NOVA does not copy the person, store, checkout, shopping bag logo or ecommerce claims. A diagonal CSS workbench silhouette fills the cinematic background; monochrome buttons and dark surface rhythm, not a swapped color theme, drive the adaptation.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Founder stories, ambitious platform launches, creator service campaigns. Avoid when: Compact task interfaces or bright friendly color systems are needed.

### Signature Atoms

- Section canvas rgb(2, 9, 10), black hero rgb(0,0,0), white text and action rgb(255, 255, 255)
- Left desktop headline 82px, weight 300, line-height 1.15, tracking -.055em
- Hero minimum height 865px, 90px side padding; white pill controls 999px radius
- Following section has 56px rounded top corners and -65px overlap into the hero
- Unequal three-column feature layout, 24px gaps, 32px card corners, light 32px titles

### Do

- Use exceptionally light oversized left-aligned typography on a full-bleed black stage.
- Place original cinematic media or a quiet sculptural abstraction to the right of the copy.
- Keep actions monochrome: a white primary pill and an outlined secondary pill.
- Carry dark continuity into broad rounded shoulders and expansive unequal feature spans.
- Use the example's system Arial stack; treat Shopify-Inter only as an observed source reference.

### Don't

- Do not copy Shopify logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not add an unmeasured bright green UI accent because of remembered brand colors.
- Do not replace the thin display hierarchy with bold compact headings.
- Do not turn the dark cinematic field into a white generic SaaS hero.
- Do not crowd the frame with dashboard chrome, dense labels, or colorful card gradients.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(2, 9, 10);
  --ink: rgb(255, 255, 255);
  --muted: rgb(161, 161, 170);
  --accent: rgb(255, 255, 255);
  --on-accent: rgb(0, 0, 0);
  --surface: rgb(2, 9, 10);
  --line: rgb(229, 231, 235);
  --radius: 32px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 300;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/shopify.html) and [preview](../examples/shopify.png). [Style selection index](STYLE_INDEX.md).
