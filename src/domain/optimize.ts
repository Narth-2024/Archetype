import type { AbilityKey, CharacterDoc } from "./types";
import { ABILITY_KEYS } from "./types";
import { PT_BUNDLE } from "../data";
import type { DataBundle } from "../data";
import { abilityMod, classEntries, raceAbility } from "./calc";

function fill(template: string, args: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) =>
    k in args ? args[k] : m,
  );
}

export const POINT_COSTS: Record<number, number> = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

export const POINT_BUY_TOTAL = 27;

export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

export function pointBuyCost(value: number): number {
  return POINT_COSTS[value] ?? Number.POSITIVE_INFINITY;
}

export function pointBuySpent(abilities: Record<AbilityKey, number>): number {
  return ABILITY_KEYS.reduce((sum, k) => sum + pointBuyCost(abilities[k]), 0);
}

export type Suggestion = {
  abilities: Record<AbilityKey, number>;
  raceChoices: AbilityKey[];
  note: string;
};

function weightsFor(c: CharacterDoc, d: DataBundle): Record<AbilityKey, number> {
  const weights: Record<AbilityKey, number> = {
    str: 0,
    dex: 0.5,
    con: 1,
    int: 0,
    wis: 0,
    cha: 0,
  };
  const entries = classEntries(c);
  const total = entries.reduce((a, e) => a + e.level, 0) || 1;
  for (const e of entries) {
    const share = e.level / total;
    const priority = d.classAbilityPriority(e.classId);
    for (const key of priority.primary) weights[key] += (4 * share) / priority.primary.length;
    for (const key of priority.secondary) weights[key] += share / priority.secondary.length;
  }
  return weights;
}

function allCombinations(
  values: number[],
  budget: boolean,
): Record<AbilityKey, number>[] {
  const results: Record<AbilityKey, number>[] = [];
  const current: number[] = [];

  function dfs(index: number, spent: number) {
    if (index === ABILITY_KEYS.length) {
      const out = {} as Record<AbilityKey, number>;
      ABILITY_KEYS.forEach((k, i) => (out[k] = current[i]));
      results.push(out);
      return;
    }
    for (const value of values) {
      const cost = budget ? pointBuyCost(value) : 0;
      if (spent + cost > POINT_BUY_TOTAL) continue;
      current.push(value);
      dfs(index + 1, spent + cost);
      current.pop();
    }
  }

  dfs(0, 0);
  return results;
}

function arrayPermutations(): Record<AbilityKey, number>[] {
  const results: Record<AbilityKey, number>[] = [];
  const used = new Array(STANDARD_ARRAY.length).fill(false);
  const current: number[] = [];

  function dfs() {
    if (current.length === ABILITY_KEYS.length) {
      const out = {} as Record<AbilityKey, number>;
      ABILITY_KEYS.forEach((k, i) => (out[k] = current[i]));
      results.push(out);
      return;
    }
    for (let i = 0; i < STANDARD_ARRAY.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(STANDARD_ARRAY[i]);
      dfs();
      current.pop();
      used[i] = false;
    }
  }

  dfs();
  return results;
}

function chooseFlex(
  base: Record<AbilityKey, number>,
  fixed: Partial<Record<AbilityKey, number>>,
  flex: { count: number; amount: number } | undefined,
  weights: Record<AbilityKey, number>,
): { choices: AbilityKey[]; score: number } {
  const flexDef = flex;
  const scoreOf = (choices: AbilityKey[]) => {
    let weighted = 0;
    let valueTerm = 0;
    let modSum = 0;
    for (const key of ABILITY_KEYS) {
      const bonus = (fixed[key] ?? 0) + (choices.includes(key) ? flexDef?.amount ?? 0 : 0);
      const value = base[key] + bonus;
      const mod = abilityMod(value);
      weighted += weights[key] * mod;
      valueTerm += weights[key] * value;
      modSum += mod;
    }
    return weighted + 0.01 * valueTerm + 0.001 * modSum;
  };

  if (!flexDef || flexDef.count === 0) return { choices: [], score: scoreOf([]) };
  const flexCount = flexDef.count;

  let best: AbilityKey[] = [];
  let bestScore = Number.NEGATIVE_INFINITY;

  function dfs(picked: AbilityKey[], start: number) {
    if (picked.length === flexCount) {
      const score = scoreOf(picked);
      if (score > bestScore) {
        bestScore = score;
        best = [...picked];
      }
      return;
    }
    for (let i = start; i < ABILITY_KEYS.length; i++) {
      picked.push(ABILITY_KEYS[i]);
      dfs(picked, i + 1);
      picked.pop();
    }
  }

  dfs([], 0);
  return { choices: best, score: bestScore };
}

export function suggestAbilities(c: CharacterDoc, d: DataBundle = PT_BUNDLE): Suggestion {
  const { fixed, flexible } = raceAbility(c, d);
  const weights = weightsFor(c, d);

  const mode = c.identity.abilityMode;
  const candidates =
    mode === "array" ? arrayPermutations() : allCombinations(STANDARD_ARRAY, true);

  let best: (Suggestion & { score: number }) | null = null;
  for (const abilities of candidates) {
    const { choices, score } = chooseFlex(abilities, fixed, flexible, weights);
    const candidate: Suggestion & { score: number } = {
      abilities,
      raceChoices: choices,
      note: "",
      score,
    };
    if (!best || candidate.score > best.score) best = candidate;
  }

  if (!best) throw new Error("sem candidatos");

  const entries = classEntries(c);
  const classNames = entries
    .map((e) => d.getClass(e.classId)?.name ?? e.classId)
    .join(" + ");
  const ranked = [...ABILITY_KEYS].sort((a, b) => weights[b] - weights[a]);
  const top = ranked
    .filter((k) => weights[k] > 0)
    .slice(0, 3)
    .map((k) => d.ABILITY_ABBR[k] ?? k.toUpperCase());

  const template = classNames ? d.LABELS.suggestion : d.LABELS.suggestionNone;
  best.note = fill(template, {
    classes: classNames ? ` (${classNames})` : "",
    priorities: top.join(", ") || `${d.ABILITY_ABBR.con ?? "CON"}/${d.ABILITY_ABBR.dex ?? "DES"}`,
  });
  return best;
}
