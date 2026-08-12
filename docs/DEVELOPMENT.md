# Development

Cali-Tai is a static multi-page site. Edit HTML/CSS/JS and refresh.

## Runtime scripts

| File | Role |
| --- | --- |
| `js/theme-boot.js` | Reads prefs and sets `data-theme` before CSS paints |
| `js/data.js` | Exercises, level prescriptions, plans, sources, how-tos |
| `js/app.js` | Plan rendering, local progress, theme toggle UI |

Every page should include, in order:

1. `theme-boot.js` in `<head>`
2. `css/styles.css`
3. `data.js` then `app.js` before `</body>`

## Storage keys

| Key | Contents |
| --- | --- |
| `cali-tai-prefs-v1` | `theme`, last level, selected plan day counts |
| `cali-tai-progress-v1` | move checkmarks, day completions, session dates |

Bump the version suffix if you change the schema in a breaking way.

## Extending a plan

1. Add or update an exercise in `CALI_TAI.exercises`.
2. Add a dose string under the level’s `prescriptions`.
3. Reference the exercise id inside `CALI_TAI.plans[level][3|5]`.
4. Attach `howToIds` that exist in `CALI_TAI.howTos` (prefer a video; otherwise a clear instructional article).

Keep strength days recoverable: 3-day plans should leave rest between hard sessions; 5-day plans should keep lighter tai-chi-focused days.

## Adding a page

Copy an existing level page, set `data-level-page`, update nav links, and ensure the header includes:

```html
<div class="theme-toggle" data-theme-toggle></div>
```

## Quality checks

- Confirm external links still resolve (especially NIH / CDC / NHS).
- Toggle light / dark / sepia on home, a level page, and progress.
- Mark a day complete and verify streak/history update on `progress.html`.
- Export JSON, then clear progress, then confirm empty state.
