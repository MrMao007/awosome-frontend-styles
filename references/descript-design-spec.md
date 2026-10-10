# Descript — Observed Homepage Design Paradigm

Source: [Descript](https://www.descript.com/). Category: Design & Creation. Capture: 2026-10-10T14:05:54.588Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An editorial film poster: warm ivory serif type on a deep wine field, a detached pale navigation slab, a tiny technical eyebrow and a bright red conversion point. The large overlapping editor panes are supporting theater rather than a right-side SaaS dashboard.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `#390a1a` | Raster-sampled dominant flat wine field in descript-source.png. |
| Display ink | `rgb(255, 248, 244)` | Computed gamuthDisplay hero text. |
| Primary action | `rgb(247, 59, 59)` | Computed Get started action fill. |
| Navigation | `rgb(255, 247, 250)` | Computed 1400 × 102px navigation surface. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| AI VIDEO EDITOR | brett, "brett Fallback", system-ui, Roboto, Arial, sans-serif | 18px / 18px | 400 | 0.72px |
| AI-editing for every kind of video | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 88px / normal | 400 | normal |
| The whole workflow, right here | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 56px / 61.6px | 700 | normal |
| Record | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 40px / 44px | 700 | normal |
| Edit | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 40px / 44px | 700 | normal |
| Refine | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 40px / 44px | 700 | normal |
| Share | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 40px / 44px | 700 | normal |
| Multiply | gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif | 40px / 44px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The pale navigation slab begins at x=20, y=10 and measures 1400 × 102px, with 12px corners. The main display block sits at x=274, y=197, measures 892 × 210px and uses 88px gamuthDisplay at weight 400. A centered action is followed by overlapping pale editor windows entering from the bottom of the viewport.

## Components and Controls

The source navigation uses a pale pink rgb(255,247,250) surface. Sign up has rgb(119,42,77) fill; the hero action uses rgb(247,59,59), ivory text and 12px corners. The technical eyebrow uses brett at 18px/18px with 0.72px tracking. The adaptation preserves two working NOVA actions instead of adding a fake editor input.

## Graphic Language and Evidence Boundaries

The screenshot contrasts a burgundy full-bleed stage with pale stacked rectangular editor sheets. The source includes a video still and an assistant card; those assets and labels are not copied. Anonymous CSS sheets, a narrow timeline and a dotted technical label translate the silhouette. The canvas color is measured from the source screenshot, not asserted as a sampled DOM token.

## Adaptation to the NOVA Example

NOVA becomes a centered serif poster with a raised pale navigation plate and an ivory editor collage below. Metric numerals sit on the wine canvas; capabilities alternate pale editorial sheets and wine panels. The unchanged weekly chart is styled as a media timeline. Noto Serif SC is an explicit Chinese headline choice, while Noto Sans SC supports controls and body copy.

The observed display sample uses gamuthDisplay, "gamuthDisplay Fallback", Georgia, serif, 88px / normal, weight 400, tracking normal. Original proprietary font files are not redistributed. DM Serif Display is the explicit open-source display substitute; Inter fills the body role. Chinese uses Noto Serif SC for display and Noto Sans SC for body as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'DM Serif Display','Noto Serif SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

The delivered NOVA example adjusts selected text colors, control contrast, or mobile text width where necessary for legibility. These are explicitly authored accessibility/localization choices, not additional measured source tokens. The original observed palette remains documented above.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Editorial launches, cultural storytelling, film portfolios, and premium publishing campaigns. Avoid when: Compact technical dashboards need neutral sans-serif information density.

### Signature Atoms

- Wine canvas #390a1a, display ivory #fff8f4, pale navigation #fff7fa, action red #f73b3b.
- DM Serif Display with Noto Serif SC; adapted title 76px, weight 400, line-height 1.18, tracking -.035em.
- Inter body with Noto Sans SC; technical eyebrow monospace 15px, tracking .12em.
- Detached navigation inset 10px 20px with 12px corners and 102px height; hero copy max-width 980px.
- Overlapping pale editor sheets use 12px corners, fine #d8ccd0 outlines, and a 350px lower stage.
- Action corners 12px and hero min-height 56px; delivered primary labels use dark #290817 on red.

### Do

- Use DM Serif Display and Noto Serif SC for regular editorial headings, with Inter and Noto Sans SC for body copy.
- Center an ivory serif statement on the deep wine field beneath a detached pale navigation slab.
- Pair tiny technical monospace labels with large quiet serif type rather than using a uniformly sans-serif hierarchy.
- Build original overlapping pale editor sheets and narrow timeline rules below the copy.
- Use #290817 labels on #f73b3b primary controls to preserve the delivered contrast correction.
- Alternate pale editorial sheets and wine panels, then remove the lower collage on narrow screens.

### Don't

- Do not copy Descript logos, trademarks, video stills, product screenshots, illustrations, or marketing copy.
- Do not replace the wine-and-ivory palette with generic blue gradients or a monochrome tech console.
- Do not set every heading in heavy sans-serif or make technical labels dominate the poster.
- Do not restore pale primary labels on red after the delivered contrast correction.
- Do not turn the overlapping lower editor sheets into a small right-hand dashboard or fake editing input.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #390a1a;
  --ink: #fff8f4;
  --muted: #fff7fd;
  --accent: #f73b3b;
  --on-accent: #fff7fd;
  --surface: #fff7fa;
  --line: rgba(255,248,244,.18);
  --radius: 12px;
  --display: 'DM Serif Display','Noto Serif SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 400;
  --button-radius: 12px;
}
```

Example: [HTML](../examples/descript.html) and [preview](../examples/descript.png). [Style selection index](STYLE_INDEX.md).
