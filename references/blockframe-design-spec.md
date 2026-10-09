# BlockFrame — Design Specification

Source: [HyperFrames BlockFrame](https://www.hyperframes.dev/design/blockframe)

## Visual Direction

BlockFrame is a maximalist neo-brutalist frame system: loud, bordered, and deliberately a little crooked. Its visual language combines thick black borders, hard offset shadows, saturated candy pastels, square geometry, and tilted decorations that puncture the grid.

The core system is defined by:

- `4px` Ink borders
- `8px` hard offset shadows
- Five candy-pastel accents
- Square corners
- Tilted decorative elements
- Dense, high-contrast compositions

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Pink | `#FE90E8` | Candy accent and label-pill variant. |
| Blue | `#C0F7FE` | Candy accent and feature-card ground. |
| Green | `#99E885` | Candy accent and data/stat-grid ground. |
| Yellow | `#F7CB46` | Primary CTA color and closing-frame shadow. |
| Cream | `#FFDC8B` | Candy accent and cover-frame ground. |
| Off-White | `#FFFDF5` | Main canvas. |
| White | `#FFFFFF` | Card surfaces. |
| Black | `#000000` | All borders, primary typography, and structural rules. |

Cycle pastel grounds across frames to maintain rhythm. Do not introduce a sixth pastel.

## Typography

### Display Type

- Typeface: Inter
- Weight: `800–900`
- Case: Uppercase only
- Tracking: Negative
- Purpose: Headlines, major statements, and large statistics

| Role | Specification |
|---|---|
| Heading XL | Inter 900, uppercase, `-0.03em` tracking |
| Heading LG | Inter 800, uppercase, `-0.02em` tracking |
| Stat Number | Inter 900, `1` line-height |

### Body Type

- Typeface: Inter
- Weight: `500`
- Case: Sentence case
- Line-height: `1.6`
- Purpose: Calm explanatory copy beneath heavy display typography

### Labels and Eyebrows

- Typeface: Space Grotesk
- Weight: `600`
- Case: Uppercase
- Tracking: `0.08em`
- Treatment: Always rendered inside a label pill

The source does not specify exact pixel sizes for the typography scale.

## Borders, Shadows, and Geometry

### Primary Cards

- Border: `4px` solid black
- Shadow: `8px` hard offset
- Corners: Square
- Fill: White or a flat pastel color

### Interface Chrome

- Border: `3px` solid black
- Shadow: `4px` hard offset

### Shape Rules

- Do not use rounded corners, except for the decorative dot used with statistics.
- Do not use blurred shadows.
- Borders remain black, except for the white treatment permitted on the closing frame.
- Use only flat fills; the reference does not introduce gradients or glow effects.

## Components

### Feature Card

A square card with a notch and an icon. It uses a `4px` Ink border and an `8px` hard offset shadow.

### Statistic Cards

Large-number cards with slight rotation and a decorative dot. Use Inter 900 for the numeric value and a compact uppercase label.

### CTA

Use a yellow rectangular CTA with a black border and hard shadow. The reference example uses the label “Click Here →”.

### Numbered List Marker

Use a bordered square containing a two-digit number such as `01`. It functions as a structural list bullet rather than decorative text.

### Label Pills

Available in Pink, Blue, Green, Yellow, and Cream variants. Every section or region begins with a label-pill eyebrow; labels must never appear as plain text.

### Icon Squares

Use square, bordered icon containers. The component set also includes starburst decoration.

## Decoration and Tilt

- Add at least one tilted decoration to every frame.
- Rotation range: `±2°–12°`.
- Tilts should interrupt the grid without weakening its structure.
- Cards and decorative accents may appear slightly crooked to reinforce the handmade maximalist character.

## Frame Compositions

### Cover

- Purpose: Identity
- Ground: Cream
- Alignment: Left
- Treatment: Decorative elements around a large headline

### Feature Cards

- Purpose: Catalog or principle overview
- Ground: Blue
- Layout: Three cards across
- Card rules: `4px` black border, `8px` hard shadow, and a slight tilt

### Stat Grid

- Purpose: Dense data presentation
- Ground: Green
- Treatment: Tilted statistic cards
- Character: The system’s densest frame

### Closing Plate

- Purpose: Final statement
- Ground: Black
- Shadow: Yellow
- Border exception: White may be used on this frame

## Frame Rules

### Do

- Use `4px` borders and `8px` shadows on primary cards.
- Use `3px` borders and `4px` shadows on interface chrome.
- Cycle pastel grounds across frames to preserve visual rhythm.
- Use Inter 800–900, uppercase, with negative tracking for all display typography.
- Open every region with a label-pill eyebrow.
- Tilt decorations between `±2°` and `±12°`.
- Add at least one tilted decorative element to every frame.
- Fit headlines to a deliberate measure rather than stretching them across the full canvas.

### Don’t

- Do not use rounded corners, except for the statistic decoration dot.
- Do not use blurred shadows.
- Do not use colored borders; use black only, except for the closing-frame white treatment.
- Do not use sentence-case Inter for display typography.
- Do not add a sixth pastel.
- Do not render labels as plain text; use a pill or omit the label.
- Do not blow headlines edge-to-edge.

## Working Principle

**Atoms sacred, composition free.** Preserve the palette, typography, black-border system, hard shadows, label pills, and tilt behavior while allowing frame composition to adapt to the message.
