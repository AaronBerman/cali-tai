# Illustrations

## Raster images (`img/`)

| File | Used on | Role |
| --- | --- | --- |
| `hero-practice.png` | Home hero | Full-bleed practice atmosphere |
| `level-beginner.png` | Home card + beginner page | Wall push-up beginner cue |
| `level-intermediate.png` | Home card + intermediate page | Squat / flow blend |
| `level-skilled.png` | Home card + skilled page | Higher-skill practice |
| `progress-path.png` | Progress page | Path / consistency metaphor |

Theme filters are applied in CSS so art stays readable in light, dark, and sepia.

## SVG marks

| File | Meaning |
| --- | --- |
| `icon-strength.svg` | Calisthenics / strength |
| `icon-flow.svg` | Tai chi / flow |
| `icon-progress.svg` | Local tracking |

SVGs use CSS variables (`--jade`, `--ink`, `--sand`, `--illust-bg`) so they track the active theme.

## Replacing art

Keep filenames stable or update HTML `src` attributes. Prefer wide hero art (~16:9) and level art (~4:3). Avoid overlaying text inside the image files—the site supplies typography.
