# v0 — Observed Homepage Design Paradigm

Source: [v0](https://v0.app/). Category: AI Products. Capture: 2026-10-10T14:05:05.178Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A utility-first creation surface, not a conventional sales billboard: monochrome navigation, a narrow centered composer, suggestion chips and a template gallery. The quiet interface invites an immediate action.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `oklch(0.985 0 0)` | Computed on div at (0, 0); applied to the NOVA bg role. |
| ink | `oklch(0.205 0 0)` | Computed on h1 at (24, 194); applied to the NOVA ink role. |
| muted | `oklch(0.51 0 0)` | Computed on button at (508, 11); applied to the NOVA muted role. |
| accent | `oklch(0.205 0 0)` | Computed on h1 at (24, 194); applied to the NOVA accent role. |
| on-accent | `oklch(1 0 0)` | Computed on form at (375, 251); applied to the NOVA on-accent role. |
| surface | `oklch(1 0 0)` | Computed on form at (375, 251); applied to the NOVA surface role. |
| line | `oklch(0.937 0 0)` | Computed on div at (0, 0); applied to the NOVA line role. Interpretation / adaptation value; not independently established as an exact source token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| What do you want to create? | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 32px / 40px | 600 | -1.28px |
| Start with a template | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 24px / 32px | 600 | -0.96px |
| Prompt. Build. Publish. | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 48px / 56px | 600 | -2.88px |
| Sync with a repo | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 600 | -0.4px |
| Integrate with apps | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 600 | -0.4px |
| Deploy to Vercel | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 600 | -0.4px |
| Edit with design mode | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 600 | -0.4px |
| Start with templates | GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" | 20px / 26px | 600 | -0.4px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Spatial Hierarchy

The measured heading is 32px/40px at y194; the central input surface is 690×108px with a 12px radius. A three-column gallery begins around y599. NOVA uses the fixed subtitle as the composer-like surface and maintains the action buttons without inventing an input workflow.

## Component Grammar

Thin neutral borders and small rounded pills organize the page. The filter row is chip-like, while feature cards use thumbnail-like geometric tops. These are decorative local adaptations; source template titles and creators are never copied.

## Visual Treatment and Graphic Language

Observed palette is almost entirely achromatic OKLCH grays. NOVA preserves those literal measured color forms instead of inventing a colorful accent. No simulated chat responses or account features are added.

## Adaptation to the NOVA Example

The shared NOVA Chinese HTML body, including all copy, metrics, six feature cards, four filters and start dialog, is preserved byte-for-byte. The CSS translates the observed spatial grammar rather than reproducing source business copy or customer profiles. Decorative pseudo-elements are non-interactive abstract graphics, not actual product capabilities. Chinese headline wrapping and responsive stacking are local implementation choices, not claimed source measurements.

The source computed font families are recorded above. Geist is a legally available Google Fonts substitute (or the same open-source family where it matches); no proprietary font files are copied. Noto Sans SC is explicitly included for legible Chinese glyphs. Localized headline sizes may differ from the English sample and are design adaptations, not source tokens.

## Example Font Configuration

The example uses display: 'Geist','Noto Sans SC',sans-serif; body: 'Geist','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creation tools, template libraries, search interfaces and action-first onboarding pages. Avoid when: Emotional brand storytelling or immersive media must lead the page.

### Signature Atoms

- Canvas oklch(0.985 0 0), ink oklch(0.205 0 0), white panels oklch(1 0 0).
- Geist hero 34px, weight 600, line-height 1.25 and tracking -.05em; secondary headings 26px.
- Centered composer-like surface is 690px wide with 12px corners and 1px oklch(.836 0 0) border.
- Action rectangles use 8px corners and 32px minimum height; suggestion and filter pills use 999px radius.
- Three-column gallery uses 22px gaps, 8px card corners and 144px-high geometric thumbnail tops.
- Supporting labels use oklch(0.51 0 0); quiet separators use oklch(0.937 0 0).

### Do

- Use open-source Geist with Noto Sans SC; treat observed GeistSans naming as a source reference.
- Lead with a concise centered question or instruction and place the primary action close to the composer surface.
- Keep the entire interface achromatic, separating white panels with thin neutral borders.
- Organize reusable content in a compact thumbnail gallery with pill-like category controls.
- Keep decorative composer styling distinct from real inputs; provide working input behavior only when the new content requires it.

### Don't

- Do not copy v0 logos, trademarks, product screenshots, template previews or marketing copy.
- Do not add a bright action hue, atmospheric color wash or neon glow.
- Do not replace the compact utility heading with oversized sales typography.
- Do not use deep floating shadows or oversized soft cards throughout the gallery.
- Do not imply chat, generation or account functionality with decorative noninteractive panels.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: oklch(0.985 0 0);
  --ink: oklch(0.205 0 0);
  --muted: oklch(0.51 0 0);
  --accent: oklch(0.205 0 0);
  --on-accent: oklch(1 0 0);
  --surface: oklch(1 0 0);
  --line: oklch(0.937 0 0);
  --radius: 12px;
  --weight: 600;
  --button-radius: 8px;
  --display: 'Geist','Noto Sans SC',sans-serif;
  --body: 'Geist','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/v0.html) and [preview](../examples/v0.png). [Style selection index](STYLE_INDEX.md).
