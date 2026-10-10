# ClickUp — Observed Homepage Design Paradigm

Source: [ClickUp](https://clickup.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:49:43.625Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A bold left-aligned marketing headline sits above a dense application preview. Plus Jakarta Sans is 60/66px, 700, -2.1px tracking; black primary buttons deliberately avoid the rainbow accent that belongs to the AI illustration.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#202020` | Observed heading color. |
| Secondary text | `#646464` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#202020` | Observed visible action color; gradients described separately. |
| Supporting surface | `#f7f7f8` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e4e4e9` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| One Workspace built to think and work | "Plus Jakarta Sans" | 60px / 66px | 700 | -2.1px |
| 60% of work is lost in context – and AI is lost without it | "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif | 48px / 60px | 650 | -1.68px |
| All apps, AI Agents, and humans in ClickUp | "Plus Jakarta Sans", -apple-system, Roboto, Helvetica, sans-serif | 48px / 60px | 650 | -1.68px |
| Projects | "Plus Jakarta Sans", sans-serif | 26px / 32.5px | 650 | -0.91px |
| Docs | "Plus Jakarta Sans", sans-serif | 26px / 32.5px | 650 | -0.91px |
| Brain | "Plus Jakarta Sans", sans-serif | 26px / 32.5px | 650 | -0.91px |
| Chat | "Plus Jakarta Sans", sans-serif | 26px / 32.5px | 650 | -0.91px |
| A new era of humans, with Super Agents | "Plus Jakarta Sans", sans-serif | 76px / 79.8px | 700 | -3.04px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The source app window measures 878×623px, radius 12px, with a 0 12px 48px shadow. Navigation and hero start at x≈180px, producing a narrower centered page rail. The captured headline box is 1045 × 66px at (180, 190). Loaded families: Inter, Plus Jakarta Sans, Sometype Mono.

## Hero Composition and Presentation

A bold left-aligned marketing headline sits above a dense application preview. Plus Jakarta Sans is 60/66px, 700, -2.1px tracking; black primary buttons deliberately avoid the rainbow accent that belongs to the AI illustration. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

The generated features become a structured list/workspace view. Rainbow color remains a small decorative accent, while gray separators and compact tags do the everyday organizational work. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

The generated features become a structured list/workspace view. Rainbow color remains a small decorative accent, while gray separators and compact tags do the everyday organizational work.

Source primary face: "Plus Jakarta Sans". Display substitution: Plus Jakarta Sans + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Plus Jakarta Sans','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Feature-rich application launches, workflow explainers, software comparison pages. Avoid when: Soft lifestyle storytelling or sparse luxury presentation leads.

### Signature Atoms

- White #fff canvas, #202020 ink and actions, #f7f7f8 surfaces, #e4e4e9 outlines
- Plus Jakarta Sans with Noto Sans SC; hero 60px, weight 700, line-height 1.15, tracking -.045em
- 1080px page rail; 12px-radius app frame with shadow 0 12px 48px #0002
- Black 12px-radius buttons, minimum height 50px, weight 700
- Single-column feature list with 110px rows, 24px internal gaps, and 1px #e8e8ec separators
- 26px decorative conic-gradient node using #0091ff, #ff02f0, #f76808, and #6647f0

### Do

- Use Plus Jakarta Sans for bold headings and Inter for body text, with Noto Sans SC for Chinese.
- Align headline and navigation to a narrow centered rail; put the original workspace preview below.
- Keep primary actions black and confine rainbow color to small decorative or categorical accents.
- Organize feature content as compact framed rows with short tags and fine separators.
- Check tag and control contrast; retain mobile text-width corrections and stack rows to prevent clipping.

### Don't

- Do not copy ClickUp logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not turn primary buttons into rainbow gradients.
- Do not replace the structured feature list with airy pastel tiles.
- Do not scatter glows across the neutral workspace surface.
- Do not force desktop row columns onto narrow screens or allow descriptions to overflow.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fff;
  --ink: #202020;
  --muted: #646464;
  --accent: #202020;
  --on-accent: #fff;
  --surface: #f7f7f8;
  --line: #e4e4e9;
  --radius: 12px;
  --button-radius: 12px;
  --weight: 700;
  --display: 'Plus Jakarta Sans','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/clickup.html) and [preview](../examples/clickup.png). [Style selection index](STYLE_INDEX.md).
