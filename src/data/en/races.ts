import type { AbilityKey, SkillId } from "../../domain/types";

export type TraitDef = { name: string; description: string };

export type RaceDef = {
  id: string;
  name: string;
  source: string;
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
  source: string;
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  flexible?: { count: number; amount: number };
  replacesAbilityBonus?: boolean;
  replacesTraits?: boolean;
  speed?: number;
  darkvision?: number | null;
  languages?: string[];
  proficiencies?: { armors?: string[]; weapons?: string[]; skills?: SkillId[] };
  skillChoices?: { count: number; options: SkillId[] | "any" };
  traits: TraitDef[];
};

const ASI_FLOATING: TraitDef = {
  name: "Ability Score Increase",
  description:
    "Increase one ability score by +2 and another by +1, or three different ability scores by +1 (ability step; the sheet applies it as +1 to three picks).",
};

export const RACES: RaceDef[] = [
  {
    id: "humano",
    name: "Human",
    source: "phb",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      {
        name: "Versatility",
        description:
          "Gain +1 to every ability score. The variant subrace replaces this bonus with +1 to two ability scores of your choice.",
      },
    ],
  },
  {
    id: "anao",
    name: "Dwarf",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { con: 2 } },
    languages: ["Common", "Dwarvish"],
    proficiencies: {
      weapons: ["machado_de_batalha", "machado_de_mao", "martelo_leve", "machado_guerra"],
    },
    traits: [
      {
        name: "Heavy Armor Speed",
        description: "Your speed is not reduced by wearing heavy armor.",
      },
      {
        name: "Dwarven Resilience",
        description:
          "Advantage on saving throws to avoid or end the poisoned condition, and resistance to poison damage.",
      },
      {
        name: "Dwarven Combat Training",
        description:
          "Proficient with battleaxes, waraxes, hand axes, and light hammers.",
      },
      {
        name: "Stonecunning",
        description:
          "When you make a History check related to stonework or underground construction, add double your proficiency bonus (if you already add it).",
      },
      {
        name: "Artisan's Tools",
        description:
          "Proficient with a set of artisan's tools of your choice (e.g., smith's, brewer's, or mason's tools).",
      },
    ],
  },
  {
    id: "elfo",
    name: "Elf",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Common", "Elvish"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Keen Senses",
        description:
          "Proficiency in Perception and advantage on Perception checks that rely on sight.",
      },
      {
        name: "Fey Ancestry",
        description:
          "Advantage on saving throws to avoid or end the charmed condition, and magic can't put you to sleep.",
      },
      {
        name: "Trance",
        description:
          "You don't need to sleep; you meditate for 4 hours to gain the benefits of a long rest and remain conscious.",
      },
    ],
  },
  {
    id: "halfling",
    name: "Halfling",
    source: "phb",
    speed: 25,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Common", "Halfling"],
    proficiencies: {},
    traits: [
      {
        name: "Lucky",
        description:
          "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll and must use the new result.",
      },
      {
        name: "Brave",
        description: "Advantage on saving throws against fear.",
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
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Common", "Elvish", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      {
        name: "Half-Elf Versatility",
        description:
          "Gain +1 to two ability scores of your choice (ability step) and two skills of your choice (skills step). Alternatively, the book allows swapping this for Elf Weapon Training, a cantrip, 35 feet of speed, Mask of the Wild, Drow Magic, or swimming.",
      },
      {
        name: "Fey Ancestry",
        description:
          "Advantage on saving throws against fey and you can't be charmed by them; magic can't put you to sleep.",
      },
      {
        name: "Darkvision",
        description: "You can see 60 feet in dim light and 15 feet in darkness.",
      },
    ],
  },
  {
    id: "meio_orco",
    name: "Half-Orc",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { str: 2, con: 1 } },
    languages: ["Common", "Orc"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Menacing",
        description: "Proficiency in Intimidation.",
      },
      {
        name: "Relentless",
        description:
          "When you drop to 0 hit points but don't die, you return to 1 hit point (once per long rest).",
      },
      {
        name: "Savage Attacks",
        description:
          "On melee attacks, you deal 1d6 extra damage beyond the normal roll (once per turn).",
      },
    ],
  },
  {
    id: "gnomo",
    name: "Gnome",
    source: "phb",
    speed: 25,
    darkvision: 60,
    size: "Small",
    abilityBonus: { fixed: { int: 2 } },
    languages: ["Common", "Gnomish"],
    proficiencies: {},
    traits: [
      {
        name: "Gnome Cunning",
        description:
          "Advantage on Intelligence checks (Arcana, Engineering, History, Nature, Religion).",
      },
    ],
  },
  {
    id: "draconato",
    name: "Dragonborn",
    source: "phb",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { str: 2, cha: 1 } },
    languages: ["Common", "Draconic"],
    proficiencies: {},
    traits: [
      {
        name: "Draconic Ancestry",
        description:
          "Choose a dragon type: it determines the damage and area of your breath weapon and the resistance you gain.",
      },
      {
        name: "Breath Weapon",
        description:
          "As an action, you exhale energy in your ancestry's area; saving throw (DC 8 + prof + CON), 2d6 damage (half on a success), increasing to 3d6 at 6th, 4d6 at 11th, and 5d6 at 16th level; once per short or long rest.",
      },
      {
        name: "Damage Resistance",
        description: "Resistance to your ancestry's damage type.",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    source: "phb",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Common", "Infernal"],
    proficiencies: {},
    traits: [
      {
        name: "Hellish Resistance",
        description: "Resistance to fire damage.",
      },
      {
        name: "Infernal Legacy",
        description:
          "Choose a subrace (lineage) to gain its magical traits; the Asmodeus one is from the Player's Handbook.",
      },
    ],
  },
  {
    id: "genasi",
    name: "Genasi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [ASI_FLOATING],
  },
  {
    id: "linhagem_personalizada",
    name: "Custom Lineage",
    source: "tce",
    speed: 30,
    darkvision: 60,
    size: "Small or Medium",
    abilityBonus: { fixed: {}, flexible: { count: 1, amount: 2 } },
    languages: ["Common"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Creature Type",
        description:
          "You choose your creature type (the default is humanoid), in addition to your size and the traits below.",
      },
      {
        name: "Variable Trait",
        description:
          "Choose darkvision of 60 feet or proficiency in one skill of your choice; this sheet lists both — note your pick in the notes.",
      },
      {
        name: "Feat",
        description: "You start with a feat of your choice.",
      },
      {
        name: "Ability Score Increase",
        description: "+2 to one ability score of your choice (ability step).",
      },
    ],
  },
  {
    id: "aarakocra",
    name: "Aarakocra",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Flight",
        description:
          "Your wings give you a flying speed equal to your walking speed (30 feet); you can't fly while wearing medium or heavy armor.",
      },
      {
        name: "Talons",
        description:
          "Your unarmed attacks with talons deal 1d6 + STR modifier slashing damage.",
      },
      {
        name: "Wind Caller",
        description:
          "At 3rd level, you cast Gust of Wind with this trait, without material components; once per long rest (or with spell slots).",
      },
    ],
  },
  {
    id: "aasimar",
    name: "Aasimar",
    source: "vg",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Common", "Celestial"],
    proficiencies: {},
    traits: [
      {
        name: "Celestial Resistance",
        description: "Resistance to necrotic and radiant damage.",
      },
      {
        name: "Healing Hands",
        description:
          "As an action, you touch a creature and it regains hit points equal to your level; once per long rest.",
      },
      {
        name: "Lightbearer",
        description: "You know the Light cantrip; Charisma is your spellcasting ability.",
      },
    ],
  },
  {
    id: "metamorfo",
    name: "Changeling",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: {
      count: 2,
      options: ["deception", "insight", "intimidation", "performance", "persuasion"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a fey (not a humanoid).",
      },
      {
        name: "Changeling Instincts",
        description:
          "Proficient in two skills of your choice: Deception, Insight, Intimidation, Performance, or Persuasion (skills step).",
      },
      {
        name: "Shapechanger",
        description:
          "As an action, you change your appearance and voice and alternate between Medium and Small; you can't copy someone you have never seen or rearrange your limbs.",
      },
    ],
  },
  {
    id: "fada",
    name: "Fairy",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a fey (not a humanoid).",
      },
      {
        name: "Fairy Magic",
        description:
          "You know Prestidigitation; at 3rd level you cast Faerie Fire and at 5th level Enlarge/Reduce with this trait (once per long rest each, or with spell slots); Wisdom, Intelligence, or Charisma is your ability.",
      },
      {
        name: "Flight",
        description:
          "Your wings give you a flying speed equal to your walking speed; you can't fly while wearing medium or heavy armor.",
      },
    ],
  },
  {
    id: "firbolg",
    name: "Firbolg",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Firbolg Magic",
        description:
          "You cast Detect Magic and Disguise Self with this trait (with the disguise you can appear up to 1 meter taller or shorter); once per long rest each.",
      },
      {
        name: "Hidden Step",
        description:
          "As a bonus action, you become magically invisible until the start of your next turn or until you attack; uses = proficiency bonus (long rest).",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger for carrying capacity and the weight you push or drag.",
      },
      {
        name: "Speech of Beast and Leaf",
        description:
          "Beasts and plants understand your words, and you have advantage on Charisma checks to influence them.",
      },
    ],
  },
  {
    id: "githyanki",
    name: "Githyanki",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Astral Knowledge",
        description:
          "After a long rest, you gain proficiency in one skill and one weapon or tool of your choice, until the end of your next long rest.",
      },
      {
        name: "Githyanki Psionics",
        description:
          "You know Mage Hand (invisible); at 3rd level Jump and at 5th level Misty Step with this trait (once per long rest each, without components).",
      },
      {
        name: "Psychic Resilience",
        description: "Resistance to psychic damage.",
      },
    ],
  },
  {
    id: "githzerai",
    name: "Githzerai",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Githzerai Psionics",
        description:
          "You know Mage Hand (invisible); at 3rd level Shield and at 5th level Detect Thoughts with this trait (once per long rest each).",
      },
      {
        name: "Mental Discipline",
        description:
          "Advantage on saving throws to avoid or end the charmed and frightened conditions.",
      },
      {
        name: "Psychic Resilience",
        description: "Resistance to psychic damage.",
      },
    ],
  },
  {
    id: "goliath",
    name: "Goliath",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["athletics"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Little Giant",
        description:
          "Proficiency in Athletics and you count as one size larger for carrying capacity and dragging.",
      },
      {
        name: "Mountain Born",
        description:
          "Resistance to cold damage and natural adaptation to high altitudes (including above 6,000 m).",
      },
      {
        name: "Stone's Endurance",
        description:
          "When you take damage, as a reaction you roll 1d12 + your CON modifier and reduce the damage; uses = proficiency bonus (long rest).",
      },
    ],
  },
  {
    id: "harengon",
    name: "Harengon",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["perception"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Hare-Trigger",
        description: "Add your proficiency bonus to initiative.",
      },
      {
        name: "Leporine Senses",
        description: "Proficiency in Perception.",
      },
      {
        name: "Lucky Foot",
        description:
          "When you fail a DEX save, as a reaction you roll 1d4 and add it; it doesn't work while you're prone or have 0 speed.",
      },
      {
        name: "Rabbit Hop",
        description:
          "As a bonus action, you jump a distance equal to five times your proficiency bonus in feet, without provoking opportunity attacks; uses = proficiency bonus.",
      },
    ],
  },
  {
    id: "kenku",
    name: "Kenku",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Expert Forgery",
        description:
          "Advantage on ability checks to perfectly copy a piece of writing or artwork, yours or someone else's.",
      },
      {
        name: "Kenku Recall",
        description:
          "Proficient in two skills of your choice (skills step) and you can give yourself advantage on one check with a skill you're proficient in; uses = proficiency bonus.",
      },
      {
        name: "Mimicry",
        description:
          "You can accurately imitate sounds you have heard, including voices; it is noticed only with a WIS (Insight) check against DC 8 + prof + CHA.",
      },
    ],
  },
  {
    id: "locathah",
    name: "Locathah",
    source: "lr",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { str: 2, dex: 1 } },
    languages: ["Common", "Primordial"],
    proficiencies: { skills: ["athletics", "perception"] },
    traits: [
      {
        name: "Natural Armor",
        description:
          "Without armor, your AC is 12 + DEX modifier (use it if it's higher than worn armor; shield applies normally).",
      },
      {
        name: "Leviathan Will",
        description:
          "Advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or asleep.",
      },
      {
        name: "Limited Amphibiousness",
        description:
          "You can breathe air and water, but you must submerge at least every 4 hours to avoid suffocating.",
      },
    ],
  },
  {
    id: "owlin",
    name: "Owlin",
    source: "scc",
    speed: 30,
    darkvision: 120,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      {
        name: "Ability Score Increase",
        description:
          "+2 to one ability score and +1 to another (ability step; the sheet applies it as +1 to three picks).",
      },
      {
        name: "Flight",
        description:
          "Your wings give you a flying speed equal to your walking speed; you can't fly while wearing medium or heavy armor.",
      },
      {
        name: "Silent Feathers",
        description: "Proficiency in Stealth.",
      },
    ],
  },
  {
    id: "satiro",
    name: "Satyr",
    source: "mtotm",
    speed: 35,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["performance", "persuasion"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a fey (not a humanoid).",
      },
      {
        name: "Ram",
        description:
          "Your unarmed attacks with your head and horns deal 1d6 + STR modifier bludgeoning damage.",
      },
      {
        name: "Magic Resistance",
        description: "Advantage on saving throws against spells.",
      },
      {
        name: "Mirthful Leaps",
        description:
          "On long or high jumps, roll 1d8 and add the feet (even without a running start); the extra distance costs movement normally.",
      },
      {
        name: "Reveler",
        description:
          "Proficiency in Performance and Persuasion and in one musical instrument of your choice.",
      },
    ],
  },
  {
    id: "tabaxi",
    name: "Tabaxi",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["perception", "stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Cat's Claws",
        description:
          "Your unarmed attacks with claws deal 1d6 + STR modifier slashing damage; you also have a climbing speed equal to your walking speed.",
      },
      {
        name: "Cat's Talent",
        description: "Proficiency in Perception and Stealth.",
      },
      {
        name: "Feline Agility",
        description:
          "On your turn, you can double your movement speed; you can't use it again until you move 0 feet on one of your turns.",
      },
    ],
  },
  {
    id: "tortle",
    name: "Tortle",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["animal_handling", "medicine", "nature", "perception", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Claws",
        description:
          "Your unarmed attacks with claws deal 1d6 + STR modifier slashing damage.",
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 1 hour.",
      },
      {
        name: "Natural Armor",
        description:
          "Your shell gives you a base AC of 17 (ignores DEX modifier); you can't wear light, medium, or heavy armor (shield applies).",
      },
      {
        name: "Nature's Intuition",
        description:
          "Proficient in one skill of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival (skills step).",
      },
      {
        name: "Shell Defense",
        description:
          "As an action, you retract into your shell: +4 AC and advantage on STR and CON saving throws, but you are prone, your speed is 0, and you can only act with a bonus action to come out.",
      },
    ],
  },
  {
    id: "tritao",
    name: "Triton",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Amphibious",
        description:
          "You can breathe air and water and have a swimming speed equal to your walking speed.",
      },
      {
        name: "Control of Air and Water",
        description:
          "You cast Fog Cloud with this trait; at 3rd level Gust of Wind and at 5th level Water Walk (once per long rest each, or with spell slots).",
      },
      {
        name: "Emissary of the Sea",
        description:
          "You can communicate simple ideas with beasts, elementals, and monsters that have a swimming speed; they understand you, but you don't understand them in return.",
      },
      {
        name: "Guardians of the Depths",
        description: "Resistance to cold damage.",
      },
    ],
  },
  {
    id: "verdan",
    name: "Verdan",
    source: "ai",
    speed: 30,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: { cha: 2, con: 1 } },
    languages: ["Common", "Goblin", "One other (your choice)"],
    proficiencies: { skills: ["persuasion"] },
    traits: [
      {
        name: "Growth",
        description: "You become Medium when you reach 5th level.",
      },
      {
        name: "Black Blood Healing",
        description:
          "When you spend a Hit Die and roll a 1 or 2, you can reroll and must use the new result.",
      },
      {
        name: "Limited Telepathy",
        description:
          "You can telepathically speak to creatures you can see within 30 feet, without a common language, but only simple ideas.",
      },
      {
        name: "Persuasive",
        description: "Proficiency in Persuasion.",
      },
      {
        name: "Telepathic Insight",
        description: "Advantage on all Wisdom and Charisma saving throws.",
      },
    ],
  },
  {
    id: "bugbear",
    name: "Bugbear",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["stealth"] },
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description:
          "You are a humanoid and are also considered a goblin for prerequisites and effects.",
      },
      {
        name: "Fey Ancestry",
        description:
          "Advantage on saving throws to avoid or end the charmed condition.",
      },
      {
        name: "Long-Limbed",
        description: "Your reach on melee attacks is 5 feet greater.",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger for carrying capacity and dragging.",
      },
      {
        name: "Sneaky",
        description:
          "Proficiency in Stealth and you can move (and stop) through the space of a Small creature without squeezing.",
      },
      {
        name: "Surprise Attack",
        description:
          "If you hit a creature that hasn't acted in the combat yet, it takes an extra 2d6 damage.",
      },
    ],
  },
  {
    id: "centauro",
    name: "Centaur",
    source: "mtotm",
    speed: 40,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["animal_handling", "medicine", "nature", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a fey (not a humanoid).",
      },
      {
        name: "Charge",
        description:
          "If you move at least 30 feet in a straight line and hit with a melee attack on the same turn, you can attack again as a bonus action using your hooves.",
      },
      {
        name: "Equine Build",
        description:
          "You count as one size larger for carrying/dragging; climbing costs 4 extra feet per foot (instead of 1).",
      },
      {
        name: "Hooves",
        description:
          "Your unarmed attacks with hooves deal 1d6 + STR modifier bludgeoning damage.",
      },
      {
        name: "Natural Affinity",
        description:
          "Proficient in one skill of your choice: Animal Handling, Medicine, Nature, or Survival (skills step).",
      },
    ],
  },
  {
    id: "goblin",
    name: "Goblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description:
          "You are a humanoid and are also considered a goblin for prerequisites and effects.",
      },
      {
        name: "Fey Ancestry",
        description:
          "Advantage on saving throws to avoid or end the charmed condition.",
      },
      {
        name: "Fury of the Small",
        description:
          "When you damage a creature larger than you, you can deal extra damage equal to your proficiency bonus; uses = proficiency bonus (long rest), max 1 per round.",
      },
      {
        name: "Nimble Escape",
        description:
          "You can take the Disengage or Hide action as a bonus action.",
      },
    ],
  },
  {
    id: "grung",
    name: "Grung",
    source: "oga",
    speed: 25,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: { dex: 2, con: 1 } },
    languages: ["Grung"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Arboreal Vigilance",
        description: "Proficiency in Perception.",
      },
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Poison Immunity",
        description:
          "You are immune to poison damage and the poisoned condition.",
      },
      {
        name: "Toxic Skin",
        description:
          "A creature that grapples you or touches your skin must make a CON save (DC 12) or is poisoned for 1 minute; you can also poison piercing weapons.",
      },
      {
        name: "Springy Leap",
        description:
          "Jumps of up to 25 feet (long) and 15 feet (high), with or without a running start.",
      },
      {
        name: "Water Dependency",
        description:
          "If you don't submerge in water for 1 hour during the day, you gain 1 level of exhaustion (only magic or 1 hour submerged cures it).",
      },
      {
        name: "Climbing",
        description: "Your climbing speed equals your walking speed (25 feet).",
      },
    ],
  },
  {
    id: "hobgoblin",
    name: "Hobgoblin",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description:
          "You are a humanoid and are also considered a goblin for prerequisites and effects.",
      },
      {
        name: "Fey Ancestry",
        description:
          "Advantage on saving throws to avoid or end the charmed condition.",
      },
      {
        name: "Fey Gift",
        description:
          "Help as a bonus action, uses = proficiency bonus (long rest); at 3rd level choose Hospitality (1d6 + PB temporary hit points), Passage (+10 feet), or Spite (disadvantage on the target's next attack).",
      },
      {
        name: "Fortune of the Crowd",
        description:
          "When you miss an attack or fail a check or saving throw, add the number of allies you can see within 30 feet (max +3); uses = proficiency bonus.",
      },
    ],
  },
  {
    id: "kobold",
    name: "Kobold",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Draconic Cry",
        description:
          "As a bonus action, you cry out against enemies within 10 feet: you and your allies have advantage on attacks against them until the start of your next turn; uses = proficiency bonus (long rest).",
      },
      {
        name: "Kobold Legacy",
        description:
          "Choose one: Cunning (proficiency in Arcana, Investigation, Medicine, Prestidigitation, or Survival), Defiant (advantage on saving throws against fear), or Draconic Sorcery (you know one cantrip from the sorcerer list).",
      },
    ],
  },
  {
    id: "lizardfolk",
    name: "Lizardfolk",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: {
      count: 2,
      options: ["animal_handling", "medicine", "nature", "perception", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Bite",
        description:
          "Your unarmed attacks with your jaws deal 1d6 + STR modifier slashing damage.",
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 15 minutes.",
      },
      {
        name: "Hungry Jaws",
        description:
          "As a bonus action, you bite; on a hit, you deal normal damage and gain temporary hit points equal to your proficiency bonus; uses = proficiency bonus.",
      },
      {
        name: "Natural Armor",
        description:
          "Without armor, your AC is 13 + DEX modifier (use it if it's higher than worn armor).",
      },
      {
        name: "Nature's Intuition",
        description:
          "Proficient in two skills of your choice among Animal Handling, Medicine, Nature, Perception, Stealth, and Survival (skills step).",
      },
      {
        name: "Swimming",
        description: "Your swimming speed equals your walking speed (30 feet).",
      },
    ],
  },
  {
    id: "minotauro",
    name: "Minotaur",
    source: "mtotm",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Horns",
        description:
          "Your unarmed attacks with horns deal 1d6 + STR modifier piercing damage.",
      },
      {
        name: "Gore",
        description:
          "Right after using the Dash action and moving 20+ feet, you can attack with your horns as a bonus action.",
      },
      {
        name: "Hammering Horns",
        description:
          "After hitting with a melee attack, you can push the creature as a bonus action (DC 8 + prof + STR, at most one size larger).",
      },
      {
        name: "Labyrinthine Recall",
        description:
          "You always know which way is north and have advantage on WIS (Survival) checks to navigate or track.",
      },
    ],
  },
  {
    id: "orc",
    name: "Orc",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Adrenaline Rush",
        description:
          "You can take the Dash action as a bonus action and, when you do, gain temporary hit points equal to your proficiency bonus; uses = proficiency bonus (long rest).",
      },
      {
        name: "Powerful Build",
        description:
          "You count as one size larger for carrying capacity and dragging.",
      },
      {
        name: "Relentless Endurance",
        description:
          "When you are reduced to 0 hit points without dying, you can drop to 1 hit point instead (once per long rest).",
      },
    ],
  },
  {
    id: "shifter",
    name: "Shifter",
    source: "erlw",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: {} },
    languages: ["Common"],
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Keen Senses",
        description: "Proficiency in Perception.",
      },
      {
        name: "Shifting",
        description:
          "As a bonus action, you assume a bestial appearance for 1 minute, gaining temporary hit points = your level + CON modifier (min. 1), plus your subrace's benefit; once until you finish a short or long rest.",
      },
      {
        name: "Ability Score Increase",
        description:
          "Your ability bonus comes from the chosen subrace (ability step).",
      },
    ],
  },
  {
    id: "yuanti",
    name: "Yuan-Ti",
    source: "mtotm",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Magic Resistance",
        description: "Advantage on saving throws against spells.",
      },
      {
        name: "Poison Resilience",
        description:
          "Advantage on saving throws to avoid or end the poisoned condition, and resistance to poison damage.",
      },
      {
        name: "Serpentine Spellcasting",
        description:
          "You know Poison Spray and can cast Animal Friendship an unlimited number of times (only against snakes); at 3rd level, Suggestion (once per long rest).",
      },
    ],
  },
  {
    id: "kender",
    name: "Kender",
    source: "dsotdq",
    speed: 30,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["insight", "investigation", "sleight_of_hand", "stealth", "survival"],
    },
    traits: [
      ASI_FLOATING,
      {
        name: "Fearless",
        description:
          "Advantage on saving throws against fear; when you fail, you can choose to succeed (once per long rest).",
      },
      {
        name: "Kender Aptitude",
        description:
          "Proficient in one skill of your choice: Insight, Investigation, Sleight of Hand, Stealth, or Survival (skills step).",
      },
      {
        name: "Taunt",
        description:
          "As a bonus action, a creature within 60 feet that can hear you must make a WIS save or have disadvantage on attacks against targets other than you; DC 8 + prof + INT/WIS/CHA.",
      },
    ],
  },
  {
    id: "kalashtar",
    name: "Kalashtar",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { wis: 2, cha: 1 } },
    languages: ["Common", "Quori", "One other (your choice)"],
    proficiencies: {},
    traits: [
      {
        name: "Dual Mind",
        description: "Advantage on all Wisdom saving throws.",
      },
      {
        name: "Mental Discipline",
        description: "Resistance to psychic damage.",
      },
      {
        name: "Mind Link",
        description:
          "You can telepathically speak to creatures you can see within 10 feet × your level, without a common language (the creature must understand at least one language).",
      },
      {
        name: "Separated from Dreams",
        description:
          "You are immune to spells and effects that require you to dream (e.g., Dream), but not to effects that put you to sleep.",
      },
    ],
  },
  {
    id: "warforged",
    name: "Warforged",
    source: "erlw",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 1, options: "any" },
    traits: [
      {
        name: "Ability Score Increase",
        description:
          "+2 to CON and +1 to one ability score of your choice (ability step).",
      },
      {
        name: "Constructed Resilience",
        description:
          "Advantage on saving throws against poison, resistance to poison, immune to disease, you don't need to eat, drink, or breathe, or sleep.",
      },
      {
        name: "Sentry's Rest",
        description:
          "During a long rest, you spend at least 6 hours inactive and motionless, but remain conscious.",
      },
      {
        name: "Integrated Protection",
        description:
          "+1 AC; you incorporate armors you are proficient with into your body in 1 hour (removes it in 1 hour; you can rest during it).",
      },
      {
        name: "Specialized Design",
        description:
          "Proficient in one skill of your choice (skills step) and one tool of your choice.",
      },
    ],
  },
  {
    id: "dhampir",
    name: "Dhampir",
    source: "vgr",
    speed: 35,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral Legacy",
        description:
          "If you replaced another race with this lineage, you can keep the skills and speeds you gained from it; otherwise, you gain proficiency in two skills of your choice (skills step).",
      },
      {
        name: "Deathless Nature",
        description: "You don't need to breathe.",
      },
      {
        name: "Spider Climb",
        description:
          "Climbing speed equals your walking speed; at 3rd level you climb vertical surfaces and ceilings without using your hands.",
      },
      {
        name: "Vampiric Bite",
        description:
          "Unarmed attack using CON for attack and damage, 1d4 piercing (advantage at half hit points or fewer); on hitting a creature that isn't a construct or undead, you regain hit points equal to the damage or store it for your next attack.",
      },
    ],
  },
  {
    id: "hexblood",
    name: "Hexblood",
    source: "vgr",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral Legacy",
        description:
          "If you replaced another race with this lineage, you can keep the skills and speeds you gained from it; otherwise, you gain proficiency in two skills of your choice (skills step).",
      },
      {
        name: "Eerie Token",
        description:
          "As a bonus action, you pull out a strand of hair, a nail, or a tooth as a token (until a long rest) and send a 25-word telepathic message up to 16 km, or enter a 1-minute trance to see/hear through the token.",
      },
      {
        name: "Hex Magic",
        description:
          "You cast Disguise Self and Hex with this trait (once per long rest each, or with spell slots); INT, WIS, or CHA is your ability.",
      },
    ],
  },
  {
    id: "reborn",
    name: "Reborn",
    source: "vgr",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    skillChoices: { count: 2, options: "any" },
    traits: [
      ASI_FLOATING,
      {
        name: "Ancestral Legacy",
        description:
          "If you replaced another race with this lineage, you can keep the skills and speeds you gained from it; otherwise, you gain proficiency in two skills of your choice (skills step).",
      },
      {
        name: "Deathless Nature",
        description:
          "Advantage on saving throws against disease and to end poison, resistance to poison, advantage on death saving throws, you don't need to eat, drink, breathe, or sleep; long rest after 4 hours of conscious rest.",
      },
      {
        name: "Knowledge from a Past Life",
        description:
          "When you make a skill check, roll 1d6 and add it; uses = proficiency bonus (long rest).",
      },
    ],
  },
  {
    id: "aetherborn",
    name: "Aetherborn",
    source: "psk",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2 }, flexible: { count: 2, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Ability Score Increase",
        description:
          "+2 to CHA and +1 to two ability scores of your choice (ability step).",
      },
      {
        name: "Born of Ether",
        description: "Resistance to necrotic damage.",
      },
      {
        name: "Menacing",
        description: "Proficiency in Intimidation.",
      },
    ],
  },
  {
    id: "aven",
    name: "Aven",
    source: "psa",
    speed: 25,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { dex: 2 } },
    languages: ["Common", "Aven"],
    proficiencies: {},
    traits: [
      {
        name: "Flight",
        description:
          "Flying speed of 30 feet; you can't fly while wearing medium or heavy armor (or while encumbered).",
      },
    ],
  },
  {
    id: "khenra",
    name: "Khenra",
    source: "psa",
    speed: 35,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { dex: 2, str: 1 } },
    languages: ["Common", "Khenra"],
    proficiencies: { weapons: ["sabre", "lanca", "javelin"] },
    traits: [
      {
        name: "Khenra Weapon Training",
        description: "Proficient with sabre (khopesh), spear, and javelin.",
      },
      {
        name: "Khenra Twin",
        description:
          "If your twin is alive and in sight, you can reroll 1s on attacks, checks, and saving throws; if your twin died (or you were born without one), you can't be frightened.",
      },
    ],
  },
  {
    id: "kor",
    name: "Kor",
    source: "psz",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { dex: 2, wis: 1 } },
    languages: ["Common"],
    proficiencies: { skills: ["athletics", "acrobatics"] },
    traits: [
      {
        name: "Climbing Speed",
        description:
          "Climbing speed of 30 feet, as long as you aren't encumbered or wearing heavy armor.",
      },
      {
        name: "Kor Climbing",
        description: "Proficiency in Athletics and Acrobatics.",
      },
      {
        name: "Lucky",
        description:
          "When you roll a 1 on an attack, check, or saving throw, you can reroll the die and must use the new result.",
      },
      {
        name: "Brave",
        description: "Advantage on saving throws against fear.",
      },
    ],
  },
  {
    id: "merfolk",
    name: "Merfolk",
    source: "psi",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { cha: 1 } },
    languages: ["Common", "Merfolk"],
    proficiencies: {},
    traits: [
      {
        name: "Amphibious",
        description:
          "You can breathe air and water and have a swimming speed of 30 feet.",
      },
    ],
  },
  {
    id: "naga",
    name: "Naga",
    source: "psa",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { con: 2, int: 1 } },
    languages: ["Common", "Naga"],
    proficiencies: {},
    traits: [
      {
        name: "Burst of Speed",
        description:
          "As a bonus action, with both hands free, increase your speed by 5 feet until the end of your turn.",
      },
      {
        name: "Natural Weapons",
        description:
          "Bite: 1d4 + STR piercing (CON save, DC 8 + prof + CON, or +1d6 poison); Constrict: 1d6 + STR bludgeoning, grapples and restrains (escape DC 8 + prof + STR).",
      },
      {
        name: "Poison Immunity",
        description:
          "You are immune to poison damage and the poisoned condition.",
      },
      {
        name: "Affinity with Poisons",
        description: "Proficient with a poisoner's kit.",
      },
    ],
  },
  {
    id: "sereia",
    name: "Siren",
    source: "psi",
    speed: 25,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2 } },
    languages: ["Common", "Siren"],
    proficiencies: {},
    traits: [
      {
        name: "Flight",
        description:
          "Flying speed of 30 feet; you can't fly while wearing medium or heavy armor.",
      },
      {
        name: "Siren's Song",
        description:
          "You know the Friends cantrip and can cast it without material components.",
      },
    ],
  },
  {
    id: "vampiro",
    name: "Vampire",
    source: "psi",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { cha: 2, int: 1 } },
    languages: ["Common", "Vampire"],
    proficiencies: {},
    traits: [
      {
        name: "Vampiric Resistance",
        description: "Resistance to necrotic damage.",
      },
      {
        name: "Bloodthirst",
        description:
          "A melee attack against a willing creature or one you grappled/incapacitated: 1 piercing + 1d6 necrotic; its hit point maximum drops by the necrotic damage and you regain the same hit points (until a long rest).",
      },
      {
        name: "Blood Feast",
        description:
          "After draining blood with Bloodthirst, +10 feet of speed and advantage on STR and DEX checks and saving throws for 1 minute.",
      },
    ],
  },
  {
    id: "loxodon",
    name: "Loxodon",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { con: 2, wis: 1 } },
    languages: ["Common", "Loxodon"],
    proficiencies: {},
    traits: [
      {
        name: "Powerful Build",
        description:
          "You count as one size larger for carrying capacity and dragging.",
      },
      {
        name: "Loxodon Serenity",
        description:
          "Advantage on saving throws against being charmed or frightened.",
      },
      {
        name: "Natural Armor",
        description:
          "Without armor, your AC is 12 + CON modifier (use it if it's higher; shield applies).",
      },
      {
        name: "Trunk",
        description:
          "5 feet of reach, lifts up to 5 × your STR in pounds, grapples and attacks unarmed (can't wield weapons/shields).",
      },
      {
        name: "Keen Smell",
        description:
          "Advantage on WIS (Perception/Survival) and INT (Investigation) checks involving smell.",
      },
    ],
  },
  {
    id: "hibrido_simic",
    name: "Simic Hybrid",
    source: "ggr",
    speed: 30,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { con: 2 }, flexible: { count: 1, amount: 1 } },
    languages: ["Common", "One other (your choice)"],
    proficiencies: {},
    traits: [
      {
        name: "Ability Score Increase",
        description:
          "+2 to CON and +1 to one ability score of your choice (ability step).",
      },
      {
        name: "Adaptive Language",
        description:
          "Besides Common, choose Elvish or Vedalken (the sheet's second language is a free pick).",
      },
      {
        name: "Animal Enhancements",
        description:
          "Choose one enhancement at 1st level and another at 5th level (see the options below).",
      },
      {
        name: "Glide (1st level)",
        description:
          "When falling, you subtract up to 100 feet from the fall and glide 2 meters horizontally for every meter fallen.",
      },
      {
        name: "Agile Climber (1st level)",
        description: "Climbing speed equals your walking speed.",
      },
      {
        name: "Aquatic Adaptation (1st level)",
        description:
          "You can breathe air and water and gain a swimming speed equal to your walking speed.",
      },
      {
        name: "Grasping Appendages (5th level)",
        description:
          "Two natural weapons (1d6 + STR bludgeoning) that can grapple as a bonus action after hitting.",
      },
      {
        name: "Carapace (5th level)",
        description: "+1 AC when you aren't wearing heavy armor.",
      },
      {
        name: "Acid Spit (5th level)",
        description:
          "Action: spit acid 30 feet (Dexterity save, DC 8 + prof + CON), 2d10 acid (3d10 at 11th, 4d10 at 17th level); uses = CON modifier (long rest).",
      },
    ],
  },
  {
    id: "vedalken",
    name: "Vedalken",
    source: "ggr",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: { int: 2, wis: 1 } },
    languages: ["Common", "Vedalken"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["arcana", "history", "investigation", "medicine", "performance", "sleight_of_hand"],
    },
    traits: [
      {
        name: "Vedalken Dispassion",
        description:
          "Advantage on all Intelligence, Wisdom, and Charisma saving throws.",
      },
      {
        name: "Tireless Precision",
        description:
          "Proficient in one skill of your choice (skills step) and one tool of your choice; roll an additional 1d4 on checks with them.",
      },
      {
        name: "Partially Amphibious",
        description:
          "You can breathe underwater through your skin for up to 1 hour; after that, only once you've finished a long rest.",
      },
    ],
  },
  {
    id: "leonin",
    name: "Leonin",
    source: "moot",
    speed: 35,
    darkvision: 60,
    size: "Medium",
    abilityBonus: { fixed: { con: 2, str: 1 } },
    languages: ["Common", "Leonin"],
    proficiencies: {},
    skillChoices: {
      count: 1,
      options: ["athletics", "intimidation", "perception", "survival"],
    },
    traits: [
      {
        name: "Claws",
        description:
          "Your unarmed attacks with claws deal 1d4 + STR modifier slashing damage.",
      },
      {
        name: "Terrifying Roar",
        description:
          "As a bonus action, creatures within 10 feet must make a WIS save or are frightened until the end of your next turn; DC 8 + prof + CON, once per short or long rest.",
      },
    ],
  },
  {
    id: "autognome",
    name: "Autognome",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a construct.",
      },
      {
        name: "Armored Carapace",
        description:
          "Without armor, your base AC is 13 + DEX modifier.",
      },
      {
        name: "Built for Success",
        description:
          "You can add 1d4 to an attack, check, or saving throw after seeing the d20; uses = proficiency bonus (long rest).",
      },
      {
        name: "Healing Machine",
        description:
          "You repair Cure Wounds with Mending (spending a Hit Die); you also benefit from Cure Wounds, Healing Word, and the like despite being a construct.",
      },
      {
        name: "Mechanical Nature",
        description:
          "Resistance to poison, immune to disease, advantage on saving throws against paralysis and poison; you don't need to eat, drink, or breathe.",
      },
      {
        name: "Sentry's Rest",
        description:
          "During a long rest, you spend at least 6 hours inactive and motionless, but remain conscious.",
      },
      {
        name: "Specialized Design",
        description: "Two tool proficiencies of your choice.",
      },
    ],
  },
  {
    id: "giff",
    name: "Giff",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Medium",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Astral Spark",
        description:
          "When you hit with a simple or martial weapon, you deal extra force damage = proficiency bonus; uses = prof, max 1 per round (long rest).",
      },
      {
        name: "Firearms Mastery",
        description:
          "Proficient with all firearms, you ignore the reload property and don't suffer disadvantage at long range.",
      },
      {
        name: "Hippo Build",
        description:
          "Advantage on STR checks and saving throws and you count as one size larger for carrying and dragging.",
      },
      {
        name: "Swimming",
        description: "Your swimming speed equals your walking speed (30 feet).",
      },
    ],
  },
  {
    id: "hadozee",
    name: "Hadozee",
    source: "sps",
    speed: 30,
    darkvision: null,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Dexterous Feet",
        description:
          "As a bonus action, you use your feet to manipulate objects, doors, or tiny items.",
      },
      {
        name: "Glide",
        description:
          "When falling 10+ feet, you extend your membranes and glide horizontally for your walking speed, taking no fall damage (reaction).",
      },
      {
        name: "Hadozee Dodge",
        description:
          "When you take damage, as a reaction you roll 1d6 + prof and reduce the damage; uses = proficiency bonus (long rest).",
      },
      {
        name: "Climbing",
        description: "Your climbing speed equals your walking speed (30 feet).",
      },
    ],
  },
  {
    id: "plasmoid",
    name: "Plasmoid",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are an ooze (not a humanoid).",
      },
      {
        name: "Amorphous",
        description:
          "You can pass through spaces as small as 2.5 cm (without carrying anything) and have advantage on starting or escaping grapples.",
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 1 hour.",
      },
      {
        name: "Natural Resilience",
        description:
          "Resistance to acid and poison damage and advantage on saving throws against being poisoned.",
      },
      {
        name: "Shape Self",
        description:
          "Action: change to a humanoid form (to wear clothes/armor) or back to the blob; bonus action: extend/retract a pseudopod of up to 15 cm × 3 m to manipulate objects.",
      },
    ],
  },
  {
    id: "thri_kreen",
    name: "Thri-Kreen",
    source: "sps",
    speed: 30,
    darkvision: 60,
    size: "Medium or Small",
    abilityBonus: { fixed: {}, flexible: { count: 3, amount: 1 } },
    languages: ["Common"],
    proficiencies: {},
    traits: [
      ASI_FLOATING,
      {
        name: "Creature Type",
        description: "You are a monstrosity (not a humanoid).",
      },
      {
        name: "Chameleonic Carapace",
        description:
          "Without armor, your base AC is 13 + DEX modifier; as an action, you change the color of your carapace to camouflage yourself (advantage on Stealth).",
      },
      {
        name: "Secondary Arms",
        description:
          "Two smaller arms that manipulate objects, doors, and tiny items or wield weapons with the light property.",
      },
      {
        name: "No Sleep",
        description:
          "You don't need to sleep and can remain conscious during the long rest (without vigorous activity).",
      },
      {
        name: "Thri-Kreen Telepathy",
        description:
          "You don't speak other languages: you transmit thoughts telepathically to willing creatures within 120 feet that understand at least one language.",
      },
    ],
  },
];

export function getRace(id: string): RaceDef | undefined {
  return RACES.find((r) => r.id === id);
}

export const SUBRACES: SubraceDef[] = [
  {
    id: "humano_variante",
    raceId: "humano",
    name: "Human (Variant)",
    source: "phb",
    replacesAbilityBonus: true,
    flexible: { count: 2, amount: 1 },
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
          "+1 to two ability scores of your choice (ability step) and one skill of your choice (skills step).",
      },
    ],
  },
  {
    id: "anao_colinano",
    raceId: "anao",
    name: "Hill Dwarf",
    source: "phb",
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
    source: "phb",
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
    id: "anao_duergar",
    raceId: "anao",
    name: "Duergar",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    speed: 30,
    darkvision: 120,
    languages: ["One other (your choice)"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Duergar Magic",
        description:
          "At 3rd level you cast Enlarge/Reduce on yourself and at 5th level Invisibility on yourself, without material components; once per long rest each (or with spell slots). INT, WIS, or CHA is your spellcasting ability.",
      },
      {
        name: "Dwarven Resilience",
        description:
          "Advantage on saving throws to avoid or end the poisoned condition, and resistance to poison damage.",
      },
      {
        name: "Psychic Fortitude",
        description:
          "Advantage on saving throws to avoid or end the charmed and stunned conditions.",
      },
    ],
  },
  {
    id: "elfo_alto",
    raceId: "elfo",
    name: "High Elf",
    source: "phb",
    abilityBonus: { int: 1 },
    languages: ["One other (your choice)"],
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
          "You know one cantrip from the wizard spell list (INT as the spellcasting ability).",
      },
      {
        name: "Extra Language",
        description: "You gain one language of your choice.",
      },
    ],
  },
  {
    id: "elfo_silvestre",
    raceId: "elfo",
    name: "Wood Elf",
    source: "phb",
    abilityBonus: { wis: 1 },
    speed: 35,
    proficiencies: { weapons: ["espada_longa", "espada_curta", "arco_curto", "arco_longo"] },
    traits: [
      {
        name: "Elf Weapon Training",
        description:
          "Proficient with longswords, short swords, shortbows, and longbows.",
      },
      {
        name: "Fleet of Foot",
        description: "Your base walking speed increases to 35 feet.",
      },
      {
        name: "Mask of the Wild",
        description:
          "You can try to hide even when only lightly obscured by vegetation, light rain, snow, mist, and so on.",
      },
    ],
  },
  {
    id: "elfo_drow",
    raceId: "elfo",
    name: "Dark Elf (Drow)",
    source: "phb",
    abilityBonus: { cha: 1 },
    darkvision: 120,
    proficiencies: { weapons: ["rapier", "espada_curta", "besta_mao"] },
    traits: [
      {
        name: "Sunlight Sensitivity",
        description:
          "Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, your target, or what you're perceiving is in direct sunlight.",
      },
      {
        name: "Drow Magic",
        description:
          "You know the Dancing Lights cantrip; at 3rd level you cast Faerie Fire and at 5th level Darkness with this trait (once per long rest each); CHA is your spellcasting ability.",
      },
      {
        name: "Drow Weapon Training",
        description: "Proficient with rapiers, short swords, and hand crossbows.",
      },
    ],
  },
  {
    id: "elfo_pallido",
    raceId: "elfo",
    name: "Pallid Elf",
    source: "egw",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Incisive Sense",
        description: "Advantage on Investigation and Insight checks.",
      },
      {
        name: "Blessing of the Moonweaver",
        description:
          "You know the Light cantrip; at 3rd level you cast Sleep and at 5th level Invisibility (only on yourself) with this trait (once per long rest each, without material components); WIS is your spellcasting ability.",
      },
    ],
  },
  {
    id: "elfo_eladrin",
    raceId: "elfo",
    name: "Eladrin",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["One other (your choice)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Fey Step",
        description:
          "As a bonus action, you magically teleport up to 30 feet to an unoccupied space you can see; uses = proficiency bonus (long rest). At 3rd level, your current season adds an effect (DC 8 + prof + INT, WIS, or CHA): Autumn (charms 2 creatures within 10 feet, WIS), Winter (frightens 1 creature within 5 feet), Spring (you swap places with a willing ally), or Summer (5 feet of fire damage = proficiency).",
      },
    ],
  },
  {
    id: "elfo_mar",
    raceId: "elfo",
    name: "Sea Elf",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["One other (your choice)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Child of the Sea",
        description: "You can breathe air and water and have resistance to cold damage.",
      },
      {
        name: "Friend of the Sea",
        description:
          "You can communicate simple ideas with any beast that has a swimming speed; it understands your words, but you don't understand it in return.",
      },
    ],
  },
  {
    id: "elfo_shadar_kai",
    raceId: "elfo",
    name: "Shadar-Kai",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    languages: ["One other (your choice)"],
    traits: [
      ASI_FLOATING,
      {
        name: "Blessing of the Raven Queen",
        description:
          "As a bonus action, you magically teleport up to 30 feet to an unoccupied space you can see; uses = proficiency bonus (long rest). At 3rd level, you also gain resistance to all damage until the start of your next turn when you teleport this way.",
      },
      {
        name: "Necrotic Resistance",
        description: "Resistance to necrotic damage.",
      },
    ],
  },
  {
    id: "elfo_astral",
    raceId: "elfo",
    name: "Astral Elf",
    source: "sps",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    traits: [
      ASI_FLOATING,
      {
        name: "Astral Fire",
        description:
          "You know one cantrip of your choice: Dancing Lights, Light, or Sacred Flame (INT, WIS, or CHA, chosen at creation).",
      },
      {
        name: "Step of Starlight",
        description:
          "As a bonus action, you magically teleport up to 30 feet to an unoccupied space you can see; uses = proficiency bonus (long rest).",
      },
      {
        name: "Astral Trance",
        description:
          "You don't need to sleep and magic can't put you to sleep; you finish a long rest in 4 hours of trance meditation. Each time you do, you gain proficiency in one skill and one weapon or tool from the Player's Handbook until your next long rest.",
      },
    ],
  },
  {
    id: "halfling_leve",
    raceId: "halfling",
    name: "Lightfoot Halfling",
    source: "phb",
    abilityBonus: { cha: 1 },
    traits: [
      {
        name: "Naturally Stealthy",
        description:
          "You can try to hide behind a creature larger than you.",
      },
    ],
  },
  {
    id: "halfling_robusto",
    raceId: "halfling",
    name: "Stout Halfling",
    source: "phb",
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
    id: "halfling_fantasma",
    raceId: "halfling",
    name: "Ghostwise Halfling",
    source: "scag",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Silent Speech",
        description:
          "You can telepathically speak to any creature within 30 feet; it only understands if you share a language, and you speak to one creature at a time.",
      },
    ],
  },
  {
    id: "halfling_lotusden",
    raceId: "halfling",
    name: "Lotusden Halfling",
    source: "egw",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Children of the Wood",
        description:
          "You know the Druidcraft cantrip; at 3rd level you cast Entangle and at 5th level Spike Growth with this trait (once per long rest each, without material components); WIS is your spellcasting ability.",
      },
      {
        name: "Timberwalk",
        description:
          "Checks made to track you have disadvantage, and you can move through nonmagical difficult terrain made of vegetation without spending extra movement.",
      },
    ],
  },
  {
    id: "gnomo_bosque",
    raceId: "gnomo",
    name: "Forest Gnome",
    source: "phb",
    abilityBonus: { dex: 1 },
    traits: [
      {
        name: "Natural Illusionist",
        description: "You know the Minor Illusion cantrip (INT as the ability).",
      },
      {
        name: "Speak with Small Beasts",
        description:
          "You can communicate in a simple way with Small or smaller beasts through sound and gestures.",
      },
    ],
  },
  {
    id: "gnomo_da_rocha",
    raceId: "gnomo",
    name: "Rock Gnome",
    source: "phb",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Artificer's Lore",
        description:
          "On History (INT) checks about magical, alchemical, or gizmo items, add double your proficiency bonus (if you already add it).",
      },
      {
        name: "Tinker",
        description:
          "Proficient with tinker's tools; spending 1 hour and 10 gp on materials, you build a Small mechanical device that works for 24 hours (max 3 at a time).",
      },
    ],
  },
  {
    id: "gnomo_profundo",
    raceId: "gnomo",
    name: "Deep Gnome (Svirfneblin)",
    source: "mtotm",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    speed: 30,
    darkvision: 120,
    languages: ["One other (your choice)"],
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Gnome Magic Resistance",
        description:
          "Advantage on INT, WIS, and CHA saving throws against spells.",
      },
      {
        name: "Svirfneblin Magic",
        description:
          "At 3rd level you cast Alter Self and at 5th level Nondetection with this trait, without material components; once per long rest each (or with spell slots). INT, WIS, or CHA is your ability.",
      },
      {
        name: "Svirfneblin Camouflage",
        description:
          "You can make DEX (Stealth) checks with advantage; uses = proficiency bonus (long rest).",
      },
    ],
  },
  {
    id: "draconato_sangue_dragao",
    raceId: "draconato",
    name: "Dragonborn (Draconblood)",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { int: 2, cha: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Draconic Ancestry",
        description:
          "Choose a dragon type: it determines the damage and area of your breath weapon and the resistance you gain.",
      },
      {
        name: "Breath Weapon",
        description:
          "As an action, you exhale energy in your ancestry's area; saving throw (DC 8 + prof + CON), 2d6 damage (half on a success), increasing to 3d6 at 6th, 4d6 at 11th, and 5d6 at 16th level; once per short or long rest.",
      },
      {
        name: "Menacing Presence",
        description:
          "When you make an Intimidation or Persuasion check, you can make it with advantage; once per long rest.",
      },
    ],
  },
  {
    id: "draconato_ravenite",
    raceId: "draconato",
    name: "Ravenite Dragonborn",
    source: "egw",
    replacesAbilityBonus: true,
    abilityBonus: { str: 2, con: 1 },
    darkvision: 60,
    replacesTraits: true,
    traits: [
      {
        name: "Draconic Ancestry",
        description:
          "Choose a dragon type: it determines the damage and area of your breath weapon and the resistance you gain.",
      },
      {
        name: "Breath Weapon",
        description:
          "As an action, you exhale energy in your ancestry's area; saving throw (DC 8 + prof + CON), 2d6 damage (half on a success), increasing to 3d6 at 6th, 4d6 at 11th, and 5d6 at 16th level; once per short or long rest.",
      },
      {
        name: "Vengeful Attack",
        description:
          "When you take damage from a creature within the reach of a weapon you're wielding, you can use your reaction to attack it; once per short or long rest.",
      },
    ],
  },
  {
    id: "draconato_cromatico",
    raceId: "draconato",
    name: "Chromatic Dragonborn",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Chromatic Ancestry",
        description:
          "Choose a chromatic dragon (black, blue, green, white, or red): it determines the damage type of your other traits.",
      },
      {
        name: "Breath",
        description:
          "When you take the Attack action, you can replace one attack with a line 30 feet long and 5 feet wide (Dexterity save), dealing 1d10 damage of your ancestry's type (half on a success); 2d10 at 5th, 3d10 at 11th, and 4d10 at 17th level. Uses = proficiency bonus (long rest).",
      },
      {
        name: "Draconic Resistance",
        description: "Resistance to your ancestry's damage type.",
      },
      {
        name: "Chromatic Charge",
        description:
          "At 5th level, as an action, you become immune to your ancestry's damage type for 1 minute; once per long rest.",
      },
    ],
  },
  {
    id: "draconato_metalico",
    raceId: "draconato",
    name: "Metallic Dragonborn",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Metallic Ancestry",
        description:
          "Choose a metallic dragon (brass, bronze, copper, gold, or silver): it determines the damage type of your other traits.",
      },
      {
        name: "Breath",
        description:
          "When you take the Attack action, you can replace one attack with a 15-foot cone (Dexterity save), dealing 1d10 damage of your ancestry's type (half on a success); 2d10 at 5th, 3d10 at 11th, and 4d10 at 17th level. Uses = proficiency bonus (long rest).",
      },
      {
        name: "Draconic Resistance",
        description: "Resistance to your ancestry's damage type.",
      },
      {
        name: "Metallic Breath",
        description:
          "At 5th level, you gain a second breath in a 15-foot cone (once per long rest): Devouring Breath (CON save or incapacitated until your next turn) or Repulsion Breath (STR save or pushed 20 feet and knocked prone).",
      },
    ],
  },
  {
    id: "draconato_gema",
    raceId: "draconato",
    name: "Gem Dragonborn",
    source: "ftd",
    replacesAbilityBonus: true,
    flexible: { count: 3, amount: 1 },
    replacesTraits: true,
    traits: [
      ASI_FLOATING,
      {
        name: "Gem Ancestry",
        description:
          "Choose a gem dragon (amethyst, crystal, emerald, sapphire, or topaz): it determines the damage type of your other traits.",
      },
      {
        name: "Breath",
        description:
          "When you take the Attack action, you can replace one attack with a 15-foot cone (Dexterity save), dealing 1d10 damage of your ancestry's type (half on a success); 2d10 at 5th, 3d10 at 11th, and 4d10 at 17th level. Uses = proficiency bonus (long rest).",
      },
      {
        name: "Draconic Resistance",
        description: "Resistance to your ancestry's damage type.",
      },
      {
        name: "Psychic Mind",
        description:
          "You can telepathically speak to any creature you can see within 30 feet without needing to share a language (the creature must understand at least one language).",
      },
      {
        name: "Gem Flight",
        description:
          "At 5th level, as a bonus action, you manifest spectral wings for 1 minute, gaining a flying speed equal to your walking speed and the ability to hover; once per long rest.",
      },
    ],
  },
  {
    id: "tiefling_asmodeus",
    raceId: "tiefling",
    name: "Asmodeus Tiefling",
    source: "phb",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Infernal Legacy",
        description:
          "You know the Thaumaturgy cantrip; at 3rd level you cast Hellish Rebuke (as a 2nd-level spell) and at 5th level Darkness with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_baalzebul",
    raceId: "tiefling",
    name: "Baalzebul Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legacy of Maladomini",
        description:
          "You know the Thaumaturgy cantrip; at 3rd level you cast Ray of Sickness (as a 2nd-level spell) and at 5th level Crown of Madness with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_dispater",
    raceId: "tiefling",
    name: "Dispater Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legacy of Dis",
        description:
          "You know the Thaumaturgy cantrip; at 3rd level you cast Alter Self (as a 2nd-level spell) and at 5th level Detect Thoughts with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_fierna",
    raceId: "tiefling",
    name: "Fierna Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, wis: 1 },
    traits: [
      {
        name: "Legacy of Phlegethos",
        description:
          "You know the Friends cantrip; at 3rd level you cast Charm Person (as a 2nd-level spell) and at 5th level Suggestion with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_glasya",
    raceId: "tiefling",
    name: "Glasya Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, dex: 1 },
    traits: [
      {
        name: "Legacy of Malbolge",
        description:
          "You know the Minor Illusion cantrip; at 3rd level you cast Alter Self and at 5th level Invisibility (as a 2nd-level spell) with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_levistus",
    raceId: "tiefling",
    name: "Levistus Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, con: 1 },
    traits: [
      {
        name: "Legacy of Stygia",
        description:
          "You know the Ray of Frost cantrip; at 3rd level you cast Armor of Agathys (as a 2nd-level spell) and at 5th level Darkness with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_mammon",
    raceId: "tiefling",
    name: "Mammon Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legacy of Minauros",
        description:
          "You know the Mage Hand cantrip; at 3rd level you cast Tenser's Floating Disk (as a 2nd-level spell) and at 5th level Arcane Lock with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_mephistopheles",
    raceId: "tiefling",
    name: "Mephistopheles Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, int: 1 },
    traits: [
      {
        name: "Legacy of Cania",
        description:
          "You know the Mage Hand cantrip; at 3rd level you cast Burning Hands (as a 2nd-level spell) and at 5th level Flame Blade (as a 3rd-level spell) with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_zariel",
    raceId: "tiefling",
    name: "Zariel Tiefling",
    source: "mtf",
    replacesAbilityBonus: true,
    abilityBonus: { cha: 2, str: 1 },
    traits: [
      {
        name: "Legacy of Avernus",
        description:
          "You know the Thaumaturgy cantrip; at 3rd level you cast Searing Smite (as a 2nd-level spell) and at 5th level Branding Smite (as a 3rd-level spell) with this trait, recharging after a long rest; CHA is your spellcasting ability.",
      },
    ],
  },
  {
    id: "tiefling_variante",
    raceId: "tiefling",
    name: "Tiefling (Variant)",
    source: "scag",
    replacesAbilityBonus: true,
    abilityBonus: { dex: 2, int: 1 },
    traits: [
      {
        name: "Appearance",
        description:
          "Choose 1d4 + 1 traits: small horns, fangs, forked tongue, cat eyes, cloven hooves, a broken horn, a forked tail, red or dark-blue leathery or scaly skin, no shadow or reflection, or a sulfur smell.",
      },
      {
        name: "Feral",
        description:
          "Replaces the Ability Score Increase with +2 DEX and +1 INT (applied automatically by the sheet).",
      },
      {
        name: "Devil's Tongue",
        description:
          "You know the Vicious Mockery cantrip; at 3rd level you cast Charm Person and at 5th level Enthrall with this trait, recharging after a long rest; it replaces the Infernal Legacy.",
      },
      {
        name: "Infernal Fire",
        description:
          "At 3rd level, you cast Burning Hands (as a 2nd-level spell) once per long rest, in place of the Hellish Rebuke from the Infernal Legacy.",
      },
      {
        name: "Wings",
        description:
          "You have bat wings and a flying speed of 30 feet while you aren't wearing heavy armor; it replaces the Infernal Legacy.",
      },
    ],
  },
  {
    id: "genasi_ar",
    raceId: "genasi",
    name: "Air Genasi",
    source: "mtotm",
    speed: 35,
    traits: [
      {
        name: "Unending Breath",
        description:
          "You can hold your breath indefinitely while you aren't incapacitated.",
      },
      {
        name: "Lightning Resistance",
        description: "Resistance to lightning damage.",
      },
      {
        name: "Mingle with the Wind",
        description:
          "You know the Shocking Grasp cantrip; at 3rd level you cast Feather Fall and at 5th level Levitate with this trait, without material components (once per long rest each, or with spell slots); INT, WIS, or CHA is your ability.",
      },
    ],
  },
  {
    id: "genasi_terra",
    raceId: "genasi",
    name: "Earth Genasi",
    source: "mtotm",
    traits: [
      {
        name: "Earth Walk",
        description:
          "You can move through difficult terrain without spending extra movement when you move on the ground or floor.",
      },
      {
        name: "Merge with Stone",
        description:
          "You know the Blade Ward cantrip, which you can also cast as a bonus action (up to once per long rest, equal to your proficiency bonus); at 5th level you cast Pass without Trace without material components (once per long rest or with spell slots); INT, WIS, or CHA is your ability.",
      },
    ],
  },
  {
    id: "genasi_fogo",
    raceId: "genasi",
    name: "Fire Genasi",
    source: "mtotm",
    traits: [
      {
        name: "Fire Resistance",
        description: "Resistance to fire damage.",
      },
      {
        name: "Reach to the Blaze",
        description:
          "You know the Produce Flame cantrip; at 3rd level you cast Burning Hands and at 5th level Flame Blade (the latter without material components) with this trait, once per long rest each (or with spell slots); INT, WIS, or CHA is your ability.",
      },
    ],
  },
  {
    id: "genasi_agua",
    raceId: "genasi",
    name: "Water Genasi",
    source: "mtotm",
    traits: [
      {
        name: "Acid Resistance",
        description: "Resistance to acid damage.",
      },
      {
        name: "Amphibious",
        description: "You can breathe air and water.",
      },
      {
        name: "Call to the Wave",
        description:
          "You know the Acid Splash cantrip; at 3rd level you cast Create or Destroy Water and at 5th level Water Walk with this trait, without material components (once per long rest each, or with spell slots); INT, WIS, or CHA is your ability.",
      },
    ],
  },
  {
    id: "aasimar_protetor",
    raceId: "aasimar",
    name: "Protector Aasimar",
    source: "vg",
    abilityBonus: { wis: 1 },
    traits: [
      {
        name: "Radiant Soul",
        description:
          "At 3rd level, as an action, you create luminous wings and glowing eyes for 1 minute (or until you end it as a bonus action): you gain 30 feet of flying speed and, once per turn, you deal extra radiant damage to a creature equal to your level; once per long rest.",
      },
    ],
  },
  {
    id: "aasimar_suplicador",
    raceId: "aasimar",
    name: "Scourge Aasimar",
    source: "vg",
    abilityBonus: { con: 1 },
    traits: [
      {
        name: "Radiant Consumption",
        description:
          "At 3rd level, as an action, you are surrounded by searing light for 1 minute (or until you end it as a bonus action; bright light within 10 feet and dim light 10 feet beyond): at the end of each of your turns, you and each creature within 10 feet take radiant damage equal to half your level (rounded up); once per turn, you deal extra radiant damage to a creature equal to your level; once per long rest.",
      },
    ],
  },
  {
    id: "aasimar_caido",
    raceId: "aasimar",
    name: "Fallen Aasimar",
    source: "vg",
    abilityBonus: { str: 1 },
    traits: [
      {
        name: "Necrotic Shroud",
        description:
          "At 3rd level, as an action, you create dark eyes and skeletal wings for 1 minute (or until you end it as a bonus action): creatures within 10 feet that see you must make a CHA save (DC 8 + prof + CHA) or are frightened until the end of your next turn; once per turn, you deal extra necrotic damage to a creature equal to your level; once per long rest.",
      },
    ],
  },
  {
    id: "shifter_pele_fera",
    raceId: "shifter",
    name: "Beasthide Shifter",
    source: "erlw",
    abilityBonus: { con: 2, str: 1 },
    proficiencies: { skills: ["athletics"] },
    traits: [
      {
        name: "Natural Athlete",
        description: "Proficiency in Athletics.",
      },
      {
        name: "Shifting Feature",
        description:
          "When you use Shifting, you gain an additional 1d6 temporary hit points and, while shifted, you get +1 AC.",
      },
    ],
  },
  {
    id: "shifter_presa_longa",
    raceId: "shifter",
    name: "Longtooth Shifter",
    source: "erlw",
    abilityBonus: { str: 2, dex: 1 },
    proficiencies: { skills: ["intimidation"] },
    traits: [
      {
        name: "Ferocity",
        description: "Proficiency in Intimidation.",
      },
      {
        name: "Shifting Feature",
        description:
          "While shifted, you can use your elongated canines to attack unarmed as a bonus action; on a hit, it deals 1d6 + STR modifier piercing damage.",
      },
    ],
  },
  {
    id: "shifter_passo_ligeiro",
    raceId: "shifter",
    name: "Swiftstep Shifter",
    source: "erlw",
    abilityBonus: { dex: 2, cha: 1 },
    proficiencies: { skills: ["acrobatics"] },
    traits: [
      {
        name: "Grace",
        description: "Proficiency in Acrobatics.",
      },
      {
        name: "Shifting Feature",
        description:
          "While shifted, your walking speed increases by 10 feet; in addition, you can move up to 10 feet as a reaction when a hostile creature ends its turn within 5 feet of you, without provoking opportunity attacks.",
      },
    ],
  },
  {
    id: "shifter_cacada_selvagem",
    raceId: "shifter",
    name: "Wildhunt Shifter",
    source: "erlw",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["survival"] },
    traits: [
      {
        name: "Natural Tracker",
        description: "Proficiency in Survival.",
      },
      {
        name: "Mark of Scent",
        description:
          "As a bonus action, you mark a creature you can see within 10 feet; until the end of your next long rest, your proficiency bonus is doubled on ability checks made to find it and you always know where it is if it's within 60 feet; once per short or long rest.",
      },
      {
        name: "Shifting Feature",
        description:
          "While shifted, you have advantage on Wisdom checks.",
      },
    ],
  },
  {
    id: "aven_ibis",
    raceId: "aven",
    name: "Ibis-Headed Aven",
    source: "psa",
    abilityBonus: { int: 1 },
    traits: [
      {
        name: "Blessing of Kefnet",
        description:
          "Add half your proficiency bonus (rounded down) to any Intelligence check that doesn't already include your proficiency.",
      },
    ],
  },
  {
    id: "aven_falcao",
    raceId: "aven",
    name: "Falcon-Headed Aven",
    source: "psa",
    abilityBonus: { wis: 2 },
    proficiencies: { skills: ["perception"] },
    traits: [
      {
        name: "Falcon Eye",
        description:
          "Proficiency in Perception; in addition, attacking at long range doesn't impose disadvantage on your ranged weapon attacks.",
      },
    ],
  },
  {
    id: "merfolk_verde",
    raceId: "merfolk",
    name: "Green Merfolk",
    source: "psi",
    abilityBonus: { wis: 2 },
    traits: [
      {
        name: "Mask of the Wild",
        description:
          "You can try to hide even when only lightly obscured by vegetation, light rain, snow, mist, and so on.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the druid spell list (WIS as the spellcasting ability).",
      },
    ],
  },
  {
    id: "merfolk_azul",
    raceId: "merfolk",
    name: "Blue Merfolk",
    source: "psi",
    abilityBonus: { int: 2 },
    proficiencies: { skills: ["history", "nature"] },
    traits: [
      {
        name: "Wisdom of the Waters",
        description: "Proficiency in History and Nature.",
      },
      {
        name: "Cantrip",
        description:
          "You know one cantrip of your choice from the wizard spell list (INT as the spellcasting ability).",
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
