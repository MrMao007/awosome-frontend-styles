# Graphite — Observed Homepage Design Paradigm

Source: [Graphite](https://graphite.art/). Category: Design & Creation. Capture: 2026-10-10T14:33:31.093Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A warm, handcrafted procedural-art workshop: heavyweight serif navigation, a massive editorial wordmark zone, dark blue-green headline, burgundy outline controls and an irregular drawn divider. White paper and generous vertical intervals replace fashionable gradients.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed h1 text in source evidence; sampled element at x=120, y=4948. |
| Ink | `rgb(22, 50, 63)` | Computed h1 text in source evidence; sampled element at x=120, y=518. |
| Primary action | `rgb(128, 56, 71)` | Computed a text in source evidence; sampled element at x=1148, y=30. |
| Surface | `rgb(238, 238, 238)` | Computed h1 text in source evidence; sampled element at x=660, y=5299. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Your procedural toolbox for 2D content creation | "Bona Nova", Palatino, serif | 48.0001px / 60.0001px | 700 | normal |
| What's new? | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |
| SOFTWARE OVERVIEW | "Inter Variable", sans-serif | 28.0001px / 42.0001px | 800 | normal |
| One app to rule them all | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |
| Current features | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |
| Upcoming features | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |
| Desktop-first and web-ready | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |
| Support the mission | "Inter Variable", sans-serif | 31.5px / 47.25px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source navigation sits in a 1200px centered region at x=120. It uses 28px/35px Bona Nova weight 700. The content headline is x=120, y=518, 1077 × 60px at 48px/60px, weight 700, followed by a dense explanatory paragraph and a horizontal community/action strip. A broad editor preview enters at y≈831.

## Components and Controls

Dark body and display text is rgb(22,50,63); navigation is warmer rgb(71,58,58); outline launch and community controls are rgb(128,56,71). Buttons are square, light paper or transparent, with visible burgundy outlines. The donation accent rgb(204,48,79) is not substituted for the launch role.

## Graphic Language and Evidence Boundaries

The source has a pencil logo, irregular fine horizontal divider and hand-drawn underline below one headline word. NOVA does not copy the pencil or wordmark. The study uses a handmade angular paper mark, a gently skewed rule and anonymous node-path guides around the decorative preview. Its craftsmanship is expressed through linework and typography, not copied illustrations.

## Adaptation to the NOVA Example

NOVA is set as an editorial workshop introduction with large warm serif title, blue-green body and square burgundy controls. Metrics become an open ruled strip; capabilities use ruled catalog panels and quiet numbered labels. The original chart keeps its exact data but takes a hand-ruled rectangular frame. Bona Nova matches the open-source source face, Noto Serif SC explicitly handles Chinese display, and Noto Sans SC supplies Chinese body copy.

The observed display sample uses "Bona Nova", Palatino, serif, 48.0001px / 60.0001px, weight 700, tracking normal. Original proprietary font files are not redistributed. Bona Nova is the explicit open-source display substitute; Inter fills the body role. Chinese uses Noto Serif SC for display and Noto Sans SC for body as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Bona Nova','Noto Serif SC',serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Independent workshops, open communities, educational projects, and craft-oriented technical pages. Avoid when: Glossy campaign consoles or compact corporate dashboards are the goal.

### Signature Atoms

- Canvas #ffffff, body ink #16323f, warm navigation #473a3a, burgundy action #803847, paper surface #eeeeee.
- Bona Nova with Noto Serif SC; adapted title 62px, weight 700, line-height 1.2, tracking -.025em.
- Inter body with Noto Sans SC; editorial content width 1200px; serif navigation 23px at weight 700.
- Controls use 0px corners and 2px burgundy outlines; hero labels are 18px bold with 48px min-height.
- Handmade divider uses a 125px by 2px warm rule rotated -2deg; lower panels have square ruled edges.
- Chart frame has 0px corners, a 4px 5px #eeeeee offset shadow, and a -.6deg tilt; bars are 12px tall.

### Do

- Use Bona Nova and Noto Serif SC for heavyweight editorial headings and navigation, with Inter and Noto Sans SC body text.
- Keep white paper, blue-green body ink, warmer navigation text, and square burgundy controls distinct.
- Use generous editorial intervals, explanatory paragraphs, and open ruled strips instead of a dense card wall.
- Express craft through original irregular dividers, handmade angular marks, and anonymous node-path guides.
- Carry visible warm rules through catalog panels and a lightly skewed hand-ruled chart frame.
- Flatten tilted frames and retain readable serif hierarchy when the layout collapses on mobile.

### Don't

- Do not copy Graphite logos, trademarks, pencil marks, editor screenshots, illustrations, or marketing copy.
- Do not replace the warm paper workshop with gradients, neon glow, or glossy rounded dashboard tiles.
- Do not round the square controls into pills or remove the visible burgundy outline language.
- Do not substitute the source donation accent for the burgundy launch-action role.
- Do not use tiny sans-serif navigation everywhere or make irregular rules so loud that they obscure content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #16323f;
  --muted: #16323f;
  --accent: #803847;
  --on-accent: #ffffff;
  --surface: #eeeeee;
  --line: #473a3a;
  --radius: 0px;
  --display: 'Bona Nova','Noto Serif SC',serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 700;
  --button-radius: 0px;
}
```

Example: [HTML](../examples/graphite.html) and [preview](../examples/graphite.png). [Style selection index](STYLE_INDEX.md).
