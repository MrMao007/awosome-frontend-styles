# Resend — Observed Homepage Design Paradigm

Source: [Resend](https://resend.com/). Category: Developer Tools. Capture: 2026-10-10T14:10:00.713Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An exceptionally restrained black editorial page with a large serif Latin heading, quiet gray navigation and sparse diagonal light. The source hero has little visible imagery; that emptiness is an observed feature, not a reason to invent a colorful email dashboard.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(0, 0, 0)` | Computed style: surfaces[0].bg, surfaces[0].parentBg, surfaces[2].image. |
| surface | `rgb(11, 14, 20)` | Computed style: textSamples[10].bg. |
| ink | `rgb(240, 240, 240)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| muted | `rgb(161, 164, 165)` | Computed style: textSamples[1].color, textSamples[1].border, textSamples[1].borderTop. |
| accent | `rgb(240, 240, 240)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| on-accent | `rgb(0, 0, 0)` | Computed style: surfaces[0].bg, surfaces[0].parentBg, surfaces[2].image. |
| line | `rgba(200, 200, 200, 0.1)` | Computed style: surfaces[2].image. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Email for developers | domaine, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 96px / 96px | 400 | -0.96px |
| Integrate | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 56px / 67.2px | 400 | -2.8px |
| First-class developer experience | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 56px / 67.2px | 400 | -2.8px |
| Test mode | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 400 | normal |
| Modular webhooks | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 400 | normal |
| Write using a delightful editor | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 56px / 67.2px | 400 | -2.8px |
| Go beyond editing | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 56px / 67.2px | 400 | -2.8px |
| Contact management | aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Position the Chinese hero in a narrow left editorial column, with a small outlined pill and large black negative space. Use the captured 96px source serif hierarchy as the motivation for an 80px localized display, not as an exact Chinese measurement. The source headline sampled at (168, 352) occupies 480 × 204px and uses 96px/96px, weight 400, tracking -0.96px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Dark inset buttons, zero-gap ruled capability cells and open metric columns preserve the sparse tone. Secondary headings switch to a neutral sans face, mirroring the source contrast between domaine hero and aBCFavorit section headings. A sampled div at (0, 0) is 1440 × 12174px; background rgb(0, 0, 0), border 0px solid rgb(240, 240, 240), radius 0px, padding 0px. A sampled h1 at (168, 352) is 480 × 204px; background rgba(0, 0, 0, 0), border 0px solid rgb(240, 240, 240), radius 0px, padding 0px 0px 12px. A sampled div at (520, 985) is 400 × 200px; background rgba(0, 0, 0, 0), border 0px solid rgb(240, 240, 240), radius 0px, padding 0px.

## Product Visualization and Background Language

Two blurred diagonal neutral light bands abstract the barely visible source floor lighting. Their only color is a measured gray alpha; there is no invented brand accent or reproduction of source email contents. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Georgia legally approximates the Latin domaine serif; all Chinese uses Noto Sans SC. The intact NOVA body is styled as a sparse editorial system, with the actual chart reduced to thin white signals and no business email claims copied.

The observed source display family is domaine, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji". The configured display stack is Georgia,'Noto Sans SC',serif; the UI font reference is Inter from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: Georgia,'Noto Sans SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Premium services, focused creative tools, editorial portfolios, and restrained product launches. Avoid when: Colorful storytelling, dense dashboards, or playful visual decoration is necessary.

### Signature Atoms

- Black rgb(0, 0, 0), inset surface rgb(11, 14, 20), ink rgb(240, 240, 240), muted rgb(161, 164, 165).
- System Georgia hero with Noto Sans SC; Inter sections and UI; adapted hero 80px, weight 400, line-height 1.13.
- 890px minimum hero, narrow 660px left copy column, and large unoccupied right-side space.
- 14px inset-button corners with a subtle inner highlight; small announcement pill uses 999px corners.
- Neutral rules rgba(200, 200, 200, 0.1); zero-gap three-column capability matrix within a 14px outer frame.
- Two diagonal neutral light bands use 8px blur; chart tracks are thin 7px white signals.

### Do

- Use system Georgia for Latin hero text and open-source Inter and Noto Sans SC for UI; reference domaine only.
- Preserve the large black negative space around a narrow left editorial hero.
- Switch secondary headings to neutral sans typography while keeping the hero serif-led.
- Use dark inset actions, hairline gray rules, and open metric columns with minimal elevation.
- Keep diagonal illumination neutral and barely visible; let typography carry the presentation.

### Don't

- Do not invent a saturated brand accent or colorful email dashboard.
- Do not fill the empty hero with a large mockup, orb, or illustration.
- Do not turn ruled capability cells into separated floating cards.
- Do not use heavy display weights, loud borders, or broad luminous shadows.
- Do not copy Resend logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(0, 0, 0);
  --surface: rgb(11, 14, 20);
  --ink: rgb(240, 240, 240);
  --muted: rgb(161, 164, 165);
  --accent: rgb(240, 240, 240);
  --on-accent: rgb(0, 0, 0);
  --line: rgba(200, 200, 200, 0.1);
  --radius: 14px;
  --button-radius: 14px;
  --weight: 400;
  --display: Georgia,'Noto Sans SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/resend.html) and [preview](../examples/resend.png). [Style selection index](STYLE_INDEX.md).
