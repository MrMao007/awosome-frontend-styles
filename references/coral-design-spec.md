# Coral Design Specification

**Source:** [HyperFrames — Coral](https://www.hyperframes.dev/design/coral)

## 1. Design Intent

Coral is presented as **“a bold magazine-poster system in motion”** under the headline **“Solid planes, hard edges.”** Its identity comes from three large, flat surfaces—coral fire, ink black, and warm cream—meeting at hard color boundaries. Bebas Neue supplies declarative uppercase display type; Inter supplies reading, explanation, labels, and the more personal “voice break.”

The visual system is flat rather than dimensional. Its recurring signatures are:

- Multi-surface region splits in coral, ink, and cream.
- Hard, square edges.
- Large Bebas Neue capitals with deliberate tracking.
- A constant 45° hatch over coral fields.
- Oversized, low-opacity wallpaper numerals.
- Coral rules, borders, nodes, and accents.
- A 1920×1080 / true 16:9 frame context.

## 2. Named Working Principle

**Atoms Sacred · Composition Free**

The specimen names this principle in its footer as **“Frame Showcase · Atoms Sacred · Composition Free.”** No further formal definition is provided on the page.

## 3. Color System

The editor identifies the core roles as Primary, Secondary, Tertiary, and Accent. The rendered specimen supplies the color names and usage descriptions.

| Color | Hex | Editor role | Specimen role |
|---|---:|---|---|
| Cream | `#F5F0E8` | Primary | Warm canvas; magazine paper. |
| Black / Ink | `#1A1A1A` | Secondary | Strongest surface; quote and statement grounds. |
| Gray | `#6B6B6B` | Tertiary | Body paragraphs, labels, and metadata. |
| Coral | `#E85D5D` | Accent | Signature accent and full-region environment. |
| Coral Dark | `#D44A4A` | Extra | Gradient stop and chart-comparison series. |
| Cream Dark | `#E8E0D4` | Extra | Subtle region differentiation and information bars. |
| Light Gray | `#B0B0B0` | Extra | Tertiary text on ink surfaces. |
| White | `#FFFFFF` | Extra | Card fills against coral or cream. |

### Color-use rules

- Treat coral, ink, and cream as the three compositional surfaces.
- Use ink for Bebas Neue headlines on coral; do not use white headlines there.
- Use coral eyebrows on cream or ink.
- Use ink eyebrows on coral.
- Reserve gray for body copy and metadata, not headlines.
- Use white for flat cards placed on coral or cream.
- A fourth compositional surface is not permitted.

## 4. Typography

### Font families

- **Display:** Bebas Neue, fallback `sans-serif`.
- **Body:** Inter, fallback `sans-serif`.
- The page imports Inter weights **300, 400, 600, and 700**.
- A numeric weight for Bebas Neue is not specified.

The page summarizes the pairing as **“Bebas Neue uppercase headlines + coral on cream, Inter reading.”** It also states the voice relationship as **“Bebas declares. Inter explains.”**

### Named type roles

| Role | Family | Weight | Size | Line height | Tracking | Case / use |
|---|---|---:|---:|---:|---:|---|
| `hero-title` | Bebas Neue | Not specified | `120px` | `0.9` | `4px` | Always uppercase. |
| `jumbo-feature` | Bebas Neue | Not specified | Up to `200px` | Not specified | `12px` | Uppercase under the all-Bebas rule. |
| `section-headline` | Bebas Neue | Not specified | `80px` | Not specified | `2px` | Uppercase under the all-Bebas rule. |
| `body-light` | Inter | `300` | Token size not specified; rendered specimen uses `28px` | Token value not specified; rendered specimen uses `1.5` | Not specified | Pull-quote / personal voice. |
| `section-label` | Inter | `700` | Rendered class uses `13px` | Not specified | `4px` | Uppercase. |

The rendered type specimen visually demonstrates `hero-title` at `104px`, `jumbo-feature` at `120px`, and `section-headline` at `72px`; these are specimen display sizes, while the named token values remain `120px`, up to `200px`, and `80px` respectively.

### Additional exposed type settings

| Context | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Cover title | Bebas Neue | Not specified | `clamp(80px, 13vw, 190px)` | `0.88` | `4px` |
| Cover brand | Bebas Neue | Not specified | `40px` | Not specified | `6px` |
| Cover meta label | Inter | `600` | `12px` | Not specified | `3px` |
| Cover meta value | Bebas Neue | Not specified | `38px` | Not specified | `2px` |
| Cover strap | Inter | `300`; emphasized text `600` | `24px` | `1.5` | Not specified |
| Section number | Bebas Neue | Not specified | `64px` | `0.8` | Not specified |
| Section heading | Bebas Neue | Not specified | `64px` | `0.8` | `2px` |
| Section tag | Inter | `600` | `12px` | Not specified | `3px` |
| Card title | Bebas Neue | Not specified | `34px` | `1.05` | `1px` |
| Card body | Inter | Not specified | `14px` | `1.6` | Not specified |
| Sidebar value | Bebas Neue | Not specified | `44px` | `1` | `1px` |
| Sidebar label | Inter | Not specified | `12px` | Not specified | `1px` |

### Typography rules

- Every Bebas Neue element must be uppercase.
- Every Bebas Neue element must use `1–12px` letter-spacing.
- Do not render Bebas Neue in sentence case or without tracking.
- Do not replace Inter with another body sans.
- Use Inter Light (`300`) when copy should feel personal rather than declarative.

## 5. Texture and Surface Rules

### Diagonal hatch

Use a repeating 45° black hatch over coral:

- Angle: `45deg`.
- Opacity: `6%` black (`rgba(0,0,0,.06)`).
- Pattern: transparent from `0–20px`, then black from `20–40px`, repeating.
- The hatch is a flat overlay, not depth or elevation.

### Wallpaper numeral

- Typeface: Bebas Neue.
- Opacity: `12%` black on coral (`rgba(0,0,0,.12)`).
- Place behind the region title or primary content.
- Use it when a coral region feels underweight.

### Geometry

- Use hard rectangular region boundaries.
- Do not use rounded rectangles.
- Circular timeline nodes are explicitly shown and are not card or surface shapes.
- Do not use drop shadows or elevations as content styling. The showcase’s preview-frame wrapper itself uses `0 2px 0 rgba(26,26,26,.1)`; this is presentation framing, not a prescribed content surface.

## 6. Document and Layout Structure

### Global structure

- Body background: Cream `#F5F0E8`.
- Default text: Ink `#1A1A1A`.
- Default body family: Inter.
- Global box sizing: `border-box`; margins and padding reset to `0`.
- Standard section padding: `120px 100px`.
- No general spacing scale is named beyond the concrete values below.

### Section header

- Flex row with items bottom-aligned (`align-items: flex-end`).
- Gap: `24px`.
- Bottom margin: `64px`.
- Bottom rule: `3px solid rgba(26,26,26,.15)`.
- Bottom padding: `24px`.
- Section number and title: `64px` Bebas Neue with `0.8` line-height; title tracking `2px`.
- Right-side tag: `12px` Inter `600`, uppercase, `3px` tracking, Gray.

### Opening cover

- Minimum height: `100vh`.
- Grid rows: `38% / 62%`.
- Coral top-region padding: `56px 64px`.
- Cream bottom-region padding: `64px`.
- Top region carries the 45° hatch and a wallpaper `01`.
- Wallpaper numeral: `340px`, line-height `0.7`, right `48px`, bottom `-70px`, `12%` black.
- Horizontal rule: `3px` high, maximum width `900px`, margin `40px 0 28px`.
- Strap maximum width: `760px`.

### Palette grid

- Four equal columns with no gap.
- Outer and internal separators: `1px solid rgba(26,26,26,.12)`.
- Swatch chip height: `160px`.
- Metadata padding: `22px 24px`.
- Responsive behavior below `1100px`: two columns.

### Typography rows

- Grid columns: `260px 1fr`.
- Rows align center.
- Row separator: `1px solid rgba(26,26,26,.12)`.
- Specimen side has a matching left border and `28px 0 28px 40px` padding.

### Component grid

- Twelve equal columns.
- Gap: `28px`.
- Bottom margin: `56px`.
- Demonstrated spans: 3, 4, and 6 columns; the rendered component groups use 4-column spans.

### Frame gallery

- Two equal columns with a `48px` gap.
- Each frame is true `16:9` and uses size-container units (`cqw`) so its contents scale with frame width.
- Below `1100px`, the gallery becomes one column.
- Animation durations, easing, and transition behavior are not specified.

## 7. Components

### Column card

- White fill.
- `5px` Coral top border.
- Padding: `32px`.
- Hard square corners.
- Icon square: `48px × 48px`, Coral fill, White Bebas Neue glyph at `24px`.
- Icon bottom margin: `24px`.
- Title: Bebas Neue `34px`, `1px` tracking, `1.05` line-height.
- Body: Inter `14px`, `1.6` line-height, Gray, `14px` top margin.
- Stat: Bebas Neue `48px`, Coral, line-height `1`, `24px` top margin.

Three card concepts are shown:

1. **Region Split:** solid planes meet at a hard edge; the boundary is the layout.
2. **Diagonal Hatch:** 45° overlay at 6% opacity.
3. **Wallpaper Numeral:** oversized Bebas Neue at 12% opacity.

### Sidebar tile

- White fill.
- `4px` Coral left border.
- Padding: `20px 24px`.
- Stack spacing: `18px` bottom margin, except the final tile.
- Value: Bebas Neue `44px`, `1px` tracking, line-height `1`.
- Label: Inter `12px`, `1px` tracking, Gray, `6px` top margin.

### Accent rule

- `80px × 4px`.
- Coral fill.

### Information bar

- Cream Dark fill.
- Flex layout with space-between alignment.
- Padding: `28px 36px`.
- Main label: Bebas Neue `44px`, `2px` tracking.
- Metadata: Inter `12px`, `2px` tracking, uppercase, Gray.

### Card icon

- `48px × 48px` Coral square.
- White Bebas Neue glyph at `24px`.

### Timeline

- Container height: `120px`; top margin `20px`.
- Ink line: `4px` high, positioned `20px` from the top and spanning left to right.
- Nodes: `20px × 20px` circles, Coral fill, `4px` Cream halo/border, positioned `12px` from the top.
- Demonstrated node left positions: `4%`, `34%`, `64%`, `92%`.
- Labels are centered near `6%`, `36%`, `66%`, and `90%` respectively.
- Label type: Bebas Neue `22px`, `1px` tracking; labels sit `44px` from the top.

## 8. Frame Compositions

All compositions use a true `16:9` frame and container-width units (`cqw`).

### 8.1 Region-Split Cover

**Identity:** Coral / Cream.

- Grid rows: `36% / 64%`.
- Top region: Coral; flex layout, space-between, aligned to top. The rendered composition does not expose a hatch layer here.
- Top padding: `2.6cqw 3cqw`.
- Brand: Bebas Neue `2cqw`, tracking `0.4cqw`, Ink.
- Meta: Bebas Neue `1.9cqw`, tracking `0.1cqw`, Ink.
- Wallpaper numeral: Bebas Neue `16cqw`, line-height `0.7`, `12%` black, right `2cqw`, bottom `-3cqw`.
- Bottom region: Cream; horizontal padding `3cqw`; content vertically centered.
- Eyebrow: Inter `700`, `0.95cqw`, tracking `0.3cqw`, uppercase, Coral; bottom margin `1.2cqw`.
- Headline: Bebas Neue `8.5cqw`, line-height `0.86`, tracking `0.3cqw`, Ink; emphasized line Coral.

### 8.2 Feature Stat

**Identity:** Full Coral environment with wallpaper numeral.

- Full-frame Coral surface. The rendered composition does not expose a hatch layer, although its supporting copy says the hatch gives the figure texture and the global rules require hatch on Coral regions.
- Flex column, vertically centered.
- Horizontal padding: `7cqw`.
- Wallpaper numeral: Bebas Neue `34cqw`, line-height `0.8`, `12%` black, right `3cqw`, top `-2cqw`.
- Eyebrow: Inter `700`, `1cqw`, tracking `0.3cqw`, uppercase, Ink; bottom margin `1.4cqw`.
- Headline: Bebas Neue `7cqw`, line-height `0.9`, tracking `0.2cqw`, Ink.
- Supporting copy: Inter `300`, `1.5cqw`, line-height `1.5`, Ink; maximum width `44cqw`; top margin `1.6cqw`.

### 8.3 Quote Layout

**Identity:** Coral panel + Ink panel + giant quote mark.

- Grid columns: `40% / 60%`.
- Left panel: Coral, top-aligned, padding `3cqw`.
- Quote mark: Bebas Neue `24cqw`, line-height `0.6`, `35%` black.
- Right panel: Ink; content vertically centered; horizontal padding `5cqw`.
- Quote: Inter `300`, `2.6cqw`, line-height `1.35`, Cream.
- Accent rule: `4cqw × 0.25cqw`, Coral; margin `2.4cqw 0 1.4cqw`.
- Attribution: Inter `600`, `0.95cqw`, tracking `0.25cqw`, uppercase, Cream.
- Role/meta: Inter `0.85cqw`, tracking `0.05cqw`, Light Gray; top margin `0.4cqw`. Its weight and line-height are not specified.

### 8.4 Closing Plate

**Identity:** Centered Cream closer with Coral bottom band.

- Cream frame; centered in both axes; centered text.
- Eyebrow: Inter `700`, `1cqw`, tracking `0.4cqw`, uppercase, Coral; bottom margin `1.6cqw`.
- Headline: Bebas Neue `9cqw`, line-height `0.86`, tracking `0.3cqw`, Ink.
- Accent rule: `5cqw × 0.25cqw`, Coral; top margin `2.4cqw`.
- Bottom band: Coral, anchored left/right/bottom, height `8cqw`, horizontal padding `4cqw`, hatched, with labels spaced to opposite ends.
- Band labels: Bebas Neue `2.2cqw`, tracking `0.2cqw`, Ink.

## 9. Explicit Do / Don’t Rules

### Do

- Compose as multi-surface region splits—Coral, Ink, and Cream at hard edges.
- Set every Bebas Neue element uppercase with `1–12px` letter-spacing.
- Render eyebrows in Coral on Cream or Ink, and in Ink on Coral.
- Apply the 45° hatch at `6%` opacity on Coral regions.
- Fill underweight Coral regions with a `12%`-opacity wallpaper numeral.

### Don’t

- Never render Bebas Neue in sentence case or without tracking.
- Do not introduce a fourth surface.
- Do not use drop shadows, elevations, or rounded rectangles.
- Do not use white headlines on Coral; Bebas Neue on Coral is always Ink.
- Do not use Gray for headlines; Gray is body and metadata only.
- Do not pair Bebas Neue with a body sans other than Inter.

## 10. Values Not Specified by the Page

Unless a contextual specimen value is listed above, the page does not specify:

- A numeric Bebas Neue font weight.
- A global body font size, weight, line-height, or tracking value.
- A line-height for `jumbo-feature`, `section-headline`, or `section-label`.
- Tracking for `body-light`.
- Motion duration, easing, transition choreography, or timing despite describing the system as “in motion.”
- A general spacing, radius, shadow, or elevation scale; rounded rectangles, drop shadows, and elevations are explicitly prohibited for the design language.
