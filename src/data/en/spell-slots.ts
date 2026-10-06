import type { SpellcasterType } from "./classes";

const FULL: number[][] = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
  [4, 3, 3, 2, 0, 0, 0, 0, 0],
  [4, 3, 3, 3, 1, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 3, 2, 1, 0, 0],
  [4, 3, 3, 3, 3, 2, 1, 0, 0],
  [4, 3, 3, 3, 3, 2, 1, 1, 0],
  [4, 3, 3, 3, 3, 2, 1, 1, 0],
  [4, 3, 3, 3, 3, 3, 1, 1, 0],
  [4, 3, 3, 3, 3, 3, 2, 1, 0],
  [4, 3, 3, 3, 3, 3, 3, 2, 0],
  [4, 3, 3, 3, 3, 3, 3, 3, 0],
];

const PACT: { count: number; level: number }[] = [
  { count: 1, level: 1 },
  { count: 2, level: 1 },
  { count: 2, level: 2 },
  { count: 2, level: 2 },
  { count: 2, level: 3 },
  { count: 2, level: 3 },
  { count: 2, level: 4 },
  { count: 2, level: 4 },
  { count: 2, level: 5 },
  { count: 2, level: 5 },
  { count: 3, level: 5 },
  { count: 3, level: 5 },
  { count: 3, level: 5 },
  { count: 3, level: 5 },
  { count: 3, level: 5 },
  { count: 3, level: 5 },
  { count: 4, level: 5 },
  { count: 4, level: 5 },
  { count: 4, level: 5 },
  { count: 4, level: 5 },
];

export type SlotGroup = { level: number; max: number; source?: "full" | "pact" };

export function slotsForLevel(
  type: SpellcasterType,
  charLevel: number,
): SlotGroup[] {
  const level = Math.min(20, Math.max(1, charLevel));

  if (type === "none") return [];

  if (type === "full") {
    return FULL[level - 1]
      .map((max, i) => ({ level: i + 1, max }))
      .filter((s) => s.max > 0);
  }

  if (type === "half") {
    if (level < 2) return [];
    const row = FULL[Math.floor(level / 2) - 1];
    return row.map((max, i) => ({ level: i + 1, max })).filter((s) => s.max > 0);
  }

  const pact = PACT[level - 1];
  return [{ level: pact.level, max: pact.count }];
}
