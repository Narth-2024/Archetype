"use client";

import { useRouter } from "next/navigation";
import { useWizard } from "../context";
import { Badge, Card } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import {
  abilityMod,
  abilityScore,
  armorClass,
  attackBonus,
  attackDamage,
  classEntries,
  initiative,
  maxHp,
  pbOf,
  speed,
  totalLevel,
} from "@/domain/calc";
import { ABILITY_KEYS, SKILL_KEYS } from "@/domain/types";

export function StepReview() {
  const { doc, characterId } = useWizard();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const router = useRouter();
  const entries = classEntries(doc);
  const race = d.getRace(doc.identity.raceId);
  const bg = d.getBackground(doc.identity.backgroundId);
  const hp = maxHp(doc, d);
  const ac = armorClass(doc, d);
  const init = initiative(doc, d);
  const pb = pbOf(doc);
  const level = totalLevel(doc);
  const proficientSkills = SKILL_KEYS.filter((s) => doc.skills[s]);
  const proficientSaves = ABILITY_KEYS.filter((k) => doc.saves[k]);
  const prepared = doc.spellcasting.prepared.length;

  async function finish() {
    const blob = structuredClone(doc);
    blob.complete = true;
    blob.step = 8;
    await fetch(`/api/characters/${characterId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blob),
    });
    router.push(`/character/${characterId}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <Card title={t("wizard.steps.identity")}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xl font-bold text-zinc-100">
            {doc.identity.name || t("wizard.review.noName")}
          </span>
          <Badge color="amber">{race?.name ?? "?"}</Badge>
          {entries.length > 0 ? (
            entries.map((e) => (
              <Badge key={e.classId} color="blue">
                {d.getClass(e.classId)?.name ?? e.classId} {e.level}
              </Badge>
            ))
          ) : (
            <Badge color="blue">{t("wizard.review.noClass")}</Badge>
          )}
          <Badge>{t("wizard.review.level", { n: fmt.num(level) })}</Badge>
          <Badge>{bg?.name ?? t("wizard.review.noBackground")}</Badge>
          {doc.identity.player && (
            <Badge>
              {t("wizard.review.player", { name: doc.identity.player })}
            </Badge>
          )}
        </div>
      </Card>

      <Card title={t("wizard.steps.abilities")}>
        <div className="flex flex-wrap gap-3">
          {ABILITY_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-md border border-zinc-800 px-3 py-2 text-center"
            >
              <p className="text-xs text-zinc-500">
                {d.ABILITY_ABBR[key] ?? key.toUpperCase()}
              </p>
              <p className="text-lg font-bold text-zinc-100">
                {abilityScore(doc, key, d)}
              </p>
              <p className="text-sm font-semibold text-amber-400">
                {abilityMod(abilityScore(doc, key, d)) >= 0 ? "+" : ""}
                {abilityMod(abilityScore(doc, key, d))}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card title={t("wizard.steps.combat")}>
          <ul className="flex flex-col gap-1 text-sm text-zinc-300">
            <li>
              {t("wizard.review.ac")}{" "}
              <strong className="text-zinc-100">{ac.value}</strong>
            </li>
            <li>
              {t("wizard.review.maxHp")}{" "}
              <strong className="text-zinc-100">{hp.value}</strong>
            </li>
            <li>
              {t("wizard.combat.initiative")}{" "}
              <strong className="text-zinc-100">
                {init.value >= 0 ? `+${init.value}` : init.value}
              </strong>
            </li>
            <li>
              {t("wizard.combat.speed")}: {fmt.distance(speed(doc, d))}
            </li>
            <li>{t("wizard.review.proficiency", { pb: fmt.num(pb) })}</li>
          </ul>
        </Card>

        <Card title={t("wizard.review.savesTitle", { n: fmt.num(proficientSaves.length) })}>
          <div className="flex flex-wrap gap-2">
            {proficientSaves.length === 0 ? (
              <span className="text-sm text-zinc-500">
                {t("wizard.review.none")}
              </span>
            ) : (
              proficientSaves.map((k) => (
                <Badge key={k} color="amber">
                  {d.ABILITY_NAMES[k] ?? k}
                </Badge>
              ))
            )}
          </div>
        </Card>

        <Card title={t("wizard.review.skillsTitle", { n: fmt.num(proficientSkills.length) })}>
          <div className="flex flex-wrap gap-2">
            {proficientSkills.length === 0 ? (
              <span className="text-sm text-zinc-500">
                {t("wizard.review.none")}
              </span>
            ) : (
              proficientSkills.map((s) => (
                <Badge key={s} color="green">
                  {d.getSkill(s)?.name ?? s}
                </Badge>
              ))
            )}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title={t("wizard.review.attacksTitle", { n: fmt.num(doc.attacks.length) })}>
          {doc.attacks.length === 0 ? (
            <p className="text-sm text-zinc-500">{t("wizard.review.noAttacks")}</p>
          ) : (
            <ul className="flex flex-col gap-2 text-sm">
              {doc.attacks.map((a) => {
                const b = attackBonus(doc, a, d);
                return (
                  <li key={a.id} className="flex justify-between gap-2">
                    <span className="text-zinc-300">
                      {a.name || t("wizard.review.noName")}
                    </span>
                    <span className="text-zinc-500">
                      {b.value >= 0 ? `+${b.value}` : b.value} ·{" "}
                      {attackDamage(doc, a, d)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card
          title={
            prepared
              ? t("wizard.review.spellsTitlePrepared", {
                  known: fmt.num(doc.spellcasting.known.length),
                  prepared: fmt.num(prepared),
                })
              : t("wizard.review.spellsTitle", {
                  known: fmt.num(doc.spellcasting.known.length),
                })
          }
        >
          {doc.spellcasting.known.length === 0 ? (
            <p className="text-sm text-zinc-500">
              {entries.some((e) => {
                const cls = d.getClass(e.classId);
                return cls && cls.spellcaster !== "none";
              })
                ? t("wizard.review.noSpells")
                : t("wizard.review.noCasting")}
            </p>
          ) : (
            <p className="text-sm text-zinc-300">
              {t(
                doc.spellcasting.known.length === 1
                  ? "wizard.review.knownOne"
                  : "wizard.review.knownMany",
                { n: fmt.num(doc.spellcasting.known.length) },
              )}
            </p>
          )}
        </Card>
      </div>

      <Card title={t("wizard.review.inventoryTitle", { n: fmt.num(doc.inventory.length) })}>
        {doc.inventory.length === 0 ? (
          <p className="text-sm text-zinc-500">{t("wizard.review.emptyInventory")}</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {doc.inventory.map((i) => (
              <Badge key={i.id} color={i.equipped ? "green" : "zinc"}>
                {i.qty > 1 ? `${fmt.num(i.qty)}× ` : ""}
                {i.name}
                {i.equipped ? ` ${t("wizard.review.equipped")}` : ""}
              </Badge>
            ))}
          </div>
        )}
      </Card>

      <Card title={t("wizard.review.nextSteps")}>
        <p className="text-sm text-zinc-400">{t("wizard.review.finishHint")}</p>
        <div className="mt-5 flex justify-center rounded-lg border border-emerald-800/60 bg-emerald-950/50 px-6 py-7">
          <button
            type="button"
            onClick={finish}
            className="btn-success w-full rounded-lg px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
          >
            {t("wizard.review.finish")} →
          </button>
        </div>
      </Card>
    </div>
  );
}
