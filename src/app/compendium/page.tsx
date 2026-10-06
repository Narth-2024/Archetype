import Link from "next/link";
import { Badge, Card, type CardAccent } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CLASSES, SCHOOLS, SPELLS } from "@/data";
import { ftText } from "@/domain/units";

export const metadata = {
  title: "Compêndio · Archetype",
};

const CLASS_NAME: Record<string, string> = Object.fromEntries(
  CLASSES.map((c) => [c.id, c.name]),
);

const SCHOOL_ACCENT: Record<string, CardAccent> = {
  abjuracao: "sky",
  conjuracao: "emerald",
  adivinhacao: "cyan",
  encantamento: "rose",
  evocacao: "orange",
  illusao: "violet",
  necromancia: "teal",
  transmutacao: "amber",
};

export default function CompendiumPage() {
  const bySchool = SCHOOLS.map((school) => ({
    school,
    spells: SPELLS.filter((s) => s.school === school.name).sort(
      (a, b) => a.level - b.level || a.name.localeCompare(b.name),
    ),
  }));

  return (
    <main className="page-plain mx-auto w-full max-w-5xl px-6 py-12">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="title-gold text-3xl font-bold">Compêndio</h1>
          <p className="mt-1 text-zinc-400">
            Escolas de magia e magias do SRD, sem vínculo com fichas.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            Personagens
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-col gap-5">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-100">
            Escolas de magia
          </h2>
          <div className="flex flex-col gap-4">
            {bySchool.map(({ school, spells }) => (
              <Card key={school.id} title={school.name} accent={SCHOOL_ACCENT[school.id]}>
                <p className="text-sm text-zinc-400">{school.description}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  Exemplos: {school.examples.join(", ")}
                </p>
                <p className="mt-3 text-xs uppercase text-zinc-500">
                  {spells.length} magia{spells.length === 1 ? "" : "s"} de{" "}
                  {school.name}
                </p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {spells.map((s) => (
                    <li key={s.id}>
                      <details className="group rounded-md border border-zinc-800 px-3 py-2 transition-colors duration-150 hover:border-zinc-600">
                        <summary className="flex cursor-pointer items-center gap-2 text-sm">
                          <span className="text-zinc-200 transition-colors group-hover:text-amber-400">
                            {s.name}
                          </span>
                          <Badge color={s.level === 0 ? "blue" : "amber"}>
                            {s.level === 0 ? "truque" : `${s.level}º nível`}
                          </Badge>
                        </summary>
                        <p className="mt-2 text-xs text-zinc-500">
                          {s.castingTime} · {ftText(s.range)} · {s.components} ·{" "}
                          {s.duration}
                          {s.concentration ? " · concentração" : ""}
                          {s.ritual ? " · ritual" : ""}
                        </p>
                        <p className="mt-1 text-xs text-zinc-400">
                          {ftText(s.description)}
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          {s.classes.map((c) => CLASS_NAME[c] ?? c).join(", ")}
                        </p>
                      </details>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
