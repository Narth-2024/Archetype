import Link from "next/link";
import { Badge, Card } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ABILITY_KEYS,
  ABILITY_NAMES,
  SKILL_KEYS,
} from "@/domain/types";
import {
  allAbilitiesWithBreakdown,
  armorClass,
  armorWarnings,
  attackBonus,
  attackDamage,
  backgroundSkills,
  classEntries,
  classSkillPools,
  initiative,
  knownSpells,
  maxHp,
  pbOf,
  raceSkills,
  resolveAttackAbility,
  resolveProficiencies,
  saveBonus,
  skillBonus,
  speed,
  spellAbility,
  spellAttackBonus,
  spellSaveDc,
  spellSlots,
} from "@/domain/calc";
import { ft, ftRange, ftText } from "@/domain/units";
import {
  ARMOR_PROF_OPTIONS,
  FEATS,
  WEAPON_PROF_OPTIONS,
  getBackground,
  getClass,
  getRace,
  getSkill,
  getSpell,
  getSubclass,
  getSubrace,
  parseFeatRef,
} from "@/data";

function fmt(v: number) {
  return v >= 0 ? `+${v}` : `${v}`;
}

export function SheetView({ doc, characterId }: { doc: import("@/domain/types").CharacterDoc; characterId: string }) {
  const classes = classEntries(doc)
    .map((e) => ({
      cls: getClass(e.classId),
      level: e.level,
      subclassId: e.subclassId,
    }))
    .filter(
      (x): x is { cls: NonNullable<ReturnType<typeof getClass>>; level: number; subclassId: string | undefined } =>
        Boolean(x.cls),
    );
  const race = getRace(doc.identity.raceId);
  const subrace = getSubrace(doc.identity.subraceId);
  const selectedFeats = doc.feats
    .map((ref) => ({ ref, feat: FEATS.find((f) => f.id === parseFeatRef(ref).featId) }))
    .filter((x): x is { ref: string; feat: NonNullable<(typeof FEATS)[number]> } => Boolean(x.feat));
  const bg = getBackground(doc.identity.backgroundId);
  const ac = armorClass(doc);
  const hp = maxHp(doc);
  const init = initiative(doc);
  const pb = pbOf(doc);
  const warnings = armorWarnings(doc);
  const profs = resolveProficiencies(doc);
  const abilities = allAbilitiesWithBreakdown(doc);
  const dc = spellSaveDc(doc);
  const spellAtk = spellAttackBonus(doc);
  const { groups, used } = spellSlots(doc);
  const spells = knownSpells(doc);
  const pools = classSkillPools(doc);
  const classOptions = [...new Set(pools.flatMap((p) => p.options))];
  const bgSkills = backgroundSkills(doc);
  const rSkills = raceSkills(doc);
  const casterClasses = classes.filter((x) => x.cls.spellcaster !== "none");
  const hasCaster = casterClasses.length > 0;

  return (
    <div className="flex flex-col gap-5">
      <Card accent="sky">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="title-gold text-2xl font-bold">
                {doc.identity.name || "Sem nome"}
              </h1>
              {doc.complete ? (
                <Badge color="green">Completa</Badge>
              ) : (
                <Badge color="amber">Rascunho</Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-zinc-400">
              {[
                race?.name,
                subrace?.name,
                ...classes.map((x) =>
                  x.subclassId
                    ? `${x.cls.name} ${x.level} (${getSubclass(x.subclassId)?.name ?? ""})`
                    : `${x.cls.name} ${x.level}`,
                ),
                `Nível ${classes.reduce((a, x) => a + x.level, 0) || 1}`,
                bg?.name,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {doc.identity.player && `Jogador: ${doc.identity.player} · `}
              {doc.identity.alignment && `${doc.identity.alignment} · `}
              {doc.identity.xp > 0 && `${doc.identity.xp} XP`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={`/character/${characterId}/edit`}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              Editar
            </Link>
            <Link
              href="/"
              className="rounded-md border border-zinc-800 px-3 py-1.5 text-sm text-zinc-500 transition hover:border-zinc-600"
            >
              Personagens
            </Link>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card title="Atributos" accent="amber">
          <div className="grid grid-cols-3 gap-3">
            {abilities.map((a) => (
              <div
                key={a.key}
                className="rounded-md border border-zinc-800 p-2 text-center"
              >
                <p className="text-[10px] uppercase text-zinc-500">
                  {a.key}
                </p>
                <p className="text-lg font-bold text-zinc-100">{a.total}</p>
                <p className="text-sm font-semibold text-amber-400">
                  {fmt(a.mod)}
                </p>
                <p className="text-[10px] text-zinc-600">
                  base {a.base}
                  {a.race > 0 ? ` +${a.race}` : ""}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Combate" accent="rose">
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex justify-between">
              <span className="text-zinc-400">Classe de Armadura</span>
              <strong className="text-zinc-100">{ac.value}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">Pontos de Vida</span>
              <strong className="text-zinc-100">
                {doc.combat.hpCurrent}/{hp.value}
                {doc.combat.hpTemp > 0 && (
                  <span className="text-sky-400"> (+{doc.combat.hpTemp} temp)</span>
                )}
              </strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">Iniciativa</span>
              <strong className="text-zinc-100">{fmt(init.value)}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">Deslocamento</span>
              <strong className="text-zinc-100">{ft(speed(doc))}</strong>
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-400">Bônus de proficiência</span>
              <strong className="text-amber-400">+{pb}</strong>
            </li>
          </ul>
          <div className="mt-3 border-t border-zinc-800 pt-3 text-xs text-zinc-600">
            CA: {ac.parts.map((p) => `${p.value >= 0 ? "+" : "−"}${Math.abs(p.value)} ${p.label}`).join(" ")}
          </div>
          {warnings.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1 text-xs text-amber-500/90">
              {warnings.map((w, i) => (
                <li key={i}>⚠ {w}</li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Testes de resistência" accent="orange">
          <ul className="flex flex-col gap-2">
            {ABILITY_KEYS.map((key) => {
              const d = saveBonus(doc, key);
              return (
                <li key={key} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-300">
                    {ABILITY_NAMES[key]}
                    {doc.saves[key] && (
                      <Badge color="amber">
                        <span className="ml-1">prof.</span>
                      </Badge>
                    )}
                  </span>
                  <strong className="text-amber-400">{fmt(d.value)}</strong>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card title="Perícias" accent="sky">
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-1">
            {SKILL_KEYS.map((id) => {
              const skill = getSkill(id);
              const d = skillBonus(doc, id);
              const sources = [
                bgSkills.includes(id) ? "antecedente" : null,
                classOptions.includes(id) ? "classe" : null,
                rSkills.includes(id) ? "raça" : null,
              ].filter(Boolean);
              return (
                <li key={id} className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm ${doc.skills[id] ? "text-zinc-100" : "text-zinc-500"}`}
                  >
                    {skill.name}
                    <span className="ml-1 text-[10px] text-zinc-600">
                      {skill.ability.toUpperCase()}
                    </span>
                    {doc.skills[id] && sources.length > 0 && (
                      <span className="ml-1 text-[10px] text-amber-600">
                        ({sources[0]})
                      </span>
                    )}
                  </span>
                  <strong
                    className={doc.skills[id] ? "text-amber-400" : "text-zinc-600"}
                  >
                    {fmt(d.value)}
                  </strong>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card title="Proficiências" accent="cyan">
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <p className="text-xs uppercase text-zinc-500">Armaduras</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.armors.length === 0 ? (
                  <span className="text-zinc-600">nenhuma</span>
                ) : (
                  profs.armors.map((a) => (
                    <Badge key={a} color="blue">
                      {ARMOR_PROF_OPTIONS.find((o) => o.id === a)?.name ?? a}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Armas</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.weapons.length === 0 ? (
                  <span className="text-zinc-600">nenhuma</span>
                ) : (
                  profs.weapons.map((w) => (
                    <Badge key={w} color="blue">
                      {WEAPON_PROF_OPTIONS.find((o) => o.id === w)?.name ?? w}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Ferramentas</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.tools.length === 0 ? (
                  <span className="text-zinc-600">nenhuma</span>
                ) : (
                  profs.tools.map((t) => <Badge key={t}>{t}</Badge>)
                )}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500">Idiomas</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {profs.languages.length === 0 ? (
                  <span className="text-zinc-600">nenhum</span>
                ) : (
                  profs.languages.map((l) => <Badge key={l}>{l}</Badge>)
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card title={`Inventário (${doc.inventory.length})`} accent="emerald">
          {doc.inventory.length === 0 ? (
            <p className="text-sm text-zinc-600">Vazio.</p>
          ) : (
            <>
              <div className="mb-3">
                <p className="text-xs uppercase text-emerald-600">Equipados</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {doc.inventory.filter((i) => i.equipped).length === 0 ? (
                    <span className="text-zinc-600 text-sm">nenhum</span>
                  ) : (
                    doc.inventory
                      .filter((i) => i.equipped)
                      .map((i) => (
                        <Badge key={i.id} color="green">
                          {i.qty > 1 ? `${i.qty}× ` : ""}
                          {i.name}
                        </Badge>
                      ))
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {doc.inventory
                  .filter((i) => !i.equipped)
                  .map((i) => (
                    <Badge key={i.id}>
                      {i.qty > 1 ? `${i.qty}× ` : ""}
                      {i.name}
                    </Badge>
                  ))}
              </div>
            </>
          )}
        </Card>

        <Card title={`Ataques (${doc.attacks.length})`} accent="rose">
          {doc.attacks.length === 0 ? (
            <p className="text-sm text-zinc-600">Nenhum ataque cadastrado.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {doc.attacks.map((atk) => {
                const bonus = attackBonus(doc, atk);
                const ability = resolveAttackAbility(doc, atk);
                return (
                  <li key={atk.id} className="rounded-md border border-zinc-800 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-zinc-200">
                        {atk.name || "Sem nome"}
                      </span>
                      {atk.magicBonus > 0 && (
                        <Badge color="green">+{atk.magicBonus}</Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-zinc-400">
                      <strong className="text-amber-400">{fmt(bonus.value)}</strong>{" "}
                      para atacar ·{" "}
                      <strong className="text-zinc-200">
                        {attackDamage(doc, atk)}
                      </strong>
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {ability.toUpperCase()} · {bonus.parts.map((p) => p.label).join(" + ")}
                      {atk.range && ` · ${ftRange(atk.range)}`}
                      {atk.properties && ` · ${atk.properties}`}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card title="Magias" accent="violet">
          {!hasCaster ? (
            <p className="text-sm text-zinc-600">
              Nenhuma de suas classes conjura magias.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 text-sm">
                {dc && (
                  <div>
                    <p className="text-xs text-zinc-500">CD salvamento</p>
                    <p className="text-lg font-bold text-zinc-100">{dc.value}</p>
                  </div>
                )}
                {spellAtk && (
                  <div>
                    <p className="text-xs text-zinc-500">Ataque mágico</p>
                    <p className="text-lg font-bold text-amber-400">
                      +{spellAtk.value}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-zinc-500">Atributo</p>
                  <p className="text-lg font-bold text-zinc-100">
                    {spellAbility(doc)?.toUpperCase() ?? "—"}
                  </p>
                </div>
              </div>

              {groups.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {groups.map((g) => {
                    const key =
                      g.source === "pact" ? `pacto${g.level}` : String(g.level);
                    const u = used[key] ?? 0;
                    return (
                      <div
                        key={key}
                        className="rounded-md border border-zinc-800 px-2 py-1 text-center"
                      >
                        <p className="text-[10px] text-zinc-500">
                          {g.level}º{g.source === "pact" ? " pacto" : ""}
                        </p>
                        <p className="text-sm font-bold text-zinc-200">
                          {Math.max(0, g.max - u)}/{g.max}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {spells.length === 0 ? (
                <p className="text-sm text-zinc-600">Nenhuma magia escolhida.</p>
              ) : (
                <ul className="flex flex-col gap-1.5">
                  {spells.map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-sm">
                      <span
                        className={
                          doc.spellcasting.prepared.includes(s.id)
                            ? "text-zinc-100"
                            : "text-zinc-500"
                        }
                      >
                        {doc.spellcasting.prepared.includes(s.id) ? "● " : "○ "}
                        {s.name}
                      </span>
                      <Badge color="blue">
                        {s.level === 0 ? "truque" : `${s.level}º`}
                      </Badge>
                      <span className="text-xs text-zinc-600">
                        {getSpell(s.id)?.school}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Card>

        <Card title="Características e habilidades" accent="teal">
          <div className="flex flex-col gap-4">
            {race && (
              <div>
                <p className="text-xs uppercase text-zinc-500">{race.name}</p>
                <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-300">
                  {race.traits.map((t) => (
                    <li key={t.name}>
                      <strong className="text-zinc-200">{t.name}:</strong>{" "}
                      {ftText(t.description)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {subrace && subrace.traits.length > 0 && (
              <div>
                <p className="text-xs uppercase text-zinc-500">{subrace.name}</p>
                <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-300">
                  {subrace.traits.map((t) => (
                    <li key={t.name}>
                      <strong className="text-zinc-200">{t.name}:</strong>{" "}
                      {ftText(t.description)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {classes.map(({ cls, level, subclassId }) => {
              const subclass = getSubclass(subclassId ?? "");
              const subclassFeatures = (subclass?.features ?? []).filter(
                (f) => f.level <= level,
              );
              return (
                <div key={cls.id}>
                  <p className="text-xs uppercase text-zinc-500">{cls.name}</p>
                  <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-300">
                    {cls.features.map((t) => (
                      <li key={t.name}>
                        <strong className="text-zinc-200">{t.name}:</strong>{" "}
                        {ftText(t.description)}
                      </li>
                    ))}
                    {subclass &&
                      (subclassFeatures.length > 0 ? (
                        subclassFeatures.map((t) => (
                          <li key={t.name}>
                            <strong className="text-zinc-200">
                              {subclass.name} — {t.name}:
                            </strong>{" "}
                            {ftText(t.description)}
                          </li>
                        ))
                      ) : (
                        <li className="text-zinc-500">
                          {subclass.name}: disponível a partir do nível{" "}
                          {subclass.level}.
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
            {selectedFeats.length > 0 && (
              <div>
                <p className="text-xs uppercase text-zinc-500">Talentos</p>
                <ul className="mt-1 flex flex-col gap-1 text-sm text-zinc-300">
                  {selectedFeats.map(({ ref, feat }) => {
                    const ability = parseFeatRef(ref).ability;
                    return (
                      <li key={ref}>
                        <strong className="text-zinc-200">{feat.name}</strong>
                        {ability ? ` (+1 ${ability.toUpperCase()})` : ""}:{" "}
                        {feat.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {bg && (
              <div>
                <p className="text-xs uppercase text-zinc-500">{bg.name}</p>
                <p className="mt-1 text-sm text-zinc-300">
                  <strong className="text-zinc-200">{bg.feature.name}:</strong>{" "}
                  {bg.feature.description}
                </p>
              </div>
            )}
          </div>
        </Card>

        <Card title="Anotações" className="md:col-span-2 xl:col-span-1">
          <p className="whitespace-pre-wrap text-sm text-zinc-400">
            {doc.notes || "Nenhuma anotação."}
          </p>
        </Card>
      </div>
    </div>
  );
}
