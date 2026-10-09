# Awosome Frontend Styles

A portable [Agent Skills](https://agentskills.io/) package for generating polished HTML and React interfaces from ten curated HyperFrames-inspired visual systems.

It works with common coding agents that support `SKILL.md`, including Claude Code, Codex CLI, Cursor, GitHub Copilot, Gemini CLI, Windsurf/Devin, OpenCode, Qoder, and QoderWork.

The skill treats every style as a design system rather than a mood board: exact palettes, typography roles, borders, shadows, geometry, composition patterns, and explicit anti-patterns are preserved during implementation.

![Capsule style example](examples/capsule-smoke.png)

## Included styles

| Style | Best suited for |
|---|---|
| Creative Mode | Creative portfolios and expressive product stories |
| BlockFrame | Maximalist candy neo-brutalism and energetic landing pages |
| Biennale Yellow | Exhibitions, cultural programs, and literary editorial |
| Blue Professional | Consulting, enterprise, finance, and executive dashboards |
| Bold Poster | Campaigns, launches, announcements, and magazine covers |
| Broadside | Manifestos, advocacy, and industrial editorial stories |
| Capsule | Lifestyle, beauty, fashion, wellness, and consumer products |
| Cartesian | Architecture, museums, premium editorial, and research narratives |
| Cobalt Grid | Technical reports, archives, datasets, and catalogues |
| Coral | Product launches, portfolios, event campaigns, and magazine stories |

## Capabilities

- Generates self-contained static HTML pages.
- Generates React pages and components that follow an existing project's conventions.
- Uses an explicit style when requested.
- Recommends a style from the content, audience, and desired tone when none is specified.
- Supports constrained hybrids when explicitly requested.
- Requires responsive and visual verification before delivery when the host provides browser tooling.
- Enforces accessibility basics and each style's explicit Do/Don't rules.

## Install with the universal Skills CLI

Interactive installation:

```bash
npx skills add MrMao007/awosome-frontend-styles
```

Preview the discovered skill without installing:

```bash
npx skills add MrMao007/awosome-frontend-styles --list
```

Install globally for all supported agents detected on the machine:

```bash
npx skills add MrMao007/awosome-frontend-styles --skill awosome-frontend-styles -g
```

Install into selected project-level agents:

```bash
npx skills add MrMao007/awosome-frontend-styles \
  --skill awosome-frontend-styles \
  -a claude-code \
  -a codex \
  -a cursor \
  -a github-copilot \
  -a gemini-cli \
  -a windsurf \
  -a opencode \
  -a qoder
```

Use `--copy -y` for CI, containers, or environments where symlinks are unsuitable.

## Manual installation paths

Clone this repository into a directory named `awosome-frontend-styles` under the host's skill root:

| Agent | Project-level path | User-level path |
|---|---|---|
| Claude Code | `.claude/skills/awosome-frontend-styles/` | `~/.claude/skills/awosome-frontend-styles/` |
| Codex CLI | `.agents/skills/awosome-frontend-styles/` | `~/.agents/skills/awosome-frontend-styles/` |
| Cursor | `.cursor/skills/awosome-frontend-styles/` or `.agents/skills/awosome-frontend-styles/` | `~/.cursor/skills/awosome-frontend-styles/` |
| GitHub Copilot | `.github/skills/awosome-frontend-styles/` or `.agents/skills/awosome-frontend-styles/` | `~/.copilot/skills/awosome-frontend-styles/` |
| Gemini CLI | `.gemini/skills/awosome-frontend-styles/` or `.agents/skills/awosome-frontend-styles/` | `~/.gemini/skills/awosome-frontend-styles/` |
| Windsurf / Devin | `.devin/skills/awosome-frontend-styles/`, `.windsurf/skills/awosome-frontend-styles/`, or `.agents/skills/awosome-frontend-styles/` | `~/.config/devin/skills/awosome-frontend-styles/` |
| OpenCode | `.opencode/skills/awosome-frontend-styles/` or `.agents/skills/awosome-frontend-styles/` | `~/.config/opencode/skills/awosome-frontend-styles/` |
| Qoder | `.qoder/skills/awosome-frontend-styles/` | `~/.qoder/skills/awosome-frontend-styles/` |
| QoderWork | — | `~/.qoderwork/skills/awosome-frontend-styles/` |

Example for QoderWork:

```bash
git clone https://github.com/MrMao007/awosome-frontend-styles.git ~/.qoderwork/skills/awosome-frontend-styles
```

Some hosts require a restart or skill reload after manual installation.

## Usage examples

```text
Create a product landing page in Capsule style as a self-contained HTML file.
```

```text
Restyle this React dashboard using Blue Professional. Keep the existing component architecture.
```

```text
Build an exhibition microsite. Recommend the most suitable bundled style and explain the choice briefly.
```

```text
Create a Coral landing page, borrowing only Cobalt Grid's pixel-stack chart atom.
```

## Repository structure

```text
.
├── SKILL.md
├── references/
│   ├── STYLE_INDEX.md
│   └── *-design-spec.md
├── examples/
│   ├── capsule-smoke.html
│   └── capsule-smoke.png
├── CONTRIBUTING.md
├── LICENSE
└── NOTICE.md
```

`SKILL.md` contains the portable execution workflow. `references/STYLE_INDEX.md` selects the primary style, while each `*-design-spec.md` file contains the detailed visual contract.

## Portability rules

The frontmatter intentionally uses only portable fields: `name`, `description`, and `license`. The skill does not depend on vendor-specific hooks, tool allowlists, filesystem paths, or APIs. Each host may expose different browser and file tools; the workflow adapts to available capabilities.

## Design philosophy

**Atoms sacred, composition free.** Keep each system's palette, typography, geometry, border/shadow language, and constraints fixed while adapting the composition to the user's content.

## Attribution

The design specifications are independently authored summaries derived from publicly accessible HyperFrames design reference pages. HyperFrames and the referenced style names belong to their respective owners. This repository is not affiliated with or endorsed by HyperFrames.

Font names and font files remain subject to their respective licenses. This repository does not redistribute font binaries.

## License

MIT. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
