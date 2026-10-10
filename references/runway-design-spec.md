# Runway — Observed Homepage Design Paradigm

Source: [Runway](https://runway.com/). Category: AI Products. Capture: 2026-10-10T14:05:29.740Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Cinematic product infrastructure: a white navigation frame encloses a very dark widescreen moving-image hero, with the copy anchored low left. The visual is the hero; the type stays surprisingly moderate.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Computed on section at (0, 48); applied to the NOVA bg role. |
| ink | `rgb(12, 12, 12)` | Computed on div at (20, 112); applied to the NOVA ink role. |
| muted | `rgb(64, 64, 64)` | Computed on section at (0, 48); applied to the NOVA muted role. |
| accent | `rgb(12, 12, 12)` | Computed on div at (20, 112); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on section at (0, 48); applied to the NOVA on-accent role. |
| surface | `rgb(238, 241, 245)` | Computed on a at (1135, 66); applied to the NOVA surface role. |
| line | `rgb(229, 231, 235)` | Computed on section at (0, 48); applied to the NOVA line role. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Building Real-World Intelligence | abcNormal, "abcNormal Fallback" | 40px / 46px | 400 | -0.5px |
| Three platforms built on-top of the same Real-World Intelligence model | abcNormal, "abcNormal Fallback" | 56px / 61.6px | 400 | -0.84px |
| Runway Creative | abcNormal, "abcNormal Fallback" | 24px / 27.6px | 500 | -0.18px |
| Runway Dev | abcNormal, "abcNormal Fallback" | 24px / 27.6px | 500 | -0.18px |
| Runway Robotics | abcNormal, "abcNormal Fallback" | 24px / 27.6px | 500 | -0.18px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The captured dark media well is1400×600 at x20/y112 with a12px radius. The source H1 is40px/46px and begins near x64/y414. NOVA uses a nearly edge-to-edge dark inset scene and a bottom-left type anchor.

## Component Grammar

Buttons are practical small rounded rectangles. Below the cinematic hero, pale sections and centered organizational rows reset the contrast. NOVA uses open poster-like capability tiles and a full-width data rail, not a generic glowing dashboard.

## Visual Treatment and Graphic Language

The source image has a dramatic oblique bright edge. NOVA creates an original diagonal abstract horizon with CSS gradients; the scene is not a copied film frame. The optional source top promotion strip is not reproduced as business content.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. DM Sans is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Film portfolios, experiential launches, exhibition pages and visually led product stories. Avoid when: Text-heavy documentation or compact task interfaces must dominate the first screen.

### Signature Atoms

- White canvas rgb(255,255,255), dark media ink rgb(12,12,12), pale reset surface rgb(238,241,245).
- DM Sans hero 43px, weight 400, line-height 1.15 and tracking -.055em; supporting text 19px.
- Dark inset hero uses 20px outer margins, 12px corners, 650px minimum height and low-left copy.
- Original diagonal horizon uses #050908, #694934, #ece8df and #485454 under a dark left-to-right overlay.
- Hero buttons have 8px corners and 42px minimum height; white primary action contrasts with translucent outlined secondary.
- Two-column poster tiles use 32px gaps, 40px padding and 12px corners; a 150px-wide progress rail is 2px high.

### Do

- Use DM Sans with Noto Sans SC at regular weight; treat abcNormal as an observed source reference.
- Frame a nearly edge-to-edge dark landscape inside a white navigation shell and anchor copy low-left.
- Use original imagery or an abstract oblique horizon, with a dark overlay keeping white copy legible.
- Keep typography moderate so the scene, not an enormous headline, carries the first-view drama.
- Reset the contrast below the hero with pale organizational rows and spacious poster-like content tiles.

### Don't

- Do not copy Runway logos, trademarks, product screenshots, film frames, illustrations or marketing copy.
- Do not turn the entire page into a glowing dark dashboard or spread the small blue top-edge accent everywhere.
- Do not center a billboard headline over the visual or obscure its cinematic composition.
- Do not use large pill buttons or heavily shadowed cards in place of practical rounded rectangles.
- Do not imply playback functionality with a decorative progress rail that has no working media behavior.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(12, 12, 12);
  --muted: rgb(64, 64, 64);
  --accent: rgb(12, 12, 12);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(238, 241, 245);
  --line: rgb(229, 231, 235);
  --radius: 12px;
  --weight: 400;
  --button-radius: 8px;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/runway.html) and [preview](../examples/runway.png). [Style selection index](STYLE_INDEX.md).
