# Lunar New Year Countdown

A Next.js (TypeScript) app that counts down to the next Lunar New Year in your chosen country's timezone, then shows a fireworks animation and the first three days of the festival.

## Features

- **Country selection** — Choose a country that celebrates Lunar New Year (China, Vietnam, South Korea, Singapore, and more).
- **Timezone-aware countdown** — Countdown is based on midnight in the selected country's timezone.
- **Weeks remaining** — Displays how many full weeks are left until the next Lunar New Year (above the main countdown).
- **At midnight** — When the countdown reaches zero, a fireworks animation plays.
- **Days 1–3** — After the fireworks, the app shows "First / Second / Third day of Lunar New Year" with 初一 / 初二 / 初三.
- **From day 4** — Shows the countdown to the _next_ Lunar New Year and the weekly count to that date.
- **Light/dark theme** — Toggle with the button in the top-right.

## How to run

```bash
cd lunar-new-year-countdown
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The countdown page is at **[/lunar-new-year-countdown](http://localhost:3000/lunar-new-year-countdown)**; the root `/` redirects there.

Build for production:

```bash
npm run build
npm start
```

## Testing when countdown hits zero

Use URL query parameters on `/lunar-new-year-countdown`:

| URL                                       | What you see                                                                            |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| `/lunar-new-year-countdown?test=midnight` | **10-second countdown** (00:00:00:10 → 0), then **fireworks**, then **First day** view. |
| `?test=day1`                              | First day of Lunar New Year (初一).                                                     |
| `?test=day2`                              | Second day (初二).                                                                      |
| `?test=day3`                              | Third day (初三).                                                                       |

## Project structure

All app code lives under `src/`:

- `src/app/layout.tsx` — Root layout and global metadata.
- `src/app/page.tsx` — Redirects to `/lunar-new-year-countdown`.
- `src/app/lunar-new-year-countdown/` — Countdown page (route: **lunar-new-year-countdown**).
  - `layout.tsx` — Page metadata (title, description, OG).
  - `page.tsx` — Client component: countdown, country selector, fireworks, Day 1–3.
- `src/app/globals.css` — Global styles (theme, layout, fonts).
- `src/lib/lunar.ts` — Data (countries, LNY dates, strings) and pure logic (timezone, getNextLNY, etc.).

Lunar New Year dates are fixed for 2025–2036 (Gregorian). Timezones use IANA names (e.g. `Asia/Shanghai`, `Asia/Ho_Chi_Minh`).

# vanthdev
