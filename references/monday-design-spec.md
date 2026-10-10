# monday.com — Observed Homepage Design Paradigm

Source: [monday.com](https://monday.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:49:17.570Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A left-aligned 580px text column faces three overlapping portrait/agent cards. Poppins at 56/67.2px is regular, with -2.24px tracking; purple pill controls and small category chips create a friendly workspace tone.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#000` | Observed heading color. |
| Secondary text | `#535768` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#6161ff` | Observed visible action color; gradients described separately. |
| Supporting surface | `#f3f4f5` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e9e9ed` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| People and agents working as one team | Poppins, Arial, sans-serif | 56px / 67.2px | 400 | -2.24px |
| Get more done with agents | Poppins, Arial, sans-serif | 56px / 67.2px | 400 | -1.68px |
| Posts, campaigns and ads. Done. | Poppins, Arial, sans-serif | 28px / 36.4px | 400 | normal |
| An agent for every use case | Poppins, Arial, sans-serif | 56px / 67.2px | 400 | -1.68px |
| Work in context | Poppins, Arial, sans-serif | 96px / 96px | 500 | -3.84px |
| Full control | Poppins, Arial, sans-serif | 128px / 102.4px | 500 | -5.12px |
| Consider yourself limitless | Poppins, Arial, sans-serif | 128px / 128px | 500 | -5.12px |
| Bring your own agent | Poppins, Arial, sans-serif | 44px / 48.4px | 400 | -0.88px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Navigation is a 72px white strip with 40px horizontal padding. The hero is spacious, with a clearly separated trust strip and no full-bleed colored background. The captured headline box is 580 × 134px at (72, 160). Loaded families: Poppins.

## Hero Composition and Presentation

A left-aligned 580px text column faces three overlapping portrait/agent cards. Poppins at 56/67.2px is regular, with -2.24px tracking; purple pill controls and small category chips create a friendly workspace tone. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

NOVA uses a CSS three-card stack rather than borrowing agent portraits. Color-coded feature categories and wide center section headings carry the product-selection rhythm below the fold. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

NOVA uses a CSS three-card stack rather than borrowing agent portraits. Color-coded feature categories and wide center section headings carry the product-selection rhythm below the fold.

Source primary face: Poppins, Arial, sans-serif. Display substitution: Poppins + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Poppins','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Multi-offering landing pages, onboarding portals, approachable service catalogs. Avoid when: Severe editorial restraint or dense operational data is essential.

### Signature Atoms

- White #fff canvas, #000 ink, #6161ff actions, #535768 secondary text
- Poppins with Noto Sans SC; adapted hero 54px, weight 400, line-height 1.28, tracking -.045em
- 585px left text column opposite a 310px by 360px central card and tilted side cards
- Purple 32px-radius controls and #d9d7ff category capsules
- 24px-radius feature cards with 24px gaps in #ededff, #e5f5ee, and #fff0e3
- Layered hero cards use 10px white borders and shadow 0 6px 24px #0003

### Do

- Use regular-weight Poppins display type with Inter body copy and Noto Sans SC fallback.
- Keep the hero left-aligned and balance it with an original overlapping card collage.
- Reserve purple for actions and selection; use muted pastels to distinguish feature groups.
- Use pill controls, broad rounded cards, and centered section headings below the split hero.
- Keep the trust and metric strip spacious and visually separate from the hero collage.

### Don't

- Do not copy monday.com logos, trademarks, portraits, product screenshots, or marketing copy.
- Do not use a full-bleed saturated background for the white split hero.
- Do not substitute heavy condensed headlines for the regular geometric typography.
- Do not flatten the overlapping cards into a single generic dashboard rectangle.
- Do not use every category color for primary buttons or navigation states.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fff;
  --ink: #000;
  --muted: #535768;
  --accent: #6161ff;
  --on-accent: #fff;
  --surface: #f3f4f5;
  --line: #e9e9ed;
  --radius: 16px;
  --button-radius: 32px;
  --weight: 400;
  --display: 'Poppins','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/monday.html) and [preview](../examples/monday.png). [Style selection index](STYLE_INDEX.md).
