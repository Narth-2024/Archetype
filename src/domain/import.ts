import type {
  AbilityKey,
  AbilityMode,
  Attack,
  AttackKind,
  CharacterDoc,
  ClassEntry,
  InventoryItem,
} from "./types";
import { ABILITY_KEYS, SKILL_KEYS } from "./types";

const PHOTO_LIMIT = 700_000;
const LORE_LIMIT = 30_000;
const NOTES_LIMIT = 10_000;

const ABILITY_MODES: AbilityMode[] = ["pontos", "array", "livre"];
const INVENTORY_CATEGORIES: InventoryItem["category"][] = [
  "arma",
  "armadura",
  "escudo",
  "ferramenta",
  "outro",
];
const ATTACK_KINDS: AttackKind[] = ["arma", "magico"];
const ATTACK_ABILITIES: (AbilityKey | "auto")[] = [...ABILITY_KEYS, "auto"];

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function int(v: unknown, fallback: number, min: number, max: number): number {
  if (typeof v !== "number" || !Number.isFinite(v)) return fallback;
  const n = Math.round(v);
  return Math.min(max, Math.max(min, n));
}

function bool(v: unknown, fallback = false): boolean {
  return typeof v === "boolean" ? v : fallback;
}

function strArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

function pickFrom<K extends string>(v: unknown, valid: readonly K[]): K[] {
  if (!Array.isArray(v)) return [];
  return v.filter(
    (x): x is K => typeof x === "string" && (valid as readonly string[]).includes(x),
  );
}

function intMap<K extends string>(
  source: unknown,
  keys: readonly K[],
  fallback: number,
  min: number,
  max: number,
): Record<K, number> {
  const rec = isRecord(source) ? source : {};
  const out = {} as Record<K, number>;
  for (const key of keys) out[key] = int(rec[key], fallback, min, max);
  return out;
}

function boolMap<K extends string>(source: unknown, keys: readonly K[]): Record<K, boolean> {
  const rec = isRecord(source) ? source : {};
  const out = {} as Record<K, boolean>;
  for (const key of keys) out[key] = bool(rec[key]);
  return out;
}

function slotsMap(source: unknown): Record<string, number> {
  const out: Record<string, number> = {};
  if (!isRecord(source)) return out;
  for (const [key, value] of Object.entries(source)) {
    out[key] = int(value, 0, 0, 99);
  }
  return out;
}

function normalizeClasses(id: Record<string, unknown>): ClassEntry[] {
  const raw = Array.isArray(id.classes)
    ? id.classes
    : typeof id.classId === "string" && id.classId
      ? [{ classId: id.classId, level: id.level }]
      : [];
  const out: ClassEntry[] = [];
  for (const entry of raw) {
    if (!isRecord(entry)) continue;
    const classId = str(entry.classId);
    if (!classId) continue;
    const level =
      typeof entry.level === "number" && Number.isFinite(entry.level)
        ? Math.round(entry.level)
        : 1;
    if (level < 1) continue;
    const item: ClassEntry = { classId, level: Math.min(level, 20) };
    const subclassId = str(entry.subclassId);
    if (subclassId) item.subclassId = subclassId;
    out.push(item);
  }
  return out;
}

function normalizeInventory(source: unknown): InventoryItem[] {
  if (!Array.isArray(source)) return [];
  const out: InventoryItem[] = [];
  source.forEach((entry, index) => {
    if (!isRecord(entry)) return;
    const category = str(entry.category);
    out.push({
      id: str(entry.id) || `imported-item-${index + 1}`,
      name: str(entry.name),
      qty: int(entry.qty, 1, 0, 9999),
      weight:
        typeof entry.weight === "number" && Number.isFinite(entry.weight)
          ? Math.min(9999, Math.max(0, entry.weight))
          : null,
      category: (INVENTORY_CATEGORIES as string[]).includes(category)
        ? (category as InventoryItem["category"])
        : "outro",
      catalogId: typeof entry.catalogId === "string" ? entry.catalogId : null,
      equipped: bool(entry.equipped),
      description: str(entry.description),
    });
  });
  return out;
}

function normalizeAttacks(source: unknown): Attack[] {
  if (!Array.isArray(source)) return [];
  const out: Attack[] = [];
  source.forEach((entry, index) => {
    if (!isRecord(entry)) return;
    const kind = str(entry.kind);
    const ability = str(entry.ability);
    out.push({
      id: str(entry.id) || `imported-attack-${index + 1}`,
      name: str(entry.name),
      kind: (ATTACK_KINDS as string[]).includes(kind)
        ? (kind as AttackKind)
        : "arma",
      weaponId: typeof entry.weaponId === "string" ? entry.weaponId : null,
      ability: (ATTACK_ABILITIES as string[]).includes(ability)
        ? (ability as AbilityKey | "auto")
        : "auto",
      magicBonus: int(entry.magicBonus, 0, -20, 20),
      proficient: bool(entry.proficient),
      damageDice: typeof entry.damageDice === "string" ? entry.damageDice : null,
      damageType: str(entry.damageType),
      range: str(entry.range),
      properties: str(entry.properties),
      description: str(entry.description),
    });
  });
  return out;
}

function normalizePhoto(source: unknown): string {
  if (typeof source !== "string" || source === "") return "";
  const valid =
    /^data:image\/(png|jpe?g|webp|gif|avif);base64,/.test(source) &&
    source.length <= PHOTO_LIMIT;
  return valid ? source : "";
}

/**
 * Validates and normalizes an untrusted document (e.g. an imported JSON export)
 * into a well-formed `CharacterDoc`. Legacy v1/v2 shapes (`classId` + `level`)
 * are converted the same way `migrateDoc` would. Returns `null` when the input
 * does not look like a character document at all.
 */
export function parseImportedDoc(raw: unknown): CharacterDoc | null {
  if (!isRecord(raw)) return null;
  const id = raw.identity;
  if (!isRecord(id)) return null;

  let raceId = str(id.raceId);
  let subraceId = str(id.subraceId);
  if (raceId === "humano_variante") {
    raceId = "humano";
    subraceId = "humano_variante";
  }

  const proficiencies = isRecord(raw.proficiencies) ? raw.proficiencies : {};
  const spellcasting = isRecord(raw.spellcasting) ? raw.spellcasting : {};
  const combat = isRecord(raw.combat) ? raw.combat : {};
  const abilityMode = str(id.abilityMode);

  return {
    schemaVersion: 3,
    step: int(raw.step, 0, 0, 9),
    complete: bool(raw.complete),
    identity: {
      name: str(id.name),
      player: str(id.player),
      raceId,
      subraceId,
      classes: normalizeClasses(id),
      backgroundId: str(id.backgroundId),
      alignment: str(id.alignment),
      xp: int(id.xp, 0, 0, 1_000_000),
      raceBonusChoices: pickFrom(id.raceBonusChoices, ABILITY_KEYS),
      abilityMode: (ABILITY_MODES as string[]).includes(abilityMode)
        ? (abilityMode as AbilityMode)
        : "pontos",
    },
    abilities: intMap(raw.abilities, ABILITY_KEYS, 10, 1, 99),
    saves: boolMap(raw.saves, ABILITY_KEYS),
    skills: boolMap(raw.skills, SKILL_KEYS),
    proficiencies: {
      armors: strArray(proficiencies.armors),
      weapons: strArray(proficiencies.weapons),
      tools: strArray(proficiencies.tools),
      languages: strArray(proficiencies.languages),
    },
    feats: strArray(raw.feats),
    specialPicks: strArray(raw.specialPicks),
    inventory: normalizeInventory(raw.inventory),
    attacks: normalizeAttacks(raw.attacks),
    spellcasting: {
      known: strArray(spellcasting.known),
      prepared: strArray(spellcasting.prepared),
      slotsUsed: slotsMap(spellcasting.slotsUsed),
    },
    combat: {
      hpCurrent: int(combat.hpCurrent, 0, 0, 9999),
      hpTemp: int(combat.hpTemp, 0, 0, 9999),
    },
    notes: str(raw.notes).slice(0, NOTES_LIMIT),
    photo: normalizePhoto(raw.photo),
    lore: str(raw.lore).slice(0, LORE_LIMIT),
  };
}
