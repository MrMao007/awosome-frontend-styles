# Asana — Observed Homepage Design Paradigm

Source: [Asana](https://asana.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:49:02.916Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

The centered hero is enclosed by a fine rounded workflow path, floating white speech cards and colored agent nodes. White background and black pill actions contrast with the coral-to-pink emphasis in the headline.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#0d0e10` | Observed heading color. |
| Secondary text | `#646f79` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#0d0d0d` | Observed visible action color; gradients described separately. |
| Supporting surface | `#fafafa` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#dadada` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The OS for human-agent teams | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 102px / 91.8px | 300 | -2.55px |
| AI that works the way your team works | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 54px / 54px | 300 | -1.08px |
| AI TEAMMATES | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 16px / 24px | 500 | 0.64px |
| Your team just got bigger | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 54px / 54px | 300 | -1.08px |
| Deliver real productivity for every team | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 54px / 54px | 300 | -1.08px |
| Agentic Work Management | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 20px / 30px | 400 | normal |
| Asana Service Management | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 20px / 30px | 400 | normal |
| Asana Client Management | "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif | 20px / 30px | 400 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The observed TWK Lausanne headline uses weight 300 at 102/91.8px. Navigation is 68px high; source signup choices use 100px-radius outlines rather than boxed CTAs. The captured headline box is 873 × 184px at (283, 253). Loaded families: TWK Lausanne.

## Hero Composition and Presentation

The centered hero is enclosed by a fine rounded workflow path, floating white speech cards and colored agent nodes. White background and black pill actions contrast with the coral-to-pink emphasis in the headline. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Adapt the surrounding agent/workflow imagery with empty geometric nodes. Lighter-weight CJK display and sparse open metric rows preserve the unusually airy typographic voice. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Adapt the surrounding agent/workflow imagery with empty geometric nodes. Lighter-weight CJK display and sparse open metric rows preserve the unusually airy typographic voice.

Source primary face: "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif. Display substitution: DM Sans + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Human-centered service launches, community platforms, collaborative program pages. Avoid when: Dense tables, hard-edged technical aesthetics, or austere monochrome are required.

### Signature Atoms

- White #fff canvas, #0d0e10 ink, black #0d0d0d actions, #646f79 support text
- DM Sans display with Noto Sans SC; hero 78px, weight 300, line-height 1.2, tracking -.06em
- Headline gradient from #0d0e10 through coral #ff453e to pink #f481f4
- 100px-radius pill actions, 240px width and 60px minimum height in the hero
- 65px-radius workflow enclosure with 1px #ddd outline and floating 16px-radius white cards
- Three-column white feature cards, 22px corners and 24px gaps on #f6f5f3

### Do

- Use DM Sans for light display text and Inter for body copy, with Noto Sans SC for Chinese.
- Keep the headline centered and lightweight; preserve generous breathing room.
- Enclose the hero with a fine rounded path and original colored geometric nodes.
- Pair black pill actions with restrained coral and pink headline or chart emphasis.
- Use open metric rows and softly rounded white cards, not a dense dashboard grid.

### Don't

- Do not copy Asana logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not make display typography heavy, condensed, or tightly boxed.
- Do not flood the page with coral; keep the canvas predominantly white.
- Do not replace the fine workflow outline with thick frames or harsh shadows.
- Do not promote every pastel node color into a competing primary action.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fff;
  --ink: #0d0e10;
  --muted: #646f79;
  --accent: #0d0d0d;
  --on-accent: #fff;
  --surface: #fafafa;
  --line: #dadada;
  --radius: 20px;
  --button-radius: 100px;
  --weight: 300;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/asana.html) and [preview](../examples/asana.png). [Style selection index](STYLE_INDEX.md).
