# Upstash — Observed Homepage Design Paradigm

Source: [Upstash](https://upstash.com/). Category: Developer Tools. Capture: 2026-10-10T14:11:12.996Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A bright serverless data platform organized around exceptionally large green-to-amber display type and a rounded tabbed service pavilion. Gray-white canvas, deep green text and washed-green tiles distinguish it from black terminal developer sites.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `lab(96.52 -0.0000298023 0.0000119209)` | Computed style: controls[0].parentBg, controls[14].bg, controls[15].bg. |
| surface | `rgb(255, 255, 255)` | Computed style: textSamples[17].color, controls[11].color, controls[12].bg. |
| ink | `rgb(2, 44, 34)` | Computed style: headings[0].color, headings[3].color, headings[4].color. |
| muted | `lab(47.8878 1.65477 -5.77283)` | Computed style: textSamples[1].color, textSamples[3].color, textSamples[4].color. |
| accent | `lab(66.9756 -58.27 19.5419)` | Computed style: headings[1].image, headings[12].image, textSamples[0].image. |
| on-accent | `rgb(2, 44, 34)` | Computed style: headings[0].color, headings[3].color, headings[4].color. |
| line | `rgba(6, 95, 70, 0.2)` | Computed style: controls[22].bg. |
| green | `lab(44.4871 -41.0396 11.0361)` | Computed style: headings[1].image, headings[12].image, textSamples[0].image. |
| amber | `rgb(245, 158, 11)` | Computed style: headings[1].image, textSamples[0].image, surfaces[1].image. |
| wash | `rgba(4, 120, 87, 0.08)` | Computed style: headings[3].parentBg, headings[4].parentBg, headings[5].parentBg. |
| mint | `rgb(236, 253, 245)` | Computed style: controls[1].bg. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Search | Inter, "Inter Fallback" | 16px / 24px | 400 | normal |
| Serverless Data Platform | "Inter Tight", "Inter Tight Fallback" | 128px / 128px | 700 | -3.2px |
| Serverless Redis in the cloud with low latency and durable storage | Inter, "Inter Fallback" | 24px / 32px | 500 | normal |
| Highly Available, Infinitely Scalable | "Inter Tight", "Inter Tight Fallback" | 24px / 32px | 600 | normal |
| Global Low Latency | "Inter Tight", "Inter Tight Fallback" | 24px / 32px | 600 | normal |
| Persistent Redis, In-Memory Speed | "Inter Tight", "Inter Tight Fallback" | 24px / 32px | 600 | normal |
| Upstash Serverless Data Platform — products | Inter, "Inter Fallback" | 16px / 24px | 400 | normal |
| Vector: Serverless Vector database for high-performance search at scal | Inter, "Inter Fallback" | 16px / 24px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Center the localized headline at 88px, scaled down from the observed 128px Inter Tight source H1. Follow with a short metric row and a large 35px-rounded capabilities pavilion whose real NOVA filter controls take the place of the source service tabs. The source headline sampled at (120, 180) occupies 1200 × 256px and uses 128px/128px, weight 700, tracking -3.2px. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Use 16px light-green tiles, tab tops rather than pills in the pavilion, rounded primary actions and a soft-white weekly chart. Green emphasis is balanced by gray body copy; the final mint section echoes the narrow announcement surface. A sampled div at (0, 162) is 1440 × 400px; background lab(66.9756 -58.27 19.5419), border 0px solid rgb(229, 231, 235), radius 100%, padding 0px. A sampled h1 at (120, 180) is 1200 × 256px; background rgba(0, 0, 0, 0), border 0px solid rgb(229, 231, 235), radius 0px, padding 0px. A sampled button at (184, 624) is 189 × 80px; background rgb(255, 255, 255), border not represented by a single shorthand, radius 16px 16px 0px 0px, padding 0px 32px. A sampled div at (120, 704) is 1200 × 856px; background rgb(255, 255, 255), border 0px solid rgb(229, 231, 235), radius 35.2px, padding 32px.

## Product Visualization and Background Language

The headline gradient endpoints are exact measured source image values: two Lab greens and rgb(245,158,11). The wash is the computed rgba(4,120,87,.08); no imagined green hex token or database-product logo is inserted. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Chinese uses Noto Sans SC while Inter Tight provides a same-family Latin reference. Actual NOVA filtering remains intact; the pavilion is not a copied Redis screen. The Chinese heading and service titles are adapted measurements, with original 87%, 4.2× and 12h preserved.

The observed source display family is "Inter Tight", "Inter Tight Fallback". The configured display stack is 'Inter Tight','Noto Sans SC',sans-serif; the UI font reference is Inter Tight from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Inter Tight','Noto Sans SC',sans-serif; body: 'Inter Tight','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The mobile menu uses the existing adjusted foreground #62656b on the gray-white canvas. This is an independent example accessibility adjustment, not a measured source-mobile rule.

Selected foreground colors were adjusted for readability in the generated Chinese example. These are implementation choices, not source palette measurements.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Multi-service products, productivity suites, sustainability tools, and approachable technical platforms. Avoid when: Compact editorial density or monochrome terminal austerity is required.

### Signature Atoms

- Gray-white canvas lab(96.52 -0.0000298023 0.0000119209), dark green ink rgb(2, 44, 34), white tiles.
- Inter Tight with Noto Sans SC; adapted display 88px, weight 700, line-height 1.08, tracking -.06em.
- Headline gradient lab(44.4871 -41.0396 11.0361), lab(66.9756 -58.27 19.5419), rgb(245, 158, 11).
- Service pavilion has 35px corners; tabs have 16px 16px 0 0 corners, 52px minimum height, and 16px labels.
- Capability tiles use 16px corners and rgba(4, 120, 87, 0.08) wash; action corners are 12px.
- Mint closing field rgb(236, 253, 245); 24px white chart corners; delivered footer text #62656b.

### Do

- Use open-source Inter Tight and Noto Sans SC for large tightly tracked display and compact UI.
- Make the centered green-to-amber headline the main visual, balanced by gray explanatory copy.
- Place working tab controls above one rounded white capability pavilion.
- Use washed-green tiles and mint section accents without making every surface saturated green.
- Preserve the delivered darker footer foreground and verify small-text contrast on pale surfaces.

- Use #62656b for small mobile-menu links on the gray-white canvas and verify contrast.

### Don't

- Do not replace the bright canvas with a black terminal theme.
- Do not style pavilion tabs as detached pill filters or break the integrated service grouping.
- Do not convert measured Lab greens into invented official hex tokens.
- Do not use pale, low-contrast footer text or let the display gradient impair headline legibility.
- Do not copy Upstash logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: lab(96.52 -0.0000298023 0.0000119209);
  --surface: rgb(255, 255, 255);
  --ink: rgb(2, 44, 34);
  --muted: lab(47.8878 1.65477 -5.77283);
  --accent: lab(66.9756 -58.27 19.5419);
  --on-accent: rgb(2, 44, 34);
  --line: rgba(6, 95, 70, 0.2);
  --radius: 16px;
  --button-radius: 12px;
  --weight: 700;
  --green: lab(44.4871 -41.0396 11.0361);
  --amber: rgb(245, 158, 11);
  --wash: rgba(4, 120, 87, 0.08);
  --mint: rgb(236, 253, 245);
  --display: 'Inter Tight','Noto Sans SC',sans-serif;
  --body: 'Inter Tight','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/upstash.html) and [preview](../examples/upstash.png). [Style selection index](STYLE_INDEX.md).
