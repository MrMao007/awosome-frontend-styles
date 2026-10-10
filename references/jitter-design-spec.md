# Jitter — Observed Homepage Design Paradigm

Source: [Jitter](https://jitter.video/). Category: Design & Creation. Capture: 2026-10-10T14:06:07.339Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A punchy kinetic-type identity without a busy product mockup: compressed heavy type, centered conversion, generous white space, a purple capsule and huge soft gray media tiles. Motion is suggested by graphic offsets, not imposed on the adapted page.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed h3 text in source evidence; sampled element at x=305, y=251. |
| Ink | `rgb(25, 23, 28)` | Computed h2 text in source evidence; sampled element at x=395, y=38. |
| Primary action | `rgb(181, 147, 255)` | Computed span background in source evidence; sampled element at x=597, y=436. |
| Surface | `rgb(242, 241, 243)` | Computed div background in source evidence; sampled element at x=9, y=897. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Main navigation | Inter, sans-serif | 18px / 27px | 400 | -0.396px |
| Import from Figma | "TWK Lausanne", sans-serif | 21px / 19.95px | 800 | -0.42px |
| A brand-new way to design and animate | "TWK Lausanne", sans-serif | 21px / 19.95px | 800 | -0.42px |
| Unlock collaboration | "TWK Lausanne", sans-serif | 21px / 19.95px | 800 | -0.42px |
| Export to 4K, GIF, Lottie | "TWK Lausanne", sans-serif | 21px / 19.95px | 800 | -0.42px |
| How Perplexity brings their brand to life with Jitter | "TWK Lausanne", sans-serif | 21px / 19.95px | 800 | -0.42px |
| Superagents: AI agents, built right into Jitter Learn more | Inter, sans-serif | 15px / 18px | 400 | -0.32px |
| Design in motion.Now with AI. | "TWK Lausanne", sans-serif | 80px / 72px | 800 | -2.4px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The main headline is x=290, y=262, 860 × 144px, set at 80px/72px with weight 800 and -2.4px tracking. The navigation is a narrow centered strip. Three 460px-wide, 40px-radius media tiles begin at y=897, after the conversion and trust strip.

## Components and Controls

The purple call to action and black sign-up capsule contrast with the white page. A small gray announcement pill precedes the headline. Rounded cards use rgb(242,241,243), while their inner geometric planes use rgb(229,228,231). The adaptation keeps real filters as capsule controls.

## Graphic Language and Evidence Boundaries

The screenshot shows one small character inside a headline and an otherwise very restrained first viewport. NOVA replaces that copyrighted character with an abstract offset circle and arc behind the text edges. Oversized gray media surfaces and staggered geometric cutouts carry the motion-design character without animated effects.

## Adaptation to the NOVA Example

The NOVA headline adopts a bold centered lockup; a purple pill anchors the action row. Metrics become a thin trust-like ribbon. Capabilities become large round-corner tiles with static cropped circles and offset planes. Chinese uses Noto Sans SC 800 rather than pretending Lausanne includes the required glyphs.

The observed display sample uses "TWK Lausanne", sans-serif, 80px / 72px, weight 800, tracking -2.4px. Original proprietary font files are not redistributed. Inter is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Youthful launches, creative portfolios, event campaigns, and expressive service pages. Avoid when: Formal enterprise workflows require restrained typography and compact layouts.

### Signature Atoms

- Canvas #ffffff, ink #19171c, action purple #b593ff, tile #f2f1f3, geometric planes #e5e4e7.
- Inter with Noto Sans SC; adapted headline 76px, weight 800, line-height 1.08, tracking -.065em.
- Centered hero copy max-width 930px; narrow navigation strip max-width 860px; hero min-height 820px.
- Primary capsule uses 999px corners, 60px min-height, 19px label, and dark #17082c text on purple.
- Feature tiles use 40px corners, 370px min-height, 35px padding, and no borders.
- Tile graphics combine a 75px circle with a 17px purple ring and rotated square planes with offset shadows.

### Do

- Use Inter and Noto Sans SC at heavy display weight with tight tracking and a compact centered lockup.
- Keep the white first viewport spacious and anchor it with one purple capsule and a black secondary action.
- Use a small gray announcement pill and a thin ruled metric ribbon before the large media tiles.
- Suggest motion with original cropped circles, arcs, and offset planes rather than compulsory animation.
- Give gray feature tiles generous corners and use dark text throughout light content surfaces.
- Scale the lockup down on mobile without sacrificing its bold weight or readable action labels.

### Don't

- Do not copy Jitter logos, trademarks, characters, product screenshots, animations, or marketing copy.
- Do not replace heavy compressed display text with airy regular serif typography.
- Do not fill the opening viewport with a busy product dashboard or rainbow gradient mesh.
- Do not make the oversized gray tiles sharp, tightly packed, and heavily outlined.
- Do not force motion effects when static geometric offsets already express the style.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #19171c;
  --muted: #19171c;
  --accent: #b593ff;
  --on-accent: #17082c;
  --surface: #f2f1f3;
  --line: #e5e4e7;
  --radius: 40px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 800;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/jitter.html) and [preview](../examples/jitter.png). [Style selection index](STYLE_INDEX.md).
