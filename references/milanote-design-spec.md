# Milanote — Observed Homepage Design Paradigm

Source: [Milanote](https://milanote.com/). Category: Design & Creation. Capture: 2026-10-10T14:08:08.342Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A creative project board behind an editorial invitation: slate-blue opening field, white serif title, orange compact action and a white board frame crossing into a pale lower page. The screenshot’s board contents are unloaded, so only the established shell is studied.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed h1 text in source evidence; sampled element at x=0, y=84. |
| Ink | `rgb(49, 48, 58)` | Computed div text in source evidence; sampled element at x=0, y=0. |
| Primary action | `rgb(244, 81, 28)` | Computed a background in source evidence; sampled element at x=1265, y=21. |
| Surface | `rgb(235, 237, 238)` | Computed div background in source evidence; sampled element at x=162, y=373. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Get organized. Stay creative. | Tiempos, serif | 64px / 85.312px | 600 | -0.03px |
| Save ideas & inspiration | Tiempos, serif | 40px / 53.32px | 700 | -0.03px |
| Take notes & collect research | Tiempos, serif | 40px / 53.32px | 700 | -0.03px |
| Organize projects visually | Tiempos, serif | 40px / 53.32px | 700 | -0.03px |
| Collaborate with clients & your team | Tiempos, serif | 40px / 53.32px | 700 | -0.03px |
| Made for creative work. | Tiempos, serif | 64px / 85.312px | 600 | -0.03px |
| Filmmaking | Tiempos, serif | 20px / 26.66px | 700 | -0.03px |
| Writing | Tiempos, serif | 20px / 26.66px | 700 | -0.03px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The header is 84px high with rgb(48,59,75) fill. The centered 64px Tiempos headline has 85.312px line-height and weight 600. Supporting Inter text uses 28px/35px. A 1116 × 630px board preview starts at x=162, y=373 with approximately 10.26px corners, crossing a diagonal stage boundary.

## Components and Controls

Orange signup buttons use rgb(244,81,28), white text and 6px corners. Login uses rgb(70,80,95). The board’s pale surface is rgb(235,237,238). Secondary hero text is rgb(162,167,175). Blank board contents are not treated as proof of a fully loaded sample moodboard.

## Graphic Language and Evidence Boundaries

The visual character comes from a large board sheet over the sloping slate background, not from glowing rounded dashboard cards. NOVA uses anonymous pinboard notes, thin connector lines and a paper hierarchy as an adaptation; these newly drawn elements are distinguished from observed source media.

## Adaptation to the NOVA Example

NOVA opens on slate with white serif Chinese title, an orange action and a board-stage silhouette. The diagonal hero boundary leads into white sections. Capability panels become differently sized board notes with small pin marks; the original six cards remain in DOM order. Source Serif 4 substitutes Tiempos, and Noto Serif SC explicitly handles Chinese headlines.

The observed display sample uses Tiempos, serif, 64px / 85.312px, weight 600, tracking -0.03px. Original proprietary font files are not redistributed. Source Serif 4 is the explicit open-source display substitute; Inter fills the body role. Chinese uses Noto Serif SC for display and Noto Sans SC for body as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Source Serif 4','Noto Serif SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Project portfolios, research collectives, community planning, and creative workshop pages. Avoid when: Uniform dense operational tables or neon campaign graphics are required.

### Signature Atoms

- Hero slate #303b4b, white title #fff, orange #f4511c, pale board #ebedee, body ink #31303a.
- Source Serif 4 with Noto Serif SC; adapted title 60px, weight 600, line-height 1.27, tracking -.02em.
- Inter body with Noto Sans SC; hero supporting text 23px; header height 84px.
- Hero uses a 173deg diagonal boundary; broad board inset 11% with 10px corners and a 59px white top bar.
- Paper notes use 4px corners, 6px top rules, 24px gaps, and unequal 1.2fr 1fr 1fr columns.
- Orange controls use 6px corners; final CTA labels use #15212c, while mobile hero copy uses #c4c8cf.

### Do

- Use Source Serif 4 and Noto Serif SC for editorial headings, with Inter and Noto Sans SC for body copy.
- Open with centered white serif text on slate and a compact orange conversion point.
- Let a broad pale board cross a sloping hero boundary into the white lower page.
- Use original paper notes, pin marks, and thin connectors; vary note widths and vertical offsets without changing reading order.
- Retain #15212c final-CTA labels and readable #c4c8cf mobile hero copy; verify contrast on orange and slate surfaces.
- Flatten staggered notes and hide the decorative board on mobile to protect the reading flow.

### Don't

- Do not copy Milanote logos, trademarks, board screenshots, moodboard images, or marketing copy.
- Do not claim anonymous generated board notes were visible in the source's unloaded preview.
- Do not replace the paper board and diagonal stage with a glowing generic SaaS dashboard.
- Do not make all notes equal-height rounded cards or remove their quiet paper edges.
- Do not restore low-contrast pale final-CTA labels or allow staggered notes to disrupt mobile reading order.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #31303a;
  --muted: #46505f;
  --accent: #f4511c;
  --on-accent: #ffffff;
  --surface: #ebedee;
  --line: #d5d9dd;
  --radius: 10px;
  --display: 'Source Serif 4','Noto Serif SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 600;
  --button-radius: 6px;
}
```

Example: [HTML](../examples/milanote.html) and [preview](../examples/milanote.png). [Style selection index](STYLE_INDEX.md).
