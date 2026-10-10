# Airtable — Observed Homepage Design Paradigm

Source: [Airtable](https://www.airtable.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:50:14.508Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A restrained centered 60/66px ATSeasonSans heading and nearly square black buttons precede a large blue-sky framed workflow UI. The page rail begins 48px from the viewport edges, with fine vertical lines.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#161616` | Observed heading color. |
| Secondary text | `#616670` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#161616` | Observed visible action color; gradients described separately. |
| Supporting surface | `#f4f5f7` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#dcdde1` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Teams, workflows, agents — one space | ATSeasonSans, -apple-system, "system-ui", sans-serif | 60px / 66px | 550 | normal |
| Builder speed becomes business momentum | ATSeasonSans, -apple-system, "system-ui", sans-serif | 48px / 55.2px | 550 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The white navigation includes a pale-blue announcement; source app preview mixes teal sidebar, white cards, gray structure and bright status markers. Do not treat preview status colors as primary brand buttons. The captured headline box is 896 × 132px at (272, 151). Loaded families: Haas, Haas Groot Disp, ATSeasonSans.

## Hero Composition and Presentation

A restrained centered 60/66px ATSeasonSans heading and nearly square black buttons precede a large blue-sky framed workflow UI. The page rail begins 48px from the viewport edges, with fine vertical lines. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Translate the workflow canvas through sky-like blue gradients and a teal rail; preserve the marketing type/white space. NOVA categories use compact framed cards, with chart bars functioning as clear progress states. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Translate the workflow canvas through sky-like blue gradients and a teal rail; preserve the marketing type/white space. NOVA categories use compact framed cards, with chart bars functioning as clear progress states.

Source primary face: ATSeasonSans, -apple-system, "system-ui", sans-serif. Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Enterprise platform introductions, structured service catalogs, data-driven product explainers. Avoid when: Expressive handwriting, dark immersion, or exuberant pill-heavy layouts are needed.

### Signature Atoms

- White #fff canvas, #161616 ink and actions, #f4f5f7 surfaces, #dcdde1 rules
- Inter with Noto Sans SC; hero 60px, weight 550, line-height 1.16, tracking -.025em
- 48px outer page margins with fine 1px #ddd vertical rails
- Nearly square 3px-radius buttons with 47px minimum height and 600 weight
- Blue #2d5eaa to #6b9cd8 preview backdrop around a #117b73 sidebar and white cards
- Three-column feature grid, 16px gaps, 8px card corners, and small #ffbf00, #3baa42, #1675ef markers

### Do

- Use Inter and Noto Sans SC; keep medium-weight display type restrained and centered.
- Frame the page with fine vertical rails and preserve generous white marketing space.
- Place an original modular workflow abstraction in a sky-blue field beneath the headline.
- Keep primary actions black and nearly square; reserve bright colors for status indicators.
- Use compact bordered cards and clear progress bars rather than decorative gradients on everyday controls.

### Don't

- Do not copy Airtable logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not promote yellow, green, or blue status markers into competing primary buttons.
- Do not use oversized pill controls or heavily rounded page containers.
- Do not let the blue preview backdrop replace the white marketing canvas.
- Do not discard the fine page rails or add heavy shadows to every section.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fff;
  --ink: #161616;
  --muted: #616670;
  --accent: #161616;
  --on-accent: #fff;
  --surface: #f4f5f7;
  --line: #dcdde1;
  --radius: 10px;
  --button-radius: 3px;
  --weight: 550;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/airtable.html) and [preview](../examples/airtable.png). [Style selection index](STYLE_INDEX.md).
