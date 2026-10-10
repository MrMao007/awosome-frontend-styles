# Loom — Observed Homepage Design Paradigm

Source: [Loom](https://www.loom.com/). Category: Work & Collaboration. Capture: 2026-10-10T13:51:52.026Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

The current Loom homepage uses Atlassian blue rather than the older purple brand. A centered bold 63.27px Charlie Display headline and spacious 26px supporting text precede a 1280×720px video stage with 41.69px corners.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#fff` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#101214` | Observed heading color. |
| Secondary text | `#292a2e` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#1868db` | Observed visible action color; gradients described separately. |
| Supporting surface | `#e9f2fe` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#dae4f0` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| One video is worth a thousand words | "Charlie Display", sans-serif | 63.2692px / 65.104px | 700 | normal |
| Millions of people across 400,000 companies choose Loom | "Charlie Display", sans-serif | 44.1538px / 50.4678px | 700 | normal |
| Meet the all-new Loom for Mac | "Charlie Display", sans-serif | 63.2692px / 65.104px | 700 | normal |
| The easiest screen recorder you’ll ever use | "Charlie Display", sans-serif | 63.2692px / 65.104px | 700 | normal |
| Lightning fast screen recording | "Charlie Display", sans-serif | 32.5px / 41.3725px | 700 | normal |
| So much more than a screen recorder | "Charlie Display", sans-serif | 63.2692px / 65.104px | 700 | normal |
| Edit your videos like a pro | "Charlie Display", sans-serif | 32.5px / 41.3725px | 700 | normal |
| Share or embed video anywhere you work | "Charlie Display", sans-serif | 32.5px / 41.3725px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

The source top announcement is blue with white type. Buttons are wide pills; a large blue play affordance overlays photographic video. The black video frame is a media surface, not the page background. The captured headline box is 1015 × 65px at (212, 261). Loaded families: Charlie Display, Charlie Text.

## Hero Composition and Presentation

The current Loom homepage uses Atlassian blue rather than the older purple brand. A centered bold 63.27px Charlie Display headline and spacious 26px supporting text precede a 1280×720px video stage with 41.69px corners. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Localize as an abstract blue-tinted media frame with a geometric play icon. Use open-source DM Sans/Noto Sans SC in place of Charlie Display/Text, then turn feature groups into large media-like panels. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Localize as an abstract blue-tinted media frame with a geometric play icon. Use open-source DM Sans/Noto Sans SC in place of Charlie Display/Text, then turn feature groups into large media-like panels.

Source primary face: "Charlie Display", sans-serif. Display substitution: DM Sans + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Media-led launches, educational demonstrations, approachable communication tools. Avoid when: Dense data tables or understated text-only editorial pages lead.

### Signature Atoms

- White #fff canvas, #101214 ink, #1868db actions, #e9f2fe supporting panels
- DM Sans with Noto Sans SC; hero 64px, weight 700, line-height 1.18, tracking -.035em
- 12px blue top rule above navigation with 110px minimum height
- 100px-radius pill actions, 58px minimum height, 16px text at weight 700
- 440px-tall abstract media stage with 42px corners and a 90px circular blue play affordance
- Two-column pale-blue feature panels, 32px corners, 36px padding, and 28px gaps

### Do

- Use DM Sans display type and Inter body text with Noto Sans SC fallback.
- Center bold headlines and spacious support text above a large original media abstraction.
- Use the observed blue action palette, with pill controls and pale-blue secondary surfaces.
- Make the rounded media stage the main visual anchor; use an original geometric play affordance.
- Carry broad, media-like rounded panels through feature sections and keep metric rows open.

### Don't

- Do not copy Loom logos, trademarks, product videos, screenshots, illustrations, or marketing copy.
- Do not substitute the older purple palette for this observed blue style.
- Do not treat the dark media frame as the background for the whole page.
- Do not shrink supporting copy into compact dashboard text.
- Do not replace the large rounded video stage with many small bordered widgets.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fff;
  --ink: #101214;
  --muted: #292a2e;
  --accent: #1868db;
  --on-accent: #fff;
  --surface: #e9f2fe;
  --line: #dae4f0;
  --radius: 32px;
  --button-radius: 100px;
  --weight: 700;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/loom.html) and [preview](../examples/loom.png). [Style selection index](STYLE_INDEX.md).
