# Notion — Observed Homepage Design Paradigm

Source: [Notion](https://www.notion.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:48:50.251Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Oversized centered black typography, a pale-blue action capsule and a clean white navigation. A 960px-wide document mockup with thin borders and a multi-layer soft shadow anchors the lower fold.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#ffffff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#0d0d0d` | Observed heading color. Interpretation / adaptation value; not independently established as an exact source token. |
| Secondary text | `#424242` | Observed support/UI text, not a universal unpublished token. Interpretation / adaptation value; not independently established as an exact source token. |
| Primary action | `#0075de` | Observed visible action color; gradients described separately. |
| Supporting surface | `#f7f7f5` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e5e5e5` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Where teams and agents  Think  together. | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 96px / 100px | 600 | -4.6px |
| AI where your team works. | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 54px / 56px | 700 | -1.87501px |
| Bring everything into one system of record. | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 22px / 28px | 700 | -0.25px |
| Get answers, instantly—with citations. | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 22px / 28px | 700 | -0.25px |
| Keep work moving 24/7 with agents. | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 22px / 28px | 700 | -0.25px |
| See what Notion can do | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 14px / 20px | 400 | normal |
| Triage product feedback→ | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 16px / 24px | 700 | normal |
| Resolve support tickets in Slack→ | NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" | 16px / 24px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Keep abundant white negative space and concentrate color in the blue actions. Source h1 is 96/100px, weight 600, tracking -4.6px; the rounded Think insert is 72px. The captured headline box is 1252 × 210px at (94, 144). Loaded families: NotionInter, Lyon Text.

## Hero Composition and Presentation

Oversized centered black typography, a pale-blue action capsule and a clean white navigation. A 960px-wide document mockup with thin borders and a multi-layer soft shadow anchors the lower fold. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

The document metaphor is localized as an abstract ruled canvas, not the source customer board. Light neutral cards and blue tab states organize the unchanged NOVA sections. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

The document metaphor is localized as an abstract ruled canvas, not the source customer board. Light neutral cards and blue tab states organize the unchanged NOVA sections.

Source primary face: NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol". Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Knowledge hubs, educational launches, documentation-led product introductions. Avoid when: Immersive dark visuals or dense transactional interfaces dominate.

### Signature Atoms

- White #ffffff canvas, #0d0d0d ink, #0075de actions, #f7f7f5 document surfaces
- Inter with Noto Sans SC; adapted hero 82px, weight 600, line-height 1.18, tracking -.055em
- Compact 7px-radius buttons; pale-blue #e6f3fe capsules with #005bab text
- Centered 960px-wide document abstraction, 8px corners, shadow 0 36px 89px #0001
- Two-column feature cards with 24px gaps, 34px padding, and borderless neutral surfaces

### Do

- Center a short, oversized headline and reserve generous white space around it.
- Use Inter and Noto Sans SC rather than proprietary source font files.
- Concentrate blue in actions, selected states, and small document accents.
- Build an original ruled document abstraction beneath the hero, with a quiet layered shadow.
- Separate open metric rows with thin rules; stack cards and remove decorative panels on narrow screens.

### Don't

- Do not copy Notion logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not turn the canvas dark or cover large areas in saturated blue.
- Do not replace the compact rectangular actions with oversized pills everywhere.
- Do not add heavy borders or deep shadows to every feature card.
- Do not let the document decoration compete with or overlap the headline.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #0d0d0d;
  --muted: #424242;
  --accent: #0075de;
  --on-accent: #fff;
  --surface: #f7f7f5;
  --line: #e5e5e5;
  --radius: 8px;
  --button-radius: 7px;
  --weight: 600;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/notion.html) and [preview](../examples/notion.png). [Style selection index](STYLE_INDEX.md).
