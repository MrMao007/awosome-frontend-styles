# Creative Mode — Design Specification

Source: [HyperFrames Creative Mode](https://www.hyperframes.dev/design/creative-mode)

## Visual Direction

Creative Mode is a neo-brutalist frame system combining editorial, punk-zine, and Swiss-grid influences. It uses a warm cream canvas, saturated candy accents, heavy black typography, rigid borders, and flat offset shadows.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Cream | `#EFE9D9` | Universal warm canvas; never use pure white. |
| Ink | `#0F0F0F` | Typography, borders, rules, and interface chrome. |
| Green | `#1F8A4C` | Dominant accent and closing-frame background. |
| Pink | `#F06CA8` | High-energy fills, markers, and stamps. |
| Orange | `#E85A1F` | Hard-shadow color and statistic fills. |
| Yellow | `#F5C518` | Badges, circles, and visual punctuation. |
| Cream 2 | `#E4DCC4` | Recessed table surfaces. |
| Ink 2 | `#2A2A2A` | Secondary body text. |
| Green Dark | `#136636` | Depth on decorative elements. |
| Pink Dark | `#D14E8B` | Shadow-side accent. |

Use only two or three accent colors per frame. Never introduce a fifth accent.

## Typography

| Role | Typeface | Size | Rules |
|---|---|---:|---|
| Display Hero | Archivo Black | 160px | Uppercase, `0.92` line-height, `-0.01em` tracking. |
| Display Medium | Archivo Black | 96px | Used for section headlines. |
| Statistic Number | Archivo Black | 96px | `0.9` line-height. |
| Body Large | Space Grotesk | 28px | `1.4` line-height, always left-aligned. |
| Mono Kicker | JetBrains Mono | 24px | Uppercase, `0.14em` tracking. |

Archivo Black declares the message, while Space Grotesk explains it. Archivo Black must always appear in uppercase and must never use sentence case.

## Structural Rules

- Use `4px` Ink borders throughout.
- Use flat accent fills without gradients.
- Featured blocks may use a `24px` hard-offset shadow.
- Regular slide elements should generally have no shadow.
- Avoid rounded corners; only the top-bar pill may be rounded.
- Size headlines to their natural line length rather than stretching them edge-to-edge.
- Keep each frame focused on one idea. If there are two ideas, use two frames.

## Components

### Statistic Cells

Use `4px` Ink borders with flat accent fills. Numbers use Archivo Black at large scale, with concise uppercase labels.

### Step Cards

Use a four-stage sequence that ends on green:

1. **BLOCK** — Lay the color planes.
2. **SET** — Lock the display capitals.
3. **STAMP** — Drop the hard shadow.
4. **CUT** — Swap the ground.

### Featured Marker

Use a `24px` hard-offset shadow to distinguish the featured message from regular elements.

### Chrome Atoms

Small interface components include section labels, “NEW” badges, and the rounded top-bar pill.

### Comparison Tables

Use Cream 2 for recessed table cells and Ink for the header row. Both frame and slide borders remain `4px` Ink. Frames may use a `24px` hard shadow, while slides use none.

## Frame Compositions

### Wordmark Cover

A centered identity composition built around the primary wordmark.

### Big Claim

An oversized, left-aligned statement. Use one dominant thesis per frame.

### Stat Grid

A dense catalog-style composition for statistics and structured data.

### Closing Plate

A centered closing composition on a green background. Reserve the green ground primarily for this final frame.

## Do

- Use one idea per frame.
- Lean toward centered compositions, while reserving green for the closing plate.
- Use two or three accent colors per frame, never all four.
- Apply `4px` Ink borders consistently.
- Use `24px` hard-offset shadows only on featured blocks.
- Keep Archivo Black uppercase with a `0.92` line-height.

## Don’t

- Do not use rounded corners except for the top-bar pill.
- Do not use gradients, blurred shadows, or glow effects.
- Do not use Archivo Black in sentence case.
- Do not introduce a fifth accent color.
- Do not use pure-white backgrounds.
- Do not stretch headlines edge-to-edge; size them to the line.

## Working Principle

**Atoms sacred, composition free.** Preserve the palette, typography, border treatment, and component logic while allowing compositions to adapt to each frame’s message.
