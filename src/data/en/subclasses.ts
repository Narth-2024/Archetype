export type SubclassFeature = { level: number; name: string; description: string };

export type SubclassDef = {
  id: string;
  source: string;
  classId: string;
  name: string;
  level: number;
  features: SubclassFeature[];
};

export const SUBCLASSES: SubclassDef[] = [
  {
    "id": "alquimista",
    "source": "tce",
    "classId": "artifice",
    "name": "Alchemist",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tool Proficiency",
        "description": "You gain proficiency with alchemist's supplies (or another type of artisan's tools of your choice if you already have this proficiency)."
      },
      {
        "level": 3,
        "name": "Alchemist Spells",
        "description": "You always have the Alchemist spells from the table prepared for your artificer level; they don't count against your prepared spells."
      },
      {
        "level": 3,
        "name": "Experimental Elixir",
        "description": "After a long rest, you create an elixir (roll its effect); spending a 1st-level+ slot makes another of your choice. Two elixirs at 6th and three at 15th level."
      },
      {
        "level": 5,
        "name": "Alchemical Savant",
        "description": "Using alchemist's supplies as a focus, add your INT mod (minimum +1) to a healing roll or to acid, fire, necrotic, or poison damage from the spell."
      },
      {
        "level": 9,
        "name": "Restorative Reagents",
        "description": "A creature that drinks your elixir gains 2d6 + INT temporary hit points; cast Lesser Restoration without a slot or preparation (uses = INT mod; 1/long rest)."
      },
      {
        "level": 15,
        "name": "Chemical Mastery",
        "description": "You have resistance to acid and poison and immunity to the poisoned condition; cast Greater Restoration and Heal without a slot or material component (1/long rest each)."
      }
    ]
  },
  {
    "id": "armeiro",
    "source": "tce",
    "classId": "artifice",
    "name": "Armorer",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tools of the Trade",
        "description": "You gain proficiency with heavy armor and smith's tools (or another type of artisan's tools of your choice if you already have this proficiency)."
      },
      {
        "level": 3,
        "name": "Armorer Spells",
        "description": "You always have the Armorer spells from the table prepared for your artificer level; they don't count against your prepared spells."
      },
      {
        "level": 3,
        "name": "Arcane Armor",
        "description": "Action, with smith's tools in hand: turn your worn armor into Arcane Armor — no STR requirement, it serves as a focus, adheres to your body, and is donned as an action."
      },
      {
        "level": 3,
        "name": "Armor Model",
        "description": "Choose Guardian (Thunder Gauntlets 1d8; Defensive Field grants temporary HP) or Infiltrator (Lightning Launcher 1d6 + 1d6 at 90/300 feet; +5 feet; advantage on Stealth)."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "You can attack twice when you take the Attack action."
      },
      {
        "level": 9,
        "name": "Armor Modifications",
        "description": "Arcane Armor counts as separate items (armor, boots, helmet, and weapon) for Infuse Items, and your limit of infused items increases by 2."
      },
      {
        "level": 15,
        "name": "Perfected Armor",
        "description": "Guardian: reaction pulls a Large or smaller creature within 30 feet up to 25 feet if it fails a STR save. Infiltrator: the target glows; the next attack against it has advantage (+1d6)."
      }
    ]
  },
  {
    "id": "artilheiro",
    "source": "tce",
    "classId": "artifice",
    "name": "Artillerist",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tool Proficiency",
        "description": "You gain proficiency with carpenter's tools (or another type of artisan's tools of your choice if you already have this proficiency)."
      },
      {
        "level": 3,
        "name": "Artillerist Spells",
        "description": "You always have the Artillerist spells from the table prepared for your artificer level; they don't count against your prepared spells."
      },
      {
        "level": 3,
        "name": "Eldritch Cannon",
        "description": "Action: create a Small or Tiny cannon within 5 feet (AC 18, HP 5×level); activate it with a bonus action within 60 feet. Types: Flamethrower (2d8), Force Ballista (2d8) or Protector (1d8+INT)."
      },
      {
        "level": 5,
        "name": "Arcane Firearm",
        "description": "After a long rest, inscribe sigils on a quarterstaff, staff, or wand; when you cast an artificer spell through it, roll a d8 and add it to one damage roll of the spell."
      },
      {
        "level": 9,
        "name": "Explosive Cannon",
        "description": "Your cannons deal +1d8 damage; action: detonate a cannon within 60 feet — 3d8 force in a 20-foot radius (DEX save, half) and the cannon is destroyed."
      },
      {
        "level": 15,
        "name": "Fortified Position",
        "description": "You and allies have half cover within 10 feet of your cannon, and you can have two cannons at once, activated by the same bonus action."
      }
    ]
  },
  {
    "id": "ferreiro_de_batalha",
    "source": "tce",
    "classId": "artifice",
    "name": "Battle Smith",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tool Proficiency",
        "description": "You gain proficiency with smith's tools (or another type of artisan's tools of your choice if you already have this proficiency)."
      },
      {
        "level": 3,
        "name": "Battle Smith Spells",
        "description": "You always have the Battle Smith spells from the table prepared for your artificer level; they don't count against your prepared spells."
      },
      {
        "level": 3,
        "name": "Battle Ready",
        "description": "You gain proficiency with martial weapons, and when you attack with a magic weapon, you use your INT mod instead of STR or DEX for attack and damage rolls."
      },
      {
        "level": 3,
        "name": "Steel Defender",
        "description": "Your allied construct (AC 15, HP 2 + INT + 5×level) acts after you, taking the Dodge action by default; revive it with a 1st-level+ slot or recreate it on a long rest."
      },
      {
        "level": 5,
        "name": "Extra Attack",
        "description": "You can attack twice when you take the Attack action."
      },
      {
        "level": 9,
        "name": "Arcane Jolt",
        "description": "Your hit with a magic weapon or the Steel Defender deals +2d6 force or heals 2d6 hit points (uses = INT mod; once per turn)."
      },
      {
        "level": 15,
        "name": "Improved Defender",
        "description": "Arcane Jolt deals or heals 4d6; the Steel Defender gains +2 AC and retaliates for 1d4 + INT force damage when it uses Deflect Attack."
      }
    ]
  },
  {
    "id": "caminho_dos_ancestrais",
    "source": "xge",
    "classId": "barbaro",
    "name": "Ancestral Guardian",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Ancestral Protectors",
        "description": "When you enter a rage, spirits appear: the first creature you hit has disadvantage on attacks against others, and when you hit another creature, it has resistance to damage."
      },
      {
        "level": 6,
        "name": "Spirit Shield",
        "description": "While raging, reaction: reduce the damage dealt to a creature you can see within 30 feet by 2d6 (3d6 at 10th and 4d6 at 14th level)."
      },
      {
        "level": 10,
        "name": "Consult the Spirits",
        "description": "Cast Augury or Clairvoyance without a spell slot or material component (WIS); you can't do so again until you finish a short or long rest."
      },
      {
        "level": 14,
        "name": "Vengeful Ancestors",
        "description": "When Spirit Shield reduces damage, the attacker takes force damage equal to the amount prevented."
      }
    ]
  },
  {
    "id": "caminho_da_furia_de_batalha",
    "source": "scag",
    "classId": "barbaro",
    "name": "Battlerager",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Battlerager Armor",
        "description": "Only dwarves follow this path. While raging, bonus action: attack with your armor's spikes (1d4 piercing, STR mod); a successful grapple deals 3 piercing."
      },
      {
        "level": 6,
        "name": "Reckless Abandon",
        "description": "When you use Reckless Attack while raging, you gain temporary hit points equal to your CON mod (minimum 1); you lose any remaining when the rage ends."
      },
      {
        "level": 10,
        "name": "Battlerager Charge",
        "description": "You can take the Dash action as a bonus action while you are raging."
      },
      {
        "level": 14,
        "name": "Spiked Retribution",
        "description": "A creature within 5 feet that hits you in melee takes 3 piercing damage if you are raging, conscious, and wearing spiked armor."
      }
    ]
  },
  {
    "id": "caminho_da_besta",
    "source": "tce",
    "classId": "barbaro",
    "name": "Beast",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Form of the Beast",
        "description": "While raging, manifest a natural weapon: Bite 1d8 (heals you for your proficiency bonus if below half HP), Claws 1d6 (+1 extra attack), or Tail 1d8 with reach (+1d8 AC, reaction)."
      },
      {
        "level": 6,
        "name": "Bestial Soul",
        "description": "Your natural weapons are magical; after a rest, until it ends you gain a swim speed and water breathing, a climb speed without checks, or a longer jump (Athletics check)."
      },
      {
        "level": 10,
        "name": "Infectious Fury",
        "description": "When you hit with a natural weapon while raging: WIS save (DC 8 + CON + prof.) or the target attacks another creature with its reaction or takes 2d12 psychic (uses = prof.)."
      },
      {
        "level": 14,
        "name": "Call the Hunt",
        "description": "When you enter a rage, choose up to CON mod allied creatures within 30 feet: you gain 5 temporary hit points for each, and they add 1d6 to damage once per turn."
      }
    ]
  },
  {
    "id": "berserker",
    "source": "phb",
    "classId": "barbaro",
    "name": "Path of the Berserker",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Frenzy",
        "description": "While raging, you can spend a bonus action to attack on each turn; when the rage ends, you suffer 1 level of exhaustion."
      },
      {
        "level": 6,
        "name": "Mindless Rage",
        "description": "While you are raging, you are immune to being charmed or frightened."
      },
      {
        "level": 10,
        "name": "Intimidating Presence",
        "description": "Action: hostile creatures within 15 feet that fail a WIS save are frightened for 1 minute."
      },
      {
        "level": 14,
        "name": "Retaliation",
        "description": "Reaction: when a creature within 5 feet damages you, you attack it with a melee weapon."
      }
    ]
  },
  {
    "id": "caminho_do_gigante",
    "source": "bpg",
    "classId": "barbaro",
    "name": "Giant",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Giant's Power",
        "description": "You learn to speak, read, and write Giant (or another language if you already know it) and the Thaumaturgy or Druidcraft cantrip (WIS as your spellcasting ability)."
      },
      {
        "level": 3,
        "name": "Giant's Havoc",
        "description": "While raging, a successful ranged attack with a thrown weapon using STR adds your rage damage bonus; your reach increases by 5 feet and you become Large if there's room."
      },
      {
        "level": 6,
        "name": "Elemental Cleaver",
        "description": "When you rage, infuse a weapon with acid, cold, fire, lightning, or thunder: +1d6 damage of that type, 20/60 feet thrown range, and it returns to your hand; a bonus action changes the type."
      },
      {
        "level": 10,
        "name": "Mighty Impel",
        "description": "Bonus action while raging: move a Medium or smaller creature within your reach up to 30 feet (STR save if unwilling); without support beneath it, the creature falls."
      },
      {
        "level": 14,
        "name": "Demiurgic Colossus",
        "description": "While raging, your reach increases by 10 feet, your size can become Huge, Mighty Impel moves Large creatures, and Elemental Cleaver deals +2d6."
      }
    ]
  },
  {
    "id": "caminho_do_arauto_da_tempestade",
    "source": "xge",
    "classId": "barbaro",
    "name": "Storm Herald",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Storm Aura",
        "description": "While raging, a 10-foot aura (activate with a bonus action): Desert deals 2 fire; Sea requires a DEX save or deals 1d6 lightning; Tundra grants 2 temporary HP; DC = 8 + CON + prof."
      },
      {
        "level": 6,
        "name": "Storm Soul",
        "description": "Desert: resistance to fire and ignore extreme heat. Sea: resistance to lightning, breathe underwater, 30-foot swim speed. Tundra: resistance to cold and freeze water with an action."
      },
      {
        "level": 10,
        "name": "Shielding Storm",
        "description": "Creatures of your choice within the aura have the resistance you gained from Storm Soul."
      },
      {
        "level": 14,
        "name": "Raging Storm",
        "description": "Desert: reaction, a creature that hits you makes a DEX save and takes fire damage equal to half your barbarian level. Sea: reaction, STR save or knocked prone. Tundra: STR save or speed 0."
      }
    ]
  },
  {
    "id": "totem_warrior",
    "source": "phb",
    "classId": "barbaro",
    "name": "Path of the Totem Warrior",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Spirit Seeker",
        "description": "You can cast Beast Sense and Speak with Animals only as rituals."
      },
      {
        "level": 3,
        "name": "Totem Spirit",
        "description": "Choose a totem animal (bear, eagle, elk, tiger, or wolf) and gain its power while raging — e.g., the bear grants resistance to all damage."
      },
      {
        "level": 6,
        "name": "Aspect of the Beast",
        "description": "Secondary power of your totem animal — e.g., the bear doubles carrying capacity, the eagle gives 1 mile of vision."
      },
      {
        "level": 10,
        "name": "Spirit Walker",
        "description": "You can cast Commune with Nature only as a ritual."
      },
      {
        "level": 14,
        "name": "Totemic Attunement",
        "description": "A new totem power that is permanent while raging — e.g., the bear imposes disadvantage on attacks against your allies."
      }
    ]
  },
  {
    "id": "caminho_da_magia_selvagem",
    "source": "tce",
    "classId": "barbaro",
    "name": "Wild Magic",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Magic Awareness",
        "description": "Action: until the end of your next turn, detect spells and magic items within 60 feet through total cover and learn the school (uses = prof.; regained on a long rest)."
      },
      {
        "level": 3,
        "name": "Wild Surge",
        "description": "When you enter a rage, roll on the Wild Magic table for the effect produced; if it requires a save, the DC = 8 + prof. + CON."
      },
      {
        "level": 6,
        "name": "Bolstering Magic",
        "description": "Action: touch a creature — add 1d3 to its attacks and checks for 10 minutes, or recover a spell slot of a level equal to or lower than the roll (uses = prof.)."
      },
      {
        "level": 10,
        "name": "Unstable Backlash",
        "description": "While raging, when you take damage or fail a save, reaction: roll on the Wild Magic table and the new effect replaces the current one."
      },
      {
        "level": 14,
        "name": "Controlled Surge",
        "description": "When you roll on the table, roll twice and choose one of the effects; if the rolls are equal, choose any effect from the table."
      }
    ]
  },
  {
    "id": "caminho_do_fanatico",
    "source": "xge",
    "classId": "barbaro",
    "name": "Zealot",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Divine Fury",
        "description": "While raging, the first creature you hit with a weapon on your turn takes +1d6 plus half your barbarian level of necrotic or radiant damage (your choice)."
      },
      {
        "level": 3,
        "name": "Warrior of the Gods",
        "description": "Spells that would return you to life, such as Revivify, are cast on you without material components."
      },
      {
        "level": 6,
        "name": "Fanatical Focus",
        "description": "When you fail a saving throw while raging, you can reroll and must use the new roll (once per rage)."
      },
      {
        "level": 10,
        "name": "Zealous Presence",
        "description": "Bonus action: battle cry — up to 10 creatures that can hear you within 60 feet have advantage on attacks and saving throws until the start of your next turn (1/long rest)."
      },
      {
        "level": 14,
        "name": "Rage Beyond Death",
        "description": "While raging, dropping to 0 hit points doesn't leave you unconscious; you keep making death saves and die when the rage ends only if you still have 0 hit points."
      }
    ]
  },
  {
    "id": "faculdade_da_criacao",
    "source": "tce",
    "classId": "bardo",
    "name": "Creation",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Mote of Potential",
        "description": "When you give a creature a Bardic Inspiration die, a mote orbits it: on a check it rerolls the die; on an attack the target takes thunder damage (CON save); on a save it gains temporary HP."
      },
      {
        "level": 3,
        "name": "Performance of Creation",
        "description": "Action: create a nonmagical object (worth ≤20 gp × level, Medium or smaller) within 10 feet; it vanishes after hours = prof. (1/long rest or a 2nd-level+ slot); grows at 6th and 14th."
      },
      {
        "level": 6,
        "name": "Animating Performance",
        "description": "Action: animate a Large or smaller nonmagical object within 30 feet for 1 hour (Dancing Item stat block); you command it with a bonus action (1/long rest or a 3rd-level+ slot)."
      },
      {
        "level": 14,
        "name": "Creative Crescendo",
        "description": "Performance of Creation creates several identical items equal to your CHA mod (minimum 2) with no gp value limit; only one can be of the maximum size."
      }
    ]
  },
  {
    "id": "faculdade_da_eloquencia",
    "source": "moot",
    "classId": "bardo",
    "name": "Eloquence",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Silver Tongue",
        "description": "On CHA (Persuasion) or CHA (Deception) checks, a roll of 9 or lower counts as 10."
      },
      {
        "level": 3,
        "name": "Unsettling Words",
        "description": "Bonus action: spend 1 use of Bardic Inspiration; a creature within 60 feet subtracts the die from its next saving throw before the start of your next turn."
      },
      {
        "level": 6,
        "name": "Unfailing Inspiration",
        "description": "When a creature uses your Bardic Inspiration die and the roll fails, it can keep the die."
      },
      {
        "level": 6,
        "name": "Universal Speech",
        "description": "Action: up to CHA mod creatures within 60 feet understand you for 1 hour, regardless of the language (1/long rest or a spell slot)."
      },
      {
        "level": 14,
        "name": "Infectious Inspiration",
        "description": "When a creature within 60 feet adds your die and hits, reaction: grant another die to a different creature that can hear you (uses = CHA mod; 1/long rest)."
      }
    ]
  },
  {
    "id": "faculdade_do_glamour",
    "source": "xge",
    "classId": "bardo",
    "name": "Glamour",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Mantle of Inspiration",
        "description": "Bonus action: spend 1 Bardic Inspiration use; up to CHA mod creatures within 60 feet gain 5 temporary hit points (8, 11, 14 at 5th, 10th, 15th) and can move with a reaction without provoking attacks."
      },
      {
        "level": 3,
        "name": "Enthralling Performance",
        "description": "After performing for 1 minute, up to CHA mod humanoids within 60 feet make a WIS save or are charmed for 1 hour, adoring you (1/short or long rest)."
      },
      {
        "level": 6,
        "name": "Mantle of Majesty",
        "description": "Bonus action: cast Command without a slot and take on supernatural beauty for 1 minute; during that time Command is a bonus action and charmed creatures fail automatically."
      },
      {
        "level": 14,
        "name": "Unbreakable Majesty",
        "description": "Bonus action, 1 minute: the first attack against you each turn requires a CHA save or it misses; on a success the attacker has disadvantage on its next save against you."
      }
    ]
  },
  {
    "id": "saberes",
    "source": "phb",
    "classId": "bardo",
    "name": "College of Lore",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency in 3 skills of your choice."
      },
      {
        "level": 3,
        "name": "Cutting Words",
        "description": "Reaction: subtract a Bardic Inspiration die from a creature's attack, check, or damage within 60 feet."
      },
      {
        "level": 6,
        "name": "Additional Magical Secrets",
        "description": "You learn 2 spells from any class spell list."
      },
      {
        "level": 14,
        "name": "Peerless Skill",
        "description": "On an ability check, you can spend Bardic Inspiration after rolling to add the die."
      }
    ]
  },
  {
    "id": "faculdade_dos_espiritos",
    "source": "vgr",
    "classId": "bardo",
    "name": "Spirits",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Guiding Whispers",
        "description": "You learn the Guidance cantrip, in addition to your bard cantrips, with a range of 60 feet."
      },
      {
        "level": 3,
        "name": "Spiritual Focus",
        "description": "A candle, crystal ball, skull, spirit board, or tarokka deck serves as a focus; from 6th level, roll 1d6 and add it to a damage or healing roll of a spell cast through it."
      },
      {
        "level": 3,
        "name": "Tales from Beyond",
        "description": "Bonus action with your focus in hand: spend 1 Bardic Inspiration use and roll on the Spirit Tales table; choose a creature within 30 feet to receive the effect (spell save DC)."
      },
      {
        "level": 6,
        "name": "Spirit Session",
        "description": "A 1-hour ritual with up to prof. creatures: you temporarily learn a Divination or Necromancy spell of any class with a level ≤ the number of participants, until your next long rest."
      },
      {
        "level": 14,
        "name": "Mystical Connection",
        "description": "When you roll on the Spirit Tales table, roll the die twice and choose one; if the rolls are equal, choose any tale from the table."
      }
    ]
  },
  {
    "id": "faculdade_das_espadas",
    "source": "xge",
    "classId": "bardo",
    "name": "Swords",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with medium armor and the scimitar; a simple or martial melee weapon you are proficient with serves as your spellcasting focus."
      },
      {
        "level": 3,
        "name": "Fighting Style",
        "description": "Choose Dueling (+2 damage with a one-handed melee weapon and no other weapon) or Two-Weapon Fighting (add your ability mod to the second attack's damage)."
      },
      {
        "level": 3,
        "name": "Blade Flourish",
        "description": "Attack action: +10 feet of movement and, on a hit, you can spend a Bardic Inspiration use: Defensive (+damage and +AC), Slashing (damage within 5 feet), or Mobile (push and follow)."
      },
      {
        "level": 6,
        "name": "Extra Attack",
        "description": "You can attack twice when you take the Attack action."
      },
      {
        "level": 14,
        "name": "Master's Flourish",
        "description": "When you use a Blade Flourish, roll 1d6 instead of spending a Bardic Inspiration die."
      }
    ]
  },
  {
    "id": "valor",
    "source": "phb",
    "classId": "bardo",
    "name": "College of Valor",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Proficiencies",
        "description": "Medium armor, shields, and martial weapons."
      },
      {
        "level": 3,
        "name": "Combat Inspiration",
        "description": "The inspiration die can be added to your AC against an attack or increase a weapon's damage."
      },
      {
        "level": 6,
        "name": "Extra Attack",
        "description": "You can attack twice when you take the Attack action."
      },
      {
        "level": 14,
        "name": "Battle Magic",
        "description": "After you cast a spell with your action, you can attack with a weapon as a bonus action."
      }
    ]
  },
  {
    "id": "faculdade_dos_sussurros",
    "source": "xge",
    "classId": "bardo",
    "name": "Whispers",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Psychic Blades",
        "description": "On a weapon hit: spend 1 use of Bardic Inspiration to deal +2d6 psychic (3d6 at 5th, 5d6 at 10th, 8d6 at 15th), once per turn."
      },
      {
        "level": 3,
        "name": "Words of Terror",
        "description": "After speaking 1 minute alone with a humanoid, it makes a WIS save or is frightened for 1 hour, until it or its allies are harmed (1/rest)."
      },
      {
        "level": 6,
        "name": "Mantle of Whispers",
        "description": "Reaction: when a humanoid within 30 feet dies, capture its shadow; action: assume its appearance for 1 hour and know what it would tell acquaintances (Deception +5 vs Insight)."
      },
      {
        "level": 14,
        "name": "Shadow Lore",
        "description": "Action: magically whisper to a creature within 30 feet; WIS save or it is charmed for 8 hours, obeying out of fear of exposure (1/long rest)."
      }
    ]
  },
  {
    "id": "ordem_do_caca_fantasma",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Ghostslayer",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Rite of the Dawn",
        "description": "Your Rite of the Dawn deals radiant damage; while active, the weapon sheds bright light 20 feet, you have resistance to necrotic, and you roll an extra hemocraft die against undead."
      },
      {
        "level": 3,
        "name": "Curse Specialist",
        "description": "You gain 1 additional use of Blood Maledict, and your blood curses can target any creature, whether or not it has blood."
      },
      {
        "level": 7,
        "name": "Aether Walk",
        "description": "At the start of your turn, move through creatures and objects and affect those on the Ethereal Plane for rounds = hemocraft mod (1d10 if you end inside an object; 1/rest; 2 at 15th)."
      },
      {
        "level": 11,
        "name": "Brand of Sundering",
        "description": "When you hit with a weapon that has an active crimson rite, roll an extra hemocraft die; a branded creature can't move through creatures or objects."
      },
      {
        "level": 15,
        "name": "Blood Curse of the Exorcist",
        "description": "You gain the Blood Curse of the Exorcist for Blood Maledict; it doesn't count against your number of blood curses known."
      },
      {
        "level": 18,
        "name": "Rite Revival",
        "description": "When you are reduced to 0 hit points with at least one crimson rite active, end all active rites and drop to 1 hit point instead."
      }
    ]
  },
  {
    "id": "ordem_do_licantropo",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Lycan",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Heightened Senses",
        "description": "You have advantage on WIS (Perception) checks that rely on hearing or smell."
      },
      {
        "level": 3,
        "name": "Hybrid Transformation",
        "description": "Bonus action, up to 1 hour (1/rest): +1 melee damage, resistance to nonmagical non-silver damage, +1 AC without heavy armor, and unarmed strikes deal 1d6 with DEX."
      },
      {
        "level": 7,
        "name": "Stalker's Prowess",
        "description": "Speed +10 feet, long jump +10 feet, high jump +3 feet; unarmed strikes get +1 to attack (2 at 11th, 3 at 18th) and are magical while a crimson rite is active."
      },
      {
        "level": 11,
        "name": "Advanced Transformation",
        "description": "Hybrid Transformation can be used twice per rest, and you regain 1 + CON hit points at the start of your turn while below half hit points."
      },
      {
        "level": 15,
        "name": "Brand of the Voracious",
        "description": "In hybrid form you have advantage on the bloodlust save and on attacks against a creature branded by you."
      },
      {
        "level": 18,
        "name": "Hybrid Transformation Mastery",
        "description": "Hybrid Transformation is unlimited and lasts until you revert, fall unconscious, or die; you gain the Blood Curse of the Howl (not counted among known curses)."
      }
    ]
  },
  {
    "id": "ordem_do_mutante",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Mutant",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Mutagencraft",
        "description": "Bonus action: ingest a mutagen (effects and side effects last until a rest; an action flushes them); you know 4 formulas and create 1 mutagen per rest, more with level (3 and 8 at 18th)."
      },
      {
        "level": 7,
        "name": "Strange Metabolism",
        "description": "Immunity to poison damage and the poisoned condition; bonus action: ignore one mutagen's negative side effect for 1 minute (1/long rest)."
      },
      {
        "level": 11,
        "name": "Brand of Axiom",
        "description": "A branded creature's illusions and invisibility end; in an alternate form it makes a WIS save or reverts and is stunned until the end of your next turn."
      },
      {
        "level": 15,
        "name": "Blood Curse of Corrosion",
        "description": "You gain the Blood Curse of Corrosion for Blood Maledict; it doesn't count against your number of blood curses known."
      },
      {
        "level": 18,
        "name": "Exalted Mutation",
        "description": "Bonus action: replace an active mutagen with another whose formula you know (uses = hemocraft mod; regained on a long rest)."
      }
    ]
  },
  {
    "id": "ordem_da_alma_profana",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Profane Soul",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Otherworldly Patron",
        "description": "You bargain with a being — Archfey, Fiend, Great Old One, Undying, Celestial, Hexblade, Fathomless, Genie, or Undead — that augments your features."
      },
      {
        "level": 3,
        "name": "Profane Soul Spellcasting",
        "description": "You learn warlock spells (2 cantrips, slots per the table) with your hemocraft mod as the spellcasting ability; slots recover on a short or long rest; extra cantrip at 10th."
      },
      {
        "level": 3,
        "name": "Rite Focus",
        "description": "With an active crimson rite, your weapon is a warlock focus and grants your pact's benefit: Archfey reveals the target, Celestial heals with a hemocraft die, Undead halves necrotic."
      },
      {
        "level": 7,
        "name": "Mystic Frenzy",
        "description": "When you use your action to cast a cantrip, you can immediately make one weapon attack as a bonus action."
      },
      {
        "level": 7,
        "name": "Revealed Arcana",
        "description": "Your patron grants a distinctive spell for your pact (e.g., Archfey: Blur, Fiend: Scorching Ray) to cast without a spell slot (1/long rest)."
      },
      {
        "level": 11,
        "name": "Brand of the Sapping Scar",
        "description": "A creature branded by you has disadvantage on saving throws against your warlock spells."
      },
      {
        "level": 15,
        "name": "Unsealed Arcana",
        "description": "Your patron grants an additional spell for your pact (e.g., Great Old One: Haste), cast without a spell slot (1/long rest)."
      },
      {
        "level": 18,
        "name": "Blood Curse of the Souleater",
        "description": "You gain the Blood Curse of the Souleater for Blood Maledict; it doesn't count against your number of blood curses known."
      }
    ]
  },
  {
    "id": "dominio_da_ambicao",
    "source": "psa",
    "classId": "clerigo",
    "name": "Ambition",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Ambition Domain Spells",
        "description": "Starting at 1st level, you always have the Ambition Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Warding Flare",
        "description": "Reaction: a creature within 30 feet that attacks you has disadvantage on the attack (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Invoke Duplicity",
        "description": "Action: create an illusory duplicate of yourself for 1 minute; you can cast spells as if you were in it and have advantage on attacks when you and the duplicate are within 5 feet of the target."
      },
      {
        "level": 6,
        "name": "Channel Divinity: Cloak of Shadows",
        "description": "Action: become invisible until the end of your next turn; you reappear when you attack or cast a spell."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS mod to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Improved Duplicity",
        "description": "You can create up to 4 duplicates with Invoke Duplicity and move them as a bonus action up to 30 feet (no more than 120 feet from you)."
      }
    ]
  },
  {
    "id": "dominio_do_arcano",
    "source": "scag",
    "classId": "clerigo",
    "name": "Arcana",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Arcana Domain Spells",
        "description": "Starting at 1st level, you always have the Arcana Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Arcane Initiate",
        "description": "You gain proficiency in Arcana and 2 cantrips of your choice from the wizard list (they count as cleric cantrips)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Arcane Abjuration",
        "description": "Action: a celestial, elemental, fey, or fiend within 30 feet makes a WIS save or is turned for 1 minute; from 5th level you can also banish it for 1 minute if its CR is low enough."
      },
      {
        "level": 6,
        "name": "Spell Breaker",
        "description": "When you heal an ally with a 1st-level or higher spell, you also end a spell of equal or lower level than the slot used on that creature."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS mod to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Arcane Mastery",
        "description": "You choose 4 wizard spells (6th, 7th, 8th, and 9th level) and add them to your domain spells, always prepared."
      }
    ]
  },
  {
    "id": "dominio_da_morte",
    "source": "dmg",
    "classId": "clerigo",
    "name": "Death",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Death Domain Spells",
        "description": "Starting at 1st level, you always have the Death Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "You gain proficiency with martial weapons."
      },
      {
        "level": 1,
        "name": "Reaper",
        "description": "You learn 1 necromancy cantrip from any list; a necromancy cantrip that targets 1 creature can target 2 creatures within 5 feet of each other."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Touch of Death",
        "description": "On a melee hit, channel vital force: deal +5 + 2 × your cleric level of necrotic damage."
      },
      {
        "level": 6,
        "name": "Inescapable Destruction",
        "description": "Necrotic damage from your spells and Channel Divinity options ignores resistance to necrotic."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra necrotic damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Improved Reaper",
        "description": "A 1st- to 5th-level necromancy spell that targets 1 creature can target 2 within 5 feet; you consume material components for each target."
      }
    ]
  },
  {
    "id": "dominio_da_forja",
    "source": "xge",
    "classId": "clerigo",
    "name": "Forge",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Forge Domain Spells",
        "description": "Starting at 1st level, you always have the Forge Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with heavy armor and smith's tools."
      },
      {
        "level": 1,
        "name": "Blessing of the Forge",
        "description": "At the end of a long rest, touch a nonmagical weapon or armor: +1 to AC (armor) or to attack and damage (weapon) until the end of your next long rest (1/long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Artisan's Blessing",
        "description": "A 1-hour ritual creates a nonmagical metal item worth up to 100 gp, consuming metal of equal value; the item forms in an unoccupied space within 5 feet."
      },
      {
        "level": 6,
        "name": "Soul of the Forge",
        "description": "You have resistance to fire damage and +1 to AC while wearing heavy armor."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra fire damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Saint of Forge and Fire",
        "description": "Immunity to fire damage and, while wearing heavy armor, resistance to bludgeoning, piercing, and slashing from nonmagical attacks."
      }
    ]
  },
  {
    "id": "dominio_do_sepulcro",
    "source": "xge",
    "classId": "clerigo",
    "name": "Grave",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Grave Domain Spells",
        "description": "Starting at 1st level, you always have the Grave Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Circle of Mortality",
        "description": "Healing a creature at 0 hit points uses the maximum value of each die; you learn Spare the Dying (30 feet, bonus action) outside your cantrip count."
      },
      {
        "level": 1,
        "name": "Eyes of the Grave",
        "description": "Action: until the end of your next turn, you locate undead within 60 feet even behind total cover (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Path to the Grave",
        "description": "Mark a creature within 30 feet until the end of your next turn; the first attack you or an ally makes against it deals vulnerability to that damage."
      },
      {
        "level": 6,
        "name": "Sentinel at Death's Door",
        "description": "Reaction: turn a critical hit against you or an ally within 30 feet into a normal hit (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS mod to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Keeper of Souls",
        "description": "When an enemy you can see dies within 30 feet, you or an ally regain hit points equal to the enemy's Hit Dice (until the start of your next turn)."
      }
    ]
  },
  {
    "id": "conhecimento",
    "source": "phb",
    "classId": "clerigo",
    "name": "Knowledge Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Blessings of Knowledge",
        "description": "2 skills of your choice (Arcana, History, Nature, or Religion) with expertise and 2 languages."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Knowledge of the Ages",
        "description": "You become temporarily proficient in any skill."
      },
      {
        "level": 6,
        "name": "Channel Divinity: Read Thoughts",
        "description": "You read the surface thoughts of a creature within 30 feet (WIS save, or you read only the surface)."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS modifier to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Visions of the Past",
        "description": "By holding an object or staying in a place, you have visions of its past."
      }
    ]
  },
  {
    "id": "vida",
    "source": "phb",
    "classId": "clerigo",
    "name": "Life Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "Proficiency with heavy armor."
      },
      {
        "level": 1,
        "name": "Disciple of Life",
        "description": "Healing spells of 1st level or higher restore 2 + the spell's level additional hit points."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Preserve Life",
        "description": "Heals 5 × your cleric level hit points divided among creatures within 30 feet (each up to half their maximum HP; doesn't affect undead)."
      },
      {
        "level": 6,
        "name": "Blessed Healer",
        "description": "Healing spells you cast on others also heal you for 2 + the spell's level hit points."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra radiant damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Supreme Healing",
        "description": "Healing spell dice use the highest possible value on each die."
      }
    ]
  },
  {
    "id": "luz",
    "source": "phb",
    "classId": "clerigo",
    "name": "Light Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Bonus Cantrip",
        "description": "You gain the Light cantrip if you don't already know it."
      },
      {
        "level": 1,
        "name": "Warding Flare",
        "description": "Reaction: a creature that attacks you has disadvantage on the attack (uses = WIS mod; 1/long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Radiance of the Dawn",
        "description": "Dispels magical darkness within 30 feet and deals radiant damage to nearby hostile creatures (DEX save)."
      },
      {
        "level": 6,
        "name": "Improved Flare",
        "description": "Warding Flare also protects creatures you can see within 30 feet."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS modifier to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Corona of Light",
        "description": "An aura of sunlight, 30 feet, for 1 minute."
      }
    ]
  },
  {
    "id": "natureza",
    "source": "phb",
    "classId": "clerigo",
    "name": "Nature Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Acolyte of Nature",
        "description": "You learn 1 cantrip from the druid spell list."
      },
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "Proficiency with heavy armor."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Charm Animals and Plants",
        "description": "Charms beasts and plants within 30 feet (WIS save; friendly or paralyzed)."
      },
      {
        "level": 6,
        "name": "Dampen Elements",
        "description": "Reaction: grant resistance to acid, cold, fire, lightning, or thunder to yourself or a creature within 30 feet."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra radiant damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Master of Nature",
        "description": "You can command animals and plant creatures."
      }
    ]
  },
  {
    "id": "dominio_da_ordem",
    "source": "ggr",
    "classId": "clerigo",
    "name": "Order",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Order Domain Spells",
        "description": "Starting at 1st level, you always have the Order Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with heavy armor and expertise in Intimidation or Persuasion (your choice)."
      },
      {
        "level": 1,
        "name": "Voice of Authority",
        "description": "When you cast a spell with a slot targeting an ally, it can use its reaction right after to make a weapon attack against a creature you can see."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Order's Demand",
        "description": "Action: creatures you choose within 30 feet that can see or hear you make a WIS save or are charmed until the end of your next turn (or until damaged); you can make them drop what they hold."
      },
      {
        "level": 6,
        "name": "Embodiment of the Law",
        "description": "An enchantment spell with a casting time of 1 action can be cast as a bonus action (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra psychic damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Order's Wrath",
        "description": "When you deal Divine Strike damage, mark the creature until the start of your next turn; the next ally to hit it deals +2d8 psychic and the mark ends."
      }
    ]
  },
  {
    "id": "dominio_da_paz",
    "source": "tce",
    "classId": "clerigo",
    "name": "Peace",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Peace Domain Spells",
        "description": "Starting at 1st level, you always have the Peace Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Implement of Peace",
        "description": "You gain proficiency in Insight, Performance, or Persuasion (your choice)."
      },
      {
        "level": 1,
        "name": "Emboldening Bond",
        "description": "Action: up to prof. creatures within 30 feet are bonded for 10 minutes; among themselves they add 1d4 to attacks, checks, and saves, once per turn (uses = prof.)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Balm of Peace",
        "description": "Move up to your speed without provoking attacks of opportunity; each creature within 5 feet of your path heals 2d6 + WIS hit points (once each)."
      },
      {
        "level": 6,
        "name": "Protective Bond",
        "description": "When a bonded creature is about to take damage, another bonded creature within 30 feet teleports to within 5 feet of it as a reaction and takes the damage."
      },
      {
        "level": 8,
        "name": "Potent Spellcasting",
        "description": "You add your WIS mod to the damage of your cleric cantrips."
      },
      {
        "level": 17,
        "name": "Expansive Bond",
        "description": "Emboldening Bond and Protective Bond work at 60 feet; the creature that takes damage for Protective Bond has resistance to it."
      }
    ]
  },
  {
    "id": "dominio_da_solidariedade",
    "source": "psa",
    "classId": "clerigo",
    "name": "Solidarity",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Solidarity Domain Spells",
        "description": "Starting at 1st level, you always have the Solidarity Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "You gain proficiency with heavy armor."
      },
      {
        "level": 1,
        "name": "Solidarity's Action",
        "description": "When you use the Help action to aid an ally's attack, you can make a weapon attack as a bonus action (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Preserve Life",
        "description": "Heals 5 × your cleric level hit points divided among creatures within 30 feet (each up to half their maximum; not undead or constructs)."
      },
      {
        "level": 6,
        "name": "Channel Divinity: Oketra's Blessing",
        "description": "Reaction: grant +10 to the attack roll of a creature within 30 feet."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra damage of the same type as your weapon on attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Supreme Healing",
        "description": "Healing spell dice use the highest possible value on each die."
      }
    ]
  },
  {
    "id": "dominio_da_forca",
    "source": "psa",
    "classId": "clerigo",
    "name": "Strength",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Strength Domain Spells",
        "description": "Starting at 1st level, you always have the Strength Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "You gain proficiency with heavy armor."
      },
      {
        "level": 1,
        "name": "Acolyte of Strength",
        "description": "You learn 1 cantrip from the druid spell list and choose proficiency in Animal Handling, Athletics, Nature, or Survival."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Feat of Strength",
        "description": "When you make an attack, check, or saving throw using Strength, add +10 to the roll."
      },
      {
        "level": 6,
        "name": "Channel Divinity: Rhonas' Blessing",
        "description": "Reaction: grant +10 to a Strength attack, check, or saving throw of a creature within 30 feet."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra damage of the same type as your weapon on attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Avatar of Battle",
        "description": "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
      }
    ]
  },
  {
    "id": "tempestade",
    "source": "phb",
    "classId": "clerigo",
    "name": "Tempest Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Proficiencies",
        "description": "Martial weapons and heavy armor."
      },
      {
        "level": 1,
        "name": "Wrath of the Storm",
        "description": "Reaction: a creature within 5 feet that attacks you makes a DEX save and takes 2d8 lightning or thunder damage (half on a success; uses = WIS mod)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Destructive Wrath",
        "description": "You guarantee the maximum value on a lightning or thunder damage roll."
      },
      {
        "level": 6,
        "name": "Thunderous Strike",
        "description": "When you deal lightning damage to a Large or smaller creature, you push it up to 10 feet."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra radiant damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Storm Born",
        "description": "Your flying speed equals your walking speed when you are outdoors."
      }
    ]
  },
  {
    "id": "trapaça",
    "source": "phb",
    "classId": "clerigo",
    "name": "Trickery Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Blessing of the Trickster",
        "description": "Action: touch a willing creature to give it advantage on Stealth (1 hour)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Invoke Duplicity",
        "description": "You create a perfect illusion of yourself for 1 minute; you can cast spells as if you were in the duplicate."
      },
      {
        "level": 6,
        "name": "Channel Divinity: Cloak of Shadows",
        "description": "You fade from sight; creatures have disadvantage on attacks against you until your next turn."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra poison damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Improved Duplicity",
        "description": "You can create up to 4 duplicates with Invoke Duplicity."
      }
    ]
  },
  {
    "id": "dominio_do_crepusculo",
    "source": "tce",
    "classId": "clerigo",
    "name": "Twilight",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Twilight Domain Spells",
        "description": "Starting at 1st level, you always have the Twilight Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with martial weapons and heavy armor."
      },
      {
        "level": 1,
        "name": "Eyes of Night",
        "description": "Darkvision out to 300 feet; action: share it for 1 hour with up to WIS mod creatures within 10 feet (1/long rest or a spell slot)."
      },
      {
        "level": 1,
        "name": "Vigilant Blessing",
        "description": "Action: a creature you touch, including you, has advantage on its next initiative roll."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Twilight Sanctuary",
        "description": "A 30-foot sphere of dim light for 1 minute; a creature that ends its turn in it gains 1d6 + your cleric level temporary hit points or ends charmed or frightened."
      },
      {
        "level": 6,
        "name": "Steps of Night",
        "description": "Bonus action in dim light or darkness: flying speed equal to your walking speed for 1 minute (uses = prof.; regained on a long rest)."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra radiant damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Twilight Shroud",
        "description": "You and your allies have half cover inside the sphere created by Twilight Sanctuary."
      }
    ]
  },
  {
    "id": "guerra",
    "source": "phb",
    "classId": "clerigo",
    "name": "War Domain",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Bonus Proficiency",
        "description": "Martial weapons and heavy armor."
      },
      {
        "level": 1,
        "name": "War Priest",
        "description": "After you take the Attack action, you can attack again with a weapon as a bonus action (uses = WIS mod; minimum 1)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Guided Strike",
        "description": "You add your proficiency bonus to one attack."
      },
      {
        "level": 6,
        "name": "Channel Divinity: War God's Blessing",
        "description": "Reaction: grant +10 to the attack of a creature within 30 feet."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra radiant damage on weapon attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Avatar of Battle",
        "description": "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
      }
    ]
  },
  {
    "id": "dominio_do_zelo",
    "source": "psa",
    "classId": "clerigo",
    "name": "Zeal",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Zeal Domain Spells",
        "description": "Starting at 1st level, you always have the Zeal Domain spells prepared for your cleric level; they don't count against your prepared spells."
      },
      {
        "level": 1,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with martial weapons and heavy armor."
      },
      {
        "level": 1,
        "name": "Priest of Zeal",
        "description": "When you take the Attack action, you can make an extra weapon attack as a bonus action (uses = WIS mod; regained on a long rest)."
      },
      {
        "level": 2,
        "name": "Channel Divinity: Consuming Fervor",
        "description": "When you roll fire or thunder damage, use your Channel Divinity to deal the maximum value instead of rolling the dice."
      },
      {
        "level": 6,
        "name": "Resounding Strike",
        "description": "When you deal thunder damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
      },
      {
        "level": 8,
        "name": "Divine Strike",
        "description": "1d8 extra damage of the same type as your weapon on attacks, once per turn (2d8 at 14th level)."
      },
      {
        "level": 17,
        "name": "Blaze of Glory",
        "description": "When an attacker you see reduces you to 0 hit points, reaction: move to it and attack with advantage; a hit deals +5d10 fire and +5d10 of the weapon's type."
      }
    ]
  },
  {
    "id": "circulo_dos_sonhos",
    "source": "xge",
    "classId": "druida",
    "name": "Dreams",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Balm of the Summer Court",
        "description": "Bonus action: spend d6s from a pool equal to your druid level to heal an ally within 120 feet; they regain the total plus 1 temporary hit point per die (restored on a long rest)."
      },
      {
        "level": 6,
        "name": "Hearth of Moonlight and Shadow",
        "description": "When a rest starts, create an invisible 30-foot sphere: you and allies gain +5 to Stealth and Perception and flames don't shine outside it; it ends when the rest does or you leave."
      },
      {
        "level": 10,
        "name": "Hidden Paths",
        "description": "Bonus action: teleport 60 feet; or action: teleport a creature you touch 30 feet. Uses = WIS mod (minimum 1), all regained on a long rest."
      },
      {
        "level": 14,
        "name": "Walker in Dreams",
        "description": "After a short rest, cast Dream, Scrying, or Teleportation Circle without a slot (this one opens at your last long rest's location); 1/long rest."
      }
    ]
  },
  {
    "id": "terra",
    "source": "phb",
    "classId": "druida",
    "name": "Circle of the Land",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Bonus Cantrip",
        "description": "You learn 1 more druid cantrip of your choice."
      },
      {
        "level": 2,
        "name": "Natural Recovery",
        "description": "During a short rest, you recover spell slots (up to half your druid level, no 6th-level or higher slots); 1/long rest."
      },
      {
        "level": 3,
        "name": "Circle Spells",
        "description": "Choose a terrain (arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark) and always prepare the spells tied to it."
      },
      {
        "level": 6,
        "name": "Land's Stride",
        "description": "Nonmagical difficult terrain doesn't cost extra speed; advantage on checks to survive outdoors."
      },
      {
        "level": 10,
        "name": "Nature's Protection",
        "description": "Immune to being charmed or frightened by elementals and fey; immune to poison and disease."
      },
      {
        "level": 14,
        "name": "Nature's Sanctuary",
        "description": "Creatures of nature hesitate to attack you (WIS save, or it does not attack)."
      }
    ]
  },
  {
    "id": "lua",
    "source": "phb",
    "classId": "druida",
    "name": "Circle of the Moon",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Combat Wild Shape",
        "description": "You transform as a bonus action and can spend a slot to regain hit points when you change form."
      },
      {
        "level": 2,
        "name": "Circle Forms",
        "description": "You can take the forms of more dangerous beasts (CR limit doubled)."
      },
      {
        "level": 6,
        "name": "Primal Strike",
        "description": "Attacks in beast form count as magical to overcome resistance to nonmagical damage."
      },
      {
        "level": 10,
        "name": "Elemental Wild Shape",
        "description": "You spend 2 uses of Wild Shape to transform into an air, earth, fire, or water elemental."
      },
      {
        "level": 14,
        "name": "Thousand Forms",
        "description": "You can cast Polymorph without a material component."
      }
    ]
  },
  {
    "id": "circulo_do_pastor",
    "source": "xge",
    "classId": "druida",
    "name": "Shepherd",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Speech of the Woods",
        "description": "You learn to read, speak, and write Sylvan; beasts understand your words and you comprehend their noises and gestures."
      },
      {
        "level": 2,
        "name": "Spirit Totem",
        "description": "Bonus action: summon a spirit (bear, hawk, or unicorn) within 60 feet with a 30-foot aura for 1 minute; move it with a bonus action (1/short or long rest)."
      },
      {
        "level": 6,
        "name": "Mighty Summoner",
        "description": "Beasts and fey you summon with a spell have +2 hit points per Hit Die and deal magic damage with their natural weapon attacks."
      },
      {
        "level": 10,
        "name": "Guardian Spirit",
        "description": "A beast or fey you summoned that ends its turn in the Spirit Totem's aura regains hit points equal to half your druid level."
      },
      {
        "level": 14,
        "name": "Faithful Summons",
        "description": "When you drop to 0 hit points or are incapacitated, gain Animal Shapes with a 9th-level slot (4 beasts of CR ≤ 2 within 20 feet, 1 hour, no concentration; 1/long rest)."
      }
    ]
  },
  {
    "id": "circulo_dos_esporos",
    "source": "ggr",
    "classId": "druida",
    "name": "Spores",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Circle Spells",
        "description": "You learn the Chill Touch cantrip and, at 3rd, 5th, 7th, and 9th level, the circle spells, always prepared without counting against your limit."
      },
      {
        "level": 2,
        "name": "Halo of Spores",
        "description": "Reaction: a creature that enters or starts its turn within 10 feet takes 1d4 necrotic (CON save vs your spell DC); 1d6 at 6th, 1d8 at 10th, and 1d10 at 14th level."
      },
      {
        "level": 2,
        "name": "Symbiotic Entity",
        "description": "Action: spend 1 use of Wild Shape to gain 4 temporary hit points per druid level; for 10 minutes the Halo's damage doubles and melee strikes add 1d6 necrotic."
      },
      {
        "level": 6,
        "name": "Fungal Infestation",
        "description": "Reaction: animate the corpse of a Small or Medium beast or humanoid that dies within 10 feet (zombie with 1 HP, 1 hour); uses = WIS mod (minimum 1), long rest."
      },
      {
        "level": 10,
        "name": "Spreading Spores",
        "description": "Bonus action while Symbiotic Entity is active: hurl spores 30 feet into a 10-foot cube for 1 minute; entering or starting a turn there deals the Halo's damage (1/turn)."
      },
      {
        "level": 14,
        "name": "Fungal Body",
        "description": "You can't be blinded, deafened, frightened, or poisoned, and critical hits against you count as normal hits unless you are incapacitated."
      }
    ]
  },
  {
    "id": "circulo_das_estrelas",
    "source": "tce",
    "classId": "druida",
    "name": "Stars",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Star Map",
        "description": "A star map (spellcasting focus): you know Guidance, have Guiding Bolt prepared, and cast it without a slot a number of times equal to your proficiency bonus (long rest)."
      },
      {
        "level": 2,
        "name": "Starry Form",
        "description": "Bonus action: spend 1 use of Wild Shape for 10 minutes — Archer (1d8 + WIS radiant), Chalice (heals 1d8 + WIS), or Dragon (rolls of 9 or less become 10)."
      },
      {
        "level": 6,
        "name": "Cosmic Omen",
        "description": "After a long rest, roll a die: if even, reaction adds 1d6 to a roll of a creature within 30 feet; if odd, subtracts (uses = proficiency bonus)."
      },
      {
        "level": 10,
        "name": "Twinkling Constellations",
        "description": "Archer damage and Chalice healing become 2d8; with the Dragon active you gain a 20-foot flying speed and hover; you can switch constellations at the start of your turn."
      },
      {
        "level": 14,
        "name": "Full of Stars",
        "description": "While in Starry Form, you become partially ethereal: resistance to bludgeoning, piercing, and slashing damage."
      }
    ]
  },
  {
    "id": "circulo_do_fogo_selvagem",
    "source": "tce",
    "classId": "druida",
    "name": "Wildfire",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Circle Spells",
        "description": "You gain the circle spells (Burning Hands, Cure Wounds, etc.) at the levels shown, always prepared without counting against your limit."
      },
      {
        "level": 2,
        "name": "Summon Wildfire Spirit",
        "description": "Action: spend 1 use of Wild Shape to summon the spirit within 30 feet (creatures within 10 feet make a DEX save or take 2d6 fire); it lasts 1 hour and acts after you."
      },
      {
        "level": 6,
        "name": "Enhanced Bond",
        "description": "While the spirit is summoned, fire or healing spells add 1d8 to one roll, and range spells can originate from you or the spirit."
      },
      {
        "level": 10,
        "name": "Cauterizing Flames",
        "description": "Reaction: when a Small or larger creature dies within 30 feet, create a spectral flame for 1 minute that heals or harms for 2d10 + WIS (uses = proficiency bonus)."
      },
      {
        "level": 14,
        "name": "Blazing Revival",
        "description": "When you drop to 0 hit points with the spirit within 120 feet, drop it to 0 hit points, regain half your hit points, and stand up (1/long rest)."
      }
    ]
  },
  {
    "id": "arquetipo_do_arqueiro_arcano",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Arcane Archer",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Arcane Archer Lore",
        "description": "Proficiency in Arcana or Nature and a choice between the Prestidigitation or Druidcraft cantrip."
      },
      {
        "level": 3,
        "name": "Arcane Shot",
        "description": "You learn 2 Arcane Shot options and apply 1 per turn to an arrow (2 uses, short or long rest); gain +1 option at 7th, 10th, 15th, and 18th level."
      },
      {
        "level": 7,
        "name": "Magic Arrow",
        "description": "Nonmagical arrows fired from a shortbow or longbow count as magical to overcome resistance and immunity to nonmagical damage."
      },
      {
        "level": 7,
        "name": "Curving Shot",
        "description": "When you miss with a magic arrow, bonus action: reroll it against another target within 60 feet of the original."
      },
      {
        "level": 15,
        "name": "Ever-Ready Shot",
        "description": "When you roll initiative with no Arcane Shot uses remaining, you regain 1 use."
      }
    ]
  },
  {
    "id": "arquetipo_do_estandarte",
    "source": "scag",
    "classId": "guerreiro",
    "name": "Banneret",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Rallying Cry",
        "description": "When you use Second Wind, up to 3 allied creatures within 60 feet regain hit points equal to your fighter level, if they can see or hear you."
      },
      {
        "level": 7,
        "name": "Royal Envoy",
        "description": "You gain proficiency in Persuasion (or another skill of your choice if you already have it), and your proficiency bonus is doubled for Persuasion checks."
      },
      {
        "level": 10,
        "name": "Inspiring Surge",
        "description": "When you use Action Surge, choose 1 ally within 60 feet that can make a weapon attack with its reaction (2 allies from 18th level)."
      },
      {
        "level": 15,
        "name": "Bulwark",
        "description": "When you use Indomitable to reroll a failed INT, WIS, or CHA save, extend the new roll to an ally within 60 feet that also failed (if it can see or hear you)."
      }
    ]
  },
  {
    "id": "mestre_de_armas",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Battle Master",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Combat Superiority",
        "description": "You learn 3 maneuvers and use superiority dice (d8) to fuel them; 4 dice at 7th, 5 at 10th, and 6 at 15th level."
      },
      {
        "level": 3,
        "name": "Student of War",
        "description": "You gain proficiency with one type of artisan's tools of your choice."
      },
      {
        "level": 7,
        "name": "Know Your Enemy",
        "description": "After at least 1 minute observing or interacting with a creature outside combat, you learn how it compares to you (STR, DEX, CON, AC, HP, attack bonus, and saving throws)."
      },
      {
        "level": 10,
        "name": "Improved Combat Superiority",
        "description": "Your superiority dice become d10 (d12 at 18th level)."
      },
      {
        "level": 15,
        "name": "Relentless",
        "description": "When you roll initiative with no superiority dice remaining, you regain 1 superiority die."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Cavalier",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiency",
        "description": "Choose expertise in Animal Handling, History, Insight, Performance, or Persuasion, or learn 1 language."
      },
      {
        "level": 3,
        "name": "Born to the Saddle",
        "description": "Advantage on saves against falling off your mount; falling 10 feet or less lands you on your feet; mounting or dismounting costs 5 feet of movement."
      },
      {
        "level": 3,
        "name": "Unwavering Mark",
        "description": "Mark a creature you hit in melee: within 5 feet of you it has disadvantage against others; if it wounds others, bonus action: attack with advantage, damage = half your level (uses = STR mod)."
      },
      {
        "level": 7,
        "name": "Warding Maneuver",
        "description": "Reaction: roll 1d8 and add it to the AC of you or a creature within 5 feet; if it still hits, the target has resistance (uses = CON mod, minimum 1)."
      },
      {
        "level": 10,
        "name": "Hold the Line",
        "description": "Creatures provoke your opportunity attack when they move 5 feet or more within your reach; on a hit, their speed drops to 0 until the end of the turn."
      },
      {
        "level": 15,
        "name": "Ferocious Charger",
        "description": "After moving 10 feet in a straight line and hitting, the target makes a STR save (DC 8 + STR + prof.) or falls; 1/turn."
      },
      {
        "level": 18,
        "name": "Vigilant Defender",
        "description": "In combat, you gain an extra reaction each turn from each creature (except on your turn), used only for opportunity attacks."
      }
    ]
  },
  {
    "id": "campeao",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Champion",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Improved Critical",
        "description": "Weapon attacks score a critical hit on a roll of 19 or 20."
      },
      {
        "level": 7,
        "name": "Remarkable Athlete",
        "description": "Half your proficiency bonus (rounded up) on STR, DEX, or CON checks you aren't proficient in; advantage on jumps."
      },
      {
        "level": 10,
        "name": "Additional Fighting Style",
        "description": "You choose a second option from the Fighting Style feature."
      },
      {
        "level": 15,
        "name": "Superior Critical",
        "description": "Weapon attacks score a critical hit on a roll of 18, 19, or 20."
      },
      {
        "level": 18,
        "name": "Survivor",
        "description": "At the start of your turn, with half your hit points or fewer, you regain 5 + CON mod hit points; advantage on death saving throws in that condition; immune to disease."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro_eco",
    "source": "egw",
    "classId": "guerreiro",
    "name": "Echo Knight",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Manifest Echo",
        "description": "Bonus action: create a translucent echo 15 feet away (AC 14 + prof., 1 HP); move it without an action, swap places with it (15 feet of movement), and attack from its position."
      },
      {
        "level": 3,
        "name": "Unleash Incarnation",
        "description": "When you take the Attack action, make 1 extra melee strike from the echo (uses = CON mod, minimum 1; long rest)."
      },
      {
        "level": 7,
        "name": "Echo Avatar",
        "description": "Action: see and hear through the echo for up to 10 minutes, becoming blind and deaf; the echo can be up to 1,000 feet away without being destroyed."
      },
      {
        "level": 10,
        "name": "Shadow Martyr",
        "description": "Reaction: move the echo to within 5 feet of a threatened target so the attack that triggered it targets the echo instead (1/short or long rest)."
      },
      {
        "level": 15,
        "name": "Reclaim Potential",
        "description": "When the echo is destroyed by damage, you gain 2d6 + CON temporary hit points (uses = CON mod, minimum 1; long rest)."
      },
      {
        "level": 18,
        "name": "Legion of One",
        "description": "Bonus action: create 2 echoes that coexist (a third destroys the previous ones); when you roll initiative with no Unleash Incarnation uses, regain 1."
      }
    ]
  },
  {
    "id": "cavaleiro_arcano",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Eldritch Knight",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Spellcasting",
        "description": "You learn 2 cantrips from the wizard list and wizard spells with slots according to the table (INT as the spellcasting ability)."
      },
      {
        "level": 3,
        "name": "Arcane Bond",
        "description": "A 1-hour ritual: bond a weapon; you can summon it to your hand or to the floor as a bonus action and it can't be disarmed by force."
      },
      {
        "level": 7,
        "name": "War Magic",
        "description": "When you cast a cantrip with your action, you can attack with a weapon as a bonus action."
      },
      {
        "level": 10,
        "name": "Arcane Strike",
        "description": "A creature hit by your weapon has disadvantage on its next saving throw against a spell you cast against it."
      },
      {
        "level": 15,
        "name": "Arcane Charge",
        "description": "When you use Action Surge, you can teleport up to 30 feet to an unoccupied space you can see, before or after the extra action."
      },
      {
        "level": 18,
        "name": "Improved War Magic",
        "description": "When you cast any spell with your action, you can attack with a weapon as a bonus action."
      }
    ]
  },
  {
    "id": "arquetipo_do_guerreiro_psiquico",
    "source": "tce",
    "classId": "guerreiro",
    "name": "Psi Warrior",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Psionic Power",
        "description": "Psionic Energy dice (d6, 2 × prof. of them; d8 at 5th, d10 at 11th, d12 at 17th) fuel Protective Field, Psionic Strike, and Telekinetic Movement."
      },
      {
        "level": 7,
        "name": "Telekinetic Adept",
        "description": "Boosted Jump: bonus action with flying speed = 2 × your speed until the end of the turn; Telekinetic Shove: STR save or fall or be moved 10 feet."
      },
      {
        "level": 10,
        "name": "Guarded Mind",
        "description": "You have resistance to psychic damage; if you start your turn charmed or frightened, spend 1 Psionic Energy die to end the effect."
      },
      {
        "level": 15,
        "name": "Bulwark of Force",
        "description": "Bonus action: up to INT mod creatures you can see within 30 feet (including you) have half cover for 1 minute."
      },
      {
        "level": 18,
        "name": "Telekinetic Master",
        "description": "Cast Telekinesis without components (INT); each turn during the concentration you can make 1 weapon attack as a bonus action."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro_runico",
    "source": "tce",
    "classId": "guerreiro",
    "name": "Rune Knight",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with smith's tools and learn to speak, read, and write Giant."
      },
      {
        "level": 3,
        "name": "Rune Carver",
        "description": "You learn 2 runes (3 at 7th, 4 at 10th, 5 at 15th level) and inscribe them on objects after each long rest; a rune's DC = 8 + CON + prof."
      },
      {
        "level": 3,
        "name": "Giant's Might",
        "description": "Bonus action, 1 minute: become Large (if smaller), gain advantage on STR checks and saves, and add +1d6 damage (uses = proficiency bonus)."
      },
      {
        "level": 7,
        "name": "Runic Shield",
        "description": "Reaction: force the attacker to reroll the d20 when it hits a creature you can see within 60 feet (uses = proficiency bonus)."
      },
      {
        "level": 10,
        "name": "Great Stature",
        "description": "You grow 3d4 inches and the extra damage from Giant's Might becomes 1d8."
      },
      {
        "level": 15,
        "name": "Master of Runes",
        "description": "You can invoke each rune you know twice, regaining the uses after a short or long rest."
      },
      {
        "level": 18,
        "name": "Runic Juggernaut",
        "description": "The extra damage from Giant's Might becomes 1d10, and the transformation can make you Gargantuan with 5 feet of extra reach."
      }
    ]
  },
  {
    "id": "arquetipo_do_samurai",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Samurai",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiency",
        "description": "Choose expertise in History, Insight, Performance, or Persuasion, or learn 1 language."
      },
      {
        "level": 3,
        "name": "Fighting Spirit",
        "description": "Bonus action: advantage on all weapon attacks and 5 temporary hit points (10 at 10th, 15 at 15th level) until the end of the turn; 3 uses, long rest."
      },
      {
        "level": 7,
        "name": "Elegant Courtier",
        "description": "Add your WIS mod to Persuasion checks and gain proficiency in WIS saves (or INT or CHA saves if you already have them)."
      },
      {
        "level": 10,
        "name": "Tireless Spirit",
        "description": "When you roll initiative with no Fighting Spirit uses remaining, you regain 1 use."
      },
      {
        "level": 15,
        "name": "Rapid Strike",
        "description": "If you attack with advantage, you can forgo it to make 1 extra weapon attack against the same target; 1/turn."
      },
      {
        "level": 18,
        "name": "Strength Before Death",
        "description": "When damage reduces you to 0 hit points, reaction: delay falling unconscious and take an extra turn immediately (1/long rest)."
      }
    ]
  },
  {
    "id": "tradicao_do_dragao_ascendente",
    "source": "ftd",
    "classId": "monge",
    "name": "Ascendant Dragon",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Draconic Disciple",
        "description": "Reaction: reroll a failed CHA check (1/long rest); unarmed strikes can deal acid, cold, fire, lightning, or poison damage; you learn Draconic."
      },
      {
        "level": 3,
        "name": "Breath of the Dragon",
        "description": "Instead of an attack, exhale a 20-foot cone or 30-foot line (DEX save, 2× your Martial Arts die); uses = proficiency bonus or 2 ki; damage triples at 11th level."
      },
      {
        "level": 6,
        "name": "Wings Unfurled",
        "description": "When you use Step of the Wind, you sprout spectral wings and fly at your walking speed until the end of the turn; uses = proficiency bonus."
      },
      {
        "level": 11,
        "name": "Aspect of the Wyrm",
        "description": "Bonus action: 10-foot draconic aura for 1 minute — Menacing Presence (WIS save or frightened) or resistance to one damage type; 1/long rest or 3 ki."
      },
      {
        "level": 17,
        "name": "Ascendant Aspect",
        "description": "Breath costs 1 ki: 60-foot cone or 90-foot line (4× your Martial Arts die) and blindsight 10 feet; with Aspect of the Wyrm, creatures in the aura make a DEX save or take 3d10."
      }
    ]
  },
  {
    "id": "tradicao_do_ser_astral",
    "source": "tce",
    "classId": "monge",
    "name": "Astral Self",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Arms of the Astral Self",
        "description": "Bonus action (1 ki): spectral arms for 10 minutes — use WIS instead of STR and +5 feet of reach; when they appear, creatures within 10 feet (DEX save) take 2 rolls of your Martial Arts die of force."
      },
      {
        "level": 6,
        "name": "Visage of the Astral Self",
        "description": "Bonus action (1 ki): visage for 10 minutes — darkvision 120 feet, advantage on Insight and Intimidation, and you can direct your voice to a creature within 60 feet or all within 600 feet."
      },
      {
        "level": 11,
        "name": "Body of the Astral Self",
        "description": "With both arms and visage, the spectral body appears with no action: Deflect Energy (reaction, −1d10+WIS) and unarmed strikes add your Martial Arts die."
      },
      {
        "level": 17,
        "name": "Awakened Astral Self",
        "description": "Bonus action (5 ki): manifest arms, visage, and body for 10 minutes — +2 to AC and Extra Attack becomes 3 strikes with the spectral arms."
      }
    ]
  },
  {
    "id": "tradicao_do_mestre_bebado",
    "source": "xge",
    "classId": "monge",
    "name": "Drunken Master",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiencies",
        "description": "Proficiency in Performance (if you don't already have it) and brewer's supplies."
      },
      {
        "level": 3,
        "name": "Drunken Technique",
        "description": "When you use Flurry of Blows, you gain the benefit of the Disengage action and 10 feet of movement until the end of the turn."
      },
      {
        "level": 6,
        "name": "Tipsy Sway",
        "description": "Standing up from prone costs 5 feet of movement; reaction (1 ki): redirect an attack that missed you to a creature within 5 feet that you can see."
      },
      {
        "level": 11,
        "name": "Drunkard's Luck",
        "description": "When you roll with disadvantage on an attack, check, or save, spend 2 ki to cancel the disadvantage."
      },
      {
        "level": 17,
        "name": "Intoxicated Frenzy",
        "description": "Flurry of Blows can make up to 3 extra strikes (5 total), as long as each strike targets a different creature."
      }
    ]
  },
  {
    "id": "quatro_elementos",
    "source": "phb",
    "classId": "monge",
    "name": "Way of the Four Elements",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Disciple of the Elements",
        "description": "You learn Elemental Attunement and one elemental discipline; each discipline is fueled by ki points."
      },
      {
        "level": 6,
        "name": "Elemental Disciplines (6th)",
        "description": "You learn one more elemental discipline (you can swap one you know); from 5th monk level you spend extra ki to cast disciplines at higher levels."
      },
      {
        "level": 11,
        "name": "Elemental Disciplines (11th)",
        "description": "You learn one more elemental discipline of your choice."
      },
      {
        "level": 17,
        "name": "Elemental Disciplines (17th)",
        "description": "You learn the last elemental discipline you have access to."
      }
    ]
  },
  {
    "id": "tradicao_do_kensei",
    "source": "xge",
    "classId": "monge",
    "name": "Kensei",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Path of the Kensei",
        "description": "Choose 1 melee and 1 ranged kensei weapon (proficiency; add another weapon type at 6th, 11th, and 17th); +2 to AC when you hit with an unarmed strike and +1d4 to ranged attacks (bonus action)."
      },
      {
        "level": 6,
        "name": "One with the Blade",
        "description": "Kensei weapons count as magical to overcome resistance; Ki-Fueled Strike: spend 1 ki when you hit to add your Martial Arts die to the damage (1/turn)."
      },
      {
        "level": 11,
        "name": "Sharpen the Blade",
        "description": "Bonus action: spend up to 3 ki and add that amount to attack and damage rolls with a kensei weapon for 1 minute."
      },
      {
        "level": 17,
        "name": "Unerring Precision",
        "description": "When you miss with a monk weapon attack, you can reroll the attack roll; 1/turn."
      }
    ]
  },
  {
    "id": "tradicao_da_morte_longa",
    "source": "scag",
    "classId": "monge",
    "name": "Long Death",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Touch of Death",
        "description": "When you reduce a creature within 5 feet to 0 hit points, you gain temporary hit points equal to your WIS modifier + your monk level."
      },
      {
        "level": 6,
        "name": "Hour of Reaping",
        "description": "Action: creatures that can see you within 30 feet make a WIS save or are frightened until the end of your next turn."
      },
      {
        "level": 11,
        "name": "Mastery of Death",
        "description": "When you drop to 0 hit points, spend 1 ki (no action) to remain at 1 hit point."
      },
      {
        "level": 17,
        "name": "Touch of the Long Death",
        "description": "Action: touch a creature within 5 feet, spending 1 to 10 ki — 2d10 necrotic per ki spent (CON save, half on a success)."
      }
    ]
  },
  {
    "id": "tradicao_da_misericordia",
    "source": "tce",
    "classId": "monge",
    "name": "Mercy",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Instruments of Mercy",
        "description": "Proficiency in Insight, Medicine, and a herbalism kit; you gain a special mask tied to your techniques."
      },
      {
        "level": 3,
        "name": "Hands of Healing",
        "description": "Action (1 ki): touch a creature and heal your Martial Arts die + your WIS modifier; you can replace one Flurry of Blows strike without spending ki."
      },
      {
        "level": 3,
        "name": "Hands of Harm",
        "description": "Unarmed strike (1 ki): deals extra necrotic damage equal to your Martial Arts die + your WIS modifier; 1/turn."
      },
      {
        "level": 6,
        "name": "Physician's Touch",
        "description": "Hands of Healing also removes disease, blindness, deafness, paralysis, poison, or stunned; Hands of Harm imposes poisoned until the end of your next turn."
      },
      {
        "level": 11,
        "name": "Flurry of Healing and Harm",
        "description": "When you use Flurry of Blows, each strike can become Hands of Healing without ki, and Hands of Harm can be used without ki (still 1/turn)."
      },
      {
        "level": 17,
        "name": "Hand of Ultimate Mercy",
        "description": "Action: touch a corpse dead up to 24 hours and spend 5 ki to revive it with 4d10 + WIS hit points, ending blindness, deafness, paralysis, poison, and stunned; 1/long rest."
      }
    ]
  },
  {
    "id": "mao_aberta",
    "source": "phb",
    "classId": "monge",
    "name": "Way of the Open Hand",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Open Hand Technique",
        "description": "When you hit with a strike from Flurry of Blows, you impose an effect: push 10 feet, knock prone, disarm, or prevent the target from using reactions."
      },
      {
        "level": 6,
        "name": "Wholeness of Body",
        "description": "Action: regain hit points equal to 3 times your monk level (1/long rest)."
      },
      {
        "level": 11,
        "name": "Tranquility",
        "description": "At the end of a long rest, you are under the effects of Sanctuary until your next long rest."
      },
      {
        "level": 17,
        "name": "Quivering Palm",
        "description": "With an unarmed strike, spend 3 ki to create imperceptible vibrations (they last days equal to your monk level); activation: the target makes a CON save or drops to 0 hit points (on a success it takes 3d10 damage)."
      }
    ]
  },
  {
    "id": "sombra",
    "source": "phb",
    "classId": "monge",
    "name": "Way of the Shadow",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Shadow Arts",
        "description": "Spend 2 ki to cast Darkness, Darkvision, Pass without Trace, or Silence (without material components); you learn the Minor Illusion cantrip."
      },
      {
        "level": 6,
        "name": "Shadow Step",
        "description": "In dim light or darkness, bonus action: teleport 60 feet to a shadowed space you can see and gain advantage on your next melee attack until the end of the turn."
      },
      {
        "level": 11,
        "name": "Cloak of Shadows",
        "description": "In dim light or darkness, action: become invisible until you attack, cast a spell, or enter an area of bright light."
      },
      {
        "level": 17,
        "name": "Opportunist",
        "description": "Reaction: when a creature within 5 feet of you is hit by another creature's attack, you can attack it with a melee weapon."
      }
    ]
  },
  {
    "id": "tradicao_da_alma_solar",
    "source": "scag",
    "classId": "monge",
    "name": "Sun Soul",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Radiant Sun Bolt",
        "description": "New ranged attack (30 feet, a d4 that scales with your Martial Arts die, adds your DEX modifier); with 1 ki, make 2 as a bonus action; it works with Extra Attack."
      },
      {
        "level": 6,
        "name": "Searing Arc Strike",
        "description": "After the Attack action, spend 2 ki to cast Burning Hands as a bonus action; extra ki raise the spell level (maximum = half your monk level)."
      },
      {
        "level": 11,
        "name": "Searing Sunburst",
        "description": "Action: an orb at 150 feet explodes in a 20-foot sphere — 2d6 radiant (CON save, half on a success); each extra ki, up to 3, adds 2d6."
      },
      {
        "level": 17,
        "name": "Sun Shield",
        "description": "30-foot aura of light (plus 30 feet of dim light); reaction: a creature that hits you in melee takes 5 + your WIS modifier radiant damage."
      }
    ]
  },
  {
    "id": "ancestrais",
    "source": "phb",
    "classId": "paladino",
    "name": "Oath of the Ancients",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Ancients Tenets",
        "description": "Protect life, nourish joy, and honor beauty: the good above any law."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells based on your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Nature's Wrath and Turn the Faithless",
        "description": "Action: thorny vines bind a target within 30 feet (DEX save, or restrained); or fey and demons within 30 feet that fail a WIS save are frightened for 1 minute."
      },
      {
        "level": 7,
        "name": "Aura of Protection",
        "description": "You and allies within 10 feet have resistance to damage caused by spells (radius increases to 30 feet at 18th level)."
      },
      {
        "level": 15,
        "name": "Undying Sentinel",
        "description": "When you drop to 0 hit points without being killed outright, you can return to 1 hit point (1/long rest); you have advantage against undead."
      },
      {
        "level": 20,
        "name": "Ancient Champion",
        "description": "Action: for 1 minute you assume the form of a force of nature: speed +10 feet, advantage on melee attacks, and you can cast a spell using the action (1/long rest)."
      }
    ]
  },
  {
    "id": "juramento_da_conquista",
    "source": "xge",
    "classId": "paladino",
    "name": "Conquest",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tenets of Conquest",
        "description": "Douse the Flame of Hope, Rule with an Iron Fist, and Strength Above All: victory must break the enemy's will to fight."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Conquering Presence and Guided Strike",
        "description": "Action: creatures you can see within 30 feet make a WIS save or are frightened for 1 minute; or +10 to one attack, chosen after you see the roll."
      },
      {
        "level": 7,
        "name": "Aura of Conquest",
        "description": "10-foot aura: a frightened creature has 0 speed and takes psychic damage equal to half your paladin level when it starts its turn next to you (30 feet at 18th)."
      },
      {
        "level": 15,
        "name": "Scornful Rebuke",
        "description": "A creature that hits you with an attack takes psychic damage equal to your CHA modifier (minimum 1), unless you are incapacitated."
      },
      {
        "level": 20,
        "name": "Invincible Conqueror",
        "description": "Action: for 1 minute — resistance to all damage, 1 extra attack on the Attack action, and critical hits on 19–20; 1/long rest."
      }
    ]
  },
  {
    "id": "juramento_da_coroa",
    "source": "scag",
    "classId": "paladino",
    "name": "Crown",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tenets of the Crown",
        "description": "Law, Loyalty, Courage, and Responsibility: the law is supreme, and your word is the bond that sustains civilization."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Champion's Challenge and Turn the Tide",
        "description": "Bonus action: creatures you can see within 30 feet make a WIS save and can't move more than 30 feet away; or bonus action: allies within 30 feet at half hit points heal 1d6 + your CHA modifier."
      },
      {
        "level": 7,
        "name": "Divine Loyalty",
        "description": "Reaction: when you take damage, you take it instead of a creature within 5 feet (the damage can't be reduced in any way)."
      },
      {
        "level": 15,
        "name": "Unshakeable Saint",
        "description": "You have advantage on saving throws against being paralyzed or stunned."
      },
      {
        "level": 20,
        "name": "Exalted Champion",
        "description": "Action: for 1 hour — resistance to damage from nonmagical weapons, allies within 30 feet have advantage on death saves, and you and they have advantage on WIS saves; 1/long rest."
      }
    ]
  },
  {
    "id": "devocao",
    "source": "phb",
    "classId": "paladino",
    "name": "Oath of Devotion",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Devotion Tenets",
        "description": "Honor, Courage, Compassion, and Duty: they guide your acts and are the base of the oath."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells based on your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Sacred Weapon and Turn the Unholy",
        "description": "Action: add your CHA mod to attacks for 1 minute; or frighten undead and aberrations that fail a WIS save."
      },
      {
        "level": 7,
        "name": "Aura of Devotion",
        "description": "You and allies within 10 feet can't be charmed while conscious (radius increases to 30 feet at 18th level)."
      },
      {
        "level": 15,
        "name": "Pure Spirit",
        "description": "You are always under the effects of the Protection from Evil and Good spell."
      },
      {
        "level": 20,
        "name": "Holy Nimbus",
        "description": "Action: an aura of sunlight, 30 feet, for 1 minute; an enemy that starts its turn in the light takes 10 radiant damage and you have advantage on saving throws against spells from demons and undead (1/long rest)."
      }
    ]
  },
  {
    "id": "juramento_da_gloria",
    "source": "moot",
    "classId": "paladino",
    "name": "Glory",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tenets of Glory",
        "description": "Actions over Words, Challenges Are Tests, Hone the Body, and Discipline the Soul: glory is won through heroic acts."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Peerless Athlete and Inspiring Smite",
        "description": "Bonus action: 10 minutes with advantage on Athletics and Acrobatics, double carrying capacity, and +10-foot jumps; or after Divine Smite, share 2d8 + level temp HP with creatures within 30 feet."
      },
      {
        "level": 7,
        "name": "Aura of Alacrity",
        "description": "You and allies gain 10 feet of movement; allies that start their turn within 5 feet gain it too until the end of their turn (10-foot radius at 18th)."
      },
      {
        "level": 15,
        "name": "Glorious Defense",
        "description": "Reaction: add your CHA modifier (minimum +1) to the AC of you or a creature within 10 feet; if the attack still misses, you can counterattack; uses = CHA mod."
      },
      {
        "level": 20,
        "name": "Living Legend",
        "description": "Bonus action: for 1 minute — advantage on all CHA checks, you can turn a miss into a hit (1/turn), and you can reroll a failed save with your reaction; 1/long rest."
      }
    ]
  },
  {
    "id": "juramento_quebrado",
    "source": "dmg",
    "classId": "paladino",
    "name": "Oathbreaker",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Control Undead and Dreadful Aspect",
        "description": "Action: an undead within 30 feet makes a WIS save or obeys you for 24 hours (immune if its CR is at least yours); or creatures that see you within 30 feet (WIS save) are frightened for 1 minute."
      },
      {
        "level": 7,
        "name": "Aura of Hate",
        "description": "You, fiends, and undead within 10 feet add your CHA modifier (minimum +1) to melee weapon damage (30 feet at 18th); a creature benefits from only one paladin at a time."
      },
      {
        "level": 15,
        "name": "Supernatural Resistance",
        "description": "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
      },
      {
        "level": 20,
        "name": "Dread Lord",
        "description": "Action: 1 minute — 30-foot dim-light aura, frightened enemies take 4d10 psychic when they start their turn in it; bonus action: shadows attack (3d10 + CHA mod); 1/long rest."
      }
    ]
  },
  {
    "id": "juramento_da_redencao",
    "source": "xge",
    "classId": "paladino",
    "name": "Redemption",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tenets of Redemption",
        "description": "Peace, Innocence, Patience, and Wisdom: violence is a last resort, and every creature can be redeemed."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Emissary of Peace and Rebuke the Violent",
        "description": "Bonus action: +5 to Persuasion for 10 minutes; or reaction: a creature that damages one within 30 feet makes a WIS save and takes radiant damage equal to the damage (half on a success)."
      },
      {
        "level": 7,
        "name": "Aura of the Guardian",
        "description": "Reaction: you take the damage dealt to a creature within 10 feet instead (it can't be reduced); the radius grows to 30 feet at 18th level."
      },
      {
        "level": 15,
        "name": "Protective Spirit",
        "description": "When you end your turn in combat with half your hit points or fewer, you regain 1d6 + half your paladin level hit points."
      },
      {
        "level": 20,
        "name": "Emissary of Redemption",
        "description": "You have resistance to all damage dealt by other creatures; a creature that hits you takes radiant damage equal to half the damage it dealt (you lose this against creatures you attack)."
      }
    ]
  },
  {
    "id": "vinganca",
    "source": "phb",
    "classId": "paladino",
    "name": "Oath of Vengeance",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Vengeance Tenets",
        "description": "Punish the guilty at any cost: no mercy for evil, even if it is ruthless."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells based on your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Abjure Enemy and Vow of Enmity",
        "description": "Action: a target within 30 feet makes a WIS save or is frightened and has disadvantage on attacks against you; or bonus action: a target within 10 feet is marked — advantage on attacks against it for 1 minute."
      },
      {
        "level": 7,
        "name": "Relentless Avenger",
        "description": "When you hit with an opportunity attack, you can move up to half your speed without provoking opportunity attacks."
      },
      {
        "level": 15,
        "name": "Soul of Vengeance",
        "description": "When a creature under the effect of Vow of Enmity attacks, you can use your reaction to attack it."
      },
      {
        "level": 20,
        "name": "Avenging Angel",
        "description": "For 1 hour: you gain a flying speed equal to your walking speed and a fear aura — a hostile creature within 30 feet that starts its turn there makes a WIS save or is frightened (1/long rest)."
      }
    ]
  },
  {
    "id": "juramento_dos_vigias",
    "source": "tce",
    "classId": "paladino",
    "name": "Watchers",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Tenets of the Watchers",
        "description": "Vigilance, Loyalty, and Discipline: safeguard the mortal realms from threats that come from other planes."
      },
      {
        "level": 3,
        "name": "Oath Spells",
        "description": "You gain prepared oath spells according to your paladin level."
      },
      {
        "level": 3,
        "name": "Channel Divinity: Watcher's Will and Abjure the Extraplanar",
        "description": "Action: up to your CHA modifier creatures within 30 feet gain advantage on INT, WIS, and CHA saves for 1 minute; or action: extraplanar creatures within 30 feet (WIS save) are repelled for 1 minute."
      },
      {
        "level": 7,
        "name": "Aura of the Sentinel",
        "description": "You and allies you choose within 10 feet add your proficiency bonus to initiative (30-foot radius at 18th level)."
      },
      {
        "level": 15,
        "name": "Vigilant Rebuke",
        "description": "Reaction: when you or a creature within 30 feet succeeds on an INT, WIS, or CHA save, deal 2d8 + your CHA modifier force damage to the one that forced it."
      },
      {
        "level": 20,
        "name": "Mortal Bulwark",
        "description": "Bonus action: 1 minute — 120 feet of truesight, advantage against extraplanar creatures, and on a hit the target makes a CHA save or is banished to its plane (1/long rest or 5th-level slot)."
      }
    ]
  },
  {
    "id": "companheiro",
    "source": "phb",
    "classId": "patrulheiro",
    "name": "Beast Master",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Animal Companion",
        "description": "Choose a Medium or smaller beast with a CR of 1/4 or lower (bear, hawk, panther, etc.); it obeys your orders with your action or bonus action."
      },
      {
        "level": 7,
        "name": "Exceptional Training",
        "description": "When the beast doesn't attack, you can use a bonus action to command it to Dash, Help, or Hide; its attacks count as magical."
      },
      {
        "level": 11,
        "name": "Bestial Fury",
        "description": "When you command the beast to take the Attack action, it can make 2 attacks or use the Multiattack action."
      },
      {
        "level": 15,
        "name": "Share Spells",
        "description": "A spell you cast on yourself also affects the beast if it is within 30 feet of you."
      }
    ]
  },
  {
    "id": "guardiao_do_draco",
    "source": "ftd",
    "classId": "patrulheiro",
    "name": "Drakewarden",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Draconic Gift",
        "description": "You learn the Thaumaturgy cantrip (as a ranger spell) and speak, read, and write Draconic or one other language of your choice."
      },
      {
        "level": 3,
        "name": "Drake Companion",
        "description": "Action: summon the drake within 30 feet; it acts after you and has one chosen immunity (acid, cold, fire, lightning, or poison); 1/long rest or with a slot."
      },
      {
        "level": 7,
        "name": "Bond of Fang and Scale",
        "description": "The drake gains wings and a fly speed, becomes a Medium mount, its bite deals +1d6 of the chosen type, and you gain resistance to that type."
      },
      {
        "level": 11,
        "name": "Drake's Breath",
        "description": "Action: 30-foot cone of acid, cold, fire, lightning, or poison — DEX save or 8d6 (half on a success); 1/long rest or a 3rd-level or higher slot."
      },
      {
        "level": 15,
        "name": "Perfected Bond",
        "description": "Bite gains +2d6, the drake becomes Large and can fly while mounted, and you can use your reaction to give yourself or the drake resistance (uses = proficiency bonus)."
      }
    ]
  },
  {
    "id": "andarilho_feerico",
    "source": "tce",
    "classId": "patrulheiro",
    "name": " Fey Wanderer",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Dreadful Strikes",
        "description": "A weapon that hits deals 1d4 extra psychic damage (1/turn); increases to 1d6 at 11th level."
      },
      {
        "level": 3,
        "name": "Fey Wanderer Magic",
        "description": "You learn ranger spells at fixed levels (3rd, 5th, 9th, 13th, and 17th) outside your limit of spells known."
      },
      {
        "level": 3,
        "name": "Otherworldly Glamour",
        "description": "You add your WIS modifier (minimum +1) to CHA checks and gain proficiency in Deception, Performance, or Persuasion."
      },
      {
        "level": 7,
        "name": "Deceptive Turn",
        "description": "Advantage on saves against being charmed or frightened; reaction: a creature within 120 feet makes a WIS save or is charmed or frightened for 1 minute."
      },
      {
        "level": 11,
        "name": "Fey Reinforcements",
        "description": "You can cast Summon Fey without a material component, and once without a slot (regained on a long rest); you can forgo concentration, and it then lasts 1 minute."
      },
      {
        "level": 15,
        "name": "Misty Wanderer",
        "description": "You cast Misty Step without a slot (uses = WIS mod; regained on a long rest) and can bring 1 willing creature within 5 feet with you."
      }
    ]
  },
  {
    "id": "espreitador_sombrio",
    "source": "xge",
    "classId": "patrulheiro",
    "name": " Gloom Stalker",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Gloom Stalker Magic",
        "description": "You learn ranger spells at fixed levels (3rd, 5th, 9th, 13th, and 17th) outside your limit of spells known."
      },
      {
        "level": 3,
        "name": "Dread Ambusher",
        "description": "Add your WIS modifier to initiative; on the first turn of each combat you gain 10 feet of movement and one extra weapon attack (+1d8 if it hits)."
      },
      {
        "level": 3,
        "name": "Umbral Sight",
        "description": "You gain 60 feet of darkvision (30 feet more if you already have it); in darkness you are invisible to creatures that rely on darkvision."
      },
      {
        "level": 7,
        "name": "Iron Mind",
        "description": "You gain proficiency in WIS saves; if you already have it, choose INT or CHA instead."
      },
      {
        "level": 11,
        "name": "Relentless Flurry",
        "description": "When you miss with a weapon attack (1/turn), you can make another attack with the same action."
      },
      {
        "level": 15,
        "name": "Shadowy Dodge",
        "description": "Reaction: when an attack against you doesn't have advantage, you impose disadvantage (before knowing the attack's result)."
      }
    ]
  },
  {
    "id": "andarilho_do_horizonte",
    "source": "xge",
    "classId": "patrulheiro",
    "name": " Horizon Walker",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Horizon Walker Magic",
        "description": "You learn ranger spells at fixed levels (3rd, 5th, 9th, 13th, and 17th) outside your limit of spells known."
      },
      {
        "level": 3,
        "name": "Detect Portal",
        "description": "Action: sense the direction and distance to the nearest planar portal within 1 mile; regained on a short or long rest."
      },
      {
        "level": 3,
        "name": "Planar Warrior",
        "description": "Bonus action: your next weapon hit against a creature within 30 feet deals +1d8 extra force damage (2d8 at 11th level)."
      },
      {
        "level": 7,
        "name": "Ethereal Step",
        "description": "Action: cast Etherealness without a slot, ending it at the end of your turn (1/short or long rest)."
      },
      {
        "level": 11,
        "name": "Distant Strike",
        "description": "When you take the Attack action, you teleport up to 10 feet before each attack; if you hit 2 different creatures, you gain 1 extra attack."
      },
      {
        "level": 15,
        "name": "Spectral Defense",
        "description": "Reaction: when you take damage from an attack, you gain resistance to that damage until the end of the turn."
      }
    ]
  },
  {
    "id": "cacador",
    "source": "phb",
    "classId": "patrulheiro",
    "name": "Hunter",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Hunter's Prey",
        "description": "Choose: Colossus Slayer (1d8 extra against a wounded target, 1/turn), Giant Killer (reaction against a Large creature), or Horde Breaker (extra attack against an adjacent target)."
      },
      {
        "level": 7,
        "name": "Defensive Tactics",
        "description": "Choose: Escape the Horde (disadvantage on opportunity attacks), Multiattack Defense (+4 to AC against the first attack you suffer), or Steel Will (advantage against frightened)."
      },
      {
        "level": 11,
        "name": "Multiattack",
        "description": "Choose: Multiattack (two ranged attacks against the same target), Volley (an attack against everyone within a 15-foot radius), or Whirlwind Attack (everyone within 5 feet)."
      },
      {
        "level": 15,
        "name": "Superior Hunter's Defense",
        "description": "Choose: Evasion (no damage on a successful DEX save), Stand Against the Tide (reaction: attack a target that misses you), or Uncanny Dodge (reaction: halve the damage)."
      }
    ]
  },
  {
    "id": "matador_de_monstros",
    "source": "xge",
    "classId": "patrulheiro",
    "name": " Monster Slayer",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Monster Slayer Magic",
        "description": "You learn ranger spells at fixed levels (3rd, 5th, 9th, 13th, and 17th) outside your limit of spells known."
      },
      {
        "level": 3,
        "name": "Sense the Monster",
        "description": "Action: a creature within 60 feet — you learn if it has damage immunities, resistances, or vulnerabilities (uses = WIS mod; long rest)."
      },
      {
        "level": 3,
        "name": "Slayer's Prey",
        "description": "Bonus action: mark a creature within 60 feet; the first weapon attack that hits it each turn deals +1d6 (until you rest or mark a new target)."
      },
      {
        "level": 7,
        "name": "Supernatural Defense",
        "description": "Add 1d6 to saves forced by your Slayer's Prey target and to checks to escape its grapple."
      },
      {
        "level": 11,
        "name": "Slayer's Nemesis",
        "description": "Reaction: a creature casts a spell or teleports within 60 feet — it makes a WIS save or the spell or teleport fails (1/short or long rest)."
      },
      {
        "level": 15,
        "name": "Counterattack",
        "description": "Reaction: when your Slayer's Prey target forces you to make a save, you attack it first; if you hit, the save automatically succeeds."
      }
    ]
  },
  {
    "id": "guardiao_do_enxame",
    "source": "tce",
    "classId": "patrulheiro",
    "name": " Swarmkeeper",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Gathered Swarm",
        "description": "After you hit (1/turn), the swarm deals 1d6 piercing, pushes the target 15 feet (STR save), or moves you 5 feet."
      },
      {
        "level": 3,
        "name": "Swarmkeeper Magic",
        "description": "You learn the Mage Hand cantrip (with the swarm's appearance) and ranger spells at fixed levels outside your limit of spells known."
      },
      {
        "level": 7,
        "name": "Writhing Tide",
        "description": "Bonus action: condense the swarm around you and gain a 10-foot fly speed with hover for 1 minute (uses = proficiency bonus; long rest)."
      },
      {
        "level": 11,
        "name": "Mighty Swarm",
        "description": "Gathered Swarm deals 1d8, can knock prone whoever fails the save, and grants you half cover until your next turn."
      },
      {
        "level": 15,
        "name": "Swarm Dispersal",
        "description": "Reaction: when you take damage, gain resistance and teleport with the swarm up to 30 feet (uses = proficiency bonus; long rest)."
      }
    ]
  },
  {
    "id": "arquetipo_do_ladino_arcano",
    "source": "phb",
    "classId": "ladino",
    "name": "Arcane Trickster",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Spellcasting",
        "description": "You learn cantrips (Mage Hand + 2) and wizard spells as shown (INT is your casting ability; 2 of the 3 initial spells must be enchantment or illusion)."
      },
      {
        "level": 3,
        "name": "Mage Hand Larceny",
        "description": "The spectral hand is invisible, can store or pick up objects on creatures, use thieves' tools at a range, and be commanded with Cunning Action."
      },
      {
        "level": 9,
        "name": "Arcane Ambush",
        "description": "If you are hidden when you cast a spell against a creature, it has disadvantage on the saving throw against that spell."
      },
      {
        "level": 13,
        "name": "Versatile Trickster",
        "description": "Bonus action: designate a creature within 5 feet of the spectral hand — advantage on attacks against it until the end of the turn."
      },
      {
        "level": 17,
        "name": "Spell Thief",
        "description": "Reaction: when a spell targets you, the caster makes a save with its spellcasting ability; if it fails, you negate the effect and learn it for 8 hours (1/long rest)."
      }
    ]
  },
  {
    "id": "assassino",
    "source": "phb",
    "classId": "ladino",
    "name": "Assassin",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Bonus Proficiencies",
        "description": "You gain proficiency with the disguise kit and the poisoner's kit."
      },
      {
        "level": 3,
        "name": "Assassinate",
        "description": "Advantage on attacks against a creature that hasn't acted yet in combat; against a surprised creature, the attack scores a critical hit."
      },
      {
        "level": 9,
        "name": "Infiltration Expertise",
        "description": "You can create false identities flawlessly: 7 days and 25 gp to establish history, profession, and affiliations."
      },
      {
        "level": 13,
        "name": "Impostor",
        "description": "After 3 hours studying speech, writing, and behavior, you can imitate any person for as long as you wish."
      },
      {
        "level": 17,
        "name": "Death Strike",
        "description": "When you hit a surprised creature, it makes a CON save (DC 8 + DEX + prof.) or takes double damage (on a success, normal damage)."
      }
    ]
  },
  {
    "id": "arquetipo_do_inquisitivo",
    "source": "xge",
    "classId": "ladino",
    "name": " Inquisitive",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Eye for Deceit",
        "description": "On WIS (Insight) checks to detect lies, rolls of 7 or lower on the d20 count as 8."
      },
      {
        "level": 3,
        "name": "Eye for Detail",
        "description": "Bonus action: make a Perception check to find a hidden creature or object, or an Investigation check to discover or decipher clues."
      },
      {
        "level": 3,
        "name": "Insightful Fighting",
        "description": "Bonus action: WIS (Insight) against Deception; if you win, you can use Sneak Attack against that target even without advantage, for 1 minute."
      },
      {
        "level": 9,
        "name": "Steady Eye",
        "description": "You have advantage on Perception or Investigation if you move no more than half your speed on your turn."
      },
      {
        "level": 13,
        "name": "Unerring Eye",
        "description": "Action: sense illusions, shapechangers, and magic intended to fool the senses within 30 feet (uses = WIS mod; long rest)."
      },
      {
        "level": 17,
        "name": "Eye for Weakness",
        "description": "While your Insightful Fighting applies to a target, your Sneak Attack against it increases by 3d6."
      }
    ]
  },
  {
    "id": "arquetipo_do_mestre_das_intrigas",
    "source": "xge",
    "classId": "ladino",
    "name": " Mastermind",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Master of Intrigue",
        "description": "Proficiency with a disguise kit, a forgery kit, and one gaming set of your choice, plus 2 languages; you can mimic the speech and accent of a creature you hear for 1 minute."
      },
      {
        "level": 3,
        "name": "Master of Tactics",
        "description": "You can take the Help action as a bonus action; the helped target can be within 30 feet (instead of 5) if you can see or hear it."
      },
      {
        "level": 9,
        "name": "Insightful Manipulator",
        "description": "After observing or interacting with a creature for 1 minute outside combat, you learn how 2 of its INT, WIS, CHA, and class levels compare to yours."
      },
      {
        "level": 13,
        "name": "Misdirection",
        "description": "Reaction: when an attack targets you and a creature within 5 feet gives you cover, you redirect the attack to it."
      },
      {
        "level": 17,
        "name": "Soul of Deceit",
        "description": "Your thoughts can't be read without your consent; you can present false thoughts, and a spell that detects lies doesn't affect you if you choose."
      }
    ]
  },
  {
    "id": "arquetipo_do_fantasma",
    "source": "tce",
    "classId": "ladino",
    "name": " Phantom",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Whispers of the Dead",
        "description": "At the end of a short or long rest, you gain proficiency with one skill or tool of your choice; you can swap it when you use this feature again."
      },
      {
        "level": 3,
        "name": "Wail from the Grave",
        "description": "After you deal Sneak Attack damage, deal necrotic damage equal to half the dice (rounded up) to a creature within 30 feet (uses = proficiency bonus; long rest)."
      },
      {
        "level": 9,
        "name": "Soul Trinkets",
        "description": "Reaction: a creature that dies within 30 feet leaves a soul trinket (max = proficiency bonus); carrying one gives advantage on death saves and CON saves."
      },
      {
        "level": 13,
        "name": "Ghostly Walker",
        "description": "Bonus action: spectral form for 10 minutes — 10-foot fly speed, hover, disadvantage on attacks against you, and you move through creatures; regained on a long rest or with a trinket."
      },
      {
        "level": 17,
        "name": "Death's Friend",
        "description": "Wail from the Grave deals necrotic damage to both creatures, and a soul trinket appears in your hand at the end of a long rest if you have none."
      }
    ]
  },
  {
    "id": "arquetipo_do_batedor",
    "source": "xge",
    "classId": "ladino",
    "name": " Scout",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Skirmisher",
        "description": "Reaction: when an enemy ends its turn within 5 feet of you, you move up to half your speed without provoking opportunity attacks."
      },
      {
        "level": 3,
        "name": "Survivor",
        "description": "You gain proficiency in Nature and Survival (if you don't have it) and add double your proficiency bonus to those checks."
      },
      {
        "level": 9,
        "name": "Superior Mobility",
        "description": "Your walking speed increases by 10 feet; the same applies to your climbing or swimming speed, if you have one."
      },
      {
        "level": 13,
        "name": "Ambush Master",
        "description": "You have advantage on initiative; the first creature you hit on the first turn has advantage on its attacks against you until your next turn."
      },
      {
        "level": 17,
        "name": "Sudden Strike",
        "description": "After you take the Attack action, you can make 1 extra attack as a bonus action that can use Sneak Attack, even if you already used it (never twice on the same target)."
      }
    ]
  },
  {
    "id": "arquetipo_da_lamina_da_alma",
    "source": "tce",
    "classId": "ladino",
    "name": " Soulknife",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Psychic Power",
        "description": "Psionic energy dice (d6; 2× proficiency; d8 at 5th, d10 at 11th, d12 at 17th) fuel your powers and are regained on a long rest."
      },
      {
        "level": 3,
        "name": "Psychic Blades",
        "description": "You create a psychic blade in your free hand (1d6 psychic, 60-foot range) and can attack with a second (1d4) as a bonus action on the same turn."
      },
      {
        "level": 9,
        "name": "Soul Blades",
        "description": "With the blades: add a psionic die to an attack that missed (Guided Strikes) or teleport up to 10× the rolled value as a bonus action (Psychic Teleportation)."
      },
      {
        "level": 13,
        "name": "Psychic Veil",
        "description": "Action: become invisible for 1 hour, until you deal damage or force a save (1/long rest, or by spending a psionic die)."
      },
      {
        "level": 17,
        "name": "Rend Mind",
        "description": "When you deal Sneak Attack damage with a blade, the target makes a WIS save or is stunned for 1 minute (1/long rest, or by spending 3 psionic dice)."
      }
    ]
  },
  {
    "id": "arquetipo_do_espadachim",
    "source": "xge",
    "classId": "ladino",
    "name": " Swashbuckler",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Fancy Footwork",
        "description": "After you hit a melee attack on your turn, that creature can't make opportunity attacks against you until the end of the turn."
      },
      {
        "level": 3,
        "name": "Rakish Audacity",
        "description": "Add your CHA modifier to initiative; you can use Sneak Attack against a creature within 5 feet without advantage if no other creature is within 5 feet of you."
      },
      {
        "level": 9,
        "name": "Panache",
        "description": "Action: CHA (Persuasion) against WIS (Insight); a hostile creature has disadvantage on attacks against others and doesn't make opportunity attacks against them (1 minute)."
      },
      {
        "level": 13,
        "name": "Elegant Maneuver",
        "description": "Bonus action: advantage on the next DEX (Acrobatics) or STR (Athletics) check you make on this turn."
      },
      {
        "level": 17,
        "name": "Master Duelist",
        "description": "When you miss an attack, you can reroll it with advantage (1/short or long rest)."
      }
    ]
  },
  {
    "id": "ladrao",
    "source": "phb",
    "classId": "ladino",
    "name": "Thief",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Fast Hands",
        "description": "Use the bonus action of Cunning Action to make a DEX (Sleight of Hand) check, use thieves' tools, or interact with an object."
      },
      {
        "level": 3,
        "name": "Second-Story Work",
        "description": "Climbing doesn't cost extra speed and running jumps cover half again as much distance."
      },
      {
        "level": 9,
        "name": "Superior Infiltration",
        "description": "You have advantage on DEX (Stealth) checks when you don't move more than half your speed."
      },
      {
        "level": 13,
        "name": "Use Magic Item",
        "description": "You ignore class, race, and level requirements to use magic items; you roll a d20 with advantage when the item asks."
      },
      {
        "level": 17,
        "name": "Thief's Reflexes",
        "description": "On the first turn of combat, you can act twice (initial and extra)."
      }
    ]
  },
  {
    "id": "origem_aberrante",
    "source": "tce",
    "classId": "feiticeiro",
    "name": "Aberrant Mind",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Psionic Spells",
        "description": "You learn sorcerer spells at fixed levels outside your limit; when you gain a level, you can swap one for a divination or enchantment spell from the sorcerer, warlock, or wizard lists."
      },
      {
        "level": 1,
        "name": "Telepathic Speech",
        "description": "Bonus action: speak telepathically with a creature within 30 feet for minutes = your CHA modifier (minimum 1 mile); it ends if you die, are incapacitated, or speak with another."
      },
      {
        "level": 6,
        "name": "Psionic Sorcery",
        "description": "Cast spells from Psionic Spells by spending sorcery points equal to their level, without verbal, somatic, or material components (unless they are consumed)."
      },
      {
        "level": 6,
        "name": "Psychic Defenses",
        "description": "You have resistance to psychic damage and advantage on saves against being charmed or frightened."
      },
      {
        "level": 14,
        "name": "Revelation in Flesh",
        "description": "Bonus action: spend 1+ sorcery points for 10 minutes; each point grants see invisibility, fly, swim with underwater breathing, or move through 1-inch spaces."
      },
      {
        "level": 18,
        "name": "Warping Implosion",
        "description": "Action: teleport 120 feet and creatures within 30 feet of the starting point make a STR save or take 3d10 force and are pulled (1/long rest or 5 points)."
      }
    ]
  },
  {
    "id": "origem_da_alma_relogio",
    "source": "tce",
    "classId": "feiticeiro",
    "name": "Clockwork Soul",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Clockwork Spells",
        "description": "You learn sorcerer spells at fixed levels outside your limit; you can swap them for abjuration or transmutation spells from the sorcerer, warlock, or wizard lists."
      },
      {
        "level": 1,
        "name": "Restore Balance",
        "description": "Reaction: cancel advantage or disadvantage on a d20 roll of a creature within 60 feet (uses = proficiency bonus; regained on a long rest)."
      },
      {
        "level": 6,
        "name": "Bastion of Law",
        "description": "Action: spend 1 to 5 sorcery points to give yourself or a creature within 30 feet a pool of d8s that reduces damage taken (until a long rest)."
      },
      {
        "level": 14,
        "name": "Trance of Order",
        "description": "Bonus action for 1 minute: attacks against you don't benefit from advantage and rolls of 9 or lower count as 10 (1/long rest or 5 points)."
      },
      {
        "level": 18,
        "name": "Clockwork Cavalcade",
        "description": "Action: spirits of order in a 30-foot cube heal up to 100 hit points, repair objects, and end spells of 6th level or lower (1/long rest or 7 points)."
      }
    ]
  },
  {
    "id": "origem_da_alma_divina",
    "source": "xge",
    "classId": "feiticeiro",
    "name": "Divine Soul",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Divine Magic",
        "description": "You learn spells from the cleric or sorcerer list; choose an affinity (good, evil, law, chaos, or neutrality) that grants an additional spell."
      },
      {
        "level": 1,
        "name": "Favored by the Gods",
        "description": "After you fail a save or miss an attack, add 2d4 to the result (1/short or long rest)."
      },
      {
        "level": 6,
        "name": "Empowered Healing",
        "description": "When you roll healing dice for yourself or an ally within 5 feet, spend 1 sorcery point to reroll any of them once (1/turn)."
      },
      {
        "level": 14,
        "name": "Angelic Form",
        "description": "Bonus action: manifest spiritual wings with a 30-foot fly speed, until you are incapacitated, die, or dismiss them; their appearance follows your affinity."
      },
      {
        "level": 18,
        "name": "Unearthly Recovery",
        "description": "Bonus action: when you have less than half your hit points, regain hit points equal to half your maximum (1/long rest)."
      }
    ]
  },
  {
    "id": "draconica",
    "source": "phb",
    "classId": "feiticeiro",
    "name": "Draconic Bloodline",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Draconic Ancestry",
        "description": "Choose your draconic ancestor type (it defines the damage type of future resources); you speak, read, and write Draconic; proficiency bonus doubled on CHA checks to interact with dragons."
      },
      {
        "level": 1,
        "name": "Draconic Resilience",
        "description": "Your hit point maximum increases by 1 for each sorcerer level; your AC can't be less than 13 + DEX (without armor)."
      },
      {
        "level": 6,
        "name": "Elemental Affinity",
        "description": "You add your CHA mod to a spell damage roll of your lineage's type; you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
      },
      {
        "level": 14,
        "name": "Dragon Wings",
        "description": "Bonus action: you grow dragon wings — flying speed equal to walking speed."
      },
      {
        "level": 18,
        "name": "Draconic Presence",
        "description": "Action: spend 5 sorcery points to exhale an aura of awe or terror, 60 feet, for 1 minute (concentration) — hostile creatures make a WIS save or are frightened or awed."
      }
    ]
  },
  {
    "id": "origem_lunar",
    "source": "dsotdq",
    "classId": "feiticeiro",
    "name": "Lunar Sorcery",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lunar Incarnate",
        "description": "You learn spells by phase (Full, New, or Crescent Moon) outside your limit; at the end of a long rest you choose the phase and can cast 1 1st-level spell from it without a slot."
      },
      {
        "level": 1,
        "name": "Moonfire",
        "description": "You learn Sacred Flame outside your limit of cantrips and, when you cast it, you can target 2 creatures within range that are within 5 feet of each other."
      },
      {
        "level": 6,
        "name": "Lunar Boons",
        "description": "Metamagic on spells of your current phase's school costs 1 fewer sorcery point (uses = proficiency bonus; long rest)."
      },
      {
        "level": 6,
        "name": "Waning and Waxing",
        "description": "Bonus action: spend 1 point to change phase and you can cast 1 1st-level spell from each phase without a slot (1/long rest per phase)."
      },
      {
        "level": 14,
        "name": "Lunar Empowerment",
        "description": "Full Moon: light and advantage on Perception and Investigation; New Moon: advantage on Stealth and disadvantage on attacks in darkness; Crescent: resistance to necrotic and radiant."
      },
      {
        "level": 18,
        "name": "Lunar Phenomenon",
        "description": "Bonus action: Full blinds and heals 3d8; New deals 3d10 necrotic, reduces speed to 0, and makes you invisible; Crescent teleports 60 feet (1/long rest or 5 points)."
      }
    ]
  },
  {
    "id": "origem_da_piromancia",
    "source": "psk",
    "classId": "feiticeiro",
    "name": "Pyromancy",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Heart of Fire",
        "description": "When you cast a 1st-level or higher spell that deals fire damage, creatures you can see within 10 feet take fire damage equal to half your level (minimum 1)."
      },
      {
        "level": 6,
        "name": "Fire in the Veins",
        "description": "You have resistance to fire damage and your spells ignore resistance to fire."
      },
      {
        "level": 14,
        "name": "Pyromancer's Fury",
        "description": "Reaction: when you are hit by a melee attack, you deal fire damage equal to your sorcerer level, ignoring resistance to fire."
      },
      {
        "level": 18,
        "name": "Fiery Soul",
        "description": "Immunity to fire damage; spells and effects you create ignore resistance and treat immunity to fire as resistance."
      }
    ]
  },
  {
    "id": "origem_das_sombras",
    "source": "xge",
    "classId": "feiticeiro",
    "name": "Shadow Magic",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Eyes of the Dark",
        "description": "120 feet of darkvision; at 3rd level you learn Darkness outside your limit and can cast it with 2 sorcery points, seeing through the darkness it creates."
      },
      {
        "level": 1,
        "name": "Strength of the Grave",
        "description": "When you drop to 0 hit points, make a CHA save (DC 5 + damage taken) or return to 1 hit point; it doesn't work against radiant damage or critical hits (1/long rest)."
      },
      {
        "level": 6,
        "name": "Hound of Ill Omen",
        "description": "Bonus action: spend 3 points to summon a hound of shadows (Medium dire wolf) against a creature within 120 feet; it has disadvantage on saves against your spells."
      },
      {
        "level": 14,
        "name": "Step through Shadow",
        "description": "In dim light or darkness, bonus action: teleport up to 120 feet to an empty space in dim light or darkness that you can see."
      },
      {
        "level": 18,
        "name": "Umbral Form",
        "description": "Bonus action: spend 6 points and for 1 minute have resistance to all damage except force and radiant, moving through creatures and objects."
      }
    ]
  },
  {
    "id": "origem_da_tempestade",
    "source": "scag",
    "classId": "feiticeiro",
    "name": "Storm Sorcery",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Wind Speaker",
        "description": "You speak, read, and write Primordial, understanding and being understood by speakers of Aquan, Auran, Ignan, and Terran."
      },
      {
        "level": 1,
        "name": "Tempestuous Magic",
        "description": "Bonus action: immediately before or after you cast a 1st-level or higher spell, fly 10 feet without provoking opportunity attacks."
      },
      {
        "level": 6,
        "name": "Heart of the Storm",
        "description": "Resistance to lightning and thunder damage; when you cast a spell that deals that damage, creatures within 10 feet take damage equal to half your sorcerer level."
      },
      {
        "level": 6,
        "name": "Storm Guide",
        "description": "Action: stop rain within a 20-foot sphere; bonus action each round: choose the direction of the wind within a 100-foot sphere."
      },
      {
        "level": 14,
        "name": "Storm's Fury",
        "description": "Reaction: when you are hit by a melee attack, you deal lightning damage equal to your level and the creature makes a STR save or is pushed 20 feet."
      },
      {
        "level": 18,
        "name": "Wind Soul",
        "description": "You are immune to lightning and thunder and fly 60 feet; action: for 1 hour reduce your fly speed to 30 feet and grant 3 + your CHA modifier creatures within 30 feet a 30-foot fly speed."
      }
    ]
  },
  {
    "id": "selvagem",
    "source": "phb",
    "classId": "feiticeiro",
    "name": "Wild Magic",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Wild Magic Surge",
        "description": "After you cast a sorcerer spell of 1st level or higher, the DM can ask you to roll 1d20 — on a 1, roll on the wild magic surge table."
      },
      {
        "level": 1,
        "name": "Tides of Chaos",
        "description": "Advantage on one attack, check, or saving throw; you regain the use when you cast a sorcerer spell and roll 20 on the surge table (or on a long rest)."
      },
      {
        "level": 6,
        "name": "Bend Luck",
        "description": "Reaction: spend 2 sorcery points and roll 1d4 to add or subtract from an attack, check, or saving throw of a creature you can see."
      },
      {
        "level": 14,
        "name": "Controlled Chaos",
        "description": "When you roll on the surge table, roll twice and use either result."
      },
      {
        "level": 18,
        "name": "Spell Bombardment",
        "description": "When a spell rolls the highest possible value on any damage die, choose that die, roll it again, and add the result."
      }
    ]
  },
  {
    "id": "arquifee",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pact: The Archfey",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the Archfey list."
      },
      {
        "level": 1,
        "name": "Fey Presence",
        "description": "Action: each creature in a 10-foot cube originating from you makes a WIS save or is frightened or charmed until the end of your next turn."
      },
      {
        "level": 6,
        "name": "Misty Escape",
        "description": "Reaction: when you take damage, you become invisible and teleport up to 60 feet to an unoccupied space you can see (1/long rest)."
      },
      {
        "level": 10,
        "name": "Beguiling Defenses",
        "description": "You are immune to being charmed; when another creature tries to charm you, it makes a WIS save or fails and the effect doesn't affect you."
      },
      {
        "level": 14,
        "name": "Dark Delirium",
        "description": "Action: plunge a creature within 60 feet into an illusion for 1 minute (WIS save, or it is deluded; can repeat with an action)."
      }
    ]
  },
  {
    "id": "pacto_o_celestial",
    "source": "xge",
    "classId": "bruxo",
    "name": "Celestial",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the celestial patron's list."
      },
      {
        "level": 1,
        "name": "Bonus Cantrips",
        "description": "You learn the Light and Sacred Flame cantrips, which don't count against your limit of cantrips known."
      },
      {
        "level": 1,
        "name": "Healing Light",
        "description": "Bonus action: spend d6s from a pool (= 1 + your warlock level) to heal a creature within 60 feet (max = CHA mod dice per use); regained on a long rest."
      },
      {
        "level": 6,
        "name": "Radiant Soul",
        "description": "Resistance to radiant damage and you add your CHA modifier to a radiant or fire damage roll of a spell you cast."
      },
      {
        "level": 10,
        "name": "Celestial Resilience",
        "description": "At the end of a rest, you gain temporary hit points = your warlock level + CHA modifier and up to 5 creatures you can see gain half that."
      },
      {
        "level": 14,
        "name": "Searing Vengeance",
        "description": "When you make a death save, you can rise with half your hit points, deal 2d8 + your CHA modifier radiant damage, and blind creatures within 30 feet (1/long rest)."
      }
    ]
  },
  {
    "id": "pacto_o_abissal",
    "source": "tce",
    "classId": "bruxo",
    "name": "Fathomless",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the abyssal patron's list."
      },
      {
        "level": 1,
        "name": "Tentacle of the Abyss",
        "description": "Bonus action: create a spectral tentacle within 60 feet for 1 minute that attacks (1d8 cold and −10 feet of speed; 2d8 at 10th); uses = proficiency bonus."
      },
      {
        "level": 1,
        "name": "Gift of the Sea",
        "description": "You gain a 40-foot swimming speed and can breathe underwater."
      },
      {
        "level": 6,
        "name": "Ocean Soul",
        "description": "Resistance to cold damage; while fully submerged, you understand and are understood by any submerged creature."
      },
      {
        "level": 6,
        "name": "Guardian Coil",
        "description": "Reaction: when you or a creature you can see within 10 feet of the tentacle takes damage, reduce it by 1d8 (2d8 at 10th level)."
      },
      {
        "level": 10,
        "name": "Grabbing Tentacles",
        "description": "You learn Hunger of Hadar outside your limit, cast it once without a slot (long rest), and gain temporary hit points = your warlock level; damage doesn't break your concentration."
      },
      {
        "level": 14,
        "name": "Abyssal Dive",
        "description": "Action: teleport yourself and up to 5 willing creatures within 30 feet up to 1 mile, into or within 30 feet of a body of water you have seen (1/long rest)."
      }
    ]
  },
  {
    "id": "demoniaco",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pact: The Fiend",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the Fiend list."
      },
      {
        "level": 1,
        "name": "Dark One's Blessing",
        "description": "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to CHA mod + your warlock level (minimum 1)."
      },
      {
        "level": 6,
        "name": "Dark One's Own Luck",
        "description": "Bonus action: add 1d10 to an ability check or saving throw (1/long rest)."
      },
      {
        "level": 10,
        "name": "Fiendish Resilience",
        "description": "After a short or long rest, choose a damage type; you gain resistance to it until you choose another."
      },
      {
        "level": 14,
        "name": "Hurl Through Hell",
        "description": "On a hit, you send the target to the Lower Planes for 1 minute (no damage; it returns fearing you; 1/long rest)."
      }
    ]
  },
  {
    "id": "grande_antigo",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pact: The Great Old One",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the Great Old One list."
      },
      {
        "level": 1,
        "name": "Awakened Mind",
        "description": "You can communicate telepathically with any creature you can see within 30 feet, without it needing to understand your language."
      },
      {
        "level": 6,
        "name": "Entropic Ward",
        "description": "Reaction: when a creature attacks you, it misses and you have advantage on your next attack against it until the end of the turn (1/long rest)."
      },
      {
        "level": 10,
        "name": "Thought Shield",
        "description": "Your thoughts can't be read; you have resistance to psychic damage and a creature that deals you psychic damage takes the same damage."
      },
      {
        "level": 14,
        "name": "Create Thrall",
        "description": "Action: touch an incapacitated humanoid — it is charmed by you and obeys basic orders (1/long rest)."
      }
    ]
  },
  {
    "id": "pacto_a_lamina_amaldicoada",
    "source": "xge",
    "classId": "bruxo",
    "name": "Hexblade",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the hexblade's list."
      },
      {
        "level": 1,
        "name": "Hexblade's Curse",
        "description": "Bonus action: mark a creature within 30 feet for 1 minute — +proficiency to damage against it, critical hits on 19–20, and you regain hit points = level + CHA when you kill it (1/short rest)."
      },
      {
        "level": 1,
        "name": "Hex Warrior",
        "description": "Proficiency with medium armor, shields, and martial weapons; at the end of a long rest, touch a weapon without the two-handed property and use CHA for its attack and damage."
      },
      {
        "level": 6,
        "name": "Accursed Specter",
        "description": "When you kill a humanoid, its spirit rises as a specter under your service, until the end of your next long rest (1/long rest)."
      },
      {
        "level": 10,
        "name": "Armor of Hexes",
        "description": "Reaction: when the marked creature attacks you, roll 1d6 — on a 4 or higher, the attack misses regardless of the roll."
      },
      {
        "level": 14,
        "name": "Master of Hexes",
        "description": "When the marked creature dies, you can transfer the curse to another creature you can see within 30 feet (without regaining hit points)."
      }
    ]
  },
  {
    "id": "pacto_o_genio",
    "source": "tce",
    "classId": "bruxo",
    "name": "Genie",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the genie's list, plus spells of your patron's type (dao, djinni, efreeti, or marid)."
      },
      {
        "level": 1,
        "name": "Genie's Vessel",
        "description": "You receive a magic vessel (spellcasting focus); action: you enter it for up to 2× your proficiency bonus in hours and deal bonus damage = proficiency per turn (patron's type)."
      },
      {
        "level": 6,
        "name": "Elemental Gift",
        "description": "Resistance to your patron's damage type (bludgeoning, thunder, fire, or cold) and bonus action: 30-foot fly speed with hover for 10 minutes (uses = proficiency bonus)."
      },
      {
        "level": 10,
        "name": "Sanctuary Vessel",
        "description": "Take up to 5 willing creatures within 30 feet into the vessel; anyone who stays inside for 10 minutes finishes a short rest and adds your proficiency bonus to hit points healed."
      },
      {
        "level": 14,
        "name": "Limited Wish",
        "description": "Action: request the vessel to produce the effect of a 6th-level or lower spell with a 1-action casting time, without costly components (1/1d4 long rests)."
      }
    ]
  },
  {
    "id": "pacto_o_nao_morto",
    "source": "vgr",
    "classId": "bruxo",
    "name": "Undead",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the undead patron's list."
      },
      {
        "level": 1,
        "name": "Form of Dread",
        "description": "Bonus action for 1 minute: 1d10 + level in temporary hit points, immune to frightened and, when you hit (1/turn), the creature makes a WIS save or is frightened (uses = proficiency bonus)."
      },
      {
        "level": 6,
        "name": "Touch of the Grave",
        "description": "You don't need to eat, drink, or breathe; when you hit, you can change the damage to necrotic and, with Form of Dread, you roll 1 extra damage die."
      },
      {
        "level": 10,
        "name": "Necrotic Husk",
        "description": "Resistance to necrotic (immunity in Form of Dread); when you drop to 0 hit points, reaction: return to 1 HP and deal 2d10 + level to creatures within 30 feet, gaining 1 exhaustion (1/1d4 long rests)."
      },
      {
        "level": 14,
        "name": "Spirit Projection",
        "description": "Action: project your spirit for 1 hour (your body is unconscious) with resistance to nonmagical damage, a fly speed, and no components for conjuration or necromancy spells; regained on a long rest."
      }
    ]
  },
  {
    "id": "pacto_o_imperecivel",
    "source": "scag",
    "classId": "bruxo",
    "name": "Undying",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Expanded Spell List",
        "description": "You gain additional warlock spells from the undying patron's list."
      },
      {
        "level": 1,
        "name": "Among the Dead",
        "description": "You learn Spare the Dying as a cantrip and have advantage on saves against disease; an undead that attacks you directly makes a WIS save or must choose another target (24 hours)."
      },
      {
        "level": 6,
        "name": "Defy Death",
        "description": "You regain 1d8 + your CON modifier hit points when you succeed on a death save or stabilize a creature with Spare the Dying (1/long rest)."
      },
      {
        "level": 10,
        "name": "Undying Nature",
        "description": "You don't need food, water, or sleep, you age 1 year every 10, and you are immune to magical aging."
      },
      {
        "level": 14,
        "name": "Indestructible Life",
        "description": "Bonus action: regain 1d8 + your warlock level hit points and reattach a severed limb (1/short or long rest)."
      }
    ]
  },
  {
    "id": "abjuracao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Abjuration",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Abjuration Savant",
        "description": "The time and gold to copy abjuration spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Arcane Ward",
        "description": "When you cast an abjuration spell of 1st level or higher, you create a ward with temporary hit points equal to 2 × your wizard level + your wizard level (minimum 6); you can replenish it with abjuration spells."
      },
      {
        "level": 6,
        "name": "Projected Ward",
        "description": "Reaction: your Arcane Ward absorbs damage dealt to a creature you can see within 30 feet."
      },
      {
        "level": 10,
        "name": "Improved Abjuration",
        "description": "When you cast a spell that requires an ability check (Dispel Magic, Counterspell), you add your proficiency bonus to the check."
      },
      {
        "level": 14,
        "name": "Spell Resistance",
        "description": "You have advantage on saving throws against spells and resistance to spell damage."
      }
    ]
  },
  {
    "id": "canto_da_lamina",
    "source": "scag",
    "classId": "mago",
    "name": "Bladesinging",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Training in War and Song",
        "description": "Proficiency with light armor, one one-handed melee weapon, and proficiency in Performance, if you don't already have it."
      },
      {
        "level": 2,
        "name": "Blade Song",
        "description": "Bonus action for 1 minute: +AC = INT mod (min +1), +10 feet of speed, advantage on Acrobatics, and bonus to maintain concentration = INT mod (uses = proficiency bonus)."
      },
      {
        "level": 6,
        "name": "Extra Attack",
        "description": "You can attack twice when you take the Attack action and can replace one of those attacks with a cantrip."
      },
      {
        "level": 10,
        "name": "Song of Defense",
        "description": "Reaction: expend a spell slot to reduce damage you take by 5× the slot's level (while Blade Song is active)."
      },
      {
        "level": 14,
        "name": "Song of Victory",
        "description": "Add your INT modifier (minimum +1) to the damage of your melee weapon attacks while Blade Song is active."
      }
    ]
  },
  {
    "id": "magia_cronurgica",
    "source": "egw",
    "classId": "mago",
    "name": "Chronurgy",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Chronal Shift",
        "description": "Reaction: after you or a creature within 30 feet rolls an attack, check, or save, force a new roll and use the second result (2/long rest)."
      },
      {
        "level": 2,
        "name": "Temporal Awareness",
        "description": "You add your INT modifier to your initiative rolls."
      },
      {
        "level": 6,
        "name": "Momentary Stasis",
        "description": "Action: a Large or smaller creature within 60 feet makes a CON save or is incapacitated with 0 speed until the end of your next turn or until it takes damage (uses = INT mod; long rest)."
      },
      {
        "level": 10,
        "name": "Arcane Abeyance",
        "description": "Trap a spell of 4th level or lower from a slot in a gray parchment for 1 hour; a creature holding it uses its action to cast it (1/short rest)."
      },
      {
        "level": 14,
        "name": "Convergent Future",
        "description": "Reaction: decide whether a roll by you or a creature within 60 feet counts the minimum for success or 1 less; you gain 1 exhaustion (only removed on a long rest)."
      }
    ]
  },
  {
    "id": "conjuracao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Conjuration",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Conjuration Savant",
        "description": "The time and gold to copy conjuration spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Minor Conjuration",
        "description": "Action: creates an inanimate object of up to 10 pounds within 10 feet; dismissed with an action (the object can't be magical or deal damage)."
      },
      {
        "level": 6,
        "name": "Benign Transportation",
        "description": "Action: teleport up to 30 feet or swap places with a Medium or smaller creature you can see (free or willing)."
      },
      {
        "level": 10,
        "name": "Focused Conjuration",
        "description": "While you concentrate on a conjuration spell, damage doesn't break your concentration."
      },
      {
        "level": 14,
        "name": "Durable Summons",
        "description": "Creatures you conjure or create with a conjuration spell gain 30 temporary hit points."
      }
    ]
  },
  {
    "id": "adivinhacao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Divination",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Divination Savant",
        "description": "The time and gold to copy divination spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Portent",
        "description": "At the end of a long rest, roll 2d20 and note the values; you can replace an attack roll, ability check, or saving throw with one of them (replenished at the end of a long rest)."
      },
      {
        "level": 6,
        "name": "Expert Divination",
        "description": "When you cast a divination spell of 2nd level or higher using a slot, you recover a spent slot of a lower level than the spell (1/round)."
      },
      {
        "level": 10,
        "name": "The Third Eye",
        "description": "Action: gain darkvision, seeing in dim light, reading languages, or seeing beyond the veil for 1 minute (until you use the action or take a short rest)."
      },
      {
        "level": 14,
        "name": "Greater Portent",
        "description": "Roll 3d20 for Portent instead of 2d20."
      }
    ]
  },
  {
    "id": "encantamento",
    "source": "phb",
    "classId": "mago",
    "name": "School of Enchantment",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Enchantment Savant",
        "description": "The time and gold to copy enchantment spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Hypnotic Gaze",
        "description": "Action: charm a creature you can see within 5 feet (WIS save, or until you take another action, attack, or it takes damage)."
      },
      {
        "level": 6,
        "name": "Instinctive Charm",
        "description": "Reaction: when a creature within 30 feet attacks you, redirect the attack to another creature within 5 feet you can see (WIS save, or the attack proceeds normally)."
      },
      {
        "level": 10,
        "name": "Split Enchantment",
        "description": "An enchantment spell that targets 1 creature can now target 2."
      },
      {
        "level": 14,
        "name": "Alter Memories",
        "description": "A charmed target doesn't perceive your influence; you can erase the spell's memories (WIS save, or it fails)."
      }
    ]
  },
  {
    "id": "evocacao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Evocation",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Evocation Savant",
        "description": "The time and gold to copy evocation spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Sculpt Spells",
        "description": "When you cast an evocation spell that affects creatures you can see, choose up to 6 — they are free of both beneficial and harmful effects."
      },
      {
        "level": 6,
        "name": "Potent Cantrip",
        "description": "When a creature saves against your cantrip, it takes half damage (no other effect)."
      },
      {
        "level": 10,
        "name": "Empowered Evocation",
        "description": "You add your INT mod (minimum +1) to one damage roll of an evocation spell (1/round)."
      },
      {
        "level": 14,
        "name": "Overchannel",
        "description": "An evocation spell of 1st to 5th level deals maximum damage; the first use has no cost, later uses deal 2d12 necrotic damage per spell level to you."
      }
    ]
  },
  {
    "id": "magia_graviturgica",
    "source": "egw",
    "classId": "mago",
    "name": "Graviturgy",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Adjust Density",
        "description": "Action: double or halve the weight of an object or Large or smaller creature within 30 feet for 1 minute (concentration); speed and STR checks change accordingly."
      },
      {
        "level": 6,
        "name": "Gravity Well",
        "description": "A spell you cast on a creature that you hit with an attack, that it accepts, or that it fails a save against moves it 5 feet to an empty space."
      },
      {
        "level": 10,
        "name": "Violent Attraction",
        "description": "Reaction: increase a weapon attack's damage within 60 feet by 1d10, or falling damage by 2d10 (uses = INT mod; long rest)."
      },
      {
        "level": 14,
        "name": "Event Horizon",
        "description": "Action: 30-foot gravity field for 1 minute (concentration) — a hostile creature at the start of its turn makes a STR save or takes 2d10 force and has 0 speed (1/long rest)."
      }
    ]
  },
  {
    "id": "illusao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Illusion",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Illusion Savant",
        "description": "The time and gold to copy illusion spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Improved Minor Illusion",
        "description": "You learn Minor Illusion (or another cantrip if you already know it) and can create a visual and auditory illusion at the same time."
      },
      {
        "level": 6,
        "name": "Malleable Illusions",
        "description": "Bonus action: change the nature of a conjured illusion (duration of 1 minute or more)."
      },
      {
        "level": 10,
        "name": "Illusory Self",
        "description": "Reaction: create a duplicate of yourself that absorbs an attack (1/long rest)."
      },
      {
        "level": 14,
        "name": "Illusory Reality",
        "description": "An inanimate object from an illusion of 1st level or higher becomes real for 1 minute (it can't deal damage or harm)."
      }
    ]
  },
  {
    "id": "necromancia",
    "source": "phb",
    "classId": "mago",
    "name": "School of Necromancy",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Necromancy Savant",
        "description": "The time and gold to copy necromancy spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Grim Harvest",
        "description": "When you kill a creature with a 1st-level or higher spell (not undead), you regain hit points equal to 2 × the spell's level (1/round)."
      },
      {
        "level": 6,
        "name": "Undead Servants",
        "description": "Animate Dead is added to your spellbook; you animate 1 additional corpse or pile of bones, and commanded undead gain HP and AC bonus equal to your wizard level."
      },
      {
        "level": 10,
        "name": "Hardened in Undeath",
        "description": "You have resistance to necrotic damage and your hit point maximum can't be reduced."
      },
      {
        "level": 14,
        "name": "Command Undead",
        "description": "Action: choose an undead within 60 feet (WIS save, or it is charmed by you; intelligent undead have advantage)."
      }
    ]
  },
  {
    "id": "ordem_dos_escribas",
    "source": "tce",
    "classId": "mago",
    "name": "Order of Scribes",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Wizard's Pen",
        "description": "Bonus action: create a magic pen that needs no ink, copies spells in 2 minutes per level, erases what it writes (5 feet), and vanishes if you create another."
      },
      {
        "level": 2,
        "name": "Awakened Spellbook",
        "description": "It serves as your focus; swap a spell's damage type with that of another spell of the same level in the book, cast rituals without +10 minutes (1/long rest), and remake the book on a short rest."
      },
      {
        "level": 6,
        "name": "Manifest Mind",
        "description": "Bonus action: manifest the spellbook's mind as a spectral object within 60 feet; cast spells from its position (uses = proficiency bonus) and move it 30 feet (1/long rest)."
      },
      {
        "level": 10,
        "name": "Master Scrivener",
        "description": "At the end of a long rest, create a scroll with a 1-action 1st- or 2nd-level spell, treated as 1 level higher; with the Pen, scrolls cost half the gold and time."
      },
      {
        "level": 14,
        "name": "One with the Word",
        "description": "Advantage on Arcana; reaction: when you take damage, cancel it by dismissing the spectral mind, but you lose spells from the book (3d6 total levels) for 1d6 long rests (1/long rest)."
      }
    ]
  },
  {
    "id": "transmutacao",
    "source": "phb",
    "classId": "mago",
    "name": "School of Transmutation",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Transmutation Savant",
        "description": "The time and gold to copy transmutation spells into your spellbook are halved."
      },
      {
        "level": 2,
        "name": "Minor Alchemy",
        "description": "Action (10 minutes): temporarily transform a nonmagical object of one of metal, wood, or stone into another (1 hour; 1/long rest)."
      },
      {
        "level": 6,
        "name": "Transmuter's Stone",
        "description": "After 8 hours, you create a stone that grants a benefit (you can give it to another creature); a creature can only benefit from one at a time."
      },
      {
        "level": 10,
        "name": "Shapechanger",
        "description": "You learn Polymorph and can cast it without a slot, with the target restricted to yourself (1/long rest)."
      },
      {
        "level": 14,
        "name": "Master Transmuter",
        "description": "Action: consume the stone to heal 2d8+INT hit points, remove blindness/deafness/mute/disease/poison, rejuvenate 10 years, or transform matter (1/long rest)."
      }
    ]
  },
  {
    "id": "magia_de_guerra",
    "source": "xge",
    "classId": "mago",
    "name": "War Magic",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Arcane Deflection",
        "description": "Reaction: when hit by an attack or you fail a save, gain +2 to AC against that attack or +4 to the save; until your next turn you can cast only cantrips."
      },
      {
        "level": 2,
        "name": "Tactical Wit",
        "description": "You add your INT modifier to your initiative rolls."
      },
      {
        "level": 6,
        "name": "Power Surges",
        "description": "Hold up to INT mod surges (min 1); gain 1 when you dispel or counter a spell, or at the end of a short rest if you have none; spend 1 to add force damage = half your wizard level."
      },
      {
        "level": 10,
        "name": "Durable Magic",
        "description": "While you maintain concentration on a spell, you have +2 to AC and to all your saves."
      },
      {
        "level": 14,
        "name": "Deflecting Shroud",
        "description": "When you use Arcane Deflection, up to 3 creatures within 60 feet of you take force damage equal to half your wizard level."
      }
    ]
  }
]
;

export function getSubclass(id: string | undefined | null): SubclassDef | undefined {
  if (!id) return undefined;
  return SUBCLASSES.find((s) => s.id === id);
}

export function subclassesForClass(classId: string): SubclassDef[] {
  return SUBCLASSES.filter((s) => s.classId === classId);
}
