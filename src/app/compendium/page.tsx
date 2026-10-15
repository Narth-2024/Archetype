import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { CompendiumTabs } from "@/components/CompendiumTabs";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: `${t("pages.compendium.title")} · ${t("app.name")}`,
  };
}

export default async function CompendiumPage() {
  const { t, data: d, locale } = await getI18n();
  const classNames: Record<string, string> = Object.fromEntries(
    d.CLASSES.map((c) => [c.id, c.name]),
  );
  const bySchool = d.SCHOOLS.map((school) => ({
    school,
    spells: d.SPELLS.filter((s) => s.school === school.name)
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name))
      .map((s) => ({
        id: s.id,
        name: s.name,
        level: s.level,
        school: s.school,
        castingTime: s.castingTime,
        range: s.range,
        components: s.components,
        duration: s.duration,
        concentration: s.concentration,
        ritual: s.ritual,
        description: s.description,
        classes: s.classes,
      })),
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

      <CompendiumTabs
        spells={bySchool}
        weapons={d.WEAPONS}
        armors={d.ARMORS}
        classNames={classNames}
        locale={locale}
      />
    </main>
  );
}
