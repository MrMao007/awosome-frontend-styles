# Oura — Observed Homepage Design Paradigm

Source: [Oura](https://ouraring.com/). Category: Consumer Products. Capture: 2026-10-10T14:07:30.130Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

An elevated wellness editorial: warm cream full-bleed canvas, very light high-contrast serif typography at the left, one blue pill and overscaled isolated hand/ring photography at the right. The photograph carries personality; the UI itself stays extremely restrained.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(247, 241, 232)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(74, 71, 65)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(74, 71, 65)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(42, 114, 222)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(236, 236, 236)` | Exact computed color in oura.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Wear your best life | "Editorial New", serif | 80px / 88px | 300 | -4px |
| Understand your body. Own your health. | "Editorial New", serif | 68px / 74.8px | 400 | -2.04px |
| Get the best sleep of your life | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |
| Don't just live longer, live healthier | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |
| Bring your fitness goals into focus | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |
| Listen to what your heart is telling you | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |
| Understand the ins and outs of women's health | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |
| Put your stress to the test | AkkuratLL, sans-serif | 40px / 40px | 300 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The Editorial New H1 is80px/88px weight300, x64/y338 with a282 ×176 box. A49px cream announcement rail sits above the navigation. NOVA uses a slender serif Chinese-localized title at the left with a cream backdrop and a large abstract ring/orbit diagram, not a reproduction of the hand or smart ring.

## Measured navigation, type and controls

The captured H1 uses "Editorial New", serif at 80px, weight 300, line-height 88px and tracking -4px. The sampled NAV is 1440 × 65 at x0/y65, with padding 8px 0px and gap normal. Control “Why Oura” measures 143 × 48, radius 3.35544e+07px, padding 12px 24px. Control “For Organizations” measures 204 × 48, radius 3.35544e+07px, padding 12px 24px. Control “There are no items in your cart” measures 48 × 48, radius 3.35544e+07px, padding 0px. Control “Shop Now” measures 123 × 48, radius 3.35544e+07px, padding 12px 24px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The full source background is rgb(247,241,232), text rgb(74,71,65), and blue action rgb(42,114,222) at48px high with effectively pill radius. The next major heading is68px/74.8px. NOVA sections remain open and borderless with quiet ruled data columns and long alternating editorial capability rows.

## Imagery, graphic language and observational boundaries

No health/readiness/sleep score is invented. The actual NOVA chart remains42/68/84/96 and is explicitly a weekly-work chart. Abstract rings symbolize linked work, not biometrics; no cart, subscription, purchase button or proprietary ring renders are copied. Original Editorial New and Akkurat are substituted legally.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Georgia,'NOVA Local Serif SC','Songti SC',serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Premium lifestyle services, personal development products, refined editorial launches. Avoid when: Playful high-energy campaigns or dense operational dashboards are required.

### Signature Atoms

- Cream canvas rgb(247, 241, 232), warm-gray ink rgb(74, 71, 65), action blue rgb(42, 114, 222)
- Left desktop headline 78px, weight 300, line-height 1.12, tracking -.05em
- Open hero 1000px minimum height, 64px side gutters; blue controls 999px radius and 48px minimum height
- Orbit panel 540px by 630px, rotated -18deg; white ring border 44px thick
- Quiet 1px rgb(236, 236, 236) rules, square borderless feature surfaces, and 8px chart bars

### Do

- Use a slender left-aligned serif title on a full warm-cream canvas with abundant empty space.
- Use system Georgia for display and Arial for body; keep Editorial New and AkkuratLL only as references.
- Reserve blue for restrained pill actions and let original overscaled orbit imagery carry personality.
- Continue with open editorial rows, quiet ruled columns, and borderless surfaces.
- Keep supporting text warm gray and readable, with subdued rather than glowing graphic contrast.

### Don't

- Do not copy Oura logos, trademarks, product screenshots, illustrations, ring renders, or marketing copy.
- Do not turn abstract orbits into replicas of proprietary smart rings or biometric score graphics.
- Do not replace the slender serif hierarchy with heavy compact sans typography.
- Do not add glossy cards, neon accents, saturated backgrounds, or dense dashboard chrome.
- Do not import sleep, readiness, or health claims into unrelated product content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(247, 241, 232);
  --ink: rgb(74, 71, 65);
  --muted: rgb(74, 71, 65);
  --accent: rgb(42, 114, 222);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(236, 236, 236);
  --radius: 0px;
  --display: Georgia,'NOVA Local Serif SC','Songti SC',serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 300;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/oura.html) and [preview](../examples/oura.png). [Style selection index](STYLE_INDEX.md).
