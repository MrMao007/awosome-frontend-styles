# Sonos — Observed Homepage Design Paradigm

Source: [Sonos](https://www.sonos.com/zh-cn/home). Category: Consumer Products. Capture: 2026-10-10T14:05:15.324Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A restrained sound/lifestyle cinema: a100px white navigation band, an830px photographic hero and a centered72px white statement above a broad outline capsule. The observed UI palette is only black and white; greens/browns belong to the source photo, not measured brand tokens.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(0, 0, 0)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(0, 0, 0)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(0, 0, 0)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(0, 0, 0)` | Exact computed color in sonos.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| 全套家庭音响系统 | aktiv-grotesk, Helvetica, Arial, sans-serif | 72px / 86.4px | 500 | normal |
| 聆听真实的原始声音 | aktiv-grotesk, Helvetica, Arial, sans-serif | 96px / 115.2px | 500 | normal |
| 惊人的清晰度 | aktiv-grotesk, Helvetica, Arial, sans-serif | 64px / 76.8px | 500 | normal |
| 专业调音 | aktiv-grotesk, Helvetica, Arial, sans-serif | 64px / 76.8px | 500 | normal |
| 优美平衡 | aktiv-grotesk, Helvetica, Arial, sans-serif | 64px / 76.8px | 500 | normal |
| 肆意聆听 | aktiv-grotesk, Helvetica, Arial, sans-serif | 64px / 76.8px | 500 | normal |
| 打造属于自己的音响系统 | aktiv-grotesk, Helvetica, Arial, sans-serif | 72px / 86.4px | 500 | normal |
| 串联每个房间 | aktiv-grotesk, Helvetica, Arial, sans-serif | 64px / 76.8px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The Chinese source hero H1 is72px/86.4px weight500 within a1227px box at x107/y434. The large centered headline sits over a person wearing headphones. NOVA uses equivalent central weight and a long full-bleed stage, replacing the photograph with repeated black-and-white acoustic-wave rings.

## Measured navigation, type and controls

The captured H1 uses aktiv-grotesk, Helvetica, Arial, sans-serif at 72px, weight 500, line-height 86.4px and tracking normal. The sampled NAV is 80 × 100 at x53/y0, with padding 0px and gap normal. Control “专业” measures 32 × 21, radius 80px, padding 0px. Control “我的帐户” measures 16 × 17, radius 80px, padding 0px. Control “搜索” measures 17 × 17, radius 80px, padding 0px. Control “立即选购” measures 172 × 59, radius 80px, padding 16px 48px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The hero surface is1440 ×830 black at y100. Source learn-more buttons are59px high, 2px black outline and radius80px. The next visible H1 is96px/115.2px centered in a640px box. NOVA sections use very large centered titles, open grid gutters and a monochrome product-shelf rhythm.

## Imagery, graphic language and observational boundaries

The source image subject, headphones, Sonos product names and shopping buttons are not reproduced. An abstract wave field represents work flowing through NOVA. The adaptation is deliberately monochrome, making no unmeasured warm-gray surface claims; visual distinction comes from full-width wave geometry, wide spacing and large outline controls.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Experiential product showcases, creative studios, immersive lifestyle service pages. Avoid when: Colorful playful navigation or dense task-focused interfaces are needed.

### Signature Atoms

- Interface palette black rgb(0, 0, 0) and white rgb(255, 255, 255), without added color accents
- White navigation band 100px high; full-width black hero 830px minimum height
- Centered desktop headline 70px, weight 500, line-height 1.22, tracking -.04em
- Broad action capsules 80px radius, 59px minimum height, 2px outlines, 15px by 42px padding
- Wave field 1050px by 1050px with repeating radial rings; hard-corner paired feature surfaces

### Do

- Keep the interface strictly black and white, letting spacing and geometry create distinction.
- Center large medium-weight statements over a long full-bleed cinematic stage.
- Use broad outline capsules and sparse repeated wave rings as the graphic signature.
- Continue with open gutters, large centered headings, and monochrome product-shelf rhythm.
- Use the delivered system Arial stack; keep aktiv-grotesk only as a source reference.

### Don't

- Do not copy Sonos logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not add warm-gray, green, or brown UI tokens inferred from the source photograph.
- Do not shrink the cinematic stage into a compact bordered hero card.
- Do not use tiny pills, colorful badges, or dense dashboard panels.
- Do not replace the open monochrome rhythm with glossy gradients or heavy card shadows.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(0, 0, 0);
  --muted: rgb(0, 0, 0);
  --accent: rgb(0, 0, 0);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(0, 0, 0);
  --radius: 0px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 500;
  --button-radius: 80px;
}
```

Example: [HTML](../examples/sonos.html) and [preview](../examples/sonos.png). [Style selection index](STYLE_INDEX.md).
