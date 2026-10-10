import type { AbilityKey } from "../../domain/types";

export type FeatRequirement =
  | { kind: "ability"; ability: AbilityKey; value: number; label: string }
  | { kind: "abilityAny"; options: { ability: AbilityKey; value: number }[]; label: string }
  | { kind: "armor"; armor: "leve" | "media" | "pesada"; label: string }
  | { kind: "spellcasting"; label: string };

export type FeatDef = {
  id: string;
  source: string;
  name: string;
  description: string;
  requirements?: FeatRequirement[];
  abilityBonus?: Partial<Record<AbilityKey, number>>;
  abilityChoice?: { options: AbilityKey[] };
  hpPerLevel?: number;
};

export const ABILITY_PT: Record<AbilityKey, string> = {
  str: "STR",
  dex: "DEX",
  con: "CON",
  int: "INT",
  wis: "WIS",
  cha: "CHA",
};

const STR_DEX: AbilityKey[] = ["str", "dex"];
const STR_CON: AbilityKey[] = ["str", "con"];
const ALL_ABILITIES: AbilityKey[] = ["str", "dex", "con", "int", "wis", "cha"];

export const FEATS: FeatDef[] = [
  {
    "id": "marca_draconica_aberrante",
    "name": "Aberrant Dragonmark",
    "description": "+1 CON; learn a sorcerer cantrip and 1 sorcerer spell (CON); casting with the mark costs a hit die: even roll → temporary HP, odd roll → force damage",
    "abilityBonus": {
      "con": 1
    },
    "source": "erlw"
  },
  {
    "id": "ator",
    "name": "Actor",
    "description": "+1 CHA; advantage on Deception and Performance when passing yourself off as someone else; you can mimic voices and mannerisms.",
    "abilityBonus": {
      "cha": 1
    },
    "source": "phb"
  },
  {
    "id": "adepto_das_togas_pretas",
    "name": "Adept of the Black Robes",
    "description": "Requires 4th level and Initiate of High Sorcery (Nuitari); learn a 2nd-level Enchantment or Necromancy spell without slots; spend hit dice to add to your spells' damage",
    "source": "dsotdq"
  },
  {
    "id": "adepto_das_togas_vermelhas",
    "name": "Adept of the Red Robes",
    "description": "Requires 4th level and Initiate of High Sorcery (Lunitari); learn a 2nd-level Illusion or Transmutation spell without slots; attack or ability rolls of 9 or less become 10 (uses = prof)",
    "source": "dsotdq"
  },
  {
    "id": "adepto_das_togas_brancas",
    "name": "Adept of the White Robes",
    "description": "Requires 4th level and Initiate of High Sorcery; learn a 2nd-level Abjuration or Divination spell without slots; reaction: spend a slot to reduce damage by d6s + casting modifier",
    "source": "dsotdq"
  },
  {
    "id": "agente_da_ordem",
    "name": "Agent of Order",
    "description": "Requires 4th level and Scion of the Outer Planes (Law); +1 to an ability; once per turn, +1d8 force to a creature within 60 feet and restrain it on a failed WIS save (uses = prof)",
    "source": "planescape"
  },
  {
    "id": "alerta",
    "name": "Alert",
    "description": "+5 to initiative; can't be surprised while conscious; creatures don't have advantage on attacks against you for being unseen.",
    "source": "phb"
  },
  {
    "id": "iniciacao_de_artificeiro",
    "name": "Artificer Initiate",
    "description": "Learn an artificer cantrip and 1st-level spell (INT), castable without a slot 1/long rest; proficiency with one type of artisan's tools, usable as a spellcasting focus",
    "source": "tce"
  },
  {
    "id": "atleta",
    "name": "Athlete",
    "description": "Climbing and standing up from prone cost half your speed; jump with STR or DEX; +1 STR or DEX.",
    "source": "phb"
  },
  {
    "id": "herdeiro_malefico",
    "name": "Baleful Scion",
    "description": "Requires 4th level and Scion of the Outer Planes (Evil); +1 to an ability; once per turn, +1d6 + prof necrotic to a creature within 60 feet and regain that much HP (uses = prof)",
    "source": "planescape"
  },
  {
    "id": "sorte_abundante",
    "name": "Bountiful Luck",
    "description": "Halfling only; reaction: an ally within 30 feet who rolls 1 on a d20 rerolls (must use the new result); you can't use Lucky until the end of your next turn",
    "source": "xge"
  },
  {
    "id": "cartomante",
    "name": "Cartomancer",
    "description": "Requires 4th level; a deck of cards is your spellcasting focus; learn Prestidigitation; after a long rest, imbue a 1-action spell in a deck card and cast it as a bonus action (lasts 8 hours)",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Spellcasting"
      }
    ],
    "source": "botmt"
  },
  {
    "id": "investida",
    "name": "Charger",
    "description": "After Dash in a straight line, you can attack a creature in the path: +5 damage or push it 10 feet (bonus action).",
    "source": "phb"
  },
  {
    "id": "chef",
    "name": "Chef",
    "description": "+1 CON or WIS; proficiency with cook's utensils; food from a short rest grants +1d8 extra HP per Hit Die; a treat grants temporary HP (bonus action, uses = prof)",
    "source": "tce"
  },
  {
    "id": "sequaz_do_caos",
    "name": "Cohort of Chaos",
    "description": "Requires 4th level and Scion of the Outer Planes (Chaos); +1 to an ability; rolling 1 or 20 on an attack or save triggers a chaotic effect (1d4) until the end of your next turn",
    "source": "planescape"
  },
  {
    "id": "especialista_besta",
    "name": "Crossbow Expert",
    "description": "Ignores the loading property; ranged weapon attacks don't suffer disadvantage for being within 5 feet; bonus action attack with a hand crossbow.",
    "source": "phb"
  },
  {
    "id": "cruel",
    "name": "Cruel (HB)",
    "description": "Gain d6 cruelty dice (1/turn, uses = prof): add one to damage, gain temporary HP on a critical hit, or add it to Intimidation; regain all after a long rest",
    "source": "tcsr"
  },
  {
    "id": "esmagador",
    "name": "Crusher",
    "description": "+1 STR or CON; once per turn, a bludgeoning hit pushes the creature 5 feet; a critical bludgeoning hit gives advantage on attacks against it until your next turn",
    "source": "tce"
  },
  {
    "id": "duelista_defensivo",
    "name": "Defensive Duelist",
    "description": "Reaction: when a creature hits you with a melee attack, add your proficiency bonus to your AC against that attack.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "dex",
        "value": 13,
        "label": "DEX 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "favorito_divino",
    "name": "Divinely Favored",
    "description": "Requires 4th level and a Dragonlance campaign; learn a cleric cantrip, Augury, and 1 1st-level spell based on your alignment, castable without slots 1/long rest",
    "source": "dsotdq"
  },
  {
    "id": "medo_draconico",
    "name": "Dragon Fear",
    "description": "Dragonborn only; +1 STR, CON, or CHA; expend a Breath Weapon use to roar: creatures within 30 feet make a WIS save (DC 8 + prof + CHA) or are frightened for 1 minute",
    "source": "xge"
  },
  {
    "id": "couro_draconico",
    "name": "Dragon Hide",
    "description": "Dragonborn only; +1 STR, CON, or CHA; without armor your AC is 13 + DEX (shield allowed); natural claws deal 1d4 + STR slashing",
    "source": "xge"
  },
  {
    "id": "alta_magia_drow",
    "name": "Drow High Magic",
    "description": "Drow only; cast Detect Magic at will without slots; cast Levitate and Dispel Magic once without slots each (regain after a long rest); CHA is your spellcasting ability",
    "source": "xge"
  },
  {
    "id": "empunhadura_dupla",
    "name": "Dual Wielder",
    "description": "+1 AC while you wield a different weapon in each hand; you can draw or stow two weapons at once; weapons don't need to be light.",
    "source": "phb"
  },
  {
    "id": "explorador_masmorras",
    "name": "Dungeon Delver",
    "description": "Advantage on checks to find secret doors and traps and to resist traps; ignores disadvantage from darkness.",
    "source": "phb"
  },
  {
    "id": "duravel",
    "name": "Durable",
    "description": "+1 CON; when you spend a Hit Die on a short or long rest, you regain at least 1 + CON mod hit points per die.",
    "abilityBonus": {
      "con": 1
    },
    "source": "phb"
  },
  {
    "id": "robustez_ana",
    "name": "Dwarven Fortitude",
    "description": "Dwarf only; +1 CON; when you take the Dodge action, spend a Hit Die to heal the die's total + CON modifier (minimum 1 HP)",
    "abilityBonus": {
      "con": 1
    },
    "source": "xge"
  },
  {
    "id": "adepto_oculto",
    "name": "Eldritch Adept",
    "description": "Learn 1 eldritch invocation (INT, WIS, or CHA as your ability); swap it whenever you level up; invocation prerequisites only apply to warlocks who meet them",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Spellcasting"
      }
    ],
    "source": "tce"
  },
  {
    "id": "adepto_elemental",
    "name": "Elemental Adept",
    "description": "Ignores resistance to one elemental damage type of your choice (fire, cold, lightning, acid), and creatures that save against your elemental damage still take half.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "able to cast spells"
      }
    ],
    "source": "phb"
  },
  {
    "id": "precisao_elfica",
    "name": "Elven Accuracy",
    "description": "Elf or half-elf; +1 DEX, INT, WIS, or CHA; when you have advantage on an attack with that ability, reroll one of the dice (once)",
    "source": "xge"
  },
  {
    "id": "brasa_do_gigante_de_fogo",
    "name": "Ember of the Fire Giant",
    "description": "Requires 4th level and Fire Giant Strike; +1 STR, CON, or WIS; resistance to fire; replace an attack with a 15-foot burst: DEX save or 1d8 + prof fire and blinded",
    "source": "bpg"
  },
  {
    "id": "desvanecer",
    "name": "Fade Away",
    "description": "Gnome only; +1 DEX or INT; after taking damage, reaction: invisible until the end of your next turn or until you attack; 1/short or long rest",
    "source": "xge"
  },
  {
    "id": "teletransporte_feerico",
    "name": "Fey Teleportation",
    "description": "High elf only; +1 INT or CHA; learn Sylvan and Misty Step, casting it once without slots (regains on a short or long rest); INT is your spellcasting ability",
    "source": "xge"
  },
  {
    "id": "toque_feerico",
    "name": "Fey Touched",
    "description": "+1 INT, WIS, or CHA; learn Misty Step and 1 1st-level spell (Divination or Enchantment), each castable once without slots (regain on a long rest)",
    "source": "tce"
  },
  {
    "id": "iniciacao_marcial",
    "name": "Fighting Initiate",
    "description": "Requires martial weapon proficiency; learn a fighter fighting style you don't already have; when you gain an ability score improvement you can replace the style",
    "source": "tce"
  },
  {
    "id": "chamas_de_flegetonte",
    "name": "Flames Of Phlegethos",
    "description": "Tiefling only; +1 INT or CHA; reroll 1s on fire damage dice of your spells; when you cast a fire spell, flames surround you (30 feet of light; 1d4 fire to creatures that hit you within 5 feet)",
    "source": "xge"
  },
  {
    "id": "lembranca_subita",
    "name": "Flash Recall (HB)",
    "description": "Requires a spellcasting class that prepares spells; bonus action: prepare 1 spell of a level equal to or higher than one you already have prepared; 1/short or long rest",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Spellcasting"
      }
    ],
    "source": "tcsr"
  },
  {
    "id": "furia_do_gigante_de_gelo",
    "name": "Fury of the Frost Giant",
    "description": "Requires 4th level and Frost Giant Strike; +1 STR, CON, or WIS; resistance to cold; reaction: retaliation deals 1d8 cold (CON save or speed 0; uses = prof)",
    "source": "bpg"
  },
  {
    "id": "dom_do_dragao_cromatico",
    "name": "Gift of the Chromatic Dragon",
    "description": "Bonus action: imbue a weapon with acid, cold, fire, lightning, or poison (+1d4 for 1 minute; 1/long rest); reaction: resistance to that damage type (uses = prof)",
    "source": "ftd"
  },
  {
    "id": "dom_do_dragao_de_gemas",
    "name": "Gift of the Gem Dragon",
    "description": "+1 INT, WIS, or CHA; reaction: a creature within 10 feet that damaged you makes a STR save or takes 2d8 force and is pushed 10 feet (half on save, no push; uses = prof)",
    "source": "ftd"
  },
  {
    "id": "dom_do_dragao_metalico",
    "name": "Gift of the Metallic Dragon",
    "description": "Learn Cure Wounds, castable once without slots (1/long rest; INT, WIS, or CHA); reaction: spectral wings give +prof AC to an ally within 5 feet hit (uses = prof)",
    "source": "ftd"
  },
  {
    "id": "agarrador",
    "name": "Grappler",
    "description": "+1 STR; advantage on attacks against a creature you have grappled; you can try to pin (you and the target restrained) as an action; +1 STR.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "str",
        "value": 13,
        "label": "STR 13+"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "mestre_armas_pesadas",
    "name": "Great Weapon Master",
    "description": "When attacking with a heavy melee weapon, -5 to the attack and +10 to the damage; bonus action: extra attack when you reduce a creature to 0 hit points.",
    "source": "phb"
  },
  {
    "id": "marca_draconica_superior",
    "name": "Greater Dragonmark (UA)",
    "description": "Requires 8th level and a dragonmark; the mark's Insight die increases by one size; +1 to an ability the mark allows; cast the mark's spells without slots",
    "source": "wgte"
  },
  {
    "id": "astucia_do_gigante_das_nuvens",
    "name": "Guile of the Cloud Giant",
    "description": "Requires 4th level and Cloud Giant Strike; +1 STR, CON, or CHA; reaction: gain resistance to the triggering attack's damage and teleport 30 feet (uses = prof)",
    "source": "bpg"
  },
  {
    "id": "atirador",
    "name": "Gunner",
    "description": "+1 DEX; proficiency with firearms; ignore the loading property; being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attacks",
    "abilityBonus": {
      "dex": 1
    },
    "source": "tce"
  },
  {
    "id": "curandeiro",
    "name": "Healer",
    "description": "Using a healer's kit on a creature heals 1d6 + 4 + your character level hit points (once per creature until the next short rest).",
    "source": "phb"
  },
  {
    "id": "blindagem_pesada",
    "name": "Heavily Armored",
    "description": "+1 STR and proficiency with heavy armor",
    "requirements": [
      {
        "kind": "armor",
        "armor": "media",
        "label": "medium armor proficiency"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "armadura_pesada",
    "name": "Heavy Armor Master",
    "description": "+1 STR; while you wear heavy armor, subtract 3 from the bludgeoning, piercing, and slashing damage of nonmagical attacks.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "str",
        "value": 13,
        "label": "STR 13+"
      }
    ],
    "abilityBonus": {
      "str": 1
    },
    "source": "phb"
  },
  {
    "id": "constituicao_infernal",
    "name": "Infernal Constitution",
    "description": "Tiefling only; +1 CON; resistance to cold and poison damage; advantage on saves against being poisoned",
    "abilityBonus": {
      "con": 1
    },
    "source": "xge"
  },
  {
    "id": "iniciacao_na_alta_magia",
    "name": "Initiate of High Sorcery",
    "description": "Requires 4th level, a Dragonlance campaign, and sorcerer or wizard; choose a Krynn moon: learn a wizard cantrip and 2 of its 1st-level spells, castable without slots 1/long rest",
    "source": "dsotdq"
  },
  {
    "id": "lider_inspirador",
    "name": "Inspiring Leader",
    "description": "+1 CHA; after a 10-minute speech, allies who can hear you gain temporary hit points equal to your level + CHA mod.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "cha",
        "value": 13,
        "label": "CHA 13+"
      }
    ],
    "abilityBonus": {
      "cha": 1
    },
    "source": "phb"
  },
  {
    "id": "mente_aguda",
    "name": "Keen Mind",
    "description": "+1 INT; you know the time and the direction of north; you remember everything you saw or heard until the next long rest.",
    "abilityBonus": {
      "int": 1
    },
    "source": "phb"
  },
  {
    "id": "agudeza_do_gigante_de_pedra",
    "name": "Keenness of the Stone Giant",
    "description": "Requires 4th level and Stone Giant Strike; +1 STR, CON, or WIS; darkvision 60 feet; bonus action: a stone deals 1d10 force (STR save or prone; uses = prof)",
    "source": "bpg"
  },
  {
    "id": "cavaleiro_da_coroa",
    "name": "Knight of the Crown",
    "description": "Requires 4th level and Squire of Solamnia; +1 STR, DEX, or CON; bonus action: an ally within 30 feet attacks with its reaction and adds 1d8 to the damage (uses = prof)",
    "source": "dsotdq"
  },
  {
    "id": "cavaleiro_da_rosa",
    "name": "Knight of the Rose",
    "description": "Prerequisite: 4th level and Squire of Solamnia. +1 CON, WIS or CHA; bonus action: creature within 30 feet gains temporary hit points = 1d8 + proficiency + the increased modifier",
    "source": "dsotdq"
  },
  {
    "id": "cavaleiro_da_espada",
    "name": "Knight of the Sword",
    "description": "Prerequisite: 4th level and Squire of Solamnia. +1 INT, WIS or CHA; on hit, target makes a WIS save or is frightened (failure gives disadvantage; uses = proficiency)",
    "source": "dsotdq"
  },
  {
    "id": "armadura_leve",
    "name": "Lightly Armored",
    "description": "+1 STR or DEX and proficiency with light armor",
    "source": "phb"
  },
  {
    "id": "linguista",
    "name": "Linguist",
    "description": "+1 INT; learns 3 languages of your choice; you can write coded messages that others fail to decipher.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "abilityBonus": {
      "int": 1
    },
    "source": "phb"
  },
  {
    "id": "afortunado",
    "name": "Lucky",
    "description": "3 luck points (1/long rest): before or after rolling a d20 (yours or against you), roll again and choose; you can grant advantage or disadvantage.",
    "source": "phb"
  },
  {
    "id": "matador_de_magos",
    "name": "Mage Slayer",
    "description": "Reaction: melee attack vs a creature casting within 5 feet; advantage on saves vs spells of creatures within 5 feet; damaging a caster imposes disadvantage on its concentration",
    "source": "phb"
  },
  {
    "id": "iniciacao_magica",
    "name": "Magic Initiate",
    "description": "Choose a class: learns 2 cantrips and 1 1st-level spell (verbal and somatic components); you can cast the spell as a ritual 1/long rest.",
    "source": "phb"
  },
  {
    "id": "adepto_marcial",
    "name": "Martial Adept",
    "description": "Learns 2 maneuvers of your choice and gains 1 d8 superiority die to fuel them (recovers on a short or long rest).",
    "source": "phb"
  },
  {
    "id": "armadura_moderada",
    "name": "Medium Armor Master",
    "description": "+1 STR or DEX; gains proficiency with medium armor and shields.",
    "requirements": [
      {
        "kind": "armor",
        "armor": "media",
        "label": "medium armor proficiency"
      }
    ],
    "source": "phb"
  },
  {
    "id": "adepto_de_metamagia",
    "name": "Metamagic Adept",
    "description": "Learn 2 sorcerer metamagic options and gain 2 sorcery points usable only for metamagic (refresh on long rest); swap 1 option when you gain an ability score improvement",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Spellcasting"
      }
    ],
    "source": "tce"
  },
  {
    "id": "movel",
    "name": "Mobile",
    "description": "+10 feet of speed; Dash ignores difficult terrain; you don't provoke opportunity attacks from a creature you attacked in melee.",
    "source": "phb"
  },
  {
    "id": "armadura_media",
    "name": "Moderately Armored",
    "description": "+1 STR or DEX; proficiency with medium armor and shields",
    "requirements": [
      {
        "kind": "armor",
        "armor": "leve",
        "label": "light armor proficiency"
      }
    ],
    "source": "phb"
  },
  {
    "id": "combate_montado",
    "name": "Mounted Combatant",
    "description": "Advantage on attacks against a mounted and an unmounted creature; you can redirect damage taken by your mount to yourself (reaction).",
    "source": "phb"
  },
  {
    "id": "confluencia_mistica",
    "name": "Mystic Conflux (HB)",
    "description": "Attune to up to 4 magic items at once; cast Identify without a spell slot or material components (1/long rest)",
    "source": "tcsr"
  },
  {
    "id": "observador",
    "name": "Observant",
    "description": "+1 INT or WIS; +5 to Perception; +5 to passive Perception; you can read lips while watching someone speak.",
    "requirements": [
      {
        "kind": "abilityAny",
        "options": [
          {
            "ability": "int",
            "value": 13
          },
          {
            "ability": "wis",
            "value": 13
          }
        ],
        "label": "INT 13+ or WIS 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "furia_orquica",
    "name": "Orcish Fury",
    "description": "Prerequisite: half-orc. +1 STR or CON; on a weapon hit, reroll 1 damage die and add it (1/short or long rest); after Relentless Endurance, reaction makes 1 attack",
    "source": "xge"
  },
  {
    "id": "emissario_das_terras_externas",
    "name": "Outlands Envoy",
    "description": "Prerequisite: 4th level and Scion of the Outer Planes (Outlands). +1 to one ability; learn Misty Step and Languages, once each without a slot (refresh on long rest)",
    "source": "planescape"
  },
  {
    "id": "perfurador",
    "name": "Piercer",
    "description": "+1 STR or DEX; once per turn, on a piercing hit reroll 1 damage die and use the new roll; a critical with piercing rolls 1 extra damage die",
    "source": "tce"
  },
  {
    "id": "andarilho_planar",
    "name": "Planar Wanderer",
    "description": "Prerequisite: 4th level and Scion of the Outer Planes. After a long rest: resistance to acid, cold or fire; action: detect portals within 30 feet or force one within 5 feet (DC 20)",
    "source": "planescape"
  },
  {
    "id": "envenenador",
    "name": "Poisoner",
    "description": "Ignores poison resistance; coat a weapon as a bonus action; gains a poisoner's kit and, with 1 hour and 50 gp, creates doses equal to proficiency (CON save DC 14 or 2d8 poison)",
    "source": "tce"
  },
  {
    "id": "mestre_haste",
    "name": "Polearm Master",
    "description": "Bonus action attack with the butt end of the polearm (1d4 + mod); opportunity attack when a creature enters the weapon's reach.",
    "source": "phb"
  },
  {
    "id": "prodigio",
    "name": "Prodigy",
    "description": "Prerequisite: half-elf, half-orc or human. Gain 1 skill, 1 tool proficiency and 1 language of your choice; gain expertise in 1 skill you already have proficiency in",
    "source": "xge"
  },
  {
    "id": "invencao_rapida",
    "name": "Quicksmithing",
    "description": "Master 2 1st-level ritual magical effects (INT; learn more for 2 hours and 50 gp per level); gain artisan's tools and build mechanical artifacts (1 hour, 10 gp; up to 3 active)",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "source": "psk"
  },
  {
    "id": "recuperacao_notavel",
    "name": "Remarkable Recovery (HB)",
    "description": "+1 CON; when stabilized, regain hit points = CON modifier (min. 1); whenever you regain hit points from a spell, potion or class feature, add +CON modifier (min. 1)",
    "abilityBonus": {
      "con": 1
    },
    "source": "tcsr"
  },
  {
    "id": "resiliente",
    "name": "Resilient",
    "description": "+1 to one ability of your choice and proficiency in its saving throw.",
    "source": "phb"
  },
  {
    "id": "cimitarra_dupla",
    "name": "Revenant Blade",
    "description": "Prerequisite: elf. +1 DEX or STR; with a double-bladed scimitar held in two hands, +1 AC; the weapon has the finesse property for you",
    "source": "erlw"
  },
  {
    "id": "herdeiro_virtuoso",
    "name": "Righteous Heritor",
    "description": "Prerequisite: 4th level and Scion of the Outer Planes (Good). +1 to one ability; reaction reduces damage to you or a creature within 30 feet by 1d10 + prof (uses = prof)",
    "source": "planescape"
  },
  {
    "id": "conjurador_ritual",
    "name": "Ritual Caster",
    "description": "Gain a spellbook with 2 ritual spells of your choice (INT or WIS 13+ depending on the list); you can cast them as rituals.",
    "requirements": [
      {
        "kind": "abilityAny",
        "options": [
          {
            "ability": "int",
            "value": 13
          },
          {
            "ability": "wis",
            "value": 13
          }
        ],
        "label": "INT 13+ or WIS 13+"
      }
    ],
    "source": "phb"
  },
  {
    "id": "moldador_de_runas",
    "name": "Rune Shaper",
    "description": "Prerequisite: Spellcasting or Rune Carver background. Learn Comprehend Languages without a slot; after a long rest, carve runes into objects to cast 1st-level spells",
    "source": "bpg"
  },
  {
    "id": "ataque_selvagem",
    "name": "Savage Attacker",
    "description": "Once per turn, when you hit with a melee weapon, you can roll the damage die again and use the higher roll.",
    "source": "phb"
  },
  {
    "id": "progenie_dos_planos_externos",
    "name": "Scion of the Outer Planes",
    "description": "Prerequisite: Planescape campaign. Choose an Outer Plane: gain resistance to poison, necrotic, radiant, force or psychic damage and 1 cantrip (no material components)",
    "source": "planescape"
  },
  {
    "id": "segunda_chance",
    "name": "Second Chance",
    "description": "Prerequisite: halfling. +1 DEX, CON or CHA; reaction: force the creature that hit you to roll the attack again (refresh when you roll initiative or on a long rest)",
    "source": "xge"
  },
  {
    "id": "sentinela",
    "name": "Sentinel",
    "description": "Opportunity attacks have disadvantage for the target; a target you hit in melee can't move away without provoking an attack; reaction: attack a target within 5 feet that attacks an ally.",
    "source": "phb"
  },
  {
    "id": "criacao_de_servos",
    "name": "Servo Crafting",
    "description": "Cast Find Familiar as a ritual with a servo as your familiar; communicate with it telepathically and, when you attack, you can redirect 1 attack to the servo",
    "requirements": [
      {
        "kind": "ability",
        "ability": "int",
        "value": 13,
        "label": "INT 13+"
      }
    ],
    "source": "psk"
  },
  {
    "id": "toque_das_sombras",
    "name": "Shadow Touched",
    "description": "+1 INT, WIS or CHA; learn Invisibility and 1 1st-level Illusion or Necromancy spell, each castable once without a slot (refresh on long rest)",
    "source": "tce"
  },
  {
    "id": "atirador_preciso",
    "name": "Sharpshooter",
    "description": "-5 to the attack and +10 to ranged damage; ignores cover and disadvantage from long range.",
    "source": "phb"
  },
  {
    "id": "mestre_escudo",
    "name": "Shield Master",
    "description": "Bonus action: shove with your shield; on DEX saves, you take half the damage on a failure and none on a success (no effect).",
    "source": "phb"
  },
  {
    "id": "especialista_em_pericias",
    "name": "Skill Expert",
    "description": "+1 to one ability of your choice; gain 1 skill of your choice; choose a skill you already have proficiency in and gain expertise in it",
    "source": "tce"
  },
  {
    "id": "habilidoso",
    "name": "Skilled",
    "description": "Gain 3 proficiencies: skills or tools of your choice.",
    "source": "phb"
  },
  {
    "id": "esconderijo",
    "name": "Skulker",
    "description": "+1 DEX; you can hide even when only lightly obscured; missing a ranged attack doesn't reveal your position.",
    "requirements": [
      {
        "kind": "ability",
        "ability": "dex",
        "value": 13,
        "label": "DEX 13+"
      }
    ],
    "abilityBonus": {
      "dex": 1
    },
    "source": "phb"
  },
  {
    "id": "cortador",
    "name": "Slasher",
    "description": "+1 STR or DEX; once per turn, a slashing hit reduces the target's speed by 10 feet until your next turn; a slashing critical gives the target disadvantage on attacks",
    "source": "tce"
  },
  {
    "id": "alma_do_gigante_da_tempestade",
    "name": "Soul of the Storm Giant",
    "description": "Prerequisite: 4th level and Strike of the Storm Giant. +1 STR, WIS or CHA; bonus action: 10-foot aura until your next turn (resistance to lightning and thunder; uses = proficiency)",
    "source": "bpg"
  },
  {
    "id": "atirador_magias",
    "name": "Spell Sniper",
    "description": "Doubles the range of ranged attack spells; ignores total cover; advantage on attacks with conjuration.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "able to cast spells"
      }
    ],
    "source": "phb"
  },
  {
    "id": "conjurador_agil",
    "name": "Spelldriver (HB)",
    "description": "Prerequisite: level 11+. If you cast a 1st-level or higher spell as a bonus action, you can cast another with your action on the same turn; at most one of 3rd level or higher",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "Spellcasting"
      }
    ],
    "source": "tcsr"
  },
  {
    "id": "ligeireza",
    "name": "Squat Nimbleness",
    "description": "Prerequisite: dwarf or Small race. +1 STR or DEX; +5 feet of speed; proficiency in Acrobatics or Athletics; advantage to escape a grapple",
    "source": "xge"
  },
  {
    "id": "escudeiro_de_solamnia",
    "name": "Squire of Solamnia",
    "description": "Prerequisite: Dragonlance campaign, fighter/paladin or Squire of Solamnia. Mounting or dismounting costs 5 feet; advantage on attack and +1d8 damage if it hits (uses = prof)",
    "source": "dsotdq"
  },
  {
    "id": "golpe_do_gigante",
    "name": "Strike of the Giants",
    "description": "Prerequisite: martial weapon proficiency or Giant Foundling. Choose a strike (cloud, fire, frost, hill, stone or storm): deals extra damage; DC 8 + proficiency + STR or CON",
    "source": "bpg"
  },
  {
    "id": "iniciacao_de_strixhaven",
    "name": "Strixhaven Initiate",
    "description": "Choose a Strixhaven college: learn 2 cantrips and 1 1st-level spell from it; cast the spell once without a slot (refresh on long rest); INT, WIS or CHA as casting ability",
    "source": "scc"
  },
  {
    "id": "mascote_de_strixhaven",
    "name": "Strixhaven Mascot",
    "description": "Prerequisite: 4th level and Strixhaven Initiate. The mascot serves as your familiar (Find Familiar, ritual); redirect 1 attack to it or swap places with it (1/long rest)",
    "source": "scc"
  },
  {
    "id": "magia_dos_svirfneblin",
    "name": "Svirfneblin Magic",
    "description": "Prerequisite: deep gnome (svirfneblin). Cast Invisibility at will without material components; Blindness/Deafness, Blur and Disguise Self once each (1/long rest)",
    "source": "mtf"
  },
  {
    "id": "brigao_taverna",
    "name": "Tavern Brawler",
    "description": "+1 STR or CON; 1d4+mod damage when unarmed; proficiency with improvised weapons; bonus action: grapple after hitting with an improvised melee weapon.",
    "source": "phb"
  },
  {
    "id": "telecinese",
    "name": "Telekinetic",
    "description": "+1 INT, WIS or CHA; learn Mage Hand without verbal or somatic components and invisible; bonus action: push a creature within 30 feet (STR save, DC 8 + proficiency + modifier)",
    "source": "tce"
  },
  {
    "id": "telepatia",
    "name": "Telepathic",
    "description": "+1 INT, WIS or CHA; speak telepathically with a creature within 60 feet that you can see; cast Detect Thoughts once without a slot (refresh on long rest)",
    "source": "tce"
  },
  {
    "id": "mestre_do_arremesso",
    "name": "Thrown Arms Master (HB)",
    "description": "+1 STR or DEX; simple and martial melee weapons become thrown (20/60 feet one-handed, 15/30 feet two-handed); a thrown weapon returns at the end of your turn",
    "source": "tcsr"
  },
  {
    "id": "durao",
    "name": "Tough",
    "description": "Your hit point maximum increases by 2 for each character level.",
    "source": "phb"
  },
  {
    "id": "exultacao_vampirica",
    "name": "Vampiric Exultation",
    "description": "Prerequisite: Ixalan vampire. Action: your lower body becomes vapor and you gain 30 feet of flying speed for up to 10 minutes (1/short or long rest)",
    "source": "psi"
  },
  {
    "id": "vigor_do_gigante_da_colina",
    "name": "Vigor of the Hill Giant",
    "description": "Prerequisite: 4th level and Strike of the Hill Giant. +1 STR, CON or WIS; reaction negates a push or fall; eating during a short rest restores hit points = CON mod + prof",
    "source": "bpg"
  },
  {
    "id": "sacrificio_vital",
    "name": "Vital Sacrifice (HB)",
    "description": "Bonus action: take 1d6 necrotic damage you can't reduce to gain a blood blessing for 1 hour: +1d6 to attacks, +2d6 necrotic on a hit or -1d4 on a target's save",
    "source": "tcsr"
  },
  {
    "id": "mago_guerra",
    "name": "War Caster",
    "description": "Advantage on checks to maintain concentration; you can cast spells with your hands full; reaction: cast an attack spell when a creature enters your reach.",
    "requirements": [
      {
        "kind": "spellcasting",
        "label": "able to cast spells"
      }
    ],
    "source": "phb"
  },
  {
    "id": "mestre_armas",
    "name": "Weapon Master",
    "description": "+1 STR or DEX; proficiency with 4 simple or melee weapons of your choice.",
    "source": "phb"
  },
  {
    "id": "magia_do_elfo_silvestre",
    "name": "Wood Elf Magic",
    "description": "Prerequisite: wood elf. Learn 1 druid cantrip and the spells Longstrider and Pass without Trace, each castable once without a slot (refresh on long rest); WIS as casting ability",
    "source": "xge"
  }
]
;

export function getFeat(id: string | undefined | null): FeatDef | undefined {
  if (!id) return undefined;
  const base = id.split(":")[0];
  return FEATS.find((f) => f.id === base);
}

export type FeatRef = { featId: string; ability?: AbilityKey };

export function parseFeatRef(ref: string): FeatRef {
  const [featId, ability] = ref.split(":");
  return { featId, ability: ability as AbilityKey | undefined };
}

export function buildFeatRef(featId: string, ability?: AbilityKey): string {
  return ability ? `${featId}:${ability}` : featId;
}

export type FeatContext = {
  abilities: Record<AbilityKey, number>;
  armorProficiencies: string[];
  canCastSpells: boolean;
};

export function featUnmetRequirements(feat: FeatDef, ctx: FeatContext): string[] {
  const missing: string[] = [];
  for (const req of feat.requirements ?? []) {
    if (req.kind === "ability") {
      if ((ctx.abilities[req.ability] ?? 0) < req.value) missing.push(req.label);
    } else if (req.kind === "abilityAny") {
      const ok = req.options.some((o) => (ctx.abilities[o.ability] ?? 0) >= o.value);
      if (!ok) missing.push(req.label);
    } else if (req.kind === "armor") {
      if (!ctx.armorProficiencies.includes(req.armor)) missing.push(req.label);
    } else if (req.kind === "spellcasting") {
      if (!ctx.canCastSpells) missing.push(req.label);
    }
  }
  return missing;
}

export function featAbilityBonus(feat: FeatDef, ref: FeatRef): Partial<Record<AbilityKey, number>> {
  if (feat.abilityBonus) return feat.abilityBonus;
  if (feat.abilityChoice && ref.ability && feat.abilityChoice.options.includes(ref.ability)) {
    return { [ref.ability]: 1 };
  }
  return {};
}
