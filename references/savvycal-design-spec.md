# SavvyCal — Observed Homepage Design Paradigm

Source: [SavvyCal](https://savvycal.com/). Category: Work & Collaboration. Capture: 2026-10-10T14:03:00.578Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A forest-green typographic poster rather than a calendar-dashboard hero: the actual source image has a huge two-line lime condensed serif title, centered pale-green supporting copy, a lime rectangular action and oversized low-contrast looping bands. The green masthead ends at y=804, followed by warm cream and a small condensed section label with an orange squiggle. Carry this editorial contrast into NOVA instead of inventing a first-fold scheduling interface.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Hero forest | `oklch(0.393 0.095 152.535)` | Computed background of first large DIV in surfaces; source pixel at (10,400) is RGB(13,84,43), #0d542b. |
| Lime headline and action | `rgb(185, 255, 120)` | H1 color and Try SavvyCal risk-free background; #b9ff78. |
| Cream lower canvas | `rgb(252, 247, 237)` | Navigation text in controls; lower source image pixel (10,900) independently confirms #fcf7ed. |
| Hero support text | `oklch(0.962 0.044 156.743)` | Computed 24px supporting paragraph color, retained without guessing its hex conversion. |
| Dark lower headings | `oklch(0.21 0.006 285.885)` | Computed lower H2 and primary-action text color. |
| Secondary lower label | `oklch(0.37 0.013 285.805)` | SCHEDULING EXPERIENCE computed color. |
| Loop band | `rgb(25, 93, 54)` | Source image pixel (400,400), #195d36; a visible band sample, not a declared source token. |
| Neutral rule | `oklch(0.92 0.004 286.32)` | Computed default border color with zero source border width; used as an explicit adaptation separator, not proof of a visible source rule. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The fresh way to find a time to meet. | GT-Alpina-Condensed | 136px / 136px | 700 | normal |
| SCHEDULING EXPERIENCE | GT-America-Condensed | 18px / 28px | 400 | 0.9px |
| Leave a lasting impression | GT-Alpina-Condensed | 96px / 104px | 700 | normal |
| Branding | GT-America-Standard | 24px / 32px | 700 | normal |
| Custom Domains | GT-America-Standard | 24px / 32px | 700 | normal |
| Calendar Overlay | GT-America-Standard | 24px / 32px | 700 | normal |
| OPTIMIZED AVAILABILITY | GT-America-Condensed | 18px / 28px | 400 | 0.9px |
| Defend your focus time | GT-Alpina-Condensed | 96px / 104px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Typographic Hierarchy

At 1440 by 1000 the sampled GT-Alpina-Condensed H1 occupies x=32, y=204, width=1376 and height=272, with 136px type, 136px line height and weight 700. Centered support is 24/36px in GT-America-Standard. Navigation uses GT-America-Extended; the lower condensed uppercase label is 18/28px with 0.9px tracking. NOVA uses a 94px desktop Chinese serif title with more line-height and a cream content region below; these are deliberate localization values, not source measurements.

## Components and Surface Treatment

The captured main action is 298 by 52px, 8px rounded, with 16px 32px padding, lime fill and dark text. Keep that low-radius geometry and avoid oversized pills. The unchanged secondary NOVA action becomes a lime-outline partner. Place the original three metrics on a single cream strip, use restrained white feature cards with a forest top edge, and apply green fills to the unchanged four-row chart. Source claims, customers and scheduling features are not copied into the NOVA body.

## Graphics and Responsive Adaptation

The hero graphic is a giant low-contrast winding green motif seen behind the title, not an app screenshot. Two empty CSS pseudo-elements create broad rotated rounded loops using sampled band color #195d36; they are an original approximation, not a tracing of the proprietary mark. A small wave under the lower eyebrow recalls the visible squiggle without redistributing the SVG. On narrow screens reduce loop scale, stack all cards, keep both actions and the original menu, and retain every text node. No mobile breakpoint or animation duration is claimed as observed.

## Adaptation to the NOVA Example

Preserve the entire Chinese NOVA body byte-for-byte. Restyle only head-level CSS and font imports. The lime title, forest hero, cream lower regions and compact rectangular actions are source-led; metric cards, chart and mobile stacking are original adaptations to the existing structure. All filters, modal focus behavior, copy and numbers remain unchanged.

Source display is proprietary GT-Alpina-Condensed; GT-America-Standard, Condensed and Extended are separately observed for body, labels and navigation. DM Serif Display substitutes for Latin display and Noto Serif SC for Chinese, with Inter plus Noto Sans SC for body. Their proportions do not reproduce the original condensed font. No source font files are redistributed; Chinese display size and line height are explicitly localized.

## Example Font Configuration

The example uses display: 'DM Serif Display','Noto Serif SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Editorial launches, distinctive service campaigns, typography-led product announcements. Avoid when: A first-fold dashboard preview or subdued monochrome utility is essential.

### Signature Atoms

- Forest hero oklch(0.393 0.095 152.535), lime #b9ff78 type and actions, cream #fcf7ed lower canvas
- DM Serif Display with Noto Serif SC; adapted hero 94px, weight 700, line-height 1.22, tracking -.025em
- Centered support copy at 24px in oklch(0.962 0.044 156.743)
- Original #195d36 looping bands use 105px borders and broad rotated rounded geometry
- 8px-radius lime-filled and lime-outline actions with 52px minimum height
- Cream metric strip and white feature cards with 4px forest top edges; orange #ff633b wavy label underline

### Do

- Use DM Serif Display and Noto Serif SC for display, with Inter and Noto Sans SC body text.
- Make the first fold a centered typographic poster, then transition sharply into warm cream content.
- Build original low-contrast looping bands behind the lime headline, not a calendar screenshot.
- Use compact rectangular lime actions and restrained white cards with forest top edges.
- Preserve lime-on-forest and dark-on-lime text contrast; verify small labels and control states rather than darkening hero text.

### Don't

- Do not copy SavvyCal logos, trademarks, looping artwork, product screenshots, or marketing copy.
- Do not invent a first-fold scheduling dashboard that displaces the poster headline.
- Do not replace low-radius rectangular actions with oversized pills.
- Do not make the looping bands bright enough to compete with the headline.
- Do not use dark headline text on forest green or claim the substitute reproduces the proprietary condensed face.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fcf7ed;
  --ink: oklch(0.21 0.006 285.885);
  --muted: oklch(0.37 0.013 285.805);
  --accent: oklch(0.393 0.095 152.535);
  --on-accent: #fcf7ed;
  --surface: #ffffff;
  --line: oklch(0.92 0.004 286.32);
  --radius: 8px;
  --button-radius: 8px;
  --weight: 700;
  --display: 'DM Serif Display','Noto Serif SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/savvycal.html) and [preview](../examples/savvycal.png). [Style selection index](STYLE_INDEX.md).
