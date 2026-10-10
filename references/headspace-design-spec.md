# Headspace — Observed Homepage Design Paradigm

Source: [Headspace](https://www.headspace.com/). Category: Consumer Products. Capture: 2026-10-10T14:07:04.114Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. The published English examples preserve the common NOVA brand, copy, numbers, filters, and modal behavior.

## Published English Example

The public HTML example and its preview now use English NOVA copy, page metadata, navigation, chart labels, dialog text and accessibility labels. The six feature items, metrics, chart values and interactions are unchanged. Palette, component geometry, font roles and decorative treatments remain the same preset. References to Chinese typography or localization below document the original research adaptation, not the language of the current public example. Noto Sans SC remains a fallback; English glyphs use the leading Latin or system family in the configured stack.

## Visual Direction

A warm mental-wellness product shelf with a centered compact heavy headline, horizontal reassurance row and two unequal blush-toned product stages. The photo/illustration collage sits inside surfaces rather than floating on a blank generic SaaS hero.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| bg | `rgb(255, 255, 255)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| ink | `rgb(45, 44, 43)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| muted | `rgb(99, 96, 93)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| accent | `rgb(0, 97, 239)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| on-accent | `rgb(255, 255, 255)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| surface | `rgb(249, 244, 242)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |
| line | `rgb(75, 76, 77)` | Exact computed color in headspace.json; role assignment is a NOVA adaptation, not an official token. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| all with Headspace | "Headspace Apercu", sans-serif | 52px / 57.2px | 700 | -1.56px |
| What kind of headspace are you looking for? | "Headspace Apercu", sans-serif | 32px / 38.4px | 700 | -0.96px |
| The mental health app for every moment | "Headspace Apercu", sans-serif | 48px / 48px | 700 | -1.44px |
| Always-there support | "Headspace Apercu", sans-serif | 40px / 46px | 700 | -1.2px |
| Feel-good  library | "Headspace Apercu", sans-serif | 40px / 46px | 700 | -1.2px |
| Bedtime essentials | "Headspace Apercu", sans-serif | 40px / 46px | 700 | -1.2px |
| Do-anywhere exercises | "Headspace Apercu", sans-serif | 40px / 46px | 700 | -1.2px |
| Convenient online therapy | "Headspace Apercu", sans-serif | 40px / 46px | 700 | -1.2px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Hero composition and spatial hierarchy

The screenshot has a pink58px announcement strip, white80px navigation and a52px/57.2px centered Apercu heading. Below y329 are a914 ×497 left surface and398 ×497 right surface with24px corners. NOVA maps this unequal two-stage composition into its hero copy on a broad blush panel plus a smaller abstract workbench panel.

## Measured navigation, type and controls

The captured H2 uses "Headspace Apercu", sans-serif at 52px, weight 700, line-height 57.2px and tracking -1.56px. The sampled NAV is 519 × 80 at x280/y58, with padding 0px and gap normal. Control “Learn more” measures 69 × 17, radius 0px, padding 0px. Control “Your privacy settings” measures 125 × 40, radius 2px, padding 12px 0px. Control “Reject All” measures 125 × 42, radius 2px, padding 12px 10px. Control “Accept All Cookies” measures 135 × 42, radius 2px, padding 12px 10px. The source labels are cited for measurement only; all interactive labels in the generated page remain Chinese NOVA labels.

## Surface system and modular continuation

The observed surface is rgb(249,244,242), with dark gray primary text and blue navigation action. Orange and yellow appear in illustration but are not claimed measured UI colors. NOVA uses muted rounded cards, two-column feature grouping and a softly enclosed performance chart. Source reassurance claims are not imported as NOVA data.

## Imagery, graphic language and observational boundaries

Source collage combines meditations, a phone, a smiling shape and a therapist call image. NOVA replaces it with abstract circles, bars and a project board; no therapy, insurance, mental-health guarantees, trial prices or medical functionality are introduced. The bottom cookie panel is documented, not recreated.

## Adaptation to the NOVA Example

Only CSS and the head font link are changed through build.cjs. The full body, including Chinese NOVA brand/copy, 2026, 87%, 4.2×, 12h, all six feature descriptions and numbers, weekday chart values 42/68/84/96, filters, menu, focus management and modal script is byte-identical to nova-base.html. The measured desktop source informs the visual composition; responsive rules at 640px are authored NOVA adaptations, not inferred original breakpoints. CSS graphics are abstract workbench diagrams without text. No financial/account/purchase/payment functionality, source branding, product prices or commercial claims are introduced.



## Example Font Configuration

The example uses display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif; body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif. The example uses local/system font aliases; no font download is required. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Supportive consumer services, welcoming communities, calm productivity product introductions. Avoid when: Aggressive technical density or hard-edged high-contrast campaigns are needed.

### Signature Atoms

- White canvas rgb(255, 255, 255), warm ink rgb(45, 44, 43), blush rgb(249, 244, 242)
- Blue action rgb(0, 97, 239), muted text rgb(99, 96, 93); pill controls 999px radius
- Broad copy stage 69% wide and smaller graphic stage 28% wide, both 565px tall with 24px corners
- Centered desktop headline 49px, weight 800, line-height 1.25, tracking -.04em
- Borderless two-column feature panels with 24px gaps and 24px corners; chart bars 24px tall

### Do

- Place compact heavy centered copy inside a broad blush stage beside a smaller graphic stage.
- Use rounded original circles, bars, and boards inside surfaces rather than a floating mascot.
- Keep blue pills distinct against warm neutrals and supporting copy in readable warm gray.
- Continue with borderless paired panels and a softly enclosed chart module.
- Use the delivered system Arial stack; treat Headspace Apercu only as a source reference.

### Don't

- Do not copy Headspace logos, trademarks, product screenshots, illustrations, or marketing copy.
- Do not invent orange or yellow UI accents from colors visible only in illustrations.
- Do not replace the unequal product shelves with a generic floating-dashboard hero.
- Do not add sharp black rules, neon glows, or dense technical labels.
- Do not borrow therapeutic guarantees, medical claims, cookie panels, or recognizable smiling characters.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: rgb(255, 255, 255);
  --ink: rgb(45, 44, 43);
  --muted: rgb(99, 96, 93);
  --accent: rgb(0, 97, 239);
  --on-accent: rgb(255, 255, 255);
  --surface: rgb(249, 244, 242);
  --line: rgb(75, 76, 77);
  --radius: 24px;
  --display: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --body: Arial,'NOVA Local Sans SC','PingFang SC',sans-serif;
  --weight: 700;
  --button-radius: 999px;
}
```

Example: [HTML](../examples/headspace.html) and [preview](../examples/headspace.png). [Style selection index](STYLE_INDEX.md).
