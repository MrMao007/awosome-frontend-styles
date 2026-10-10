# Todoist — Observed Homepage Design Paradigm

Source: [Todoist](https://www.todoist.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:51:01.454Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A warm near-white page with a modest 55px left-aligned Graphik headline, coral action and soft peach product panel on the right. The source cookie banner obscures the right edge but is not part of the adopted visual system.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `oklch(0.9945 0.0017 67.8)` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#25221e` | Observed heading color. |
| Secondary text | `#6f6d6b` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#e44232` | Observed visible action color; gradients described separately. |
| Supporting surface | `#fff6f0` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e7e2de` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Clarity, finally. | Graphik-1bbd4a4c7a2fb472, "Graphik-1bbd4a4c7a2fb472 fallback: Arial", "Helvetica Neue", Helvetica, Arial, sans-serif | 55px / 63.25px | 600 | -0.55px |
| Kickstart your next project with Todoist Templates | Graphik-1bbd4a4c7a2fb472, "Graphik-1bbd4a4c7a2fb472 fallback: Arial", "Helvetica Neue", Helvetica, Arial, sans-serif | 38px / 48.64px | 600 | -0.19px |
| A task manager you can trust for life | Graphik-1bbd4a4c7a2fb472, "Graphik-1bbd4a4c7a2fb472 fallback: Arial", "Helvetica Neue", Helvetica, Arial, sans-serif | 38px / 48.64px | 600 | -0.19px |
| Gain calmness and clarity with the world’s most beloved productivity a | Graphik-1bbd4a4c7a2fb472, "Graphik-1bbd4a4c7a2fb472 fallback: Arial", "Helvetica Neue", Helvetica, Arial, sans-serif | 44px / 50.6px | 600 | -0.44px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Graphik display is 600, 55/63.25px, tracking -.55px. The coral CTA has a warm lower-edge treatment; serif italic testimonials and gently flowing green lines lighten the bottom of the viewport. The captured headline box is 378 × 63px at (82, 200). Loaded families: Inter-5486e50ce5a4efdf, Inter-5486e50ce5a4efdf fallback: Arial, Graphik-1bbd4a4c7a2fb472, Graphik-1bbd4a4c7a2fb472 fallback: Arial, Caecilia-8d8a7c9be503e3f3, Caecilia-8d8a7c9be503e3f3 fallback: Times New Roman.

## Hero Composition and Presentation

A warm near-white page with a modest 55px left-aligned Graphik headline, coral action and soft peach product panel on the right. The source cookie banner obscures the right edge but is not part of the adopted visual system. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

NOVA uses a task-list illustration and circular check affordance decoration. Feature cards become calm checklist rows rather than colorful generic bento panels, with a warm serif accent reserved for numeric outcomes. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

NOVA uses a task-list illustration and circular check affordance decoration. Feature cards become calm checklist rows rather than colorful generic bento panels, with a warm serif accent reserved for numeric outcomes.

Source primary face: Graphik-1bbd4a4c7a2fb472, "Graphik-1bbd4a4c7a2fb472 fallback: Arial", "Helvetica Neue", Helvetica, Arial, sans-serif. Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Personal tools, habit programs, calm onboarding and practical service pages. Avoid when: Dense enterprise dashboards or dramatic dark technology branding dominates.

### Signature Atoms

- Canvas oklch(0.9945 0.0017 67.8), #25221e ink, #e44232 actions, #fff6f0 warm surfaces
- Inter with Noto Sans SC; adapted hero 54px, weight 650, line-height 1.24, tracking -.025em
- 535px left copy column and right peach #fff1e8 to #ffe3d6 task-panel gradient
- 14px-radius coral actions, 58px minimum height, shadow 0 6px 0 #fbb5a4
- Two-column checklist rows with 18px circular #e44232 outlines and #e7e2de bottom rules
- Lora and Noto Serif SC numeric accents at 52px, weight 500

### Do

- Use Inter and Noto Sans SC for primary typography; reserve Lora serif accents for numeric outcomes.
- Keep a modest left-aligned headline opposite an original peach task-list abstraction.
- Give coral primary actions a warm lower-edge treatment and leave secondary actions quiet.
- Arrange features as calm checklist rows with circular affordances, not colorful bento tiles.
- Use warm neutral rules and lightly flowing pale-green decoration without disturbing reading order.

### Don't

- Do not copy Todoist logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not adopt the source cookie banner as a signature page component.
- Do not replace the warm near-white palette with cool gray or black neon surfaces.
- Do not inflate the headline into a massive full-width display.
- Do not scatter serif type or saturated card colors across the everyday interface.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: oklch(0.9945 0.0017 67.8);
  --ink: #25221e;
  --muted: #6f6d6b;
  --accent: #e44232;
  --on-accent: #fff;
  --surface: #fff6f0;
  --line: #e7e2de;
  --radius: 14px;
  --button-radius: 14px;
  --weight: 600;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/todoist.html) and [preview](../examples/todoist.png). [Style selection index](STYLE_INDEX.md).
