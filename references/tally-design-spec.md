# Tally — Observed Homepage Design Paradigm

Source: [Tally](https://tally.so/). Category: Design & Creation. Capture: 2026-10-10T14:07:36.304Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

A friendly document builder with a quiet black headline, small blue action and hand-drawn marginalia. The central form-paper frame matters more than gradients or glossy cards. The study is included explicitly as a creative form-authoring reference, not taken from another group’s office reserve.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(255, 255, 255)` | Computed span text in source evidence; sampled element at x=643, y=414. |
| Ink | `rgb(0, 0, 0)` | Computed h1 text in source evidence; sampled element at x=233, y=188. |
| Primary action | `rgb(0, 112, 215)` | Computed a background in source evidence; sampled element at x=1320, y=16. |
| Surface | `rgb(255, 255, 255)` | Computed span text in source evidence; sampled element at x=643, y=414. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| The simplest way to create forms | Inter, "Inter Fallback", sans-serif | 64px / 64px | 700 | -2px |
| A form builder like no other | Inter, "Inter Fallback", sans-serif | 36px / 41.4px | 700 | normal |
| Unlimited forms and submissions for free | Inter, "Inter Fallback", sans-serif | 26px / 29.9px | 800 | normal |
| Just start typing | Inter, "Inter Fallback", sans-serif | 18px / 20.7px | 800 | normal |
| Privacy-friendly form builder | Inter, "Inter Fallback", sans-serif | 18px / 20.7px | 800 | normal |
| Simple but  powerful | Inter, "Inter Fallback", sans-serif | 36px / 41.4px | 700 | normal |
| Build any form in seconds | Inter, "Inter Fallback", sans-serif | 18px / 20.7px | 800 | normal |
| Craft intelligent  forms | Inter, "Inter Fallback", sans-serif | 36px / 41.4px | 700 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The centered source H1 is x=233, y=188, 973 × 64px at 64px/64px Inter weight 700 and -2px tracking. The demo paper starts at x=232, y=528, measures 976 × 704px and has 10px corners. The navigation is extremely light and spreads to the page edges.

## Components and Controls

Computed action fill is rgb(0,112,215), with 7px navigation and 8px hero corners. Most text is rgb(55,53,47), secondary labels rgb(119,118,114), and borders rgb(223,223,222). A visible magenta underline belongs to hand-drawn decoration, not a measured global action token.

## Graphic Language and Evidence Boundaries

Simple gray speech-bubble sketches and short marginal strokes surround the form. NOVA translates these into anonymous CSS scribble outlines and angled rules, keeping the center clear. The form mockup becomes a decorative paper plane; no fake input or registration field is added.

## Adaptation to the NOVA Example

NOVA adopts a document-first white stage with a large centered black statement, blue compact actions, an understated paper preview and outline doodles at the margins. Capabilities become stacked document rows with numbered blocks, avoiding a generic card gallery. Inter is retained for Latin and Noto Sans SC localizes Chinese.

The observed display sample uses Inter, "Inter Fallback", sans-serif, 64px / 64px, weight 700, tracking -2px. Original proprietary font files are not redistributed. Inter is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Simple onboarding, community resources, surveys, guides, and approachable service pages. Avoid when: Luxury theater or dense interactive dashboards must define the page.

### Signature Atoms

- Canvas #ffffff, headline #000000, body #37352f, action #0070d7, paper rules #dfdfde.
- Inter with Noto Sans SC; adapted headline 58px, weight 700, line-height 1.18, tracking -.05em.
- Centered content width 976px; decorative paper has 10px top corners and a fine #dfdfde outline.
- Compact blue hero actions use 8px corners, 42px min-height, 14px labels, and white text.
- Gray outline doodles use 3px #777672 strokes at the margins; the central paper remains clear.
- Document rows use 32px 38px 32px 95px padding, 1px dividers, and 24px outlined numbered blocks.

### Do

- Use Inter and Noto Sans SC for a bold centered headline and straightforward readable document text.
- Keep the canvas white and navigation light; reserve blue for compact primary actions and selected controls.
- Frame an original understated paper preview beneath the hero rather than a glossy floating dashboard.
- Add sparse gray outline doodles at the margins without interfering with the central copy.
- Organize capabilities as numbered document rows with thin separators and generous reading width.
- Stack content on small screens and remove decorative marginalia while preserving the document hierarchy.

### Don't

- Do not copy Tally logos, trademarks, form screenshots, illustrations, or marketing copy.
- Do not introduce a magenta interface accent merely because a source decoration uses an underline.
- Do not replace the document-first layout with a colorful card gallery or gradient-heavy landing page.
- Do not make blue actions oversized capsules or use heavy shadows on every paper surface.
- Do not add fake form inputs or registration behavior to the decorative paper preview.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #000000;
  --muted: #37352f;
  --accent: #0070d7;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --line: #dfdfde;
  --radius: 10px;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
  --weight: 700;
  --button-radius: 8px;
}
```

Example: [HTML](../examples/tally.html) and [preview](../examples/tally.png). [Style selection index](STYLE_INDEX.md).
