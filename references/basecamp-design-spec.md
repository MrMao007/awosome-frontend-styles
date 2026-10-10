# Basecamp — Observed Homepage Design Paradigm

Source: [Basecamp](https://basecamp.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:50:46.665Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

The current Basecamp capture is unusually product-first: a large screenshot on the left and navigation-like blue underlined links plus a bold 42px marketing heading on the right. Pale blue page panels have square outer edges.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#ffffff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#29353c` | Observed heading color. |
| Secondary text | `#6d767b` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#0068df` | Observed visible action color; gradients described separately. Interpretation / adaptation value; not independently established as an exact source token. |
| Supporting surface | `#f4f8ff` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e3e8ee` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Manage projects, coordinate teams, and master your company with Baseca | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| Famously straightforward and easy‑to‑use, there’s simply nothing else  | Graphik, sans-serif | 30.6389px / 39.8305px | 400 | -0.804271px |
| Take a minute to meet some of our customers | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| We asked our customers: “What changed for the better since you switche | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| How about a quick demonstration? | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| Big numbers. Highly-trusted. Rugged, reliable, ready. | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| Remember when companies cared about service? | Graphik, sans-serif | 42.1285px / 48.4477px | 800 | -1.10587px |
| Durable infrastructure | Graphik, sans-serif | 22.9792px / 34.4687px | 800 | -0.315963px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Graphik 800 display at 42.13/48.45px contrasts with 30.64px regular support copy. Source screenshot is 643×669px with subtle layered shadows; Graphik UI samples inside it are not headline measurements. The captured headline box is 582 × 145px at (781, 529). Loaded families: Martian Mono, Graphik.

## Hero Composition and Presentation

The current Basecamp capture is unusually product-first: a large screenshot on the left and navigation-like blue underlined links plus a bold 42px marketing heading on the right. Pale blue page panels have square outer edges. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

The NOVA hero reverses the default visual hierarchy with a project-board illustration left and copy right. Blue underlined exploration links, square buttons and compact document tiles preserve the straightforward functional character. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

The NOVA hero reverses the default visual hierarchy with a project-board illustration left and copy right. Blue underlined exploration links, square buttons and compact document tiles preserve the straightforward functional character.

Source primary face: Graphik, sans-serif. Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Practical service pages, product demonstrations, straightforward small-business sites. Avoid when: Luxury polish, abstract futurism, or soft pill-heavy branding leads.

### Signature Atoms

- White #ffffff canvas, #29353c ink, #0068df actions, #f4f8ff panel surfaces
- Inter with Noto Sans SC; adapted hero 47px, weight 800, line-height 1.22, tracking -.04em
- Reversed split hero: original project board on the left, 590px copy column on the right
- Square 0px-radius hero buttons, 50px minimum height, with underlined blue secondary links
- Pale-blue sections inset 31px; white board has 1px #e6eaf1 frame and square corners
- Compact 5px-radius feature cards with 1px #e0e3e8 borders and 18px grid gaps

### Do

- Use Inter and Noto Sans SC, with very bold headings and large regular support copy.
- Lead with an original functional board illustration on the left and explanatory copy on the right.
- Keep exploration links blue and underlined; use square, plainly legible actions.
- Use pale-blue section panels with square outer edges and compact white document tiles.
- Reserve subtle shadows for the product board and charts; let borders organize ordinary cards.

### Don't

- Do not copy Basecamp logos, trademarks, product screenshots, customer content, or marketing copy.
- Do not center the hero into a generic headline-over-dashboard arrangement.
- Do not replace underlined links with subtle low-contrast text-only navigation.
- Do not use oversized pills, glass panels, or multicolor neon gradients.
- Do not shrink the explanatory copy into tiny dashboard typography.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #29353c;
  --muted: #6d767b;
  --accent: #0068df;
  --on-accent: #fff;
  --surface: #f4f8ff;
  --line: #e3e8ee;
  --radius: 4px;
  --button-radius: 0px;
  --weight: 800;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/basecamp.html) and [preview](../examples/basecamp.png). [Style selection index](STYLE_INDEX.md).
