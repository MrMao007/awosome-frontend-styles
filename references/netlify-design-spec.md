# Netlify — Observed Homepage Design Paradigm

Source: [Netlify](https://www.netlify.com/). Category: Developer Tools. Capture: 2026-10-10T14:06:19.091Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A confident dark deployment stage framed by a white navigation and proof strip: bold Figtree headings, cyan calls to action and lightly hand-drawn outlined interface objects. The lower page returns to white with blue editorial accents.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `color(srgb 1 1 1)` | Computed style: headings[7].color, headings[7].border, headings[7].borderTop. |
| surface | `color(srgb 1 1 1)` | Computed style: headings[7].color, headings[7].border, headings[7].borderTop. |
| ink | `color(srgb 0.0941176 0.101961 0.109804)` | Computed style: headings[2].color, headings[2].border, headings[2].borderTop. |
| muted | `color(srgb 0.207843 0.227451 0.243137)` | Computed style: headings[0].color, headings[0].border, headings[0].borderTop. |
| accent | `color(srgb 0.180392 0.317647 0.929412)` | Computed style: textSamples[5].color, textSamples[5].border, textSamples[5].borderTop. |
| on-accent | `color(srgb 1 1 1)` | Computed style: headings[7].color, headings[7].border, headings[7].borderTop. |
| line | `color(srgb 0.913725 0.921569 0.929412)` | Computed color census in evidence JSON (element frequency, not screen-area coverage). |
| night | `color(srgb 0.0705882 0.0941176 0.121569)` | Computed style: textSamples[19].color, controls[13].color, surfaces[1].bg. |
| cyan | `rgb(50, 230, 226)` | Computed style: controls[17].color, controls[17].border, controls[17].borderTop. |
| ice | `color(srgb 0.901961 0.92549 0.94902)` | Computed style: headings[1].color, headings[1].border, headings[1].borderTop. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Site navigation | Figtree, system-ui, Helvetica, sans-serif | 48px / 52.8px | 800 | normal |
| Push your ideas to the web | Figtree, system-ui, Helvetica, sans-serif | 64px / 70.4px | 800 | normal |
| Build your way. Ship on one platform. | Figtree, system-ui, Helvetica, sans-serif | 64px / 70.4px | 800 | normal |
| Start with code or AI | Figtree, system-ui, Helvetica, sans-serif | 24px / 26.4px | 700 | normal |
| Build fullstack apps | Figtree, system-ui, Helvetica, sans-serif | 24px / 26.4px | 700 | normal |
| Go live everywhere | Figtree, system-ui, Helvetica, sans-serif | 24px / 26.4px | 700 | normal |
| Start your way. | Figtree, system-ui, Helvetica, sans-serif | 64px / 70.4px | 800 | normal |
| Prompt. Preview. Repeat. | Figtree, system-ui, Helvetica, sans-serif | 32px / 35.2px | 800 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Desktop Composition and Reading Order

Use a 74px white header followed by a 545px dark split hero. Keep Chinese copy left and a dashed drop-zone-inspired geometric composition right; the next metrics rail returns immediately to white rather than maintaining a single dark canvas. The source headline sampled at (80, 191) occupies 582 × 141px and uses 64px/70.4px, weight 800, tracking normal. These are source measurements, not the adapted Chinese type settings.

## Component Grammar and Surface Measurements

Round primary controls are cyan in the hero, while neutral/blue actions belong to white sections. Metrics are unboxed dividers, capabilities become broad paired service cards, and the impact panel revisits the dark stage with a dashed chart frame. A sampled section at (0, 0) is 1440 × 74px; background color(srgb 1 1 1 / 0.901961), border 0px none color(srgb 0.207843 0.227451 0.243137), radius 0px, padding 0px. A sampled section at (0, 74) is 1440 × 543px; background color(srgb 0.0705882 0.0941176 0.121569), border 0px none color(srgb 0.870588 1 0.996078), radius 0px, padding 96px 0px 32px. A sampled div at (694, 170) is 666 × 415px; background rgba(0, 0, 0, 0), border 2px dashed rgba(255, 255, 255, 0.3), radius 30px, padding 16px. A sampled section at (0, 617) is 1440 × 69px; background color(srgb 1 1 1), border 0px none color(srgb 0.207843 0.227451 0.243137), radius 0px, padding 32px 0px 0px.

## Product Visualization and Background Language

Use unevenly rotated outline rectangles and a diagonal signal line, recalling the captured line illustration without copying the mascot, browser contents, cloud drawing or customer logos. All pseudo-elements in the NOVA page contain only empty geometric content; they neither reproduce business copy nor imply a working source-product interface.

## Localization, Responsive Intent and Interaction

The adapter keeps the original NOVA body byte-for-byte, including its numbers, filters, chart labels, dialog trigger, Escape close, focus return and mobile navigation. CSS changes the visual grid and grouping without reordering semantic reading order. The 1000px and 640px adaptation breakpoints are chosen for this example, not measured source rules. Decorative hero panels disappear below 640px, interactive targets remain at least 44px, and reduced-motion preferences are retained.

## Adaptation to the NOVA Example

The Chinese H1 uses a 60px heavy display. Existing NOVA feature tags provide the small technical labels; 2-column cards and the contrasting impact band create a visibly different architecture from a generic 3-column SaaS template.

The observed source display family is Figtree, system-ui, Helvetica, sans-serif. The configured display stack is 'Figtree','Noto Sans SC',sans-serif; the UI font reference is Figtree from its open-source Google Fonts release (same family name; not a claim of identical font version). Where the adapter explicitly selects Georgia or ui-monospace, it uses an existing system face and does not distribute that font. Chinese uses Noto Sans SC explicitly throughout (including headings). These open-source families are referenced, not bundled or redistributed; respect their upstream font licenses. Family choice, weight, line-height and Chinese tracking in the adapter are design decisions, not invented source measurements.

## Example Font Configuration

The example uses display: 'Figtree','Noto Sans SC',sans-serif; body: 'Figtree','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creative collaboration launches, team applications, and bold service introductions. Avoid when: Uniform light surfaces or sober document-like density must dominate.

### Signature Atoms

- Dark stage color(srgb 0.0705882 0.0941176 0.121569), cyan rgb(50, 230, 226), white color(srgb 1 1 1).
- Figtree with Noto Sans SC; adapted display 60px, weight 800, line-height 1.17, tracking -.025em.
- 74px white navigation above a 545px minimum split hero; copy left and outline composition right.
- Hero frame uses 2px dashed rgba(255,255,255,.3) borders, 30px radius, and rotated inner rectangles.
- Pill buttons use 999px radius; paired feature cards use 16px radius and 25px gaps.
- Accessible secondary hero action: #32e6e2 text, #14252d fill, #2c505d border; dark impact tracks 11px high.

### Do

- Use open-source Figtree and Noto Sans SC with heavy, confident display typography.
- Alternate a dark hero and impact band with white navigation, proof, and capability sections.
- Use cyan primary actions with dark labels in the hero; reserve blue accents for white sections.
- Build decorative visuals from dashed frames, slightly rotated rectangles, and a diagonal signal.
- Use the delivered secondary-action contrast pairing instead of faint translucent cyan controls.

### Don't

- Do not flatten the whole page into a single dark or single white theme.
- Do not replace the loose outlined geometry with a photorealistic dashboard or glossy orb.
- Do not pack capabilities into a dense three-column card template.
- Do not use white labels on bright cyan primary buttons or low-contrast translucent secondary controls.
- Do not copy Netlify logos, trademarks, screenshots, illustrations, or marketing copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: color(srgb 1 1 1);
  --surface: color(srgb 1 1 1);
  --ink: color(srgb 0.0941176 0.101961 0.109804);
  --muted: color(srgb 0.207843 0.227451 0.243137);
  --accent: color(srgb 0.180392 0.317647 0.929412);
  --on-accent: color(srgb 1 1 1);
  --line: color(srgb 0.913725 0.921569 0.929412);
  --radius: 20px;
  --button-radius: 999px;
  --weight: 800;
  --night: color(srgb 0.0705882 0.0941176 0.121569);
  --cyan: rgb(50, 230, 226);
  --ice: color(srgb 0.901961 0.92549 0.94902);
  --display: 'Figtree','Noto Sans SC',sans-serif;
  --body: 'Figtree','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/netlify.html) and [preview](../examples/netlify.png). [Style selection index](STYLE_INDEX.md).
