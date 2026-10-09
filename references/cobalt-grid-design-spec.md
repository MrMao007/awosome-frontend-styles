# Cobalt Grid Design Specification

**Source:** [HyperFrames — Cobalt Grid](https://www.hyperframes.dev/design/cobalt-grid)

## 1. Visual direction

Cobalt Grid is an **editorial parchment + cobalt grid system** presented as a **two-color risograph monograph**. Its look combines warm newsprint cream, electric cobalt ink, graph-paper drafting structure, restrained serif-led hierarchy, and deliberately synthetic pixel/scanline artifacts.

The system should feel:

- Editorial, archival, and catalogue-like rather than app-like.
- Flat and print-derived: no dimensional UI treatment.
- Strictly aligned to an always-visible drafting grid.
- Typographically expressive through scale, spacing, and serif/sans/mono contrast—not through heavy display weights.
- Dense for ledgers and data frames; sparse for chapter, quote, and colophon frames.

The specimen names the type relationship as **Newsreader display, Hanken Grotesk reading**, with **DM Mono** for technical labels and metadata.

## 2. Named working principle

> **ATOMS SACRED · COMPOSITION FREE**

Keep the system’s atoms fixed—palette, grid, type roles, hairlines, pixel cells, QR blocks, and label conventions—while allowing compositions to vary.

## 3. Palette

The specimen labels the palette **STRICTLY TWO-COLOR**: cream paper plus cobalt ink. Supporting colors remain within those same paper and ink families.

| Token | Exact value | Role |
|---|---:|---|
| Paper | `#F0EBDE` | Primary canvas; warm newsprint cream. |
| Ink (Cobalt) | `#1F2BE0` | The only full-strength ink; type, rules, grid decoration, active chart cells, and graphic marks. |
| Ink Soft | `#5560E5` | Secondary cobalt for editorial subtitles and subdued labels. |
| Paper 2 | `#E6E0CE` | Deeper cream for subtle region shifts. |
| Grid 10% | `rgba(31, 43, 224, 0.10)`; cobalt base `#1F2BE0` | Permanent graph-paper grid and chart “off” cells. |
| Ink Faint 18% | `rgba(31, 43, 224, 0.18)`; cobalt base `#1F2BE0` | Faint row dividers and low-emphasis outlines. |

No other color is specified. The dark surround visible on the hosting page is not part of the Cobalt Grid frame palette.

## 4. Typography

### 4.1 Families and assigned weights

| Family | Role | Exposed weights/styles |
|---|---|---|
| **Newsreader** | Display headlines, large numerals, section titles, editorial italic lines | `400` for all assigned roles; italic `400` for editorial copy. The page also loads `500` and `700`, but does not assign them to a design role. |
| **Hanken Grotesk** | Body copy, reading text, uppercase micro labels | `400` body; `600` labels. The page also loads `500` and `700`, but does not assign them to a design role. |
| **DM Mono** | IDs, tags, indices, measurements, deltas, page numbers | `400`. |

### 4.2 Named type tokens

The specimen exposes both descriptive token values and rendered sample values. Where they differ, preserve both rather than treating one as a replacement for the other.

| Token | Family / weight | Declared specification | Rendered sample in the specimen |
|---|---|---|---|
| `display-hero` | Newsreader `400` | Up to `18vh`; tracking `-0.008em`; line-height not stated in the token label | `104px`; line-height `0.9`; tracking `-0.01em` |
| `vbig-numeral` | Newsreader `400` | Up to `240px`; tracking `-0.015em`; line-height not stated in the token label | `120px`; line-height `0.9`; tracking `-0.02em` |
| `headline` | Newsreader `400` | Section header; size, line-height, and tracking not stated in the token label | `60px`; line-height and tracking not explicitly set on the sample |
| `body` | Hanken Grotesk `400` | Line-height `1.5`; size and tracking not stated in the token label | `16px`; line-height `1.5`; maximum measure `680px` |
| `micro` | Hanken Grotesk `600` | Uppercase; tracking `0.16em`; line-height not stated | `14px` |
| `mono-tag` | DM Mono `400` | Tracking `0.05em`; line-height not stated | `15px` |

### 4.3 Additional exposed typography settings

- Section heading: Newsreader `400`, `54px`, line-height `0.95`, tracking `-0.01em`.
- Section index/tag: DM Mono, `13px`, tracking `0.05em`.
- Section right label: Hanken Grotesk `600`, uppercase, `12px`, tracking `0.16em`.
- Cover top labels: DM Mono, `14px`, tracking `0.05em`.
- Cover kicker: Hanken Grotesk `600`, uppercase, `15px`, tracking `0.18em`.
- Cover hero: Newsreader `400`, `clamp(58px, 8.2vw, 142px)`, line-height `0.92`, tracking `-0.01em`, maximum width `66%`.
- Cover editorial line: Newsreader italic `400`, `clamp(22px, 2.5vw, 38px)`, line-height `1.15`, Ink Soft, maximum width `52%`.
- Cover footer: DM Mono, `13px`, tracking `0.05em`.
- Gallery frame label: Hanken Grotesk `600`, uppercase, `12px`, tracking `0.14em`; the leading name is full cobalt and the descriptor is Ink Soft.
- Ledger title: Newsreader, `40px`, line-height `1`.
- Ledger item name: Newsreader, `24px`, line-height `1.1`.
- Ledger description: Hanken Grotesk, `14px`, line-height `1.45`.
- Ledger number/delta: DM Mono, `14px`.
- Ledger column header: Hanken Grotesk `600`, uppercase, `11px`, tracking `0.16em`.
- Vertical labels: DM Mono, `14px`, tracking `0.04em`.

No global font-size scale beyond these exposed uses is specified.

## 5. Structural system

### 5.1 Canvas and grid

- Base canvas: Paper `#F0EBDE`.
- Permanent graph-paper grid: two perpendicular `1px` linear-gradient rules in Grid 10%.
- Full-page grid module: `40px × 40px`.
- Grid origin is the canvas itself; do not place the grid in a removable decorative layer.
- All foreground content and rules use cobalt-family values.
- Global text smoothing is enabled with `-webkit-font-smoothing: antialiased`.

### 5.2 Sections

- Standard section padding: `110px 80px`.
- Section header: baseline-aligned flex row with `20px` gap.
- Header bottom rule: `1.5px` solid cobalt.
- Header padding-bottom: `16px`.
- Header-to-content margin: `56px`.

### 5.3 Layout grids

- Component layout: 12 equal columns with `36px` gaps; demonstrated spans are 4, 5, 6, 7, and 8 columns.
- Frame gallery: two equal columns with `48px` gaps.
- Palette grid: three equal columns with no gaps and `1.5px` cobalt borders.
- At viewport widths `≤1100px`, the frame gallery becomes one column and the palette becomes two columns. No other breakpoint is specified.

### 5.4 Rules, edges, depth, and corners

- Primary structural rules: `1.5px` solid cobalt.
- Dense-list separators: `1px` Ink Faint 18%.
- Preview-frame outline: `1px` Ink Faint 18%, implemented as a zero-offset outline-like shadow—not a dimensional drop shadow.
- Corners are square. Rounded corners are explicitly prohibited.
- Drop shadows are explicitly prohibited.
- No general spacing scale, elevation scale, or border-radius scale is specified.

## 6. Components

### 6.1 Topbar rule

- Flex row with title and technical tag aligned on the baseline.
- Bottom rule: `1.5px` cobalt.
- Bottom padding: `14px`.
- Title: Newsreader `40px`, line-height `1`.
- Technical tag: DM Mono `13px`.

### 6.2 Ledger rows

- Four-column grid: `64px 0.7fr 1.5fr 0.6fr`.
- Column gap: `24px`.
- Row padding: `16px 0`.
- Standard row divider: `1px` Ink Faint 18%.
- Header divider: `1.5px` cobalt.
- Content aligns on the baseline.
- Delta column is right-aligned.

### 6.3 Pixel-stack chart

- Chart height: `200px`.
- Stacks align to the bottom and grow with column-reverse cells.
- Stack gap: `14px`.
- Cell gap: `3px`.
- Cell height: `12px`.
- “On” cell: full cobalt.
- “Off” cell: Grid 10%.
- Baseline: `1.5px` cobalt.
- Tick row margin-top: `10px`; ticks use centered DM Mono at `12px`.

### 6.4 QR-block patch

- An `8 × 8` square-cell grid.
- Component gap: `1.5px`.
- Internal padding: `4px`.
- Outer keyline: `1.5px` in Paper.
- “On” cells use full cobalt; “off” cells use Grid 10%.
- Standalone demonstrated size: `120px × 120px`.
- The exact binary cell pattern is decorative; no encoded payload is specified.

### 6.5 Pixel-glitch column

- A vertical stack of stair-stepped blocks.
- Each block uses repeating vertical scanlines: cobalt from `0–2px`, transparent from `2–8px`.
- Blocks remain paper-backed.
- Widths and heights vary to create stepped offsets; there is no universal sequence. The cover example uses right-aligned steps at `60%/18%`, `100%/16%`, `44%/14%`, `78%/20%`, and `34%/12%`.

### 6.6 Vertical-stack labels

- Horizontal flex arrangement with `28px` gaps.
- Labels use `writing-mode: vertical-rl` and mixed text orientation.
- DM Mono `14px`, tracking `0.04em`.

### 6.7 Palette swatches

- Three-column bordered matrix.
- Chip height: `140px`.
- Metadata padding: `18px 22px`.
- Swatch name: Newsreader `28px`, line-height `1`.
- Value: DM Mono `12px`, margin-top `6px`.
- Role copy: Hanken Grotesk `13px`, line-height `1.5`, margin-top `10px`.

## 7. Frame system

### 7.1 Shared frame contract

- True aspect ratio: `16:9`.
- Internal sizing uses container-query width units (`cqw`) so composition scales with the frame.
- Frame grid: `1px` lines with a `2cqw × 2cqw` module.
- Top hairline: left/right inset `4cqw`, top `3cqw`, thickness `0.12cqw`.
- Bottom hairline: left/right inset `4cqw`, bottom `3cqw`, thickness `0.12cqw`.
- Page number: right `4cqw`, bottom `4cqw`, DM Mono `1cqw`.
- Content body fills the frame and sits above the canvas graphics.

The specimen numbers frames as part of a six-frame set (`01 / 06` onward), but only four compositions are exposed. Frames `05 / 06` and `06 / 06` are not specified.

### 7.2 Hero Cover — “Identity · Glitch + QR · Left”

- Body: vertically centered flex column; horizontal padding `5cqw`.
- Kicker: Hanken Grotesk `600`, uppercase, `1.1cqw`, tracking `0.2cqw`, margin-bottom `2cqw`.
- Headline: Newsreader, `11cqw`, line-height `0.9`, tracking `-0.1cqw`, maximum width `62cqw`.
- Editorial line: Newsreader italic, `2.6cqw`, Ink Soft, margin-top `1.6cqw`, maximum width `50cqw`.
- Glitch column: right-aligned, width `26cqw`, opacity `0.7`.
- QR patch: top `6cqw`, right `5cqw`, `9cqw × 9cqw`, gap `0.2cqw`, padding `0.4cqw`.

### 7.3 Index Ledger — “Catalog · Dense Frame”

- Body padding: `7cqw 5cqw 6cqw`.
- Topbar bottom rule: `0.12cqw`; padding-bottom `1cqw`; margin-bottom `2.2cqw`.
- Title: Newsreader `3.8cqw`, line-height `1`, no wrapping.
- Tag: DM Mono `1.1cqw`.
- Row columns: `5cqw 1fr`; gap `2cqw`.
- Row padding: `1.1cqw 0`; divider `0.06cqw` Ink Faint.
- Index: DM Mono `1.2cqw`.
- Name: Newsreader `2.4cqw`, line-height `1`.
- Description: Hanken Grotesk `1.1cqw`, line-height `1.4`, margin-top `0.4cqw`.

### 7.4 Chapter Opener — “Section · Sparse · Left”

- Body: vertically centered; horizontal padding `6cqw`.
- Chapter index: DM Mono `1.4cqw`, margin-bottom `2cqw`.
- Headline: Newsreader `9cqw`, line-height `0.98`, tracking `-0.05cqw`.
- Lede: Hanken Grotesk `1.5cqw`, line-height `1.5`, maximum width `42cqw`, margin-top `2.4cqw`.
- Glitch column: left-aligned, width `14cqw`, opacity `0.5`.
- Preserve substantial unoccupied grid area.

### 7.5 Data Frame — “Chart · Pixel-Stack”

- Body padding: `7cqw 5cqw 6cqw`.
- Topbar bottom rule: `0.12cqw`; padding-bottom `1cqw`; margin-bottom `2.4cqw`.
- Title: Newsreader `4.2cqw`, line-height `1`.
- Tag: DM Mono `1.1cqw`.
- Chart: bottom-aligned flex row; stack gap `1.4cqw`; bottom rule `0.12cqw`.
- Cell gap: `0.4cqw`; cell height `1.4cqw`.
- Tick row: gap `1.4cqw`; margin-top `1cqw`; centered DM Mono `1cqw`.

## 8. Explicit rules

### Do

- Keep the graph-paper grid behind every frame—it is the canvas tone.
- Frame every slide with top and bottom `1.5px` cobalt hairlines.
- Set Newsreader at weight `400` in cobalt; size, not weight, makes hierarchy.
- Track Hanken labels uppercase at `0.16em`; mono chrome at `0.05em`.
- Render data as pixel-stack cells—cobalt “on,” 10% “off.”

### Don’t

- Never introduce a second ink color—cream + cobalt only.
- No bold Newsreader, rounded corners, or drop shadows.
- Do not disable the grid or suppress the hairlines.
- Do not crowd chapter, quote, or colophon frames; let the grid breathe.
- Do not blow a serif headline edge-to-edge; fit it to measure.

## 9. Unspecified by the source

The page does not specify:

- Motion, transitions, easing, or duration.
- Interactive states such as hover, focus, pressed, disabled, or loading.
- Form, button, navigation, modal, or notification patterns.
- An icon family or illustration system beyond QR blocks, pixel glitches, grid rules, and charts.
- Accessibility targets or contrast ratios.
- A complete spacing scale beyond the explicit measurements above.
- Additional responsive behavior beyond the `1100px` breakpoint.
- The compositions for frames `05 / 06` and `06 / 06`.
