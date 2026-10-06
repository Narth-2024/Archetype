import type { AbilityKey, SkillId } from "../../domain/types";

export type TraitDef = { name: string; description: string };

export type RaceDef = {
  id: string;
  name: string;
  speed: number;
  darkvision: number | null;
  size: string;
  abilityBonus: {
    fixed: Partial<Record<AbilityKey, number>>;
    flexible?: { count: number; amount: number };
  };
  languages: string[];
  proficiencies: { skills?: SkillId[]; weapons?: string[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

export type SubraceDef = {
  id: string;
  raceId: string;
  name: string;
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  speed?: number;
  darkvision?: number | null;
  languages?: string[];
  proficiencies?: { armors?: string[]; weapons?: string[]; skills?: SkillId[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

export const RACES: RaceDef[] = [
  {
    id: "humano",
    name: "Human",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    languages: ["Common", "your choice"],
    proficiencies: {},
    traits: [
      {
        name: "Versatility",
        description:
          "Humans adapt to any role: they gain +1 to every ability and an extra feat (in campaigns that use feats).",
      },
    ],
  },
  {
    id: "humano_variante",
    name: "Human (Variant)",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 2, amount: 1 } },
    languages: ["Common", "your choice"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Feat",
        description:
          "Gain a feat of your choice. Note its name and effect in the notes, if the table uses feats.",
      },
      {
        name: "Versatility",
        description:
          "+1 to two abilities of your choice (ability step) and one skill of your choice (skills step).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elf",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Common", "Elvish"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Keen Senses",
        description: "Proficiency in Perception and advantage on Perception checks that rely on sight.",
      },
      {
        name: "Trance",
        description: "Sleeps 4 hours a day and remains conscious during the watch.",
      },
      {
        name: "Fey Ancestry",
        description: "Advantage on saving throws against fey and cannot be charmed by them.",
      },
    ],
  },
  {
    id: "anao",
    name: "Dwarf",
    speed: 25,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Common", "Dwarvish"],
    proficiencies: { weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"] },
    traits: [
      {
        name: "Darkvision",
        description: "Sees 60 feet in dim light and 15 feet in darkness.",
      },
      {
        name: "Dwarven Resilience",
        description: "Advantage on saving throws against poison and resistance to poison damage.",
      },
      {
        name: "Dwarven Combat Training",
        description: "Proficiency with battleaxes, waraxes, hand axes, and light hammers.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Halfling",
    speed: 25,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Common", "Halfling"],
    proficiencies: {},
    traits: [
      {
        name: "Lucky",
        description: "When you fail an ability check, you can reroll and must use the new result.",
      },
      {
        name: "Brave",
        description: "Advantage on saving throws against fear; allies within 5 feet also benefit.",
      },
      {
        name: "Halfling Nimbleness",
        description: "You can move through the space of creatures larger than you.",
      },
    ],
  },
  {
    id: "meio_elfo",
    name: "Half-Elf",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Common", "Elvish", "your choice"],
    proficiencies: { skills: ["insight"] },
    traits: [
      {
        name: "Ancestral Versatility",
        description:
          "Gain +1 to two abilities of your choice (ability step).",
      },
      {
        name: "Darkvision",
        description: "Sees 60 feet in dim light and 15 feet in darkness.",
      },
      {
        name: "Fey Ancestry",
        description: "Advantage on saving throws against fey and cannot be charmed by them.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Half-Orc",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Common", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Darkvision",
        description: "Sees 60 feet in dim light and 15 feet in darkness.",
      },
      {
        name: "Relentless",
        description: "When you drop to 0 hit points but don't die, you return to 1 hit point (once per long rest).",
      },
      {
        name: "Savage Attacks",
        description: "On melee attacks, deals 1d6 extra damage beyond the normal roll (once per turn).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnome",
    speed: 25,
    darkvision: 60,
    size: "Small",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Common", "Gnomish"],
    proficiencies: {},
    traits: [
      {
        name: "Gnome Cunning",
        description: "Advantage on Intelligence checks (Arcana, Engineering, History, Nature, Religion).",
      },
      {
        name: "Naturally Stealthy",
        description: "Can try to hide behind creatures larger than you.",
      },
      {
        name: "Darkvision",
        description: "Sees 60 feet in dim light and 15 feet in darkness.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Common", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Darkvision",
        description: "Sees 60 feet in dim light and 15 feet in darkness.",
      },
      {
        name: "Hellish Resistance",
        description: "Resistance to fire damage.",
      },
      {
        name: "Infernal Legacy",
        description: "Knows a fire ray cantrip or an illusion cantrip at will (choose at creation).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Dragonborn",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Common", "Draconic"],
    proficiencies: {},
    traits: [
      {
        name: "Breath Weapon",
        description: "Breathes acid, fire, cold, lightning, or poison (1d10, recharge 5–6).",
      },
      {
        name: "Draconic Ancestry",
        description: "Resistance to the damage type of your lineage.",
      },
    ],
  },
];

export function getRace(id: string): RaceDef | undefined {
  return RACES.find((r) => r.id === id);
}

export const SUBRACES: SubraceDef[] = [
  {
    id: "anao_colinano",
    raceId: "anao",
    name: "Hill Dwarf",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Dwarven Toughness",
        description: "Your hit point maximum increases by 1 for each level gained.",
      },
    ],
  },
  {
    id: "anao_da_montanha",
    raceId: "anao",
    name: "Mountain Dwarf",
    abilityBonus: { str: 2 },
    proficiencies: { armors: ["leve", "media"] },
    traits: [
      {
        name: "Dwarven Armor Training",
        description: "Proficient with light and medium armor.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "High Elf",
    abilityBonus: { int: 1 },
    languages: ["your choice"],
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Elf Weapon Training",
        description:
          "Proficient with longswords, short swords, shortbows, and longbows.",
      },
      {
        name: "Cantrip",
        description:
          "Knows one cantrip from the wizard spell list (INT as the spellcasting ability).",
      },
      {
        name: "Extra Language",
        description: "Gain one language of your choice.",
      },
    ],
  },
  {
    id: "elfo_silvestre",
    raceId: "elfo",
    name: "Wood Elf",
    abilityBonus: { wis: 1 },
    speed: 35,
    traits: [
      {
        name: "Fleet of Foot",
        description: "Your base walking speed increases to 35 feet.",
      },
      {
        name: "Mask of the Wild",
        description:
          "Can try to hide even when only lightly obscured by vegetation, heavy rain, mist, and so on.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Lightfoot Halfling",
    abilityBonus: { cha: 1 },
    traits: [
      {
        name: "Naturally Stealthy",
        description:
          "Can try to hide behind a creature larger than you.",
      },
    ],
  },
  {
    id: "halfling_robusto",
    raceId: "halfling",
    name: "Stout Halfling",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Stout Resilience",
        description:
          "Advantage on saving throws against poison and resistance to poison damage.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Forest Gnome",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Natural Illusionist",
        description: "Knows the Minor Illusion cantrip (INT as the ability).",
      },
      {
        name: "Speak with Small Beasts",
        description:
          "Can communicate in a simple way with beasts that can hear you.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Rock Gnome",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Artificer's Lore",
        description:
          "+2 on History checks related to magic items and gizmos.",
      },
      {
        name: "Tinker",
        description:
          "Proficient with tinker's tools; can build a small mechanical device.",
      },
    ],
  },
];

export function getSubrace(id: string): SubraceDef | undefined {
  return SUBRACES.find((s) => s.id === id);
}

export function subracesForRace(raceId: string): SubraceDef[] {
  return SUBRACES.filter((s) => s.raceId === raceId);
}
