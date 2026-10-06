<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat&logo=tailwindcss&logoColor=black" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat" alt="License: MIT" />
</p>

# Archetype

**Archetype** is a guided character builder and digital sheet for **Dungeons & Dragons 5th Edition**.
It walks you through character creation in nine steps, calculates every number for you, and keeps
your sheets ready for the table — in **English, Spanish, and Portuguese**.

**Live demo:** https://archetype-blush.vercel.app

## Why Archetype

- **Beginner-friendly by design** — a step-by-step wizard with inline warnings explains what each
  choice means instead of sending you back to the rulebook.
- **Every value derived, nothing hard-coded** — ability modifiers, proficiency bonus, AC, HP,
  saves, attacks, spell slots, and spellcasting DC are computed at render time by a pure,
  tested rules engine (`src/domain/calc.ts`, 54 unit checks). Change a level, race, or score and
  everything recalculates instantly.
- **Transparent formulas** — each derived value shows its own breakdown
  (e.g. `AC = 16 chain mail + 2 shield`).
- **SRD content included** — 12 classes, 39 subclasses, 10 races with 8 subraces, 38 feats,
  13 backgrounds, 30 weapons, 13 armors, and 214 spells (levels 0–9) with a public spell
  compendium grouped by school.

## Features

### Character builder

- **Nine guided steps:** Identity → Abilities → Features → Skills → Equipment → Combat →
  Attacks → Spells → Review, with autosave after every change.
- **Three ability-score modes:** Point Buy (27 points with standard costs), Standard Array, and
  Manual — plus a **balanced suggestion engine** that exhaustively searches the budget for your
  class, including racial bonuses.
- **Multiclassing** with combined proficiency bonus, saves, HP, and spell-slot tables
  (full/half casters merged, pact slots tracked separately); multiclass prerequisites are shown
  as warnings, never blockers.
- **Budget counters** for saves, skills, languages, and tools per source (class / background /
  race) — you may exceed them, but the counter turns red.
- **Subraces, subclasses, and feats** — subclass features unlock by level, and feat
  prerequisites (ability, proficiency, spellcasting) are validated with clear warnings while
  ability-score and HP bonuses feed the calculations.
- **214 SRD spells** with preparation, known spells, and combined spell slots.

### Digital sheet

- **Combat quick bar** — AC, HP, initiative, and speed always visible; damage/healing in one tap
  and long rest.
- **Full sheet cards** — abilities, combat, skills, saves, proficiencies, inventory, attacks,
  spells, features, and notes.
- **Character photo** — upload a picture (compressed client-side to ≤ 512 px JPEG) directly from
  the sheet.
- **Lore editor** — write your character's backstory on the sheet or import a plain-text file
  (`.txt`, `.md`, `.csv`).
- **Units toggle** — distances and weights switch between **metric (m, kg)** and
  **imperial (ft, lb)**; spell text follows the selected locale.
- **Light & dark themes** applied before first paint (no flash), persisted per browser.

### Localization

- Full UI and game content in **English, Spanish, and Portuguese** — switchable from any page
  and persisted in a cookie.
- Game catalogs (classes, spells, gear, schools, …) are maintained per locale under
  `src/data/{pt,en,es}` and resolved at request time through a typed bundle.

### Accounts

- Registration and login with password hashing via Node's built-in `scrypt`; sessions live in an
  httpOnly cookie for 30 days (stored as a SHA-256 hash).
- Every sheet is scoped to its owner — users only ever see, edit, or delete their own characters.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** — classic book-inspired design: parchment & ink palette, serif headings
  (EB Garamond), flat surfaces, no gradients
- **libSQL** via `@libsql/client` — a local SQLite file (`data/dev.db`) with zero setup in
  development; **[Turso](https://turso.tech)** (free tier) in production through
  `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000 — schema is created automatically
```

| Script               | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Development server                   |
| `npm run build`      | Production build                     |
| `npm run start`      | Serve the production build           |
| `npm run lint`       | ESLint                               |
| `npm run typecheck`  | `tsc --noEmit`                       |
| `npm test`           | Rules-engine test suite (54 checks)  |
| `npm run db:migrate` | Migrate local data to Turso          |

## Project structure

```
src/
  data/                    # data-driven catalogs, one bundle per locale
    pt/ en/ es/            # identical structure; typed as DataBundle
    index.ts               # bundleFor(locale) + legacy PT exports
  lib/
    i18n/                  # locale/units cookies, t(), formatters, string dicts
    db.ts                  # libSQL client (singleton, auto-init)
    schema.ts              # DDL applied on first access
    characters.ts          # async CRUD repository
    auth.ts                # scrypt hashing, sessions
  domain/                  # pure rules engine (no persistence of derived values)
    types.ts               # CharacterDoc (schemaVersion 3)
    calc.ts                # AC, HP, saves, attacks, slots, DC…
    optimize.ts            # point-buy search + class-weighted suggestions
    migrate.ts             # v1 → v2 (classes[]) → v3 (subrace/subclass/feats)
    units.ts               # feet ↔ meters, pounds ↔ kg
  app/
    page.tsx               # dashboard
    compendium/            # schools & spells (public)
    character/new          # creates a draft and opens the wizard
    character/[id]         # digital sheet
    character/[id]/edit    # wizard (same route for editing)
    api/                   # characters, auth, health, prefs
  components/
    wizard/                # context (autosave) + 9 steps
    sheet/                 # sheet, combat quick bar, photo, lore
    ui.tsx                 # Card, Field, Toggle, Formula…
```

## Data model

Accounts and sessions use the `users` table (`password_hash` in the format
`scrypt$salt$hash`) and `sessions` (`token_hash` = SHA-256 of the cookie value, user, and
expiry). Every row in `characters` carries a `user_id`; listing and reads always filter by it.

Each character is a **JSON document** (`CharacterDoc`, `schemaVersion: 3`) stored in the
`data` column. v1 and v2 documents are migrated transparently on read. Fields fall into three
groups:

1. **User input** — `identity.classes` (multiclass), `identity.abilityMode`, `abilities.base`,
   `combat.hpCurrent`, inventory, photo, lore…
2. **Choices resolved from data** — racial bonuses, proficiencies, spell slots for the
   class set.
3. **Computed at render time** — modifiers, AC, proficiency bonus, save/skill/attack bonuses,
   max HP, spell DC (`src/domain/calc.ts`).

Nothing derived is ever persisted: raising a level or changing a score recalculates everything.

## API

Session routes (public):

| Method | Route                 | Description                  |
| ------ | --------------------- | ---------------------------- |
| POST   | `/api/auth/register`  | Create account and sign in   |
| POST   | `/api/auth/login`     | Sign in                      |
| POST   | `/api/auth/logout`    | Sign out                     |
| POST   | `/api/prefs`          | Persist locale/units cookies |

Character routes (require a session → `401` without a valid cookie; owner-scoped → `404` for
another account's sheets):

| Method | Route                  | Description                                  |
| ------ | ---------------------- | -------------------------------------------- |
| GET    | `/api/characters`      | List the current user's sheets               |
| POST   | `/api/characters`      | Create a character (accepts a document)      |
| GET    | `/api/characters/:id`  | Full document                                |
| PUT    | `/api/characters/:id`  | Save a full document                         |
| PATCH  | `/api/characters/:id`  | Update HP, photo, or lore                    |
| DELETE | `/api/characters/:id`  | Delete                                       |

Error responses return `{ "error": "…" }`, localized from the `fs_lang` cookie.

## Deployment (free tier: Vercel + Turso)

Serverless instances have no persistent disk, so the database runs on **Turso** and the site on
**Vercel** — both have generous free plans.

1. **Database (Turso)** — create a database and grab the credentials:

   ```bash
   turso db create archetype
   turso db show archetype --url        # TURSO_DATABASE_URL
   turso db tokens create archetype     # TURSO_AUTH_TOKEN
   ```

2. **Migrate local data** (optional, if you already have sheets):

   ```bash
   TURSO_DATABASE_URL="libsql://..." TURSO_AUTH_TOKEN="..." npm run db:migrate
   ```

3. **Site (Vercel)** — import the repository at <https://vercel.com/new> (the Next.js preset is
   detected automatically). Add `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` under
   *Project Settings → Environment Variables*, then deploy. The DDL is applied automatically on
   the first request.

Without the Turso variables (local development), the app uses `data/dev.db`.

## Roadmap

- Turn-tracked combat actions and conditions on the sheet
- Character import/export (JSON)
- Search and filters in the compendium

## Contributing

Bug reports, fixes, new SRD content, and translations are welcome — see
[CONTRIBUTING.md](CONTRIBUTING.md) for the setup, the checks that must pass
(`typecheck`, `lint`, `build`, `test`), and the translation guidelines.

## License

The source code is released under the [MIT License](LICENSE).

Game content derived from the D&D 5e SRD remains subject to Wizards of the Coast's SRD
terms — see below.

## Notes

Game content is derived from the Dungeons & Dragons 5th Edition System Reference Document
(SRD). D&D is a trademark of Wizards of the Coast; this project is not affiliated with or
endorsed by Wizards of the Coast.
