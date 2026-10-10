# Clerk — Observed Homepage Design Paradigm

Source: [Clerk](https://clerk.com/). Category: Developer Tools. Capture: 2026-10-10T14:10:19.112Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A precise authentication component showroom: floating soft-gray navigation, bold black headline, small tab selectors and a large white framed UI stage. The observed violet is a sparing state accent, not a license to turn the page into a purple gradient.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(247, 247, 248)` | Computed style: controls[1].parentBg, controls[19].parentBg, surfaces[0].bg. |
| surface | `rgb(255, 255, 255)` | Computed style: headings[2].color, headings[3].color, headings[4].color. |
| ink | `rgb(19, 19, 22)` | Computed style: headings[0].color, headings[14].color, headings[15].color. |
| muted | `rgb(94, 95, 110)` | Computed style: textSamples[1].color. |
| accent | `rgb(19, 19, 22)` | Computed style: headings[0].color, headings[14].color, headings[15].color. |
| on-accent | `rgb(255, 255, 255)` | Computed style: headings[2].color, headings[3].color, headings[4].color. |
| line | `rgb(217, 217, 222)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. |
| violet | `rgb(151, 133, 255)` | Computed style: headings[1].color, headings[20].color. |
| soft | `rgb(238, 238, 240)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Everything you need for authentication | geistNumbers, suisse, "suisse Fallback" | 56px / 64px | 700 | -1.96px |
| User authentication | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Multifactor Authentication | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Fraud and Abuse Prevention | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Advanced security | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Session Management | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Social Sign-On | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |
| Bot Detection | geistNumbers, suisse, "suisse Fallback" | 13px / 24px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Float a 44px rounded navigation rail above a left-weighted hero. Position the NOVA action group as a compact right utility block, and place an empty outlined component stage underneath to evoke the source login-component showcase. The source headline sampled at (120, 190) occupies 598 × 128px and uses 56px/64px, weight 700, tracking -1.96px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Capabilities use a left filter rail and a two-column white component gallery. Subtle gray borders, small typography and black primary actions dominate; a dark impact zone introduces the measured lavender state accent. A sampled div at (0, 0) is 1440 × 7187px; background rgb(247, 247, 248), border 0px solid rgb(217, 217, 222), radius 0px, padding 0px. A sampled div at (0, 26) is 1440 × 1164px; background rgb(255, 255, 255), border 0px solid rgb(217, 217, 222), radius 0px, padding 0px 0px 32px. A sampled section at (0, 26) is 1440 × 1132px; background rgb(255, 255, 255), border 0px solid rgb(217, 217, 222), radius 0px, padding 164px 0px 0px. A sampled div at (120, 418) is 1200 × 741px; background rgba(0, 0, 0, 0), border not represented by a single shorthand, radius 16.5px, padding 0px.

## Product Visualization and Background Language

An empty inset panel and segmented top bar suggest composable identity widgets without displaying a fake email field, copying sign-up copy or reproducing social-provider marks. The pseudo-elements remain non-interactive. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

The source suisse display is substituted with open-source Inter and explicit Noto Sans SC. Real NOVA filters occupy the component tabs; the dialog remains the only actual overlay. The adaptation avoids source account collection or imitation of a real login page.

The observed source display family is geistNumbers, suisse, "suisse Fallback". The configured display stack is 'Inter','Noto Sans SC',sans-serif; the UI font reference is Inter from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Component libraries, configuration tools, professional software, and modular product galleries. Avoid when: Illustration-driven storytelling or immersive full-page gradients are essential.

### Signature Atoms

- Canvas rgb(247, 247, 248), white rgb(255, 255, 255), ink rgb(19, 19, 22), violet rgb(151, 133, 255).
- Inter with Noto Sans SC; adapted hero 56px, weight 700, line-height 1.15, tracking -.055em.
- Floating 44px navigation rail with 16px corners; 760px white hero contains a low 360px framed component stage.
- Black primary actions use 8px corners; compact utility group has 12px corners and fine neutral borders.
- Capability layout combines a 220px left filter rail with paired 12px white cards and 16px card gaps.
- Dark impact band uses violet chart fills, 10px tracks, and white labels rather than a full purple theme.

### Do

- Use open-source Inter and Noto Sans SC; treat suisse and geistNumbers only as observed references.
- Float a softly outlined gray navigation rail over a white, left-weighted hero.
- Use an empty framed component stage with a segmented top bar instead of a copied login screen.
- Organize capabilities as a left filter rail beside a compact two-column component gallery.
- Keep primary actions black and restrict violet to sparse detail states and the dark impact band.

### Don't

- Do not turn the page into a purple gradient campaign.
- Do not replace precise small UI labels with oversized decorative typography.
- Do not use heavy shadows or colorful floating cards throughout the gallery.
- Do not add imitation sign-up fields, social-provider marks, or account-collection UI as decoration.
- Do not copy Clerk logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(247, 247, 248);
  --surface: rgb(255, 255, 255);
  --ink: rgb(19, 19, 22);
  --muted: rgb(94, 95, 110);
  --accent: rgb(19, 19, 22);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(217, 217, 222);
  --radius: 16px;
  --button-radius: 8px;
  --weight: 700;
  --violet: rgb(151, 133, 255);
  --soft: rgb(238, 238, 240);
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/clerk.html) and [preview](../examples/clerk.png). [Style selection index](STYLE_INDEX.md).
