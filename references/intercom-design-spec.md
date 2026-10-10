# Intercom — Observed Homepage Design Paradigm

Source: [Intercom](https://www.intercom.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:04:43.628Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An art-directed white editorial with huge light sans-serif headline, a serif body paragraph, small rectangular black actions and cropped photo fragments at the extreme edges. Blue corner-registration squares punctuate the hero, while the body settles into warm ivory panels.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(17, 17, 17)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `oklab(0.177637 0.00000810623 0.00000356138 / 0.6)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(17, 17, 17)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(250, 249, 246)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(211, 206, 198)` | Exact computed color in intercom.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| A complete system for AI and human customer service | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 80px / 80px | 400 | -2.4px |
| Two products, one seamless experience | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 24px / 24px | 400 | -0.48px |
| Intercom is a fully-featured AI-powered helpdesk | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 54px / 54px | 400 | -1.6px |
| Maximize efficiency with Copilot 2 in the Inbox | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 20px / 24px | 400 | -0.2px |
| Ticketing, built for collaboration | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 20px / 24px | 400 | -0.2px |
| Support for customers, before they need it | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 20px / 24px | 400 | -0.2px |
| Fin is the highest-performing AI agent | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 54px / 54px | 400 | -1.6px |
| Train and test Fin to handle complex queries | Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif | 20px / 24px | 400 | -0.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The sampled Saans H1 is 80px/80px, weight400, tracking-2.4px in a 742 × 240 box at x349/y190. The screenshot visually mutes first and third lines while keeping the middle black. NOVA retains its two lines and uses a centered oversized display with muted supporting paragraph, keeping side graphics clear of the text.

## Measured navigation, type and controls

The captured H1 uses Saans, "Saans Fallback", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic UI", "Yu Gothic", Meiryo, "Noto Sans JP", ui-sans-serif, system-ui, sans-serif at 80px, weight 400, line-height 80px and tracking -2.4px. The sampled NAV is 1416 × 40 at x12/y13, with padding 0px and gap normal. Control “Start free trial” measures 124 × 40, radius 4px, padding 0px 14px. Control “View demo” measures 110 × 40, radius 4px, padding 0px 14px. Control “Intercom helpdesk” measures 587 × 58, radius 0px, padding 16px. Control “Fin AI Agent” measures 587 × 58, radius 0px, padding 16px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

Navigation is 66px high on white. Actions are 40px high with radius4px and black fill. The next section begins y720 on rgb(250,249,246), with a24px heading and a two-part bordered product frame. NOVA uses warm-ivory panels, fine rules and paired feature surfaces, not rounded gradient cards.

## Imagery, graphic language and observational boundaries

Four photographic edge crops are visible; the CSS adaptation replaces these with abstract rectangular color/line fragments and blue registration markers using measured rgb(0,7,203). The body paragraph uses an explicit open-source serif approximation. No customer-support review count, Fin branding, trial or helpdesk functionality is copied.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Art-directed platform launches, collaborative tools, editorial enterprise service pages. Avoid when: Playful mascot storytelling or compact dense operational screens dominate.

### Signature Atoms

- White canvas rgb(255, 255, 255), ink rgb(17, 17, 17), ivory rgb(250, 249, 246)
- Centered desktop headline 78px, weight 400, line-height 1.1, tracking -.065em
- Supporting paragraph Noto Serif SC with Georgia fallback, 18px and line-height 1.6
- Hero corner-registration squares 8px by 8px, rgb(0,7,203); buttons 4px radius and 40px minimum height
- Paired zero-gap feature panels, 0px radius, 1px rgb(211, 206, 198) rules

### Do

- Center a large light sans title and keep edge fragments clear of its text area.
- Use the example's Noto Serif SC stack for supporting text; note its local fallback and keep Saans as a reference.
- Keep primary actions black, rectangular, compact, and only subtly rounded.
- Use blue registration squares and cropped abstract edge fragments as sparse art direction.
- Build paired warm-ivory surfaces with fine shared rules and underline-based active tabs.

### Don't

- Do not copy Intercom logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not make blue the main action color; reserve it for registration markers.
- Do not replace fine ruled ivory panels with pill cards or glowing gradients.
- Do not let edge graphics overlap the oversized central headline.
- Do not make all typography sans or replace light display type with heavy uppercase lettering.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(17, 17, 17);
  --muted: oklab(0.177637 0.00000810623 0.00000356138 / 0.6);
  --accent: rgb(17, 17, 17);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(250, 249, 246);
  --line: rgb(211, 206, 198);
  --radius: 0px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 4px;
}
```

Example: [HTML](../examples/intercom.html) and [preview](../examples/intercom.png). [Style selection index](STYLE_INDEX.md).
