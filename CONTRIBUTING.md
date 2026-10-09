# Contributing

Contributions are welcome for new visual systems, corrections to existing specifications, better style selection, and stronger verification workflows.

## Adding a style

1. Add one English specification under `references/<style-name>-design-spec.md`.
2. Include the source URL and distinguish exact source values from implementation choices.
3. Document the visual direction, palette, typography, geometry, components, compositions, Do/Don’t rules, and unspecified values.
4. Add the style to `references/STYLE_INDEX.md` with use cases, character, and avoid conditions.
5. Add the style name and direct reference link to `SKILL.md`.
6. Keep references one level below `SKILL.md`.

## Quality requirements

- Preserve exact numerical constraints when the source provides them.
- Do not invent missing values; mark them as unspecified.
- Do not mix style atoms unless a hybrid is explicitly documented.
- Keep `SKILL.md` below 500 lines.
- Verify example output at desktop and mobile widths.
- Check for horizontal overflow, clipped content, inaccessible interactions, broken fonts, and console errors.

## Pull requests

Keep each pull request focused on one style or one workflow improvement. Explain what changed, why it improves generation quality, and how you verified it.
