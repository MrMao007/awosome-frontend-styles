# Convex — Observed Homepage Design Paradigm

Source: [Convex](https://www.convex.dev/). Category: Developer Tools. Capture: 2026-10-10T14:06:23.193Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A retro-modern reactive backend page: extra-heavy white hero typography on brown-black, warm cream lower content and three bold curved racing stripes. This is a graphic contrast system, not an undifferentiated dark neon site.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(246, 238, 219)` | Computed style: headings[6].color, headings[6].border, headings[6].borderTop. |
| surface | `rgb(250, 244, 233)` | Computed style: controls[33].color. |
| ink | `rgb(20, 20, 20)` | Computed style: headings[1].color, textSamples[4].color, textSamples[4].border. |
| muted | `rgb(109, 109, 112)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |
| accent | `rgb(113, 30, 94)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |
| on-accent | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| line | `rgb(194, 194, 194)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |
| night | `rgb(40, 29, 29)` | Computed style: controls[2].bg, controls[3].parentBg, surfaces[0].bg. |
| yellow | `rgb(243, 176, 28)` | Computed style: controls[0].bg. |
| red | `rgb(238, 52, 47)` | Source PNG RGB pixel at desktop coordinate (20, 567); image/composite sample, not an inferred CSS brand token. |
| ribbon | `rgb(141, 38, 118)` | Source PNG RGB pixel at desktop coordinate (20, 590); image/composite sample, not an inferred CSS brand token. |
| white | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| ALL GAS NO BREAKAGES | neue-haas-grotesk-display, gtAmerica, sans-serif | 60px / 51px | 900 | -2.4px |
| TRUSTED BY | vcr, "vcr Fallback", monospace | 10px / 15px | 400 | 0.6px |
| Solved. | gtAmerica, sans-serif | 40px / 40px | 700 | -1px |
| Ready for agentic workloads (and everything else) | gtAmerica, sans-serif | 40px / 40px | 700 | -0.4px |
| QUOTES | vcr, "vcr Fallback", monospace | 10px / 15px | 400 | 0.6px |
| We learned how to build and run distributed systems at exabyte scale s | gtAmerica, sans-serif | 40px / 40px | 700 | -0.8px |
| Jamie Turner | gtAmerica, sans-serif | 20px / 30px | 500 | normal |
| James Cowling | gtAmerica, sans-serif | 20px / 30px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Place the Chinese heading left of an abstract setup pane and run curved yellow-red-purple tracks beneath it. The cream metrics section immediately changes the temperature of the page. The source headline sampled at (48, 188) occupies 509 × 102px and uses 60px/51px, weight 900, tracking -2.4px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Heavy localized display, white pill actions, monospaced detail chips and unequal 1.4:1:1 feature cells produce a dense reactive-tools feel. Selected dark feature cells deliberately contrast with cream ones. A sampled header at (0, 44) is 1440 × 80px; background rgb(40, 29, 29), border 0px solid rgb(20, 20, 20), radius 0px, padding 0px. A sampled div at (1, 158) is 896 × 131px; background rgba(0, 0, 0, 0), border not represented by a single shorthand, radius 0px, padding 16px 16px 20px. A sampled a at (601, 17) is 280 × 160px; background oklab(0.280938 0.000012815 0.00000563264 / 0.05), border 0px solid rgb(20, 20, 20), radius 12px, padding 12px. A sampled section at (0, 124) is 1440 × 479px; background rgb(40, 29, 29), border 0px solid rgb(20, 20, 20), radius 0px, padding 0px.

## Product Visualization and Background Language

Yellow is a computed source token; the red and ribbon purple are explicit source PNG pixels at (20,567) and (20,590). Curved tracks and empty setup frames recreate only visual grammar, without source agent prompt text or code commands. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Archivo legally approximates the source heavy grotesk; Chinese uses Noto Sans SC. Original NOVA filters and card order stay intact despite varying widths. The chart borrows the solid yellow signal and black outline, not any source throughput metric.

The observed source display family is neue-haas-grotesk-display, gtAmerica, sans-serif. The configured display stack is 'Archivo','Noto Sans SC',sans-serif; the UI font reference is Archivo from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Archivo','Noto Sans SC',sans-serif; body: 'Archivo','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The mobile menu uses dark ink links on its cream surface, instead of the white desktop navigation foreground. This is an independent example accessibility adjustment, not a measured source-mobile rule.

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creative technical tools, community launches, maker products, and distinctive platform showcases. Avoid when: Quiet corporate reporting or neutral documentation is the primary goal.

### Signature Atoms

- Cream rgb(246, 238, 219), surface rgb(250, 244, 233), brown-black rgb(40, 29, 29), white rgb(255, 255, 255).
- Archivo with Noto Sans SC; adapted display 60px, weight 900, line-height 1.06, tracking -.04em.
- Curved tracks use rgb(243, 176, 28), rgb(238, 52, 47), and rgb(141, 38, 118); main track border 24px.
- Feature columns 1.4fr 1fr 1fr with 22px gaps and 12px corners; selected cells switch to brown-black.
- White hero pills use 999px corners; technical labels use ui-monospace; chart has a 1px black outline.
- Chart tracks are 19px high with yellow fill and a 3px dark terminal edge; delivered small text #646369.

### Do

- Use open-source Archivo and Noto Sans SC; treat neue-haas-grotesk-display and gtAmerica only as references.
- Contrast a heavy white-on-brown hero with warm cream lower sections.
- Draw original curved racing tracks in yellow, red, and purple instead of adding generic glow.
- Vary feature widths and deliberately alternate selected dark cells with cream cells.
- Use the delivered darker metric and footer labels for readable small text on warm pale backgrounds.

- Use dark ink links on the cream mobile menu rather than desktop white navigation text.

### Don't

- Do not flatten the design into an undifferentiated dark neon page.
- Do not remove the warm cream transition or the unequal feature-cell rhythm.
- Do not replace solid graphic tracks with soft gradient blobs and glowing orbs.
- Do not lighten small metric and footer text until it loses contrast on cream.
- Do not copy Convex logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(246, 238, 219);
  --surface: rgb(250, 244, 233);
  --ink: rgb(20, 20, 20);
  --muted: rgb(109, 109, 112);
  --accent: rgb(113, 30, 94);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(194, 194, 194);
  --radius: 12px;
  --button-radius: 999px;
  --weight: 900;
  --night: rgb(40, 29, 29);
  --yellow: rgb(243, 176, 28);
  --red: rgb(238, 52, 47);
  --ribbon: rgb(141, 38, 118);
  --white: rgb(255, 255, 255);
  --display: 'Archivo','Noto Sans SC',sans-serif;
  --body: 'Archivo','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/convex.html) and [preview](../examples/convex.png). [Style selection index](STYLE_INDEX.md).
