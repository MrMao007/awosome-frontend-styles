# Blue Professional — Design Specification

**Source:** [HyperFrames — Blue Professional](https://www.hyperframes.dev/design/blue-professional)
**Specimen:** rendered iframe at `/design-templates/blue-professional/frame-showcase.html`
**Page summary:** “Corporate parchment + cobalt primary, Space Grotesk display, Inter body.”

## 1. Visual Direction

Blue Professional is a consulting-grade frame system built around restraint: a warm cream canvas, near-black headlines, muted gray body copy, and one saturated cobalt that carries all emphasis. Cards are lifted through very light cobalt tinting rather than white fills, heavy outlines, or shadows. The intended character is measured, premium, quiet, and executive-ready.

Named guidance on the page:

- **Palette principle:** “One Accent, Three Grays.”
- **Component direction:** “Soft Tints, No Shadows.”
- **Frame rule:** “Single Accent.”
- **Named working principle — The System Principle:** “One accent does all the emphasis work.”
- **Composition doctrine:** “ATOMS SACRED · COMPOSITION FREE.”

## 2. Color System

| Token / role | Exact value | Usage |
|---|---:|---|
| Canvas / background | `#fdfae7` | The warm cream base for every frame; also used as text on cobalt controls and step circles. |
| Cobalt / primary | `#1e2bfa` | The **only accent**: lines, eyebrows, numerals, bars, progress, markers, pills, and emphasis. |
| Text / near-black | `#111111` | Headlines and primary labels. Headlines must not be cobalt. |
| Muted | `#6b6b6b` | Body copy and secondary labels. |
| Light gray | `#9a9a9a` | Low-emphasis metadata and stat context. This token is exposed in CSS but is not one of the visible palette swatches. |
| Card tint | `rgba(30,43,250,0.04)` | Cobalt at `4%`; card and rule-panel backgrounds. A hex value is not specified. |
| Accent light | `rgba(30,43,250,0.08)` | Decorative cover panel, tags, bar tracks, highlight callout, and pills. A hex value is not specified. |
| Accent medium | `rgba(30,43,250,0.15)` | Exposed token; a specific specimen role is not shown. A hex value is not specified. |
| Border | `rgba(30,43,250,0.2)` | Cobalt at `20%`; card, divider, frame, and ring borders. A hex value is not specified. |
| Positive | `#059669` | Inline positive change only. |
| Negative | `#dc2626` | Inline negative change only. |
| Host surround | `#0b0b16` | HTML background outside the cream specimen; not a frame-system accent. |

No second accent color is permitted. Positive and negative colors are restricted to inline state information and do not become general-purpose accents.

## 3. Typography

### Families

- **Display:** `Space Grotesk`, fallback `sans-serif`.
- **Body:** `Inter`, fallback `sans-serif`.
- Global rendering uses antialiasing.
- Font substitution is explicitly prohibited.

### Core type specimens

| Token | Family | Weight | Size | Line-height | Tracking | Case / color |
|---|---|---:|---:|---:|---:|---|
| H1 specimen | Space Grotesk | `700` | `66px` | Not specified | `-0.02em` | Sentence case; `#111111` |
| H4 / eyebrow | Space Grotesk | `600` | `14px` | Not specified | `0.08em` | Uppercase; `#1e2bfa` |
| Metric value specimen | Space Grotesk | `700` | `54px` | Not specified | Not specified | `#1e2bfa` |
| Body specimen | Inter | `400` | `17px` | `1.6` | Not specified | Sentence case; `#6b6b6b`; max width `660px` |
| CTA | Space Grotesk | `600` | `15px` | Not specified | Not specified | Cream text on cobalt pill |

### Structural type styles

| Usage | Exact typography |
|---|---|
| Section H2 | Space Grotesk `600`, `42px/1.1`, `-0.02em`, near-black. |
| Standard eyebrow | Space Grotesk `600`, `14px`, `0.08em`, uppercase, cobalt; line-height not specified. |
| Tag pill | Space Grotesk `500`, `12px`; line-height and tracking not specified. |
| Cover metadata | Space Grotesk `400`, `13px`, `0.05em`, light gray; line-height not specified. |
| Cover H1 | Space Grotesk `700`, `clamp(46px, 5.4vw, 76px)/1.08`, `-0.02em`, near-black. |
| Cover subtitle | Inter `400`, `clamp(16px, 1.4vw, 20px)/1.6`, muted gray. Tracking is not specified. |
| Cover counter | Space Grotesk `500`, `13px`, `0.05em`, muted gray; line-height not specified. |
| Footer title | Space Grotesk `700`, `26px`, `-0.02em`, near-black; line-height not specified. |
| Footer note | Space Grotesk `500`, `11px`, `0.06em`, uppercase, muted gray; line-height not specified. |

Every numeral should use Space Grotesk at weight `600–700`. Body copy must remain Inter `400`, muted gray, with `1.6` line-height; uppercase body copy is prohibited.

## 4. Structural Rules

### Global system

- Reset margin and padding to `0`; use `border-box` sizing.
- Standard section padding: `108px 76px`.
- Section header: flex row, top-aligned, `20px` gap, `60px` bottom margin.
- Section title stack: `14px` internal gap.
- Standard cobalt accent line: `60 × 4px`, `2px` radius.
- Standard tag: `0.4rem 1rem` padding, `100px` radius.
- Footer: `52px 76px` padding and a `1px` cobalt-20% top border.
- Responsive breakpoint: `1100px`; the composition gallery changes from two columns to one, and the palette changes from four columns to two. Further mobile behavior is not specified.
- Motion timing, animation curves, and transition durations are not specified.

### Cover structure

- Minimum height: `100vh`; horizontal padding: `7vw`.
- Content is vertically centered and limited to `64%` width.
- Decorative right panel: `36%` width, cobalt at `8%`, clipped with `polygon(30% 0, 100% 0, 100% 100%, 0 100%)`.
- Dot field: top `14%`, right `10%`, three columns, `12px` gap, `0.25` opacity, z-index `2`.
- Dots: `8 × 8px`, circular.
- Main content z-index: `3`.
- Accent line bottom margin: `28px`; metadata bottom margin: `20px`.
- Subtitle top margin: `26px`; maximum width: `560px`.
- Bottom progress bar: `3px` high and `16%` wide.
- Counter: bottom `24px`, left `7vw`.

### Grids and containers

- Palette: four columns with `20px` gaps.
- Component system: 12 columns, `1.2rem` gaps, `48px` bottom margin; supported spans are `3`, `4`, `6`, and `8` columns.
- Composition gallery: two equal columns with `48px` gaps.
- Rule grid: two equal columns with `24px` gaps.
- Type rows: `220px 1fr`, vertically centered, `24px 0` padding, `1px` bottom divider.

## 5. Components

### Palette swatch

- Container: cobalt `4%` fill, `1.5px` cobalt-20% border, `14px` radius, clipped overflow.
- Chip: `92px` high, `10px` radius, margins `14px 14px 0`.
- Metadata: `14px 18px 18px` padding.
- Name: Space Grotesk `600`, `17px`, `-0.01em`, near-black; line-height not specified.
- Value label: Space Grotesk, `12px`, muted gray, `4px` top margin; weight, line-height, and tracking are not specified.

### Metric card

- Cobalt `4%` fill; `1.5px` cobalt-20% border; `14px` radius; `1.5rem 1.6rem` padding.
- Value: Space Grotesk `700`, `46px/1`, cobalt; tracking not specified.
- Label: Inter `600`, `16px`, near-black, `10px` top margin; line-height and tracking not specified.
- Description: Inter, `13px/1.5`, muted gray, `8px` top margin; weight and tracking not specified.
- Change: Space Grotesk `600`, `12.5px`, `10px` top margin; positive or negative state color only.
- Specimen content: `$24.3M`, “Annual Revenue,” “Recurring, across every region,” and `↑ +18% YoY`.

### Stat cell

- Cobalt `4%` fill; `1px` cobalt-20% border; `12px` radius; `1.4rem 1.5rem` padding.
- Number: Space Grotesk `700`, `32px/1`, cobalt.
- Name: Inter `500`, `14px`, near-black, `8px` top margin.
- Context: `12px`, light gray, `8px` top margin and padding, separated by a `1px` top border.
- Specimens: `94% / Retention / Net revenue` and `3.4× / Multiple / On capital`.

### Bar ranking

- Row: flex, centered, `14px` gap, `14px` bottom margin.
- Label: Inter `500`, `14px`, near-black, fixed width `90px`.
- Track: flexible width, `28px` high, cobalt `8%`, `6px` radius.
- Fill: cobalt, same `6px` radius.
- Value: Space Grotesk `600`, `15px`, cobalt, `48px` width, right-aligned.
- Specimen rankings and fill widths: Cobalt `88` / `88%`; Restraint `64` / `64%`; Density `46` / `46%`.

### Step timeline — “Fade Into Future”

- Four equal flex steps with `20px` gaps.
- Circle: `56 × 56px`, circular, cobalt with cream numeral; Space Grotesk `700`, `21px`.
- Circle opacity decreases by step: `1`, `0.85`, `0.7`, `0.55`.
- Title: Space Grotesk `600`, `17px`, near-black, `14px` top margin.
- Description: `13px/1.5`, muted gray, `6px` top margin; weight and tracking not specified.
- Sequence:
  1. **Survey** — Establish the cream baseline.
  2. **Tint** — Lift cards with `4%` cobalt.
  3. **Accent** — One cobalt carries emphasis.
  4. **Deliver** — Executive-ready briefing.

### Highlight callout

- Cobalt `8%` fill; `4px` cobalt left border; `12px` radius; `1.3rem 1.5rem` padding.
- Quote: Space Grotesk `500`, `22px/1.4`, near-black.
- Citation: Space Grotesk `500`, `12px`, `0.04em`, uppercase, muted gray, `14px` top margin.
- Content: “One accent does all the emphasis work.” — “THE SYSTEM PRINCIPLE.”

### CTA pill

- Cobalt fill, cream text; `0.9rem 2.2rem` padding; `100px` radius.
- Space Grotesk `600`, `15px`; line-height and tracking not specified.
- Drop shadows are prohibited except for one soft cobalt CTA hover. Its blur, spread, offset, opacity, and transition are not specified.

### Rule card

- Cobalt `4%` fill; `1.5px` cobalt-20% border; `14px` radius; `36px` padding.
- H4: Space Grotesk `600`, `24px`, `-0.01em`, near-black; `8px` bottom margin.
- Accent line: `48 × 4px`, `2px` radius, `22px` bottom margin.
- List item: `14px/1.6`, muted gray, `24px` left padding, `13px` bottom margin.
- Marker: Space Grotesk `700`; cobalt `+` for Do and light-gray `×` for Don’t.

## 6. Frame Compositions

All composition frames use a true `16:9` aspect ratio, container-relative `cqw` sizing, a `1px` cobalt-20% border, and a `10px` radius. Frame content is positioned inset `0` at z-index `3`. Bottom progress bars are `0.3cqw` high at z-index `5`; individual widths are not specified as a shared rule.

### A. Cover — Identity · Diagonal Accent · Left

- Reuses the `36%` clipped right panel; polygon begins at `30%`; z-index `1`.
- Dot field: top `14%`, right `9%`, three columns, `1cqw` gap, `0.25` opacity, z-index `2`; dots are `0.7cqw` square and circular.
- Body: vertically centered with `0 5cqw` padding.
- Accent line: `5 × 0.3cqw`, `0.2cqw` radius, `2cqw` bottom margin.
- Metadata: Space Grotesk `400`, `1cqw`, `0.05em`, light gray, `1.4cqw` bottom margin.
- Heading: Space Grotesk `700`, `5.6cqw/1.06`, `-0.02em`, near-black, max width `58cqw`.
- Subtitle: `1.4cqw/1.5`, muted gray, `1.8cqw` top margin, max width `48cqw`; weight and tracking not specified.
- Specimen: “FRAME SYSTEM · VOL. 01,” “Restraint, with one commitment,” and “Cream, cobalt, and soft tinted cards.”

### B. Dashboard — Data · 3-Up Metrics · The Dense Frame

- Body padding: `5.5cqw 5cqw`.
- Header: space-between, top-aligned, `2.4cqw` bottom margin.
- Eyebrow: Space Grotesk `600`, `0.95cqw`, `0.08em`, uppercase, cobalt.
- Heading: Space Grotesk `600`, `3.2cqw`, `-0.02em`, near-black, `0.6cqw` top margin; line-height not specified.
- Period pill: cobalt `8%`, `0.4cqw 1cqw` padding, `100px` radius; Space Grotesk `500`, `0.9cqw`.
- Three-column grid: `1.4cqw` gap.
- Cards: cobalt `4%`, `0.1cqw` cobalt-20% border, `1cqw` radius, `1.6cqw` padding.
- Card number: Space Grotesk `700`, `3.4cqw/1`, cobalt.
- Card name: Inter `600`, `1.1cqw`, near-black, `0.6cqw` top margin.
- Card description: `0.92cqw/1.45`, muted gray, `0.5cqw` top margin; weight and tracking not specified.
- Content: Q3 At a Glance / FY2026; `$24M` Revenue, `94%` Retention, `+18%` Growth.

### C. Bar Ranking — Data · Cobalt Fills · Left

- Body padding: `5.5cqw 5cqw`.
- Eyebrow: Space Grotesk `600`, `0.95cqw`, `0.08em`, uppercase, cobalt, `0.6cqw` bottom margin.
- Heading: Space Grotesk `600`, `3cqw`, `-0.02em`, near-black, `2.4cqw` bottom margin; line-height not specified.
- Row: flex, centered, `1.4cqw` gap and bottom margin.
- Label: Inter `500`, `1.2cqw`, near-black, `14cqw` width.
- Track: flexible width, `2.6cqw` high, cobalt `8%`, `0.6cqw` radius.
- Fill: cobalt with `0.6cqw` radius.
- Value: Space Grotesk `600`, `1.4cqw`, cobalt, `5cqw` width, right-aligned.
- Content: Expansion `88`, New Logos `62`, Pricing `41`.

### D. Pull Quote — Quote · Concentric Rings · Centered

- Rings: centered at `50% / 50%` with `translate(-50%, -50%)`; `34 × 34cqw`; `0.1cqw` cobalt-20% border; circular; `0.4` opacity; z-index `1`.
- Inner ring: `20%` inset, `0.1cqw` cobalt-20% border, circular.
- Body: centered in both axes, centered text, `0 9cqw` padding.
- Quote mark: Space Grotesk `700`, `9cqw/0.5`, cobalt, `0.15` opacity, `4cqw` height.
- Quote: Space Grotesk `500`, `3.4cqw/1.35`, near-black, `1cqw` top margin.
- Citation: Space Grotesk `500`, `1cqw`, `0.04em`, uppercase, muted gray, `2cqw` top margin.
- Content: “Quiet is the most expensive thing on the page.” — “MANAGING PARTNER.”

## 7. Explicit Do / Don’t Rules

### Do

1. Start every frame on warm cream; cobalt carries every accent.
2. Set headlines near-black with `-0.02em` tracking; set eyebrows cobalt, uppercase, with `0.08em` tracking.
3. Render every numeral in cobalt Space Grotesk `600–700`.
4. Use tinted cards: `4%` fill, `20%` border, `10–14px` radius; keep them soft, never outlined.
5. Use `100px` pill chrome; set body copy in Inter `400`, muted gray, with `1.6` line-height.

### Don’t

1. No second accent color; no cobalt headlines.
2. No drop shadows, except the one soft cobalt CTA hover.
3. No square corners; no opaque cobalt borders.
4. No font substitutes; no uppercase body copy.
5. Do not fill space with heavier borders—add substance, not noise.

## 8. Unspecified Values

Unless listed above, the page does not specify:

- A general spacing scale beyond the individual values exposed in the specimen.
- Default paragraph font size outside explicitly styled examples/components.
- Exact line-heights or tracking for styles marked “not specified.”
- Shadow parameters for the permitted CTA hover.
- Animation behavior, durations, easing, or entrance/exit transitions.
- Additional breakpoints or layouts below `1100px`.
- Accessibility contrast targets, focus-ring styling, or disabled states.
- Image, icon, or illustration rules beyond the geometric dot, ring, diagonal-panel, and progress-line motifs shown.
