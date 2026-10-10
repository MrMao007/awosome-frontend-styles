# Wise — Observed Homepage Design Paradigm

Source: [Wise](https://wise.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:02:21.679Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

An exuberant money-without-borders composition dominated by an acid-green canvas, dense heavy centered typography, dark-green pill actions and a three-part pastel/dark product shelf. Its visual signature is scale and silhouette rather than gradients or thin dashboard chrome.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(159, 232, 112)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(22, 51, 0)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(69, 71, 69)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(22, 51, 0)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(159, 232, 112)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(22, 51, 0, 0.12)` | Exact computed color in wise.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The international account that saves you money | "Wise Sans", Inter, sans-serif | 105.428px / 89.6142px | 900 | normal |
| Our rate isn't hiding anything | "Wise Sans", Inter, sans-serif | 58.5143px / 49.7372px | 900 | normal |
| 1 USD = 6.6927 CNY | "Wise Sans", Inter, sans-serif | 40px / 34px | 900 | normal |
| 100% transparent | "Wise Sans", Inter, sans-serif | 40px / 34px | 900 | normal |
| Guaranteed | "Wise Sans", Inter, sans-serif | 40px / 34px | 900 | normal |
| We move billions for millions worldwide, every year | Inter, Helvetica, Arial, sans-serif | 34.5143px / 44px | 600 | -1.03543px |
| The account that moves with you | "Wise Sans", Inter, sans-serif | 58.5143px / 49.7372px | 900 | normal |
| For relocators | Inter, Helvetica, Arial, sans-serif | 28.6285px / 34px | 600 | -0.715712px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The sampled Wise Sans H1 is 105.428px, weight900, line89.6142px, within a 1138px box starting x151/y132. The screenshot demonstrates tight three-line uppercase density. A 604px centered Inter paragraph and two 48px-high pill actions sit below; NOVA keeps its two-line Chinese title but applies the heavy compact hierarchy.

## Measured navigation, type and controls

The captured H1 uses "Wise Sans", Inter, sans-serif at 105.428px, weight 900, line-height 89.6142px and tracking normal. The sampled NAV is 1440 × 76 at x0/y0, with padding 0px and gap normal. Control “Log in” measures 66 × 32, radius 9999px, padding 8px 9.38462px. Control “Sign up” measures 83 × 32, radius 9999px, padding 8px 12px. Control “Open an account in minutes” measures 261 × 48, radius 9999px, padding 11px 24px. Control “Send money now” measures 162 × 48, radius 9999px, padding 12px 16px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The product shelf begins at y604: 399px turquoise left tile, 548px dark center tile, and 399px pink right tile with roughly 28px corners. The center contains a white inset calculator with a roughly 37.5px radius. The adaptation maps the three NOVA metrics to this 1:1.37:1 shelf and makes the central card dark rather than adding a money calculator.

## Imagery, graphic language and observational boundaries

Source imagery shows stacked currency balance cards and an exchange-rate illustration. No exchange rate, transfer form or currency icon is copied. The feature area uses measured turquoise/pink surfaces, generous rounded containers and an inset white performance chart as an abstract workbench demonstration.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Bold consumer launches, community platforms, accessible service introductions. Avoid when: Muted institutional restraint or dense data scanning is essential.

### Signature Atoms

- Canvas rgb(159, 232, 112), ink and primary action rgb(22, 51, 0)
- Centered desktop headline 92px, weight 900, line-height 1.08, tracking -.065em
- Pill controls 999px radius; shelf cards 28px radius; inset chart 38px radius
- Shelf ratio 1:1.37:1 with 28px gaps and a taller dark central card
- Shelf fills rgb(160,225,225), rgb(33,35,29), and rgb(255,215,239); metric type 72px

### Do

- Make the acid-green field and heavy centered title the main visual event.
- Keep supporting copy compact and center the dark-green pill actions beneath it.
- Build the three-part shelf with a wider, taller dark middle panel.
- Alternate turquoise and pink borderless surfaces, with generous rounded nesting.
- Use the delivered system sans stack at heavy weights; keep Wise Sans only as a reference.

### Don't

- Do not copy Wise logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not replace the green canvas with a white generic SaaS layout.
- Do not use delicate serif headlines or lightweight display typography.
- Do not add gradients, fine dashboard chrome, or floating-card shadows.
- Do not flatten the shelf into equal monochrome tiles or square the pill controls.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(159, 232, 112);
  --ink: rgb(22, 51, 0);
  --muted: rgb(69, 71, 69);
  --accent: rgb(22, 51, 0);
  --on-accent: rgb(159, 232, 112);
  --surface: rgb(255, 255, 255);
  --line: rgba(22, 51, 0, 0.12);
  --radius: 28px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 900;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/wise.html) and [preview](../examples/wise.png). [Style selection index](STYLE_INDEX.md).
