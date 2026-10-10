# Amie — Observed Homepage Design Paradigm

Source: [Amie](https://amie.so/). Category: Work & Collaboration. Capture: 2026-10-10T14:03:23.854Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Quiet left-aligned desktop utility: a narrow 976px content column on a nearly white gray canvas, strong black Inter headline, gray supporting copy, cyan-blue rectangular actions, a tiny coral announcement and a large notes-app window directly underneath. The source does not have a centered gradient hero or calendar confetti. Preserve its comfortable app-like spacing and understated borders, while representing the document UI with empty CSS geometry only.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(250, 250, 250)` | Actual source pixels (10,400), (700,70), (400,570) are #fafafa. Evidence also records a rgba(250,250,250,0.8) surface color; the pixel value is the rendered canvas, not an inferred token. Interpretation / adaptation value; not independently established as an exact source token. |
| Title | `rgb(0, 0, 0)` | Hero DIV text sample at 56/64px, weight 700. |
| Supporting paragraph | `rgb(92, 92, 92)` | Computed source P color, #5c5c5c. |
| Primary action | `rgb(17, 168, 255)` | Get started background, #11a8ff. NOVA deliberately uses dark text rather than the source white to improve contrast. |
| Announcement | `rgb(255, 97, 84)` | Computed coral text, #ff6154, with rgba(255,97,84,0.1) pale badge fill. |
| White secondary action | `rgb(255, 255, 255)` | Visible secondary action fill and source action text color. |
| Default border color | `rgb(205, 205, 205)` | Computed default border color in text samples; adapted as a fine component rule, not asserted as a measured border width. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Start recording | Inter, "Inter Fallback" | 20px / 28px | 600 | -0.003px |
| Get organized | Inter, "Inter Fallback" | 20px / 28px | 600 | -0.003px |
| Automate your workflows | Inter, "Inter Fallback" | 20px / 28px | 600 | -0.003px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Document-First Hierarchy

The source hero text is a DIV, not an H1: x=232, y=164, 976 by 128px, Inter 56/64px at weight 700 with -0.7px tracking. The paragraph is 672px wide at x=232, y=312, using 20/28px and weight 500. NOVA stays aligned to the same 976px desktop column but retains its semantic H1. The localized two-line title uses 58px with a taller Chinese line-height. The document preview begins around y=512 in the screenshot; reserve real vertical space below the CTA rather than covering readable copy.

## Components and Utility Surfaces

The hero Get started action is 140 by 50px with 12px radius and 12px 28px padding; the header version is only 8px rounded. Its cyan is measured, not a recollection of an older Amie website. Use 12px-radius buttons, understated white secondary actions and soft gray rules. The source white-on-cyan action has limited contrast; dark NOVA button labels are a disclosed accessibility adaptation. Existing metrics become compact data tiles, feature filters become segmented utility controls, and the chart uses cyan bars with dark numeric labels.

## Graphics and Responsive Adaptation

The screenshot visibly shows a wide notes window with a narrow icon rail, a larger list sidebar and a spacious document area with a timeline. Build a noninteractive original empty panel using layered background rules, a white frame and soft shadow; do not copy the meeting title, attendees, text, customer metrics or portraits. A coral localized eyebrow echoes the source badge without reproducing third-party awards. At small widths hide only the decorative panel, stack utility cards, retain the original menu, filters and dialog. Source mobile behavior was not measured.

## Adaptation to the NOVA Example

NOVA is localized as a calm notes workspace, with a left-aligned 976px hero, cyan actions and an empty three-part document abstraction. The fixed Chinese copy, six features, metric values, four chart rows and all existing interactions remain byte-identical. Display sizing, dark primary labels and mobile stacking are explicitly adapted rather than attributed to Amie.

Computed hero and body use Inter with Inter Fallback, and loaded font evidence confirms Inter. The Google Fonts Inter package is a replacement distribution, not a copied website font binary; Noto Sans SC provides Chinese glyphs absent from the source Latin sample. No proprietary fonts are redistributed. Source hero DIV measurements are documented manually because the shared spec builder lists H3 headings first.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Personal utilities, lightweight software launches, focused onboarding and notes tools. Avoid when: Centered spectacle, heavy decoration, or dark enterprise framing dominates.

### Signature Atoms

- #fafafa canvas, #000000 ink, #5c5c5c support copy, #11a8ff actions with #071a26 labels
- Inter with Noto Sans SC; hero 58px, weight 700, line-height 1.24, tracking -.035em
- 976px left-aligned content rail; support text 20px, weight 500, maximum width 672px
- 12px-radius actions with 50px minimum height and 12px 28px padding
- Small #a93027 announcement badge on rgba(255,97,84,.1), separate from primary cyan
- 435px-tall three-part notes abstraction with 8px corners, #dedede border, and shadow 0 14px 30px #0000000d

### Do

- Use Inter and Noto Sans SC throughout, with bold headings and comfortable utility spacing.
- Align hero text, actions, and the original notes-window abstraction to a narrow shared rail.
- Use dark #071a26 labels on cyan #11a8ff actions instead of low-contrast white text.
- Keep the coral announcement small and muted; use fine gray borders and understated white secondary actions.
- Reserve real space below the actions for the document panel; stack utility cards on narrow screens.

### Don't

- Do not copy Amie logos, trademarks, meeting text, product screenshots, portraits, or marketing copy.
- Do not introduce a centered gradient hero, calendar confetti, or broad neon glows.
- Do not put white text on the bright cyan primary action.
- Do not let the notes abstraction cover readable copy or imply working document controls.
- Do not make the coral badge as prominent as the cyan action or add heavy shadows to utility cards.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #fafafa;
  --ink: #000000;
  --muted: #5c5c5c;
  --accent: #11a8ff;
  --on-accent: #071a26;
  --surface: #ffffff;
  --line: #cdcdcd;
  --radius: 12px;
  --button-radius: 12px;
  --weight: 700;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/amie.html) and [preview](../examples/amie.png). [Style selection index](STYLE_INDEX.md).
