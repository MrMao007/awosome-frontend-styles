# Coda — Observed Homepage Design Paradigm

Source: [Coda](https://coda.io/). Category: Work & Collaboration. Capture: 2026-10-10T13:50:30.692Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

The captured Coda page is a styled Superhuman Docs transition: orange announcement, warm white navigation, lavender update block, then a peach hero. This is distinct from the unstyled Superhuman capture that was excluded.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fcfaf7` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#292827` | Observed heading color. |
| Secondary text | `#73716d` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#141413` | Observed visible action color; gradients described separately. |
| Supporting surface | `#fff` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#dedbd7` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Coda is now Superhuman Docs! | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |
| Your all-in-one collaborative workspace. | Calibre-R, sans-serif | 72px / 72px | 700 | -3.24px |
| "It’s more powerful than Google Docs and more flexible than Airtable o | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |
| 4 ways 50,000+ teams use Coda to supercharge their work days. | Calibre-R, sans-serif | 52px / 57.2px | 700 | -1.82px |
| Writeups | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |
| Hubs | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |
| Trackers | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |
| Applications | Calibre-R, sans-serif | 38px / 41.8px | 700 | -0.95px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The 38/41.8px announcement and 72/72px main headline are Calibre-R 700. At x=152px, left-aligned copy and black rectangular actions dominate; decoration is restrained. The captured headline box is 909 × 42px at (152, 213). Loaded families: Calibre-R, Inter, Tiempos-Headline, Super Sans VF.

## Hero Composition and Presentation

The captured Coda page is a styled Superhuman Docs transition: orange announcement, warm white navigation, lavender update block, then a peach hero. This is distinct from the unstyled Superhuman capture that was excluded. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Combine the observed update and workspace color-block rhythm without copying the rebrand claim. A lavender eyebrow strip leads to NOVA peach hero, and subsequent card groups retain the warm document personality. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Combine the observed update and workspace color-block rhythm without copying the rebrand claim. A lavender eyebrow strip leads to NOVA peach hero, and subsequent card groups retain the warm document personality.

Source primary face: Calibre-R, sans-serif. Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Editorial product updates, educational platforms, warm multi-section launch pages. Avoid when: Cool technical minimalism or a monochrome dark identity is required.

### Signature Atoms

- #fcfaf7 warm canvas, #292827 ink, #141413 actions, #dedbd7 rules
- Inter with Noto Sans SC; adapted hero 76px, weight 800, line-height 1.13, tracking -.055em
- 8px #ee5a29 top rule; lavender #fcf5ff strip transitions into peach #ffe8c9 hero
- 8px-radius rectangular actions, 56px minimum height, 17px text at weight 600
- 1136px page rail with two-column cards and 24px gaps; purple #714cb6 labels
- Accessible feature descriptions use #55534e instead of the lighter secondary #73716d

### Do

- Use Inter and Noto Sans SC for bold display and readable document-like body text.
- Build a left-aligned lavender-to-peach color-block sequence on a warm white canvas.
- Keep decoration restrained; let oversized typography and black rectangular actions lead.
- Group feature content in lightly framed white and peach cards with small purple tags.
- Retain #55534e for feature descriptions and check text and control contrast on pastel surfaces.

### Don't

- Do not copy Coda logos, trademarks, rebrand claims, product screenshots, or marketing copy.
- Do not present the observed transition announcement as your unrelated product's identity.
- Do not replace the warm color blocks with a generic cool-blue hero or dark glow.
- Do not introduce a dominant floating dashboard where the typographic hero should remain open.
- Do not use pale secondary text for small descriptions on peach or lavender surfaces.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fcfaf7;
  --ink: #292827;
  --muted: #73716d;
  --accent: #141413;
  --on-accent: #fff;
  --surface: #fff;
  --line: #dedbd7;
  --radius: 8px;
  --button-radius: 8px;
  --weight: 700;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/coda.html) and [preview](../examples/coda.png). [Style selection index](STYLE_INDEX.md).
