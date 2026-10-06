import type { AbilityKey, CharacterDoc, SkillId } from "./types";
import { ABILITY_KEYS, SKILL_KEYS } from "./types";

function record<K extends string>(keys: readonly K[], value: boolean): Record<K, boolean> {
  const out = {} as Record<K, boolean>;
  for (const k of keys) out[k] = value;
  return out;
}

function baseAbilities(): Record<AbilityKey, number> {
  const out = {} as Record<AbilityKey, number>;
  for (const k of ABILITY_KEYS) out[k] = 10;
  return out;
}

export function newCharacterDoc(): CharacterDoc {
  return {
    schemaVersion: 3,
    step: 0,
    complete: false,
    identity: {
      name: "",
      player: "",
      raceId: "",
      subraceId: "",
      classes: [],
      backgroundId: "",
      alignment: "",
      xp: 0,
      raceBonusChoices: [],
      abilityMode: "pontos",
    },
    abilities: baseAbilities(),
    saves: record(ABILITY_KEYS, false),
    skills: record(SKILL_KEYS, false) as Record<SkillId, boolean>,
    proficiencies: { armors: [], weapons: [], tools: [], languages: [] },
    feats: [],
    inventory: [],
    attacks: [],
    spellcasting: { known: [], prepared: [], slotsUsed: {} },
    combat: { hpCurrent: 0, hpTemp: 0 },
    notes: "",
    photo: "",
    lore: "",
  };
}
