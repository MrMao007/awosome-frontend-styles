# Figma — Observed Homepage Design Paradigm

Source: [Figma](https://www.figma.com/). Category: Design & Creation. Capture: 2026-10-10T13:52:54.065Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A sparse, asymmetrical creative gallery rather than a centered SaaS headline. The observed hero places a narrow 56px, regular-weight statement at x=40 beside a tall, layered montage, with a detached oversized black action on the far right. White space is the organizing material; colorful imagery is not a global brand-color token.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed background of the full-width header and hero section. |
| Ink / primary button | `rgb(0, 0, 0)` | Computed H1 color and Get started button background. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The full-stack creative canvas | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 56px / 56px | 400 | -1.25px |
| Move fast in the right direction on an AI-native canvas. | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 30px / 36px | 400 | -0.66px |
| One workspace for your entire product development process. | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 30px / 36px | 400 | -0.66px |
| Design anything you can imagine | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 16px / 22.4px | 400 | normal |
| Build with intention | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 16px / 22.4px | 400 | normal |
| Powerfully expressive. Incredibly precise. | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 30px / 36px | 400 | -0.66px |
| Start with design context. Build with consistency. | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 30px / 36px | 400 | -0.66px |
| The products you love are designed in Figma | figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif | 44px / 48.4px | 400 | -0.66px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The rendered header is 78px tall and spans 1440px. The hero occupies 860px below it, with 80px vertical padding. Its text column measures 328px; the montage occupies approximately 581 × 700px starting at x=430. The large action is positioned at x=1124. This unusually separated three-part composition distinguishes the page from standard centered product marketing.

## Components and Controls

Navigation labels use 16px figmaSans, 400 weight, and 23.2px line-height. The header action has an 8px radius and black fill; the hero action expands to 224 × 84px with a 16px radius. Most layout surfaces have no border or shadow. A black cookie overlay appears in the screenshot but is not part of the adapted content.

## Visual Expression

The source montage overlaps rectangular photographic and interface planes at staggered depths. The typography remains quiet: the H1 is 56px/56px with -1.25px tracking and weight 400. The adaptation uses anonymous layered panels, a phone-like monochrome card and CSS-generated circular marks. No source photography, customer marks or original business text is copied.

## Adaptation to the NOVA Example

The NOVA headline remains left-aligned and narrow. Its unchanged subtitle is kept below the heading; the existing action container is visually detached to the right on desktop. An abstract monochrome collage occupies the middle. Metrics become generous borderless columns, capabilities become editorial tiles, and the closing region reverses to black. Mobile restores normal document flow and collapses the detached action before it can overlap Chinese copy. CSS-only panel shapes are an interpretation, not a reproduction of the photographed artwork.

The observed figmaSans and figmaMono are not redistributed. Manrope (SIL Open Font License) substitutes for the Latin display face; Noto Sans SC (SIL Open Font License) explicitly localizes Chinese. The replacement is not claimed to be metrically identical.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Cultural portfolios, creative collectives, exhibitions, and visual project launches. Avoid when: Dense operational screens require uniform alignment and compact controls.

### Signature Atoms

- Canvas #ffffff, ink and primary action #000000, supporting text #333333.
- Manrope with Noto Sans SC; adapted display 54px, weight 400, line-height 1.16, tracking -.045em.
- Desktop hero min-height 860px; narrow copy 360px; detached action column 215px wide at right 5%.
- Primary action radius 16px, min-height 72px, label 23px; secondary action is an underlined text link.
- Editorial cards have 0px corners and 1px black top rules; alternating panels invert to #000 with #fff text.
- Central striped plane 35% wide and 590px tall; offset outline layers frame a black inset with 28px corners.

### Do

- Use regular Manrope display type and Noto Sans SC localization rather than a heavy geometric headline.
- Separate narrow left copy, central collage, and oversized right action into distinct desktop zones.
- Build original overlapping planes and monochrome circular marks instead of a conventional dashboard mockup.
- Use whitespace and thin top rules to organize open metrics and editorial tiles.
- Reverse the closing section to white text on black, with a white action surface.
- Return detached actions to document flow and hide the collage before narrow layouts overlap text.

### Don't

- Do not copy Figma logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not center the headline and collapse the desktop hero into a generic single-column SaaS composition.
- Do not turn colorful source artwork into a universal rainbow interface palette.
- Do not apply soft rounded cards or diffuse shadows to every content surface.
- Do not replace quiet regular display text with an extra-bold oversized slogan.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #000000;
  --muted: #333333;
  --accent: #000000;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --line: rgba(0,0,0,.16);
  --radius: 0px;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
  --weight: 400;
  --button-radius: 16px;
}
```

Example: [HTML](../examples/figma.html) and [preview](../examples/figma.png). [Style selection index](STYLE_INDEX.md).
