# Pitch — Observed Homepage Design Paradigm

Source: [Pitch](https://pitch.com/). Category: Design & Creation. Capture: 2026-10-10T14:27:13.661Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An oversized presentation poster with floating slide thumbnails and a luminous white creation tray. Purple is a measured stage family; a lime signup accent contrasts sharply with the cinematic backdrop. Presentation composition, rather than generic office UI, motivates its inclusion.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| Canvas | `rgb(40, 15, 98)` | Computed button text in source evidence; sampled element at x=402, y=693. |
| Ink | `rgb(255, 255, 255)` | Computed h1 text in source evidence; sampled element at x=190, y=210. |
| Primary action | `rgb(196, 238, 135)` | Computed a background in source evidence; sampled element at x=1336, y=62. |
| Surface | `rgb(255, 255, 255)` | Computed h1 text in source evidence; sampled element at x=190, y=210. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Create slides that win. | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 180px / 144px | 700 | -7.2px |
| From prompt to presentation, 4M+ teams create and deliver winning slid | "Eina 03 Regular", "Eina 03 Regular Placeholder", sans-serif | 18px / 28.8px | 400 | -0.36px |
| Pitch is your presentation workspace | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 48px / 57.6px | 700 | -1.92px |
| Make stunning slides | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 32px / 38.4px | 700 | -1.28px |
| Pitch like a pro | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 32px / 38.4px | 700 | -1.28px |
| Showcase your brand | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 32px / 38.4px | 700 | -1.28px |
| Stay in control | "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif | 32px / 38.4px | 700 | -1.28px |
| THE PAYOFF | "Space Mono", "Space Mono Placeholder", monospace | 18px / 28.8px | 400 | -0.36px |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Hierarchy

The source H1 spans x=190, y=210, 1060 × 288px with 180px/144px Mark Pro Bold, weight 700 and -7.2px tracking. An outer prompt shell is 702 × 190px at x=369, y=570, with 24px corners; the white inner surface is 678 × 166px, 16px-radius. The adaptation reduces type size for the fixed two-line Chinese statement without losing poster dominance.

## Components and Controls

The signup action is rgb(196,238,135) with 4px corners. Login is white and 30px-radius. The creation shell uses rgba(255,255,255,.16), white paper and a lavender glow; the Generate button uses rgb(83,24,235). Browser-native blue from link wrappers is not treated as source typography color.

## Graphic Language and Evidence Boundaries

The screenshot positions many blurred slide thumbnails behind the main statement. NOVA replaces source templates with anonymous rectangular paper miniatures at irregular positions, never reproducing template art or customer text. A measured dark-purple color is used as the stage base, while the radial glow is explicitly a visual interpretation.

## Adaptation to the NOVA Example

NOVA uses a huge centered Chinese statement on a purple stage, then a white framed tray holding its unchanged real actions. Background slide miniatures stay outside the copy zone. Metrics are a light confidence strip and capabilities use widescreen slide-card proportions. DM Sans substitutes Mark Pro; Noto Sans SC is selected for Chinese at weight 700.

The observed display sample uses "Mark Pro Bold", "Mark Pro Bold Placeholder", sans-serif, 180px / 144px, weight 700, tracking -7.2px. Original proprietary font files are not redistributed. DM Sans is the explicit open-source display substitute. Chinese uses Noto Sans SC as a deliberate localization choice, not a measured source face. Font metrics and line wrapping are an approximation. Browser-native link blue is not automatically adopted as a brand token.

## Example Font Configuration

The example uses display: 'DM Sans','Noto Sans SC',sans-serif; body: 'DM Sans','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Conference launches, bold campaigns, storytelling showcases, and presentation-led portfolios. Avoid when: Compact navigation or dense transactional content must lead the page.

### Signature Atoms

- Stage #280f62, hero text #ffffff, conversion lime #c4ee87, light-surface ink #0c021c.
- DM Sans with Noto Sans SC; adapted poster 95px, weight 700, line-height 1.1, tracking -.07em.
- Centered copy max-width 1160px; white action tray width 700px, min-height 185px, radius 24px.
- Tray has a 12px rgba(255,255,255,.16) frame and 70px lavender glow; action corners remain 4px.
- Floating slide planes measure 200px by 115px with 12px corners and subtle blur outside the text zone.
- Paper feature tiles use 16px corners, aspect-ratio 1.8, and paired columns; chart bars use #5318eb.

### Do

- Use bold DM Sans and Noto Sans SC for a tightly tracked, oversized centered poster lockup.
- Anchor the hero in dark purple and reserve lime for conversion controls and selected supporting panels.
- Place real actions inside a luminous framed white tray with dark labels on its light surfaces.
- Arrange original slide miniatures behind the text edges without competing with the main statement.
- Contrast the purple stage with a white metric strip and widescreen paper-like feature tiles.
- Reduce poster scale and remove floating slides on mobile while keeping the action tray usable.

### Don't

- Do not copy Pitch logos, trademarks, slide templates, product screenshots, or marketing copy.
- Do not flatten the purple theater into an ordinary white SaaS page.
- Do not use one radius for tray frames, paper tiles, and compact action buttons.
- Do not scatter thumbnail content over the headline or reduce the poster to a small utility greeting.
- Do not add a decorative prompt input that implies unsupported generation behavior.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #280f62;
  --ink: #ffffff;
  --muted: #ffffff;
  --accent: #c4ee87;
  --on-accent: #0c021c;
  --surface: #ffffff;
  --line: rgba(255,255,255,.16);
  --radius: 24px;
  --display: 'DM Sans','Noto Sans SC',sans-serif;
  --body: 'DM Sans','Noto Sans SC',sans-serif;
  --weight: 700;
  --button-radius: 4px;
}
```

Example: [HTML](../examples/pitch.html) and [preview](../examples/pitch.png). [Style selection index](STYLE_INDEX.md).
