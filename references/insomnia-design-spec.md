# Insomnia — Observed Homepage Design Paradigm

Source: [Insomnia](https://insomnia.rest/). Category: Developer Tools. Capture: 2026-10-10T14:09:15.785Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A straightforward white API collaboration homepage: centered Roboto hierarchy, a narrow bordered announcement and a broad practical download panel. Purple actions are compact and rectangular; the main product window begins below the explanatory panel.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed style: headings[2].color, textSamples[7].color, textSamples[15].color. |
| surface | `rgb(255, 255, 255)` | Computed style: headings[2].color, textSamples[7].color, textSamples[15].color. |
| ink | `rgb(53, 54, 58)` | Computed style: headings[0].color, headings[1].color, headings[3].color. |
| muted | `rgb(102, 108, 112)` | Computed style: textSamples[1].color, textSamples[8].color, textSamples[9].color. |
| accent | `rgb(64, 0, 191)` | Computed style: textSamples[6].color, textSamples[7].parentBg, textSamples[15].bg. |
| on-accent | `rgb(255, 255, 255)` | Computed style: headings[2].color, textSamples[7].color, textSamples[15].color. |
| line | `rgb(204, 210, 214)` | Computed style: controls[9].border, controls[9].borderTop, surfaces[3].border. Interpretation / adaptation value; not independently established as an exact source token. |
| light | `rgb(167, 139, 250)` | Computed style: textSamples[17].color, textSamples[18].color, textSamples[19].color. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| AI-ready APIs Built Smarter. Tested Faster. Governed Better. | Roboto, sans-serif | 48px / 57.6px | 700 | normal |
| Open-source and free tier: | Roboto, sans-serif | 18px / 27px | 400 | normal |
| Loved by API developers. Trusted by security-first organizations | Roboto, sans-serif | 36px / 45px | 700 | normal |
| Confidently Design APIs | Roboto, sans-serif | 18px / 27px | 700 | normal |
| Native API mocking | Roboto, sans-serif | 18px / 27px | 700 | normal |
| Automated API testing at Scale | Roboto, sans-serif | 18px / 27px | 700 | normal |
| AI-Native Testing | Roboto, sans-serif | 18px / 27px | 700 | normal |
| Why Kong Insomnia? | Roboto, sans-serif | 36px / 45px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Center the localized H1 at a restrained 48px. Place the existing action pair in a wide raised two-column panel below the subtitle, translating the source download block without duplicating its platform-specific options. The source headline sampled at (300, 241) occupies 840 × 115px and uses 48px/57.6px, weight 700, tracking normal. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Use 4px buttons, 10px panel corners, cool gray outlines and a monospaced metrics rail. A charcoal capabilities section recalls the actual product-window contrast; the feature cards themselves remain white and filterable. A sampled div at (0, 0) is 1440 × 7791px; background rgb(255, 255, 255), border 0px solid rgb(229, 231, 235), radius 0px, padding 0px. A sampled div at (0, 59) is 1440 × 7227px; background rgb(0, 0, 0), border 0px solid rgb(229, 231, 235), radius 0px, padding 0px. A sampled section at (0, 59) is 1440 × 942px; background rgb(255, 255, 255), border 0px solid rgb(229, 231, 235), radius 0px, padding 40px 24px 0px. A sampled a at (470, 91) is 500 × 86px; background rgba(0, 0, 0, 0), border 1px solid rgb(204, 210, 214), radius 4px, padding 12px 32px.

## Product Visualization and Background Language

This study intentionally avoids a dramatic fabricated glow. The panel border, shadow and segmented controls provide the product visualization; there is no source screenshot, API request name, logo or downloaded application content in the NOVA page. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Roboto is available as an open-source same-family reference. Chinese uses Noto Sans SC. The API feature checklist is not copied: the six original NOVA cards and dialog remain, with a centered practical architecture and a dark mid-page band.

The observed source display family is Roboto, sans-serif. The configured display stack is 'Roboto','Noto Sans SC',sans-serif; the UI font reference is Roboto from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Roboto','Noto Sans SC',sans-serif; body: 'Roboto','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Desktop utilities, training portals, professional collaboration, and download-focused landing pages. Avoid when: Cinematic atmosphere or an expressive illustration-led identity is expected.

### Signature Atoms

- White rgb(255, 255, 255), ink rgb(53, 54, 58), purple rgb(64, 0, 191), rules rgb(204, 210, 214).
- Roboto with Noto Sans SC; adapted display 48px, weight 700, line-height 1.22, tracking -.02em.
- 59px navigation and centered introduction; bordered announcement is capped at 500px width.
- Two-column action panel uses 10px corners, 24px gap, and 0 5px 14px rgba(0,0,0,.15) shadow.
- Compact buttons have 4px corners; segmented metric rail uses 46px ui-monospace numerals.
- Charcoal capability band contains paired white 8px cards; closing section uses the solid purple action color.

### Do

- Use open-source Roboto and Noto Sans SC with a restrained centered heading hierarchy.
- Place the primary action and secondary option inside a broad raised panel below the explanatory copy.
- Use cool-gray borders and modest panel shadows rather than atmospheric imagery.
- Alternate the white introduction with a charcoal capability band containing white cards.
- Use rectangular purple controls and monospaced metrics while keeping interaction targets comfortably sized.

### Don't

- Do not add dramatic fabricated glow, colorful nebulae, or a cinematic product scene.
- Do not replace compact rectangular controls with oversized pills.
- Do not make the entire page dark or remove the contrasting white feature cards.
- Do not reproduce platform-specific download options or API request contents as decorative copy.
- Do not copy Insomnia logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --ink: rgb(53, 54, 58);
  --muted: rgb(102, 108, 112);
  --accent: rgb(64, 0, 191);
  --on-accent: rgb(255, 255, 255);
  --line: rgb(204, 210, 214);
  --radius: 10px;
  --button-radius: 4px;
  --weight: 700;
  --light: rgb(167, 139, 250);
  --display: 'Roboto','Noto Sans SC',sans-serif;
  --body: 'Roboto','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/insomnia.html) and [preview](../examples/insomnia.png). [Style selection index](STYLE_INDEX.md).
