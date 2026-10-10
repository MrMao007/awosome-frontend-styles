# Fireflies — Observed Homepage Design Paradigm

Source: [Fireflies](https://fireflies.ai/). Category: AI Products. Capture: 2026-10-10T14:02:35.039Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Midnight-violet meeting-product theater: a centered two-line statement, bright purple rectangular actions, faint stars and a white product panel entering from the bottom of the hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(16, 7, 48)` | Computed on div at (0, 36); applied to the NOVA bg role. |
| ink | `rgb(250, 250, 250)` | Computed on h3 at (136, 904); applied to the NOVA ink role. |
| muted | `rgba(250, 250, 253, 0.78)` | Computed on button at (250, 68); applied to the NOVA muted role. |
| accent | `rgb(122, 90, 248)` | Computed on button at (1162, 940); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on button at (1162, 940); applied to the NOVA on-accent role. |
| surface | `rgba(241, 241, 249, 0.14)` | Computed on button at (1062, 941); applied to the NOVA surface role. |
| line | `rgba(255,255,255,.08)` | Local supporting UI value for contrast or separation, not claimed to be a measured brand color. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Your privacy | "DM Sans", "DM Sans Fallback", sans-serif | 20px / 24px | 500 | -0.2px |
| The #1 AI Assistant For Your Meetings | "DM Sans", "DM Sans Fallback", sans-serif | 56px / 73.92px | 500 | 1.12px |
| High Quality Meeting Transcription & Recording | "DM Sans", "DM Sans Fallback", sans-serif | 40px / 56px | 500 | -0.4px |
| 95% Accurate | Inter, "Inter Fallback", sans-serif | 16px / 23.68px | 500 | -0.16px |
| 100+ Languages | Inter, "Inter Fallback", sans-serif | 16px / 23.68px | 500 | -0.16px |
| Speaker Recognition | Inter, "Inter Fallback", sans-serif | 16px / 23.68px | 500 | -0.16px |
| Auto-Language Detection | Inter, "Inter Fallback", sans-serif | 16px / 23.68px | 500 | -0.16px |
| Comprehensive AI Summaries | "DM Sans", "DM Sans Fallback", sans-serif | 40px / 56px | 500 | -0.4px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The source heading is56px/73.92px weight500 with positive1.12px tracking, centered at x407/y250. There is a96px visual gap before the product preview. NOVA keeps the centered title and bottom-entry software framing without copying meeting transcript content.

## Component Grammar

Primary buttons use the sampled rgb(122,90,248) and4px corners. Translucent secondary surfaces use rgba(241,241,249,.14). NOVA uses compact rectangular filter states and thin translucent card borders.

## Visual Treatment and Graphic Language

Dark hero backing is measured rgb(16,7,48); stars are a screenshot-observed decorative field. NOVA creates fixed CSS dots and an abstract white panel. The cookie notice is noted as capture context but not turned into the hero design or an extra dialog.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. DM Sans is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Collaboration launches, community platforms, conversational tools and nighttime-themed product showcases. Avoid when: Paper-like editorial reading or conservative white institutional pages are required.

### Signature Atoms

- Canvas rgb(16,7,48), ink rgb(250,250,250), action rgb(122,90,248), supporting text rgba(250,250,253,0.78).
- DM Sans hero 57px, weight 500, line-height 1.33 and positive .012em tracking; section headings 37px.
- Purple actions use 4px corners and 48px minimum height; translucent panels use 8px corners.
- Fixed star layers repeat at 137px by 133px, 239px by 179px and 317px by 213px.
- Bottom-entry white preview is 350px high with 8px top corners and 0 0 100px #7a5af824 glow.
- Three-column dark features use 23px gaps, rgba(241,241,249,.06) fill and #ffffff19 borders.

### Do

- Use open-source DM Sans with Noto Sans SC for the centered white display hierarchy.
- Keep the canvas midnight violet with faint fixed stars and a bright white preview entering below the hero.
- Use slightly open headline tracking and generous spacing before the software panel.
- Make purple primary actions compact rectangles and secondary surfaces translucent rather than opaque gray.
- Use pale lavender metadata and thin translucent borders to structure darker supporting sections.

### Don't

- Do not copy Fireflies logos, trademarks, product screenshots, transcripts, illustrations or marketing copy.
- Do not convert the design into a white editorial page or a generic black-and-green console.
- Do not tighten the headline aggressively or replace rectangular actions with oversized pills.
- Do not blanket every panel with purple glow or turn the faint star field into distracting motion.
- Do not reproduce a captured cookie notice or fabricate meeting content inside the decorative software pane.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(16, 7, 48);
  --ink: rgb(250, 250, 250);
  --muted: rgba(250, 250, 253, 0.78);
  --accent: rgb(122, 90, 248);
  --on-accent: rgb(255, 255, 255);
  --surface: rgba(241, 241, 249, 0.14);
  --line: rgba(255,255,255,.08);
  --radius: 8px;
  --weight: 500;
  --button-radius: 4px;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/fireflies.html) and [preview](../examples/fireflies.png). [Style selection index](STYLE_INDEX.md).
