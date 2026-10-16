export const CONDITION_KEYS = [
  "cego",
  "surdo",
  "enfeiticado",
  "exaustao",
  "assustado",
  "agarrado",
  "incapacitado",
  "invisivel",
  "paralisado",
  "petrificado",
  "envenenado",
  "caido",
  "amarrado",
  "atordoado",
  "inconsciente",
  "concentracao",
] as const;

export type ConditionKey = (typeof CONDITION_KEYS)[number];

export function isConditionKey(value: unknown): value is ConditionKey {
  return (
    typeof value === "string" && (CONDITION_KEYS as readonly string[]).includes(value)
  );
}

export const CONDITION_I18N_KEY: Record<ConditionKey, string> = {
  cego: "sheet.cond.cego",
  surdo: "sheet.cond.surdo",
  enfeiticado: "sheet.cond.enfeiticado",
  exaustao: "sheet.cond.exaustao",
  assustado: "sheet.cond.assustado",
  agarrado: "sheet.cond.agarrado",
  incapacitado: "sheet.cond.incapacitado",
  invisivel: "sheet.cond.invisivel",
  paralisado: "sheet.cond.paralisado",
  petrificado: "sheet.cond.petrificado",
  envenenado: "sheet.cond.envenenado",
  caido: "sheet.cond.caido",
  amarrado: "sheet.cond.amarrado",
  atordoado: "sheet.cond.atordoado",
  inconsciente: "sheet.cond.inconsciente",
  concentracao: "sheet.cond.concentracao",
};

export type RollMode = "normal" | "advantage" | "disadvantage";

export type ConditionEffects = {
  /** How the character's own attack rolls are affected. */
  attackRoll: RollMode;
  /** Disadvantage on ability checks. */
  checksDisadvantage: boolean;
  /** Attacks *against* the character have advantage (simplified: prone is
   * melee-only, so it is not part of this group). */
  attacksAgainstAdvantage: boolean;
  /** Speed is reduced to 0. */
  speedZero: boolean;
  /** Melee hits against the character are automatic criticals. */
  autoCritMelee: boolean;
  /** The character cannot take actions or reactions. */
  cannotAct: boolean;
  /** The character is maintaining a spell concentration. */
  concentration: boolean;
};

const ATTACK_DISADVANTAGE: ConditionKey[] = [
  "cego",
  "envenenado",
  "caido",
  "amarrado",
  "assustado",
  "atordoado",
  "paralisado",
  "petrificado",
  "inconsciente",
  "exaustao",
];
const ATTACK_ADVANTAGE: ConditionKey[] = ["invisivel"];
const CHECKS_DISADVANTAGE: ConditionKey[] = ["envenenado", "assustado", "exaustao"];
const AGAINST_ADVANTAGE: ConditionKey[] = [
  "cego",
  "invisivel",
  "amarrado",
  "paralisado",
  "petrificado",
  "atordoado",
  "inconsciente",
];
const SPEED_ZERO: ConditionKey[] = [
  "agarrado",
  "amarrado",
  "inconsciente",
  "paralisado",
  "petrificado",
];
const AUTO_CRIT_MELEE: ConditionKey[] = ["paralisado", "inconsciente"];
const CANNOT_ACT: ConditionKey[] = [
  "incapacitado",
  "paralisado",
  "atordoado",
  "inconsciente",
  "petrificado",
];

/**
 * Aggregates the mechanical consequences of the active conditions. Advantage
 * and disadvantage on the same roll cancel out (RAW).
 */
export function conditionEffects(
  conditions: readonly { key: ConditionKey }[],
): ConditionEffects {
  const keys = new Set(conditions.map((c) => c.key));
  const any = (list: ConditionKey[]) => list.some((k) => keys.has(k));
  const disadvantage = any(ATTACK_DISADVANTAGE);
  const advantage = any(ATTACK_ADVANTAGE);
  return {
    attackRoll:
      disadvantage && advantage
        ? "normal"
        : disadvantage
          ? "disadvantage"
          : advantage
            ? "advantage"
            : "normal",
    checksDisadvantage: any(CHECKS_DISADVANTAGE),
    attacksAgainstAdvantage: any(AGAINST_ADVANTAGE),
    speedZero: any(SPEED_ZERO),
    autoCritMelee: any(AUTO_CRIT_MELEE),
    cannotAct: any(CANNOT_ACT),
    concentration: keys.has("concentracao"),
  };
}
