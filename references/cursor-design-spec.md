# Cursor — Observed Homepage Design Paradigm

Source: [Cursor](https://cursor.com/). Category: AI Products. Capture: 2026-10-10T14:03:19.961Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Understated desktop-software presentation. A small practical headline makes room for a huge layered application preview; warm almost-white surfaces and restrained typography avoid conventional oversized SaaS hero marketing.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(247, 247, 244)` | Computed on section at (0, 52); applied to the NOVA bg role. |
| ink | `rgb(38, 37, 30)` | Computed on section at (0, 52); applied to the NOVA ink role. |
| muted | `rgba(38, 37, 30, 0.55)` | Computed on div at (740, 461); applied to the NOVA muted role. |
| accent | `rgb(38, 37, 30)` | Computed on section at (0, 52); applied to the NOVA accent role. |
| on-accent | `rgb(247, 247, 244)` | Computed on section at (0, 52); applied to the NOVA on-accent role. |
| surface | `rgb(242, 241, 237)` | Computed on div at (180, 401); applied to the NOVA surface role. |
| line | `rgba(38,37,30,.12)` | Local supporting UI value for contrast or separation, not claimed to be a measured brand color. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Cursor is your coding agent for building ambitious software. | CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 26px / 32.5px | 400 | -0.325px |
| Trusted every day by teams that build world-class software | CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 21px | 400 | 0.14px |
| Agents turn ideas into code | CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 28.6px | 400 | -0.11px |
| Mission Control Interface | system-ui, -apple-system, "system-ui", "Segoe UI", "Helvetica Neue", Arial, sans-serif | 20px / 31px | 700 | normal |
| Trigger | system-ui, -apple-system, "system-ui", "Segoe UI", "Helvetica Neue", Arial, sans-serif | 14px / 21.7px | 600 | normal |
| View Behavior | system-ui, -apple-system, "system-ui", "Segoe UI", "Helvetica Neue", Arial, sans-serif | 14px / 21.7px | 600 | normal |
| Works autonomously, runs in parallel | CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 28.6px | 400 | -0.11px |
| In every tool, at every step | CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif | 22px / 28.6px | 400 | -0.11px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The original headline is only 26px/32.5px and sits at x70/y164. A 1300×720 demonstration stage starts at y351, with layered desktop and terminal windows. NOVA keeps a compact top-left introduction and uses abstract window geometry underneath.

## Component Grammar

Measured outer preview radius is 4px; inner application window is 10px with a layered soft shadow. Rounded dark CTA pills contrast with flat almost-borderless content sections. NOVA feature cards form a calm three-column software inventory.

## Visual Treatment and Graphic Language

The original uses a muted landscape behind the preview. NOVA does not copy the image or UI text: a neutral CSS field and blank geometric panes suggest the desktop staging. Red and green code colors sampled inside the demo are not treated as primary brand accents.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Inter is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Desktop utilities, professional workspaces, developer tools and practical software catalogs. Avoid when: Expressive lifestyle branding or oversized campaign typography must dominate.

### Signature Atoms

- Canvas rgb(247,247,244), ink rgb(38,37,30), pale panels rgb(242,241,237).
- Inter hero 32px, weight 400, line-height 1.32 and tracking -.04em; section titles 30px.
- Desktop preview has 4px outer corners, 10px inner windows and layered 0 28px 70px #00000024 shadow.
- Neutral stage gradient uses #e6e2d8, #d2d1c9 and #efeee8 behind blank layered application panes.
- Dark CTA pills use 999px radius, 44px minimum height and 14px regular-weight labels.
- Three-column borderless inventory uses 10px gaps; delivered supporting text is #67665e.

### Do

- Use Inter with Noto Sans SC at regular weight; treat CursorGothic as an observed reference, not a font dependency.
- Keep the introduction small and top-left so the broad layered software stage carries the visual hierarchy.
- Use warm neutral backgrounds, nearly borderless inventory panels and dark pill actions.
- Build original blank desktop panes; concentrate soft shadows on overlapping preview windows rather than every card.
- Use the delivered #67665e supporting text instead of translucent gray where needed for readable contrast.

### Don't

- Do not copy Cursor logos, trademarks, product screenshots, landscape imagery or marketing copy.
- Do not enlarge the headline into a billboard or center the opening like a generic sales hero.
- Do not treat code-status red and green as page-wide brand accents.
- Do not add thick card borders, glossy gradients or exaggerated rounding to content panels.
- Do not fade the desktop stage on larger screens or let its decorative panes overlap readable copy.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(247, 247, 244);
  --ink: rgb(38, 37, 30);
  --muted: rgba(38, 37, 30, 0.55);
  --accent: rgb(38, 37, 30);
  --on-accent: rgb(247, 247, 244);
  --surface: rgb(242, 241, 237);
  --line: rgba(38,37,30,.12);
  --radius: 4px;
  --weight: 400;
  --button-radius: 999px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/cursor.html) and [preview](../examples/cursor.png). [Style selection index](STYLE_INDEX.md).
