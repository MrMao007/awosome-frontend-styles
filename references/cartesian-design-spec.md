# Cartesian Design Specification

**Source:** [HyperFrames — Cartesian](https://www.hyperframes.dev/design/cartesian)
**Specimen identity:** “Cartesian — Frame System”
**Named working principle:** **Atoms Sacred · Composition Free**

## 1. Visual Direction

Cartesian is a minimal, sparse, museum-catalog frame system built from warm parchment, black ink, taupe accents, 1px hairlines, and compass-drafted circular geometry. Its stated identity is **“Restraint, drawn in one line.”** The system should feel quiet, considered, editorial, and architectural rather than promotional.

Use serif statements as the visual focus and let sans-serif support copy recede. Preserve generous negative space. Geometry sits behind content, never becoming the subject. The target frame is **1920 × 1080**, and composition specimens use a true **16:9** ratio with `cqw`-scaled typography and spacing.

## 2. Color System

The specimen calls the palette **“Five Stones + Ink.”**

| Token | Hex | Role |
|---|---:|---|
| BG Primary / Primary | `#EDE8E0` | Warm sandstone canvas; default frame background. |
| BG Secondary / Bg 2 | `#E2DBD1` | Deeper stone used for placeholders and portrait fields. |
| Ink / Secondary | `#1A1A1A` | Headlines and the single black rule. |
| Gray | `#5A5A5A` | Body paragraphs and supporting copy. |
| Accent | `#8A8178` | Labels, numerals, metadata, and small text. |
| Line / Tertiary | `#B8B0A4` | Universal 1px hairline, borders, and compass geometry. |

Additional rendered surface value:

- **White overlay:** `rgba(255,255,255,.3)` for tracing-paper cards. No hex equivalent is specified because the value includes alpha.

Color restrictions:

- Use stone and ink only.
- Do not introduce red, blue, green, or another populist accent color.
- Headlines use Ink, not taupe.

## 3. Typography

### 3.1 Font pairing

- **Display and headlines:** Playfair Display, weight **400**; normal and italic faces are loaded.
- **Body and utility text:** Inter, weights **400** and **500**.
- The page’s typography controls identify the pairing as **Playfair Display / Inter**.

### 3.2 Core type specimens

| Role | Family | Weight | Size | Line height | Tracking | Case / notes |
|---|---|---:|---:|---:|---:|---|
| Display | Playfair Display | 400 | `84px` | `1.05` | Not specified | Sentence case; Ink. |
| H2 specimen | Playfair Display | 400 | `52px` | Not specified | Not specified | Slide headline; sentence case; Ink. |
| Body specimen | Inter | 400 | `18px` | `1.6` | Not specified | Warm Gray; maximum width `680px`. |
| Label | Inter | 500 | `13px` | Not specified | `3px` | Uppercase; Accent. |
| Micro / eyebrow | Inter | 400 | `12px` | Not specified | `2px` | Uppercase; Accent. |
| Quote mark | Playfair Display | 400 | `80px` | Not specified | Not specified | Described as “50% taupe”; the rendered declaration uses Line `#B8B0A4` without a separate alpha value. |

### 3.3 Section and component typography

| Element | Exposed specification |
|---|---|
| Section number | Playfair Display, `24px`, Accent; line height and tracking not specified. |
| Section heading | Playfair Display 400, `48px`, line height `1.1`, Ink; tracking not specified. |
| Section utility label | Inter 500, `12px`, `3px` tracking, uppercase, Accent. |
| Swatch name | Playfair Display, `20px`, Ink. |
| Swatch hex | Inter, `12px`, `1px` tracking, Accent. |
| Swatch role | Inter, `12px`, line height `1.5`, Gray. |
| Card title | Playfair Display, `21px`, line height `1.2`, Ink. |
| Card copy | Inter, `13px`, line height `1.6`, Gray. |
| Agenda number | Playfair Display, `24px`, Accent. |
| Agenda title | Playfair Display, `22px`, Ink. |
| Agenda description | Inter, `13px`, Gray. |
| Timeline phase | Inter, `12px`, `2px` tracking, uppercase, Accent. |
| Timeline title | Playfair Display, `19px`, Ink. |
| Timeline copy | Inter, `12px`, line height `1.5`, Gray. |
| Stat value | Playfair Display, `40px`, Ink. |
| Stat label | Inter, `11px`, `2px` tracking, uppercase, Accent. |
| Image-placeholder label | Inter 500, `11px`, `2px` tracking, uppercase, Accent. |
| Team initial | Playfair Display, `34px`, Accent. |
| Team name | Playfair Display, `17px`, Ink. |
| Team role | Inter, `11px`, `2px` tracking, uppercase, Accent. |
| Do/Don’t heading | Playfair Display, `30px`, Ink. |
| Do/Don’t item | Inter, `14px`, line height `1.6`, Gray. |
| Footer title | Playfair Display, `26px`, Ink. |
| Footer principle | Inter 500, `11px`, `2px` tracking, uppercase, Accent. |

Unless listed above, a numeric line height or tracking value is not specified. Component text inherits Inter from the body unless a Playfair family is explicitly declared.

## 4. Structural Rules

### 4.1 Global canvas

- Reset margin and padding to `0`; use `box-sizing: border-box` globally.
- Body background: BG Primary; body text: Gray; body family: Inter.
- Standard section padding: `128px 100px`.
- Section header: baseline-aligned flex row, `24px` gap, `72px` bottom margin.
- Section-header spacer: flexible **1px** Line rule.
- Page footer: `64px 100px` padding with a 1px top rule.

### 4.2 Grid and responsive behavior

- Component grid: **12 columns**, `48px` gaps, `64px` bottom margin.
- Supported spans: 3, 4, 5, 6, and 7 columns.
- Palette: six equal columns with `28px` gaps; each chip is `130px` high.
- Frame gallery: two equal columns with `48px` gaps.
- At `max-width: 1100px`, the frame gallery becomes one column and the palette becomes three columns.
- No other responsive breakpoint or mobile-specific behavior is specified.

### 4.3 Lines, surfaces, and geometry

- The universal separator and outline is a **single 1px taupe line**.
- The one black horizontal accent uses Ink rather than Line.
- Cards use a 1px Line border and the translucent white overlay; they do not use elevation.
- Circular geometry uses `border-radius: 50%`; dashed rings retain the same 1px Line border.
- Layer only **one or two** compass rings per frame, mixing solid and dashed treatments at **20–50%** opacity.
- Never use more than **two geometric decorations per frame**.
- Shadows are prohibited; the showcased count is explicitly **0 shadows**.
- Rounded rectangles are prohibited; circles are the only rounded form.

### 4.4 Full-page cover structure

- Minimum height: `100vh`; content is vertically centered.
- Content inset: `0 8vw`; content maximum width: `72%`.
- Main heading: Playfair Display 400, `clamp(56px, 8vw, 118px)`, line height `1.06`.
- Supporting paragraph: Inter 400, `clamp(16px, 1.5vw, 22px)`, line height `1.6`, maximum width `620px`, top margin `32px`.
- Black rule: `20vw × 1px`, top margin `48px`.
- Main compass ring: `46vw × 46vw`, positioned `-8vw` from the right, vertically centered, opacity `0.5`; inner dashed ring inset `14%`, opacity `0.7`.
- Vertical guide: left `5vw`, full height, `1px`, Line at opacity `0.4`.
- Metadata: left `8vw`, bottom `64px`, `48px` gap.

## 5. Components

### 5.1 Tracing-paper card

- Border: `1px solid` Line.
- Fill: `rgba(255,255,255,.3)`.
- Padding: `36px 28px`.
- Icon medallion: `40px × 40px`, circular, 1px Line border; `24px` bottom margin.
- Principle: the faint overlay must allow the stone canvas to bleed through.

### 5.2 Agenda rows

- Baseline-aligned flex row with a `24px` gap.
- Padding: `18px 0`.
- Bottom border: 1px Line, except the final row.
- Number minimum width: `48px`.
- Description is pushed to the far edge with automatic left margin.

### 5.3 Stats cluster

- One 1px top rule; no card container.
- Flex layout with `40px` gaps and `24px` top padding.
- Showcased values: **5 Stones**, **1px Lines**, **0 Shadows**.

### 5.4 Timeline

- A single 1px top rule with **no nodes**.
- Horizontal flex layout, `40px` gaps, `24px` top padding.
- Each phase occupies equal flexible width.
- Sequence: **Survey → Draft → Frame**.

### 5.5 Image placeholder

- Aspect ratio: **4:3**.
- BG Secondary fill and 1px Line border.
- Two full diagonal hairlines cross at `±30deg`; each is `150%` wide.
- Center label sits on a BG Secondary patch with `6px 10px` padding.

### 5.6 Team frames

- Team row gap: `36px`.
- Portrait placeholder: `110px × 110px`, circular, BG Secondary fill, 1px Line border.
- Text is centered beneath each portrait.

## 6. Frame Compositions

All frames use `aspect-ratio: 16 / 9`, BG Primary, a 1px Line border, clipped overflow, and size-container scaling. Values in `cqw` are percentages of the frame container’s width.

### 6.1 Cover — identity · compass ring · left

- Body padding: `0 7cqw` and vertical centering.
- Label: Inter 500, `1cqw`, `0.3cqw` tracking, uppercase; bottom margin `2cqw`.
- Headline: Playfair Display, `8cqw`, line height `1.04`, maximum width `62cqw`; italic emphasis is allowed.
- Supporting copy: Inter, `1.4cqw`, line height `1.55`, maximum width `46cqw`; top margin `2cqw`.
- Black rule: `18cqw × 0.1cqw`; top margin `3cqw`.
- Ring: `34cqw × 34cqw`, right offset `-6cqw`, opacity `0.5`; inner dashed ring inset `16%`.

### 6.2 Agenda — index · sparse list · left

- Body padding: `0 7cqw`; vertically centered.
- Label: Inter 500, `1cqw`, `0.3cqw` tracking, uppercase; bottom margin `1.6cqw`.
- Heading: Playfair Display, `4cqw`; bottom margin `2.4cqw`; line height and tracking not specified.
- Rows: baseline flex, `2cqw` gap, `1.3cqw 0` padding, `.06cqw` bottom rule.
- Number: Playfair Display, `1.8cqw`, minimum width `4cqw`, Accent.
- Item title: Playfair Display, `2.2cqw`, Ink.
- Content count: exactly four indexed considerations in the specimen.

### 6.3 Pull Quote — quote · compass ring · centered

- Center all content horizontally and vertically; text-align center; horizontal padding `9cqw`.
- Quote mark: Playfair Display, `9cqw`, line height `0.5`, fixed height `5cqw`, Line color.
- Quote: Playfair Display, `4cqw`, line height `1.2`, top margin `1cqw`.
- Attribution: Inter 400, `1cqw`, `0.25cqw` tracking, uppercase; top margin `2.4cqw`.
- Ring: `26cqw × 26cqw`, centered, opacity `0.3`.

### 6.4 Closing Plate — closer · centered ring

- Center all content horizontally and vertically.
- Label: Inter 500, `1cqw`, `0.3cqw` tracking, uppercase; bottom margin `2cqw`.
- Headline: Playfair Display, `7cqw`, line height `1.04`; italic emphasis is allowed.
- Black rule: `14cqw × 0.1cqw`; top margin `2.6cqw`.
- Ring: `40cqw × 40cqw`, centered, opacity `0.28`; inner dashed ring inset `18%`.

## 7. Explicit Do / Don’t Rules

### Do

- Use a single 1px taupe line for every separator — the hairline is the identity.
- Set every Playfair headline at weight 400, in Ink, sentence case.
- Render labels in taupe, uppercase, with `2–3px` tracking.
- Layer one or two compass rings, solid plus dashed, at `20–50%` behind content.
- Let frames breathe with sparse, generous negative space.

### Don’t

- Do not use populist accent colors: no red, blue, or green; use stone and ink only.
- Do not use bold Playfair, taupe headlines, or thick borders.
- Do not use shadows, elevated cards, or rounded rectangles; circles only.
- Do not crowd the frame; packed layouts read as broken.
- Never use more than two geometric decorations per frame.

## 8. Values Not Specified

The source does **not** specify:

- Animation duration, easing, transition behavior, or motion choreography.
- A complete spacing-token scale beyond the explicit per-element values above.
- A general corner-radius token; only circles (`50%`) are allowed and rounded rectangles are prohibited.
- Numeric line height or tracking for type roles explicitly marked “Not specified” above.
- Responsive behavior beyond the single `1100px` breakpoint.
- Alternative themes or dark-mode palette values for the Cartesian specimen.
