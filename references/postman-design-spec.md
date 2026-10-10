# Postman — Observed Homepage Design Paradigm

Source: [Postman](https://www.postman.com/). Category: Developer Tools. Capture: 2026-10-10T14:09:02.824Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A warm dark API-engineering homepage with cream typography, install-strip controls and a large spectrum-lit product horizon. The capture combines brown/ember upper space with pink-blue-green illumination below, not a plain orange-on-white interface.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(16, 2, 24)` | Computed style: surfaces[9].bg, surfaces[10].parentBg, surfaces[10].image. |
| surface | `rgb(23, 16, 10)` | Computed style: surfaces[1].bg, surfaces[2].parentBg, surfaces[7].bg. |
| ink | `rgb(255, 240, 222)` | Computed style: headings[0].color, headings[1].color, headings[2].color. |
| muted | `rgb(205, 191, 173)` | Computed style: textSamples[3].color, textSamples[7].color, textSamples[8].color. |
| accent | `rgb(255, 108, 55)` | Computed style: textSamples[1].color, surfaces[18].image. |
| on-accent | `rgb(23, 16, 10)` | Computed style: surfaces[1].bg, surfaces[2].parentBg, surfaces[7].bg. |
| line | `rgb(42, 32, 24)` | Computed style: controls[1].borderTop, surfaces[0].border, surfaces[0].borderTop. Interpretation / adaptation value; not independently established as an exact source token. |
| ember | `rgb(107, 36, 16)` | Computed style: surfaces[10].image. |
| blue | `rgb(25, 140, 247)` | Computed style: surfaces[18].image. |
| pink | `rgb(243, 127, 254)` | Computed style: surfaces[18].image. |
| green | `rgb(29, 163, 43)` | Computed style: surfaces[18].image. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| API  engineering engineering  for your agents | gtStandard, "gtStandard Fallback", inter, "inter Fallback", sans-serif | 63.36px / 64.6272px | 500 | -1.2672px |
| Equip your agents with pre-built skills | gtStandard, "gtStandard Fallback", inter, "inter Fallback", sans-serif | 36px / 43.88px | 500 | -0.72px |
| api-discovery | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |
| api-testing | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |
| api-mocking | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |
| api-monitoring | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |
| ci-integration | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |
| performance-testing | ibmPlexMono, "ibmPlexMono Fallback", monospace | 15px / 21px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use a 54px compact dark header, left-aligned Chinese copy and a large lower spectrum panel. The NOVA action pair becomes a segmented install-strip-like group without introducing a fake terminal command. The source headline sampled at (120, 154) occupies 426 × 129px and uses 63.36px/64.6272px, weight 500, tracking -1.2672px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Technical monospaced labels, dark brown service cards and cream text echo the source CLI emphasis. Rounded segmented actions contrast with the 3-column feature grid; lower metrics are separated by simple vertical rules. A sampled div at (52, 45) is 1117 × 530px; background rgb(34, 23, 16), border 1px solid rgb(42, 32, 24), radius 10px, padding 0px. A sampled div at (53, 46) is 895 × 528px; background rgb(23, 16, 10), border 0px solid lab(91.6229 -0.159115 -2.26791), radius 10px, padding 20px. A sampled section at (73, 418) is 855 × 107px; background rgba(0, 0, 0, 0), border not represented by a single shorthand, radius 0px, padding 20px 0px 0px. A sampled span at (73, 439) is 199 × 86px; background rgba(0, 0, 0, 0), border 0px solid lab(91.6229 -0.159115 -2.26791), radius 5px, padding 0px.

## Product Visualization and Background Language

The horizon spectrum uses exact computed gradient endpoints from the evidence: orange, pink, blue and green. Empty grid blocks and elliptical contour lines abstract the source demo; no package command, OS mark or business text is copied. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Original NOVA actions remain clickable and semantic, even when styled like an installation strip. The weekly chart borrows the spectrum but keeps its original four values and accessible label. Chinese line-height is deliberately looser than the 64.6272px sampled Latin line.

The observed source display family is gtStandard, "gtStandard Fallback", inter, "inter Fallback", sans-serif. The configured display stack is 'Inter','Noto Sans SC',sans-serif; the UI font reference is Inter from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Technical learning platforms, workflow utilities, and professional tool launches. Avoid when: A bright minimalist canvas or gentle consumer styling is needed.

### Signature Atoms

- Background rgb(16, 2, 24), brown surface rgb(23, 16, 10), cream ink rgb(255, 240, 222).
- Inter with Noto Sans SC; adapted hero 62px, weight 500, line-height 1.08, tracking -.055em.
- 54px compact navigation; left-aligned hero reserves 410px bottom padding for a 375px spectrum horizon.
- Spectrum endpoints rgb(255, 108, 55), rgb(243, 127, 254), rgb(25, 140, 247), rgb(29, 163, 43).
- Segmented action group has 999px outer radius, zero internal gap, and 48px minimum controls.
- Three-column brown feature cards use 10px corners and 16px gaps; ui-monospace technical labels.

### Do

- Use open-source Inter and Noto Sans SC; treat gtStandard only as an observed reference.
- Keep the upper hero warm and dark with cream text, then concentrate spectrum illumination near the lower horizon.
- Group real actions into a segmented installation-like strip without inventing a terminal command.
- Use monospaced eyebrows, tags, and detail labels against dark brown capability cards.
- Build the lower visual from empty grid blocks and elliptical contours, keeping body text clear of its glow.

### Don't

- Do not substitute orange-on-white styling for the observed warm dark treatment.
- Do not spread the spectrum gradient across every card or paragraph.
- Do not use uniformly oversized pill cards or isolated floating action buttons.
- Do not insert copied package commands, operating-system marks, or claimed benchmark data.
- Do not copy Postman logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(16, 2, 24);
  --surface: rgb(23, 16, 10);
  --ink: rgb(255, 240, 222);
  --muted: rgb(205, 191, 173);
  --accent: rgb(255, 108, 55);
  --on-accent: rgb(23, 16, 10);
  --line: rgb(42, 32, 24);
  --radius: 10px;
  --button-radius: 999px;
  --weight: 500;
  --ember: rgb(107, 36, 16);
  --blue: rgb(25, 140, 247);
  --pink: rgb(243, 127, 254);
  --green: rgb(29, 163, 43);
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/postman.html) and [preview](../examples/postman.png). [Style selection index](STYLE_INDEX.md).
