# Framer — Observed Homepage Design Paradigm

Source: [Framer](https://www.framer.com/). Category: Design & Creation. Capture: 2026-10-10T13:53:07.124Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Black cinematic product theater: a left-aligned, medium-weight headline sits above a nearly full-width rounded media stage. The screenshot shows a luminous blue interface inside that stage, while the surrounding page UI is strictly white-on-black. The blue in the video is not asserted as a measured interface token.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(0, 0, 0)` | Computed background of the hero and full-page root. |
| Primary text / action | `rgb(255, 255, 255)` | Computed H1 text and primary action surface. |
| Secondary labels | `rgba(255, 255, 255, 0.6)` | Computed login and release-link labels. |
| Secondary action | `rgba(255, 255, 255, 0.1)` | Computed Download app background. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Framer is the design agent for every step from idea to launch | "GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif | 54px / 54px | 500 | -2.16px |
| Agents that work alongside you, not instead of you | "GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif | 44px / 48.4px | 500 | -1.76px |
| Design with an agent | "Inter Variable", "Inter Variable Placeholder", sans-serif | 18px / 24.3px | 400 | -0.2px |
| Run your CMS with an agent | "Inter Variable", "Inter Variable Placeholder", sans-serif | 18px / 24.3px | 400 | -0.2px |
| Code with an agent | "Inter Variable", "Inter Variable Placeholder", sans-serif | 18px / 24.3px | 400 | -0.2px |
| Connect to any AI | "Inter Variable", "Inter Variable Placeholder", sans-serif | 18px / 24.3px | 400 | -0.2px |
| Not just vibes, a full platform | "GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif | 44px / 48.4px | 500 | -1.76px |
| Performance | "Inter Variable", "Inter Variable Placeholder", sans-serif | 18px / 24.3px | 400 | -0.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The navigation is 64px high. The headline starts at x=120, y=164, spans 721px and uses 54px/54px type. The hero action row follows directly at y≈298. A 1200 × 673px media stage with 18px corners begins at x=120, y=372; the wide stage, not a floating right-hand dashboard, dominates the first viewport.

## Components and Controls

Small 14px Inter labels make the navigation and actions compact. The primary action is white with an 8px radius; its secondary companion uses a 10%-white fill. The source's black panels retain thin, low-contrast outlines. The cookie panel visible at lower left is deliberately omitted from the NOVA interpretation.

## Visual Expression

The observed GT Walsheim Medium headline uses weight 500 and -2.16px tracking. A large empty black margin separates the title from the media. The adaptation interprets the stage as a monochrome illuminated editor: nested rounded outlines, subdued radial light and a bottom strip. These CSS shapes are anonymous, static and decorative, not a copied interface or video.

## Adaptation to the NOVA Example

NOVA uses the source's x≈120 desktop margin, compact light buttons, dark theater and left-aligned headline. The original subtitle adds a necessary Chinese explanatory line, so the stage starts slightly lower than the source. Capabilities use alternating wide and narrow dark tiles, metrics remain a quiet horizontal strip, and the chart receives restrained luminous rules. The existing body, modal and research filter remain untouched; the visual stage is removed on small mobile viewports to preserve readable content.

GT Walsheim Medium is not redistributed. Manrope (SIL Open Font License) is the geometric display substitute; Inter (SIL Open Font License) follows the observed body role where available, with Noto Sans SC (SIL Open Font License) for readable Chinese.

## Example Font Configuration

The example uses display: 'Manrope','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Premium product launches, technical showcases, and media-led campaign pages. Avoid when: Long-form reading or dense administrative workflows dominate the page.

### Signature Atoms

- Canvas #000000, ink and action #ffffff; secondary copy rgba(255,255,255,.6).
- Manrope display 54px, weight 500, line-height 1.15, tracking -.045em; Inter body with Noto Sans SC.
- Desktop content width 1200px; compact header 64px; broad media stage begins beneath the title and actions.
- White primary and translucent secondary actions have 8px corners, 14px labels, and 38px hero min-height.
- Media and feature panels use 18px corners with 1px rgba(255,255,255,.1) outlines.
- Stage inset uses 26px corners and a 45px white glow; feature columns have 1.3fr and 1fr proportions.

### Do

- Use Manrope for medium-weight display text, Inter for body copy, and Noto Sans SC for Chinese.
- Keep the headline left-aligned above a nearly full-width stage rather than beside a floating dashboard.
- Restrict interface color to white and translucent white on black; let original media provide optional color.
- Create anonymous nested editor outlines and restrained radial illumination within the stage.
- Use compact light actions, quiet ruled metrics, and alternating wide and narrow feature tiles.
- Hide the decorative stage on small screens while retaining readable copy and working actions.

### Don't

- Do not copy Framer logos, trademarks, product screenshots, videos, or marketing copy.
- Do not treat blue inside the source video as a measured global interface accent.
- Do not replace the black theater with a light canvas or multicolored gradient page.
- Do not make buttons huge pills or use oversized heavy typography throughout.
- Do not turn the wide lower media stage into a small right-hand dashboard card.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #000000;
  --ink: #ffffff;
  --muted: rgba(255,255,255,.6);
  --accent: #ffffff;
  --on-accent: #000000;
  --surface: rgba(255,255,255,.1);
  --line: rgba(255,255,255,.1);
  --radius: 18px;
  --display: 'Manrope','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 500;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/framer.html) and [preview](../examples/framer.png). [Style selection index](STYLE_INDEX.md).
