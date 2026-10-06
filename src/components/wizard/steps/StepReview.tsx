"use client";

import { useRouter } from "next/navigation";
import { useWizard } from "../context";
import { Badge, Card } from "@/components/ui";
import { getBackground, getClass, getRace } from "@/data";
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
import { ABILITY_KEYS, ABILITY_NAMES, SKILL_KEYS } from "@/domain/types";
import { getSkill } from "@/data";
import { ft } from "@/domain/units";

export function StepReview() {
  const { doc, characterId } = useWizard();
  const router = useRouter();
  const entries = classEntries(doc);
  const race = getRace(doc.identity.raceId);
  const bg = getBackground(doc.identity.backgroundId);
  const hp = maxHp(doc);
  const ac = armorClass(doc);
  const init = initiative(doc);
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
      <Card title="Identidade">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xl font-bold text-zinc-100">
            {doc.identity.name || "Sem nome"}
          </span>
          <Badge color="amber">{race?.name ?? "?"}</Badge>
          {entries.length > 0 ? (
            entries.map((e) => (
              <Badge key={e.classId} color="blue">
                {getClass(e.classId)?.name ?? e.classId} {e.level}
              </Badge>
            ))
          ) : (
            <Badge color="blue">Sem classe</Badge>
          )}
          <Badge>Nível {level}</Badge>
          <Badge>{bg?.name ?? "sem antecedente"}</Badge>
          {doc.identity.player && <Badge>Jogador: {doc.identity.player}</Badge>}
        </div>
      </Card>

      <Card title="Atributos">
        <div className="flex flex-wrap gap-3">
          {ABILITY_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-md border border-zinc-800 px-3 py-2 text-center"
            >
              <p className="text-xs text-zinc-500">{key.toUpperCase()}</p>
              <p className="text-lg font-bold text-zinc-100">
                {abilityScore(doc, key)}
              </p>
              <p className="text-sm font-semibold text-amber-400">
                {abilityMod(abilityScore(doc, key)) >= 0 ? "+" : ""}
                {abilityMod(abilityScore(doc, key))}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card title="Combate">
          <ul className="flex flex-col gap-1 text-sm text-zinc-300">
            <li>CA: <strong className="text-zinc-100">{ac.value}</strong></li>
            <li>
              PV máx: <strong className="text-zinc-100">{hp.value}</strong>
            </li>
            <li>
              Iniciativa:{" "}
              <strong className="text-zinc-100">
                {init.value >= 0 ? `+${init.value}` : init.value}
              </strong>
            </li>
            <li>Deslocamento: {ft(speed(doc))}</li>
            <li>Proficiência: +{pb}</li>
          </ul>
        </Card>

        <Card title={`Resistências (${proficientSaves.length})`}>
          <div className="flex flex-wrap gap-2">
            {proficientSaves.length === 0 ? (
              <span className="text-sm text-zinc-500">Nenhuma</span>
            ) : (
              proficientSaves.map((k) => (
                <Badge key={k} color="amber">
                  {ABILITY_NAMES[k]}
                </Badge>
              ))
            )}
          </div>
        </Card>

        <Card title={`Perícias proficientes (${proficientSkills.length})`}>
          <div className="flex flex-wrap gap-2">
            {proficientSkills.length === 0 ? (
              <span className="text-sm text-zinc-500">Nenhuma</span>
            ) : (
              proficientSkills.map((s) => (
                <Badge key={s} color="green">
                  {getSkill(s).name}
                </Badge>
              ))
            )}
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title={`Ataques (${doc.attacks.length})`}>
          {doc.attacks.length === 0 ? (
            <p className="text-sm text-zinc-500">Nenhum ataque.</p>
          ) : (
            <ul className="flex flex-col gap-2 text-sm">
              {doc.attacks.map((a) => {
                const b = attackBonus(doc, a);
                return (
                  <li key={a.id} className="flex justify-between gap-2">
                    <span className="text-zinc-300">
                      {a.name || "Sem nome"}
                    </span>
                    <span className="text-zinc-500">
                      {b.value >= 0 ? `+${b.value}` : b.value} ·{" "}
                      {attackDamage(doc, a)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card title={`Magias (${doc.spellcasting.known.length}${prepared ? ` · ${prepared} preparadas` : ""})`}>
          {doc.spellcasting.known.length === 0 ? (
            <p className="text-sm text-zinc-500">
              {entries.some((e) => {
                const cls = getClass(e.classId);
                return cls && cls.spellcaster !== "none";
              })
                ? "Nenhuma magia escolhida (você pode adicionar depois)."
                : "Classes sem conjuração."}
            </p>
          ) : (
            <p className="text-sm text-zinc-300">
              {doc.spellcasting.known.length} magia
              {doc.spellcasting.known.length === 1 ? "" : "s"} conhecida
              {doc.spellcasting.known.length === 1 ? "" : "s"}.
            </p>
          )}
        </Card>
      </div>

      <Card title={`Inventário (${doc.inventory.length} itens)`}>
        {doc.inventory.length === 0 ? (
          <p className="text-sm text-zinc-500">Inventário vazio.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {doc.inventory.map((i) => (
              <Badge key={i.id} color={i.equipped ? "green" : "zinc"}>
                {i.qty > 1 ? `${i.qty}× ` : ""}
                {i.name}
                {i.equipped ? " (equipado)" : ""}
              </Badge>
            ))}
          </div>
        )}
      </Card>

      <Card title="Próximos passos">
        <p className="text-sm text-zinc-400">
          Ao finalizar, você será levado à ficha digital com todos os cálculos
          prontos. A qualquer momento você pode voltar ao editor pela página do
          personagem.
        </p>
        <div className="mt-5 flex justify-center rounded-lg border border-emerald-800/60 bg-gradient-to-b from-emerald-950/60 to-transparent px-6 py-7">
          <button
            type="button"
            onClick={finish}
            className="btn-success w-full rounded-lg px-8 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
          >
            Finalizar criação →
          </button>
        </div>
      </Card>
    </div>
  );
}
