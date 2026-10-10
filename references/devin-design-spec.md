# Devin Desktop — Observed Homepage Design Paradigm

Source: [Devin Desktop](https://devin.ai/desktop). Category: AI Products. Capture: 2026-10-10T14:06:03.987Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A white operational canvas with a large unembellished left headline and a wide agent-board demonstration. The Windsurf URL redirects to Devin Desktop; this study is deliberately labeled Devin rather than pretending the screenshot is Windsurf.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(252, 252, 252)` | Computed on div at (0, 0); applied to the NOVA bg role. |
| ink | `rgb(25, 25, 25)` | Computed on div at (0, 0); applied to the NOVA ink role. |
| muted | `rgba(25, 25, 25, 0.56)` | Computed on p at (80, 265); applied to the NOVA muted role. |
| accent | `rgb(54, 54, 54)` | Computed on a at (1101, 12); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (153, 732); applied to the NOVA on-accent role. |
| surface | `rgb(248, 248, 248)` | Computed on div at (145, 475); applied to the NOVA surface role. |
| line | `rgba(0,0,0,.08)` | Local supporting UI value for contrast or separation, not claimed to be a measured brand color. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Devin Desktop | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 64px / 64px | 400 | -1.92px |
| A team of agents for every engineer. | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 32px / 38.4px | 400 | -0.64px |
| The power of an IDE, exactly when you need it. | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 32px / 38.4px | 400 | -0.64px |
| All the models, All the agents. | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 32px / 38.4px | 400 | -0.64px |
| One Space for every agent | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 40px / 41.6px | 400 | -1.2px |
| Tab, Tab, Ship | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 40px / 41.6px | 400 | -1.2px |
| Agents on ACP | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 32px / 38.4px | 400 | -0.64px |
| Instant codebase context | nbInternationalPro, "nbInternationalPro Fallback", system-ui, sans-serif | 16px / 22.4px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The direct Devin capture uses an 80px left gutter, a 64px heading and a demonstration well below the intro. The well has gray backing, while the 1152px inner app has a 10px radius. NOVA translates the app-board staging into a blank geometric board.

## Component Grammar

Navigation buttons are pills, but the main download control is an almost-square 2px dark rectangle. Local NOVA filters use the compact outlined board-control language. The capabilities become a work-board rather than a marketing card wall.

## Visual Treatment and Graphic Language

Most source pixels are white or pale gray. The sampled bright blue belongs to operational status indicators, not a large gradient brand field. NOVA uses small blue position markers on the abstract board and in the progress graphic only.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Workflow tools, desktop utilities, team workspaces and operational product introductions. Avoid when: Expressive lifestyle campaigns or immersive cinematic imagery need visual dominance.

### Signature Atoms

- Canvas rgb(252,252,252), ink rgb(25,25,25), panels rgb(248,248,248), dark actions rgb(54,54,54).
- Inter hero 60px, weight 400, line-height 1.12 and tracking -.055em with 80px desktop gutters.
- Wide flat demonstration well contains 10px rounded blank work-board panes and 1px rgba(0,0,0,.08) rules.
- Main actions use 2px corners, 38px minimum height and 14px regular labels; board filters use 999px pills.
- Status marks are 6px blue dots in rgb(49,124,255); board highlight uses a 3px blue left edge.
- Three-column work cards use 18px gaps and 10px corners; delivered supporting text is #626262.

### Do

- Use Inter with Noto Sans SC at regular weight; treat nbInternationalPro as an observed reference only.
- Place a large unembellished left introduction above a wide gray-backed operational board.
- Keep most surfaces white or pale gray and reserve blue for small status markers and progress graphics.
- Distinguish almost-square primary actions from rounded board panes and compact pill filters.
- Use delivered #626262 supporting copy rather than translucent gray where needed for legible contrast.

### Don't

- Do not copy Devin logos, trademarks, product screenshots, board contents, illustrations or marketing copy.
- Do not label this visual study as Windsurf or substitute unrelated brand assets.
- Do not spread operational blue into a dominant gradient background or page-wide accent field.
- Do not replace the practical work-board with ornate floating cards or a cinematic media hero.
- Do not make all controls pills or exaggerate the nearly imperceptible panel shadows.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(252, 252, 252);
  --ink: rgb(25, 25, 25);
  --muted: rgba(25, 25, 25, 0.56);
  --accent: rgb(54, 54, 54);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(248, 248, 248);
  --line: rgba(0,0,0,.08);
  --radius: 10px;
  --weight: 400;
  --button-radius: 2px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/devin.html) and [preview](../examples/devin.png). [Style selection index](STYLE_INDEX.md).
