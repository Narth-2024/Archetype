"use client";

import { useState } from "react";
import type { ArmorDef, WeaponDef } from "@/data";
import { GearBrowser } from "./GearBrowser";
import { SpellBrowser, type SchoolGroup } from "./SpellBrowser";
import { useT } from "@/lib/i18n/client";

const TABS = ["spells", "weapons", "armors"] as const;
type Tab = (typeof TABS)[number];

const TAB_LABEL: Record<Tab, string> = {
  spells: "pages.compendium.tabSpells",
  weapons: "pages.compendium.tabWeapons",
  armors: "pages.compendium.tabArmors",
};

export function CompendiumTabs({
  spells,
  weapons,
  armors,
  classNames,
  locale,
}: {
  spells: SchoolGroup[];
  weapons: WeaponDef[];
  armors: ArmorDef[];
  classNames: Record<string, string>;
  locale: string;
}) {
  const t = useT();
  const [tab, setTab] = useState<Tab>("spells");

  return (
    <div className="flex flex-col gap-5">
      <div
        role="tablist"
        aria-label={t("pages.compendium.title")}
        className="flex flex-wrap gap-2"
      >
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={
              tab === key
                ? "btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
                : "rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            }
          >
            {t(TAB_LABEL[key])}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        {tab === "spells" && (
          <SpellBrowser groups={spells} classNames={classNames} locale={locale} />
        )}
        {tab === "weapons" && <GearBrowser kind="weapons" items={weapons} />}
        {tab === "armors" && <GearBrowser kind="armors" items={armors} />}
      </div>
    </div>
  );
}
