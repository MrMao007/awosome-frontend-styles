# Front — Observed Homepage Design Paradigm

Source: [Front](https://front.com/). Category: Work & Collaboration. Capture: 2026-10-10T14:04:31.413Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Plum-and-citron customer-work platform: a pale citron announcement band, white navigation on a deep plum hero, moderate-size centered pale-lilac heading, lavender supporting text and a vivid citron pill action. A wide purple-framed inbox preview sits beneath it. Lower source sections switch to navy on white. Avoid the unrelated generic blue support-dashboard look and do not turn the animation's faded preview into evidence for a missing interface state.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Hero plum | `rgb(48, 12, 65)` | Computed first large surfaces DIV background and pixel (10,400), #300c41. |
| Hero headline | `rgb(248, 241, 254)` | H1 computed text, #f8f1fe. |
| Hero support | `rgb(226, 220, 246)` | 20/28px paragraph computed color, #e2dcf6. |
| Main action citron | `rgb(222, 233, 72)` | Request demo computed fill, #dee948; 64px radius. |
| Announcement wash | `rgb(238, 252, 151)` | Computed visible band color and image pixel (100,10), #eefc97. |
| Lower navy headings | `rgb(13, 29, 57)` | Below-hero H2/H3 and primary-action text, #0d1d39. |
| Lower secondary text | `rgb(58, 60, 64)` | Measured computed color family, #3a3c40. |
| Purple presentation top | `rgb(138, 74, 203)` | Rendered screenshot sample (200,520), #8a4acb; a gradient sample, not an original declared token. |
| Purple presentation bottom | `rgb(92, 32, 119)` | Rendered screenshot sample (200,900), #5c2077; screenshot is an animation frame, not a claimed permanent UI surface. |
| Lilac support | `rgb(208, 198, 240)` | Measured computed color list, #d0c6f0; used as an adapted lower separator. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| All your teams. All your AI agents.  One place to run customer work, t | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 43px / 52px | 500 | -0.75px |
| Over 9,300 businesses trust Front for customer work that takes more th | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 25px / 30px | 500 | -0.25px |
| 591% | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 25px / 30px | 500 | -0.25px |
| 90% | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 25px / 30px | 500 | -0.25px |
| Customer work isn’t a single-player game. With Front, your teams and a | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 30px / 36px | 500 | -0.45px |
| No more dropped handoffs | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 20px / 28px | 500 | normal |
| Nobody answers half-informed | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 20px / 28px | 500 | normal |
| Score every team and agent. Even theirs. | "Suisse Intl", "Helvetica Neue LT Std", -apple-system, "system-ui", "Helvetica Neue", Helvetica, sans-serif | 20px / 28px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Centered Hierarchy

Front's measured hero H1 is Suisse Intl 43/52px, weight 500, -0.75px tracking, x=300, y=192, width=840 and height=104. Supporting text uses 20/28px in the same family, not a separate display serif. A 48px top announcement stripe precedes the white-on-plum navigation. NOVA uses an empty 18px citron edge instead of adding announcement copy, and a 47px Chinese title rather than an oversized 80px headline. Reserve a broad preview beneath the action group without hiding or overlapping the immutable marketing text.

## Components and Color Transitions

The source Request demo action is 141 by 48px, 12px 16px padded and 64px rounded, with measured citron fill and navy labels. Preserve the pill silhouette; style the existing secondary NOVA action as a lilac outline. Lower metrics and cards use white or light-lilac surfaces with navy headings, whereas the source hero remains solid plum. The unchanged chart uses plum fills and navy data labels rather than low-contrast citron text on white. Filters use dark plum active states for readable labels; these accessibility choices are explicit adaptations.

## Graphics and Responsive Adaptation

The screenshot shows a purple gradient presentation rectangle from roughly x=192 to x=1248, with a partially faded inbox view inset inside. Its opacity is a captured animation state, not evidence that source interface text was missing. Recreate only an original empty inbox geometry: a sidebar, a thin message list, a wider conversation area and neutral horizontal strokes, inside a purple frame sampled at two image points. Do not copy the order ID, support thread, customer names or logos. Mobile removes the decorative frame, retains both controls and stacks all unchanged content; source motion timing and breakpoints remain unknown.

## Adaptation to the NOVA Example

The Chinese NOVA body remains identical. Use plum hero, pale-lilac typography, citron pills and a purple framed empty inbox, then white/navy lower modules. The animated source preview is studied only for visible geometry and color, never for unobserved content. Lower filter, number and chart colors are localized for legibility, while all original interactions remain.

Both sampled headings and body declare Suisse Intl with Helvetica Neue LT Std and system sans-serif fallbacks; loaded source font evidence confirms Suisse Intl. DM Sans is an open substitute, not the measured original, and Noto Sans SC is an explicit Chinese localization choice. No proprietary binaries are redistributed. Weight 500 is kept rather than assuming heavy or rounded display type from the brand mark.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Service platforms, collaborative programs, distinctive professional product launches. Avoid when: Monochrome developer austerity or highly dense transactional layouts are needed.

### Signature Atoms

- Hero #300c41, headline #f8f1fe, support #e2dcf6, citron action #dee948 with #0d1d39 text
- DM Sans with Noto Sans SC throughout; adapted hero 47px, weight 500, line-height 1.3, tracking -.03em
- 18px #eefc97 announcement edge above white-on-plum navigation
- 64px-radius actions with 48px minimum height; lilac #d0c6f0 outline partner
- 1056px-wide original inbox frame, 16px corners, gradient #8a4acb to #5c2077
- Lower navy #0d1d39 headings and #3a3c40 copy on white or #f8f1fe modules with 16px corners

### Do

- Use DM Sans and Noto Sans SC for both display and body; keep display weight moderate.
- Center the pale-lilac hero text on solid plum and keep the headline scale restrained.
- Use citron pill actions with navy labels and a lilac-outline secondary action.
- Frame original inbox geometry in purple, then transition to white and lilac lower modules with navy headings.
- Use dark plum active filters and chart fills with dark numeric labels for contrast on light surfaces.

### Don't

- Do not copy Front logos, trademarks, support threads, customer names, screenshots, or marketing copy.
- Do not replace plum and citron with a generic blue support-dashboard palette.
- Do not inflate the moderate heading into an enormous heavy display.
- Do not use low-contrast citron text on white lower sections.
- Do not interpret a faded animation frame as missing source content or invent its animation timing.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #0d1d39;
  --muted: #3a3c40;
  --accent: #dee948;
  --on-accent: #0d1d39;
  --surface: #f8f1fe;
  --line: #d0c6f0;
  --radius: 16px;
  --button-radius: 64px;
  --weight: 500;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/front.html) and [preview](../examples/front.png). [Style selection index](STYLE_INDEX.md).
