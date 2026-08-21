# Agent notes

## Layout

- `index.html` and level pages - static site
- `js/data.js` / `js/martial-data.js` - workout copy and sources
- `css/styles.css` - themes
- `docs/` - development, martial, safety, themes

## Commands

No build. Open `index.html`, or from the repo root:

```powershell
npx --yes serve .
```

## Rules

- Educational only. Not medical advice.
- Do not invent stats. Keep public health citations in `js/data.js` and `docs/SAFETY.md`.
- Do not commit secrets or `docs/internal/*` other than `docs/internal/README.md`.
- No home-directory paths in shareable docs.
