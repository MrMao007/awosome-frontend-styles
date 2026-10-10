# Mercury — Observed Homepage Design Paradigm

Source: [Mercury](https://mercury.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:02:51.311Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A cinematic, unusually calm business-banking hero: centered moderate-weight copy above a panoramic mountain-valley photograph, translucent pill controls and a dark lower disclaimer strip. A cool blue action contrasts with the natural scene rather than a conventional illustrated finance dashboard.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(252, 252, 250)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(23, 23, 33)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(42, 41, 36)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(82, 102, 235)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(244, 245, 249)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(175, 178, 206, 0.36)` | Exact computed color in mercury.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Radically different banking | arcadiaDisplay, "arcadiaDisplay Fallback" | 49.3472px / 54.2819px | 480 | normal |
| Business banking & more | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |
| Cards & expense management | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |
| Payments & invoicing | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |
| Accounting | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |
| Loved by 300K+ of the most ambitious entrepreneurs on the planet | arcadiaDisplay, "arcadiaDisplay Fallback" | 42px / 48.3px | 480 | 0.42px |
| Apply online in 10 minutes | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |
| Get a credit card instantly | arcadia, "arcadia Fallback" | 16px / 24px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The source starts with a 49px announcement strip, then overlay navigation. The Arcadia Display H1 is 49.3472px at y144; the screenshot shows centered pale text and a broad landscape occupying the whole 1000px viewport. The email/action pair is a single translucent horizontal capsule with a neighboring demo pill.

## Measured navigation, type and controls

The captured H1 uses arcadiaDisplay, "arcadiaDisplay Fallback" at 49.3472px, weight 480, line-height 54.2819px and tracking normal. The sampled NAV is 1440 × 72 at x0/y49, with padding 16px 32px and gap normal. Control “Log in” measures 83 × 40, radius 40px, padding 0px 20px. Control “Open account” measures 145 × 40, radius 32px, padding 0px 20px. Control “Open account” measures 145 × 40, radius 32px, padding 0px 20px. Control “Launch demo” measures 141 × 40, radius 40px, padding 0px 20px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The action is rgb(82,102,235), radius32px and height40px. A secondary control uses rgba(175,178,206,.2) with a rgba(175,178,206,.36) border and radius40px. Background containers are rgb(23,23,33). These are measured UI values; mountain tones remain photographic observations, not claimed palette tokens.

## Imagery, graphic language and observational boundaries

The source places an isolated desk and laptop in a real landscape. NOVA replaces the photograph with abstract layered mountain silhouettes and a small outlined workbench, all CSS and no source business objects. Below-fold headings suggest grouped financial capabilities; NOVA uses a quiet two-column editorial list and a broad performance module, retaining only its research/create/automate semantics.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Premium professional services, founder tools, contemplative product launches. Avoid when: High-energy campaigns or dense task-first dashboards need immediate scanning.

### Signature Atoms

- Light canvas rgb(252, 252, 250), dark hero rgb(23,23,33), action rgb(82, 102, 235)
- Centered desktop headline 53px, weight 500, line-height 1.15, tracking -.045em
- Hero minimum height 950px; abstract mountain layers rgb(39,39,53) and rgb(30,30,42)
- Action group 50px radius, 6px padding, rgba(175,178,206,.2) fill; buttons 40px radius
- Two-column editorial feature list, 65px column gap, thin rgba(175, 178, 206, 0.36) rules

### Do

- Center moderate-weight copy high in a broad cinematic stage, leaving landscape space below.
- Use abstract layered silhouettes or original landscape media rather than a dashboard hero.
- Group actions inside a translucent capsule and reserve cool blue for the primary action.
- Continue into quiet ruled editorial lists on light neutral surfaces.
- Use the delivered system sans stack; treat arcadiaDisplay only as a source reference.

### Don't

- Do not copy Mercury logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not replace the restrained title with oversized heavy uppercase typography.
- Do not add neon glows, bright multicolor tiles, or busy finance graphics.
- Do not crowd the landscape with repeated cards or dense hero controls.
- Do not claim photographic mountain colors as measured interface tokens.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(252, 252, 250);
  --ink: rgb(23, 23, 33);
  --muted: rgb(42, 41, 36);
  --accent: rgb(82, 102, 235);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(244, 245, 249);
  --line: rgba(175, 178, 206, 0.36);
  --radius: 16px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 500;
  --button-radius: 40px;
}
```

Example: [HTML](../examples/mercury.html) and [preview](../examples/mercury.png). [Style selection index](STYLE_INDEX.md).
