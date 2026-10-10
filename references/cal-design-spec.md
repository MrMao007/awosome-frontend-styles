# Cal.com — Observed Homepage Design Paradigm

Source: [Cal.com](https://cal.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:52:04.296Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Cal.com is a monochrome scheduling product in a light-gray outer frame. A white 1176×700px hero card has 12px corners and a subtle shadow, with left text and a clipped booking calendar right.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#f4f4f4` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#242424` | Observed heading color. |
| Secondary text | `#898989` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#242424` | Observed visible action color; gradients described separately. |
| Supporting surface | `#ffffff` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#e2e3e5` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The better way to schedule your meetings | "Cal Sans", "Cal Sans Placeholder", sans-serif | 64px / 70.4px | 600 | normal |
| With us, appointment scheduling is easy | "Cal Sans", "Cal Sans Placeholder", sans-serif | 48px / 52.8px | 600 | normal |
| Connect your calendar | "Cal Sans UI Variable Light", "Cal Sans UI Variable Light Placeholder", sans-serif | 18px / 23.4px | 300 | -0.2px |
| Cal.com | "Cal Sans", sans-serif | 16px / 17.6px | 600 | normal |
| Set your availability | "Cal Sans UI Variable Light", "Cal Sans UI Variable Light Placeholder", sans-serif | 18px / 23.4px | 300 | -0.2px |
| Choose how to meet | "Cal Sans UI Variable Light", "Cal Sans UI Variable Light Placeholder", sans-serif | 18px / 23.4px | 300 | -0.2px |
| Your all-purpose scheduling app | "Cal Sans", "Cal Sans Placeholder", sans-serif | 48px / 52.8px | 600 | normal |
| Avoid meeting overload | "Cal Sans UI Variable Light", "Cal Sans UI Variable Light Placeholder", sans-serif | 18px / 23.4px | 300 | -0.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Cal Sans heading is 64/70.4px, weight 600. Matter is used for ordinary text. The scene begins at x=132px; fine page-rail rules and tiny cross marks give an engineered grid feel. The captured headline box is 500 × 211px at (196, 253). Loaded families: Cal Sans, Roboto Mono, Cal Sans UI Variable Light, Matter Regular, Matter SemiBold, Matter Medium, Inter.

## Hero Composition and Presentation

Cal.com is a monochrome scheduling product in a light-gray outer frame. A white 1176×700px hero card has 12px corners and a subtle shadow, with left text and a clipped booking calendar right. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Use the open-source Cal Sans face with Noto Sans SC fallback, and Inter for body as a declared replacement for Matter. A decorative blank calendar echoes the source, while NOVA categories remain actual functioning filters. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Use the open-source Cal Sans face with Noto Sans SC fallback, and Inter for body as a declared replacement for Matter. A decorative blank calendar echoes the source, while NOVA categories remain actual functioning filters.

Source primary face: "Cal Sans", "Cal Sans Placeholder", sans-serif. Display substitution: Cal Sans + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Cal Sans','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Utility product launches, appointment services, focused onboarding pages. Avoid when: Colorful expressive storytelling or immersive media presentation leads.

### Signature Atoms

- #f4f4f4 outer canvas, #242424 ink and actions, #ffffff cards, #e2e3e5 rules
- Cal Sans with Noto Sans SC; adapted hero 58px, weight 600, line-height 1.18, tracking -.02em
- 1176px by 700px white hero card, 12px corners, shadow 0 4px 8px #2424240d
- 500px left copy column opposite a clipped 710px by 412px blank calendar abstraction
- Stacked 12px-radius actions, 40px minimum height, and gray-gradient secondary fill
- Delivered support copy uses #626262 rather than the lighter #898989 observed gray

### Do

- Use open-source Cal Sans for headings and Inter for body copy, with Noto Sans SC fallback.
- Place a white rounded hero card inside a light-gray outer frame with fine engineered rails.
- Keep copy left-aligned and clip an original blank calendar abstraction at the right edge.
- Use monochrome actions and lightly shadowed framed cards; stack the main hero actions.
- Retain #626262 for supporting paragraphs, feature descriptions, metric labels, and footer text; check control contrast.

### Don't

- Do not copy Cal.com logos, trademarks, booking screenshots, customer content, or marketing copy.
- Do not replace the monochrome frame with saturated brand-color backgrounds.
- Do not use large gradient glows or glassmorphic cards.
- Do not make decorative calendar geometry obscure the text or imply a functioning booking form.
- Do not revert small support text to low-contrast #898989 on white.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #f4f4f4;
  --ink: #242424;
  --muted: #898989;
  --accent: #242424;
  --on-accent: #fff;
  --surface: #ffffff;
  --line: #e2e3e5;
  --radius: 12px;
  --button-radius: 12px;
  --weight: 600;
  --display: 'Cal Sans','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/cal.html) and [preview](../examples/cal.png). [Style selection index](STYLE_INDEX.md).
