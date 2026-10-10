# Uber — Observed Homepage Design Paradigm

Source: [Uber](https://www.uber.com/tw/en/). Category: Consumer Products. Capture: 2026-10-10T14:06:34.118Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A practical black-first mobility utility: left-aligned bold52px title and light input surfaces paired with a right-side travel collage, then a dense3-column suggestion grid. The source screenshot actually uses dark mode rather than the white hero often remembered from older Uber pages.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(0, 0, 0)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(255, 255, 255)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(243, 243, 243)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(255, 255, 255)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(0, 0, 0)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(41, 41, 41)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(255, 255, 255, 0.2)` | Exact computed color in uber.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Go anywhere | UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 52px / 64px | 700 | normal |
| Explore what you can do with Uber | UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 36px / 44px | 700 | normal |
| How to request a ride | UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 36px / 44px | 700 | normal |
| Get started | UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 18px / 24px | 500 | normal |
| Get matched with a driver | UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 18px / 24px | 500 | normal |
| Meet your driver | UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 18px / 24px | 500 | normal |
| Enjoy the ride | UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 18px / 24px | 500 | normal |
| Rate and tip | UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 18px / 24px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The UberMove H1 is52px/64px weight700 at x144/y160,459px wide. A right collage begins around x738/y128 and a bottom overlay CTA spans it. NOVA uses a459px left copy region and a4-panel abstract workflow collage to the right, retaining only its existing buttons instead of trip-input fields.

## Measured navigation, type and controls

The captured H1 uses UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif at 52px, weight 700, line-height 64px and tracking normal. The sampled NAV is 1440 × 64 at x0/y0, with padding 12px 0px and gap normal. Control “Uber Taxi  Request a local taxi and pay through the Ube” measures 372 × 160, radius 0px, padding 16px. Control “Airport  Request a ride to or from the airport with roo” measures 372 × 160, radius 0px, padding 16px. Control “UberBlack  Request a premium ride in a high-end vehicle” measures 372 × 160, radius 0px, padding 16px. Control “Courier  Uber makes same-day item delivery easier than ” measures 372 × 160, radius 0px, padding 16px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source suggestion cards are372 ×160 with8px corners, rgb(41,41,41), in a1152px-wide3-column grid beginning x144/y725. Input surfaces are rgb(243,243,243) and actions48px high. NOVA feature cards use compact8px dark tiles; the data strip is positioned between hero and capabilities without ride prices or destinations.

## Imagery, graphic language and observational boundaries

Travel photos and miniature vehicle/calendar icons are genuine source elements, replaced with abstract four-panel work blocks and route-like connecting lines. No geolocation, destination, ride scheduling or booking functionality is copied. Source browser-default blue links are not promoted to a brand accent.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Service directories, task-oriented landing pages, practical consumer app introductions. Avoid when: Delicate editorial luxury or colorful whimsical storytelling should lead.

### Signature Atoms

- Canvas rgb(0, 0, 0), white text/action rgb(255, 255, 255), dark tiles rgb(41, 41, 41)
- Left desktop headline 52px, weight 700, line-height 1.22; copy region maximum width 470px
- Right abstract four-panel collage 459px by 459px, 8px radius
- Primary controls 48px minimum height and 8px radius; secondary action uses a simple underline
- Content rail 1152px; three-column compact feature grid, 18px gaps, 8px corners, 14px body text

### Do

- Use a bold left title and a right-side abstract collage on a black-first canvas.
- Keep actions practical: a white filled control and a simple underlined secondary link.
- Use compact dark suggestion tiles with shallow corners and readable white text.
- Keep the hierarchy direct and utility-focused rather than decorative or cinematic-only.
- Use the delivered system Arial stack; keep UberMove only as an observed source reference.

### Don't

- Do not copy Uber logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not default to a remembered white hero instead of the captured dark composition.
- Do not promote browser-default blue links into a brand accent.
- Do not add oversized pastel pills, elaborate serif headings, or floating glass cards.
- Do not reproduce trip forms, vehicle icons, booking flows, or travel photography owned by the brand.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(0, 0, 0);
  --ink: rgb(255, 255, 255);
  --muted: rgb(243, 243, 243);
  --accent: rgb(255, 255, 255);
  --on-accent: rgb(0, 0, 0);
  --surface: rgb(41, 41, 41);
  --line: rgba(255, 255, 255, 0.2);
  --radius: 8px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 700;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/uber.html) and [preview](../examples/uber.png). [Style selection index](STYLE_INDEX.md).
