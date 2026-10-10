# folk — Observed Homepage Design Paradigm

Source: [folk](https://www.folk.app/). Category: Work & Collaboration. Capture: 2026-10-10T14:03:51.489Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

Warm monochrome CRM editorialism: enormous centered black grotesque lettering, a small bracketed announcement, a hard-edged horizontal signup strip, and an almost full-width product board on a mottled gray field. Pastel color is confined to subtle status pills inside the interface. The screenshot shows a kanban board with a left navigation rail and an open right detail drawer, not a floating colorful bento hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| White canvas | `rgb(255, 255, 255)` | Computed white source surfaces and source image background. |
| Heading ink | `rgba(3, 2, 0, 0.89)` | 72px H1 and 64px H2 computed text color; preserve alpha rather than assert a solid original token. |
| Primary action | `rgb(33, 32, 28)` | Computed signup submit background, #21201c, 116 by 48px with 0px radius. |
| Gray product surround | `rgb(168, 168, 168)` | First large surfaces DIV; mottled screenshot varies spatially, so this is the computed base rather than a uniform pixel claim. |
| Card rule | `rgb(225, 225, 225)` | Actual 1px solid border on visible source deal cards, #e1e1e1. Interpretation / adaptation value; not independently established as an exact source token. |
| Secondary UI text | `rgb(98, 98, 98)` | Measured colors list, #626262. |
| Blue status wash | `rgba(88, 142, 181, 0.23)` | Observed pale-blue status background; pixel (600,760) composites to RGB(216,229,238). |
| Green status wash | `rgba(152, 181, 88, 0.23)` | Observed green status tint in computed colors. |
| Brown status wash | `rgba(181, 130, 88, 0.23)` | Observed muted brown status tint in computed colors. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| One platform for your entire sales motion | Uxumgrotesque, sans-serif | 72px / 72px | 500 | -1.8px |
| Everything your team needs to manage customer relationships, end-to-en | Uxumgrotesque, sans-serif | 64px / 64px | 500 | -1.472px |
| Find your next customer | Uxumgrotesque, sans-serif | 36px / 39.6px | 500 | -0.756px |
| Engage with your leads across channels | Uxumgrotesque, sans-serif | 36px / 39.6px | 500 | -0.756px |
| Know exactly where every relationship stands | Uxumgrotesque, sans-serif | 36px / 39.6px | 500 | -0.756px |
| Close deals with your team | Uxumgrotesque, sans-serif | 36px / 39.6px | 500 | -0.756px |
| The sales infrastructure your team (and its agents) need to grow | Uxumgrotesque, sans-serif | 64px / 64px | 500 | -1.472px |
| Create a shared memory of your organization | Uxumgrotesque, sans-serif | 36px / 39.6px | 500 | -0.756px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Editorial Hierarchy

The source H1 is Uxumgrotesque 72/72px at weight 500 and -1.8px tracking, spanning 1235px at x=102, y=253. A 20/24.5px Inter subtitle follows. The announcement is centered high above the title, and the product surround begins at y=560 with a wide board inset at x=24, y=632. For the fixed two-line Chinese NOVA H1 use 64px, slightly expanded line height and a broad centered column. Retain a deliberate gap below the actions before the board; localized title wrapping is not evidence of the source responsive layout.

## Components and Status System

The source signup control is a joined rectangular email/team-size/submit strip with hairline dark dividers; its dark submit has zero rounding. NOVA has no email field in its immutable body, so style the two existing action controls as a joined strip without inventing a form. Keep hard-edged white feature cards and use pale blue, green and brown category labels sparingly. The three metrics become flat ruled columns, and the original chart gets neutral tracks and dark fills. Do not repurpose decorative pills as real sales stages or invent source CRM functionality.

## Graphics and Responsive Adaptation

The preview is an original empty kanban abstraction with a narrow left rail, three columns of outlined cards and a right white detail drawer. A gray CSS surround references the visible textured product backdrop but does not claim to reproduce its noise texture exactly. No customer portraits, names, email addresses, deal values or interface text are copied. At 640px remove the purely decorative preview, unjoin the actions into usable full-width controls, stack cards and metrics, preserve filters and the original menu/dialog. These mobile decisions are adaptations to NOVA only.

## Adaptation to the NOVA Example

The preserved NOVA body is restyled as a monochrome relationship workspace: centered editorial hero, rectangular paired action strip, empty framed board, flat statistics and tiny tinted tags. The source email form is not implemented because body bytes must not change. Feature count, chart data and existing behavior are unchanged; all geometric illustrations are original CSS.

The source H1 uses Uxumgrotesque, while nav declares Foundersgrotesk and source subtitle/CRM text uses Inter. Loaded Inter does not prove the proprietary navigation face rendered. DM Sans is a disclosed approximation for Uxumgrotesque; Inter is used for utility text; Noto Sans SC supplies Chinese glyphs. No proprietary font assets are copied, and no claim is made that the substitute matches the exact glyph widths.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Professional platforms, relationship services, restrained product-led launch pages. Avoid when: Colorful bento storytelling or highly rounded playful interfaces are needed.

### Signature Atoms

- White #ffffff canvas, rgba(3, 2, 0, 0.89) heading ink, #21201c actions, #626262 utility text
- DM Sans with Noto Sans SC; adapted hero 64px, weight 500, line-height 1.2, tracking -.04em
- Bracketed underlined 12px announcement above a broad centered 1320px content column
- Joined 0px-radius action strip, 48px minimum height, and 1px #21201c divider
- Full-width #a8a8a8 board surround with original left rail, column cards, and right detail drawer
- Square white cards with 1px #e1e1e1 rules; sparse status washes use rgba(88,142,181,.23) and rgba(152,181,88,.23)

### Do

- Use DM Sans for medium-weight display and Inter for utility text, with Noto Sans SC fallback.
- Center a broad editorial headline beneath a small bracketed announcement.
- Join primary and secondary actions into a hard-edged strip with thin dividers on desktop.
- Build an original wide board abstraction on a gray surround with a left rail and right detail drawer.
- Keep feature cards square and metrics flat; confine muted pastel color to small status labels.
- Unjoin the action strip into usable controls on narrow screens and remove only decorative board geometry.

### Don't

- Do not copy folk logos, trademarks, customer records, product screenshots, or marketing copy.
- Do not replace the gray-backed board with floating colorful bento cards.
- Do not round main actions, feature cards, and charts into soft pills.
- Do not use status washes as primary CTA fills or broad page backgrounds.
- Do not invent a signup form or CRM behavior merely to reproduce the visual strip.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: rgba(3, 2, 0, 0.89);
  --muted: #626262;
  --accent: #21201c;
  --on-accent: #ffffff;
  --surface: #ffffff;
  --line: #e1e1e1;
  --radius: 0px;
  --button-radius: 0px;
  --weight: 500;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/folk.html) and [preview](../examples/folk.png). [Style selection index](STYLE_INDEX.md).
