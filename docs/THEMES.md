# Themes

Cali-Tai supports three presentation modes:

| Mode | Feel |
| --- | --- |
| `light` | Soft mist greens (default) |
| `dark` | Low-light jade surfaces |
| `sepia` | Warm paper / reading tone |

## How it works

1. `js/theme-boot.js` sets `document.documentElement.dataset.theme` immediately.
2. CSS variables under `[data-theme="…"]` in `css/styles.css` drive colors, surfaces, and hero scrims.
3. `js/app.js` renders the header toggle and persists the choice in `cali-tai-prefs-v1`.

Raster illustrations use `filter: var(--illust-filter)` so they shift gently with each theme. SVG marks resolve `var(--jade)`, `var(--ink)`, etc.

## Accessibility notes

- `color-scheme` is set to `dark` only for dark mode so native form controls match.
- Theme buttons expose `aria-pressed`.
- Respect `prefers-reduced-motion` (animations disabled in CSS).
