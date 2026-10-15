"use client";

import { useMemo, useState } from "react";
import type { ArmorDef, GearDef, WeaponDef } from "@/data";
import { Badge, Card, TextInput, type CardAccent } from "@/components/ui";
import { useData, useFormat, useT } from "@/lib/i18n/client";

type GearProps =
  | { kind: "weapons"; items: WeaponDef[] }
  | { kind: "armors"; items: ArmorDef[] }
  | { kind: "gear"; items: GearDef[] };

type GearGroup = { key: string; title: string; accent: CardAccent; items: unknown[] };

const WEAPON_ORDER = ["simples", "marcial"] as const;
const ARMOR_ORDER = ["leve", "media", "pesada", "escudo"] as const;
const GEAR_ORDER = ["foco", "mochila", "ferramenta", "instrumento", "municao", "geral"] as const;

const WEAPON_ACCENTS: Record<string, CardAccent> = { simples: "orange", marcial: "rose" };
const ARMOR_ACCENTS: Record<string, CardAccent> = {
  leve: "emerald",
  media: "sky",
  pesada: "violet",
  escudo: "amber",
};
const GEAR_ACCENTS: Record<string, CardAccent> = {
  foco: "violet",
  mochila: "emerald",
  ferramenta: "sky",
  instrumento: "rose",
  municao: "orange",
  geral: "amber",
};

const CASTER_LABEL: Record<string, string> = {
  arcano: "pages.compendium.casterArcane",
  divino: "pages.compendium.casterDivine",
  druidico: "pages.compendium.casterDruidic",
  universal: "pages.compendium.casterUniversal",
};

export function GearBrowser(props: GearProps) {
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const isWeapons = props.kind === "weapons";
  const isGear = props.kind === "gear";

  const filtered = useMemo(() => {
    if (!q) return props.items;
    return props.items.filter((item) => {
      if (item.name.toLowerCase().includes(q)) return true;
      if (item.category.toLowerCase().includes(q)) return true;
      if (isGear) {
        const g = item as GearDef;
        if (g.description.toLowerCase().includes(q)) return true;
        return false;
      }
      if (!isWeapons) return false;
      const w = item as WeaponDef;
      return `${w.damage} ${w.damageType} ${w.properties.join(" ")}`
        .toLowerCase()
        .includes(q);
    });
  }, [props, q, isWeapons, isGear]);

  const groups = useMemo<GearGroup[]>(() => {
    const order = isGear ? GEAR_ORDER : isWeapons ? WEAPON_ORDER : ARMOR_ORDER;
    const byCategory = new Map<string, unknown[]>();
    for (const item of filtered) {
      const bucket = byCategory.get(item.category) ?? [];
      bucket.push(item);
      byCategory.set(item.category, bucket);
    }
    const keys = [
      ...order.filter((key) => byCategory.has(key)),
      ...[...byCategory.keys()].filter((key) => !(order as readonly string[]).includes(key)),
    ];
    const titleFor = (key: string): string => {
      if (isGear) {
        const map: Record<string, string> = {
          foco: "pages.compendium.gearGroupFoco",
          mochila: "pages.compendium.gearGroupMochila",
          ferramenta: "pages.compendium.gearGroupFerramenta",
          instrumento: "pages.compendium.gearGroupInstrumento",
          municao: "pages.compendium.gearGroupMunicao",
          geral: "pages.compendium.gearGroupGeral",
        };
        return map[key] ? t(map[key]) : key;
      }
      if (isWeapons) {
        return key === "simples"
          ? t("pages.compendium.weaponSimple")
          : t("pages.compendium.weaponMartial");
      }
      return key === "leve"
        ? t("pages.compendium.armorLight")
        : key === "media"
          ? t("pages.compendium.armorMedium")
          : key === "pesada"
            ? t("pages.compendium.armorHeavy")
            : key === "escudo"
              ? t("pages.compendium.armorShield")
              : key;
    };
    const accents = isGear ? GEAR_ACCENTS : isWeapons ? WEAPON_ACCENTS : ARMOR_ACCENTS;
    return keys.map((key) => ({
      key,
      title: titleFor(key),
      accent: accents[key] ?? "amber",
      items: byCategory.get(key) ?? [],
    }));
  }, [filtered, isWeapons, isGear, t]);

  const total = filtered.length;
  const searchLabel = isGear
    ? t("pages.compendium.searchGear")
    : isWeapons
      ? t("pages.compendium.searchWeapons")
      : t("pages.compendium.searchArmors");
  const countLine = isGear
    ? t(total === 1 ? "pages.compendium.gearCountOne" : "pages.compendium.gearCountMany", {
        count: fmt.num(total),
      })
    : isWeapons
      ? t(
          total === 1
            ? "pages.compendium.weaponCountOne"
            : "pages.compendium.weaponCountMany",
          { count: fmt.num(total) },
        )
      : t(
          total === 1
            ? "pages.compendium.armorCountOne"
            : "pages.compendium.armorCountMany",
          { count: fmt.num(total) },
        );

  function weaponRow(w: WeaponDef) {
    const damage = [w.damage, w.damageType].filter((p) => p && p !== "—").join(" ");
    return (
      <details className="group rounded-md border border-zinc-800 px-3 py-2 transition-colors duration-150 hover:border-zinc-600">
        <summary className="flex cursor-pointer flex-wrap items-center gap-2 text-sm">
          <span className="text-zinc-200 transition-colors group-hover:text-amber-400">
            {w.name}
          </span>
          {damage && <Badge color="amber">{damage}</Badge>}
          <Badge color="blue">
            {w.kind === "corpo"
              ? t("pages.compendium.kindMelee")
              : t("pages.compendium.kindRanged")}
          </Badge>
        </summary>
        <dl className="mt-2 grid gap-x-3 gap-y-1 text-xs sm:grid-cols-[auto_1fr]">
          <dt className="text-zinc-500">{t("pages.compendium.gearWeight")}</dt>
          <dd className="text-zinc-300">{fmt.weight(w.weight)}</dd>
          {w.range && (
            <>
              <dt className="text-zinc-500">{t("pages.compendium.gearRange")}</dt>
              <dd className="text-zinc-300">{fmt.distanceRange(w.range)}</dd>
            </>
          )}
          <dt className="text-zinc-500">{t("pages.compendium.gearProperties")}</dt>
          <dd className="text-zinc-300">{w.properties.join(", ") || "—"}</dd>
        </dl>
      </details>
    );
  }

  function armorRow(a: ArmorDef) {
    const dex = d.ABILITY_ABBR.dex;
    const acFormula =
      a.dex === "full"
        ? t("pages.compendium.acFull", { ac: a.baseAc, dex })
        : a.dex === "cap2"
          ? t("pages.compendium.acCap2", { ac: a.baseAc, dex })
          : t("pages.compendium.acNone", { ac: a.baseAc });
    return (
      <details className="group rounded-md border border-zinc-800 px-3 py-2 transition-colors duration-150 hover:border-zinc-600">
        <summary className="flex cursor-pointer flex-wrap items-center gap-2 text-sm">
          <span className="text-zinc-200 transition-colors group-hover:text-amber-400">
            {a.name}
          </span>
          <Badge color="amber">{acFormula}</Badge>
        </summary>
        <dl className="mt-2 grid gap-x-3 gap-y-1 text-xs sm:grid-cols-[auto_1fr]">
          <dt className="text-zinc-500">{t("pages.compendium.gearWeight")}</dt>
          <dd className="text-zinc-300">{fmt.weight(a.weight)}</dd>
        </dl>
        {a.strengthReq !== null && (
          <p className="mt-1 text-xs text-zinc-300">
            {t("pages.compendium.gearStrReq", { ab: d.ABILITY_ABBR.str, n: a.strengthReq })}
          </p>
        )}
        {a.stealthDisadvantage && (
          <p className="mt-1 text-xs text-zinc-300">
            {t("pages.compendium.gearStealth")}
          </p>
        )}
      </details>
    );
  }

  function gearRow(g: GearDef) {
    return (
      <details className="group rounded-md border border-zinc-800 px-3 py-2 transition-colors duration-150 hover:border-zinc-600">
        <summary className="flex cursor-pointer flex-wrap items-center gap-2 text-sm">
          <span className="text-zinc-200 transition-colors group-hover:text-amber-400">
            {g.name}
          </span>
          {g.cost !== null && (
            <Badge color="amber">{t("pages.compendium.costValue", { n: g.cost })}</Badge>
          )}
          {g.spellcaster && <Badge color="blue">{t(CASTER_LABEL[g.spellcaster])}</Badge>}
        </summary>
        <p className="mt-2 text-xs text-zinc-400">{g.description}</p>
        <p className="mt-1 text-xs text-zinc-500">
          {t("pages.compendium.gearWeight")}: {fmt.weight(g.weight)}
        </p>
      </details>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="gear-search" className="text-xs text-zinc-500">
            {searchLabel}
          </label>
          <TextInput
            id="gear-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchLabel}
            className="w-72"
          />
        </div>
        <p className="pb-2 text-xs text-zinc-500">{countLine}</p>
      </div>

      {total === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 p-12 text-center">
          <p className="text-zinc-400">{t("wizard.noResults")}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {groups.map((group) => (
            <Card key={group.key} title={group.title} accent={group.accent}>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={(item as WeaponDef | ArmorDef | GearDef).id}>
                    {isGear
                      ? gearRow(item as GearDef)
                      : isWeapons
                        ? weaponRow(item as WeaponDef)
                        : armorRow(item as ArmorDef)}
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
