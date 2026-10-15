"use client";

import { useMemo, useState } from "react";
import { Badge, Card, TextInput, type CardAccent } from "@/components/ui";
import { useFormat, useT } from "@/lib/i18n/client";

type SpellLite = {
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  description: string;
  classes: string[];
};

export type SchoolGroup = {
  school: { id: string; name: string; description: string; examples: string[] };
  spells: SpellLite[];
};

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

export function SpellBrowser({
  groups,
  classNames,
  locale,
}: {
  groups: SchoolGroup[];
  classNames: Record<string, string>;
  locale: string;
}) {
  const t = useT();
  const fmt = useFormat();
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("");

  const q = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    return groups
      .map(({ school, spells }) => ({
        school,
        spells: spells.filter((s) => {
          if (q && !s.name.toLowerCase().includes(q) && !s.description.toLowerCase().includes(q))
            return false;
          if (levelFilter !== "") {
            const lf = Number(levelFilter);
            if (s.level !== lf) return false;
          }
          return true;
        }),
      }))
      .filter((g) => g.spells.length > 0);
  }, [groups, q, levelFilter]);

  const totalFiltered = filteredGroups.reduce((a, g) => a + g.spells.length, 0);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="spell-search" className="text-xs text-zinc-500">
            {t("pages.compendium.searchSpells")}
          </label>
          <TextInput
            id="spell-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("pages.compendium.searchSpells")}
            className="w-72"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="spell-level" className="text-xs text-zinc-500">
            {t("pages.compendium.filterLevel")}
          </label>
          <select
            id="spell-level"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-amber-600"
          >
            <option value="">{t("pages.compendium.allLevels")}</option>
            <option value="0">{t("pages.compendium.cantrip")}</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((lv) => (
              <option key={lv} value={String(lv)}>
                {locale === "en" ? ordinal(lv) : fmt.num(lv)}
              </option>
            ))}
          </select>
        </div>
        <p className="pb-2 text-xs text-zinc-500">
          {t("pages.compendium.spellCountOne", {
            count: fmt.num(totalFiltered),
            school: "",
          }).replace(/\s*·?\s*$/, "")}
        </p>
      </div>

      {totalFiltered === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 p-12 text-center">
          <p className="text-zinc-400">{t("wizard.noResults")}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredGroups.map(({ school, spells }) => (
            <Card
              key={school.id}
              title={school.name}
              accent={SCHOOL_ACCENT[school.id]}
            >
              <p className="text-sm text-zinc-400">{school.description}</p>
              <p className="mt-2 text-xs text-zinc-500">
                {t("pages.compendium.examples", {
                  examples: school.examples.join(", "),
                })}
              </p>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
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
                        {s.castingTime} · {fmt.distanceText(s.range)} ·{" "}
                        {s.components} · {s.duration}
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
      )}
    </div>
  );
}
