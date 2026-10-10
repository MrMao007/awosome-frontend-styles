# SambaNova — Observed Homepage Design Paradigm

Source: [SambaNova](https://sambanova.ai/). Category: AI Products. Capture: 2026-10-10T14:09:11.736Z.

This is an independent observational study, not an official design system. Values below come from a rendered desktop viewport of 1440 × 1000; unknown measurements are not invented. Generated pages preserve the common NOVA Chinese brand, copy, numbers, filters, and modal behavior.

## Visual Direction

An infrastructure-stage hero: crisp white navigation above a full-width dark-violet photographic-render backdrop, a lightweight left-aligned white heading near the lower edge and an array of translucent spectral panels receding toward a bright central vanishing point. A thin magenta-to-violet announcement strip and a gold Contact Us control set the color hierarchy. The preset interprets this infrastructure-stage composition using original CSS artwork and the common NOVA content.

## Observed Palette

| Role | Measured value | Evidence / application |
|---|---|---|
| White navigation | `rgb(255, 255, 255)` | Header and nav DIV computed backgrounds, #fff. |
| Hero text | `rgb(242, 242, 242)` | H1 computed foreground, #f2f2f2. |
| Gold action | `rgb(253, 185, 19)` | Contact Us computed background and 2px border, #fdb913. |
| Action label | `rgb(37, 14, 54)` | Contact Us foreground, #250e36; not a cookie-only guess. |
| Lower headings | `rgb(34, 35, 38)` | H2 computed foreground, #222326. |
| Navigation/support text | `rgb(48, 48, 48)` | Header and body computed text, #303030. |
| Backdrop dark sample | `rgb(14, 10, 25)` | Source image pixel (10,180), #0e0a19; background is image-based, not a declared solid token. |
| Backdrop violet sample | `rgb(130, 59, 213)` | Source image pixel (600,570), #823bd5; original decorative glow approximation. |
| Spectral blue sample | `rgb(43, 40, 142)` | Source pixel (900,300), #2b288e; image sample rather than a UI action color. |
| Teal plane sample | `rgb(13, 40, 47)` | Source pixel (1100,650), #0d282f; no unobserved spectrum endpoints invented. Interpretation / adaptation value; not independently established as an exact source token. |
| Announcement sample | `rgb(132, 38, 118)` | Source pixel (500,20), #842676; sample of the visible top gradient. Interpretation / adaptation value; not independently established as an exact source token. |
| Light surface | `rgb(251, 251, 251)` | Measured colors list, #fbfbfb; thin #e2e2e5 lower separators are an adaptation, not measured source rules. |

## Sampled Typography

| Source element | Computed family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Chip performance that pays for itself. | "Funnel Display", sans-serif | 70px / 72.8px | 300 | normal |
| Inference is going to be the center of the AI economy | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Ready for premium inference? | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Size your AI data center deployment | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Faster Returns for Neoclouds: SN50 Delivers ROI in 6 Months | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Ready for premium inference? | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Size your AI data center deployment | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |
| Faster Returns for Neoclouds: SN50 Delivers ROI in 6 Months | "Funnel Display", sans-serif | 32.04px / 38.448px | 500 | normal |

Computed type belongs to the sampled text element. Loaded fonts and browser link defaults are not automatically brand tokens. Original font files are not redistributed.

## Layout and Lightweight Hierarchy

The source H1 is Funnel Display 70/72.8px with computed weight 300 and normal tracking, x=24, y=491, width=1392, height=146. Its broad element box is not the ink width of the two short English lines. The image-based hero DIV begins at y=126, is 650px tall, and has 60px 24px padding. Navigation is an 88px white bar below a 38px announcement. NOVA preserves the left-lower title placement and lightweight display, but uses 64px/1.28 Chinese type, an empty 18px gradient band and a taller hero to fit both unchanged NOVA actions. These localized dimensions are not source measurements.

## Components and Gold Actions

The actual Contact Us action is 121 by 52px, 10px rounded, with 2px gold border, 11.52px 16.38px padding, and Inter 16.02/24.9912px at weight 500. This header action provides the gold control recipe for NOVA's existing hero and final actions; the source hero itself does not show a CTA. Lower H2s use 32.04/38.448px at weight 500. Apply the restrained white-card content style with violet numbering and dark readable text to the existing metrics and features. Do not treat Source Sans Pro cookie typography or the consent card as the brand's display system.

## Graphics and Responsive Adaptation

The evidence explicitly identifies sambanova-hp-banner.jpg as the source background image. It shows thin translucent vertical planes in perspective, violet light to the left and a bright central seam. Do not download or copy that source artwork. Original CSS constructs nine empty decorative panels with changing widths, vertical heights and measured-spectrum edge colors, alongside a purple radial glow. The dimensions, perspective and glow blur are disclosed approximations. No hardware claims, logo, benchmarks or customer imagery are copied. On mobile hide only decorative panels and preserve the hero's dark stage with stacked real content. The source cookie banner obscures lower content, so no precise lower-fold composition is inferred.

## Adaptation to the NOVA Example

The whole NOVA Chinese body and script remain byte-identical. The AI-infrastructure visual study uses a light-weight left-aligned title, white navigation, gold rectangular controls and original spectral planes. The example uses an independently observed desktop reference and adapts its visual hierarchy to NOVA rather than reproducing the source content. Lower sections are explicitly adapted to the immutable NOVA content.

The source H1 and lower H2s declare Funnel Display; body/navigation use Inter. The NOVA display deliberately substitutes the open-source Inter family at weight 300; the runnable example requests Inter and Noto Sans SC as web fonts and supplies system fallbacks. Inter is directly observed for source body, but is not the measured source headline face. Noto Sans SC supplies Chinese glyphs. Source H1 computed weight is 300 even though loaded font evidence only reports 400/500/700 Funnel Display entries; no separate 300 source file is claimed. Source Sans Pro belongs to the cookie interface and is not used. No proprietary font binaries are redistributed.

## Example Font Configuration

The example uses display: 'Inter','Noto Sans SC',sans-serif; body: 'Inter','Noto Sans SC',sans-serif. Open-source replacement families are requested from Google Fonts, with the CSS font stack as fallback if the network is unavailable. No font binaries are bundled. Observed brand fonts are evidence, not an instruction to redistribute proprietary assets. Check each selected font's own license before embedding it.

## Boundaries

The original homepage content, proprietary logos, business metrics and account functionality are not copied into the generated NOVA example. Marketing claims are not independently verified. Exact responsive breakpoints, unpublished brand rules, and unspecified motion values are not inferred from the desktop sample. The source observations above are retained for provenance; the raw capture bundle is not included in this skill.

## Reusable Style Contract

This contract is prescriptive guidance for the independent example, not an official brand standard. Source measurements remain labeled above; token and responsive choices below belong to this adaptation. Reuse the visual system on the user's own content.

Best for: Infrastructure launches, technical showcases, ambitious enterprise technology campaigns. Avoid when: Cozy personal utilities or understated document-first pages are required.

### Signature Atoms

- Dark stage #0e0a19, #f2f2f2 hero text, gold #fdb913 action with #250e36 labels
- Inter with Noto Sans SC; adapted hero 64px, weight 300, line-height 1.28, tracking -.025em
- White navigation at 88px minimum height beneath an 18px #842676 to #250e36 gradient edge
- 10px-radius actions with 52px minimum height and 2px borders; violet #823bd5 outline partner
- Original translucent planes use #823bd5, #2b288e, #0d282f, and #fdb913 edges around a bright seam
- Lower white and #fbfbfb cards use #222326 headings, #303030 copy, and 1px #e2e2e5 adaptation rules

### Do

- Use Inter and Noto Sans SC; preserve lightweight display text rather than substituting a heavy technical face.
- Place the headline low and left on a dark-violet full-width stage beneath crisp white navigation.
- Create original receding translucent planes and restrained violet light around a bright central seam.
- Use gold low-radius actions with dark labels; reserve spectral colors for the stage and small accents.
- Return to restrained white content cards below, and hide decorative planes on mobile without removing readable content.

### Don't

- Do not copy SambaNova logos, trademarks, banner artwork, hardware imagery, benchmarks, or marketing copy.
- Do not replace lightweight lower-left type with an oversized centered bold headline.
- Do not turn the spectral stage into a generic rounded dashboard screenshot.
- Do not use gold as a large background wash or rainbow colors as competing primary actions.
- Do not adopt cookie typography or infer precise lower-fold composition from obscured source content.

### Implementation Tokens

These are the example's CSS variables (including later root overrides), not a claim that every value is an exact source brand token. Preserve them when reproducing this preset; consult the example for section-specific overrides, effects and responsive rules.

```css
:root {
  --bg: #ffffff;
  --ink: #222326;
  --muted: #303030;
  --accent: #fdb913;
  --on-accent: #250e36;
  --surface: #fbfbfb;
  --line: #e2e2e5;
  --radius: 10px;
  --button-radius: 10px;
  --weight: 500;
  --display: 'Inter','Noto Sans SC',sans-serif;
  --body: 'Inter','Noto Sans SC',sans-serif;
}
```

Example: [HTML](../examples/sambanova.html) and [preview](../examples/sambanova.png). [Style selection index](STYLE_INDEX.md).
