# Biennale Yellow — Design Specification

Source: [HyperFrames Biennale Yellow](https://www.hyperframes.dev/design/biennale-yellow)

## Visual Direction

Biennale Yellow is a literary-editorial frame system inspired by biennale catalogues. Its visual language combines warm parchment, indigo ink, solar-yellow atmospheric blooms, restrained hairline rules, and elegant serif typography.

The system is defined by:

- Warm parchment grounds, never white
- Instrument Serif display typography
- Archivo body copy
- JetBrains Mono for dates and numerals
- A single indigo color for all text and rules
- `1px` hairline separators
- Atmospheric radial blooms instead of shadows
- Sparse, measured compositions

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Paper | `#E9E5DB` | Primary warm parchment ground. |
| Ink | `#1B2566` | The single color for text, rules, and structural marks. |
| Sun | `#F1EE2E` | Panels, blooms, and tile underprints. |
| Ember | `#E26B4A` | Subordinate counter-bloom only. |
| Paper Deep | `#DCD6C4` | Secondary parchment band. |
| Sun Soft | `#F8F39B` | Middle stop in solar-yellow blooms. |
| Haze | `#F0DA7C` | Outer stop in solar-yellow blooms. |

### Sun Bloom

The Sun Bloom is a radial atmospheric layer built from Sun, Sun Soft, and Haze. It is the system’s primary source of visual depth. Ember may appear only as a subordinate counter-bloom.

## Typography

### Display

- Typeface: Instrument Serif
- Weight: `400`
- Line-height: `0.86`
- Tracking: `-0.018em`
- Purpose: Primary headlines and large editorial statements

### Display Italic

- Typeface: Instrument Serif Italic
- Character: Slow-reading, literary emphasis
- Purpose: Selected words, quotations, and reflective statements

### Medium Numerals

- Typeface: Instrument Serif
- Weight: `400`
- Purpose: Hero statistics and jumbo section numerals

### Body

- Typeface: Archivo
- Weight: `400`
- Line-height: `1.5`
- Color: Ink
- Purpose: Paragraphs and explanatory text

Archivo carries every paragraph as the quiet sans-serif counterpart to the serif display.

### Micro Labels

- Typeface: Archivo
- Weight: `600`
- Case: Uppercase
- Tracking: `0.18em`
- Purpose: Programme labels, section identifiers, and compact metadata

### Monospaced Information

- Typeface: JetBrains Mono
- Purpose: Dates, numerals, durations, and the bottom-right page number

The source does not specify exact pixel sizes for the typography scale.

## Structural and Depth Rules

- Use `1px` Ink hairlines for every separator.
- Do not use drop shadows.
- Do not use rounded corners.
- Do not use bordered cards.
- Do not use borders thicker than `1px`.
- Do not invert the design onto an Ink background.
- Create depth with atmospheric blooms and parchment bands rather than elevation effects.
- Use a flooded yellow panel for the strongest poster-like color statement.

## Components

### Ledger Rows

Ledger rows combine four typographic roles:

- Date: JetBrains Mono
- Title: Instrument Serif
- Venue: Archivo
- Duration: JetBrains Mono

Rows are separated with `1px` Ink hairlines. This is the system’s dense information pattern.

### Strand List

Use numbered strands or categories arranged with restrained editorial spacing. Numerals may act as structural anchors.

### Chart Bars

Use simple flat bars with Ink labels and restrained geometry. Charts remain integrated with the editorial grid rather than becoming independent cards.

### Yellow Panel

A full or substantial Sun-colored panel creates the system’s strongest color statement. Use it for poster moments rather than routine content.

### Atmospheric Bloom

Use a Sun Bloom as the primary atmospheric layer. An Ember counter-bloom may be added sparingly for secondary depth.

## Frame Compositions

The reference uses true `16:9` frame compositions.

### Cover

- Purpose: Identity
- Treatment: Sun Bloom with a vertical date rail
- Typography: Instrument Serif headline with selective italic emphasis
- Ground: Warm Paper
- Metadata: Compact volume and page information

### Chapter Divider

- Purpose: Section introduction
- Treatment: Jumbo numeral with a vertical rail
- Composition: Sparse, measured, and strongly hierarchical

### Ledger

- Purpose: Catalogue or programme information
- Treatment: Dense hairline-separated rows
- Character: The system’s densest frame
- Typical content: Dates, titles, venues, and durations

### Manifesto

- Purpose: Quotation or editorial statement
- Treatment: Centered bloom with italic serif copy
- Composition: Quiet, spacious, and contemplative

## Frame Rules

### Do

- Start with warm parchment.
- Add at least one Sun Bloom to create atmosphere.
- Set every line—display, body, label, and mono—in Ink.
- Create hierarchy through size and type role, not color changes.
- Use Instrument Serif 400 with tight line-height and negative tracking for display typography.
- Make every separator a `1px` Ink hairline.
- Flood a yellow panel when a strong poster moment is needed.
- Reserve JetBrains Mono for dates, numerals, durations, and the bottom-right page number.
- Keep compositions sparse and measured.

### Don’t

- Do not use drop shadows.
- Do not use rounded corners.
- Do not use bordered cards.
- Do not introduce a second text color.
- Do not use bold Instrument Serif.
- Do not use borders thicker than `1px`.
- Do not use inverted Ink grounds.
- Do not use monospaced type for body copy or headlines.
- Do not substitute the specified typefaces.
- Do not crowd the canvas; restraint is the source of elegance.

## Working Principle

**Atoms sacred, composition free.** Preserve the parchment ground, Ink-only typography, solar blooms, exact type roles, and hairline-rule system while adapting each composition to its editorial purpose.
