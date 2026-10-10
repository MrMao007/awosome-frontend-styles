# Square — Observed Homepage Design Paradigm

Source: [Square](https://squareup.com/us/en). Category: Finance & Commerce. Capture: 2026-10-10T14:04:04.659Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A neighborhood-cinema storefront with full-bleed moving imagery, a centered high-contrast serif-looking display and blue/white capsule actions. The sampled H1 declares Square Sans Display VF even though the rendered glyph appearance is serif; this study explicitly distinguishes computed family from screenshot appearance.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(0, 0, 0)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(26, 26, 26)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(0, 106, 255)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgba(0, 0, 0, 0.25)` | Exact computed color in square.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Local legend or global icon. Make it big on your block. | "Square Sans Display VF", "Square Sans Display", Helvetica, Arial, "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif | 64px / 0px | 400 | -0.5px |
| Whatever your flavor of business, build and grow on your terms. | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| Smooth checkout, every time | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| See your whole business click into place | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| Keep your business growing | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| Make smart decisions, fast | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| Run your entire business with one plan | "Exact Block", Georgia, "Times New Roman", "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", serif | 40px / 45px | 400 | -0.8px |
| Square Free | "Cash Sans", "Helvetica Neue", Helvetica, Arial, "Noto Sans JP", "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif | 24px / 28.8px | 500 | -0.24px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The hero is a 1440 × 1000 black-backed video surface with a .25 black overlay. A two-line centered message occupies x60/y357 with a 1320px box. Its computed line-height is 0px, evidently a wrapper effect, not a recommended typographic rule. NOVA uses a real 1.2 line height and a legal serif substitute matching the visible impression.

## Measured navigation, type and controls

The captured H1 uses "Square Sans Display VF", "Square Sans Display", Helvetica, Arial, "Hiragino Sans", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif at 64px, weight 400, line-height 0px and tracking -0.5px. The sampled HEADER is 1440 × 72 at x0/y0, with padding 0px and gap normal. Control “Support” measures 85 × 63, radius 4px, padding 18px 10px. Control “Your Cart” measures 41 × 61, radius 4px, padding 20px 10px. Control “Get started” measures 126 × 44, radius 50px, padding 0px. Control “Contact sales” measures 143 × 44, radius 50px, padding 0px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source starts with transparent 72px navigation and full-bleed media, without a boxed hero. Lower text uses Exact Block at 40px/45px, weight400. NOVA sections use broad editorial strips and a two-column showcase; metrics sit on a monochrome horizontal band with no faux checkout hardware.

## Imagery, graphic language and observational boundaries

The video depicts a person in a neighborhood shop. NOVA replaces it with an abstract architectural window/grid arrangement on black, preserving cinematic framing without copying people, POS devices, pricing, carts or purchase actions. Blue is measured rgb(0,106,255); white and black dominate.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Georgia,'NOVA Local Serif SC','Songti SC',serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Local business stories, creative service showcases, cinematic portfolio launches. Avoid when: Dense application screens or illustration-led playful campaigns take priority.

### Signature Atoms

- White canvas rgb(255, 255, 255), black ink rgb(0, 0, 0), action blue rgb(0, 106, 255)
- Centered desktop headline 78px, weight 400, line-height 1.2, tracking -.035em
- Full-bleed black hero 960px minimum height with transparent 72px navigation
- Blue and white hero capsules 50px radius, 44px minimum height, 11px by 25px padding
- Two-column editorial showcase with 45px by 30px gaps, hard corners, and thin monochrome rules

### Do

- Center a serif-like title over a full-bleed dark cinematic stage with restrained original imagery.
- Use system Georgia for the visible serif impression and Arial for body; keep Exact Block as a reference.
- Use a real readable line-height rather than the source wrapper's zero-height measurement.
- Pair a blue primary capsule with a white secondary capsule beneath the message.
- Continue with broad ruled editorial strips and a two-column showcase, not checkout hardware.

### Don't

- Do not copy Square logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not reproduce the source wrapper's 0px line-height on actual display text.
- Do not box the hero into a small rounded card or crowd its cinematic frame.
- Do not substitute identical shadowed SaaS tiles for broad editorial strips.
- Do not introduce POS replicas, carts, or brand-owned neighborhood video footage.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(0, 0, 0);
  --muted: rgb(26, 26, 26);
  --accent: rgb(0, 106, 255);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgba(0, 0, 0, 0.25);
  --radius: 0px;
  --display: Georgia,'NOVA Local Serif SC','Songti SC',serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 50px;
}
```

Example: [HTML](../examples/square.html) and [preview](../examples/square.png). [Style selection index](STYLE_INDEX.md).
