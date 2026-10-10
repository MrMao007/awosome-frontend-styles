# Calendly — Observed Homepage Design Paradigm

Source: [Calendly](https://calendly.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:52:19.647Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

The current Calendly design is warm cream with deep navy typography, a pale-blue announcement and extremely rounded inset content surfaces. It is not the historical bright-blue-on-white generic SaaS layout.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fcfbf8` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#071a31` | Observed heading color. |
| Secondary text | `#5f6d77` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#071a31` | Observed visible action color; gradients described separately. |
| Supporting surface | `#f5f3ee` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e4e6e9` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| All the work around meetings, handled. | "Calendly Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 72px / 79.2px | 500 | -2px |
| Book meetings with the world’s #1 scheduling tool | Geist, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 36px / 39.6px | 500 | -1px |
| Introducing your 24/7 AI scheduling assistant | Geist, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 36px / 39.6px | 500 | -1px |
| Actionable, shareable recaps for every meeting | Geist, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 36px / 39.6px | 500 | -1px |
| Flexible, built-in payment tools | Geist, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 36px / 39.6px | 500 | -1px |
| Built for people whose work runs on meetings | "Calendly Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 60px / 66px | 500 | -2px |
| Book | "Calendly Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 28px / 33.6px | 500 | normal |
| Prep | "Calendly Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif | 28px / 33.6px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The 72/79.2px Calendly Sans heading uses 500 and -2px tracking. The main section is x=24px, width 1392px, radius 64px; its first presentation panel is 1200px wide and also 64px rounded. The captured headline box is 640 × 158px at (400, 228). Loaded families: Geist, Calendly Sans, Wulkan Text.

## Hero Composition and Presentation

The current Calendly design is warm cream with deep navy typography, a pale-blue announcement and extremely rounded inset content surfaces. It is not the historical bright-blue-on-white generic SaaS layout. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Geist is directly observed for body and secondary headings; use it openly with Noto Sans SC while substituting it for proprietary Calendly Sans display. NOVA is organized into large soft gray/blue modules with navy actions. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Geist is directly observed for body and secondary headings; use it openly with Noto Sans SC while substituting it for proprietary Calendly Sans display. NOVA is organized into large soft gray/blue modules with navy actions.

Source primary face: "Calendly Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif. Display substitution: Geist + Noto Sans SC; body: Inter + Noto Sans SC (Geist is retained for display and observed as source body). Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Geist','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Service platforms, human-centered onboarding, polished multi-feature landing pages. Avoid when: Sharp technical grids, stark monochrome, or high-density interfaces are needed.

### Signature Atoms

- #fcfbf8 canvas, #071a31 ink and actions, #f5f3ee supporting surfaces, #e4e6e9 neutrals
- Geist with Noto Sans SC; adapted hero 68px, weight 500, line-height 1.2, tracking -.055em
- 24px inset content region with 64px outer corners and pale-blue #c3dffe presentation panels
- Navy 10px-radius hero buttons with 195px minimum width and 50px minimum height
- Two-column 36px-radius feature modules in #e4e6e9, #c3dffe, and #ede4d7, with 24px gaps
- Feature descriptions use delivered contrast color #3e4d58; pale-blue top strip is #84c1ff

### Do

- Use Geist for medium-weight display and Inter for body text, with Noto Sans SC fallback.
- Center the hero and surround it with large, extremely rounded cream and gray modules.
- Keep actions deep navy; use pale blue for announcement strips, presentation panels, and chart fills.
- Use broad borderless feature modules rather than tiny repeated cards or heavy outlines.
- Retain #3e4d58 for feature descriptions and verify text and control contrast on gray, blue, and beige surfaces.

### Don't

- Do not copy Calendly logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not revert to a historical bright-blue-on-white generic SaaS palette.
- Do not use square outer containers or densely packed narrow feature tiles.
- Do not make every button pale blue or turn the navy text into pure black.
- Do not use faint gray descriptions that disappear on the tinted feature modules.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fcfbf8;
  --ink: #071a31;
  --muted: #5f6d77;
  --accent: #071a31;
  --on-accent: #fff;
  --surface: #f5f3ee;
  --line: #e4e6e9;
  --radius: 32px;
  --button-radius: 10px;
  --weight: 500;
  --display: 'Geist','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/calendly.html) and [preview](../examples/calendly.png). [Style selection index](STYLE_INDEX.md).
