# GoPro — Observed Homepage Design Paradigm

Source: [GoPro](https://gopro.com/zh/cn/). Category: Consumer Products. Capture: 2026-10-10T14:06:48.672Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A robust camera-product stage with broad900-weight condensed-wide headline, white navigation below a dark utility rail, black panoramic hero and side-by-side product objects. The screenshot contains carousel arrows and progress blocks; NOVA uses passive graphic markers, not fake carousel behavior.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(17, 17, 17)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(195, 197, 198)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(17, 17, 17)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(249, 249, 249)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(249, 249, 249, 0.35)` | Exact computed color in gopro.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| 影院级实力。随拍即出片。 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 40px / 40px | 900 | 0.25px |
| 新一代 GOPRO | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 52px / 52px | 900 | 0.25px |
| 360 MAX’D | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 40px / 40px | 900 | 0.25px |
| MISSION 1 PRO ILS 现已发布 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 52px / 52px | 900 | 0.25px |
| 通过活动购买 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 30px / 38px | 600 | 0.25px |
| 选择在 GOPRO 直购的理由 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 52px / 52px | 900 | 0.25px |
| 最新 GoPro 新闻 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 40px / 50px | 600 | 0.25px |
| 充分利用您的 GOPRO 摄像机 | SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif | 40px / 40px | 900 | 0.25px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The active source H2 is52px/52px weight900 at x146/y376,400px wide; adjacent slides have offscreen H2 positions and should not be treated as visible heroes. The top navigation measures100px. NOVA uses a heavy left-aligned Chinese title and a right abstract three-object workspace arrangement on a dark stage.

## Measured navigation, type and controls

The captured H2 uses SohneBreit, "SohneBreit Fallback Helvetica", "SohneBreit Fallback Arial", sans-serif at 52px, weight 900, line-height 52px and tracking 0.25px. Control “ZH” measures 44 × 18, radius 0px, padding 0px. Control “交易” measures 77 × 52, radius 0px, padding 0px 24px. Control “摄像机” measures 91 × 52, radius 0px, padding 0px 24px. Control “应用” measures 77 × 52, radius 0px, padding 0px 24px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source actions are square-ish white and outlined dark controls; the visible hero extends to y800, then a white120px gap before the next media block. NOVA uses hard rectangular modules, bold labels, a passive progress rail and generous product-stage gaps, no carts or purchase buttons.

## Imagery, graphic language and observational boundaries

The actual source imagery shows multiple cameras and lenses. The adaptation replaces them with three outlined rectangular work boards with circular empty nodes; this is expressly abstract, not a camera replica. No source hardware name, price, subscription claim, buy link or real commerce action is introduced.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Performance product launches, outdoor gear showcases, bold technical campaigns. Avoid when: Soft intimate storytelling or restrained lightweight editorial type is needed.

### Signature Atoms

- White rgb(255, 255, 255), near-black rgb(17, 17, 17), light surface rgb(249, 249, 249)
- Header has 40px dark utility rail above 60px navigation; dark hero 700px minimum height
- Left desktop headline 55px, weight 900, line-height 1.18, tracking -.05em
- Hero actions 8px radius, 48px minimum height, 2px white outlines; cards 0px radius
- Three-column feature grid, 24px gaps, 4px dark bottom rules; footer text adjusted to #626262

### Do

- Use robust heavy left-aligned typography and original abstract objects on a broad dark stage.
- Keep the utility rail, white navigation, and generous gaps between product-stage modules.
- Use rectangular controls, square feature surfaces, and passive segmented graphic markers.
- Preserve the delivered contrast adjustment: use #626262 for muted footer text on light surfaces.
- Use the delivered system Arial stack at heavy weights; keep SohneBreit only as a reference.

### Don't

- Do not copy GoPro logos, trademarks, product screenshots, illustrations, hardware renders, or marketing copy.
- Do not render pale rgb(195, 197, 198) as small body or footer text on white.
- Do not replace heavy rectangular modules with delicate serif type or pastel rounded cards.
- Do not make passive progress blocks resemble working carousel controls without actual behavior.
- Do not borrow source camera shapes, prices, subscription claims, or offscreen slide headlines.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(17, 17, 17);
  --muted: rgb(195, 197, 198);
  --accent: rgb(17, 17, 17);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(249, 249, 249);
  --line: rgba(249, 249, 249, 0.35);
  --radius: 0px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 900;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/gopro.html) and [preview](../examples/gopro.png). [Style selection index](STYLE_INDEX.md).
