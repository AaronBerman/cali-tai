# Martial arts track (standalone)

MCMAP and Krav Maga live beside Cali-Tai but **do not share workout plans or progress**.

## Entry points

| Page | Role |
| --- | --- |
| `martial.html` | Hub + planner |
| `mcmap-beginner.html` / `intermediate` / `skilled` | MCMAP levels |
| `krav-beginner.html` / `intermediate` / `skilled` | Krav Maga levels |
| `martial-progress.html` | Local progress (per system) |

## Data & storage

| Item | Value |
| --- | --- |
| Content | `js/martial-data.js` → `window.MARTIAL.mcmap` / `window.MARTIAL.krav` |
| Progress key | `martial-progress-v1` (nested by system) |
| Plan prefs | `martial-prefs-v1` |
| Theme prefs | still `cali-tai-prefs-v1` (shared UI theme) |

Cali-Tai continues to use `cali-tai-progress-v1`.

## Safety intent

- Solo pages emphasize stance, footwork, shadow/air striking, conditioning, and mindset review.
- Contact skills, throws, chokes, breakfalls, weapons, and sparring are labeled **instructor-only** with links to official/reputable sources.
- MCMAP pages are **not** a Marine Corps belt course.
- Krav Maga pages are **not** an IKMF/KMG grading program.

## Sources (high level)

- USMC MCO 1500.59 / MCO 1500.59A and DVIDS / Marines TV MCMAP materials
- IKMF curriculum overviews and official P1 topic lists
- MaxKravMaga P1 syllabus notes; reputable school articles/videos for stance and strikes
- CDC / Mayo / ACE for general conditioning safety

Exact URLs live in `js/martial-data.js`.
