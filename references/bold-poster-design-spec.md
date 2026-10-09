# Bold Poster — Design Specification

**Source:** [HyperFrames — Bold Poster](https://www.hyperframes.dev/design/bold-poster)
**Template descriptor:** “Shrikhand tilted display + red accent on cream — magazine cover energy.”
**Specimen direction:** “A populist editorial poster system — printed, loud, unmistakable.”
**Named working principle:** **ATOMS SACRED · COMPOSITION FREE**

## 1. Visual Direction

Build a high-impact editorial poster system inspired by vintage Italian sports magazines. The visual voice is printed rather than digital: oversized Shrikhand display type, classical serif body copy, one saturated tomato-red accent, warm brown-black ink, and square ruled grids.

The system alternates between:

- spacious statement frames with strong negative space;
- dense, double-ruled data frames;
- asymmetric tilted display lines;
- flat Paper or Off-White fields and full Red panels.

Keep the treatment direct and limited: **four colors, no more; one Red; square corners; heavy rules; one permitted stacked text shadow.**

## 2. Palette

| Token | Hex | Role |
|---|---:|---|
| Paper | `#FFFFFF` | Fresh newsprint canvas; default body and frame background; text on Red panels. |
| Ink | `#1C1410` | Warm brown-black for primary text, rules, borders, and shadow color. |
| Red | `#D8000F` | The only accent: numerals, selected display lines, eyebrows, rules, progress bars, markers, and full panels. |
| Off-White | `#F5F2EF` | Alternating striped sections/panels; used behind Typography and Frame Compositions in the specimen. |

Implementation-only backdrop outside the four-color poster palette: `#0C0A08` on the specimen’s root HTML.

### Stacked shadow

The only allowed shadow is the three-step off-register Ink shadow used on Paper text over Red:

```css
text-shadow:
  2px 2px 0 rgba(28, 20, 16, 0.25),
  4px 4px 0 rgba(28, 20, 16, 0.20),
  6px 6px 0 rgba(28, 20, 16, 0.15);
```

Responsive frame versions scale the offsets to `.15cqw`, `.3cqw`, and `.45cqw` with the same opacities.

## 3. Typography

### Font roles and loaded faces

| Role | Family | Exposed weights | Required use |
|---|---|---|---|
| Display | `Shrikhand`, fallback `cursive` | `400` | Hero lines, numerals, section titles, statements. |
| Body | `Libre Baskerville`, fallback `serif` | Loaded: `400`, `700`, and italic `400`; prescribed body token: `400` | Paragraphs, descriptions, citations. |
| Labels | `Space Grotesk`, fallback `sans-serif` | Loaded: `400`, `600` | Uppercase eyebrows, labels, metadata, counters, tags. |

Do not substitute fonts or exchange their roles. The CSS requests weight `700` for em-dash and × markers, although the supplied Space Grotesk import exposes only `400` and `600`.

### Core type tokens

| Token | Specification |
|---|---|
| `.disp` | Shrikhand `400`, Ink. Shared size and line-height are not specified. |
| `.label` | Space Grotesk `600`, uppercase, `11px`, `2px` tracking, Red. Line-height is not specified. |
| `STAT-BIG` | Shrikhand `400`, Red, rotated `−6°`. The type specimen demonstrates `110px`; no universal production size is specified. |
| `SECTION-HEADER` | Shrikhand `400`, Ink. The type specimen demonstrates `60px`; section headings use `52px / 1`. |
| `BODY` | Libre Baskerville `400`, `16px / 1.75` in the specimen, maximum width `640px`, Ink. The token states leading `1.75`; no universal body size is specified outside the demonstration. |
| `LABEL` | Space Grotesk `600`, uppercase, tracked `2–3px`. The specimen demonstrates `13px` with `3px` tracking. |

### Shared section typography

- Section index: Space Grotesk `600`, uppercase, `12px`, `3px` tracking, Red.
- Section heading: Shrikhand `400`, `52px / 1`, Ink.
- Section-end metadata: Space Grotesk `600`, uppercase, `11px`, `2px` tracking, Ink.
- Type-token label: Space Grotesk `600`, uppercase, `11px`, `2px` tracking, Red.
- Type metadata: Libre Baskerville `12px / 1.5`, Ink at `.65` opacity.

### Cover typography

- Metadata: Libre Baskerville `14px`; its label sits `8px` above the description.
- Three-line hero: Shrikhand `400`, line-height `.84`.
  - Line 1: `clamp(60px, 12vw, 150px)`, Ink.
  - Line 2: `clamp(72px, 14vw, 180px)`, Red, rotated `−4°`, left transform origin, `4px 0` margin.
  - Line 3: `clamp(56px, 11vw, 140px)`, Ink, rotated `+2°`, left transform origin.
- Tagline: Libre Baskerville `clamp(15px, 1.5vw, 19px) / 1.6`, maximum width `560px`.
- Counter: Space Grotesk `600`, uppercase, `11px`, `2px` tracking, `.5` opacity.

## 4. Structural Rules

### Global structure

- Reset every element to `margin: 0`, `padding: 0`, and `box-sizing: border-box`.
- Default body: Paper background, Ink text, Libre Baskerville, antialiased rendering.
- Generic section: `100px 64px` padding and `position: relative`.
- Corners are square; no radius is defined or permitted.
- Typography and Frame Compositions sections use Off-White; the other specimen sections inherit Paper.

### Section header

- Flex row aligned on the baseline.
- `20px` gap.
- `52px` bottom margin.
- `18px` bottom padding.
- `3px` Ink bottom rule.
- Flexible spacer separates the title from right-aligned metadata.

### Cover

- Minimum height: `100vh`.
- Padding: `7vh 64px`.
- Flex column, vertically centered.
- Metadata bottom margin: `24px`.
- Tagline top margin: `36px`.
- Red progress rule: bottom-left, `5px` high, `16%` wide.
- Counter: bottom `20px`, right `32px`.

### Component layout grid

- Twelve equal columns.
- `36px` gap.
- `48px` bottom margin.
- Supported spans shown in the specimen: `4`, `5`, `6`, `7`, and `8` columns.

### Frame gallery

- Two equal columns with a `48px` gap.
- At viewport widths `≤1100px`, collapse to one column.
- Frame label: flex row, baseline-aligned, `14px` gap, `16px` bottom margin; Space Grotesk `600`, uppercase, `11px`, `2px` tracking, `.55` opacity.
- Every frame is true `16:9`, `container-type: size`, `position: relative`, clipped with `overflow: hidden`, and outlined by a `1.5px` Ink border.
- Frame body is absolutely positioned at `inset: 0`, `z-index: 2`.
- Frame progress rule is bottom-left, Red, `.5cqw` high, `z-index: 5`; width is assigned by composition.
- Paper, Red, and Ink frame background variants exist; the four demonstrated compositions use Paper or Red.

### Responsive behavior

At `max-width: 1100px` only:

- frame gallery changes from two columns to one;
- palette changes from four columns to two.

No other breakpoint is specified.

## 5. Components

### Palette swatches

- Four-column grid, zero gap, `3px` Ink outer border.
- Each swatch has a `1.5px` right border; remove it from the last swatch.
- Color chip: `150px` high with a `1.5px` Ink bottom border.
- Metadata padding: `18px 20px`.
- Name: Shrikhand `24px`; weight and line-height are not separately specified.
- Hex: Space Grotesk `11px`, `.06em` tracking, `.6` opacity, `8px` top margin.
- Role: Libre Baskerville `12px / 1.5`, `10px` top margin.

### Financial grid

- Three equal columns.
- `3px` Ink outer border and `1.5px` Ink cell borders.
- Cell padding: `22px 20px`.
- Number: Shrikhand `44px / 1`, Red; weight is not separately specified.
- Label: Space Grotesk `600`, uppercase, `10px`, `2px` tracking, `10px` top margin.
- Description: Libre Baskerville `12px / 1.55`, `8px` top margin.

### Red-leftbar editorial card

- No enclosing outline.
- `4px` Red left rule and `18px` left padding.
- Title: Shrikhand `30px / 1.1`.
- Body: Libre Baskerville `14px / 1.6`, `10px` top margin.
- List: no native markers; `14px` top margin.
- Item: Space Grotesk `400`, `12px / 1.5`, `16px` left padding, `6px` bottom margin.
- Marker: absolutely positioned Red em dash, requested weight `700`.
- Cap the list at three bullets.

### Red panel

- Red background, Paper text, `48px` padding.
- Statement: Shrikhand `48px / 1.15` with the sole permitted stacked shadow.
- Citation: Libre Baskerville `14px`, `.85` opacity, `24px` top margin; line-height is not specified.

### Tilted statement and tags

- Demonstrated statement: Shrikhand `80px`, Red, rotated `−5°`, left transform origin.
- System rule for statement display: rotate between `−5°` and `−6°`.
- Tag: inline-block Space Grotesk `600`, uppercase, `11px`, `3px` tracking, Red, with no border or padding.
- Demonstrated tags are arranged in a flex row with an `18px` gap.

### Guidance panel

- Two equal columns, zero gap, `3px` Ink outer border.
- Card padding: `38px`.
- Positive card has a `1.5px` Ink right border.
- Heading: Shrikhand `34px`, `22px` bottom margin.
- Item: Libre Baskerville `14px / 1.55`, `24px` left padding, `13px` bottom margin.
- Positive marker: Red em dash, weight `700`.
- Negative marker: Ink multiplication sign, weight `700`, `.4` opacity.

### Footer

- `48px 64px` padding and a `3px` Ink top rule.
- Flex row, vertically centered, content spaced between.
- Left title: Shrikhand `30px`.
- Right principle: Space Grotesk `600`, uppercase, `11px`, `2px` tracking, `.55` opacity.

## 6. Frame Compositions

### A. Hero Stack — Identity · 3-Line Tilted · Left

- Paper frame; content vertically centered with `0 5cqw` padding.
- Eyebrow: Red Space Grotesk `600`, uppercase, `1cqw`, `.25cqw` tracking, `1.6cqw` bottom margin.
- Hero line-height: `.84`.
- Line 1: `11cqw`, Ink.
- Line 2: `13cqw`, Red, rotated `−4°`, left transform origin, `.3cqw 0` margin.
- Line 3: `10cqw`, Ink, rotated `+2°`, left transform origin.
- Progress width: `16%`.

### B. Hero Stat — Statement · Red Panel · Centered

- Red frame; content centered on both axes and text centered.
- Label: Paper Space Grotesk `600`, uppercase, `1.1cqw`, `.3cqw` tracking, `.8` opacity, `1cqw` bottom margin.
- Number: Paper Shrikhand `400`, `30cqw / .82`, rotated `−6°`, with the responsive three-step stacked shadow.
- Supporting text: Paper Libre Baskerville `1.6cqw`, `.9` opacity, `2cqw` top margin; line-height is not specified.
- Progress width: `48%`.

### C. Financial Grid — Data · Double Border · The Dense Frame

- Paper frame body: `6cqw 5cqw` padding, vertical flex layout.
- Eyebrow: Red Space Grotesk `600`, uppercase, `.95cqw`, `.25cqw` tracking, `.8cqw` bottom margin.
- Heading: Shrikhand `4.4cqw`, `2cqw` bottom margin; weight and line-height are not separately specified.
- Three-column grid grows to fill remaining space.
- Grid outer border: `.3cqw`; cell border: `.15cqw`; cell padding: `1.6cqw`.
- Number: Red Shrikhand `4cqw / 1`.
- Label: Space Grotesk `600`, uppercase, `.8cqw`, `.15cqw` tracking, `.8cqw` top margin.
- Description: Libre Baskerville `.95cqw / 1.5`, `.6cqw` top margin.
- Progress width: `64%`.

### D. Pull Quote — Quote · Red Panel · Stacked Shadow

- Red frame; content vertically centered with `0 7cqw` padding.
- Quote: Paper Shrikhand `400`, `5.2cqw / 1.15`, with the responsive stacked shadow.
- Citation: Paper Libre Baskerville `1.3cqw`, `.85` opacity, `2.4cqw` top margin; line-height is not specified.
- Progress width: `82%`.

## 7. Explicit Do / Don’t Rules

### Do

1. Stack hero titles in three Shrikhand lines; make at least one line tilted and one line Red.
2. Make every numeral Red Shrikhand; tilt statement display from `−5°` to `−6°`.
3. Set eyebrows in Red Space Grotesk `600`, uppercase, with `2–3px` tracking.
4. Build data grids with `3px` outer and `1.5px` inner double borders.
5. Use Red em-dash bullets, capped at three; set serif body leading to `1.75`.

### Don’t

1. Do not add a second accent color or rounded corners; corners are square only.
2. Do not use drop shadows; the stacked text shadow on Red is the only shadow.
3. Do not substitute fonts, set body copy in Shrikhand, or set labels in Baskerville.
4. Do not use default disc bullets or leave Red statement display untilted.
5. Do not crowd a statement frame; reserve negative space.

## 8. Values Not Specified

The page does **not** specify:

- a universal base body font size or body line-height;
- a universal size or line-height for `.disp`;
- a universal production size for `STAT-BIG`, `SECTION-HEADER`, `BODY`, or `LABEL` beyond the shown specimens and component-specific rules;
- global spacing tokens beyond the explicit per-section and per-component measurements above;
- a general border-radius value, because rounded corners are prohibited;
- animation, transition duration, easing, or other motion behavior;
- frame-safe-area dimensions;
- additional responsive breakpoints below or above `1100px`;
- a default progress-rule width for arbitrary frames; the four examples explicitly use `16%`, `48%`, `64%`, and `82%`;
- line-height for cover metadata, counters, tags, citations, or several component labels where none is declared;
- accessibility contrast targets or minimum text-size rules.
