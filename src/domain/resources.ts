import type { CharacterDoc } from "./types";
import { PT_BUNDLE } from "../data";
import type { DataBundle } from "../data";
import { classEntries, scoreMod } from "./calc";

export const RESOURCE_KEYS = [
  "inspiracao_bardica",
  "pontos_de_ki",
  "furia",
  "pontos_metamagia",
] as const;

export type ResourceKey = (typeof RESOURCE_KEYS)[number];

export function isResourceKey(value: unknown): value is ResourceKey {
  return (
    typeof value === "string" &&
    (RESOURCE_KEYS as readonly string[]).includes(value)
  );
}

export const RESOURCE_I18N_KEY: Record<ResourceKey, string> = {
  inspiracao_bardica: "sheet.res.inspiracao_bardica",
  pontos_de_ki: "sheet.res.pontos_de_ki",
  furia: "sheet.res.furia",
  pontos_metamagia: "sheet.res.pontos_metamagia",
};

export type ClassResource = {
  key: ResourceKey;
  /** null = unlimited (e.g. a level 20 barbarian's rages). */
  max: number | null;
};

export type ClassResourceState = ClassResource & { used: number };

function rageMax(level: number): number | null {
  if (level >= 20) return null; // unlimited
  if (level >= 17) return 6;
  if (level >= 12) return 5;
  if (level >= 6) return 4;
  if (level >= 3) return 3;
  return 2;
}

/**
 * Long-rest resources granted by the character's classes, sized by the level
 * of each class (multiclassing keeps them separate).
 */
export function classResources(
  c: CharacterDoc,
  d: DataBundle = PT_BUNDLE,
): ClassResource[] {
  const out: ClassResource[] = [];
  for (const e of classEntries(c)) {
    switch (e.classId) {
      case "bardo":
        out.push({
          key: "inspiracao_bardica",
          max: Math.max(1, scoreMod(c, "cha", d)),
        });
        break;
      case "monge":
        if (e.level >= 2) out.push({ key: "pontos_de_ki", max: e.level });
        break;
      case "barbaro":
        out.push({ key: "furia", max: rageMax(e.level) });
        break;
      case "feiticeiro":
        if (e.level >= 2) out.push({ key: "pontos_metamagia", max: e.level });
        break;
    }
  }
  return out;
}

/** Merges computed resources with the used counts stored on the document. */
export function resourceStates(
  c: CharacterDoc,
  d: DataBundle = PT_BUNDLE,
): ClassResourceState[] {
  return classResources(c, d).map((r) => ({
    ...r,
    used: Math.min(r.max ?? 99, resourceUsed(c, r.key)),
  }));
}

export function resourceUsed(c: CharacterDoc, key: ResourceKey): number {
  return c.resources?.[key] ?? 0;
}

/** Sanitizes an arbitrary record into used counts with known keys only. */
export function normalizeResources(raw: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (typeof raw !== "object" || raw === null) return out;
  for (const key of RESOURCE_KEYS) {
    const v = (raw as Record<string, unknown>)[key];
    if (typeof v === "number" && Number.isFinite(v)) {
      out[key] = Math.min(99, Math.max(0, Math.floor(v)));
    }
  }
  return out;
}
