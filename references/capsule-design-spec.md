# Capsule Design Specification

**Source:** [HyperFrames — Capsule](https://www.hyperframes.dev/design/capsule)
**Scope:** The Capsule template page and its rendered design-reference specimen. Values below are transcribed from visible guidance or the specimen’s exposed HTML/CSS. No missing values are inferred.

## Working Principle

**Atoms Sacred · Composition Free**

Preserve the specified visual atoms—pill geometry, ink outlines, candy fills, typography, and hard offset lift—while allowing frame composition to vary.

## Visual Direction

Capsule is a **pill-shaped editorial** system on **cream paper**, combining a **candy palette**, glamorous **Bodoni Moda** serif display type, and clean **Space Grotesk** support type. Its stated character is **Editorial · Playful · Memphis · Candy**.

- Use oversized, sentence-case serif headlines as the visual anchor.
- Build containers, labels, chips, icons, and emphasis as outlined pills or rounded cards.
- Keep decorative atmosphere flat; reserve subtle hard offset shadows for functional cards and pills.
- Use candy color primarily in fills, statistics, short accents, and selected italic words—not regular headlines.
- The canvas carries faint coral, sky, and lime radial washes rather than a flat solid alone.

## Palette

The fine-tuning panel defines four core roles and template-specific extras. The rendered specimen also names semantic uses.

| Token / role | Hex | Use exposed by the page |
|---|---:|---|
| Primary / Cream | `#F5F5F0` | Canvas and track background |
| Secondary / Ink | `#1A1A1A` | Main text; source color for translucent text and shadows |
| Tertiary / Lime | `#C4D94E` | Candy fill; highlight pill; orbit center |
| Accent / Coral | `#E85D4E` | Candy fill; italic cover emphasis; accent rules; positive markers |
| Outline | `#1E1E1E` | All pill, card, icon, frame, and connector strokes |
| White | `#FFFFFF` | Card and swatch surfaces |
| Lavender | `#C5B5E0` | Candy fill; section/tag and chip fill |
| Sky | `#8BB4F7` | Candy fill and statistic accent |
| Violet | `#A06CE8` | Candy fill; closing italic emphasis; negative markers |
| Yellow | `#F2D160` | Candy fill; title and closing pills |
| Peach | `#F5B895` | Candy fill |
| Mint | `#A8E6CF` | Candy fill; labels and decorative pills |
| Shadow | `rgba(26, 26, 26, 0.08)` | Unblurred offset lift |
| Host backdrop | `#0E0E0C` | HTML backdrop outside the cream specimen; not part of the displayed Capsule palette |

### Canvas washes

- Coral: radial ellipse at `12% 8%`, `rgba(229, 93, 78, 0.10)` to transparent at `45%`.
- Sky: radial ellipse at `88% 22%`, `rgba(139, 180, 247, 0.12)` to transparent at `42%`.
- Lime: radial ellipse at `70% 95%`, `rgba(196, 217, 78, 0.10)` to transparent at `45%`.
- Frame thumbnails use coral at `15% 12%` / `0.10` and sky at `85% 85%` / `0.12`, both transparent at `46%`.

### Palette constraint

The specimen says **“Nine Candy Accents”** and forbids a **tenth accent color**, but it explicitly names only eight candy hues: Coral, Lime, Lavender, Sky, Violet, Yellow, Peach, and Mint. White is exposed as a separate token, not explicitly labeled the ninth accent. Do not invent another color.

## Typography

### Families

- **Display / serif:** `Bodoni Moda`, fallback `serif`; loaded weights `400–900`, upright and italic, optical-size range `6–96`.
- **Body / grotesk:** `Space Grotesk`, fallback `sans-serif`; loaded weights `400`, `500`, `600`, `700`.
- Body rendering uses antialiasing.

### Named type roles

| Role | Family | Weight | Size | Line-height | Tracking | Case / color rule |
|---|---|---:|---:|---:|---:|---|
| Display | Bodoni Moda | `800` | Specimen sample `88px`; cover `clamp(72px, 13vw, 200px)` | Sample `0.9`; cover `0.88` | `-0.02em` in role guidance/sample; cover `-0.03em` | Sentence case; ink. Selected italic word may be coral. |
| Headline | Bodoni Moda | `700` | Specimen sample `54px` | Not specified for the sample | Not specified for the sample | Ink, never colored; sentence case. |
| Section heading | Bodoni Moda | `700` | `52px` | `1` | `-0.02em` | Ink. |
| Stat number | Bodoni Moda | `800` | Role sample `64px`; stat component `48px` | Component `1`; sample not specified | `-0.03em` | Color is allowed here. |
| Body | Space Grotesk | `400` | Role sample `17px`; card body `14px` | `1.6` | Not specified | Guidance says ink at `65%`; the large role sample is implemented at `70%`. |
| Pill text | Space Grotesk | `600` | Role sample `14px`; implementations range `11–15px` | Not specified | Role `0.12em`; components use `0.08–0.14em` | Uppercase. |
| Eyebrow | Space Grotesk | `600` | `12px` | Not specified | `0.12em` | Uppercase. |
| Section tag | Space Grotesk | `600` | `13px` | Not specified | `0.10em` | Uppercase. |
| Card title | Bodoni Moda | `700` | `24px` | `1.1` | Not specified | Ink. |
| Rule-card heading | Bodoni Moda | `700` | `30px` | Not specified | Not specified | Ink. |
| Footer name | Bodoni Moda | `800` | `28px` | Not specified | Not specified | Ink. |
| Footer descriptor | Space Grotesk | `600` | `11px` | Not specified | `0.12em` | Uppercase; ink at `50%`. |

### Typography behavior

- Bodoni headlines are sentence case; do not uppercase them.
- Do not color Bodoni headlines. The exposed exceptions are statistic numerals and selected italic emphasis in the cover/closing compositions.
- Use Space Grotesk for paragraphs, labels, pills, chips, metadata, and attribution.
- Body and label tracking is not specified unless listed above.
- The body specimen’s maximum measure is `680px`; the page separately says not to stretch a headline edge-to-edge, but does not specify one universal headline width.

## Structural System

### Global layout

- Reset: `margin: 0`, `padding: 0`, `box-sizing: border-box`.
- Standard section padding: `120px 100px`.
- Section header: horizontal flex, center-aligned, `20px` gap, `64px` bottom margin.
- Section divider: flexible width, `2px` high, pill radius, outline at `15%` opacity.
- Cover: `min-height: 100vh`, centered column, centered text, zero section padding, clipped overflow.
- Palette grid: four equal columns with `24px` gaps; at `≤1100px`, two columns.
- Component grid: 12 equal columns with `32px` gaps; exposed spans are `3`, `4`, and `6` columns; `56px` bottom margin.
- Frame gallery: two equal columns with `48px` gaps; at `≤1100px`, one column.
- Rule grid: two equal columns with `32px` gaps. No responsive collapse rule is specified.
- Frame shell: `16:9` aspect ratio, `2px` outline, `1.4rem` radius, clipped overflow.

### Geometry and stroke

- Small text containers and chips: `9999px` radius.
- Cards: explicit system rule is `2rem` radius.
- Every pill, card, and icon: `2px` ink outline.
- Frame-specific strokes scale with container width (`0.20–0.25cqw`).
- Circular icons remain fully round (`50%`).

### Lift and depth

- Allowed shadow offsets: `4px`, `6px`, `8px`, or `12px`.
- Shadow color: `8%` Ink.
- Blur: none.
- Shown implementations use `6px 6px 0` and `8px 8px 0`; thumbnails use proportional `0.4–0.6cqw` offsets.
- Decorative floating wallpaper pills have no shadow.

## Components

### Pill primitive

- Inline flex, vertically centered, no wrapping.
- `2px` Outline stroke; `9999px` radius; Space Grotesk `600`.
- Padding, font size, fill, and tracking vary by role; no single universal value is specified.

### Title pill

- Yellow fill; padding `1rem 2.6rem`; `15px`; `600`; uppercase; `0.14em` tracking.
- `6px 6px 0` shadow; `40px` bottom margin.

### Decorative floating pills

- Standard: padding `0.5rem 1.2rem`; `13px`; `600`; uppercase; `0.08em` tracking.
- Circular variant: `84 × 84px`.
- Float **5–8** on declarative frames as flat wallpaper.
- Position and rotation are composition-specific; no reusable placement grid is specified.

### Palette swatch card

- White surface; `2px` outline; `1.5rem` radius; `6px` hard offset shadow.
- Color field height `96px`; metadata padding `16px 20px`.
- Name: Bodoni Moda `700`, `20px`.
- Hex: Space Grotesk `12px`, `0.04em`, Ink at `55%`, `4px` top margin.

### Pillar card

- White surface; `2px` outline; `2rem` radius; padding `2.2rem 1.8rem`; `8px` hard offset shadow.
- Icon: `60 × 60px`, circular, outlined; Bodoni Moda `700`, `24px`; `22px` bottom margin.
- Title: Bodoni Moda `700`, `24px/1.1`.
- Body: `14px/1.6`, Ink at `65%`, `12px` top margin.

### Stat pill

- White surface; `2px` outline; `2rem` radius; padding `2rem 1.5rem`; `6px` hard offset shadow.
- Number: Bodoni Moda `800`, `48px/1`, `-0.03em`; candy color permitted.
- Label: Space Grotesk `600`, `11px`, uppercase, `0.10em`, Ink at `60%`; `12px` top margin.
- Accent bar: `40 × 4px`; pill radius; `16px` top margin.

### Bar tracks and chips

- Track: `36px` high, Cream fill, `2px` outline, pill radius, `16px` bottom margin.
- Fill: full track height, pill radius, `2px` right outline, `14px` right padding; Space Grotesk `600`, `12px`.
- Demonstrated fill widths: `78%` and `54%`.
- Chip group: wraps with `12px` gaps.
- Chip: padding `0.4rem 1.1rem`; `2px` outline; Space Grotesk `600`, `12px`, uppercase, `0.08em`.

### Orbit composition

- Container: `280px` high, centered.
- Center: `140 × 140px`, circular, Lime, `2px` outline; Bodoni Moda `700`, `40px`.
- Satellites: outlined candy pills with padding `0.4rem 1rem`; Space Grotesk `600`, `12px`, uppercase, `0.08em`; `6px` hard offset shadow.

### Diagram nodes and connectors

- Nodes are outlined pills with `1rem 2rem` padding, hard `6px` offset shadow, Bodoni Moda `700`.
- Connectors are `50 × 4px` solid Outline bars.
- Fill sequence shown: White → Lavender → Lime.

### Card icons

- `60 × 60px`, circular, `2px` outline; Bodoni Moda `700`, `22px`.
- Demonstrated fills: Yellow, Peach, and Violet; Violet uses White text.

## Frame Compositions

### 1. Cover — Identity · Pill Wallpaper · Centered

- Centered identity frame with flat floating candy pills behind the content.
- Title pill: Yellow, `0.25cqw` outline, padding `0.8cqw 2.2cqw`, `1.1cqw` type, `0.2cqw` tracking, `0.4cqw` hard offset shadow, `3cqw` bottom margin.
- Headline: Bodoni Moda `800`, `12cqw/0.88`, `-0.3cqw` tracking; italic word in Coral.
- Accent rule: `6cqw × 0.3cqw`, Coral, `2.4cqw` top margin.

### 2. Pillar Cards — Catalog · 3-Up · Left

- Left-aligned content with `5cqw` horizontal padding.
- Lavender tag; three equal cards with `2cqw` gaps.
- Heading: Bodoni Moda `700`, `4cqw/1`, `-0.05cqw`; `2.4cqw` bottom margin.
- Cards: `1.6cqw` radius, `2cqw 1.6cqw` padding, `0.6cqw` hard offset shadow.
- Icons: `4 × 4cqw`; title `1.9cqw/1.1`; body `1cqw/1.5` at `65%` Ink.

### 3. Pull Quote — Quote · Highlight Pill · Left

- Left-aligned quote with `8cqw` horizontal padding.
- Quote: Bodoni Moda `600`, `4.2cqw/1.3`, `-0.03cqw` tracking.
- Emphasis is a Lime pill, not bold: `0.2cqw` outline, padding `0 1.2cqw`, Space Grotesk `600`, `3cqw`.
- Attribution: Space Grotesk `600`, uppercase, `1cqw`, `0.2cqw` tracking, Ink at `60%`, `2.4cqw` top margin.

### 4. Closing Plate — Closer · Pill Wallpaper · Centered

- Centered close with flat floating candy pills.
- Yellow closing pill: `0.25cqw` outline, padding `0.7cqw 2cqw`, `1cqw` type, `0.2cqw` tracking, `0.4cqw` hard offset shadow, `2.6cqw` bottom margin.
- Headline: Bodoni Moda `800`, `8.5cqw/0.92`, `-0.2cqw` tracking; italic word in Violet.
- Accent rule: `5cqw × 0.3cqw`, Coral, `2.4cqw` top margin.

## Explicit Do / Don’t Rules

### Do

- Make every text container a pill—`9999px` for small elements, `2rem` for cards.
- Wrap every pill, card, and icon in the `2px` Ink outline.
- Set Bodoni headlines in Ink and sentence case; place color on statistics and pill fills.
- Use soft offset shadows (`4/6/8/12px`) in `8%` Ink, with no blur.
- Float `5–8` candy pills as wallpaper on declarative frames.

### Don’t

- No sharp-cornered text containers and no unstroked pills.
- No colored Bodoni headlines and no uppercase Bodoni.
- No blurred shadows and no tenth accent color.
- No shadows on decorative floating pills; the atmosphere stays flat.
- Do not make a headline edge-to-edge; fit it to a readable measure. The exact measure is not specified.

## Unspecified Values

The page does **not** specify a universal spacing scale, universal headline width, universal pill padding, animation system, interaction states, breakpoints other than `1100px`, or responsive behavior for the rule grid and 12-column component grid. It also does not explicitly identify the ninth candy accent despite naming the system “Nine Candy Accents.”
