# Attio — Observed Homepage Design Paradigm

Source: [Attio](https://attio.com/). Category: Work & Collaboration. Capture: 2026-10-10T14:04:15.961Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Precision revenue-workspace presentation: a black announcement stripe above a hairline white nav, a centered near-black Inter Display heading with a tiny outlined announcement capsule, compact black-and-white actions, then a pale periwinkle radiating and vertically ruled backdrop holding a rounded desktop app window. Blue is an interface accent, not the marketing CTA. The captured cookie card is incidental and is not reproduced in NOVA.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| White canvas | `lab(99.9987 0.0337958 0.000309944)` | Computed first hero SECTION background; retained as measured CSS Lab. |
| Primary heading | `lab(10.7201 -0.0959039 -1.54182)` | H1 computed color; do not infer an exact hex from the screenshot. |
| Black action | `lab(12.7212 0.103362 -2.22102)` | Start for free background; source action radius is 10px. |
| Action text | `lab(96.1596 -0.0828803 -1.13571)` | Start for free computed foreground. |
| Rules | `lab(86.0989 -0.77799 -4.0961)` | Computed inherited border color; source secondary action uses its own lab(83.208 -0.844151 -5.26234) 1px outline. |
| Secondary type | `lab(50.3787 -1.31875 -9.56043)` | Measured source gray-blue color in top viewport UI; localized support text uses this sampled family. |
| Backdrop gradient | `rgb(230, 236, 255) / rgb(188, 203, 255) / rgb(134, 160, 238)` | All three stops come directly from surfaces radial-gradient(90% 80% at 50% 100%, ...) evidence, not invented palette values. Interpretation / adaptation value; not independently established as an exact source token. |
| App control blue | `rgb(38, 109, 240)` | Measured source interface accent, #266df0; not used to replace dark marketing actions. |
| Window surface | `rgb(251, 251, 251)` | Measured light UI surface, #fbfbfb. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Welcome to agentic revenue. | interDisplay, "interDisplay Fallback" | 69.33px / 65.8635px | 600 | -1.653px |
| The intelligent system that never sleeps. Picks up leads at 2am. Catch | interDisplay, "interDisplay Fallback" | 40px / 44px | 500 | -0.4px |
| Your team, amplified. Agents prospect and reach out when buyers are lo | interDisplay, "interDisplay Fallback" | 24px / 27.6px | 500 | -0.24px |
| Speed to lead, every time. New leads get enriched, scored, and routed  | interDisplay, "interDisplay Fallback" | 24px / 27.6px | 500 | -0.24px |
| Run every motion, your way. Pipeline built for how you sell, while age | interDisplay, "interDisplay Fallback" | 24px / 27.6px | 500 | -0.24px |
| For the people who own the number. Ask any revenue question. From the  | interDisplay, "interDisplay Fallback" | 24px / 27.6px | 500 | -0.24px |
| Keep more. Grow more. Agents track the whole book, so you save what's  | interDisplay, "interDisplay Fallback" | 24px / 27.6px | 500 | -0.24px |
| Live from day one. Connect your inbox and calendar. Attio learns your  | interDisplay, "interDisplay Fallback" | 40px / 44px | 500 | -0.4px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Typographic Precision

The source H1 at x=288, y=282 is 864 by 66px, using interDisplay 69.33px, 65.8635px line height, weight 600 and -1.653px tracking. It is centered with generous whitespace above a compact 2-action group. NOVA keeps its two-line Chinese title at 62px with 1.25 line height rather than forcing source English line metrics. The upper stripe is adapted as an empty 16px black band because the fixed body has no announcement text. A small outlined existing eyebrow substitutes for the source promotional capsule without importing any claim.

## Components and Window Surfaces

Start for free is 110 by 36px with a 10px radius, 14/20px text, and a one-pixel slate rule; the partner action has a white surface and a cool outline. The screenshot app window is around 1080px wide with a rounded light-gray frame and thin inner rules. Adapt these traits as compact dark buttons, three lightly ruled metric columns, white rectangular utility cards inside a pale frame and tab-like filters. Keep blue reserved for chart bars and tiny decorative controls. Do not copy the source customer records, meeting transcript, cookie card or agent claims.

## Graphics and Responsive Adaptation

Evidence surfaces explicitly record a three-stop periwinkle radial gradient, 8px repeating vertical white lines and a white radial fade. Reuse that observed visual recipe in a low-opacity original backdrop behind an empty window abstraction. A rounded frame, narrow left sidebar, white command field and three small window-control dots are CSS geometry only, not functioning CRM controls. At narrow widths remove the decorative window and backdrop, stack real NOVA cards and chart content, and retain all body text and original menu/dialog behavior. Breakpoints and motion are not source measurements.

## Adaptation to the NOVA Example

Only the head styling changes. NOVA receives Attio's white-and-slate hierarchy, compact dark CTA, pale striped app backdrop and thin outlined utility panels. The source upper announcement and cookie interface are not copied; the existing Chinese body, data, filter behavior and modal script remain identical. Source Lab and gradient values are retained verbatim where available.

Computed display uses interDisplay with interDisplay Fallback, while body uses inter with inter Fallback. Google Fonts Inter is a disclosed replacement for these website distributions, with Noto Sans SC for Chinese. JetBrains Mono is observed in loaded fonts and used only for localized feature numbering; its presence is not treated as proof of the hero font. Tiempos Text is loaded but not assigned to sampled hero text, so it is not used as a display guess.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Delivery Accessibility Adjustments

Selected foreground colors were adjusted for readability in the generated Chinese example. These are implementation choices, not source palette measurements.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Technical business platforms, analytics launches, precision-oriented product explainers. Avoid when: Warm handcrafted storytelling or bright multicolor consumer playfulness leads.

### Signature Atoms

- Canvas lab(99.9987 0.0337958 0.000309944); ink lab(10.7201 -0.0959039 -1.54182)
- Dark action lab(12.7212 0.103362 -2.22102); action text lab(96.1596 -0.0828803 -1.13571)
- Inter with Noto Sans SC; hero 62px, weight 600, line-height 1.25, tracking -.045em
- 16px black top band; compact 10px-radius actions, 38px minimum height, 14px text
- Periwinkle radial stops rgb(230,236,255), rgb(188,203,255), rgb(134,160,238), with 8px vertical line repeat
- 1080px-wide app abstraction with 18px upper corners; #266df0 UI accent and delivered #606879 support text

### Do

- Use Inter and Noto Sans SC for display and body; reserve JetBrains Mono for small numbering.
- Center the heading, tiny outlined capsule, and compact dark-and-white action pair on a white canvas.
- Keep pale periwinkle radial light and repeating vertical rules behind an original app-window abstraction.
- Use thin cool outlines, tab-like filters, and restrained utility cards; reserve blue for interface accents.
- Retain #606879 for support paragraphs, metric labels, feature descriptions, and footer text; check selected-control contrast.

### Don't

- Do not copy Attio logos, trademarks, customer records, meeting transcripts, screenshots, or marketing copy.
- Do not replace dark marketing actions with bright blue buttons.
- Do not make the periwinkle backdrop saturated enough to overpower the white headline region.
- Do not use large pill CTAs, heavy card shadows, or oversized colorful bento tiles.
- Do not reproduce the incidental cookie card or infer unobserved behavior from the decorative app window.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: lab(99.9987 0.0337958 0.000309944);
  --ink: lab(10.7201 -0.0959039 -1.54182);
  --muted: lab(50.3787 -1.31875 -9.56043);
  --accent: lab(12.7212 0.103362 -2.22102);
  --on-accent: lab(96.1596 -0.0828803 -1.13571);
  --surface: #fbfbfb;
  --line: lab(86.0989 -0.77799 -4.0961);
  --radius: 18px;
  --button-radius: 10px;
  --weight: 600;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/attio.html) and [preview](../examples/attio.png). [Style selection index](STYLE_INDEX.md).
