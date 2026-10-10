# AssemblyAI — Observed Homepage Design Paradigm

Source: [AssemblyAI](https://www.assemblyai.com/). Category: AI Products. Capture: 2026-10-10T14:07:14.774Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A cream technical editorial interface combining a large refined serif statement with purple monospace control labels. Below the introduction, an API playground is laid out as an instrument panel, not a glossy app mockup.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(253, 252, 248)` | Computed on div at (0, 32); applied to the NOVA bg role. |
| ink | `rgb(29, 27, 22)` | Computed on div at (0, 0); applied to the NOVA ink role. |
| muted | `rgb(74, 73, 69)` | Computed on div at (0, 32); applied to the NOVA muted role. |
| accent | `rgb(57, 35, 199)` | Computed on button at (1400, 0); applied to the NOVA accent role. |
| on-accent | `rgb(255, 255, 255)` | Computed on div at (921, 721); applied to the NOVA on-accent role. |
| surface | `rgb(245, 243, 235)` | Computed on div at (148, 538); applied to the NOVA surface role. |
| line | `rgb(119, 118, 115)` | Computed on a at (348, 32); applied to the NOVA line role. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Voice AI infrastructure for builders | "Oceanic Text", Georgia, serif | 72px / 72px | 400 | -3.6px |
| Everything you need to build with Voice AI. | "Oceanic Text", Georgia, serif | 64px / 64px | 400 | -3.2px |
| Pre-recorded Speech-to-Text API | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |
| Realtime Speech-to-Text API | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |
| Sync Speech-to-Text API | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |
| Voice Agent API | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |
| Speech Understanding API | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |
| Guardrails | "Oceanic Text", Georgia, serif | 32px / 32px | 400 | -1.6px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

Measured source H1 uses Oceanic Text at72px/72px weight400 and -3.6px tracking, at x148/y234 in a792px region. Supporting copy is right-aligned as a separate column. NOVA mirrors the split opening with a Chinese serif substitute.

## Component Grammar

Buttons are2px–4px purple rectangles, using rgb(57,35,199). The lower source tabs and code pane use warm paper surfaces and thin rules. NOVA filters and capability cards form a similarly disciplined workstation.

## Visual Treatment and Graphic Language

The screenshot includes a cookie dialog and a darkened backdrop. The source computed canvas remains rgb(253,252,248): the overlay is capture context, not a deliberate brand color. The adapted page omits that overlay and includes no source API code.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. IBM Plex Sans is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'IBM Plex Sans','Noto Sans SC',sans-serif; body: 'IBM Plex Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Developer documentation gateways, technical services, research tools and scholarly product launches. Avoid when: Glossy consumer spectacle or dense dark gaming interfaces require visual intensity.

### Signature Atoms

- Canvas rgb(253,252,248), ink rgb(29,27,22), purple action rgb(57,35,199), warm panel rgb(245,243,235).
- Noto Serif SC hero 59px, weight 400, line-height 1.25 and tracking -.055em; body uses IBM Plex Sans.
- Split introduction uses 1.55fr and .85fr columns, a 52px gap and 148px desktop gutters.
- Purple controls have 2px corners, 42px minimum height and 12px monospace labels with .06em tracking.
- Two-column workstation panels have 4px corners, 14px gaps and 1px #77767344 borders.
- Selected tabs use a 2px purple underline; dark impact field has #b0a7e9 data accents and 10px square chart tracks.

### Do

- Use Noto Serif SC display type and IBM Plex Sans with Noto Sans SC body text; treat Oceanic Text as a reference only.
- Set a large refined serif statement beside a separate supporting column on warm cream paper.
- Use small purple rectangular actions, monospace labels and thin rules to express technical precision.
- Organize capabilities as a sober instrument panel with warm surfaces, compact tabs and lightly framed entries.
- Keep the canvas bright and unobscured; introduce dark contrast only in deliberate supporting sections.

### Don't

- Do not copy AssemblyAI logos, trademarks, product screenshots, API code, illustrations or marketing copy.
- Do not reproduce a captured cookie overlay or treat its dimmed backdrop as the intended canvas.
- Do not replace the serif and monospace contrast with uniform bold geometric sans-serif type.
- Do not use large pills, glass cards, neon glow or deep mockup shadows throughout the workstation.
- Do not invent runnable API samples or expose credentials inside decorative technical panels.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(253, 252, 248);
  --ink: rgb(29, 27, 22);
  --muted: rgb(74, 73, 69);
  --accent: rgb(57, 35, 199);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(245, 243, 235);
  --line: rgb(119, 118, 115);
  --radius: 4px;
  --weight: 400;
  --button-radius: 2px;
  --display: 'IBM Plex Sans','Noto Sans SC',sans-serif;
  --body: 'IBM Plex Sans','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/assemblyai.html) and [preview](../examples/assemblyai.png). [Style selection index](STYLE_INDEX.md).
