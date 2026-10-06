import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, type CardAccent } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: `${t("pages.compendium.title")} · ${t("app.name")}`,
  };
}

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

function ordinal(n: number): string {
  const rem = n % 100;
  if (rem >= 11 && rem <= 13) return `${n}th`;
  if (n % 10 === 1) return `${n}st`;
  if (n % 10 === 2) return `${n}nd`;
  if (n % 10 === 3) return `${n}rd`;
  return `${n}th`;
}

export default async function CompendiumPage() {
  const { t, data: d, fmt, locale } = await getI18n();
  const classNames: Record<string, string> = Object.fromEntries(
    d.CLASSES.map((c) => [c.id, c.name]),
  );
  const bySchool = d.SCHOOLS.map((school) => ({
    school,
    spells: d.SPELLS.filter((s) => s.school === school.name).sort(
      (a, b) => a.level - b.level || a.name.localeCompare(b.name),
    ),
  }));

  return (
    <main className="page-plain mx-auto w-full max-w-5xl px-6 py-12">
      <header className="mb-8 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="title-gold text-3xl font-bold">
            {t("pages.compendium.title")}
          </h1>
          <p className="mt-1 text-zinc-400">
            {t("pages.compendium.subtitle")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
          >
            {t("pages.nav.characters")}
          </Link>
          <LangSelect />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-col gap-5">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-zinc-100">
            {t("pages.compendium.schools")}
          </h2>
          <div className="flex flex-col gap-4">
            {bySchool.map(({ school, spells }) => (
              <Card key={school.id} title={school.name} accent={SCHOOL_ACCENT[school.id]}>
                <p className="text-sm text-zinc-400">{school.description}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {t("pages.compendium.examples", {
                    examples: school.examples.join(", "),
                  })}
                </p>
                <p className="mt-3 text-xs uppercase text-zinc-500">
                  {t(
                    spells.length === 1
                      ? "pages.compendium.spellCountOne"
                      : "pages.compendium.spellCountMany",
                    { count: fmt.num(spells.length), school: school.name },
                  )}
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
                            {s.level === 0
                              ? t("pages.compendium.cantrip")
                              : t("pages.compendium.levelBadge", {
                                  level:
                                    locale === "en"
                                      ? ordinal(s.level)
                                      : fmt.num(s.level),
                                })}
                          </Badge>
                        </summary>
                        <p className="mt-2 text-xs text-zinc-500">
                          {s.castingTime} · {fmt.distanceText(s.range)} · {s.components} ·{" "}
                          {s.duration}
                          {s.concentration
                            ? ` · ${t("pages.compendium.concentration")}`
                            : ""}
                          {s.ritual ? ` · ${t("pages.compendium.ritual")}` : ""}
                        </p>
                        <p className="mt-1 text-xs text-zinc-400">
                          {fmt.distanceText(s.description)}
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          {s.classes.map((c) => classNames[c] ?? c).join(", ")}
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
