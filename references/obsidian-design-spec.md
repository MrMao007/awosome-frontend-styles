# Obsidian — Observed Homepage Design Paradigm

Source: [Obsidian](https://obsidian.md/). Category: Work & Collaboration. Capture: 2026-10-10T13:51:28.001Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A dark, almost black knowledge-work surface with a left-aligned 60px system-sans headline. Purple actions, gray text and a dark application window give it a quiet technical character rather than a glossy AI gradient look.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Page canvas | `#101010` | Source rendered surface; interpreted from screenshot where image-based. |
| Primary typography | `#eeeeee` | Observed heading color. |
| Secondary text | `#b3b3b3` | Observed support/UI text, not a universal unpublished token. |
| Primary action | `#7c3aed` | Observed visible action color; gradients described separately. |
| Supporting surface | `#1e1e1e` | Applied to localized tool/cards; source-specific surface family. |
| Rule / outline | `#343434` | Thin neutral separators; approximation where exact opacity differs. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Sharpen your thinking. | ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 60px / 60px | 600 | -1.2px |
| Spark ideas. | ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 60px / 60px | 600 | -1.2px |
| Sync securely. | ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 60px / 60px | 600 | -1.2px |
| Publish instantly. | ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 60px / 60px | 600 | -1.2px |
| It’s your time to shine. | ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 60px / 60px | 600 | -1.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Typography and Navigation

Observed title is 60/60px, 600, -1.2px tracking. App surface is rgb(30,30,30), sidebar rgb(38,38,38), radius 8px; a 220×440px black mobile preview overlaps the lower right. The captured headline box is 672 × 60px at (160, 186). Loaded families: none; system stack observed.

## Hero Composition and Presentation

A dark, almost black knowledge-work surface with a left-aligned 60px system-sans headline. Purple actions, gray text and a dark application window give it a quiet technical character rather than a glossy AI gradient look. The decorative NOVA panel is an original CSS abstraction: it does not reuse source screenshot text, customer logos or portraits.

## Surfaces, Components and Localization

Use a dark document rail and a subtle purple node graph, keeping text contrast explicit. NOVA features become separated knowledge cards, and the chart mirrors the low-contrast dark tool surface. The six existing feature items, category filters, three metrics and weekly four-row chart are unchanged. Border radius, density and category emphasis are adjusted to this observed visual paradigm.

## Responsive Scope

Only the source 1440 × 1000 desktop viewport was captured. The generated 390px layout is an original localization adaptation: decorative panels are removed, marketing text remains legible, cards stack in document order, and navigation retains its existing toggle. Source mobile breakpoints are not claimed.

## Adaptation to the NOVA Example

Use a dark document rail and a subtle purple node graph, keeping text contrast explicit. NOVA features become separated knowledge cards, and the chart mirrors the low-contrast dark tool surface.

Source primary face: ui-sans-serif, system-ui, -apple-system, "system-ui", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji". Display substitution: Inter + Noto Sans SC; body: Inter + Noto Sans SC. Replacement font families have their own published licenses; no proprietary source font files are redistributed. Chinese glyph metrics and the two-line NOVA heading are adaptations, not exact source measurements.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Developer tools, research utilities, focused knowledge and documentation products. Avoid when: Bright lifestyle imagery or exuberant glossy gradients are central.

### Signature Atoms

- #101010 canvas, #eeeeee ink, #b3b3b3 support text, #1e1e1e surfaces, #343434 outlines
- Inter with Noto Sans SC; hero 60px, weight 600, line-height 1.2, tracking -.035em
- Purple #7c3aed primary buttons with 7px corners; #a78bfa secondary links
- 960px-wide dark document abstraction with 8px corners and #262626 sidebar
- Original mobile abstraction uses 190px by 320px dimensions and 28px corners
- Subtle graph uses 8px #a78bfa nodes and 1px #5a4669 connectors

### Do

- Use Inter and Noto Sans SC to preserve a neutral system-sans character.
- Keep the hero left-aligned on near-black with explicit light heading and gray body contrast.
- Use purple sparingly for primary actions, secondary links, and selected states.
- Build original dark document and mobile abstractions with fine rails and a quiet node graph.
- Organize knowledge cards with thin gray borders and modest corners rather than glossy visual effects.

### Don't

- Do not copy Obsidian logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not replace the near-black palette with bright white marketing surfaces.
- Do not add broad neon glows, rainbow gradients, or glassmorphic feature cards.
- Do not use dim gray body text that disappears against the dark tool surface.
- Do not make the decorative graph denser or more prominent than the document preview.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #101010;
  --ink: #eeeeee;
  --muted: #b3b3b3;
  --accent: #7c3aed;
  --on-accent: #fff;
  --surface: #1e1e1e;
  --line: #343434;
  --radius: 8px;
  --button-radius: 7px;
  --weight: 600;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/obsidian.html) and [preview](../examples/obsidian.png). [Style selection index](STYLE_INDEX.md).
