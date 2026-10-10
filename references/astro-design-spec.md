# Astro — Observed Homepage Design Paradigm

Source: [Astro](https://astro.build/). Category: Developer Tools. Capture: 2026-10-10T14:08:01.392Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A content-framework homepage with a centered bold display, indigo-to-violet atmospheric field and vertically stacked white-start/terminal actions. Its lower section headline is lighter, providing deliberate contrast to the hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(7, 9, 23)` | Source PNG RGB pixel at desktop coordinate (600, 965); image/composite sample, not an inferred CSS brand token. |
| surface | `rgb(12, 15, 25)` | Computed style: controls[0].bg. |
| ink | `rgb(242, 246, 250)` | Computed style: headings[0].color, headings[1].color, headings[25].color. |
| muted | `rgb(191, 193, 201)` | Computed style: textSamples[1].color, textSamples[3].color, textSamples[4].color. |
| accent | `rgb(255, 255, 255)` | Computed style: headings[2].color, headings[3].color, headings[4].color. |
| on-accent | `rgb(12, 15, 25)` | Computed style: controls[0].bg. |
| line | `rgba(133, 139, 152, 0.2)` | Computed style: controls[0].border, controls[0].borderTop. Interpretation / adaptation value; not independently established as an exact source token. |
| indigo | `rgb(21, 19, 94)` | Source PNG RGB pixel at desktop coordinate (40, 170); image/composite sample, not an inferred CSS brand token. |
| violet | `rgb(95, 25, 176)` | Source PNG RGB pixel at desktop coordinate (1110, 570); image/composite sample, not an inferred CSS brand token. |
| blue | `rgb(50, 69, 255)` | Computed style: textSamples[8].image. |
| pink | `rgb(184, 69, 237)` | Computed style: textSamples[8].image. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The web framework for content-driven websites | Obviously, obviously-fallback, system-ui, sans-serif | 48px / 52.8px | 700 | normal |
| Astro is a JavaScript web framework optimized for building fast, conte | Obviously, obviously-fallback, system-ui, sans-serif | 36px / 40px | 300 | normal |
| Server-First | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 24px | 600 | normal |
| Content-Driven | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 24px | 600 | normal |
| Customizable | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 24px | 600 | normal |
| Astro Islands | Obviously, obviously-fallback, system-ui, sans-serif | 30px / 36px | 400 | normal |
| Zero Lock-in | Obviously, obviously-fallback, system-ui, sans-serif | 30px / 36px | 400 | normal |
| Snapback Cap | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 16px / 24px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use an 80px navigation and centered hero with stacked fixed-width actions. The source logo proof zone becomes a broad open NOVA metric strip; capabilities then switch to a narrow heading rail beside two-column cards. The source headline sampled at (368, 244) occupies 704 × 106px and uses 48px/52.8px, weight 700, tracking normal. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

White pill controls, dark terminal-like secondary action, rounded dark cards and light section headings define the component language. The final CTA returns to the atmospheric gradient rather than adding an unrelated card treatment. A sampled div at (0, 0) is 1440 × 80px; background rgba(13, 15, 20, 0.3), border 0px solid rgb(229, 231, 235), radius 0px, padding 0px. A sampled div at (-934, 890) is 3373 × 1991px; background rgba(0, 0, 0, 0), border 0px solid rgb(229, 231, 235), radius 9999px, padding 0px.

## Product Visualization and Background Language

Indigo, violet and deep background are documented source PNG RGB pixels; blue and pink are exact computed gradient endpoints of the source CTA. The page adds only abstract low blurred illumination, not a rocket trademark, copied command or corporate logos. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

Archivo legally approximates the broad Obviously display on Latin; Chinese uses Noto Sans SC at a comfortable 52px hero scale. Existing NOVA actions keep their true functions despite terminal styling, and the weekly chart remains original rather than source website performance claims.

The observed source display family is Obviously, obviously-fallback, system-ui, sans-serif. The configured display stack is 'Archivo','Noto Sans SC',sans-serif; the UI font reference is Archivo from its open-source Google Fonts release as a legal visual substitute, not the original proprietary face. Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Archivo','Noto Sans SC',sans-serif; body: 'Archivo','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Publishing tools, creative platforms, portfolio builders, and content-oriented product launches. Avoid when: Bright utilitarian density or a monochrome documentation aesthetic is required.

### Signature Atoms

- Deep canvas rgb(7, 9, 23), surface rgb(12, 15, 25), ink rgb(242, 246, 250), muted rgb(191, 193, 201).
- Hero atmosphere rgb(21, 19, 94) and rgb(95, 25, 176); chart gradient rgb(50, 69, 255) to rgb(184, 69, 237).
- Archivo with Noto Sans SC; adapted hero 52px, weight 800, line-height 1.17; section headings 36px, weight 400.
- 80px navigation above a centered 780px minimum hero; stacked actions are 278px wide and at least 44px high.
- Primary actions have 999px corners; dark monospaced secondary action 14px; dark feature cards 20px.
- Capability heading rail beside paired cards uses 1fr 2.5fr columns; chart has 8px rounded gradient tracks.

### Do

- Use open-source Archivo and Noto Sans SC; treat Obviously only as an observed display reference.
- Center the bold headline and stack a white primary action above a dark terminal-like secondary action.
- Keep the indigo-violet field atmospheric and use only a low blurred illumination near the hero bottom.
- Contrast the heavy hero with lighter section headings, open proof, and paired dark cards.
- Repeat the hero atmosphere in the closing section while keeping action semantics genuine.

### Don't

- Do not replace stacked actions with a generic horizontal pair of floating pills.
- Do not use heavy display weight on every section heading.
- Do not add a large hero screenshot, rocket illustration, or unrelated glossy orb.
- Do not turn terminal-like action labels into copied commands or claimed performance figures.
- Do not copy Astro logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(7, 9, 23);
  --surface: rgb(12, 15, 25);
  --ink: rgb(242, 246, 250);
  --muted: rgb(191, 193, 201);
  --accent: rgb(255, 255, 255);
  --on-accent: rgb(12, 15, 25);
  --line: rgba(133, 139, 152, 0.2);
  --radius: 20px;
  --button-radius: 999px;
  --weight: 700;
  --indigo: rgb(21, 19, 94);
  --violet: rgb(95, 25, 176);
  --blue: rgb(50, 69, 255);
  --pink: rgb(184, 69, 237);
  --display: 'Archivo','Noto Sans SC',sans-serif;
  --body: 'Archivo','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/astro.html) and [preview](../examples/astro.png). [Style selection index](STYLE_INDEX.md).
