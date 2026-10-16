import type { RollMode } from "./conditions";

export type DiceGroup = { count: number; sides: number };

export type ParsedDamage = {
  dice: DiceGroup[];
  mod: number;
};

export type DiceRoll = {
  total: number;
  rolls: number[];
};

export type AttackRoll = {
  d20: number;
  /** The d20 roll(s): two dice when rolling with advantage/disadvantage. */
  rolls: number[];
  mode: RollMode;
  total: number;
  nat: "crit" | "fumble" | null;
};

export function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollDice(count: number, sides: number): DiceRoll {
  const rolls = Array.from({ length: Math.max(0, count) }, () => rollDie(sides));
  return { total: rolls.reduce((a, b) => a + b, 0), rolls };
}

const DICE_RE = /(\d*)\s*d\s*(\d+)/gi;
const MOD_RE = /([+-])\s*(\d+)/g;

function parseModifier(expr: string): number {
  let mod = 0;
  for (const m of expr.matchAll(MOD_RE)) {
    const end = (m.index ?? 0) + m[0].length;
    // Skip signed numbers that are actually dice counts ("1d6+2d4" → the +2).
    if (expr[end] === "d" || expr[end] === "D") continue;
    mod = Number(m[1] + m[2]);
  }
  return mod;
}

/**
 * Parses damage expressions like "1d8+4", "2d6-1 cortante" or "1d6 + 1d4+2".
 * Returns null when the expression contains no dice at all.
 */
export function parseDamageExpression(expr: string): ParsedDamage | null {
  const dice: DiceGroup[] = [];
  for (const m of expr.matchAll(DICE_RE)) {
    const count = m[1] ? Number(m[1]) : 1;
    const sides = Number(m[2]);
    if (count > 0 && sides > 0) dice.push({ count, sides });
  }
  if (dice.length === 0) return null;
  return { dice, mod: parseModifier(expr) };
}

export function rollParsedDamage(parsed: ParsedDamage): DiceRoll & { mod: number } {
  const rolls = parsed.dice.flatMap((g) => rollDice(g.count, g.sides).rolls);
  return { total: rolls.reduce((a, b) => a + b, 0) + parsed.mod, rolls, mod: parsed.mod };
}

export function rollAttack(bonus: number, mode: RollMode = "normal"): AttackRoll {
  const rolls = mode === "normal" ? [rollDie(20)] : [rollDie(20), rollDie(20)];
  const d20 =
    mode === "advantage"
      ? Math.max(...rolls)
      : mode === "disadvantage"
        ? Math.min(...rolls)
        : rolls[0];
  const nat = d20 === 20 ? "crit" : d20 === 1 ? "fumble" : null;
  return { d20, rolls, mode, total: d20 + bonus, nat };
}
