# Contributing to Archetype

Thanks for your interest! Bug reports, fixes, new SRD content, and translations are all
welcome. This document explains how to get productive quickly.

## Getting started

1. Fork the repository and clone your fork.
2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev        # http://localhost:3000
   ```

A local SQLite file (`data/dev.db`) is created automatically — no database setup is needed
in development.

## Before opening a pull request

All checks must pass:

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm run build        # production build
npm test             # rules-engine test suite (54 checks)
```

`npm test` compiles the pure domain layer (`src/domain/`) and runs the checks for AC, HP,
saves, attacks, spell slots, migrations, unit conversions, and the ability-score optimizer.

## Conventions

- **No comments in the code** — keep names and structure self-explanatory.
- Use `next/link` for internal navigation; in event handlers use `useRouter()` instead of
  `window.location.href`.
- Derived values live in `src/domain/calc.ts` as pure functions that receive the localized
  data bundle as their last parameter (`d = PT_BUNDLE` by default). Never persist a
  calculated value — everything is recomputed at render time.
- User-visible text lives in `src/lib/i18n/strings/{common,wizard,sheet,pages}.ts`. Every
  new key needs an entry for **pt, en, and es**.
- Game catalogs live in `src/data/{pt,en,es}/` with identical structure per locale. The
  compiler enforces bundle compatibility through `DataBundle`.

## Contributing translations

The quickest way to help:

- **UI strings**: add or refine keys in `src/lib/i18n/strings/*.ts`, keeping all three
  locales in sync.
- **Game content**: translate catalog files under `src/data/<locale>/`, leaving ids and
  structural values untouched (enums, numbers, dice, class/skill/ability references).
- Two markers are matched by the rules engine and must stay consistent with
  `src/data/<locale>/labels.ts`:
  - language lists must contain `your choice` / `a elegir` (the engine filters on
    `labels.choiceFragment` for PT `à escolha`);
  - weapon properties must contain `Thrown` / `Lanzamiento` where PT has `Arremesso`
    (`labels.thrown`).

You can verify everything with `npm run typecheck && npm test`.

## Pull requests

- Use conventional prefixes: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`.
- Describe **what** changed and **why**; include screenshots for UI changes.
- Keep PRs focused — one topic per pull request.

## Reporting bugs

Open an issue with:

- steps to reproduce;
- expected vs. actual behavior;
- browser and locale (PT/EN/ES);
- whether it happened on the sheet, the wizard, the compendium, or the API.
