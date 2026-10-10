# Mailchimp — Observed Homepage Design Paradigm

Source: [Mailchimp](https://mailchimp.com/). Category: Finance & Commerce. Capture: 2026-10-10T14:07:42.037Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

Warm editorial marketing with expressive serif headlines, nearly black brown text, sunny yellow pill controls and an approachable rounded recommendation surface. The initial source capture includes a large personalization dialog, which is documented rather than mistaken for the underlying hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(35, 30, 21)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(87, 87, 87)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(255, 224, 27)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(35, 30, 21)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(245, 245, 245)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(35, 30, 21)` | Exact computed color in mailchimp.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Email & SMS marketing minus the learning curve | "Means Web", Georgia, Times, "Times New Roman", serif | 64px / 76.8px | 400 | -1.2px |
| Recommended for your business | "Means Web", Georgia, Times, "Times New Roman", serif | 40px / 40px | 400 | -0.5px |
| Design with ease | "Graphik Web", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif | 23px / 30px | 400 | normal |
| Get more sales | "Graphik Web", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif | 23px / 30px | 400 | normal |
| Reach your audience on any device | "Graphik Web", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif | 23px / 30px | 400 | normal |
| Connect all your apps | "Graphik Web", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif | 23px / 30px | 400 | normal |
| Take an interactive product tour | "Means Web", Georgia, Times, "Times New Roman", serif | 40px / 40px | 400 | -0.5px |
| Businesses like yours are thriving with Mailchimp | "Means Web", Georgia, Times, "Times New Roman", serif | 40px / 40px | 400 | -0.5px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The underlying Means Web H1 is 64px/76.8px weight400 within a 960px box at x240/y179. The initial screenshot is obscured by a 1166 × 796 white dialog at x137/y102 with 16px corners. Its prominent serif heading and yellow underline are actual observed components; the supplemental capture dismisses this nonblocking choice to inspect the homepage. The final unobscured source screenshot establishes a centered dark photographic hero, a white first headline line and yellow italic second line, with one wide yellow action. The delivered NOVA hero follows that final centered dark composition; the circular panel is an abstract secondary reference to the earlier observed dialog.

## Measured navigation, type and controls

The captured H1 uses "Means Web", Georgia, Times, "Times New Roman", serif at 64px, weight 400, line-height 76.8px and tracking -1.2px. The sampled NAV is 1440 × 68 at x0/y71, with padding 12px 16px and gap normal. Control “Start Free Trial” measures 138 × 44, radius 26px, padding 12px 24px. Control “Start Free Trial” measures 343 × 48, radius 40px, padding 12px 24px. Control “See all demos” measures 145 × 32, radius 32px, padding 0px 40px 0px 0px. Control “Customize my experience” measures 193 × 32, radius 26px, padding 6px 16px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

Recommendation cards sampled below the hero are 632 × 476 with 24px radii. Actions use yellow rgb(255,224,27), dark brown outlines and approximately26px corners. NOVA maps recommendation behavior to its six existing feature cards and uses broad two-column editorial panels, without adding questionnaires or collecting industry data.

## Imagery, graphic language and observational boundaries

The source dialog contains a circular laptop crop; the adaptation uses a large circular CSS workbench diagram and serif-led sections. All original email/SMS marketing claims, trial/pricing labels, account links and sales measurements are excluded. The existing NOVA modal remains the only primary-action experience.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Georgia,'NOVA Local Serif SC','Songti SC',serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Creative services, audience-building tools, welcoming editorial product campaigns. Avoid when: Cold technical precision or dense dashboard navigation is essential.

### Signature Atoms

- White canvas rgb(255, 255, 255), brown-black rgb(35, 30, 21), yellow rgb(255, 224, 27)
- Centered dark hero 800px minimum height; regular serif headline 70px, line-height 1.2
- Headline underline 5px tall and 60% wide; supporting text white on brown-black
- Pill controls 26px radius, 1px dark outlines; recommendation panels 24px radius
- Two-column panels with 24px gaps; rgb(245, 245, 245) surfaces and occasional yellow fills

### Do

- Follow the final centered dark hero, balancing expressive serif copy with a yellow underline.
- Use system Georgia for display and Arial for body; keep Means Web only as a source reference.
- Use yellow filled pills with dark readable labels and simple dark outlines.
- Build broad paired recommendation panels with rounded corners and approachable spacing.
- Alternate light editorial surfaces with restrained dark and yellow section accents.

### Don't

- Do not copy Mailchimp logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not mistake the initial personalization dialog for the final homepage hero.
- Do not replace expressive serif headings with cold condensed technical typography.
- Do not add rainbow gradients, glossy glass cards, or pervasive heavy shadows.
- Do not add questionnaires, copied trial claims, or email-product screenshots to unrelated content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(35, 30, 21);
  --muted: rgb(87, 87, 87);
  --accent: rgb(255, 224, 27);
  --on-accent: rgb(35, 30, 21);
  --surface: rgb(245, 245, 245);
  --line: rgb(35, 30, 21);
  --radius: 24px;
  --display: Georgia,'NOVA Local Serif SC','Songti SC',serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 400;
  --button-radius: 26px;
}
```

Example: [HTML](../examples/mailchimp.html) and [preview](../examples/mailchimp.png). [Style selection index](STYLE_INDEX.md).
