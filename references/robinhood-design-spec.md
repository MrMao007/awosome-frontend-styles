# Robinhood — Observed Homepage Design Paradigm

Source: [Robinhood](https://robinhood.com/us/en/). Category: Finance & Commerce. Capture: 2026-10-10T14:03:20.440Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An austere dark investing editorial with a remarkably large classical serif statement, neon chartreuse announcement band and tightly controlled pill actions. The captured hero is visually blank beneath the CTA; no imaginary trading screenshot is claimed.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(17, 14, 8)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(255, 255, 255)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(255, 255, 255)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(204, 255, 0)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(17, 14, 8)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(0, 0, 0)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(204, 255, 0)` | Exact computed color in robinhood.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Trade All in One Place | "Martina Plantijn", serif | 110px / 110px | 400 | -0.5px |
| Intuitive trading tools | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 40px / 48px | 400 | -1px |
| Build your strategy and track market trends, seamlessly | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 40px / 48px | 400 | -1px |
| Trade crypto 24/7 | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 40px / 48px | 400 | -1px |
| Your portfolio, handled by the pros | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 40px / 48px | 400 | -1px |
| Robinhood Protection Guarantee | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 52px / 62px | 400 | -1.5px |
| Become a better investor on the go, right in the app | Phonic, Helvetica, system-ui, -apple-system, "system-ui", Arial, sans-serif | 52px / 62px | 400 | -2px |
| Join a new generation of investors | "Martina Plantijn", serif | 72px / 78px | 400 | -1px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The Martina Plantijn H1 is110px/110px weight400, x436/y205,568 ×220. A black64px navigation bar is followed by a45px neon announcement band. NOVA preserves the centered monumental headline, dark field and low hero density; a small eyebrow strip substitutes for the announcement without changing text.

## Measured navigation, type and controls

The captured H1 uses "Martina Plantijn", serif at 110px, weight 400, line-height 110px and tracking -0.5px. The sampled NAV is 1440 × 64 at x0/y0, with padding 0px and gap normal. Control “Support” measures 57 × 24, radius 0px, padding 0px. Control “US” measures 80 × 35, radius 0px, padding 5px. Control “Log in” measures 118 × 44, radius 36px, padding 0px 32px. Control “Sign up” measures 120 × 44, radius 36px, padding 0px 32px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The hero is1440 ×900 on rgb(17,14,8) at y109. Get-started controls are44px high, radius36px, chartreuse fill. Below-fold H3s use40px/48px Phonic sans and chartreuse type. NOVA mixes serif major headings with sober sans feature titles and fine neon separators.

## Imagery, graphic language and observational boundaries

The screenshot does not show chart graphics in the first viewport, so NOVA intentionally has no hero illustration. The unchanged weekday bar chart is moved into a dark outlined performance surface, not made into an investment chart. No stocks, returns, crypto, Gold pricing or signup functionality appears in the demo.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Georgia,'NOVA Local Serif SC','Songti SC',serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Provocative editorial launches, cultural campaigns, premium membership introductions. Avoid when: Cheerful light interfaces or dense utility workflows are required.

### Signature Atoms

- Canvas rgb(17, 14, 8), secondary black rgb(0, 0, 0), chartreuse rgb(204, 255, 0)
- Centered desktop headline 96px, weight 400, line-height 1.08, tracking -.04em
- Hero minimum height 1000px, no hero illustration, full-width chartreuse eyebrow band
- Hero buttons 44px minimum height, 36px radius, 11px by 32px padding
- Hard-corner sections with 1px chartreuse rules; sans feature titles 31px and serif closing title 70px

### Do

- Use monumental regular-weight serif titles, with sober sans typography for feature details.
- Keep the hero centered, dark, unusually sparse, and free of illustration.
- Reserve chartreuse for announcement bands, compact pills, feature titles, and fine separators.
- Use ruled two-column editorial modules instead of floating feature cards.
- Use system Georgia for display and Arial for body; keep Martina Plantijn only as a reference.

### Don't

- Do not copy Robinhood logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not introduce imaginary trading screenshots or chart graphics into the blank hero.
- Do not replace the serif statement with heavy geometric sans type.
- Do not add rounded pastel cards, glass gradients, or colorful background glows.
- Do not reduce the dark breathing room into a dense operational layout.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(17, 14, 8);
  --ink: rgb(255, 255, 255);
  --muted: rgb(255, 255, 255);
  --accent: rgb(204, 255, 0);
  --on-accent: rgb(17, 14, 8);
  --surface: rgb(0, 0, 0);
  --line: rgb(204, 255, 0);
  --radius: 0px;
  --display: Georgia,'NOVA Local Serif SC','Songti SC',serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 36px;
}
```

Example: [HTML](../examples/robinhood.html) and [preview](../examples/robinhood.png). [Style selection index](STYLE_INDEX.md).
