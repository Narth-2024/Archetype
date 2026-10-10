export type SpellDef = {
  id: string;
  source: string;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  description: string;
  classes: string[];
};

export const SPELLS: SpellDef[] = [
  {
    "id": "evaporacao_de_abi_dalzim",
    "name": "Abi-Dalzim's Horrid Wilting",
    "level": 8,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a bit of sponge)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "30-foot cube; 12d8 necrotic damage (half on Constitution), and nonmagical plants wither",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "absorver_elementos",
    "name": "Absorb Elements",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
    "range": "Self",
    "components": "S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Gain resistance to the triggering damage type; your next melee hit deals an extra 1d6 of it",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "bolha_acida",
    "name": "Acid Splash",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "One creature, or two within 5 feet of each other; Dexterity save or 1d6 acid damage",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "queimadura_de_aganazzar",
    "name": "Aganazzar's Scorcher",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a red dragon’s scale)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "30-foot-long, 5-foot-wide line of fire; 3d8 fire damage (half on Dexterity)",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "auxilio",
    "name": "Aid",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a tiny strip of white cloth)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Up to 3 creatures gain 5 hit points to both maximum and current for 8 hours",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "bolha_de_ar",
    "name": "Air Bubble",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "A spectral globe of fresh air around a willing creature's head lasts 24 hours",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "sps"
  },
  {
    "id": "alarmente",
    "name": "Alarm",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a small copper wire)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": true,
    "description": "Alerts you when a creature (not yours) enters the area.",
    "classes": [
      "artifice",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "alterar_se",
    "name": "Alter Self",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Choose aquatic adaptation (water breathing and swim speed), a new appearance, or natural weapons (1d6 damage, +1 to hit)",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dissuasao",
    "name": "Dissuasion",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "A target with Animal Handling avoids you (friendly fear).",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "mensageiro_animal",
    "name": "Animal Messenger",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a morsel of food)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": true,
    "description": "A Tiny beast carries a 25-word message up to 50 miles (25 if it can't fly) over 24 hours",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "formas_animais",
    "name": "Animal Shapes",
    "level": 8,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Up to 24 hours",
    "concentration": true,
    "ritual": false,
    "description": "Transforms any number of willing creatures into Large or smaller beasts of CR 4 or lower; on your turn you can change their form freely.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "animar_mortos",
    "name": "Animate Dead",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (a drop of blood, a piece of flesh, and a pinch of bone dust)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Raises a corpse or bones as a zombie or skeleton you command within 60 feet for 24 hours",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "animar_objetos",
    "name": "Animate Objects",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Animates up to 10 nonmagical objects (Medium counts as 2, Large as 4, Huge as 8); each fights at your command with its own AC, hit points and bonuses.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "antagonizar",
    "name": "Antagonize",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a playing card depicting a rogue)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Wisdom save or 4d4 psychic damage and it must use its reaction to melee attack an ally you choose",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "botmt"
  },
  {
    "id": "barreira_antivida",
    "name": "Antilife Barrier",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A glowing 10-foot barrier follows you and prevents creatures (except undead and constructs) from entering; they cannot pass through nor attack from inside.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "campo_antimagia",
    "name": "Antimagic Field",
    "level": 8,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A 10-foot sphere without magic: spells are not cast, conjurations vanish, magic items become mundane and magic itself is suspended within it.",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "antipatia_simpatia",
    "name": "Antipathy/Sympathy",
    "level": 8,
    "school": "Enchantment",
    "castingTime": "1 hour",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "10 days",
    "concentration": false,
    "ritual": false,
    "description": "Attracts or repels a kind of intelligent creature for 10 days (120-foot radius, 24 hours to enter/leave, Wisdom save).",
    "classes": [
      "bardo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "olho_arcano",
    "name": "Arcane Eye",
    "level": 4,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Creates an invisible magical eye that flies and sends you what it sees (normal and darkvision out to 30 feet); it can be moved as an action.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "portais_arcanos",
    "name": "Arcane Gate",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "500 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Two linked 10-foot portals within 500 feet; entering one exits from the other, for 10 minutes",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tranca_arcana",
    "name": "Arcane Lock",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Locks an entry until dispelled, raising the DC to break or pick it by 10",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "armadura_de_agathys",
    "name": "Armor of Agathys",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a piece of ice)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "5 temporary hit points; whoever hits you in melee takes 5 cold damage.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "bracos_de_hadar",
    "name": "Arms of Hadar",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self (10-foot radius)",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "10-foot radius; Strength save or 2d6 necrotic damage and no reactions until its next turn",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "passo_de_ashardalon",
    "name": "Ashardalon's Stride",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V,S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your speed rises by 20 feet, movement provokes no opportunity attacks, and anything you pass takes 1d6 fire",
    "classes": [
      "artifice",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "projecao_astral",
    "name": "Astral Projection",
    "level": 9,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "10 feet",
    "components": "V, S, M",
    "duration": "Special",
    "concentration": false,
    "ritual": false,
    "description": "You and up to 8 creatures project astral bodies; the material body remains unconscious until the soul returns (the silver cord can be cut, killing the body).",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "augurio",
    "name": "Augury",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M (specially marked sticks, bones, or similar tokens worth at least 25 gp)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Receive an omen of weal, woe, both or neither for a course of action planned within 30 minutes",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_vida",
    "name": "Aura of Life",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "30-foot aura: resistance to necrotic damage, hit point maximum can't be reduced, and 1 HP regained at 0",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_pureza",
    "name": "Aura of Purity",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "30-foot aura: no disease, resistance to poison, advantage on saves vs. blinded, charmed, deafened, frightened, paralyzed, poisoned or stunned",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_vitalidade",
    "name": "Aura of Vitality",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "30-foot healing aura; a bonus action lets one creature in it regain 2d6 hit points",
    "classes": [
      "clerigo",
      "druida",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "despertar",
    "name": "Awaken",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "8 hours",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "After 8 hours of casting, a beast or plant (CR 5 or lower, Intelligence 3 or less) gains Intelligence 10, learns to speak and becomes friendly to you.",
    "classes": [
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "perdicao",
    "name": "Bane",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of blood)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Up to 3 creatures subtract 1d4 from attack rolls and saving throws for 1 minute",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "punicao_banidora",
    "name": "Banishing Smite",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next weapon hit deals an extra 5d10 force damage and banishes a target left with 50 HP or fewer",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "banimento",
    "name": "Banishment",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A creature fails a Charisma check; one native to this plane is banished for 1 minute, one native to another plane is sent back to its home plane.",
    "classes": [
      "clerigo",
      "paladino",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pele_casca",
    "name": "Barkskin",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a handful of oak bark)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature's AC can't be less than 16 for up to 1 hour",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "sinal_de_esperanca",
    "name": "Beacon of Hope",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Targets have advantage on Wisdom and death saving throws and heal the maximum amount for 1 minute",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "boa_sort",
    "name": "Good Luck",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a clover)",
    "duration": "1 minute",
    "concentration": true,
    "ritual": false,
    "description": "The target has advantage on one ability check.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "sentido_feral",
    "name": "Beast Sense",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": true,
    "description": "See and hear through a willing beast's senses for up to 1 hour",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rogar_maldicao",
    "name": "Bestow Curse",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A touched creature is cursed for 1 minute unless it succeeds on a Wisdom saving throw",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mao_arcana",
    "name": "Arcane Hand",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A Large hand of translucent force does as you command: pull (50 feet), squeeze (4d8 bludgeoning) or strike (+8, 4d8 + mod).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "barreira_de_laminas",
    "name": "Blade Barrier",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A vertical wall of magical blades (straight for up to 100x20 feet or a ring 60 feet in diameter): 4d10 slashing damage to those who cross it or are in the area.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "lamina_do_desastre",
    "name": "Blade of Disaster",
    "level": 9,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A rift blade makes 2 melee attacks per turn for 4d12 force damage, critting on 18-20 for 12d12",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "protecao_contra_laminas",
    "name": "Blade Ward",
    "level": 0,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Resistance to bludgeoning, piercing and slashing damage from weapon attacks until your next turn",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "abencoar",
    "name": "Bless",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (holy water)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "3 targets add 1d4 to attacks and saving throws.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "murcha",
    "name": "Wither",
    "level": 4,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Necromantic energy drains moisture: 8d8 necrotic damage (half on a Constitution save); plants and vegetal objects have disadvantage on the save.",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "punicao_cegante",
    "name": "Blinding Smite",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next melee hit deals an extra 3d8 radiant damage; Constitution save or the target is blinded",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "cegueira_surdez",
    "name": "Blindness/Deafness",
    "level": 2,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "One creature; Constitution save or blinded or deafened for 1 minute, re-saving at the end of each turn",
    "classes": [
      "bardo",
      "clerigo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "piscar",
    "name": "Blink",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Roll a d20 at the end of each turn; on 11 or higher you vanish to the Ethereal Plane until your next turn",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "turvar",
    "name": "Blur",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Attackers have disadvantage on attack rolls against you for 1 minute (non-visual senses ignore it)",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ossos_da_terra",
    "name": "Bones of the Earth",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Up to six 5-foot-wide pillars up to 30 feet tall erupt; a creature above is lifted on a failed Dexterity save",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "lamina_estrondosa",
    "name": "Booming Blade",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (5-foot radius)",
    "components": "S, M (a melee weapon worth at least 1 sp)",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Your melee hit deals normal damage, and the target takes 1d8 thunder damage if it willingly moves 5 feet",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "conhecimento_emprestado",
    "name": "Borrowed Knowledge",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a book worth at least 25 gp)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Gain proficiency in one skill you lack for 1 hour",
    "classes": [
      "bardo",
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "marca_da_punicao",
    "name": "Branding Smite",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next weapon hit deals an extra 2d6 radiant damage and stops the target from turning invisible",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "maos_ardentes",
    "name": "Burning Hands",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "15 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Cone of fire, 3d6 (half on Dexterity).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_relampagos",
    "name": "Call Lightning",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A storm cloud calls 3d10 lightning on a point within 5 feet (half on Dexterity) each turn for 10 minutes",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "acalmar_emocoes",
    "name": "Calm Emotions",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "20-foot sphere; Charisma save to suppress charm or fear effects, or make a hostile creature indifferent",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "catapulta",
    "name": "Catapult",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Launch a 1 to 5 pound object up to 90 feet; it and what it strikes each take 3d8 bludgeoning damage",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "soneca",
    "name": "Catnap",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "S, M (a pinch of sand)",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "Up to 3 willing creatures sleep for 10 minutes, gaining the benefit of a short rest",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "causar_medo",
    "name": "Cause Fear",
    "level": 1,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom save or one creature is frightened of you for 1 minute, repeating the save at the end of each turn",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "cerimonia",
    "name": "Ceremony",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (25 gp worth of powdered silver, which the spell consumes)",
    "duration": "Instantaneous (see below)",
    "concentration": false,
    "ritual": true,
    "description": "A 1-hour rite: bless water, coming of age (+1d4 checks), dedication (+1d4 saves), funeral, wedding or atonement",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "relampago_em_cadeia",
    "name": "Chain Lightning",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A bolt hits the target (8d10 lightning damage, half on Dexterity) and leaps to up to 3 other targets within 30 feet of the first.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_de_caos",
    "name": "Chaos Bolt",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ranged attack; 2d8 + 1d6 damage of a random type, leaping to another creature within 30 feet on matching d8s",
    "classes": [
      "feiticeiro"
    ],
    "source": "xge"
  },
  {
    "id": "enfeiticar_monstro",
    "name": "Charm Monster",
    "level": 4,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Wisdom save (advantage if you fight it) or the creature is charmed by you for 1 hour",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "encantar_pessoa",
    "name": "Charm Person",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A humanoid is friendly toward you; save or charmed for 1 hour.",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "toque_necrotico",
    "name": "Chill Touch",
    "level": 0,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Ranged attack; 1d8 necrotic damage, no healing until your next turn, and undead have disadvantage on you",
    "classes": [],
    "source": "phb"
  },
  {
    "id": "orbe_cromatica",
    "name": "Chromatic Orb",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a diamond worth at least 50 gp)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ranged attack; 3d8 damage of acid, cold, fire, lightning, poison or thunder, your choice",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_da_morte",
    "name": "Circle of Death",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A sphere of negative energy in a 60-foot radius: 8d6 necrotic damage (Constitution save; half on a save).",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_de_poder",
    "name": "Circle of Power",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "30-foot aura: advantage on saves vs. magic and no damage on a successful half-damage save",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "clarividencia",
    "name": "Clairvoyance",
    "level": 3,
    "school": "Divination",
    "castingTime": "10 minutes",
    "range": "1 mile",
    "components": "V, S, M (a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "An invisible sensor within 1 mile lets you see or hear through it for up to 10 minutes",
    "classes": [
      "bardo",
      "clerigo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "clone",
    "name": "Clone",
    "level": 8,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Grows an inert clone in a sealed vessel (120 days to adulthood); if you die, your soul moves to the clone, which awakens with 1 hit point.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuvem_de_adagas",
    "name": "Cloud of Daggers",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a sliver of glass)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 5-foot cube of daggers deals 4d4 slashing damage to creatures entering or starting their turn in it",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuven_venenosa",
    "name": "Poisonous Cloud",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A yellowish-green cloud with a 20-foot radius: 5d8 poison damage per turn (Constitution save; half on a save) and heavily obscured vision.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "leque_cromatico",
    "name": "Color Spray",
    "level": 1,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S, M (a pinch of powder or sand that is colored red, yellow, and blue)",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "6d10 hit points worth of creatures in a 15-foot cone are blinded until the end of your next turn",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "enfeiticar_cavalo",
    "name": "Command",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Issues a one-word command: Kneel, Drop, Flee, Halt or Approach.",
    "classes": [
      "bardo",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "comunhao",
    "name": "Communion",
    "level": 5,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M",
    "duration": "1 minute",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: you ask your deity up to 3 yes-or-no questions and receive correct, though not necessarily complete, answers.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "comunhao_com_a_natureza",
    "name": "Commune with Nature",
    "level": 5,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: you merge with nature and learn about the land within a 3-mile radius (terrain, creatures and phenomena, up to 3 specific creatures).",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "duelo_compelido",
    "name": "Compelled Duel",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 bonus action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "One creature has disadvantage attacking others and must save to move more than 30 feet from you",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "compreender_idiomas",
    "name": "Comprehend Languages",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a pinch of soot and incense)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "Understands any spoken or written language.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "compulsao",
    "name": "Compulsion",
    "level": 4,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Creatures that can hear you (failed Wisdom save) must move on their turn in the direction you choose, without provoking opportunity attacks.",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "cone_de_frio",
    "name": "Cone of Cold",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 60-foot cone deals 8d8 cold damage (Constitution save; half on a save); creatures killed by it freeze into chunks of ice.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "confusao",
    "name": "Confusion",
    "level": 4,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 10-foot-radius sphere: each creature makes a Wisdom saving throw or acts randomly (charge, act normally, spend the action trembling, etc.).",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_animais",
    "name": "Conjure Animals",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons beasts (1, 2 or 4) that obey your verbal commands for up to 1 hour",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_rajada",
    "name": "Conjure Barrage",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self (60-foot cone)",
    "components": "V, S, M (one piece of ammunition or a thrown weapon)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "60-foot cone of copies of a weapon; 3d8 damage of that weapon's type (half on Dexterity)",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_celestial",
    "name": "Conjure Celestial",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a celestial of CR 4 or lower in an open visible space; it is friendly to you and your companions.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_elemental",
    "name": "Conjure Elemental",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons an air, earth, fire or water elemental of CR 5 or lower in an adjacent 10-foot cube; it is hostile and must be contained by a magic circle.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_fada",
    "name": "Conjure Fey",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a fey creature of CR 6 or lower, or a fey spirit in beast form of CR 6 or lower, in an open visible space.",
    "classes": [
      "druida",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_elementais_menores",
    "name": "Conjure Minor Elementals",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons elementals in open spaces: 1 with CR of 2 or lower, 2 with CR of 1 or lower, or 4 with CR of 1/2 or lower; they obey you.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_saraivada",
    "name": "Conjure Volley",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (one piece of ammunition or one thrown weapon)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "40-foot-radius, 20-foot-high cylinder; 8d8 damage of the weapon's type (half on Dexterity)",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_seres_da_floresta",
    "name": "Conjure Woodland Beings",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons fey in open spaces: 1 with CR of 2 or lower, 2 with CR of 1 or lower, or 4 with CR of 1/2 or lower; they obey you.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "contato_com_outro_plano",
    "name": "Contact Other Plane",
    "level": 5,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V",
    "duration": "1 minute",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: you contact an entity from another plane; it must resist an Intelligence check (DC 15) or take 2d6 psychic damage and be Mute for an hour.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "contagio",
    "name": "Contagion",
    "level": 5,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "7 days",
    "concentration": false,
    "ritual": false,
    "description": "A magical melee attack infects the creature with a disease of your choice (Exhaustion, Blindness, Fracture, Madness, etc.); a failed Constitution check at the end of each turn applies the effects.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "contingencia",
    "name": "Contingency",
    "level": 6,
    "school": "Evocation",
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M",
    "duration": "10 days",
    "concentration": false,
    "ritual": false,
    "description": "Prepares a spell of 5th level or lower (an action, one that targets you) to trigger automatically when a condition you choose occurs, within 10 days.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chama_continua",
    "name": "Continual Flame",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (ruby dust worth 50 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "A torch-bright flame on an object that gives no heat, uses no oxygen and can't be quenched",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "controlar_chamas",
    "name": "Control Flames",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Alter a nonmagical flame in a 5-foot cube: extend, extinguish, animate or make an image in it",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "controlar_agua",
    "name": "Control Water",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Controls still water in a cube of up to 100 feet: part it, reverse it, raise waves or empty it, repeating the choice each turn.",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "controlar_o_tempo",
    "name": "Control the Weather",
    "level": 8,
    "school": "Transmutation",
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 8 hours",
    "concentration": true,
    "ritual": false,
    "description": "Controls the weather within a 5-mile radius: turn rain into sun, fog, strong wind and storms (10 minutes per change, 8 hours in total).",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "controlar_os_ventos",
    "name": "Control Winds",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Choose a wind effect (gust, downdraft or updraft) in a 100-foot cube for up to 1 hour",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "cordao_de_flechas",
    "name": "Cordon of Arrows",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "5 feet",
    "components": "V, S, M (four or more arrows or bolts)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Four planted ammunitions shoot any creature that comes within 30 feet; Dexterity save or 1d6 piercing",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "contramagica",
    "name": "Counterspell",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 reaction",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Negates a spell of 3rd level or lower within 60 feet.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criar_fogueira",
    "name": "Create Bonfire",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 5-foot bonfire deals 1d8 fire damage (Dexterity save) to creatures entering or starting there",
    "classes": [
      "artifice",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "criar_comida_e_agua",
    "name": "Create Food and Water",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Creates 45 pounds of food and 30 gallons of water, feeding 15 humanoids for 24 hours",
    "classes": [
      "artifice",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "criar_homunculo",
    "name": "Create Homunculus",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Take 2d4 piercing damage to create a homunculus companion that dies when you die",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "criar_magen",
    "name": "Create Magen",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (a vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Creates a magen servant; your hit point maximum drops by its challenge rating (minimum 1), only a Wish restores it",
    "classes": [
      "mago"
    ],
    "source": "rotf"
  },
  {
    "id": "criar_ou_destruir_agua",
    "name": "Create or Destroy Water",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of water if creating water or a few grains of sand if destroying it)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Creates or destroys 10 gallons of water in a container, or makes rain or clears fog in a 30-foot cube",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "criar_elmo_de_navegacao",
    "name": "Create Spelljamming Helm",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a crystal rod worth at least 5000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Transforms an unoccupied Large or smaller chair into a spelljamming helm",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "sps"
  },
  {
    "id": "criar_mortos_vivos",
    "name": "Create Undead",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Only at night: turns up to 3 humanoid corpses into executioners under your control; you can give each one orders as a bonus action.",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criacao",
    "name": "Creation",
    "level": 5,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Special",
    "concentration": false,
    "ritual": false,
    "description": "Pulls material from the Shadows to create a nonliving object (vegetable matter lasts 1 day; mineral, metal and stone last 6 hours).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "coroa_da_loucura",
    "name": "Crown of Madness",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom save or a charmed humanoid must melee attack a creature you choose each turn before moving",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "coroa_de_estrelas",
    "name": "Crown of Stars",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Seven motes orbit your head; a bonus action hurls one for a ranged attack dealing 4d12 radiant damage",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "manto_do_cruzado",
    "name": "Crusader's Mantle",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "30-foot aura; weapon hits deal an extra 1d4 radiant damage for 1 minute",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "curar_feridas",
    "name": "Cure Wounds",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Restores 1d8 + modifier hit points (2d8 at 2nd level, etc.).",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "lux_fogos",
    "name": "Sparks",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, M (a match)",
    "duration": "1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Colored will-o'-wisps; they shed light or produce sound.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "danca_macabra",
    "name": "Danse Macabre",
    "level": 5,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Animates up to 5 corpses as zombies or skeletons adding your spellcasting modifier to attacks, for 1 hour",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "estrela_negra",
    "name": "Dark Star",
    "level": 8,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a shard of onyx and a drop of the caster's blood, both of which the spell consumes)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 40-foot sphere of magical darkness and silence is difficult terrain; Constitution save or 8d10 force damage",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "escuridao",
    "name": "Darkness",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, M (bat fur and a drop of pitch or piece of coal)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A 15-foot sphere of magical darkness spreads for 10 minutes, which darkvision can't see through",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "visao_no_escuro",
    "name": "Darkvision",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (either a pinch of dried carrot or an agate)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "A willing creature gains 60 feet of darkvision for 8 hours",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aurora",
    "name": "Dawn",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a sunburst pendant worth at least 100 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 30-foot-radius, 40-foot-high cylinder of sunlight; 4d10 radiant (half on Constitution), movable as a bonus action",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "luz_do_dia",
    "name": "Daylight",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A 60-foot sphere of bright light (plus 60 feet of dim) dispels darkness from spells of 3rd level or lower",
    "classes": [
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "protecao_contra_morte",
    "name": "Protection from Death",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "The first time the target would drop to 0 hit points from damage, it drops to 1 instead and the spell ends; actions such as spells do not drop it.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bola_de_fogo_atrasada",
    "name": "Delayed Fireball",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A glowing sphere hangs suspended; when you detonate it, it deals 12d6 fire damage (20-foot radius, Dexterity save; half on a save), growing each round it is held.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "demiplano",
    "name": "Demiplane",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Creates a shadowy door to an empty demiplane 30 feet in each dimension, existing for 1 hour; whoever leaves through the doors exits at the origin point.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "onda_destrutiva",
    "name": "Destructive Wave",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "30-foot burst; Constitution save or 5d6 thunder plus 5d6 radiant or necrotic damage and knocked prone",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_o_bem_e_o_mal",
    "name": "Detect Evil and Good",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes you sense aberrations, celestials, elementals, fey, fiends or undead within 30 feet",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_magia",
    "name": "Detect Magic",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": true,
    "ritual": true,
    "description": "Senses magic and magic items within 30 feet.",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_veneno_e_doenca",
    "name": "Detect Poison and Disease",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a yew leaf)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": true,
    "description": "For 10 minutes you sense and identify poisons, poisonous creatures and diseases within 30 feet",
    "classes": [
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_pensamentos",
    "name": "Detect Thoughts",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a copper piece)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Read a creature's surface thoughts within 30 feet; probe deeper with a Wisdom save",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "porta_dimensional",
    "name": "Dimension Door",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "500 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You and up to 5 willing creatures teleport up to 500 feet (a place seen, imagined or described); unwilling beings require a Dexterity check.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "disfarce_alterado",
    "name": "Altered Disguise",
    "level": 1,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (powder for painting)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Changes your appearance (face, body) for 1 hour.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "desintegrar",
    "name": "Disintegrate",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A green ray: 100 force damage (Dexterity save; a failure at 0 hit points disintegrates the target, leaving only ash and items).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "anular_bem_e_mal",
    "name": "Banish Good and Evil",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Protective energy: celestial, elemental, fey, fiendish and undead creatures have disadvantage on attacks against you; you can end it early to banish one of them.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "dissipar_magia",
    "name": "Dispel Magic",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a pinch of amber dust)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Attempts to end an active spell or magic item.",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "sussurros_dissonantes",
    "name": "Dissonant Whispers",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Wisdom save or 3d6 psychic damage and the target uses its reaction to flee from you",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "distorcer_valor",
    "name": "Distort Value",
    "level": 1,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Illusion doubles or halves an object's perceived value for 8 hours; Investigation against your spell DC",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "divinacao",
    "name": "Divination",
    "level": 4,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: with an offering, you ask about an event in the next 7 days and receive a true answer (brief, cryptic or incomplete).",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "favor_divino",
    "name": "Divine Favor",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your weapon attacks deal an extra 1d4 radiant damage for 1 minute",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_divina",
    "name": "Divine Word",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A word of power: a failed Charisma save deals psychic damage (4d8 to creatures with 50 hit points or fewer, up to 20d6 to those with 1) and additional effects (mute, blind or deaf for 1 minute).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "encantar_besta",
    "name": "Charm Beast",
    "level": 4,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom saving throw or the beast is Charmed; you can use a bonus action to command it (attack, move, etc.).",
    "classes": [
      "druida",
      "patrulheiro",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "dominar_monstro",
    "name": "Dominate Monster",
    "level": 8,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom saving throw or the creature (any type) is Charmed; you can give orders with a bonus action each turn.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dominar_pessoa",
    "name": "Dominate Person",
    "level": 5,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom saving throw or the humanoid is Charmed; you can use a bonus action to give direct orders (fight, stay quiet, hand over items).",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transformacao_draconica",
    "name": "Draconic Transformation",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 Bonus Action",
    "range": "Self",
    "components": "V, S, M (a statuette of a dragon, worth at least 500 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Gain 30-foot blindsight, 60-foot fly speed and a 60-foot cone breath weapon (6d8 force, half on Dexterity)",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "sopro_do_dragao",
    "name": "Dragon's Breath",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (a hot pepper)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A touched creature breathes a 15-foot cone dealing 3d6 damage of your chosen type (half on Dexterity)",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocacao_instantanea",
    "name": "Instant Summons",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: marks an object of up to 10 lb with a sapphire; a command (action) teleports it into your hand instantly, wherever it is.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "sonho",
    "name": "Dream",
    "level": 5,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "Special",
    "components": "V, S, M",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "You or a messenger enter the dreams of a creature on the same plane, creating an apparition; in the nightmare version, it sleeps poorly and wakes exhausted (up to 1d4 exhaustion).",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "sonho_do_veu_azul",
    "name": "Dream of the Blue Veil",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "20 feet",
    "components": "V, S, M (a magic item or a willing creature from the destination world)",
    "duration": "6 hours",
    "concentration": false,
    "ritual": false,
    "description": "After 6 hours of visions, you and up to eight willing creatures are transported to another world on the Material Plane",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "bosque_de_druida",
    "name": "Druid Grove",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "10 minutes",
    "range": "Touch",
    "components": "V, S, M (mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Wards a 30- to 90-foot cube for 24 hours with solid fog, grasping undergrowth, up to four awakened tree guardians, and one extra effect",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "oficio_druidico",
    "name": "Druidcraft",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Choose a minor nature effect within 30 feet: bloom a plant, make a harmless sensory sign, or predict the weather for 24 hours",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "diabo_da_poeira",
    "name": "Dust Devil",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a pinch of dust)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A dust devil deals 1d8 bludgeoning damage and pushes creatures 10 feet on a failed Strength save, and you can move it 30 feet as a bonus action",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "tremor_de_terra",
    "name": "Earth Tremor",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (10-foot radius)",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A tremor in a 10-foot radius; Dexterity save or 1d6 bludgeoning damage and knocked prone, with loose ground becoming difficult terrain",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "agarrao_da_terra",
    "name": "Earthbind",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Strength save reduces a creature's flying speed to 0 for 1 minute, making it descend 60 feet per round until it lands",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "terremoto",
    "name": "Earthquake",
    "level": 8,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "500 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Seismic activity in a 100-foot radius for 1 minute: fissures, collapsing structures and falling creatures (Dexterity/Strength saving throws).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "mordido_ardiloso",
    "name": "Crafty Bite",
    "level": 0,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Shadowy ranged attack, 1d10 psychic damage.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "destruicao_elemental",
    "name": "Elemental Bane",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Constitution save; once per turn the target takes an extra 2d6 of the chosen damage type and loses resistance to it for 1 minute",
    "classes": [
      "artifice",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "arma_elemental",
    "name": "Elemental Weapon",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A nonmagical weapon gains +1 to attack rolls and deals an extra 1d4 of your chosen damage type for up to 1 hour",
    "classes": [
      "artifice",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "codificar_pensamentos",
    "name": "Encode Thoughts",
    "level": 0,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Turns a memory, idea, or message into a tangible thought strand that persists for 8 hours and can be read back",
    "classes": [],
    "source": "ggr"
  },
  {
    "id": "inimigos_abundantes",
    "name": "Enemies Abound",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Intelligence save; for 1 minute the target sees all creatures it can see as enemies and picks its targets at random",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "enervacao",
    "name": "Enervation",
    "level": 5,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Failed Dexterity save deals 4d8 necrotic damage (2d8 on a success), and you regain half the damage the spell deals each turn",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "aprimorar_atributo",
    "name": "Enhance Ability",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (fur or a feather from a beast)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Touch grants advantage on checks with one ability score for 1 hour, plus a bonus such as 2d6 temporary hit points or doubled carrying capacity",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aumentar_reduzir",
    "name": "Enlarge/Reduce",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a pinch of powdered iron)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Doubles or halves a target's size for 1 minute (Constitution save to resist), altering Strength checks and weapon damage by 1d4",
    "classes": [
      "artifice",
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_constritor",
    "name": "Ensnaring Strike",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next weapon hit entangles the target in vines (Strength save; advantage if Large or larger), restraining it and dealing 1d6 piercing damage per turn",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "herbacio",
    "name": "Herbaceous",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Plants grow, creatures are in difficult terrain and fall when crossing.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "cativar",
    "name": "Enthrall",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Creatures that hear you fail a Wisdom save and have disadvantage on Perception checks to notice anyone but you for 1 minute",
    "classes": [
      "bardo",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "erupcao_de_terra",
    "name": "Erupting Earth",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a piece of obsidian)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 20-foot cube of churned earth; Dexterity save or 3d12 bludgeoning damage (half on a success), and the ground becomes difficult terrain",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mergulho_no_etereo",
    "name": "Dive into the Ethereal",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "You enter the border of the Ethereal Plane and travel normally for 8 hours, passing through materials and creatures like a ghost.",
    "classes": [
      "bardo",
      "clerigo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tentaculos_negros",
    "name": "Black Tentacles",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Tentacles in a 20-foot square make the terrain difficult; creatures in the area take 3d6 bludgeoning damage and are Restrained (Dexterity saving throw).",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "retirada_acelerada",
    "name": "Expeditious Retreat",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "You can take the Dash action as a bonus action on each of your turns for up to 10 minutes",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "olhos_do_terror",
    "name": "Eyes of Terror",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your eyes gain terrible power: each round you choose a creature within 60 feet — Asleep, Frightened, Maddened or Unconscious (failed Wisdom save).",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fabricar",
    "name": "Fabricate",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "10 minutes",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Turns raw materials into finished goods (rope, clothes, bows, etc.) in a volume of up to 100 cubic feet.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fogo_das_fadas",
    "name": "Faerie Fire",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Objects and creatures in a 20-foot cube that fail a Dexterity save are outlined in light for 1 minute; attacks against them have advantage",
    "classes": [
      "artifice",
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "vitalidade_vazia",
    "name": "False Life",
    "level": 1,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a small amount of alcohol or distilled spirits)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "You gain 1d4 + 4 temporary hit points for 1 hour",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "passo_distante",
    "name": "Far Step",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Teleport up to 60 feet to a visible unoccupied space as a bonus action, repeatable on each of your turns for 1 minute",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "amigos_imediatos",
    "name": "Fast Friends",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A humanoid that fails a Wisdom save is charmed for 1 hour and performs any safe service you ask of it to the best of its ability",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "medo",
    "name": "Fear",
    "level": 3,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self (30-foot cone)",
    "components": "V, S, M (a white feather or the heart of a hen)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Creatures in a 30-foot cone that fail a Wisdom save drop what they hold and are frightened, forced to Dash away from you for 1 minute",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "queda_suave",
    "name": "Feather Fall",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 reaction, which you take when you or a creature within 60 feet of you falls",
    "range": "60 feet",
    "components": "V, M (a small feather or piece of down)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Up to five falling creatures slow to 60 feet per round, take no falling damage, and land on their feet",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mente_ceifada",
    "name": "Reaped Mind",
    "level": 8,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "4d6 psychic damage and a failed Intelligence save leaves the creature with Intelligence and Charisma 1 (only Greater Dispel restores them).",
    "classes": [
      "bardo",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fingir_morte",
    "name": "Feign Death",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of graveyard dirt)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "A willing creature appears dead, with speed 0, blinded, incapacitated, and resistant to all damage except psychic, for 1 hour",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "encontrar_familiar",
    "name": "Find Familiar",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 hour",
    "range": "10 feet",
    "components": "V, S, M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Summons a loyal animal-form familiar that obeys you, shares its senses, and can deliver your touch spells",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "encontrar_montaria_maior",
    "name": "Find Greater Steed",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Summons a loyal mount such as a griffon, pegasus, or dire wolf that you control in combat and can re-summon fully healed",
    "classes": [
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "encontrar_montaria",
    "name": "Find Steed",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Summons a loyal warhorse, pony, camel, elk, or mastiff that you control in combat and can re-summon fully healed",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "encontrar_o_caminho",
    "name": "Find the Path",
    "level": 6,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 24 hours",
    "concentration": true,
    "ritual": false,
    "description": "You know the most direct route to a fixed, familiar place on the same plane; for places on another plane, it only tells whether the path exists.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "localizar_armadilhas",
    "name": "Find Traps",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You sense the presence and general nature of any trap within 120 feet that you can see",
    "classes": [
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "dedo_da_morte",
    "name": "Finger of Death",
    "level": 7,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Negative energy: 7d8 + 30 necrotic damage (Constitution save; half on a save); a creature reduced to 0 hit points by it dies.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_de_fogo",
    "name": "Ray of Fire",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Fire projectile; ranged attack, 1d10 fire damage.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_de_fogo",
    "name": "Fire Shield",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "Flames surround you (light in 10 feet); a touch deals 2d8 fire or cold damage (you choose), or you can deal the same damage when hit in melee.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tempestade_de_fogo",
    "name": "Firestorm",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A storm of flames in up to 10 adjacent 10-foot cubes: 7d10 fire damage (Dexterity save; half on a save).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "bola_fogo",
    "name": "Fireball",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a pinch of typhoon dust)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "20-foot sphere; 8d6 fire (half on Dexterity, doubled on a failure).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_de_platina_de_fizban",
    "name": "Fizban's Platinum Shield",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a platinum-plated dragon scale, worth at least 500 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A creature gains half cover, resistance to acid, cold, fire, lightning, and poison, and evasion for 1 minute",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "flechas_de_chama",
    "name": "Flame Arrows",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A quiver's ammunition deals an extra 1d6 fire damage on a hit, for up to 12 pieces, for up to 1 hour",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "espada_flamejante",
    "name": "Flaming Blade",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (a cheap metal sword)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Creates a fire weapon you wield with a bonus action.",
    "classes": [
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_de_fogo",
    "name": "Fire Strike",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A divine column of fire in a 10-foot-radius cylinder: 4d6 fire + 4d6 radiant damage (Dexterity save; half on a save).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_chamas",
    "name": "Sphere of Flames",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a ball of grease)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "5-foot fire sphere; 2d6 per turn (Dexterity).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "carne_em_pedra",
    "name": "Flesh to Stone",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Failed Constitution save: the creature is Restrained while it hardens; failing again (or 3 failures in a row) petrifies it completely.",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "bando_de_familiares",
    "name": "Flock of Familiars",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons three familiars (one fewer if you already have one) that share their senses and can deliver touch spells for up to 1 hour",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "voar",
    "name": "Fly",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (an eagle's feather)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Target flies with a flying speed of 60 feet.",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuvem_de_nevoa",
    "name": "Fog Cloud",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Creates a 20-foot-radius sphere of fog that heavily obscures its area for up to 1 hour or until a moderate wind disperses it",
    "classes": [
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "interdicao",
    "name": "Interdiction",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "10 minutes",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: protects up to 40,000 square feet against teleportation and portals; creatures that cross the boundary by magic take 5d12 radiant or necrotic damage.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "jaula_de_forca",
    "name": "Force Cage",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "100 feet",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "An invisible force prison (open cage or solid box, up to 20 feet): no object passes through, creatures cannot teleport inside; the box blocks even divination.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "previsao",
    "name": "Foresight",
    "level": 9,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "For 8 hours the target cannot be surprised and has advantage on attacks, checks and saving throws; others have disadvantage against it.",
    "classes": [
      "bardo",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "favor_da_fortuna",
    "name": "Fortune's Favor",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "60 feet",
    "components": "V, S, M (a white pearl worth at least 100 gp, which the spell consumes)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Before the spell ends, a creature can roll an extra d20 on one attack, check, save, or roll made against it and choose which to use",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "liberdade_de_movimento",
    "name": "Freedom of Movement",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "For 1 hour the target ignores difficult terrain, has its speed never reduced, and cannot be Paralyzed or Restrained by magic.",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "amigos",
    "name": "Friends",
    "level": 0,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "Self",
    "components": "S, M (a small amount of makeup applied to the face as this spell is cast)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Advantage on Charisma checks against one nonhostile creature for 1 minute, which realizes you used magic and becomes hostile",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dedos_gelidos",
    "name": "Frost Fingers",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Freezing cold blasts a 15-foot cone; Constitution save or 2d8 cold damage (half on a success), freezing nonmagical liquids",
    "classes": [
      "mago"
    ],
    "source": "rotf"
  },
  {
    "id": "brilho_radiante",
    "name": "Radiant Glow",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "5 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Arcane spark (cold ray or lightning) with a minor elemental effect.",
    "classes": [
      "artifice",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "correio_veloz_de_galder",
    "name": "Galder's Speedy Courier",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S, M (25 gold pieces, or mineral goods of equivalent value, which the spell consumes)",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "Summons an invisible air elemental that delivers a chest of your items to a creature you know within 10 minutes",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "torre_de_galder",
    "name": "Galder's Tower",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V, S, M (a fragment of stone, wood, or other building material)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Conjures a two-story tower with 10-foot levels of up to 100 square feet for 24 hours; daily casting for a year makes it permanent",
    "classes": [
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "forma_gasosa",
    "name": "Gaseous Form",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a bit of gauze and a wisp of smoke)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature becomes a mist with 10-foot fly speed, resistance to nonmagical damage, and advantage on Str, Dex, and Con saves for 1 hour",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "portal",
    "name": "Portal",
    "level": 9,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Opens a circular portal (5 to 20 feet) to a precise place on another plane; you can summon a specific creature by speaking its true name.",
    "classes": [
      "clerigo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "selo_de_portal",
    "name": "Gate Seal",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "60 feet",
    "components": "V, S, M (a broken portal key, which the spell consumes)",
    "duration": "24 Hours",
    "concentration": false,
    "ritual": false,
    "description": "Portals in a 30-foot cube can't be opened for 24 hours, and planar travel into or out of the area fails",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "planescape"
  },
  {
    "id": "geaso",
    "name": "Geas",
    "level": 5,
    "school": "Enchantment",
    "castingTime": "1 minute",
    "range": "60 feet",
    "components": "V",
    "duration": "30 days",
    "concentration": false,
    "ritual": false,
    "description": "Imposes a magical order for 30 days; whoever disobeys takes 5d10 psychic damage (once per day) and the spell ends.",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "repouso_suave",
    "name": "Gentle Repose",
    "level": 2,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of salt and one copper piece placed on each of the corpse’s eyes, which must remain there for the duration)",
    "duration": "10 days",
    "concentration": false,
    "ritual": true,
    "description": "A corpse can't decay or become undead for 10 days, and those days don't count against spells that raise the dead",
    "classes": [
      "clerigo",
      "paladino",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "inseto_gigante",
    "name": "Giant Insect",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Transforms centipedes, spiders, wasps or a scorpion into giant versions (e.g. giant spider) that obey you.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "dom_da_presteza",
    "name": "Gift of Alacrity",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "A willing creature adds 1d8 to its initiative rolls for 8 hours",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "dom_da_labia",
    "name": "Gift of Gab",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 reaction, which you take when you speak to another creature",
    "range": "Self",
    "components": "V, S, M (2 gold coins, which is consumed as tax for using the spell)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "As a reaction when you speak, creatures within 5 feet of you forget what you said in the last 6 seconds",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "desenvoltura",
    "name": "Poise",
    "level": 8,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "For 1 hour you replace the result of Charisma checks with 15 and truth spells always consider you sincere.",
    "classes": [
      "bardo",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "globo_de_invulnerabilidade",
    "name": "Globe of Invulnerability",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A motionless 10-foot barrier: spells of 5th level or lower cast from outside do not affect those inside; you can cast normally from within.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "glifo_de_protecao",
    "name": "Glyph of Warding",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (incense and powdered diamond worth at least 200 gp, which the spell consumes)",
    "duration": "Until dispelled or triggered",
    "concentration": false,
    "ritual": false,
    "description": "Inscribes a hidden triggerable glyph that erupts for 5d8 damage in a 20-foot sphere or releases a stored spell of 3rd level or lower",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "frutos_beneficos",
    "name": "Goodberry",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a sprig of mistletoe)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ten magic berries appear; eating one restores 1 hit point and feeds a creature for a day, but they expire within 24 hours",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "vinha_agarradora",
    "name": "Grasping Vine",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A vine pulls a creature that fails a Dexterity save 20 feet toward it, and can lash out again as a bonus action each turn",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "fissura_gravitacional",
    "name": "Gravity Fissure",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (100-foot line)",
    "components": "V, S, M (a fistful of iron filings)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 100-foot line deals 8d8 force damage on a failed Constitution save (half on a success), and nearby creatures are pulled into it",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "sumidouro_gravitacional",
    "name": "Gravity Sinkhole",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a black marble)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 20-foot sphere of crushing force; Constitution save or 5d10 force damage and pulled to its center (half damage on a success)",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "escorregadio",
    "name": "Grease",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of grease)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "A slick of ice on the ground; creatures fall when they enter.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "invisibilidade_maior",
    "name": "Greater Invisibility",
    "level": 4,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "You or a touched creature becomes invisible (including everything it wears and carries) until the duration ends.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "restauracao_maior",
    "name": "Greater Restoration",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Neutralizes a debilitating condition: 1 level of exhaustion, charm/petrification, curse, blindness or magical deafness.",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "lamina_de_chama_verde",
    "name": "Green-Flame Blade",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (5-foot radius)",
    "components": "S, M (a melee weapon worth at least 1 sp)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A melee hit deals normal weapon damage and leaps green fire to another creature within 5 feet for your spellcasting ability modifier damage",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "guardiao_da_fe",
    "name": "Guardian of Faith",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "A spectral guardian occupies an open space; hostile creatures that approach take 20 radiant damage and the guardian vanishes.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "guardiao_da_natureza",
    "name": "Guardian of Nature",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Bonus action: assume a Primal Beast (extra 10-foot speed, Strength save advantage, 1d8 force melee hits) or Great Tree (15 temporary hit points) for 1 minute",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "salvaguardas",
    "name": "Safeguards",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "10 minutes",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Protects up to 2,500 square feet: magical locks, confusing corridors, key doors, alarms and other safeguards of your choice.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "guia",
    "name": "Guidance",
    "level": 0,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 round",
    "concentration": true,
    "ritual": false,
    "description": "The target adds 1d4 to its next ability check.",
    "classes": [
      "artifice",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "guia_sagrada",
    "name": "Guided Bolt",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Ranged attack; 4d6 radiant damage and the next attack against the target has advantage.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "sopro",
    "name": "Gust",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Push a Medium or smaller creature 5 feet on a failed Strength save, push an unattended object up to 5 pounds 10 feet, or make a harmless wind effect",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sopro_de_vento",
    "name": "Gust of Wind",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (60-foot line)",
    "components": "V, S, M (a legume seed)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 60-foot line of wind pushes creatures 15 feet on a failed Strength save and makes moving toward you cost double movement for 1 minute",
    "classes": [
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chuva_de_espinhos",
    "name": "Hail of Thorns",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next ranged hit bursts thorns; the target and creatures within 5 feet make a Dexterity save or take 1d10 piercing damage",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "consagrar",
    "name": "Consecrate",
    "level": 5,
    "school": "Evocation",
    "castingTime": "24 hours",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Hallows an area (60-foot radius) for 36 hours: undead and fiends cannot enter; chosen creatures have disadvantage on Charisma checks against magic.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "terreno_alucinatorio",
    "name": "Hallucinatory Terrain",
    "level": 4,
    "school": "Illusion",
    "castingTime": "10 minutes",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "A 150-foot cube of natural terrain looks, sounds and smells different; creatures that examine closely notice the illusion with a check.",
    "classes": [
      "bardo",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "maleficio",
    "name": "Malediction",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Unleashes a virulent disease: 14d6 necrotic damage (Constitution save; half on a save), limited to the target's maximum hit points; a creature reduced to half hit points becomes Sickened.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "velocidade",
    "name": "Haste",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of turpentine)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "+40 feet of speed, an extra action and +2 AC.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "curar",
    "name": "Heal",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "The target regains 70 hit points and ends blindness, deafness and diseases; it does not work on constructs or undead.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "espirito_curativo",
    "name": "Healing Spirit",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A spirit restores 1d6 hit points to a creature that enters or starts in its space, up to 1 + your spellcasting modifier times",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_curativa",
    "name": "Healing Word",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Restores 1d4 + modifier hit points at range with a bonus action.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "aquecer_metal",
    "name": "Heat Metal",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a piece of iron and a flame)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A metal object deals 2d8 fire damage to creatures in contact when cast and as a bonus action each turn; Constitution save to drop it",
    "classes": [
      "artifice",
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "replica_infernal",
    "name": "Hellish Rebuke",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 reaction, which you take when you are damaged by a creature within 60 feet of you that you can see",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Reaction: the creature that damaged you makes a Dexterity save and takes 2d10 fire damage, or half as much on a success",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "banquete_de_herois",
    "name": "Hero's Feast",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A banquet for up to 13 creatures: after 1 hour of eating, maximum hit points +2d10, immunity to poison and advantage on Wisdom checks for 24 hours.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "heroismo",
    "name": "Heroism",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature is immune to being frightened and gains temporary hit points equal to your spellcasting modifier each turn for 1 minute",
    "classes": [
      "bardo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "maldicao",
    "name": "Hex",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 bonus action",
    "range": "90 feet",
    "components": "V, S, M (the petrified eye of a newt)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Your attacks deal an extra 1d6 necrotic damage to the cursed target, which has disadvantage on checks with one ability for up to 1 hour",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "imobilizar_monstro",
    "name": "Hold Monster",
    "level": 5,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom saving throw or the creature is Paralyzed; it repeats the save at the end of each turn. Does not affect undead.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "imobilizar_pessoa",
    "name": "Hold Person",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a small, straight piece of iron)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A humanoid that fails a Wisdom save is paralyzed for 1 minute and can repeat the save at the end of each of its turns",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aura_sagrada",
    "name": "Sacred Aura",
    "level": 8,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Holy light in 30 feet: chosen creatures have advantage on saving throws and glow; undead and fiends that attack you in melee have disadvantage and are blinded on a failed Constitution save.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "arma_sagrada",
    "name": "Holy Weapon",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A weapon sheds 30 feet of bright light and deals an extra 2d8 radiant damage for 1 hour; dismissing it deals 4d8 radiant damage in 30 feet",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "fome_de_hadar",
    "name": "Hunger Of Hadar",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a pickled octopus tentacle)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 20-foot sphere blocks light, blinds, is difficult terrain, and deals 2d6 cold damage at the start of turns and 2d6 acid damage at the end",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "marca_do_cacador",
    "name": "Hunter's Mark",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 bonus action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Your weapon attacks deal an extra 1d6 damage to the marked target, and you have advantage on checks to find it, for up to 1 hour",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "padrao_hipnotico",
    "name": "Hypnotic Pattern",
    "level": 3,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "S, M (a glowing stick of incense or a crystal vial filled with phosphorescent material)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Creatures in a 30-foot cube that fail a Wisdom save are charmed, incapacitated, and have speed 0 until damaged or shaken awake",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "estilhaco_de_gelo",
    "name": "Ice Knife",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S, M (a drop of water or piece of ice)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ranged attack for 1d10 piercing damage, then explodes: the target and creatures within 5 feet make a Dexterity save or take 2d6 cold damage",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "tempestade_de_gelo",
    "name": "Ice Storm",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Hail in a 20-foot-radius cylinder: 2d8 bludgeoning and 4d6 cold damage (Dexterity save; half on success, no bludgeoning damage on a success).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "identificar",
    "name": "Identify",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (a pearl worth at least 100 gp and an owl feather)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Touch reveals a magic item's properties, attunement requirements, charges, and spells affecting it or a touched creature",
    "classes": [
      "artifice",
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dragao_ilusorio",
    "name": "Illusory Dragon",
    "level": 8,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A Huge shadow dragon frightens enemies (Wisdom save) and breathes a 60-foot cone dealing 7d6 of your chosen damage type (Intelligence save)",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "escrita_ilusoria",
    "name": "Illusory Script",
    "level": 1,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "S, M (a lead-based ink worth at least 10 gp, which the spell consumes)",
    "duration": "10 days",
    "concentration": false,
    "ritual": true,
    "description": "Writing reads as an unintelligible magical script to others but conveys your intended meaning to you and chosen creatures for 10 days",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "imolacao",
    "name": "Immolation",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Dexterity save or 8d6 fire damage and the target keeps burning for 4d6 more each turn until it saves, for up to 1 minute",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "objeto_imovel",
    "name": "Immovable Object",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (gold dust worth at least 25 gp, which the spell consumes)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "An object of up to 10 pounds is fixed in place for 1 hour, holding up to 4,000 pounds when airborne",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "aprisionar",
    "name": "Imprison",
    "level": 9,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Imprisons a creature (Wisdom save) in movement, stasis, slowness, prison or banishment; a 500 gp gemstone serves as the component and is destroyed.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuvem_incendiaria",
    "name": "Incendiary Cloud",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A cloud of smoke and embers with a 20-foot radius: 10d8 fire damage per turn to those inside (Dexterity save; half on a save).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "incitar_ganancia",
    "name": "Incite Greed",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a gem worth at least 50 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Creatures that fail a Wisdom save are charmed and creep toward you, stopping to stare at your gem within 5 feet for 1 minute",
    "classes": [
      "clerigo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "convocar_diabo",
    "name": "Infernal Calling",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "90 feet",
    "components": "V, S, M (a ruby worth at least 999 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a challenge rating 6 or lower devil for 1 hour that obeys only if your Charisma check beats its Wisdom (Insight)",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "infestacao",
    "name": "Infestation",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a living flea)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Constitution save or 1d6 poison damage, and the target moves 5 feet in a random direction",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "feridas_causadas",
    "name": "Inflict Wounds",
    "level": 1,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Melee spell attack; 3d10 necrotic damage.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "praga_de_insetos",
    "name": "Plague of Insects",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A swarm of locusts in a 20-foot sphere: difficult terrain, lightly obscured vision and 4d10 bludgeoning damage per turn to those inside (Dexterity save).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "fortaleza_do_intelecto",
    "name": "Intellect Fortress",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "You or a willing creature gains resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saves for 1 hour",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "investidura_das_chamas",
    "name": "Investiture of Flame",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes you are immune to fire, resist cold, burn creatures within 5 feet for 1d10 fire damage, and can breathe a 15-foot line of fire (4d8, Dexterity save)",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "investidura_do_gelo",
    "name": "Investiture of Ice",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes you are immune to cold, resist fire, the ground within 10 feet is difficult terrain, and you can exhale a 15-foot cone (4d6, Constitution save)",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "investidura_da_pedra",
    "name": "Investiture of Stone",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes you resist nonmagical physical damage, can cause a 15-foot earthquake (Dexterity save or knocked prone), and move through earth and stone",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "investidura_do_vento",
    "name": "Investiture of Wind",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes ranged attacks against you have disadvantage, you gain a 60-foot flying speed, and you can create a 15-foot cube of wind (2d10, Constitution save)",
    "classes": [
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invisibilidade",
    "name": "Invisibility",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a glass lens)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Target invisible; broken by an attack or a spell.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "invulnerabilidade",
    "name": "Invulnerability",
    "level": 9,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a small piece of adamantine worth at least 500 gp, which the spell consumes)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "You are immune to all damage for up to 10 minutes",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "moeda_brilhante_de_jim",
    "name": "Jim's Glowing Coin",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S, M (a coin, 2 gold coins, which is consumed as tax for using the spell)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "A glowing coin distracts creatures within 30 feet that fail a Wisdom save, giving them disadvantage on Perception checks and initiative for 1 minute",
    "classes": [
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "misseis_magicos_de_jim",
    "name": "Jim's Magic Missile",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (1 gold coin, which is consumed as tax for using the spell)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Three darts make ranged attacks for 2d4 force damage each (5d4 on a critical); a natural 1 makes all three hit you for 1 force damage each",
    "classes": [
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "salto",
    "name": "Jump",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a grasshopper's leg)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "The target jumps three times as far.",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "impulso_cinetico",
    "name": "Kinetic Jaunt",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "For 1 minute your speed increases by 10 feet, you don't provoke opportunity attacks, and you can pass through creatures (1d8 force damage if you stop there)",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "arrombar",
    "name": "Knock",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Unlocks, unstucks, or unbars one object (suppresses Arcane Lock for 10 minutes); a loud knock sounds 300 feet away",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lenda",
    "name": "Legend",
    "level": 5,
    "school": "Divination",
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Names a person, place or object and receives a summary of the legendary knowledge about it (current, forgotten or secret).",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "cofre_secreto",
    "name": "Secret Chest",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Hides a chest and its contents in the Ethereal Plane; using the replica, you summon it back (within 20 feet of the spot).",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequeno_refugio",
    "name": "Leomund's Tiny Hut",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 minute",
    "range": "Self (10-foot-radius hemisphere)",
    "components": "V, S, M (a small crystal bead)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": true,
    "description": "Immobile 10-foot-radius dome shelters up to 9 Medium creatures for 8 hours; comfortable inside, opaque from outside",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "restauracao_menor",
    "name": "Lesser Restoration",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Touch ends one disease or one condition: blinded, deafened, paralyzed, or poisoned",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "levitacao",
    "name": "Levitate",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "One creature or loose object up to 500 pounds rises 20 feet and moves by pushing against fixed surfaces (Constitution save negates)",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transmissao_de_vida",
    "name": "Life Transference",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You take 4d8 unreducible necrotic damage; a creature you see regains hit points equal to twice that amount",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "luz",
    "name": "Light",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, M (a rod of light)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "An object glows like a torch (20 feet of bright light and 20 feet of dim light).",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "flecha_de_relampago",
    "name": "Lightning Arrow",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next ranged weapon attack becomes lightning: 4d8 (half on a miss), plus 2d8 to creatures within 10 feet (Dexterity save)",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "relampago",
    "name": "Lightning Bolt",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a fan tail feather)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "100-foot line of lightning; 2d8 lightning damage (half on Dexterity).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "isca_de_relampago",
    "name": "Lightning Lure",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (15-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Strength save or be pulled up to 10 feet toward you, taking 1d8 lightning damage if it ends within 5 feet of you",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "localizar_animais_ou_plantas",
    "name": "Locate Animals or Plants",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a bit of fur from a bloodhound)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Learn the direction and distance to the closest beast or plant of a chosen kind within 5 miles",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "localizar_criatura",
    "name": "Locate Creature",
    "level": 4,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Senses the direction of a familiar creature within 1,000 feet; if it moves, you know where it goes.",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "localizar_objeto",
    "name": "Locate Object",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a forked twig)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Sense the direction to a familiar object or the nearest object of a kind within 1,000 feet (any lead blocks it)",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "passos_largos",
    "name": "Longstrider",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of dirt)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Touch a creature; its speed increases by 10 feet for 1 hour",
    "classes": [
      "artifice",
      "bardo",
      "druida",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escuridao_enlouquecedora",
    "name": "Maddening Darkness",
    "level": 8,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, M (a drop of pitch mixed with a drop of mercury)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Magical darkness in a 60-foot radius blocks darkvision and light of 8th level or lower; creatures starting a turn there take 8d8 psychic (Wisdom save)",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "maelstrom",
    "name": "Maelstrom",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (paper or leaf in the shape of a funnel)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A swirling 30-foot-radius mass of water is difficult terrain; creatures starting their turn there take 6d6 bludgeoning and are pulled 10 feet inward (Strength save)",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "armadura_magica",
    "name": "Mage Armor",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a sewing needle)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "An unarmored target has AC 13 + DEX modifier.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "magem_maos",
    "name": "Mage Hand",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "A weak spectral hand that manipulates objects at a distance.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_magico",
    "name": "Magic Circle",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, S, M (holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A 10-foot-radius, 20-foot-tall cylinder of magic wards celestials, elementals, fey, fiends, or undead for 1 hour, either keeping them in or out",
    "classes": [
      "clerigo",
      "paladino",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "frasco_magico",
    "name": "Magic Flask",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 minute",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Your soul leaves the body and enters a flask; you can possess a creature within 120 feet (Charisma save), but the original body is left helpless.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "misseis_magicos",
    "name": "Magic Missile",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "3 glowing darts; automatic hit, 1d4 + 1 damage each.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "boca_encantada",
    "name": "Magic Mouth",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M (a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": true,
    "description": "Imprints a message of up to 25 words on an object, spoken aloud by a magical mouth when a chosen trigger occurs",
    "classes": [
      "artifice",
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pedra_magica",
    "name": "Magic Stone",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Enchant 1–3 pebbles: thrown or slung ranged spell attacks deal 1d6 + your spellcasting modifier bludgeoning damage",
    "classes": [
      "artifice",
      "druida",
      "bruxo"
    ],
    "source": "xge"
  },
  {
    "id": "arma_magica",
    "name": "Magic Weapon",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Touch a nonmagical weapon; it gains a +1 bonus to attack and damage rolls for the duration",
    "classes": [
      "artifice",
      "paladino",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "gravidade_ampliada",
    "name": "Magnify Gravity",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Gravity surges in a 10-foot sphere: 2d8 force damage and halved speed (Constitution save for half damage only); unsecured objects become hard to move",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "imagem_maior",
    "name": "Major Image",
    "level": 3,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A 20-foot-cube image with sound, smell, and temperature lasts for the duration; Investigation reveals it as an illusion",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "cura_em_massa",
    "name": "Mass Cure",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Up to 6 creatures in a 30-foot sphere regain 3d8 + the spellcasting ability modifier hit points.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "cura_massiva",
    "name": "Mass Cure",
    "level": 9,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Restores up to 700 hit points divided as you wish among visible creatures and cures all diseases and magical blindness/deafness.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_curativa_em_massa",
    "name": "Mass Healing Word",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Up to six creatures you see regain 1d4 + your spellcasting modifier hit points (no effect on undead or constructs)",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "polimorfia_em_massa",
    "name": "Mass Polymorph",
    "level": 9,
    "school": "Transmutation",
    "castingTime": "1 Action",
    "range": "120 feet",
    "components": "V, S, M (a caterpillar cocoon)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Transforms up to 10 creatures into beasts you have seen (Wisdom save negates), granting temp hit points equal to the new form's",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sugestao_em_massa",
    "name": "Mass Suggestion",
    "level": 6,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Suggests an activity (one or two sentences) to up to 12 creatures that can hear and understand you; they follow the suggestion for 24 hours or until the task is done.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "garra_terrestre_de_maximillian",
    "name": "Maximillian's Earthen Grasp",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a miniature hand sculpted from clay)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A Medium earth hand restrains a creature within 5 feet (Strength save) for 2d6 bludgeoning; you can crush it again each turn",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "labirinto",
    "name": "Labyrinth",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Banes a creature into a labyrinthine demiplane for 10 minutes; it escapes only with an action and a DC 20 Intelligence check, or with magic such as Planejamento.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mesclar_se_as_rochas",
    "name": "Meld into Stone",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": true,
    "description": "You merge into stone for 8 hours, undetectable; expulsion by its destruction deals 6d6, or 50, bludgeoning damage",
    "classes": [
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "flecha_acida_de_melf",
    "name": "Melf's Acid Arrow",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (powdered rhubarb leaf and an adder’s stomach)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ranged spell attack deals 4d4 acid immediately and 2d4 at the end of the target's next turn (half initial damage on a miss)",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequenos_meteoros_de_melf",
    "name": "Melf's Minute Meteors",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (niter, sulfur, and pine tar formed into a bead)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Six meteors orbit you; as a bonus action you hurl up to 2, each exploding for 2d6 fire in a 5-foot radius (Dexterity save)",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "reparar",
    "name": "Mending",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M (two lodestones)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Repairs one break or tear in an object up to 1 foot in any dimension, leaving no trace of the damage",
    "classes": [
      "artifice",
      "bardo",
      "clerigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "prisao_mental",
    "name": "Mental Prison",
    "level": 6,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Intelligence save or 5d10 psychic damage and restraint by an illusion; touching or moving through it deals 10d10 psychic",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mensagem",
    "name": "Message",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a short piece of copper wire)",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Whisper to one creature within 120 feet and hear its reply; blocked by 1 foot of stone, 1 inch of metal, or 3 feet of wood",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "enxame_de_meteoros",
    "name": "Swarm of Meteors",
    "level": 9,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "1 mile",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Four fireballs explode at points up to 1 mile away: 40-foot spheres with 20d6 fire damage each (Dexterity save; half on a save).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fortaleza_poderosa",
    "name": "Mighty Fortress",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "1 mile",
    "components": "V, S, M (a diamond worth at least 500 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 120-foot stone fortress with four turrets, a keep, and 100 invisible servants appears and lasts 7 days",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mente_em_branco",
    "name": "Blank Mind",
    "level": 8,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "For 24 hours the target is immune to psychic damage, thought reading, enchantment, divination and even Wish itself (unless you are the caster).",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lasca_mental",
    "name": "Mind Sliver",
    "level": 0,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Intelligence save or 1d6 psychic damage and the target subtracts 1d4 from its next saving throw",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "golpe_mental",
    "name": "Mind Spike",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom save or 3d8 psychic damage; on a failed save you always know the target's location while on the same plane",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "ilusao_menor",
    "name": "Minor Illusion",
    "level": 0,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a thread)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "A sound, image, or small sensory illusion.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "miragem_arcana",
    "name": "Arcane Mirage",
    "level": 7,
    "school": "Illusion",
    "castingTime": "10 minutes",
    "range": "Sight",
    "components": "V, S",
    "duration": "10 days",
    "concentration": false,
    "ritual": false,
    "description": "Changes the appearance of up to 1 square mile of terrain (it looks, smells and sounds different) but keeps the general shape; people who touch it notice the illusion.",
    "classes": [
      "bardo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "espelho_sombrio",
    "name": "Opposite Image",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "3 illusory images; an attack misses or is redirected.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "engano",
    "name": "Deception",
    "level": 5,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "You become invisible and an illusory double appears in your place; it lasts 1 hour and you can move it as an action, but attacking or casting breaks the invisibility.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "passo_nebuloso",
    "name": "Misty Step",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Teleport up to 30 feet to an unoccupied space you can see",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "modificar_memoria",
    "name": "Modify Memory",
    "level": 5,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom saving throw (with advantage if you are fighting it) or it becomes Charmed; you choose the memory and can remove or alter it.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "moldar_terra",
    "name": "Mold Earth",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Manipulate a 5-foot cube of dirt or stone: excavate, reshape, move, or decorate it, with some effects lasting 1 hour",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "raio_lunar",
    "name": "Moonbeam",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A silvery beam fills a 5-foot-radius, 40-foot-high cylinder, dealing 2d10 radiant (Constitution save for half) on entry or turn start; shapechangers revert",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "cao_de_guarda_leal",
    "name": "Faithful Guard Dog",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "An invisible spectral guard dog (except to you); it barks and bites whoever comes within 5 feet (4d8 piercing damage every 30 seconds).",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mansao_magnifica",
    "name": "Magnificent Mansion",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Conjures an extradimensional dwelling (13 guests + magical servants) with an entrance in a 5x10-foot shimmer; it lasts 24 hours.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "santuario_particular",
    "name": "Private Sanctuary",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "10 minutes",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Makes an area (a cube of 5 to 100 feet) safe: magical barriers block passage, sound and light enter only if you allow it, creatures cannot be divined by magic.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "espada_arcana",
    "name": "Arcane Sword",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A force sword floats and attacks at your command (3d10 force damage per hit, +8 to attack) and does not provoke opportunity attacks.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "discurso_motivador",
    "name": "Motivational Speech",
    "level": 3,
    "school": "Enchantment",
    "castingTime": "1 minute",
    "range": "60 feet",
    "components": "V",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Up to five creatures gain 5 temporary hit points and advantage on Wisdom saves; once hit, advantage on their next attack roll",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "ai"
  },
  {
    "id": "mover_a_terra",
    "name": "Move the Earth",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 2 hours",
    "concentration": true,
    "ritual": false,
    "description": "Shapes earth, sand or mud in an area of up to 40 feet: raise or lower terrain, open trenches, raise parapets and topple structures.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "travessuras_de_nathair",
    "name": "Nathair's Mischief",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 Action",
    "range": "60ft",
    "components": "S, M (a piece of crust from an apple pie)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Fill a 20-foot cube with fey magic, rolling on the Mischievous Surge table for a random effect at the start of each turn",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "inundacao_de_energia_negativa",
    "name": "Negative Energy Flood",
    "level": 5,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, M (a broken bone and a square of black silk)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Constitution save or 5d12 necrotic; a slain target rises as a zombie, while an undead target gains half the roll as temp hit points",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "indetectavel",
    "name": "Nondetection",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Hides a touched creature, place, or object (up to 10 feet) from divination magic and scrying sensors for 8 hours",
    "classes": [
      "bardo",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "manto_do_esquecimento",
    "name": "Cloak of Forgetfulness",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a towel)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Creates a field that prevents divination.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_congelante",
    "name": "Freezing Sphere",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A globe of cold explodes in a 60-foot radius: 10d6 cold damage (Constitution save; half on a save) and can freeze water 6 inches deep.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_resistente",
    "name": "Resilient Sphere",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A force sphere encloses a Large or smaller creature or object (Dexterity save); it is impervious to magic and floats, but the target can breathe.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "danca_irresistivel",
    "name": "Irresistible Dance",
    "level": 6,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "The creature dances without stopping: it cannot react, has disadvantage on saving throws and AC, and takes +2d6 damage from whoever attacks it.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "anjos_terror",
    "name": "Pass without Trace",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": true,
    "ritual": false,
    "description": "The target leaves no tracks and cannot be tracked by magic.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "passagem",
    "name": "Passage",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Opens a passage up to 5 feet wide, 8 feet high and 20 feet deep in a surface of wood, plaster or stone; screw heads keep it closed to those who do not know the word of exclusion.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "forca_espectral",
    "name": "Phantasmal Force",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Intelligence save or a 10-foot-cube phantasm only the target perceives as real, dealing 1d6 psychic each round it is adjacent",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "assassino_fantasmagorico",
    "name": "Phantasmal Assassin",
    "level": 4,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "An illusion of the target's fears: a failed Wisdom save causes fear and 4d10 psychic damage at the start of each turn; on a save, the illusion distracts it with disadvantage.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "montaria_fantasmagorica",
    "name": "Phantom Steed",
    "level": 3,
    "school": "Illusion",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "A Large quasi-real steed with 100 feet speed appears for 1 hour; it fades over 1 minute and vanishes if it takes damage",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aliado_planar",
    "name": "Planar Ally",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "10 minutes",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You beseech a deity or cosmic entity for help: it sends a loyal celestial, elemental or fiendish being, which may demand a service in return.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "vinculacao_planar",
    "name": "Planar Binding",
    "level": 5,
    "school": "Abjuration",
    "castingTime": "1 hour",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Attempts to bind a celestial, elemental, fey or fiend to your service for 24 hours (target's Charisma save, modified by protective wards).",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mudanca_de_plano",
    "name": "Plane Shift",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You and up to 8 creatures holding hands in a circle are transported to another plane; a metal rod bends when the spell is cast to deceive.",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "crescimento_de_plantas",
    "name": "Plant Growth",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action or 8 hours",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "One action: plants in a 100-foot radius cost 4 feet of movement per 1 foot; 8 hours: land within a half-mile yields twice the food for 1 year",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rajada_de_veneno",
    "name": "Poison Spray",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Constitution save or 1d12 poison damage",
    "classes": [
      "artifice",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "polimorfia",
    "name": "Polymorph",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Transforms a creature into a beast of no higher CR than its level; an unwilling target resists with Wisdom; the statistics are the form's but the mind is the original's.",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_de_poder_salvar",
    "name": "Power Word: Heal",
    "level": 9,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A touched creature regains all hit points and ends charmed, frightened, paralyzed, or stunned (none on undead or constructs)",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_de_poder_matar",
    "name": "Power Word: Kill",
    "level": 9,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "If the creature has 100 hit points or fewer, it dies instantly; otherwise the spell has no effect.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_de_poder_dor",
    "name": "Power Word: Pain",
    "level": 7,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A creature with 100 hp or fewer has speed capped at 10 feet and disadvantage on attacks, checks, and non-Constitution saves",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_de_poder_atordoar",
    "name": "Power Word: Stun",
    "level": 8,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "If the creature has 150 hit points or fewer, it is Stunned; it recovers in one minute unless it succeeds on a Constitution check.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "oracao_de_cura",
    "name": "Prayer of Healing",
    "level": 2,
    "school": "Evocation",
    "castingTime": "10 minutes",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Up to six creatures regain 2d8 + your spellcasting modifier hit points (no effect on undead or constructs)",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "prestidigitacao",
    "name": "Prestidigitation",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Minor cantrip effects: clean, heat, scent, mark, alter appearance.",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "selvageria_primitiva",
    "name": "Primal Savagery",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Melee spell attack within 5 feet deals 1d10 acid damage with your sharpened teeth or fingernails",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "salvaguarda_primordial",
    "name": "Primordial Ward",
    "level": 6,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Resistance to acid, cold, fire, lightning, and thunder; as a reaction to such damage, gain immunity to that type until your next turn ends",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "spray_prismatico",
    "name": "Prismatic Spray",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Eight colored rays (d8 per target) in a 60-foot cone, each with its own effect: damage, stone, blindness, banishment, confusion, fear or disintegration.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_prismatico",
    "name": "Prismatic Wall",
    "level": 9,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "A multicolored wall or sphere of up to 90x30 feet: seven layers with their own effects (damage, banishment, stone, blindness, confusion, fear and disintegration) against those who cross it.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criar_chamas",
    "name": "Produce Flame",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "A flame in your hand sheds 10 feet of bright light; hurl it for a ranged spell attack dealing 1d8 fire damage (10 minutes)",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "ilusao_programada",
    "name": "Programmed Illusion",
    "level": 6,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Creates an illusion of up to a 30-foot cube that remains invisible until a condition you choose occurs, when it appears for 5 minutes.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "projetar_imagem",
    "name": "Project Image",
    "level": 7,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "500 miles",
    "components": "V, S, M",
    "duration": "Up to 24 hours",
    "concentration": true,
    "ritual": false,
    "description": "An illusory duplicate of you appears in a place you have seen (up to 500 miles); you see and hear through it, but it is intangible — attacks against it reveal it as an illusion.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "protecao_contra_energia",
    "name": "Protection from Energy",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "protecao_contra_o_bem_e_o_mal",
    "name": "Protection from Evil and Good",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A touched creature has disadvantage on attacks from aberrations, celestials, elementals, fey, fiends, and undead, and can't be charmed or frightened by them",
    "classes": [
      "clerigo",
      "druida",
      "paladino",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "protecao_contra_veneno",
    "name": "Protection from Poison",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Neutralizes poison in a touched creature; for 1 hour it has advantage on saves against poison and resistance to poison damage",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "grito_psiquico",
    "name": "Psychic Scream",
    "level": 9,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Up to ten creatures make an Intelligence save or take 14d6 psychic damage and are stunned (half damage on a save)",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "onda_de_pulso",
    "name": "Pulse Wave",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (30-foot cone)",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 30-foot cone of pressure deals 6d6 force damage (Constitution save for half) and failed saves are pulled or pushed 15 feet, as are loose objects",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "curar_doentes",
    "name": "Purify Food and Drink",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S, M (a stone and a leaf)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": true,
    "description": "Purifies water and food for 15 people.",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "pirotecnia",
    "name": "Pyrotechnics",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Turn a 5-foot flame into fireworks (blinding creatures within 10 feet, Constitution save) or 20-foot heavily obscured smoke for 1 minute",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "ressurreicao_menor",
    "name": "Raise Dead",
    "level": 5,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M (1,000 gp of diamond)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Returns from death with 1d4 hit points; the check had disadvantage.",
    "classes": [
      "bardo",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "ligacao_telepatica",
    "name": "Telepathic Link",
    "level": 5,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: links up to 8 willing creatures telepathically; all hear one another even without seeing each other, for up to 1 hour.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lanca_psiquica_de_raulothim",
    "name": "Raulothim's Psychic Lance",
    "level": 4,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Intelligence save or 7d6 psychic damage and incapacitated until your next turn (half on a save); can target a named creature you can't see",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "vazio_devorador",
    "name": "Ravenous Void",
    "level": 9,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "1,000 feet",
    "components": "V, S, M (a small, nine-pointed star made of iron)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 20-foot gravitic sphere pulls creatures and objects toward it, dealing 5d10 force and restraining those inside until a Strength check",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "raio_do_enfraquecimento",
    "name": "Ray of Enfeeblement",
    "level": 2,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Ranged spell attack; the target deals half damage with Strength weapon attacks until it ends the spell with a Constitution save",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "toque_glacial",
    "name": "Icy Touch",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Blast of cold; ranged attack, 1d8 cold and 10 feet less speed.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_nauseante",
    "name": "Ray of Sickness",
    "level": 1,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ranged spell attack deals 2d8 poison damage; the target then makes a Constitution save or is poisoned until the end of your next turn",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ruptura_da_realidade",
    "name": "Reality Break",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a crystal prism)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Wisdom save or the creature can't take reactions and rolls a d10 each turn for random effects, repeating the save to end it",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "regenerar",
    "name": "Regenerate",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "The target regains 4d8 + 15 hit points and 1 more per round; severed limbs regrow in half the normal time.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "reencarnar",
    "name": "Reincarnate",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Creates a new adult body for a humanoid dead for up to 10 days and calls the soul back; the race is chosen randomly and death by old age does not count.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "remover_maldicao",
    "name": "Remove Curse",
    "level": 3,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Ends all curses on a touched creature or object; for a cursed magic item it ends attunement so the item can be removed",
    "classes": [
      "clerigo",
      "paladino",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "resistencia",
    "name": "Resistance",
    "level": 0,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a miniature cloak)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Once before the spell ends, a willing creature adds 1d4 to one saving throw of its choice",
    "classes": [
      "artifice",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "ressurreicao",
    "name": "Resurrection",
    "level": 7,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Returns to life a creature dead for up to 100 years (not by old age): it returns with all hit points and no diseases; cursed spells are dissolved.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "inverter_a_gravidade",
    "name": "Reverse Gravity",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "100 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Gravity reverses in a 50-foot-radius, 100-foot-tall cylinder: everything and everyone falls toward the top until the spell ends.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ressuscitar",
    "name": "Revivify",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Returns to life a creature dead for up to 10 days (soul free and willing): it returns with 1 hit point and is cured of diseases/poison; without the original pieces it becomes one-eyed (1d4 damage for each).",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "gelo_aprisionador_de_rime",
    "name": "Rime's Binding Ice",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 Action",
    "range": "Self (30-foot cone)",
    "components": "S, M (a vial of meltwater)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 30-foot cone of cold deals 3d8 cold damage (Constitution save for half); failed saves leave the creature with 0 speed for 1 minute until freed",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "corda_extradimensional",
    "name": "Rope Trick",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (powdered corn extract and a twisted loop of parchment)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A rope rises to an extradimensional space holding up to 8 Medium creatures, hidden from attacks for 1 hour",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chama_sagrada",
    "name": "Sacred Flame",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Flame-like radiance; Dexterity save or take 1d8 radiant damage (2d8 at 5th level, etc.).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "sanctuario",
    "name": "Sanctuary",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 bonus action",
    "range": "30 feet",
    "components": "V, S, M (holy water)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": true,
    "description": "The target can only be targeted by you or your allies; save or the effect ends.",
    "classes": [
      "artifice",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "picada_esgotante",
    "name": "Sapping Sting",
    "level": 0,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Constitution save or 1d4 necrotic damage and the target falls prone",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "dispersao",
    "name": "Scatter",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Teleport up to five creatures (Wisdom save for unwilling ones) to unoccupied spaces you can see within 120 feet",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "raio_ardente",
    "name": "Scorching Ray",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Three rays, each a ranged spell attack dealing 2d6 fire damage, hurled at one target or several",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "observar",
    "name": "Observe",
    "level": 5,
    "school": "Divination",
    "castingTime": "10 minutes",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "You see and hear a specific creature on the same plane; the target makes a Wisdom saving throw, modified by knowing you or having one of your items.",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "destruicao_cauterizante",
    "name": "Searing Smite",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your next melee hit deals an extra 1d6 fire and ignites the target, which takes 1d6 fire (Constitution save) each turn until doused",
    "classes": [
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "ver_o_invisivel",
    "name": "See Invisibility",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a pinch of talc and a small sprinkling of powdered silver)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "For 1 hour you see invisible creatures and objects as if visible and can see into the Ethereal Plane",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "semblante",
    "name": "Aspect",
    "level": 5,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Changes the illusory appearance of any number of visible creatures for 8 hours (including hair, age and apparent build); willing ones may choose the effect.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "remeter",
    "name": "Sending",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Unlimited",
    "components": "V, S, M (a short piece of fine copper wire)",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Send a message of 25 words or less to a familiar creature across any distance or plane, and it can reply immediately",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esconderijo",
    "name": "Hideaway",
    "level": 7,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Hides an object or a willing creature: it becomes invisible, cannot be the target of divination and enters stasis until dispelled with the same spell.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lamina_sombria",
    "name": "Shadow Blade",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A sword dealing 2d8 psychic damage with finesse, light, and thrown (20/60) properties, with advantage in dim light or darkness",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sombra_de_moil",
    "name": "Shadow Of Moil",
    "level": 4,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (an undead eyeball encased in a gem worth at least 150 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "You become heavily obscured, gain resistance to radiant damage, and deal 2d8 necrotic to creatures within 10 feet that hit you",
    "classes": [
      "bruxo"
    ],
    "source": "xge"
  },
  {
    "id": "moldar_agua",
    "name": "Shape Water",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Instantaneous or 1 hour",
    "concentration": false,
    "ritual": false,
    "description": "Manipulate a 5-foot cube of water: move it, change its shape or color, or freeze it solid for 1 hour",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mudanca_de_forma",
    "name": "Change Shape",
    "level": 9,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "You assume the form of any creature of equal or lower CR that you have seen (not a construct or undead), keeping your personality and spells but swapping statistics.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "despedacar",
    "name": "Shatter",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a chip of mica)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A ringing shriek in a 10-foot sphere deals 3d8 thunder (Constitution save for half), worse for inorganic creatures; also harms unattended objects",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_magico",
    "name": "Shield",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 reaction",
    "range": "Self",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "+5 AC until the start of your next turn.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_da_fe",
    "name": "Shield of Faith",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a small parchment with a bit of holy text written on it)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A shimmering field grants a chosen creature within 60 feet a +2 bonus to AC for 10 minutes",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bordao_mistico",
    "name": "Shillelagh",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Your club or quarterstaff becomes magical and uses your spellcasting ability, dealing a d8 damage die for 1 minute",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "toque_chocante",
    "name": "Shocking Grasp",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Melee spell attack deals 1d8 lightning damage and denies reactions until the target's next turn (advantage against metal armor)",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "radiancia_nauseante",
    "name": "Sickening Radiance",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Sickly green light in a 30-foot sphere deals 4d10 radiant damage and one level of exhaustion (Constitution save) when a creature enters or starts its turn there",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "silencio",
    "name": "Silence",
    "level": 2,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": true,
    "description": "A 20-foot-radius sphere is soundless: creatures inside are deafened, immune to thunder, and can't cast spells with verbal components",
    "classes": [
      "bardo",
      "clerigo",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "imagem_silenciosa",
    "name": "Silent Image",
    "level": 1,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a bit of fleece)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Creates a 15-foot-cube visual image with no sound or smell that you can move with your action (Investigation reveals it)",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "farpas_prateadas",
    "name": "Silvery Barbs",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 reaction, which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw",
    "range": "60 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Force a creature that just succeeded on a roll to reroll and take the lower result, and give another creature advantage within 1 minute",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "simulacro",
    "name": "Simulacrum",
    "level": 7,
    "school": "Illusion",
    "castingTime": "12 hours",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Creates an icy duplicate of a beast or humanoid (half hit points, no magical abilities); it takes 12 hours and 1,500 gp in gold.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "empoderamento_de_pericias",
    "name": "Skill Empowerment",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature gains expertise in one skill it is proficient with, doubling its proficiency bonus for that skill's checks",
    "classes": [
      "artifice",
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "escrever_no_ceu",
    "name": "Skywrite",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 1 day",
    "concentration": true,
    "ritual": true,
    "description": "Ten words of cloud form in a patch of sky you can see and hold until the spell ends or a strong wind blows them away",
    "classes": [
      "artifice",
      "bardo",
      "druida",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "dormir",
    "name": "Sleep",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a pinch of sand)",
    "duration": "5 minutes",
    "concentration": false,
    "ritual": false,
    "description": "Puts creatures with 5d8 or fewer hit points remaining to sleep.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nevasca",
    "name": "Sleet Storm",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a pinch of dust and a few drops of water)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Freezing rain in a 40-foot-radius, 20-foot cylinder: heavily obscured, difficult terrain, Dexterity save or fall prone, and a failed Constitution save ends concentration",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lentidao",
    "name": "Slow",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a drop of molasses)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Up to six creatures in a 40-foot cube: speed halved, -2 AC and Dexterity saves, no reactions, only one attack and either an action or a bonus action each turn (Wisdom save ends)",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "armadilha",
    "name": "Snare",
    "level": 1,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "S, M (25 feet of rope, which the spell consumes)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "A hidden 5-foot rope trap hoists a Small, Medium or Large creature 3 feet into the air, restraining it until it escapes (Dexterity save or Intelligence (Arcana) check)",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "enxame_de_bolas_de_neve_de_snilloc",
    "name": "Snilloc's Snowball Swarm",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a piece of ice or a small white rock chip)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A flurry of magic snowballs: 3d6 cold damage in a 5-foot radius (Dexterity save for half)",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "jaula_de_almas",
    "name": "Soul Cage",
    "level": 6,
    "school": "Necromancy",
    "castingTime": "1 reaction, which you take when a humanoid you can see within 60 feet of you dies",
    "range": "60 feet",
    "components": "V, S, M (a tiny silver cage worth 100 gp)",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Snatches a dying humanoid's soul into a cage, usable up to six times: regain 2d8 hit points, ask the soul a truthful question, gain advantage on a roll or scry a place it knew",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "acudir_os_moribundos",
    "name": "Spare the Dying",
    "level": 0,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A touch stabilizes a living creature at 0 hit points; it has no effect on undead or constructs",
    "classes": [
      "artifice",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_animais",
    "name": "Speak with Animals",
    "level": 1,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": true,
    "description": "For 10 minutes you comprehend and converse with beasts, learning what they have recently perceived and perhaps winning a small favor",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_mortos",
    "name": "Speak with Dead",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S, M (burning incense)",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "A corpse with a mouth answers up to five questions for 10 minutes; it knows only what it knew in life and need not answer truthfully if it regards you as an enemy",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_plantas",
    "name": "Speak with Plants",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self (30-foot radius)",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "Plants within 30 feet gain limited sentience for 10 minutes and obey your simple commands; you can also turn plant-grown difficult terrain into normal terrain (and the reverse)",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "escalada_de_aranha",
    "name": "Spider Climb",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a drop of bitumen and a spider)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "A willing creature you touch climbs vertical surfaces and ceilings with its hands free and gains a climbing speed equal to its walking speed",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "crescer_espinhos",
    "name": "Spike Growth",
    "level": 2,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Ground in a 20-foot radius sprouts camouflaged spikes: difficult terrain dealing 2d4 piercing damage for every 5 feet a creature travels through it",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "guardioes_espirituais",
    "name": "Spirit Guardians",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self (15-foot-radius)",
    "components": "V, S, M (a holy symbol)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Spirits within 15 feet halve the speed of hostile creatures, which take 3d8 radiant (or necrotic) damage when they enter or start their turn there (Wisdom save for half)",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "espirito_da_morte",
    "name": "Spirit Of Death",
    "level": 4,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a gilded playing card worth at least 400 gp and depicting an avatar of death)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a reaper spirit ally for 1 hour that shares your initiative, obeys your verbal commands and takes the Dodge action if you give it none",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "botmt"
  },
  {
    "id": "veu_espiritual",
    "name": "Spirit Shroud",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your attacks deal 1d8 extra radiant, necrotic or cold damage within 10 feet and stop that target regaining hit points; creatures you choose within 10 feet lose 10 feet of speed",
    "classes": [
      "clerigo",
      "paladino",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "arma_espiritual",
    "name": "Spiritual Weapon",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "60 feet",
    "components": "V, S, M (a two-handed weapon)",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Floats and attacks (1d8 + mod) with a bonus action.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "rajada_de_cartas",
    "name": "Spray Of Cards",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self (15-foot cone)",
    "components": "V, S, M (a deck of cards)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 15-foot cone of spectral cards: 2d10 force damage and blinded until end of next turn (Dexterity save for half damage only)",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "botmt"
  },
  {
    "id": "golpe_atordoante",
    "name": "Staggering Smite",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Next melee hit deals an extra 4d6 psychic damage; Wisdom save or the target has disadvantage on attacks and checks and cannot take reactions until end of its next turn",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_de_aco_do_vento",
    "name": "Steel Wind Strike",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "S, M (a melee weapon worth at least 1 sp)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Melee spell attacks against up to five creatures within 30 feet deal 6d10 force damage on a hit; you then teleport to within 5 feet of one of them",
    "classes": [
      "patrulheiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "nuvem_fetida",
    "name": "Stinking Cloud",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a rotten egg or several skunk cabbage leaves)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 20-foot-radius cloud of gas heavily obscures the area; a creature fully inside at the start of its turn fails a Constitution save and loses its action retching",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "forma_de_pedra",
    "name": "Stone Shape",
    "level": 4,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Shapes a Medium or smaller stone object (or a section up to 5 feet) into the desired form, such as a weapon, idol or chest.",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pele_de_pedra",
    "name": "Stoneskin",
    "level": 4,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "The target's flesh becomes hard as stone: resistance to nonmagical bludgeoning, piercing and slashing damage.",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tempestade_da_vinganca",
    "name": "Storm of Vengeance",
    "level": 9,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Sight",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A cloud with a 360-foot radius forms and escalates: thunder (6d6 lightning), hail (2d6 cold) and, on the 6th turn, a bolt that deals 10d10 lightning and 10d10 acid damage to the thunder.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_de_tempestade",
    "name": "Storm Sphere",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 20-foot sphere of swirling air is difficult terrain: 2d6 bludgeoning to those inside (Strength save); as a bonus action, fire a 4d6 lightning bolt at a creature within 60 feet",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sugestao",
    "name": "Suggestion",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, M (sweet wax)",
    "duration": "Concentration, up to 8 hours",
    "concentration": true,
    "ritual": false,
    "description": "Suggests a course of action; save or obeys if reasonable.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_aberracao",
    "name": "Summon Aberration",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a pickled tentacle and an eyeball in a platinum inlaid vial worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons an Aberrant Spirit ally (Beholderkin, Slaad or Star Spawn) for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_besta",
    "name": "Summon Beast",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Bestial Spirit ally shaped by your choice of Air, Land or Water environment for 1 hour, obeying your verbal commands",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_celestial",
    "name": "Summon Celestial",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a golden reliquary worth at least 500 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Celestial Spirit ally, an Avenger or Defender, for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_constructo",
    "name": "Summon Construct",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (an ornate stone and metal lockbox worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Construct Spirit ally of Clay, Metal or Stone (golem or modron) for 1 hour that obeys your verbal commands",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_espirito_draconico",
    "name": "Summon Draconic Spirit",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 Action",
    "range": "60ft",
    "components": "V, S, M (an object with the image of a dragon engraved on it, worth at least 500 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Draconic Spirit ally, chromatic, gem or metallic, for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "invocar_elemental",
    "name": "Summon Elemental",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons an Elemental Spirit ally of Air, Earth, Fire or Water for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "druida",
      "patrulheiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_fada",
    "name": "Summon Fey",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a gilded flower worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Fey Spirit ally with a Fuming, Mirthful or Tricksy mood for 1 hour that obeys your verbal commands",
    "classes": [
      "druida",
      "patrulheiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_diabolico",
    "name": "Summon Fiend",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (humanoid blood inside a ruby vial worth at least 600 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Fiendish Spirit ally, a demon, devil or yugoloth, for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_demonio_superior",
    "name": "Summon Greater Demon",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a demon of CR 5 or lower you command with words; at each turn's end it makes a Charisma save (disadvantage if you speak its true name) or breaks free",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocar_demonios_menores",
    "name": "Summon Lesser Demons",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a vial of blood from a humanoid killed within the past 24 hours)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons hostile demons that attack the nearest non-demons; a circle drawn with the blood component bars them from crossing it or targeting those inside",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocar_cria_das_sombras",
    "name": "Summon Shadowspawn",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (tears inside a crystal vial worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons a Shadow Spirit ally marked by Fury, Despair or Fear for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_morto_vivo",
    "name": "Summon Undead",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a gilded skull worth at least 300 gp)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Summons an Undead Spirit ally, ghostly, putrid or skeletal, for 1 hour that shares your initiative and obeys your verbal commands",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "feixe_de_sol",
    "name": "Sunbeam",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A beam of light 5 feet wide and 60 feet long: 6d8 radiant damage and Blindness (Constitution save); undead take extra damage when hit.",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "explosao_solar",
    "name": "Solar Burst",
    "level": 8,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Intense sunlight in a 60-foot radius: 12d6 radiant damage and Blindness for 1 minute (Constitution save; half damage and no blindness on a save).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aljava_veloz",
    "name": "Swift Quiver",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Touch",
    "components": "V, S, M (a quiver containing at least one piece of ammunition)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Your quiver endlessly replaces spent ammunition; as a bonus action on each of your turns you can make two attacks with a weapon that uses it",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rompante_de_espadas",
    "name": "Sword Burst",
    "level": 0,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self (5-foot radius)",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Spectral blades sweep around you: creatures within 5 feet take 1d6 force damage (Dexterity save)",
    "classes": [
      "artifice",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "simbolo",
    "name": "Symbol",
    "level": 7,
    "school": "Abjuration",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Until dispelled or triggered",
    "concentration": false,
    "ritual": false,
    "description": "Inscribes a glyph (Death, Pain, Blindness, Sleep, Fear, Madness or Poison) that triggers on a chosen condition and produces its effects in a 10-foot radius.",
    "classes": [
      "bardo",
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "estatica_sinaptica",
    "name": "Synaptic Static",
    "level": 5,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 20-foot-radius psychic explosion: 8d6 psychic damage (Intelligence save for half); a failed save also subtracts 1d6 from its attacks, checks and concentration saves for 1 minute",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "infusao_caustica_da_tasha",
    "name": "Tasha's Caustic Brew",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (30-foot line)",
    "components": "V, S, M (a bit of rotten food)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 30-foot line, 5 feet wide, covers creatures that fail a Dexterity save in acid, dealing 2d4 damage at the start of each turn until an action washes it off",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "risada_terrivel",
    "name": "Tasha's Hideous Laughter",
    "level": 1,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (tiny tarts and a feather that is waved in the air)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A creature that fails a Wisdom save falls prone, incapacitated with laughter and unable to stand until it saves at end of turn or takes damage (advantage)",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chicote_mental_da_tasha",
    "name": "Tasha's Mind Whip",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "A creature that fails an Intelligence save takes 3d6 psychic damage, cannot take reactions, and on its next turn gets only a move, an action or a bonus action",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "disfarce_transcendental_de_tasha",
    "name": "Tasha's Otherworldly Guise",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V, S, M (an object engraved with a symbol of the Outer Planes, worth at least 500 gp)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Channels Lower or Upper Planes magic for 1 minute: 40-foot fly speed, +2 AC, immunity to fire and poison or radiant and necrotic damage, and two weapon attacks per Attack action",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "telecinese",
    "name": "Telekinesis",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "Moves or manipulates by will: objects (up to 1,000 lb, or 500 in rapid motion) and creatures (Strength save, push of up to 25 feet).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "telepatia",
    "name": "Telepathy",
    "level": 8,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Unlimited",
    "components": "V, S, M (a pair of linked silver rings)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "Creates a telepathic link with a willing creature anywhere on the same plane for 24 hours, letting you instantly share words, images, sounds and sensory messages",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "teletransporte",
    "name": "Teleportation",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Transports you and up to 8 visible creatures (or one object) to a destination; the less familiar it is, the greater the chance of error, which scatters the targets around the destination.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_de_teletransporte",
    "name": "Teleportation Circle",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "10 feet",
    "components": "V, M",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Draws a 10-foot circle that links it to a permanent circle whose sigil sequence you know; for 1 round, creatures that enter are teleported there.",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "templo_dos_deuses",
    "name": "Temple of the Gods",
    "level": 7,
    "school": "Conjuration",
    "castingTime": "1 hour",
    "range": "120 feet",
    "components": "V, S, M (a holy symbol worth at least 5 gp)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": false,
    "description": "A 120-foot temple of magical force lasts 24 hours: a chosen creature type must save to enter, divination cannot reach inside, and healing spells there restore extra hit points",
    "classes": [
      "clerigo"
    ],
    "source": "xge"
  },
  {
    "id": "desvio_temporal",
    "name": "Temporal Shunt",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 reaction, taken when a creature you see makes an attack roll or starts to cast a spell",
    "range": "120 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "When a creature you see attacks or starts casting, it must save or vanish to another point in time, wasting the attack or spell and reappearing at the start of its next turn",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "disco_flutuante",
    "name": "Tenser's Floating Disk",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a drop of mercury)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "A floating 3-foot disk holds up to 500 pounds and follows you within 20 feet for 1 hour; it ends if overloaded or if you move more than 100 feet from it",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transformacao_de_tenser",
    "name": "Tenser's Transformation",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a few hairs from a bull)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "For 10 minutes you cannot cast spells: 50 temporary hit points, advantage on weapon attacks, +2d12 force damage per hit and two attacks; DC 15 Constitution save or exhaustion",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vincular_essencia",
    "name": "Tether Essence",
    "level": 7,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a spool of platinum cord worth at least 250 gp, which the spell consumes)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Two creatures that fail Constitution saves are linked for 1 hour: damage and healing dealt to one also affects the other, and the spell ends if either drops to 0 hit points",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "truque_do_mago",
    "name": "Thaumaturgy",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V",
    "duration": "1 minute",
    "concentration": false,
    "ritual": false,
    "description": "Minor wonders: booming voice, tremors, divine lights.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "chicote_de_espinhos",
    "name": "Thorn Whip",
    "level": 0,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (the stem of a plant with thorns)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A thorny vine makes a melee spell attack for 1d6 piercing damage and pulls a Large or smaller target 10 feet closer",
    "classes": [
      "artifice",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "passo_do_trovao",
    "name": "Thunder Step",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 ft",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Teleport up to 90 feet (with a willing creature within 5 feet), then blast where you left: 3d10 thunder damage within 10 feet (Constitution save for half), audible 300 feet",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "trovoada",
    "name": "Thunderclap",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (5-foot radius)",
    "components": "S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A burst of thunder audible 100 feet: creatures within 5 feet take 1d6 thunder damage (Constitution save)",
    "classes": [
      "artifice",
      "bardo",
      "druida",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "punicao_trovejante",
    "name": "Thunderous Smite",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Next melee hit deals an extra 2d6 thunder damage and the target must save or be pushed 10 feet and knocked prone (audible within 300 feet)",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "onda_trovejante",
    "name": "Thunderwave",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self (15-foot cube)",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 15-foot cube of thunder: 2d8 thunder damage and the target is pushed 10 feet (Constitution save for half and no push), audible 300 feet",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "maremoto",
    "name": "Tidal Wave",
    "level": 3,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a drop of water)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A wave crashes in a 30x10x10-foot area: 4d8 bludgeoning damage and knocked prone (Dexterity save for half), then extinguishes flames within 30 feet",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "devastacao_temporal",
    "name": "Time Ravage",
    "level": 9,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (an hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A creature failing a Constitution save takes 10d12 necrotic damage and ages to 30 days from death, with disadvantage and halved speed; Wish or 9th-level Greater Restoration ends it",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "parar_o_tempo",
    "name": "Stop Time",
    "level": 9,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You take 1d4+1 consecutive turns while time freezes for everyone else; the spell ends if you are affected by another spell or take damage.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequeno_servo",
    "name": "Tiny Servant",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "Touch",
    "components": "V, S",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "Animates a Tiny object into a servant you command by thought within 120 feet for 8 hours; it reverts to an object at 0 hit points",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "pedagio_aos_mortos",
    "name": "Toll the Dead",
    "level": 0,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A bell tolls: a creature that fails a Wisdom save takes 1d8 necrotic damage, or 1d12 if it is missing hit points",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "linguas",
    "name": "Tongues",
    "level": 3,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, M (a small clay model of a ziggurat)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A creature you touch understands any spoken language and is understood by any language-speaking creature for 1 hour",
    "classes": [
      "bardo",
      "clerigo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transmutar_pedra",
    "name": "Transmute Rock",
    "level": 5,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (clay and water)",
    "duration": "Until dispelled",
    "concentration": false,
    "ritual": false,
    "description": "Turns a 40-foot cube of rock into mud (creatures sink and are restrained; falling mud deals 4d8) or mud into rock (creatures restrained inside) until dispelled",
    "classes": [
      "artifice",
      "druida",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "transporte_por_plantas",
    "name": "Transport via Plants",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "10 feet",
    "components": "V, S",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "Creates a magical link between two trees (Large or bigger) on the same plane; you have seen or touched the destination one before; up to 9 creatures enter one tree and exit the other.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "passo_entre_arvores",
    "name": "Step between Trees",
    "level": 5,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "You enter one tree and exit through another of the same kind within a 500-foot radius; on exit you take 1d12 necrotic damage (you survive on a successful Constitution save).",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "polimorfia_verdadeira",
    "name": "True Polymorph",
    "level": 9,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "Up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Transforms a creature into another creature (or an object into a creature) for 1 hour; if maintained for the whole duration, the target permanently becomes the new being.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ressurreicao_verdadeira",
    "name": "True Resurrection",
    "level": 9,
    "school": "Necromancy",
    "castingTime": "1 hour",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Returns to life a creature dead for up to 200 years (not by old age), even without body parts (recreated from clay and gum): full hit points, no diseases and no cursed spells.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "visao_verdadeira",
    "name": "True Seeing",
    "level": 6,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "The target gains true sight out to 120 feet: it sees through magic and illusions, notices secret doors hidden by magic and sees the Ethereal Plane.",
    "classes": [
      "bardo",
      "clerigo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_certeiro",
    "name": "True Strike",
    "level": 0,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "S",
    "duration": "Concentration, up to 1 round",
    "concentration": true,
    "ritual": false,
    "description": "You gain advantage on your first attack roll against the target on your next turn",
    "classes": [
      "bardo",
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tsunami",
    "name": "Tsunami",
    "level": 8,
    "school": "Conjuration",
    "castingTime": "1 minute",
    "range": "Sight",
    "components": "V, S",
    "duration": "Concentration, up to 6 rounds",
    "concentration": true,
    "ritual": false,
    "description": "A 300-foot-long, 50-foot-thick wall of water advances 50 feet each turn, dealing 6d10 then 5d10 bludgeoning (Strength save for half) and shrinking until it ends after 6 rounds",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "servo_invisivel",
    "name": "Unseen Servant",
    "level": 1,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a piece of string and a bit of wood)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "An invisible mindless servant (AC 10, 1 hit point, no attacks) does simple tasks for 1 hour; as a bonus action it moves 15 feet and interacts with objects",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "toque_vampirico",
    "name": "Vampiric Touch",
    "level": 3,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A melee spell attack deals 3d6 necrotic damage and you regain half as many hit points; repeat the attack each turn for 1 minute",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "zombaria_viscosa",
    "name": "Vicious Mockery",
    "level": 0,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V",
    "duration": "1 round",
    "concentration": false,
    "ritual": false,
    "description": "1d6 psychic damage; the target has disadvantage on its next attack roll.",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_caustica",
    "name": "Vitriolic Sphere",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "150 feet",
    "components": "V, S, M (a drop of giant slug bile)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "A 20-foot-radius burst of acid: 10d4 damage and 5d4 more at end of next turn (Dexterity save for half the initial damage and none later)",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vortice_dimensional",
    "name": "Vortex Warp",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Teleports a creature that fails a Constitution save (it can choose to fail) to an unoccupied space you can see within 90 feet",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "muro_de_fogo",
    "name": "Wall of Fire",
    "level": 4,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 60-foot wall (or a ring 20 feet in diameter): 5d8 fire damage to those within 10 feet of either side (Dexterity save; half on a save).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_forca",
    "name": "Wall of Force",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "An invisible wall of force (weightless, impervious to magic) blocks passage; it cannot be dispelled by magic, but has 30 hit points and is destroyed when broken.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_gelo",
    "name": "Wall of Ice",
    "level": 6,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A wall of ice (panels of 10x10 feet, up to 30 feet wide): 10d6 cold damage to those who cross it; if broken, it creates frigid fog.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_luz",
    "name": "Wall of Light",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a hand mirror)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A wall up to 60x10x5 feet blocks sight; creatures in it take 4d8 radiant damage and are blinded (save ends), and each beam you fire deals 4d8 and shrinks the wall by 10 feet",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "muro_de_areia",
    "name": "Wall of Sand",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a handful of sand)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A wall up to 30x10x10 feet blocks sight but not movement: creatures inside are blinded and must spend 3 feet of movement for every 1 foot moved",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "muro_de_pedra",
    "name": "Wall of Stone",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A nonmagical stone wall (10 cm thick, 10 panels of 10x10 feet) that becomes permanent if supported; panels can be shaped as you wish.",
    "classes": [
      "artifice",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_espinhos",
    "name": "Wall of Thorns",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M",
    "duration": "Up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A wall of thorny bushes (up to 60x10 feet): 7d10 slashing damage to those who cross it, in addition to difficult terrain.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_agua",
    "name": "Wall of Water",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a drop of water)",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A wall or 20-foot ring of water is difficult terrain, gives ranged attacks through it disadvantage and halves fire damage; cold spells freeze 5-foot sections (AC 5, 15 hit points)",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vinculo_de_protecao",
    "name": "Warding Bond",
    "level": 2,
    "school": "Abjuration",
    "castingTime": "1 action",
    "range": "Touch",
    "components": "V, S, M (a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": false,
    "description": "A willing target gains +1 AC, saving throws and resistance to all damage for 1 hour; you take the damage it takes, and it ends if you drop to 0 hit points or are over 60 feet apart",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "vento_protetor",
    "name": "Warding Wind",
    "level": 2,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 10 minutes",
    "concentration": true,
    "ritual": false,
    "description": "A 10-foot wind around you deafens those in the area, extinguishes small flames, keeps out gas and fog, makes it difficult terrain and gives ranged attacks through it disadvantage",
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "percepcao_de_portal",
    "name": "Warp Sense",
    "level": 2,
    "school": "Divination",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V, S, M (a razorvine leaf)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "For 1 minute you sense portals within 30 feet, and with a DC 15 ability check you learn one portal's destination plane and key",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "planescape"
  },
  {
    "id": "respirar_na_agua",
    "name": "Water Breathing",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a short reed or piece of straw)",
    "duration": "24 hours",
    "concentration": false,
    "ritual": true,
    "description": "Up to ten willing creatures you can see breathe underwater for 24 hours while keeping their normal respiration",
    "classes": [
      "artifice",
      "druida",
      "patrulheiro",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "caminhar_sobre_as_aguas",
    "name": "Water Walk",
    "level": 3,
    "school": "Transmutation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a piece of cork)",
    "duration": "1 hour",
    "concentration": false,
    "ritual": true,
    "description": "Up to ten willing creatures walk across any liquid as if it were solid ground for 1 hour; submerged targets surface at 60 feet per round",
    "classes": [
      "artifice",
      "clerigo",
      "druida",
      "patrulheiro",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_aquosa",
    "name": "Watery Sphere",
    "level": 4,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "90 feet",
    "components": "V, S, M (a droplet of water)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 5-foot sphere of water restrains up to four Medium or one Large creature, moves 30 feet as an action and knocks restrained creatures prone when it falls",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "teia",
    "name": "Web",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a web)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "20 cubic feet of webs; hinders and restrains (Dexterity).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pavor",
    "name": "Dread",
    "level": 9,
    "school": "Illusion",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "The minds of creatures in a 30-foot sphere see their nightmares: a failed Wisdom save deals 4d10 psychic damage and Fear for as long as the spell lasts.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "vendaval",
    "name": "Whirlwind",
    "level": 7,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "300 feet",
    "components": "V, M (a piece of straw)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A 10-foot-radius, 30-foot-high whirlwind, movable 30 feet a turn, deals 10d6 bludgeoning (Dexterity save, half) and restrains Large or smaller creatures that fail a Strength save",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "caminho_do_vento",
    "name": "Path of the Wind",
    "level": 6,
    "school": "Transmutation",
    "castingTime": "1 minute",
    "range": "30 feet",
    "components": "V, S, M",
    "duration": "8 hours",
    "concentration": false,
    "ritual": false,
    "description": "You and up to 10 creatures become gaseous like clouds: flying speed of 300 feet, resistance to nonmagical weapon damage, but you cannot attack until you resume your normal form.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_vento",
    "name": "Wind Wall",
    "level": 3,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S, M (a tiny fan and a feather of exotic origin)",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "A wall up to 50x15x1 feet deals 3d8 bludgeoning to creatures in it (Strength save for half), deflects arrows and bars small flying creatures and gas",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "desejo",
    "name": "Wish",
    "level": 9,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "The most powerful spell: duplicates spells of 8th level or lower, produces equivalent effects (teleport, create items, heal, resurrect) or asks for something extraordinary — risk of strain (3d8 damage per 1d4x10 lb extra and weakening).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "bruxaria",
    "name": "Witchbolt",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "30 feet",
    "components": "V, S, M (a piece of cord)",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": false,
    "description": "Ranged attack with a ray; 1d12 lightning on the following turn.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "murchar_e_florescer",
    "name": "Wither and Bloom",
    "level": 2,
    "school": "Necromancy",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S, M (a withered vine twisted into a loop)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "In a 10-foot radius, chosen creatures take 2d6 necrotic damage (Constitution save for half) and vegetation withers, while one chosen creature can spend a Hit Die to heal",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "palavra_de_radiancia",
    "name": "Word of Radiance",
    "level": 0,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "5 feet",
    "components": "V, M (a holy symbol)",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "Burning radiance erupts from you: creatures you choose within 5 feet take 1d6 radiant damage (Constitution save)",
    "classes": [
      "clerigo"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_de_retorno",
    "name": "Word of Return",
    "level": 6,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "5 feet",
    "components": "V",
    "duration": "Instantaneous",
    "concentration": false,
    "ritual": false,
    "description": "You and up to 5 willing creatures within 5 feet are teleported to a sanctuary previously designated and prepared as a spell.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "ira_da_natureza",
    "name": "Wrath Of Nature",
    "level": 5,
    "school": "Evocation",
    "castingTime": "1 action",
    "range": "120 feet",
    "components": "V, S",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Nature animates in a 60-foot cube for 1 minute: difficult grass for enemies, 4d6 slashing from branches, restrained creatures and a 3d8 rock you can hurl as a bonus action",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "punicao_colerica",
    "name": "Wrathful Smite",
    "level": 1,
    "school": "Evocation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "Next melee hit deals an extra 1d6 psychic damage and the target must save or be frightened of you until it spends an action on a Wisdom check to end it",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bolso_dimensional",
    "name": "Wristpocket",
    "level": 2,
    "school": "Conjuration",
    "castingTime": "1 action",
    "range": "Self",
    "components": "S",
    "duration": "Concentration, up to 1 hour",
    "concentration": true,
    "ritual": true,
    "description": "Hides an object of up to 5 pounds in an extradimensional space for 1 hour; as an action you can summon it to your hand or return it",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "ataque_do_zefiro",
    "name": "Zephyr Strike",
    "level": 1,
    "school": "Transmutation",
    "castingTime": "1 bonus action",
    "range": "Self",
    "components": "V",
    "duration": "Concentration, up to 1 minute",
    "concentration": true,
    "ritual": false,
    "description": "For 1 minute your movement provokes no opportunity attacks; once you gain advantage on a weapon attack that deals 1d8 extra force damage and +30 feet of speed for the turn",
    "classes": [
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "zona_da_verdade",
    "name": "Zone of Truth",
    "level": 2,
    "school": "Enchantment",
    "castingTime": "1 action",
    "range": "60 feet",
    "components": "V, S",
    "duration": "10 minutes",
    "concentration": false,
    "ritual": false,
    "description": "A 15-foot-radius zone forces creatures that fail a Charisma save not to speak deliberate lies for 10 minutes; you know who failed",
    "classes": [
      "bardo",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  }
]
;

export function getSpell(id: string): SpellDef | undefined {
  return SPELLS.find((s) => s.id === id);
}

export function spellsForClass(classId: string): SpellDef[] {
  return SPELLS.filter((s) => s.classes.includes(classId));
}
