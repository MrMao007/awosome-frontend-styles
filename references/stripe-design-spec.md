# Stripe — Observed Homepage Design Paradigm

Source: [Stripe](https://stripe.com/cn). Category: Finance & Commerce. Capture: 2026-10-10T14:01:45.374Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A spacious infrastructure editorial: a fine architectural grid, a light-weight left-aligned headline and a sweeping diagonal color ribbon. This capture is the current 48px Söhne composition, not the older giant gradient headline often associated with Stripe.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(6, 27, 49)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(100, 116, 141)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(83, 58, 253)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(229, 237, 245)` | Exact computed color in stripe.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| 金融基础设施，托举营收增长。无论您是刚刚起步，还是已达百亿规模，我们帮助您在全球范围内接受付款、提供金融服务，并实施定制化营收模式。 | sohne-var, "SF Pro Display", sans-serif | 48px / 55.2px | 400 | -0.96px |
| 金融基础设施，托举营收增长。无论您是刚刚起步，还是已达百亿规模，我们帮助您在全球范围内接受付款、提供金融服务，并实施定制化营收模式。 | sohne-var, "SF Pro Display", sans-serif | 48px / 55.2px | 400 | -0.96px |
| 灵活的解决方案，适配各种业务模式。 | sohne-var, "SF Pro Display", sans-serif | 32px / 35.2px | 400 | -0.64px |
| 接受并优化全球支付，涵盖线上和线下 | sohne-var, "SF Pro Display", sans-serif | 26px / 29.12px | 400 | -0.26px |
| 支持任何计费模式 | sohne-var, "SF Pro Display", sans-serif | 26px / 29.12px | 400 | -0.26px |
| 布局智能体商务 | sohne-var, "SF Pro Display", sans-serif | 26px / 29.12px | 400 | -0.26px |
| 创建发卡计划 | sohne-var, "SF Pro Display", sans-serif | 26px / 29.12px | 400 | -0.26px |
| 通过稳定币和加密货币，实现无国界资金流转 | sohne-var, "SF Pro Display", sans-serif | 26px / 29.12px | 400 | -0.26px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The H1 occupies x208/y293 with a 1024px line box; two overlapping text treatments occur in computed evidence. The screenshot shows a single legible message over a ribbon descending from the upper right. Navigation is a compact horizontal bar above a long, low-density hero; small rectangular purple actions sit beneath the copy.

## Measured navigation, type and controls

The captured H1 uses sohne-var, "SF Pro Display", sans-serif at 48px, weight 400, line-height 55.2px and tracking -0.96px. The sampled NAV is 1262 × 64 at x89/y6, with padding 10px 16px and gap 28px. Control “定价” measures 28 × 38, radius 4px, padding 12px 0px. Control “登录 登录” measures 70 × 40, radius 4px, padding 10.5px 20px 13.5px. Control “联系销售” measures 109 × 40, radius 4px, padding 11.5px 20px 12.5px. Control “立即开始” measures 125 × 48, radius 4px, padding 15.5px 24px 16.5px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The bottom logo rail uses a fine 1px rgb(229,237,245) divider inside a 1264px container. The next editorial heading starts at x104/y922, with a 32px title and muted continuation. Below-fold H3s describe an asymmetric product grid. NOVA uses unequal feature spans and thin ruled surfaces, not uniform rounded SaaS tiles.

## Imagery, graphic language and observational boundaries

A multicolor wave image is genuinely visible in the source screenshot. The adaptation replaces it with a CSS diagonal band using sampled purple, green and white only. Orange and pink image pixels are not claimed as measured UI palette values. No merchant cards, checkout fields, source logos or GDP counter are transplanted.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Infrastructure launches, developer platforms, enterprise capability pages. Avoid when: Dense operational interfaces or intimate handmade storytelling dominate.

### Signature Atoms

- White canvas rgb(255, 255, 255), navy ink rgb(6, 27, 49), purple action rgb(83, 58, 253)
- Desktop headline 56px, weight 400, line-height 1.2, tracking -.045em
- Buttons and chart corners 4px; rules 1px rgb(229, 237, 245); no card shadows
- Diagonal ribbon rotated -38deg, opacity .48, blending purple, white and rgb(129,184,26)
- Four-column feature grid, selected double spans, 24px gaps; content rail 1232px

### Do

- Keep the headline left-aligned and light, with a generous supporting paragraph below.
- Frame the hero and metric rail with fine architectural rules rather than floating cards.
- Place the diagonal ribbon off the upper-right edge, behind unobstructed text.
- Use unequal feature spans and compact purple rectangular actions.
- Use the example's system sans stack; treat sohne-var as a reference, not a font asset.

### Don't

- Do not copy Stripe logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not substitute a huge bold gradient-filled headline for the lightweight editorial title.
- Do not round every surface into pills or add soft floating-card shadows.
- Do not replace the asymmetric grid with identical feature tiles.
- Do not let the ribbon obscure copy or introduce unrelated saturated accent colors.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(6, 27, 49);
  --muted: rgb(100, 116, 141);
  --accent: rgb(83, 58, 253);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(229, 237, 245);
  --radius: 4px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 4px;
}
```

Example: [HTML](../examples/stripe.html) and [preview](../examples/stripe.png). [Style selection index](STYLE_INDEX.md).
