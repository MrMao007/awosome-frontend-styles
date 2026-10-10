# Otter — Observed Homepage Design Paradigm

Source: [Otter](https://otter.ai/). Category: AI Products. Capture: 2026-10-10T14:02:47.706Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A friendly conversational-product split: airy black light-weight type, saturated blue actions and a tall softly rounded media region. The opening reads as a generous asymmetric editorial spread, not a centered prompt interface.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed on div at (695, 80); applied to the NOVA bg role. |
| ink | `rgb(0, 0, 0)` | Computed on header at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(34, 34, 34)` | Computed on a at (470, 25); applied to the NOVA muted role. |
| accent | `rgb(20, 79, 255)` | Computed on h2 at (403, 1046); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (695, 80); applied to the NOVA on-accent role. |
| surface | `rgb(255, 255, 255)` | Computed on div at (695, 80); applied to the NOVA surface role. |
| line | `rgb(211, 216, 223)` | Exact value in the captured visible-element color histogram; selected after screenshot review. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Your AI notetaker is now also your Conversational Knowledge Engine | Circular, Arial, sans-serif | 58.4825px / 64.3307px | 300 | -1.16965px |
| Like having your own executive assistant | Circular, Arial, sans-serif | 54.5837px / 60.042px | 300 | -1.09167px |
| Whatever you do, Otter works for you | Circular, Arial, sans-serif | 46.786px / 56.1432px | 300 | -0.46786px |
| Trusted by teams, loved by people | Circular, Arial, sans-serif | 54.5837px / 60.042px | 300 | -1.09167px |
| Connect to your favorite apps | Circular, Arial, sans-serif | 54.5837px / 60.042px | 300 | -1.09167px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The measured H1 is58.48px/64.33px weight300 in a480px column at x72/y119. A673px-square media pane occupies the right side beginning at x695/y80. NOVA uses a similarly tall left text column and an abstract soft-focus right pane.

## Component Grammar

Bright blue rgb(20,79,255) is the main control and later title color. Buttons have larger approachable corner radii. NOVA metric cards become an unboxed trust row; capability cards use generous white space and distinct small blue glyph marks.

## Visual Treatment and Graphic Language

The screenshot captures a blurred lilac and cream video state. These hues are not flat computed color tokens; the NOVA radial-gradient pane is an explicitly interpretive approximation. Testimonial headshots and customer quotations are omitted.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Manrope is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Manrope','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Personal productivity, friendly professional services, collaborative tools and approachable benefit-led pages. Avoid when: Dense technical consoles or austere industrial systems require compact angular treatment.

### Signature Atoms

- White canvas rgb(255,255,255), black ink rgb(0,0,0), saturated blue action rgb(20,79,255).
- Manrope hero 58px, weight 300, line-height 1.2 and tracking -.05em; left copy column is 515px wide.
- Tall right media pane has 24px corners; original soft-focus colors include #b69bd8, #d4bfea and #fcf0de.
- Blue action rectangles have 16px corners, 53px minimum height and weight-650 labels.
- Open feature rows have 2px blue top rules; alternating #f8faff panels use 24px corners and 34px grid gaps.
- Blue secondary titles are 39px at weight 300; progress rail is 60px wide and 3px high.

### Do

- Use Manrope with Noto Sans SC for light, approachable type; treat Circular as an observed reference only.
- Build a generous asymmetric opening with a narrow left reading column and a tall rounded right visual.
- Reserve saturated blue for actions, secondary titles, small feature marks and selected states.
- Use original soft-focus lilac and cream geometry rather than borrowed customer footage or portraits.
- Keep metrics unboxed and alternate open feature entries with occasional pale rounded panels.

### Don't

- Do not copy Otter logos, trademarks, product screenshots, testimonial headshots, quotations or marketing copy.
- Do not center the opening like a prompt tool or replace its tall side visual with a full-bleed backdrop.
- Do not use heavy condensed headlines, square industrial cards or a dark neon theme.
- Do not spread blue over the entire canvas or turn every feature into an identical rounded card.
- Do not make the blurred decorative pane or progress rail imply working media playback.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(0, 0, 0);
  --muted: rgb(34, 34, 34);
  --accent: rgb(20, 79, 255);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(255, 255, 255);
  --line: rgb(211, 216, 223);
  --radius: 24px;
  --weight: 300;
  --button-radius: 16px;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Manrope','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/otter.html) and [preview](../examples/otter.png). [Style selection index](STYLE_INDEX.md).
