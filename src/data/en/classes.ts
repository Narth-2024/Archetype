import type { AbilityKey, SkillId } from "../../domain/types";

export type SpellcasterType = "full" | "half" | "pact" | "none";

export type ClassDef = {
  id: string;
  source: string;
  name: string;
  hitDie: number;
  fixedHp: number;
  unarmoredDefense: "con" | "wis" | null;
  saves: [AbilityKey, AbilityKey];
  skillChoices: { count: number; options: SkillId[] };
  armorProficiencies: string[];
  weaponProficiencies: string[];
  toolProficiencies: string[];
  toolChoices?: { count: number };
  spellcaster: SpellcasterType;
  castingAbility: AbilityKey | null;
  startingEquipment: { catalogId: string | null; name: string; qty: number }[];
  features: ClassFeature[];
};

export type ClassFeature = { level: number; name: string; description: string };

const ALL_SKILLS: SkillId[] = [
  "acrobatics", "animal_handling", "arcana", "athletics", "deception",
  "history", "insight", "intimidation", "investigation", "medicine",
  "nature", "perception", "performance", "persuasion", "religion",
  "sleight_of_hand", "stealth", "survival",
];

export const CLASSES: ClassDef[] = [
  {
    "id": "artifice",
    "source": "tce",
    "name": "Artificer",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "con",
      "int"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "history",
        "investigation",
        "medicine",
        "nature",
        "perception",
        "sleight_of_hand"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples"
    ],
    "toolProficiencies": [
      "ferramentas de ladrão",
      "ferramentas de ferreiro"
    ],
    "toolChoices": {
      "count": 1
    },
    "spellcaster": "half",
    "castingAbility": "int",
    "startingEquipment": [
      {
        "catalogId": null,
        "name": "Duas armas simples à escolha",
        "qty": 1
      },
      {
        "catalogId": "light_crossbow",
        "name": "Besta Leve",
        "qty": 1
      },
      {
        "catalogId": "crossbow_bolts",
        "name": "Virotes",
        "qty": 20
      },
      {
        "catalogId": "scale_mail",
        "name": "Escama",
        "qty": 1
      },
      {
        "catalogId": "thieves_tools",
        "name": "Ferramentas de ladrão",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit do Aventureiro",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Magical Tinkering",
        "description": "Action with thieves' tools in hand: give a nonmagical object light, a stored message, a sound/scent, or an image; the effect lasts until you end it (max objects = INT mod)."
      },
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Prepare spells = INT + half artificer level (min 1); cast with artisan's or thieves' tools as focus, and can cast prepared spells as rituals."
      },
      {
        "level": 2,
        "name": "Infuse Item",
        "description": "After a long rest, touch nonmagical items to infuse them; knows 4 infusions, and the number of infused items grows with level."
      },
      {
        "level": 3,
        "name": "Artificer Specialist",
        "description": "Choose a specialization (Alchemist, Armorer, Artillerist or Battle Smith), which defines your role and features."
      },
      {
        "level": 3,
        "name": "The Right Tool for the Job",
        "description": "After 1 hour of work during a rest, magically create a set of artisan's tools in a free space within 5 feet; it vanishes when used again."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 5,
        "name": "Specialist Features",
        "description": "Additional features from your chosen specialization, granted at levels 5, 9 and 15."
      },
      {
        "level": 6,
        "name": "Expertise",
        "description": "Double your proficiency bonus on ability checks that use a tool proficiency."
      },
      {
        "level": 7,
        "name": "Flash of Genius",
        "description": "Reaction: add INT mod to a skill check or saving throw for you or a creature you can see within 30 feet; uses = INT mod per long rest."
      },
      {
        "level": 10,
        "name": "Magic Item Adept",
        "description": "Attune to up to 4 magic items and craft common or uncommon items in 1/4 the time and half the cost."
      },
      {
        "level": 11,
        "name": "Spell-Storing Item",
        "description": "After a long rest, store one 1st- or 2nd-level action spell in a weapon or focus; a creature holding it casts the spell with an action, up to 2× INT mod times (min 2)."
      },
      {
        "level": 14,
        "name": "Magic Item Master",
        "description": "Attune to up to 5 magic items and ignore class, race, spell and level requirements to attune to or use magic items."
      },
      {
        "level": 18,
        "name": "Master of Magic Items",
        "description": "Attune to up to 6 magic items at once."
      },
      {
        "level": 20,
        "name": "Soul of Artifice",
        "description": "+1 to every saving throw per attuned magic item; when dropped to 0 HP without dying, end an infusion to drop to 1 HP instead of 0."
      }
    ]
  },
  {
    "id": "barbaro",
    "source": "phb",
    "name": "Barbarian",
    "hitDie": 12,
    "fixedHp": 7,
    "unarmoredDefense": "con",
    "saves": [
      "str",
      "con"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "athletics",
        "intimidation",
        "nature",
        "perception",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "armas_marciais"
    ],
    "toolProficiencies": [],
    "spellcaster": "none",
    "castingAbility": null,
    "startingEquipment": [
      {
        "catalogId": "greataxe",
        "name": "Machado Grande",
        "qty": 1
      },
      {
        "catalogId": "explorers_pack",
        "name": "Kit do Explorador",
        "qty": 1
      },
      {
        "catalogId": "javelin",
        "name": "Javelin",
        "qty": 4
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Rage",
        "description": "Bonus action for 1 minute: advantage on STR, + melee damage with STR and resistance to damage; cannot cast or concentrate; uses per long rest."
      },
      {
        "level": 1,
        "name": "Unarmored Defense",
        "description": "Without armor: AC = 10 + DEX mod + CON mod (shield allowed)."
      },
      {
        "level": 2,
        "name": "Reckless Attack",
        "description": "Attack recklessly: advantage on STR melee attacks this turn and attacks against you have advantage until your next turn."
      },
      {
        "level": 2,
        "name": "Danger Sense",
        "description": "Advantage on DEX saves against effects you can see (traps and spells); cannot be blinded, deafened or incapacitated."
      },
      {
        "level": 3,
        "name": "Primal Path",
        "description": "Granted by your chosen subclass."
      },
      {
        "level": 3,
        "name": "Primal Knowledge (Optional)",
        "description": "Optional Tasha rule: gain proficiency in one barbarian skill at 3rd level and another at 10th."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks when you take the Attack action."
      },
      {
        "level": 5,
        "name": "Fast Movement",
        "description": "+10 feet of speed while not wearing heavy armor."
      },
      {
        "level": 6,
        "name": "Path Features",
        "description": "Additional features of your Primal Path, granted at levels 6, 10 and 14."
      },
      {
        "level": 7,
        "name": "Feral Instinct",
        "description": "Advantage on initiative; if surprised, you can act normally on the first turn as long as you enter a rage before anything else."
      },
      {
        "level": 7,
        "name": "Instinctive Pounce (Optional)",
        "description": "Optional Tasha rule: as part of the bonus action to enter a rage, you can move up to half your speed."
      },
      {
        "level": 9,
        "name": "Brutal Critical",
        "description": "Extra damage dice on melee crits: +1 die at 9th, +2 at 13th and +3 at 17th level."
      },
      {
        "level": 11,
        "name": "Relentless Rage",
        "description": "When dropped to 0 HP while raging, make a DC 10 CON save to drop to 1 HP instead; the DC rises by 5 each use and resets on a rest."
      },
      {
        "level": 15,
        "name": "Persistent Rage",
        "description": "Your rage only ends if you are unconscious or choose to end it."
      },
      {
        "level": 18,
        "name": "Indomitable Might",
        "description": "If a STR check total is lower than your STR score, use that score instead of the total."
      },
      {
        "level": 20,
        "name": "Primal Champion",
        "description": "Your STR and CON scores increase by 4 and their maximum becomes 24."
      }
    ]
  },
  {
    "id": "bardo",
    "source": "phb",
    "name": "Bard",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "dex",
      "cha"
    ],
    "skillChoices": {
      "count": 3,
      "options": [
        "acrobatics",
        "animal_handling",
        "arcana",
        "athletics",
        "deception",
        "history",
        "insight",
        "intimidation",
        "investigation",
        "medicine",
        "nature",
        "perception",
        "performance",
        "persuasion",
        "religion",
        "sleight_of_hand",
        "stealth",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "espada_longa",
      "rapier",
      "espada_curta",
      "besta_leve",
      "besta_mao"
    ],
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "spellcaster": "full",
    "castingAbility": "cha",
    "startingEquipment": [
      {
        "catalogId": "rapier",
        "name": "Rapié",
        "qty": 1
      },
      {
        "catalogId": "dagger",
        "name": "Adaga",
        "qty": 1
      },
      {
        "catalogId": "entertainers_pack",
        "name": "Kit do Artista",
        "qty": 1
      },
      {
        "catalogId": "lute",
        "name": "Lira",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Cast bard spells with CHA; knows 2 cantrips and 4 spells at 1st level, learns more per the table, and can cast known spells as rituals."
      },
      {
        "level": 1,
        "name": "Bardic Inspiration",
        "description": "Bonus action grants a d6 to a creature that can hear you within 60 feet (10 min); the die becomes d8 at 5th, d10 at 10th and d12 at 15th; uses = CHA mod per long rest."
      },
      {
        "level": 2,
        "name": "Jack of All Trades",
        "description": "Add half your proficiency bonus (rounded down) to any ability check you are not proficient in."
      },
      {
        "level": 2,
        "name": "Song of Rest",
        "description": "After a short rest, those who spent Hit Dice recover +1d6 HP (d8 at 9th, d10 at 13th and d12 at 17th level)."
      },
      {
        "level": 2,
        "name": "Magical Inspiration (Optional)",
        "description": "Optional Tasha rule: a creature with your Inspiration can add the die to HP recovered or to the damage of a spell you cast."
      },
      {
        "level": 3,
        "name": "Bard College",
        "description": "Choose a bard college (Lore, Valor, Swords...), which grants its own spells and new abilities."
      },
      {
        "level": 3,
        "name": "Expertise",
        "description": "Double your proficiency bonus in 2 chosen skills; choose 2 more skills at 10th level."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Bardic Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a skill from Expertise or a cantrip for another on the bard list."
      },
      {
        "level": 5,
        "name": "Font of Inspiration",
        "description": "Regain all uses of Bardic Inspiration when you finish a short or long rest."
      },
      {
        "level": 6,
        "name": "Countercharm",
        "description": "Action: perform until the end of your next turn; you and allies within 30 feet have advantage on saves against fear and charm (they must hear you)."
      },
      {
        "level": 6,
        "name": "College Features",
        "description": "Features of your bard college, granted at levels 6 and 14."
      },
      {
        "level": 10,
        "name": "Magical Secrets",
        "description": "Choose 2 spells from any class list; gain 2 more at 14th and another 2 at 18th level."
      },
      {
        "level": 20,
        "name": "Superior Inspiration",
        "description": "When you roll initiative with no uses of Bardic Inspiration left, you regain 1 use."
      }
    ]
  },
  {
    "id": "bruxo",
    "source": "phb",
    "name": "Warlock",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "wis",
      "cha"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "deception",
        "history",
        "intimidation",
        "investigation",
        "nature",
        "religion"
      ]
    },
    "armorProficiencies": [
      "leve"
    ],
    "weaponProficiencies": [
      "armas_simples"
    ],
    "toolProficiencies": [],
    "spellcaster": "pact",
    "castingAbility": "cha",
    "startingEquipment": [
      {
        "catalogId": "quarterstaff",
        "name": "Cajado",
        "qty": 1
      },
      {
        "catalogId": "light_crossbow",
        "name": "Besta Leve",
        "qty": 1
      },
      {
        "catalogId": "crossbow_bolts",
        "name": "Virotes",
        "qty": 20
      },
      {
        "catalogId": "scholars_pack",
        "name": "Kit do Erudito",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Otherworldly Patron",
        "description": "Choose a patron (Archfey, Great Old One, Fiend...), which grants powers and features at levels 6, 10 and 14."
      },
      {
        "level": 1,
        "name": "Pact Magic",
        "description": "Cast with CHA: 2 cantrips and 2 spells at 1st level; all slots are the same level and recover on a short or long rest."
      },
      {
        "level": 2,
        "name": "Eldritch Invocations",
        "description": "Choose 2 eldritch invocations (more per the table) and you can replace one when you gain a level in this class."
      },
      {
        "level": 3,
        "name": "Pact Boon",
        "description": "Your patron grants a gift: Pact Weapon, Chain, Tome or Talisman."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Eldritch Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a cantrip, your Pact Boon option, or a Mystic Arcanum spell."
      },
      {
        "level": 6,
        "name": "Patron Features",
        "description": "Features of your chosen patron, granted at levels 6, 10 and 14."
      },
      {
        "level": 11,
        "name": "Mystic Arcanum",
        "description": "Choose one 6th-level (11th), 7th (13th), 8th (15th) and 9th (17th) spell castable once without a slot; recovers on a long rest."
      },
      {
        "level": 20,
        "name": "Eldritch Master",
        "description": "1 minute entreating your patron recovers all Pact Magic slots; 1 per long rest."
      }
    ]
  },
  {
    "id": "cacador_de_sangue",
    "source": "ddb",
    "name": "Blood Hunter",
    "hitDie": 10,
    "fixedHp": 6,
    "unarmoredDefense": null,
    "saves": [
      "dex",
      "int"
    ],
    "skillChoices": {
      "count": 3,
      "options": [
        "acrobatics",
        "arcana",
        "athletics",
        "history",
        "insight",
        "investigation",
        "religion",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "armas_marciais"
    ],
    "toolProficiencies": [
      "ferramentas de alquimia"
    ],
    "spellcaster": "none",
    "castingAbility": null,
    "startingEquipment": [
      {
        "catalogId": null,
        "name": "Arma marcial à escolha",
        "qty": 1
      },
      {
        "catalogId": "light_crossbow",
        "name": "Besta Leve",
        "qty": 1
      },
      {
        "catalogId": "crossbow_bolts",
        "name": "Virotes",
        "qty": 20
      },
      {
        "catalogId": "scale_mail",
        "name": "Escama",
        "qty": 1
      },
      {
        "catalogId": "explorers_pack",
        "name": "Kit do Explorador",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ferramentas de alquimia",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Hunter's Bane",
        "description": "Advantage on Survival to track, and on INT checks to recall information about fey, fiends and undead."
      },
      {
        "level": 1,
        "name": "Blood Maledict",
        "description": "Knows 1 blood maledict (new at 6, 10, 14 and 18); uses per rest: 1, 2 at 6th, 3 at 13th and 4 at 17th; may augment one by taking necrotic damage = hemocraft die."
      },
      {
        "level": 2,
        "name": "Fighting Style",
        "description": "Choose a style (archery, dueling, two-weapon fighting, great weapon fighting...); no option can be taken twice."
      },
      {
        "level": 2,
        "name": "Crimson Rite",
        "description": "Bonus action activates a rite on a weapon until a rest: attacks become magical and deal + hemocraft die of an elemental type; you take necrotic damage equal to activating it."
      },
      {
        "level": 3,
        "name": "Order of the Blood Hunter",
        "description": "Choose a blood hunter order, which guides your philosophy and grants features."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks when you take the Attack action."
      },
      {
        "level": 6,
        "name": "Brand of Castigation",
        "description": "On a hit with a rited weapon, mark the creature: you know its direction, and it takes psychic damage = hemocraft mod when it hits you or an ally within 5 feet; 1 per rest."
      },
      {
        "level": 7,
        "name": "Order Features",
        "description": "Features of your chosen order, granted at levels 7, 11, 15 and 18."
      },
      {
        "level": 7,
        "name": "Crimson Rite Improvement",
        "description": "Learn one additional crimson rite at 7th level and one more at 14th level."
      },
      {
        "level": 9,
        "name": "Grim Psychometry",
        "description": "Advantage on History (INT) checks about the sinister history of an object you touch or your location; you may get brief visions of the past."
      },
      {
        "level": 10,
        "name": "Dark Ascension",
        "description": "+5 feet of speed and a bonus = hemocraft mod (min +1) on STR, DEX and CON saving throws."
      },
      {
        "level": 13,
        "name": "Brand of Bindings",
        "description": "Psychic damage from Brand of Castigation doubles (min 2); a marked target cannot Dash and takes 4d6 and a WIS save when it teleports or changes planes."
      },
      {
        "level": 14,
        "name": "Hardened Soul",
        "description": "Advantage on saves against being charmed or frightened."
      },
      {
        "level": 20,
        "name": "Bloody Mastery",
        "description": "Once per turn, you can reroll a hemocraft die and keep either result; a critical hit with a rited weapon recovers 1 use of Blood Maledict."
      }
    ]
  },
  {
    "id": "clerigo",
    "source": "phb",
    "name": "Cleric",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "wis",
      "cha"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "insight",
        "medicine",
        "persuasion",
        "religion"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "pesada",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples"
    ],
    "toolProficiencies": [],
    "spellcaster": "full",
    "castingAbility": "wis",
    "startingEquipment": [
      {
        "catalogId": "mace",
        "name": "Maça",
        "qty": 1
      },
      {
        "catalogId": "scale_mail",
        "name": "Escama",
        "qty": 1
      },
      {
        "catalogId": "shield",
        "name": "Escudo",
        "qty": 1
      },
      {
        "catalogId": "holy_symbol",
        "name": "Símbolo Sagrado",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Prepare spells = WIS + cleric level (min 1); knows 3 cantrips at 1st level, casts with a holy symbol, and can cast prepared spells as rituals."
      },
      {
        "level": 1,
        "name": "Divine Domain",
        "description": "Choose a domain (Life, Light, Knowledge...), which defines domain spells, its own abilities and extra Channel Divinity uses."
      },
      {
        "level": 2,
        "name": "Channel Divinity",
        "description": "Use divine energy: Turn Undead and your domain's effect; 1 use per rest, 2 from 6th and 3 from 18th level."
      },
      {
        "level": 2,
        "name": "Domain Features",
        "description": "Features of your chosen domain, granted at levels 2, 6, 8 and 17."
      },
      {
        "level": 2,
        "name": "Harness Divine Power (Optional)",
        "description": "Optional Tasha rule: bonus action spends a Channel Divinity use to recover a spell slot of level ≤ half your proficiency bonus (rounded up)."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Cantrip Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a cantrip for another on the cleric list."
      },
      {
        "level": 5,
        "name": "Destroy Undead",
        "description": "Undead that fail their save against Turn Undead are destroyed if their CR is ≤ 1/2 (5th), 1 (8th), 2 (11th), 3 (14th) or 4 (17th)."
      },
      {
        "level": 10,
        "name": "Divine Intervention",
        "description": "Action: call on your deity, rolling d% ≤ cleric level; it works automatically at 20th level (1 per 7 days, otherwise after a long rest)."
      }
    ]
  },
  {
    "id": "druida",
    "source": "phb",
    "name": "Druid",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "int",
      "wis"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "animal_handling",
        "insight",
        "medicine",
        "nature",
        "perception",
        "religion",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples"
    ],
    "toolProficiencies": [
      "ferramentas de druida"
    ],
    "spellcaster": "full",
    "castingAbility": "wis",
    "startingEquipment": [
      {
        "catalogId": "quarterstaff",
        "name": "Cajado",
        "qty": 1
      },
      {
        "catalogId": "leather",
        "name": "Couro",
        "qty": 1
      },
      {
        "catalogId": "druidic_focus",
        "name": "Foco druídico",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Druidic",
        "description": "You can speak and write the secret druidic language; messages left in it are noticed (but not deciphered) only by those who also know it."
      },
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Prepare spells = WIS + druid level (min 1); cast with a druidic focus and can cast prepared spells as rituals."
      },
      {
        "level": 2,
        "name": "Wild Shape",
        "description": "Action: transform into a beast you have seen (2 uses per short rest); max CR 1/4 without flying or swimming (2nd), 1/2 without flying (4th) and free (8th)."
      },
      {
        "level": 2,
        "name": "Druid Circle",
        "description": "Choose a circle (Moon, Land, Dreams...), which defines your philosophy and powers."
      },
      {
        "level": 2,
        "name": "Wild Companion (Optional)",
        "description": "Optional Tasha rule: spend a Wild Shape use to cast Find Familiar without material components; the familiar is fey and lasts half your level in hours."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Cantrip Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a cantrip for another on the druid list."
      },
      {
        "level": 6,
        "name": "Circle Features",
        "description": "Features of your druid circle, granted at levels 6, 10 and 14."
      },
      {
        "level": 18,
        "name": "Timeless Body",
        "description": "You age 1 year for every 10 years that pass."
      },
      {
        "level": 18,
        "name": "Beast Spells",
        "description": "You can cast druid spells in any beast form: verbal and somatic components, but no material ones."
      },
      {
        "level": 20,
        "name": "Archdruid",
        "description": "Use Wild Shape without limit and ignore the verbal, somatic and material components (at no cost) of druid spells."
      }
    ]
  },
  {
    "id": "feiticeiro",
    "source": "phb",
    "name": "Sorcerer",
    "hitDie": 6,
    "fixedHp": 4,
    "unarmoredDefense": null,
    "saves": [
      "con",
      "cha"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "deception",
        "insight",
        "intimidation",
        "persuasion",
        "religion"
      ]
    },
    "armorProficiencies": [],
    "weaponProficiencies": [
      "besta_leve",
      "besta_mao",
      "dardo",
      "funda",
      "cajado"
    ],
    "toolProficiencies": [],
    "spellcaster": "full",
    "castingAbility": "cha",
    "startingEquipment": [
      {
        "catalogId": "light_crossbow",
        "name": "Besta Leve",
        "qty": 1
      },
      {
        "catalogId": "crossbow_bolts",
        "name": "Virotes",
        "qty": 20
      },
      {
        "catalogId": "component_pouch",
        "name": "Bolsa de componentes",
        "qty": 1
      },
      {
        "catalogId": "explorers_pack",
        "name": "Kit do Explorador",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Cast sorcerer spells with CHA; knows 4 cantrips and 2 spells at 1st level and learns more per the table."
      },
      {
        "level": 1,
        "name": "Sorcerous Origin",
        "description": "Choose an origin (Draconic Bloodline, Wild Magic...), which describes the source of your innate power."
      },
      {
        "level": 2,
        "name": "Font of Magic",
        "description": "Sorcery points = your level (recover on a long rest); convert points into slots and slots into points as a bonus action."
      },
      {
        "level": 3,
        "name": "Metamagic",
        "description": "Choose 2 metamagic options (2 more at 10th and 2 at 17th level); only one option can be applied to each spell cast."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Sorcerous Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a metamagic option or a cantrip for another on the sorcerer list."
      },
      {
        "level": 5,
        "name": "Magical Guidance (Optional)",
        "description": "Optional Tasha rule: when you fail an ability check, spend 1 sorcery point to reroll the d20."
      },
      {
        "level": 6,
        "name": "Origin Features",
        "description": "Features of your sorcerous origin, granted at levels 6, 14 and 18."
      },
      {
        "level": 20,
        "name": "Sorcerous Restoration",
        "description": "Regain 4 sorcery points whenever you finish a short rest."
      }
    ]
  },
  {
    "id": "guerreiro",
    "source": "phb",
    "name": "Fighter",
    "hitDie": 10,
    "fixedHp": 6,
    "unarmoredDefense": null,
    "saves": [
      "str",
      "con"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "animal_handling",
        "athletics",
        "history",
        "intimidation",
        "perception",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "pesada",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "armas_marciais"
    ],
    "toolProficiencies": [],
    "spellcaster": "none",
    "castingAbility": null,
    "startingEquipment": [
      {
        "catalogId": "chain_mail",
        "name": "Malha",
        "qty": 1
      },
      {
        "catalogId": "longsword",
        "name": "Espada Longa",
        "qty": 1
      },
      {
        "catalogId": "shield",
        "name": "Escudo",
        "qty": 1
      },
      {
        "catalogId": "longbow",
        "name": "Arco Longo",
        "qty": 1
      },
      {
        "catalogId": "arrows",
        "name": "Flechas",
        "qty": 20
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Fighting Style",
        "description": "Choose a style (defense, dueling, protection, great weapon, archery...); no option can be taken twice."
      },
      {
        "level": 1,
        "name": "Second Wind",
        "description": "Bonus action recovers 1d10 + fighter level HP; 1 per short rest."
      },
      {
        "level": 2,
        "name": "Action Surge",
        "description": "Gain an extra action on your turn; 1 use per short rest and 2 uses from 17th level (max 1 per turn)."
      },
      {
        "level": 3,
        "name": "Martial Archetype",
        "description": "Choose an archetype (Champion, Battle Master, Eldritch Knight...), which defines your techniques."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19; the Fighter also gets it at levels 6 and 14."
      },
      {
        "level": 4,
        "name": "Martial Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a fighting style for another available to the fighter."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks with the Attack action, three at 11th and four at 20th level."
      },
      {
        "level": 7,
        "name": "Archetype Features",
        "description": "Features of your martial archetype, granted at levels 7, 10, 15 and 18."
      },
      {
        "level": 9,
        "name": "Indomitable",
        "description": "Reroll a failed saving throw, using the new result; 1 use per long rest, 2 at 13th and 3 at 17th level."
      }
    ]
  },
  {
    "id": "ladino",
    "source": "phb",
    "name": "Rogue",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": null,
    "saves": [
      "dex",
      "int"
    ],
    "skillChoices": {
      "count": 4,
      "options": [
        "acrobatics",
        "athletics",
        "deception",
        "insight",
        "intimidation",
        "investigation",
        "perception",
        "performance",
        "persuasion",
        "sleight_of_hand",
        "stealth"
      ]
    },
    "armorProficiencies": [
      "leve"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "espada_longa",
      "rapier",
      "espada_curta",
      "besta_leve",
      "besta_mao"
    ],
    "toolProficiencies": [
      "ferramentas de ladrão"
    ],
    "spellcaster": "none",
    "castingAbility": null,
    "startingEquipment": [
      {
        "catalogId": "shortsword",
        "name": "Espada Curta",
        "qty": 1
      },
      {
        "catalogId": "shortbow",
        "name": "Arco Curto",
        "qty": 1
      },
      {
        "catalogId": "arrows",
        "name": "Flechas",
        "qty": 20
      },
      {
        "catalogId": "thieves_tools",
        "name": "Ferramentas de ladrão",
        "qty": 1
      },
      {
        "catalogId": "thieves_pack",
        "name": "Kit do Ladrão",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Expertise",
        "description": "Double your proficiency bonus in 2 skills or in 1 skill and thieves' tools; choose 2 more proficiencies at 6th level."
      },
      {
        "level": 1,
        "name": "Sneak Attack",
        "description": "+1d6 damage (increases by 1d6 per rogue level, up to 10d6) if you have advantage or the target is within 5 feet of an enemy; requires a finesse or ranged weapon."
      },
      {
        "level": 1,
        "name": "Thieves' Cant",
        "description": "A secret jargon that hides messages in normal conversation (4× slower) and signs of danger, guild or shelter; only those who know it understand."
      },
      {
        "level": 2,
        "name": "Cunning Action",
        "description": "Bonus action to take the Dash, Disengage or Hide action."
      },
      {
        "level": 3,
        "name": "Rogue Archetype",
        "description": "Choose an archetype (Assassin, Thief, Arcane Trickster...), which defines your specialization."
      },
      {
        "level": 3,
        "name": "Steady Aim (Optional)",
        "description": "Optional Tasha rule: bonus action gives advantage on your next attack this turn, but only if you did not move and your speed becomes 0 until the end of the turn."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19; the Rogue also gets it at 10th level."
      },
      {
        "level": 5,
        "name": "Uncanny Dodge",
        "description": "Reaction against an attack you can see: halve the damage you take."
      },
      {
        "level": 7,
        "name": "Evasion",
        "description": "On effects that allow a DEX save to halve damage: no damage on a success and half on a failure."
      },
      {
        "level": 9,
        "name": "Archetype Features",
        "description": "Features of your rogue archetype, granted at levels 9, 13 and 17."
      },
      {
        "level": 11,
        "name": "Reliable Talent",
        "description": "On ability checks you are proficient in, treat any d20 roll of 9 or lower as a 10."
      },
      {
        "level": 14,
        "name": "Blindsense",
        "description": "While you can hear, you are aware of the location of hidden or invisible creatures within 10 feet."
      },
      {
        "level": 15,
        "name": "Slippery Mind",
        "description": "Gain proficiency in Wisdom saving throws."
      },
      {
        "level": 18,
        "name": "Elusive",
        "description": "No attack has advantage against you while you are not incapacitated."
      },
      {
        "level": 20,
        "name": "Stroke of Luck",
        "description": "An attack that misses can become a hit, or a failed ability check treats the d20 as a 20; 1 per short rest."
      }
    ]
  },
  {
    "id": "mago",
    "source": "phb",
    "name": "Wizard",
    "hitDie": 6,
    "fixedHp": 4,
    "unarmoredDefense": null,
    "saves": [
      "int",
      "wis"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "history",
        "insight",
        "investigation",
        "religion",
        "perception"
      ]
    },
    "armorProficiencies": [],
    "weaponProficiencies": [
      "besta_leve",
      "besta_mao",
      "dardo",
      "funda",
      "cajado"
    ],
    "toolProficiencies": [],
    "spellcaster": "full",
    "castingAbility": "int",
    "startingEquipment": [
      {
        "catalogId": "quarterstaff",
        "name": "Cajado",
        "qty": 1
      },
      {
        "catalogId": "component_pouch",
        "name": "Bolsa de componentes",
        "qty": 1
      },
      {
        "catalogId": "spellbook",
        "name": "Grimório",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Spellcasting",
        "description": "Spellbook with six 1st-level spells and 3 cantrips; prepare spells = INT mod + wizard level (min 1) and can cast rituals found in your spellbook."
      },
      {
        "level": 1,
        "name": "Arcane Recovery",
        "description": "Once per day, after a short rest, recover slots with a total level ≤ half wizard level (rounded up; none of 6th or higher)."
      },
      {
        "level": 2,
        "name": "Arcane Tradition",
        "description": "Choose a tradition (Abjuration, Evocation, Illusion...), which defines your preferred school of study."
      },
      {
        "level": 3,
        "name": "Cantrip Formulas (Optional)",
        "description": "Optional Tasha rule: after a long rest, consulting your spellbook's formulas lets you swap a wizard cantrip for another on the wizard list."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 6,
        "name": "Tradition Features",
        "description": "Features of your arcane tradition, granted at levels 6, 10 and 14."
      },
      {
        "level": 18,
        "name": "Spell Mastery",
        "description": "Choose 1 1st- and 1 2nd-level spell from your spellbook: cast them at will without spending a slot; swap the choices with 8 hours of study."
      },
      {
        "level": 20,
        "name": "Signature Spells",
        "description": "Two 3rd-level spells are always prepared and do not count against your limit; cast each once without a slot per long rest."
      }
    ]
  },
  {
    "id": "monge",
    "source": "phb",
    "name": "Monk",
    "hitDie": 8,
    "fixedHp": 5,
    "unarmoredDefense": "wis",
    "saves": [
      "str",
      "dex"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "athletics",
        "history",
        "insight",
        "religion",
        "stealth"
      ]
    },
    "armorProficiencies": [],
    "weaponProficiencies": [
      "armas_simples",
      "espada_curta"
    ],
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "spellcaster": "none",
    "castingAbility": null,
    "startingEquipment": [
      {
        "catalogId": "shortsword",
        "name": "Espada Curta",
        "qty": 1
      },
      {
        "catalogId": "explorers_pack",
        "name": "Kit do Explorador",
        "qty": 1
      },
      {
        "catalogId": "darts",
        "name": "Dardos",
        "qty": 10
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Unarmored Defense",
        "description": "Without armor or shield: AC = 10 + DEX mod + WIS mod."
      },
      {
        "level": 1,
        "name": "Martial Arts",
        "description": "Use DEX for unarmed strikes and monk weapons; damage d4 (d6 at 5th, d8 at 11th, d10 at 17th) and one extra unarmed strike as a bonus action."
      },
      {
        "level": 2,
        "name": "Ki",
        "description": "Spend ki points (equal to your level) on Flurry of Blows, Patient Defense and Step of the Wind; recover all on a rest (30 min meditating)."
      },
      {
        "level": 2,
        "name": "Unarmored Movement",
        "description": "+10 feet without armor or shield (+15 at 6th, +20 at 10th, +25 at 14th, +30 at 18th); at 9th you can walk on vertical surfaces and over liquids."
      },
      {
        "level": 2,
        "name": "Dedicated Weapon (Optional)",
        "description": "Optional Tasha rule: after a rest, make one simple or martial (non-heavy) weapon you master a monk weapon until you use the feature again."
      },
      {
        "level": 3,
        "name": "Monastic Tradition",
        "description": "Choose a tradition (Open Hand, Shadow, Four Elements...), which defines your advanced training."
      },
      {
        "level": 3,
        "name": "Deflect Missiles",
        "description": "Reaction: reduce a ranged attack's damage by 1d10 + DEX mod + monk level; at 0 damage, catch the missile and can throw it back (1 ki)."
      },
      {
        "level": 3,
        "name": "Ki-Fueled Attack (Optional)",
        "description": "Optional Tasha rule: when you spend 1 or more ki on an action this turn, you can make an unarmed strike or monk weapon attack as a bonus action."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Slow Fall",
        "description": "Reaction when falling: reduce the fall damage by 5 × monk level."
      },
      {
        "level": 4,
        "name": "Quickened Healing (Optional)",
        "description": "Optional Tasha rule: action spends 2 ki and rolls your Martial Arts die to regain HP = result + proficiency bonus."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks when you take the Attack action."
      },
      {
        "level": 5,
        "name": "Stunning Strike",
        "description": "On a melee hit, spend 1 ki: the target makes a CON save or is stunned until the end of your next turn."
      },
      {
        "level": 5,
        "name": "Focused Aim (Optional)",
        "description": "Optional Tasha rule: when you miss an attack, spend 1 to 3 ki to add +2 to the attack roll per ki spent."
      },
      {
        "level": 6,
        "name": "Ki-Empowered Strikes",
        "description": "Unarmed strikes count as magical to overcome resistance and immunity to nonmagical damage."
      },
      {
        "level": 6,
        "name": "Tradition Features",
        "description": "Features of your monastic tradition, granted at levels 6, 11 and 17."
      },
      {
        "level": 7,
        "name": "Evasion",
        "description": "On effects that allow a DEX save to halve damage: no damage on a success and half on a failure."
      },
      {
        "level": 7,
        "name": "Stillness of Mind",
        "description": "Action: end an effect on you that causes charm or fear."
      },
      {
        "level": 10,
        "name": "Purity of Body",
        "description": "Immune to disease and poison."
      },
      {
        "level": 13,
        "name": "Tongue of Sun and Moon",
        "description": "Understand any spoken language, and any creature that understands languages understands what you say."
      },
      {
        "level": 14,
        "name": "Diamond Soul",
        "description": "Proficient in all saving throws; when you fail one, you can spend 1 ki to reroll."
      },
      {
        "level": 15,
        "name": "Timeless Body",
        "description": "You suffer none of the effects of aging, cannot be aged by magic, and need neither food nor water."
      },
      {
        "level": 18,
        "name": "Empty Body",
        "description": "Action with 4 ki: invisible for 1 minute and resistant to all damage except force; with 8 ki you cast Astral Projection without material components."
      },
      {
        "level": 20,
        "name": "Perfect Self",
        "description": "When you roll initiative with no ki points left, you regain 4 ki points."
      }
    ]
  },
  {
    "id": "paladino",
    "source": "phb",
    "name": "Paladin",
    "hitDie": 10,
    "fixedHp": 6,
    "unarmoredDefense": null,
    "saves": [
      "wis",
      "cha"
    ],
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "insight",
        "intimidation",
        "medicine",
        "persuasion",
        "religion"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "pesada",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "armas_marciais"
    ],
    "toolProficiencies": [],
    "spellcaster": "half",
    "castingAbility": "cha",
    "startingEquipment": [
      {
        "catalogId": "longsword",
        "name": "Espada Longa",
        "qty": 1
      },
      {
        "catalogId": "chain_mail",
        "name": "Malha",
        "qty": 1
      },
      {
        "catalogId": "shield",
        "name": "Escudo",
        "qty": 1
      },
      {
        "catalogId": "holy_symbol",
        "name": "Símbolo Sagrado",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Divine Sense",
        "description": "Action: detect celestials, fiends and undead within 60 feet (not behind total cover) until the end of your next turn; uses = 1 + CHA mod per long rest."
      },
      {
        "level": 1,
        "name": "Lay on Hands",
        "description": "Healing pool = 5 × paladin level (recovers on a long rest); touch to restore HP or spend 5 to cure a disease or neutralize a poison."
      },
      {
        "level": 2,
        "name": "Fighting Style",
        "description": "Choose a style (defense, dueling, protection, great weapon...); no option can be taken twice."
      },
      {
        "level": 2,
        "name": "Spellcasting",
        "description": "Prepare spells = CHA mod + half paladin level (min 1) and cast with a holy symbol as focus."
      },
      {
        "level": 2,
        "name": "Divine Smite",
        "description": "On a melee hit, spend a slot to deal +2d8 radiant (plus 1d8 per slot level, max 5d8; +1d8 vs undead or fiends)."
      },
      {
        "level": 3,
        "name": "Divine Health",
        "description": "The divine magic within you makes you immune to disease."
      },
      {
        "level": 3,
        "name": "Sacred Oath",
        "description": "Choose an oath (Devotion, Ancients, Vengeance...), which grants oath spells and Channel Divinity options."
      },
      {
        "level": 3,
        "name": "Harness Divine Power (Optional)",
        "description": "Optional Tasha rule: bonus action spends a Channel Divinity use to recover a spell slot of level ≤ half your proficiency bonus (rounded up)."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Martial Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap a fighting style for another available to the paladin."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks when you take the Attack action."
      },
      {
        "level": 6,
        "name": "Aura of Protection",
        "description": "You and friendly creatures within 10 feet add CHA mod (min +1) to saving throws while you are conscious."
      },
      {
        "level": 7,
        "name": "Oath Features",
        "description": "Features of your sacred oath, granted at levels 7, 15 and 20."
      },
      {
        "level": 10,
        "name": "Aura of Courage",
        "description": "You and friendly creatures within 10 feet cannot be frightened while you are conscious."
      },
      {
        "level": 11,
        "name": "Improved Divine Smite",
        "description": "Melee hits deal an extra +1d8 radiant damage."
      },
      {
        "level": 14,
        "name": "Cleansing Touch",
        "description": "Action: end a spell on you or a willing creature you touch; uses = CHA mod per long rest."
      },
      {
        "level": 18,
        "name": "Aura Expansion",
        "description": "The range of your Auras of Protection and Courage increases to 30 feet."
      }
    ]
  },
  {
    "id": "patrulheiro",
    "source": "phb",
    "name": "Ranger",
    "hitDie": 10,
    "fixedHp": 6,
    "unarmoredDefense": null,
    "saves": [
      "str",
      "dex"
    ],
    "skillChoices": {
      "count": 3,
      "options": [
        "animal_handling",
        "athletics",
        "insight",
        "investigation",
        "nature",
        "perception",
        "stealth",
        "survival"
      ]
    },
    "armorProficiencies": [
      "leve",
      "media",
      "escudo"
    ],
    "weaponProficiencies": [
      "armas_simples",
      "armas_marciais"
    ],
    "toolProficiencies": [],
    "spellcaster": "half",
    "castingAbility": "wis",
    "startingEquipment": [
      {
        "catalogId": "shortsword",
        "name": "Espada Curta",
        "qty": 1
      },
      {
        "catalogId": "longbow",
        "name": "Arco Longo",
        "qty": 1
      },
      {
        "catalogId": "arrows",
        "name": "Flechas",
        "qty": 20
      },
      {
        "catalogId": "explorers_pack",
        "name": "Kit do Explorador",
        "qty": 1
      }
    ],
    "features": [
      {
        "level": 1,
        "name": "Favored Enemy",
        "description": "Advantage on Survival to track and on INT to recall info about your favored enemy; choose one more at 6th and 14th level, plus a language."
      },
      {
        "level": 1,
        "name": "Natural Explorer",
        "description": "Favored terrain: double your proficiency on related checks and gain travel benefits; choose +1 terrain at 6th and +1 at 10th level."
      },
      {
        "level": 1,
        "name": "Deft Explorer (Optional)",
        "description": "Optional Tasha rule, replaces Natural Explorer: Canny (1st), Roving (6th: +5 feet, climb and swim) and Tireless (10th: temp HP, −1 exhaustion per short rest)."
      },
      {
        "level": 1,
        "name": "Favorite Foe (Optional)",
        "description": "Optional Tasha rule, replaces Favored Enemy: bonus action marks the target for 1 minute and adds +1d4 to the first damage of your turn (d6 at 6th, d8 at 14th); uses = proficiency bonus."
      },
      {
        "level": 2,
        "name": "Fighting Style",
        "description": "Choose a style (archery, defense, dueling, two-weapon...); no option can be taken twice."
      },
      {
        "level": 2,
        "name": "Spellcasting",
        "description": "Cast ranger spells with WIS; knows 2 spells at 2nd level and learns more per the table."
      },
      {
        "level": 2,
        "name": "Spellcasting Focus (Optional)",
        "description": "Optional Tasha rule: you can use a druidic focus as the spellcasting focus for your spells."
      },
      {
        "level": 3,
        "name": "Primeval Awareness",
        "description": "Spend a slot (effect lasts 1 minute per level) to sense aberrations, celestials, dragons, elementals, fey, fiends and undead within 1 mile (6 miles in favored terrain)."
      },
      {
        "level": 3,
        "name": "Ranger Conclave",
        "description": "Choose a conclave (Hunter, Beast Master, Horizon Walker...), which defines your specialization."
      },
      {
        "level": 3,
        "name": "Primal Awareness (Optional)",
        "description": "Optional Tasha rule, replaces Primeval Awareness: learn ranger spells (3rd, 5th, 9th, 13th and 17th) and cast each once per long rest without spending a slot."
      },
      {
        "level": 4,
        "name": "Ability Score Improvement",
        "description": "Increase one ability by 2, or two abilities by 1 (max 20), at levels 4, 8, 12, 16 and 19."
      },
      {
        "level": 4,
        "name": "Martial Versatility (Optional)",
        "description": "Optional Tasha rule: at each Ability Score Improvement, swap your fighting style for another available to the ranger."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "Two attacks when you take the Attack action."
      },
      {
        "level": 7,
        "name": "Conclave Features",
        "description": "Features of your chosen conclave, granted at levels 7, 11 and 15."
      },
      {
        "level": 8,
        "name": "Land's Stride",
        "description": "Nonmagical difficult terrain costs no extra movement; you pass through nonmagical plants without damage and have advantage on saves against them."
      },
      {
        "level": 10,
        "name": "Hide in Plain Sight",
        "description": "1 minute preparing camouflage with natural materials; while pressed against a solid surface of your size, +10 to Stealth without moving or acting."
      },
      {
        "level": 10,
        "name": "Nature's Veil (Optional)",
        "description": "Optional Tasha rule, replaces Hide in Plain Sight: bonus action makes you invisible until the start of your next turn; uses = proficiency bonus."
      },
      {
        "level": 14,
        "name": "Vanish",
        "description": "You can use Hide as a bonus action and cannot be tracked by nonmagical means unless you choose to leave a trail."
      },
      {
        "level": 18,
        "name": "Feral Sense",
        "description": "No disadvantage on attacks against creatures you cannot see, and you locate invisible creatures within 30 feet that are not hidden from you."
      },
      {
        "level": 20,
        "name": "Hunter's Prey",
        "description": "Once per turn, add your WIS mod to the attack or damage roll against a favored enemy, before or after the roll."
      }
    ]
  }
]
;

export function getClass(id: string): ClassDef | undefined {
  return CLASSES.find((c) => c.id === id);
}

export const CLASS_ABILITY_PRIORITY: Record<
  string,
  { primary: AbilityKey[]; secondary: AbilityKey[] }
> = {
  barbaro: { primary: ["str"], secondary: ["con", "dex"] },
  bardo: { primary: ["cha"], secondary: ["dex", "con"] },
  clerigo: { primary: ["wis"], secondary: ["con"] },
  druida: { primary: ["wis"], secondary: ["con", "dex"] },
  guerreiro: { primary: ["str", "dex"], secondary: ["con"] },
  monge: { primary: ["dex"], secondary: ["wis", "con"] },
  paladino: { primary: ["str"], secondary: ["cha", "con"] },
  patrulheiro: { primary: ["dex"], secondary: ["wis", "con"] },
  ladino: { primary: ["dex"], secondary: ["con", "int"] },
  bruxo: { primary: ["cha"], secondary: ["con", "dex"] },
  feiticeiro: { primary: ["cha"], secondary: ["con", "dex"] },
  mago: { primary: ["int"], secondary: ["dex", "con"] },
  artifice: { primary: ["int"], secondary: ["con", "dex"] },
  cacador_de_sangue: { primary: ["str", "dex"], secondary: ["con", "int"] },
};

export const CLASS_PREREQUISITE: Record<
  string,
  { anyOf?: AbilityKey[]; allOf?: AbilityKey[] }
> = {
  barbaro: { anyOf: ["str"] },
  bardo: { anyOf: ["cha"] },
  clerigo: { anyOf: ["wis"] },
  druida: { anyOf: ["wis"] },
  guerreiro: { anyOf: ["str", "dex"] },
  monge: { allOf: ["dex", "wis"] },
  paladino: { allOf: ["str", "wis"] },
  patrulheiro: { allOf: ["dex", "wis"] },
  ladino: { anyOf: ["dex"] },
  bruxo: { anyOf: ["cha"] },
  feiticeiro: { anyOf: ["cha"] },
  mago: { anyOf: ["int"] },
  artifice: { anyOf: ["int"] },
  cacador_de_sangue: { allOf: ["int"], anyOf: ["str", "dex"] },
};

export function classAbilityPriority(classId: string) {
  return (
    CLASS_ABILITY_PRIORITY[classId] ?? { primary: ["str"], secondary: ["con"] }
  );
}

export function classPrerequisite(classId: string) {
  return CLASS_PREREQUISITE[classId];
}
