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

export const POINT_BUY_VALUES = [8, 9, 10, 11, 12, 13, 14, 15];

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
    wis: 0.3,
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

/** Priority weights for distributing the standard array (primary abilities first). */
export function abilityPriorityWeights(
  c: CharacterDoc,
  d: DataBundle = PT_BUNDLE,
): Record<AbilityKey, number> {
  const weights: Record<AbilityKey, number> = { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 };
  for (const e of classEntries(c)) {
    const priority = d.classAbilityPriority(e.classId);
    for (const key of priority.primary) weights[key] += 2;
    for (const key of priority.secondary) weights[key] += 1;
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
  const maxW = Math.max(...ABILITY_KEYS.map((k) => weights[k]));
  const primaryKeys = new Set(
    ABILITY_KEYS.filter((k) => weights[k] === maxW && maxW > 0),
  );
  const scoreOf = (choices: AbilityKey[]) => {
    let weighted = 0;
    let modSum = 0;
    let primaryValue = 0;
    for (const key of ABILITY_KEYS) {
      const bonus = (fixed[key] ?? 0) + (choices.includes(key) ? flexDef?.amount ?? 0 : 0);
      const value = base[key] + bonus;
      const mod = abilityMod(value);
      weighted += weights[key] * mod;
      modSum += mod;
      if (primaryKeys.has(key)) primaryValue += value;
    }
    return weighted + 0.001 * modSum + 0.005 * primaryValue;
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
    mode === "array"
      ? arrayPermutations()
      : allCombinations(mode === "pontos" ? POINT_BUY_VALUES : STANDARD_ARRAY, true);

  // Fast pre-rank without racial flex (scored inline in DFS, no intermediate
  // objects), then refine the top candidates with the full flex search.
  // PRIMARY_COEF rewards the top-priority ability's raw score so it hits the
  // point-buy max (15) while weighted+modSum keep the rest balanced (avoids
  // dumping every non-priority stat to 8).
  const flexCount = flexible?.count ?? 0;
  const maxW = Math.max(...ABILITY_KEYS.map((k) => weights[k]));
  const primaryKeys = new Set(
    ABILITY_KEYS.filter((k) => weights[k] === maxW && maxW > 0),
  );
  const PRIMARY_COEF = 0.005;
  const scoreOfBase = (values: number[]) => {
    let weighted = 0;
    let modSum = 0;
    let primaryValue = 0;
    for (let i = 0; i < ABILITY_KEYS.length; i++) {
      const key = ABILITY_KEYS[i];
      const value = values[i] + (fixed[key] ?? 0);
      const mod = abilityMod(value);
      weighted += weights[key] * mod;
      modSum += mod;
      if (primaryKeys.has(key)) primaryValue += value;
    }
    return weighted + 0.001 * modSum + PRIMARY_COEF * primaryValue;
  };

  const K = 200;
  const top: { values: number[]; score: number }[] = [];
  let worstTop = Number.POSITIVE_INFINITY;
  const considerTop = (values: number[], score: number) => {
    if (top.length < K || score > worstTop) {
      top.push({ values: [...values], score });
      if (top.length > K * 2) {
        top.sort((a, b) => b.score - a.score);
        top.length = K;
      }
      worstTop = top.length < K ? Number.NEGATIVE_INFINITY : Math.min(...top.map((x) => x.score));
    }
  };

  if (mode === "array" || mode === "livre") {
    for (const abilities of candidates) {
      const values = ABILITY_KEYS.map((k) => abilities[k]);
      considerTop(values, scoreOfBase(values));
    }
  } else {
    const values = POINT_BUY_VALUES;
    const cur: number[] = [];
    const dfs = (
      index: number,
      spent: number,
      weighted: number,
      modSum: number,
      primaryValue: number,
    ) => {
      if (index === ABILITY_KEYS.length) {
        considerTop(cur, weighted + 0.001 * modSum + PRIMARY_COEF * primaryValue);
        return;
      }
      const key = ABILITY_KEYS[index];
      for (const v of values) {
        const cost = pointBuyCost(v);
        if (spent + cost > POINT_BUY_TOTAL) continue;
        const value = v + (fixed[key] ?? 0);
        const mod = abilityMod(value);
        cur.push(v);
        dfs(
          index + 1,
          spent + cost,
          weighted + weights[key] * mod,
          modSum + mod,
          primaryValue + (primaryKeys.has(key) ? value : 0),
        );
        cur.pop();
      }
    };
    dfs(0, 0, 0, 0, 0);
  }
  top.sort((a, b) => b.score - a.score);

  let best: (Suggestion & { score: number }) | null = null;
  if (flexCount === 0) {
    const winner = top[0];
    if (winner) {
      const abilities = {} as Record<AbilityKey, number>;
      ABILITY_KEYS.forEach((k, i) => (abilities[k] = winner.values[i]));
      best = { abilities, raceChoices: [], note: "", score: winner.score };
    }
  } else {
    for (const { values } of top) {
      const abilities = {} as Record<AbilityKey, number>;
      ABILITY_KEYS.forEach((k, i) => (abilities[k] = values[i]));
      const { choices, score } = chooseFlex(abilities, fixed, flexible, weights);
      const candidate: Suggestion & { score: number } = {
        abilities,
        raceChoices: choices,
        note: "",
        score,
      };
      if (!best || candidate.score > best.score) best = candidate;
    }
  }

  if (!best) throw new Error("sem candidatos");

  const entries = classEntries(c);
  const classNames = entries
    .map((e) => d.getClass(e.classId)?.name ?? e.classId)
    .join(" + ");
  const ranked = [...ABILITY_KEYS].sort((a, b) => weights[b] - weights[a]);
  const topAbilities = ranked
    .filter((k) => weights[k] > 0)
    .slice(0, 3)
    .map((k) => d.ABILITY_ABBR[k] ?? k.toUpperCase());

  const template = classNames ? d.LABELS.suggestion : d.LABELS.suggestionNone;
  best.note = fill(template, {
    classes: classNames ? ` (${classNames})` : "",
    priorities: topAbilities.join(", ") || `${d.ABILITY_ABBR.con ?? "CON"}/${d.ABILITY_ABBR.dex ?? "DES"}`,
  });
  return best;
}
