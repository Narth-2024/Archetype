"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWizard } from "../context";
import { REVIEW_STEP_INDEX } from "../CharacterWizard";
import { Badge, Card } from "@/components/ui";
import { useT, useData, useFormat } from "@/lib/i18n/client";
import {
  abilityMod,
  abilityScore,
  armorClass,
  armorWarnings,
  attackBonus,
  attackDamage,
  classEntries,
  classSkillPools,
  hasSpellcasting,
  initiative,
  maxHp,
  pbOf,
  raceSkillPool,
  raceSkills,
  resolveProficiencies,
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
  const [busy, setBusy] = useState(false);
  const [finishError, setFinishError] = useState<string | null>(null);
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

  // Pendências / avisos consolidados
  const profs = resolveProficiencies(doc, d);
  const pools = classSkillPools(doc, d);
  const rSkills = raceSkills(doc, d);
  const rPool = raceSkillPool(doc, d);
  const poolTotal = pools.reduce(
    (acc, p, i) => acc + (i === 0 ? p.count : Math.min(2, p.options.length)),
    0,
  );
  const maxSkills =
    (bg?.skillChoices.count ?? 0) + rPool.count + poolTotal + rSkills.length;
  const skillsOver = proficientSkills.length > maxSkills;
  const noClass = entries.length === 0;
  const combatWarnings = armorWarnings(doc, d);
  const featCtx = {
    abilities: {
      str: abilityScore(doc, "str", d),
      dex: abilityScore(doc, "dex", d),
      con: abilityScore(doc, "con", d),
      int: abilityScore(doc, "int", d),
      wis: abilityScore(doc, "wis", d),
      cha: abilityScore(doc, "cha", d),
    },
    armorProficiencies: profs.armors,
    canCastSpells: hasSpellcasting(doc, d),
  };
  const unmetFeats = doc.feats
    .map((ref) => {
      const parsed = d.parseFeatRef(ref);
      const feat = d.getFeat(parsed.featId);
      if (!feat) return null;
      const missing = d.featUnmetRequirements(feat, featCtx);
      return missing.length > 0 ? { name: feat.name, missing } : null;
    })
    .filter((x): x is { name: string; missing: string[] } => x !== null);

  const pendings: string[] = [];
  if (noClass) pendings.push(t("wizard.review.noClass"));
  if (skillsOver)
    pendings.push(
      t("wizard.review.skillsOver", {
        used: fmt.num(proficientSkills.length),
        max: fmt.num(maxSkills),
      }),
    );
  for (const w of combatWarnings) pendings.push(w);
  for (const u of unmetFeats)
    pendings.push(
      t("wizard.review.featUnmet", {
        feat: u.name,
        reqs: u.missing.join(", "),
      }),
    );

  async function finish() {
    setBusy(true);
    setFinishError(null);
    try {
      const blob = structuredClone(doc);
      blob.complete = true;
      blob.step = REVIEW_STEP_INDEX;
      const res = await fetch(`/api/characters/${characterId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blob),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      router.push(`/character/${characterId}`);
    } catch {
      setBusy(false);
      setFinishError(t("wizard.saveFailedShort"));
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card title={t("wizard.steps.identity")}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xl font-bold text-zinc-100">
            {doc.identity.name || t("wizard.review.noName")}
          </span>
          <Badge color="amber">{race?.name ?? "?"}</Badge>
          {d.getSubrace(doc.identity.subraceId) && (
            <Badge color="amber">{d.getSubrace(doc.identity.subraceId)!.name}</Badge>
          )}
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

      {pendings.length > 0 && (
        <Card title={t("wizard.review.pendingsTitle")} accent="rose">
          <ul className="flex flex-col gap-1.5 text-sm text-rose-300">
            {pendings.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden="true">⚠</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-zinc-500">
            {t("wizard.review.pendingsHint")}
          </p>
        </Card>
      )}

      <Card title={t("wizard.review.nextSteps")}>
        <p className="text-sm text-zinc-400">{t("wizard.review.finishHint")}</p>
        {finishError && (
          <p
            role="alert"
            className="mt-3 rounded-md border border-red-900 bg-red-950/40 px-3 py-2 text-sm text-red-400"
          >
            {finishError}
          </p>
        )}
        <div className="mt-5 flex justify-center rounded-lg border border-emerald-800/60 bg-emerald-950/50 px-6 py-7">
          <button
            type="button"
            onClick={finish}
            disabled={busy}
            className="btn-success w-full rounded-lg px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            {busy ? t("wizard.saving") : `${t("wizard.review.finish")} →`}
          </button>
        </div>
      </Card>
    </div>
  );
}
