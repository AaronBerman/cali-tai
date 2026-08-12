# Cali-Tai

Local static website for **calisthenics + tai chi** practice plans.

- Beginner / Intermediate / Skilled pages
- 3-day and 5-day workout plans
- Safety notes with links to public health sources and form videos
- Progress tracking in browser `localStorage`
- Light / dark / sepia themes
- **Standalone martial track:** MCMAP + Krav Maga (separate plans & progress)

Educational only — not medical advice.

## Quick start

No build step and no dependencies.

1. Open `index.html` in a browser, **or**
2. Serve the folder locally:

```powershell
cd C:\Users\an80s\Projects\cali-tai
npx --yes serve .
```

Then open the URL printed in the terminal (often `http://localhost:3000`).

A local server is useful if your browser restricts some `file://` behaviors.

## Project layout

```
cali-tai/
├── index.html              Home
├── beginner.html           Beginner plans
├── intermediate.html       Intermediate plans
├── skilled.html            Skilled plans
├── progress.html           Local progress
├── martial.html            Martial hub (MCMAP + Krav Maga)
├── mcmap-*.html / krav-*.html
├── martial-progress.html
├── css/styles.css          Themes + layout
├── js/
│   ├── theme-boot.js       Applies theme before paint
│   ├── data.js             Cali-Tai exercises, plans, sources
│   ├── martial-data.js     MCMAP + Krav Maga tracks
│   └── app.js              Shared UI (detects `data-system`)
├── img/                    Illustrations + SVG marks
├── docs/                   Extra documentation
└── README.md               This file
```

More detail: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) · [docs/MARTIAL.md](docs/MARTIAL.md)

## Themes

Header toggle: **light**, **dark**, **sepia**.

Preference is stored in `localStorage` under `cali-tai-prefs-v1` (`theme` field).  
`js/theme-boot.js` runs in `<head>` so the correct theme loads without a flash.

See [docs/THEMES.md](docs/THEMES.md).

## Progress (local only)

Stored in `localStorage` key `cali-tai-progress-v1`:

- checked moves
- completed session days
- streak / history derived in the UI

Export or clear from **Progress**. Clearing browser site data also deletes progress.

## Safety & sources

Plans and cues are framed around public guidance from organizations such as:

- U.S. HHS Physical Activity Guidelines
- CDC adult activity guidance
- ACSM resistance-training updates
- NCCIH / Mayo Clinic tai chi summaries
- NHS practice videos for form references

Full list and usage notes: [docs/SAFETY.md](docs/SAFETY.md)

## Illustrations

Raster art lives in `img/` (hero, levels, progress). Theme-aware SVG marks use CSS variables.

See [docs/ILLUSTRATIONS.md](docs/ILLUSTRATIONS.md).

## Editing content

Workout copy, prescriptions, and external links live in `js/data.js`.  
After edits, refresh the browser — nothing to compile.

## License note

Site code is yours to use locally. Linked third-party articles/videos remain owned by their publishers; follow their terms when sharing or embedding.
