# Broadside Design Specification

**Source:** [HyperFrames — Broadside](https://www.hyperframes.dev/design/broadside)
**Reference specimen:** the rendered iframe embedded on the source page
**Language:** English

## 1. Visual Direction

Broadside is an **industrial newsprint / protest-poster editorial** system: raw cream on ink, massive Barlow display type, and a fire-orange register.

The specimen defines the direction as:

> Massive Barlow type as graphic primitive, one fire-orange environment, and a flat plane built from negative space — dark to document, orange to declare.

Core visual behavior:

- Treat type as the primary graphic primitive.
- Use only two principal registers: a dark documentary register and an orange declarative register.
- Keep the plane flat and create hierarchy through negative space, type weight, type scale, and 1px hairlines.
- Use fire orange either as the full environment on declarative frames or as the only accent on dark frames.
- Keep the identity blunt, editorial, left-led, and poster-like rather than decorative.

## 2. Named Working Principle

**ATOMS SACRED · COMPOSITION FREE**

Preserve the system’s atoms—palette, type roles, lowercase display identity, mono chrome, hairlines, and one-accent discipline—while allowing compositions to vary.

The frame-rule mnemonic is **INK ON FIRE**.

## 3. Palette

| Token / name | Exact value | Role |
|---|---:|---|
| Ink black | `#111111` | Dark canvas; primary ink on orange. |
| Fire orange | `#E85D26` | The sole accent and the full declarative environment. |
| Cream | `#F0ECE5` | Primary text on dark; never substitute pure white. |
| Cream muted | `#888880` | Secondary text on dark. |
| Cream hint | `#505048` | Tertiary text and axis labels. |
| Ink alt | `#1A1A18` | Slightly raised dark surface. |
| Border dark | `#282826` | 1px hairlines on dark. |
| On-orange muted | `rgba(17,17,17,.75)` | Muted ink on orange. |
| On-orange hint | `rgba(17,17,17,.55)` | Lower-emphasis ink on orange. |
| On-orange faint | `rgba(17,17,17,.40)` | Faint ink on orange. |
| On-orange border | `rgba(17,17,17,.20)` | Hairlines on orange. |
| Page root black | `#000000` | HTML backdrop outside the specimen canvas. |

The specimen summarizes the on-orange family as **`17,17,17 · .75–.20`**.

### Palette constraints

- Exactly **one accent color**: fire orange.
- Use cream on dark, but **not** on orange; orange takes ink-black text.
- Do not introduce another accent.
- Gradients are not part of the system.

## 4. Typography

### Font families

- **Barlow** — all expressive and reading roles.
- **IBM Plex Mono** — chrome, labels, catalogue marks, metadata, tags, and frame furniture.
- CSS fallbacks: `Barlow, sans-serif` and `IBM Plex Mono, monospace`.

No font source, `@font-face`, or font-loading method is specified in the specimen.

### Exposed type roles

| Role | Family | Weight | Size | Line-height | Tracking | Case / color |
|---|---|---:|---:|---:|---:|---|
| Display | Barlow | 900 | `13vw`; implementation `clamp(80px, 13vw, 210px)` | `.86` on the cover; shared display utility `.9` | `-.04em` | Lowercase; ink on orange or cream/orange on dark as composition requires. |
| Section H2, prose definition | Barlow | 700 | “Primary headline”; exact size not stated in prose | Not stated in prose | Not stated in prose | Lowercase. |
| Section H2, specimen implementation | Barlow | 900 | `52px` | `1` | `-.03em` | Lowercase, cream. This differs from the prose H2 weight of 700. |
| Stat value | Barlow | 900 | `64px` in component cards; `6cqw` in stat-grid frames | `1` | `-.04em` | Fire orange on dark. |
| Body | Barlow | 400 | Exact base size not specified; cover lead is `clamp(18px, 1.6vw, 26px)` | `1.6` as the role rule; cover lead `1.45` | Not specified | Cream on dark; ink on orange. |
| Label / chrome | IBM Plex Mono | 500 in the prose rule | Context-dependent; common values `11px`, `12px`, `13px`, or `14px` | Context-dependent | `0.14em` identity rule | Uppercase. Most implementation selectors do not explicitly declare weight 500. |

### Additional implementation metrics

- Shared display utility: Barlow 900, `line-height:.9`, `letter-spacing:-.04em`.
- Cover title: `clamp(80px,13vw,210px)`, `.86` line-height, `-.04em` tracking.
- Cover lead: `clamp(18px,1.6vw,26px)`, `1.45` line-height, maximum width `60%`.
- Cover top number: IBM Plex Mono `14px`, `.1em` tracking.
- Cover top metadata: IBM Plex Mono `13px`, uppercase, `.14em` tracking.
- Cover kicker: IBM Plex Mono `14px`, uppercase, `.14em` tracking.
- Cover footer: IBM Plex Mono `13px`, uppercase, `.14em` tracking.
- Section kicker: IBM Plex Mono `13px`, `.14em` tracking, fire orange.
- Section number: IBM Plex Mono `13px`, `.1em` tracking, cream hint.
- Type-token label: IBM Plex Mono `12px`, `.08em` tracking, uppercase, orange.
- Type metrics annotation: IBM Plex Mono `11px/1.6`, `.04em` tracking.
- Compare heading: Barlow 700, `24px`, lowercase.
- Rule-card heading: Barlow 900, `34px`, lowercase.
- Footer title: Barlow 900, `30px`, lowercase.

### Typographic identity rules

- Every Barlow display is lowercase, weight 900, and negative-tracked.
- The expressive range comes from Barlow’s weight and size, not from a second display face.
- Chrome is always IBM Plex Mono, uppercase, and `0.14em` tracked.
- No serif companion is used.

## 5. Structural Rules

### Global foundations

- Reset: `margin:0`, `padding:0`, `box-sizing:border-box`.
- Body: ink-black background, cream text, Barlow, antialiased rendering.
- Default section structure: `position:relative; padding:110px 88px`.
- Main hierarchy devices: weight, scale, negative space, and **1px** hairlines only.
- Surfaces are flat: no shadows, no rounded cards, no gradient grounds.

### Section headers

- Horizontal flex layout, vertically centered, `18px` gap.
- Bottom border: `1px solid #282826`.
- `padding-bottom:18px`; `margin-bottom:56px`.
- Pattern: orange mono section number + large lowercase Barlow heading + right-aligned mono descriptor.

### Cover structure

- Minimum height: `100vh`.
- Background: fire orange; text: ink.
- Main padding: `80px 88px`.
- Top metadata sits `64px` from the top and `88px` from horizontal edges.
- Footer sits `64px` from the bottom and `88px` from horizontal edges.
- Intro rule: `48px × 3px`; `28px` bottom margin.
- Kicker bottom margin: `20px`.
- Lead top margin: `32px`; maximum width `60%`.
- Reference output stated in the cover footer: **`1920 × 1080`**.

### Grids and responsiveness

- Component grid: 12 columns, `40px` gap, `52px` bottom margin; available spans are 3, 4, 5, 6, and 7 columns.
- Frame gallery: two equal columns with `48px` gap.
- Palette: four equal columns with no gap.
- At `max-width:1100px`, the frame gallery becomes one column and the palette becomes two columns.
- Other breakpoints are not specified.

## 6. Components

### Palette swatches

- Four-column grid with a `1px` outer border.
- Internal right and bottom borders are `1px`; remove the fourth-column right edge and final-row bottom edge.
- Color-chip height: `120px`.
- Metadata padding: `16px 20px`.
- Name: Barlow 700, `19px`, lowercase.
- Hex: IBM Plex Mono `11px`, `.06em` tracking, `6px` top margin.
- Role copy: Barlow `12px/1.5`, `10px` top margin.

### Type specimen rows

- Grid: `200px 1fr`, baseline-aligned.
- Row padding: `24px 0`.
- Bottom hairline on each row.
- Specimen overflow is hidden.

### Stat cards

- Top border only; no filled or rounded container.
- Padding: `20px 20px 20px 0`.
- Value: Barlow 900, `64px/1`, `-.04em`, orange.
- Label: `16px`, with `8px` top margin.
- Note: IBM Plex Mono `11px`, uppercase, `.1em` tracking, `6px` top margin.
- Specimen examples: `187px` / “Display at 13vw”; `2` / “Color registers” / “DARK / ORANGE”.

### Bullet list

- Maximum **3** items.
- No native list marker.
- Item size: `22px`; padding `10px 0 10px 36px`.
- Generated orange slash at the left, IBM Plex Mono 700.
- Content principle: one statement per slide, one accent color, breathing room.

### Vertical bar chart

- Chart height: `200px`.
- Bars align to the bottom with `18px` gaps.
- Left hairline plus `18px` left padding.
- Standard bars: cream hint; one highlighted bar: orange.
- Labels: `18px` gap, `10px` top margin, IBM Plex Mono `11px`, `.08em` tracking, centered.
- Exact bar widths and values are not specified.

### Mono tag

- Inline block.
- IBM Plex Mono `12px`, uppercase, `.14em` tracking.
- `1px` orange border.
- Padding: `.3em .8em`.

### Compare panel

- Two equal columns inside a `1px` border.
- Both cells: `32px` padding; left cell has a right hairline.
- “Before” uses the dark documentary register.
- “After” uses orange with ink text as the declarative payoff.
- Heading: Barlow 700, `24px`, lowercase.
- Label: IBM Plex Mono `11px`, uppercase, `.1em` tracking, `14px` bottom margin.
- Copy: `14px/1.5`, `10px` top margin.

### Do / Don’t rule cards

- Two equal columns inside one outer hairline.
- Card padding: `40px`; the Do card has a right hairline.
- Heading: Barlow 900, `34px`, lowercase, `24px` bottom margin.
- Do heading and slash markers: orange.
- Don’t marker: cream-hint multiplication sign.
- Items: `15px/1.55`, `28px` left padding, `14px` bottom margin.

## 7. Frame Compositions

All showcased frames use exact `aspect-ratio:16/9`, clip overflow, fill their container, and use a `1px` border. The gallery labels describe the system as **TRUE 16:9 · CQW**; internal type and spacing therefore use container-query width units where specified.

### 7.1 Cover — identity · orange register · left

- Orange background, ink content.
- Vertically centered, left-led body with `5.5cqw` horizontal padding.
- Frame number: `top:4cqw; left:5.5cqw`; IBM Plex Mono `1cqw`, `.1em`, `z-index:3`.
- Rule: `3.4cqw × .22cqw`; `1.6cqw` bottom margin.
- Kicker: IBM Plex Mono `1cqw`, uppercase, `.14em`; `1.4cqw` bottom margin.
- Title: Barlow 900, `13cqw/.84`, `-.04em`, lowercase.
- Composition shown: “No. 01 / 06” + “PROTEST-POSTER EDITORIAL” + “ink on fire.”

### 7.2 Statement — declarative · dark register · left

- Dark background; centered column with `5.5cqw` horizontal padding.
- Kicker: IBM Plex Mono `1cqw`, uppercase, `.14em`; `1.6cqw` bottom margin.
- Heading: Barlow 900, `10cqw/.86`, `-.04em`, lowercase.
- Emphasis: non-italic fire orange.
- Composition shown: “THE THESIS” + “type is the composition.”

### 7.3 Stat Grid — data · dark · the dense frame

- Padding: `6cqw 5.5cqw`.
- Header: spaced flex row; bottom hairline; `1.2cqw` bottom padding; `3cqw` bottom margin; IBM Plex Mono `1cqw`, uppercase, `.14em`.
- Data row: three equal columns with `3cqw` gaps.
- Stat top padding: `1.4cqw`.
- Value: Barlow 900, `6cqw/1`, `-.04em`, orange.
- Label: `1.3cqw`, `0.6cqw` top margin.
- Note: IBM Plex Mono `.85cqw`, uppercase, `.1em`, `.5cqw` top margin.
- Footer: pushed to the bottom; top hairline; `1.2cqw` top padding; IBM Plex Mono `.9cqw`, uppercase, `.14em`.
- Content constraints shown: `13vw` display scale (`≈187PX @1440`), `3` bullets maximum, `1` accent color.

### 7.4 Fadelist — narrative · before/during/after

- Two equal columns, vertically centered, with `3cqw` gap and `5.5cqw` horizontal padding.
- Narrative stack: Barlow 900, `7cqw/1`, `-.03em`, lowercase.
- First item full strength; second opacity `.5`; third opacity `.22`.
- Right title: Barlow 900, `9cqw/.9`, `-.04em`, lowercase, orange, right-aligned.
- Composition shown: “past. / present. / future.” against “the arc.”

No additional named frame compositions are exposed in the specimen.

## 8. Explicit Do / Don’t Rules

### Do

1. Set every Barlow display in lowercase weight 900, negative-tracked.
2. Make orange the full environment on declarative frames, the lone accent on dark.
3. Keep chrome in IBM Plex Mono uppercase, `0.14em` tracked.
4. Cap bullet lists at three; one statement per frame.
5. Build hierarchy from weight, size, and 1px hairlines only.

### Don’t

1. Never uppercase Barlow display—lowercase is the identity.
2. No second accent color; no cream text on orange (“ink on fire”).
3. No drop shadows, rounded surfaces, or gradient grounds.
4. No serif companion; chrome is never set in Barlow.
5. Don’t pack two display moments into one frame.

## 9. Values Not Specified

The source does **not** specify:

- A general spacing scale beyond the exact values listed above.
- Border radii other than the explicit prohibition on rounded surfaces; use flat/square treatment.
- Shadow tokens; shadows are explicitly prohibited.
- Motion, transitions, animation duration, or easing.
- Iconography or illustration rules.
- Exact bar-chart data, bar widths, or scale.
- Additional responsive breakpoints below or above `1100px`.
- A font-loading source or licensing guidance.
- A universal body font size or universal body tracking value.
- Additional frame types beyond Cover, Statement, Stat Grid, and Fadelist.
