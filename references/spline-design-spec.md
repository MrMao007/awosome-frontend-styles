# Spline — Observed Homepage Design Paradigm

Source: [Spline](https://spline.design/). Category: Design & Creation. Capture: 2026-10-10T14:02:34.974Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A centered interaction canvas surrounded by floating 3D solids, not a marketing dashboard. A black scene, low horizon grid and compact white text leave room for rendered magenta, yellow, green and blue objects. Those colors belong to the 3D artwork and are not promoted to unmeasured brand tokens.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Headline | `rgb(255, 255, 255)` | Computed H1 color. |
| Supporting copy | `rgba(255, 255, 255, 0.7)` | Frequent computed secondary text. |
| Prompt surface | `rgba(58, 58, 58, 0.72)` | Measured 592 × 100px prompt panel. |
| Login surface | `rgba(255, 255, 255, 0.05)` | Computed pill background. |
| Primary navigation action | `rgba(255, 255, 255, 0.2)` | Computed Get Started pill fill. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Make anything 3D | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 38.4px / 48px | 500 | normal |
| A complete platform for real-time interactive design | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 36px / 44px | 500 | normal |
| Interactive Websites | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |
| Product Design | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |
| Brand & Marketing | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |
| Gamified Experiences | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |
| 3D Mockups | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |
| 3D Logos | "Spline Sans", system-ui, -apple-system, "system-ui", "Helvetica Neue", Helvetica, Arial, sans-serif | 14px / 24px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source headline is centered at x=370, y=232 in a 700px-wide region. It uses 38.4px Spline Sans, weight 500, 48px line-height and normal tracking. The 592 × 100px prompt panel sits at x=424, y=352. Navigation is centered above the scene, with rounded login and start pills. The large surrounding scene is the main source of visual scale.

## Components and Controls

The prompt surface is rgba(58,58,58,.72) with 16px corners. Navigation actions use 50px pill corners, a 5%-white login background and a 20%-white primary fill. The prompt submit square is 6px-radius with an 8%-white background. The adaptation groups the unchanged NOVA actions into a rounded, recessed control region without adding a nonfunctional input.

## Visual Expression

The screenshot contains rounded extruded shapes floating around a central empty text zone, plus a perspective floor that fades toward the viewer. Instead of copying those proprietary scene assets, the NOVA study creates anonymous monochrome solids with inset illumination, rotation, elliptical edges and a perspective grid. Typography stays modest in size rather than becoming an oversized neon headline.

## Adaptation to the NOVA Example

The NOVA hero is centered and set in Spline Sans with a Chinese Noto Sans SC fallback. Its existing action row becomes a prompt-like tray. Decorative solids occupy the outer scene while a perspective grid sits below, so Chinese copy is never obscured. Capabilities become small soft-edged scene tiles and the chart uses narrow rounded bars. The source scene's color is intentionally reduced to the measured interface palette; this boundary is explicit rather than inventing sampled color values.

Spline Sans is available under the SIL Open Font License and is used for Latin text. Noto Sans SC, also SIL Open Font License, supplies readable Chinese. Original 3D assets are not redistributed.

## Example Font Configuration

The example uses display: 'Spline Sans','Noto Sans SC',sans-serif; body: 'Spline Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Interactive exhibits, experimental portfolios, games, and immersive concept pages. Avoid when: Dense tables or text-heavy editorial reading need a flat layout.

### Signature Atoms

- Canvas #000000, text #ffffff, supporting copy rgba(255,255,255,.7).
- Spline Sans with Noto Sans SC; adapted headline 42px, weight 500, line-height 1.28, tracking -.025em.
- Centered copy width 700px; action tray width 592px, padding 26px 24px, radius 16px.
- Tray fill rgba(58,58,58,.72); hero actions use 8px corners and rgba(255,255,255,.08) or .2 fills.
- Soft scene tiles have 26px corners; metric and chart surfaces use 28px corners and 5%-white fill.
- Floor grid uses 65px by 45px cells, perspective 390px, rotateX(63deg), and a fading mask.

### Do

- Use Spline Sans and Noto Sans SC at medium weight with a modest centered title.
- Reserve a clear central text zone and place anonymous rounded solids around its outer edges.
- Group real actions inside a recessed charcoal tray with subdued translucent control fills.
- Suggest depth with inset lighting, rotated solids, and a perspective grid that fades toward the foreground.
- Use soft-edged dark tiles and narrow rounded chart bars to continue the scene language.
- Remove outer solids and the perspective floor on small screens rather than obscuring content.

### Don't

- Do not copy Spline logos, trademarks, product screenshots, 3D scene assets, or marketing copy.
- Do not inflate the headline into a giant neon poster that competes with the scene.
- Do not promote unmeasured artwork colors into interface tokens.
- Do not substitute hard square enterprise cards or a bright white page for the dark scene.
- Do not add a fake prompt input or imply nonexistent interactive modeling behavior.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #000000;
  --ink: #ffffff;
  --muted: rgba(255,255,255,.7);
  --accent: #ffffff;
  --on-accent: #000000;
  --surface: rgba(58,58,58,.72);
  --line: rgba(255,255,255,.08);
  --radius: 16px;
  --display: 'Spline Sans','Noto Sans SC',sans-serif;
  --body: 'Spline Sans','Noto Sans SC',sans-serif;
  --weight: 500;
  --button-radius: 50px;
}
```

Example: [HTML](../examples/spline.html) and [preview](../examples/spline.png). [Style selection index](STYLE_INDEX.md).
