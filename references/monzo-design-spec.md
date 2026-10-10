# Monzo — Observed Homepage Design Paradigm

Source: [Monzo](https://monzo.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:07:58.308Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Friendly everyday banking with a huge rounded landscape hero inset24px from the viewport, heavy soft display text, coral brand emphasis and broad pill controls. A cookie choice initially dims the screenshot; the measured hero and supplemental consent-dismissed capture remain distinct from that overlay.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(242, 248, 243)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(9, 23, 35)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgba(9, 23, 35, 0.6)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(255, 79, 64)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(9, 23, 35)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(9, 23, 35)` | Exact computed color in monzo.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Spend your money on life, not your life on money | MonzoSansDisplay, sans-serif | 48.8288px / 58.5946px | 800 | normal |
| Get the most out of Monzo | MonzoSansDisplay, sans-serif | 39.0624px / 46.8749px | 800 | normal |
| Current accounts | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |
| Savings | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |
| Credit | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |
| Investments | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |
| Pensions | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |
| Homeownership | MonzoSansDisplay, sans-serif | 25px / 35px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The hero container is1392 ×750 at x24/y87 with64px corners. The original white H1 is48.8288px/58.5946px weight800 at x100/y376. NOVA uses a rounded navy inset stage, heavy left copy and a text-free tilted workflow panel; the adaptation does not mimic the photographed payment card.

## Measured navigation, type and controls

The captured H1 uses MonzoSansDisplay, sans-serif at 48.8288px, weight 800, line-height 58.5946px and tracking normal. The sampled NAV is 1232 × 51 at x176/y18, with padding 0px and gap 16px. Control “Personal” measures 152 × 40, radius 0px, padding 0px. Control “Business” measures 125 × 40, radius 100px, padding 8px 12px. Control “Sign up” measures 108 × 51, radius 500px, padding 12px 24px. Control “Open a free Monzo account” measures 264 × 48, radius 500px, padding 12px 24px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The underlying document alternates white and rgb(242,248,243) surfaces. Source actions use48px height and128px radius. A960px-wide cookie panel has32px corners, but no consent dialog is added to NOVA. The feature continuation uses spacious three-column surfaces and strong rounded nesting.

## Imagery, graphic language and observational boundaries

The source photograph shows a phone and coral payment card in a shop. NOVA uses coral/ring line geometry around an abstract project board, without bank accounts, FSCS badges, cards, sign-up claims or real payments. Coral rgb(255,79,64) is measured; dark navy anchors readable copy.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Everyday consumer services, membership pages, friendly app introductions. Avoid when: Hard-edged technical density or austere luxury presentation is required.

### Signature Atoms

- Canvas rgb(242, 248, 243), navy rgb(9, 23, 35), coral rgb(255, 79, 64)
- Navy hero inset 24px from viewport sides, 750px minimum height, 64px radius
- Desktop headline 55px, weight 800, line-height 1.25, tracking -.045em
- Broad controls 128px radius and 48px minimum height; nested cards 32px radius
- Tilted abstract panel rotated -17deg, 12px coral border, 50px corners, opacity .28

### Do

- Keep a white navigation band above a large navy inset landscape stage.
- Use heavy left-aligned copy, white text on navy, and broad white or coral pills.
- Repeat generous rounded nesting across hero, cards, chart, and closing section.
- Alternate fresh pale-green and white surfaces with sparse coral emphasis.
- Use the delivered system sans stack; keep MonzoSansDisplay as an observational reference.

### Don't

- Do not copy Monzo logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not turn the hero into a full-bleed square black rectangle.
- Do not replace friendly heavy headings with thin editorial serif type.
- Do not add sharp bordered dashboard tiles or heavy shadows.
- Do not reproduce the photographed payment card or treat a consent overlay as hero styling.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(242, 248, 243);
  --ink: rgb(9, 23, 35);
  --muted: rgba(9, 23, 35, 0.6);
  --accent: rgb(255, 79, 64);
  --on-accent: rgb(9, 23, 35);
  --surface: rgb(255, 255, 255);
  --line: rgb(9, 23, 35);
  --radius: 32px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 800;
  --button-radius: 128px;
}
```

Example: [HTML](../examples/monzo.html) and [preview](../examples/monzo.png). [Style selection index](STYLE_INDEX.md).
