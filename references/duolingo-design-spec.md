# Duolingo — Observed Homepage Design Paradigm

Source: [Duolingo](https://www.duolingo.com/). Category: Consumer Products. Capture: 2026-10-10T14:06:46.826Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A friendly learning-product composition with an illustrated cluster on the left, a compact rounded 32px headline on the right and stacked dimensional controls. Green is visible in SVG artwork, but it is not in the computed color evidence; the NOVA accent therefore uses the actually sampled sky blue rather than inventing a green token.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(75, 75, 75)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(119, 119, 119)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(28, 176, 246)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(255, 255, 255)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(175, 175, 175)` | Exact computed color in duolingo.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The most fun way to learn languages, chess, and more! | duolingo-sans, sans-serif | 32px / normal | 700 | normal |
| free. fun. effective. | feather, sans-serif | 48px / normal | 700 | normal |
| backed by science | feather, sans-serif | 48px / normal | 700 | normal |
| stay motivated | feather, sans-serif | 48px / normal | 700 | normal |
| personalized learning | feather, sans-serif | 48px / normal | 700 | normal |
| learn anytime, anywhere | feather, sans-serif | 64px / normal | 700 | -1.28px |
| duolingo english test | feather, sans-serif | 48px / normal | 700 | normal |
| learn a language with duolingo | feather, sans-serif | 64px / normal | 700 | -1.28px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The original duolingo-sans H1 sits at x734/y375 with a480 ×88 box and32px weight700 type. A playful character cluster occupies the left half; controls are two wide stacked rounded bars. NOVA repositions its unchanged copy on the right and uses floating abstract workflow tiles on the left, no owl mascot or language claims.

## Measured navigation, type and controls

The captured H1 uses duolingo-sans, sans-serif at 32px, weight 700, line-height normal and tracking normal. The sampled NAV is 988 × 70 at x226/y0, with padding 0px and gap normal. Control “ITALIAN” measures 101 × 28, radius 0px, padding 0px. Control “PORTUGUESE” measures 139 × 28, radius 0px, padding 0px. Control “DUTCH” measures 93 × 28, radius 0px, padding 0px. Control “JAPANESE” measures 119 × 28, radius 0px, padding 0px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The source header is72px high on white, with a920px hero and bottom80px language rail. Below-fold feather headings are48px weight700. The adaptation uses raised-border controls, pale open surfaces, a slim metric rail and alternating feature tiles; embossed button edges are an authored interpretation of the screenshot, not exact brand shadow tokens.

## Imagery, graphic language and observational boundaries

Observed imagery is colorful mascot art, not a conventional app screenshot. It is replaced with text-free circles and squares, using measured blue/gray/white colors. The learner/account CTA and language flags are excluded; NOVA filters still produce exactly two cards for each mode, with no learning progression invented.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The mobile menu uses the existing adjusted foreground #626262 on white, instead of the lighter navigation gray. This is an independent example accessibility adjustment, not a measured source-mobile rule.

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Learning tools, playful onboarding, hobby communities, approachable consumer launches. Avoid when: Austere luxury or dense enterprise data scanning is required.

### Signature Atoms

- White rgb(255, 255, 255), ink rgb(75, 75, 75), sky blue rgb(28, 176, 246)
- Right-side copy region 480px wide; desktop title 37px, weight 800, line-height 1.3
- Stacked hero controls 12px radius, 50px minimum height, 2px borders, 4px raised-edge shadows
- Feature panels 16px radius, 2px rgb(175, 175, 175) borders, 25px gaps
- Adjusted body #626262, action labels #07354b, outlined action and feature headings #0b618a

### Do

- Place a playful cluster of original circles and tiles left of compact centered copy on the right.
- Stack broad controls with raised lower edges and use outlined rounded panels.
- Use measured sky blue as decoration, not an invented green inferred from mascot artwork.
- Preserve contrast fixes: #626262 body, #07354b labels on blue, and #0b618a blue text on white.
- Use the delivered system sans stack at heavy weights; keep duolingo-sans and feather only as references.

- Use #626262 for small mobile-menu links on white rather than the lighter navigation gray.

### Don't

- Do not copy Duolingo logos, trademarks, product screenshots, mascot illustrations, or marketing copy.
- Do not use white small text on sky-blue controls or pale blue headings on white.
- Do not invent green interface tokens from the source mascot artwork.
- Do not replace raised edges with glass blur, soft ambient shadows, or sharp black editorial tiles.
- Do not inflate the compact headline into a monumental campaign display or add fake learning progression.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(75, 75, 75);
  --muted: rgb(119, 119, 119);
  --accent: rgb(28, 176, 246);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(175, 175, 175);
  --radius: 16px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 700;
  --button-radius: 12px;
}
```

Example: [HTML](../examples/duolingo.html) and [preview](../examples/duolingo.png). [Style selection index](STYLE_INDEX.md).
