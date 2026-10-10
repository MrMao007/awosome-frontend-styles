# tldraw — Observed Homepage Design Paradigm

Source: [tldraw](https://www.tldraw.com/). Category: Design & Creation. Capture: 2026-10-10T14:06:41.558Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A live whiteboard workspace, not a marketing landing page. The near-empty pale canvas, corner tools, compact floating palette and bottom toolbar create the hierarchy. The captured 24px H1 is a 1 × 1px accessibility element and must not be mistaken for a visible display headline.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(249, 250, 251)` | Computed full-screen editor surface. |
| Tool paper | `rgb(252, 252, 252)` | Computed overlay/editor surface. |
| Tool ink | `rgb(46, 46, 46)` | Repeated computed control text. |
| Selected tool | `#3182ed` | Raster-sampled flat blue active-tool interior in tldraw-source.png. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| tldraw - free and instant collaborative whiteboarding | Inter, -apple-system, "system-ui", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji" | 24px / 38.4px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The rendered editor fills 1440 × 1000px with a pale canvas. A narrow tool palette occupies the upper right; a floating toolbar sits near the lower center. The screenshot contains no large visible hero statement. NOVA needs its unchanged headline, so the adaptation places it on an annotated canvas while retaining the workspace proportions.

## Components and Controls

Source text uses Inter, with dark gray rgb(46,46,46), secondary rgb(110,116,119) and pale rgb(249,250,251) / rgb(252,252,252) surfaces. Rounded white tools have subtle outlines and elevation. Blue indicates a selected tool and sharing control. The visual study repurposes NOVA filters as the functional toolbar instead of inventing drawing functionality.

## Graphic Language and Evidence Boundaries

The adaptation uses dotted drafting guides, rough rounded outlines, sticky-note-like planes and short connector rules. These are CSS-generated annotations and do not claim the initially empty source canvas contained drawings. The source palette swatches are tools, not a license to recolor all content.

## Adaptation to the NOVA Example

NOVA retains all text but becomes a collaborative whiteboard composition. The hero uses a left annotation block and a large outlined canvas sheet; actions form a floating tray. Capabilities are modest paper notes rather than SaaS dashboard cards. Noto Sans SC is selected for Chinese; Inter preserves the compact Latin/tool tone.

The captured page is an editor rather than a display-headline marketing page; hidden or clipped accessibility text is not treated as a visible hero. Original proprietary font files are not redistributed. Inter is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Workshop pages, collaborative planning, learning tools, and annotated project showcases. Avoid when: Luxury marketing or large cinematic media must drive the hierarchy.

### Signature Atoms

- Canvas #f9fafb, tool paper #fcfcfc, ink #2e2e2e, selected blue #3182ed, outlines #dfe2e5.
- Inter with Noto Sans SC; adapted visible heading 48px, weight 600, line-height 1.22, tracking -.04em.
- Drafting dots use #c7ccd1 at 1px with 24px grid spacing; hero annotation sheet max-width 620px.
- Annotation sheet uses a 2px dark outline, corners 14px 6px 18px 8px, and a 5px 6px hard offset shadow.
- Floating action and filter trays have 9px corners, pale borders, small elevation, and 44px controls.
- Paper notes use corners 4px 10px 6px 8px; final blue CTA labels use delivered #061019 for contrast.

### Do

- Use Inter and Noto Sans SC for compact workspace typography; treat the visible headline as an authored annotation.
- Spread pale canvas space around rough paper outlines, dotted guides, and short original connector rules.
- Group actual actions and filters into floating tool trays; reserve blue for selected states and primary controls.
- Use thin outlines and slight hard-offset elevation instead of glossy marketing-card shadows.
- Retain #061019 labels on the final blue CTA and check muted text and control contrast on pale paper.
- Keep annotation text readable and flatten rotated sheets into normal flow on small screens.

### Don't

- Do not copy tldraw logos, trademarks, tool icons, editor screenshots, drawings, or marketing copy.
- Do not treat the source's clipped accessibility H1 as an observed visible hero headline.
- Do not turn palette swatches into a rainbow theme across all content.
- Do not invent drawing functionality for decorative guides or substitute a cinematic full-bleed stage.
- Do not remove the delivered dark final-CTA label correction or bury controls in faint paper outlines.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #f9fafb;
  --ink: #2e2e2e;
  --muted: #6e7477;
  --accent: #3182ed;
  --on-accent: #ffffff;
  --surface: #fcfcfc;
  --line: #dfe2e5;
  --radius: 9px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 600;
  --button-radius: 9px;
}
```

Example: [HTML](../examples/tldraw.html) and [preview](../examples/tldraw.png). [Style selection index](STYLE_INDEX.md).
