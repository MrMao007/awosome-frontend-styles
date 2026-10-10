# Cloudflare — Observed Homepage Design Paradigm

Source: [Cloudflare](https://www.cloudflare.com/). Category: Developer Tools. Capture: 2026-10-10T14:07:50.974Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A warm-orange, full-width rounded campaign stage set within a thin white perimeter. Centered medium-weight type, an outlined announcement pill and a field of tiny illuminated dots create a network-scale identity.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[9].color, headings[14].color. |
| surface | `rgb(255, 255, 255)` | Computed style: headings[0].color, headings[9].color, headings[14].color. |
| ink | `rgb(38, 38, 38)` | Computed style: headings[1].color, headings[2].color, headings[3].color. |
| muted | `rgb(38, 38, 38)` | Computed style: headings[1].color, headings[2].color, headings[3].color. |
| accent | `rgb(255, 94, 31)` | Computed style: headings[9].parentBg, headings[14].parentBg, textSamples[10].parentBg. |
| on-accent | `rgb(38, 38, 38)` | Computed style: headings[1].color, headings[2].color, headings[3].color. |
| line | `rgb(240, 240, 240)` | Computed style: headings[0].border, headings[0].borderTop, headings[1].border. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Everything we learned from powering 20% of the Internet—yours by defau | "FT Kunst Grotesk", sans-serif | 56px / 55.44px | 500 | -1.4px |
| Region: Earth | "FT Kunst Grotesk", sans-serif | 48px / 48px | 500 | -1.2px |
| Run everywhere | "FT Kunst Grotesk", sans-serif | 18px / 21.6px | 500 | -0.45px |
| Run anywhere | "FT Kunst Grotesk", sans-serif | 18px / 21.6px | 500 | -0.45px |
| Run at massive scale | "FT Kunst Grotesk", sans-serif | 18px / 21.6px | 500 | -0.45px |
| Cloudflare powers 45% of the Fortune 500 | "FT Kunst Grotesk", sans-serif | 48px / 48px | 500 | -1.2px |
| “ For Shopify, the real challenge is not about how many different piec | "FT Kunst Grotesk", sans-serif | 32px / 32px | 500 | -0.8px |
| Why choose Cloudflare | "FT Kunst Grotesk", sans-serif | 56px / 56px | 500 | -1.4px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Center the NOVA hero in a 760px orange slab with an 8px outer gutter, following the measured 1424 × 760 source panel. The white navigation remains separate; a centered metrics heading introduces the next white content zone. The source headline sampled at (180, 350) occupies 1080 × 111px and uses 56px/55.44px, weight 500, tracking -1.4px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Pill actions switch to white on orange, neutral dividers organize metric columns, and the capabilities grid is placed over a sparse dotted field. The closing dark panel repeats the rounded slab shape rather than the source orange everywhere. A sampled div at (120, 0) is 1200 × 6861px; background rgb(255, 255, 255), border 0px solid rgb(240, 240, 240), radius 0px, padding 0px. A sampled section at (0, 0) is 1440 × 852px; background rgb(255, 255, 255), border 0px solid rgb(240, 240, 240), radius 0px, padding 72px 8px 0px. A sampled div at (8, 80) is 1424 × 760px; background rgb(255, 94, 31), border 0px solid rgb(240, 240, 240), radius 16px, padding 0px.

## Product Visualization and Background Language

The point field and bottom illumination are original CSS reconstructions of the source texture. Orange is the exact computed rgb(255,94,31); no cloud trademark, global coverage percentage or event banner is copied. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

The three NOVA metrics replace external corporate proof. A white primary action improves hierarchy on the orange stage; its label retains NOVA copy and actual dialog behavior. All card and chart data remain the fixed example content.

The observed source display family is "FT Kunst Grotesk", sans-serif. The configured display stack is 'Manrope','Noto Sans SC',sans-serif; the UI font reference is Manrope from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Broad-audience campaigns, public platforms, community launches, and service announcements. Avoid when: Dense application chrome or a muted editorial tone is required.

### Signature Atoms

- Orange rgb(255, 94, 31), white rgb(255, 255, 255), neutral ink rgb(38, 38, 38).
- Manrope with Noto Sans SC; adapted hero 58px, weight 500, line-height 1.15, tracking -.035em.
- Orange slab has 8px outer margins, 16px corners, and 760px minimum height below 72px white navigation.
- Announcement and buttons use 999px pill corners; hero buttons have 52px minimum height.
- Hero dots repeat on a 7px grid with bottom radial illumination; lower capability dots repeat every 12px.
- Delivered subtitle is 24px; secondary hero labels use #36160a; closing dark slab repeats the 16px corners.

### Do

- Use open-source Manrope and Noto Sans SC; treat FT Kunst Grotesk only as an observed reference.
- Center the message and actions within an orange slab separated from the white navigation by a thin perimeter.
- Use a white primary action with neutral dark text and dark secondary labels for legibility on orange.
- Keep the delivered larger subtitle and verify text and control contrast against the orange field.
- Use fine point textures and low bottom illumination, then repeat the slab silhouette in the dark closing section.

### Don't

- Do not use faint white secondary-action labels on the orange background.
- Do not spread orange across every lower card and content section.
- Do not replace the rounded campaign slab with a split dashboard hero.
- Do not make the point field dense enough to interfere with text or controls.
- Do not copy Cloudflare logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --ink: rgb(38, 38, 38);
  --muted: rgb(38, 38, 38);
  --accent: rgb(255, 94, 31);
  --on-accent: rgb(38, 38, 38);
  --line: rgb(240, 240, 240);
  --radius: 16px;
  --button-radius: 999px;
  --weight: 500;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/cloudflare.html) and [preview](../examples/cloudflare.png). [Style selection index](STYLE_INDEX.md).
