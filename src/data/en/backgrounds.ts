import type { SkillId } from "../../domain/types";
import type { TraitDef } from "./races";

export type BackgroundDef = {
  id: string;
  source: string;
  name: string;
  skillChoices: { count: number; options: SkillId[] };
  toolProficiencies: string[];
  toolChoices?: { count: number };
  languages: string[];
  languageChoices?: { count: number };
  equipment: { catalogId: string | null; name: string; qty: number }[];
  feature: TraitDef;
};

export const BACKGROUNDS: BackgroundDef[] = [
  {
    "id": "acolite",
    "source": "phb",
    "name": "Acolyte",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "holy_symbol",
        "name": "Holy symbol",
        "qty": 1
      },
      {
        "catalogId": "incense",
        "name": "Incense",
        "qty": 5
      },
      {
        "catalogId": "robes",
        "name": "Robes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Shelter of the Faithful",
      "description": "You have a position in a temple and can seek shelter and receive aid from other temples."
    }
  },
  {
    "id": "antropologo",
    "source": "toa",
    "name": "Anthropologist",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Leather journal",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Adept Linguist",
      "description": "After observing humanoids for 1 day, you communicate with them using basic words and gestures, even if they speak no language you know."
    }
  },
  {
    "id": "arqueologo",
    "source": "toa",
    "name": "Archaeologist",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Wooden case with a map",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Hunting lantern",
        "qty": 1
      },
      {
        "catalogId": "miners_pick",
        "name": "Miner's pick",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Shovel",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Historical Knowledge",
      "description": "Entering a ruin or dungeon, you identify its original purpose and builders, and appraise art objects over a century old."
    }
  },
  {
    "id": "ashari",
    "source": "tcsr",
    "name": "Ashari",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "arcana",
        "survival"
      ]
    },
    "toolProficiencies": [
      "herbalism kit"
    ],
    "languages": [
      "Primordial"
    ],
    "equipment": [
      {
        "catalogId": "staff",
        "name": "Tribe's staff",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herbalism kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Elemental Harmony",
      "description": "As an action, channel minor magic of your order's element: kindle or snuff flames, shape rock or water, or create a puff of wind."
    }
  },
  {
    "id": "viajante_astral",
    "source": "sps",
    "name": "Astral Drifter",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Journal",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Divine Contact",
      "description": "You gain the Magic Initiate feat (cleric) and a cosmic secret revealed by a wandering god in the Astral Sea."
    }
  },
  {
    "id": "atleta",
    "source": "moot",
    "name": "Athlete",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "athletics"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Bronze disc or leather ball",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Lucky charm",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Echoes of Victory",
      "description": "In any settlement within 100 miles of where you grew up, there is a 50% chance someone admires you and offers you shelter."
    }
  },
  {
    "id": "funcionario_azorius",
    "source": "ggr",
    "name": "Azorius Functionary",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "intimidation"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Azorius insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scroll of legal text",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Legal Authority",
      "description": "Your Azorius insignia guarantees an audience with anyone and the people's respect; abusing it creates problems with your superiors."
    }
  },
  {
    "id": "agente_duplo_do_punho_negro",
    "source": "cos",
    "name": "Black Fist Double Agent",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "insight"
      ]
    },
    "toolProficiencies": [
      "disguise kit"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Disguise kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tears of Virulence emblem",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artisan's tools or a gaming set",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Double Agent",
      "description": "A reliable contact in the Tears of Virulence garrison passes you information; in exchange you get away with minor offenses in Phlan."
    }
  },
  {
    "id": "legionario_boros",
    "source": "ggr",
    "name": "Boros Legionnaire",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Boros insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Angel wing feather",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tattered Boros banner",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "2 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Legion Station",
      "description": "You requisition simple equipment, rest in any Boros garrison with medical care, and receive 1 gp per week as pay."
    }
  },
  {
    "id": "especialista_em_caravana",
    "source": "mba",
    "name": "Caravan Specialist",
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "whip",
        "name": "Whip",
        "qty": 1
      },
      {
        "catalogId": "tent",
        "name": "Tent",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Regional map",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Wagonmaster",
      "description": "Caravans draw two loyal workers, you identify the most defensible campsites, and you always know the cardinal directions."
    }
  },
  {
    "id": "herdeiro_de_aventureiros_famosos",
    "source": "ai",
    "name": "Celebrity Adventurer's Scion",
    "skillChoices": {
      "count": 2,
      "options": [
        "perception",
        "performance"
      ]
    },
    "toolProficiencies": [
      "disguise kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Disguise kit",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "30 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Name Dropping",
      "description": "You know influential people who offer minor assistance; common folk treat you deferentially, guaranteeing a meal or a bed."
    }
  },
  {
    "id": "bufao",
    "source": "phb",
    "name": "Charlatan",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "Disguise kit"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Dagger",
        "qty": 2
      },
      {
        "catalogId": "dice_set",
        "name": "Dice set",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Friendly Pocket",
      "description": "People trust you enough to safeguard precious goods."
    }
  },
  {
    "id": "guarda_da_cidade",
    "source": "scag",
    "name": "City Watch",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "insight"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Watch uniform",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Horn of calling",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Manacles",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Watcher's Eye",
      "description": "You know local laws and criminals and effortlessly find the watch outpost and the community's dens of criminal activity."
    }
  },
  {
    "id": "artesao_do_cla",
    "source": "scag",
    "name": "Clan Crafter",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "insight"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [
      "Dwarvish"
    ],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Clan maker's mark chisel",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp and a gem worth 10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Respect of the Stout Folk",
      "description": "In dwarf settlements you always get free room and board, with residents competing to offer you the finest services."
    }
  },
  {
    "id": "erudito",
    "source": "scag",
    "name": "Scholar",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "arcana",
        "nature",
        "religion"
      ]
    },
    "toolProficiencies": [
      "Calligrapher's supplies"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 gp and parchment",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Research",
      "description": "You can consult libraries and go unnoticed in institutions of learning."
    }
  },
  {
    "id": "refugiado_de_cormanthor",
    "source": "soh",
    "name": "Cormanthor Refugee",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [
      "Elvish"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Two-person tent",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": "holy_symbol",
        "name": "Holy symbol",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Shelter of the Elven Clergy",
      "description": "The clerics of Elventree offer free healing and shelter to you and your group, plus modest sustenance for you alone."
    }
  },
  {
    "id": "cortesao",
    "source": "scag",
    "name": "Courtier",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Court Functionary",
      "description": "Access to records and the workings of courts and governments, knowing who is influential and whom to approach."
    }
  },
  {
    "id": "criminoso",
    "source": "phb",
    "name": "Criminal",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "Thieves' tools"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Dagger",
        "qty": 1
      },
      {
        "catalogId": "thieves_tools",
        "name": "Thieves' tools",
        "qty": 1
      },
      {
        "catalogId": "crowbar",
        "name": "Crowbar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Contact",
      "description": "You have a reliable contact in each city with news and opportunities."
    }
  },
  {
    "id": "agente_dimir",
    "source": "ggr",
    "name": "Dimir Operative",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disguise kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Dimir insignia",
        "qty": 1
      },
      {
        "catalogId": "dagger",
        "name": "Dagger",
        "qty": 3
      },
      {
        "catalogId": null,
        "name": "Dark clothes",
        "qty": 1
      }
    ],
    "feature": {
      "name": "False Identity",
      "description": "An identity as a member of another guild, with documents and contacts, that you can discard to blend in among common folk."
    }
  },
  {
    "id": "dissidente",
    "source": "psa",
    "name": "Dissenter",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Simple puzzle box",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scroll of the five gods",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Shelter of Dissenters",
      "description": "You find a place to hide, rest, or recuperate among other dissenters, who shield you from those who hunt you."
    }
  },
  {
    "id": "vitima_de_dragao",
    "source": "cos",
    "name": "Dragon Casualty",
    "skillChoices": {
      "count": 2,
      "options": [
        "intimidation",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [
      "Draconic"
    ],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Dagger",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tattered rags",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scale torn from Vorgansharax",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Dragonscarred",
      "description": "Deformed by Vorgansharax's tortures; your notoriety opens doors, but it is hard to hide your scarred appearance."
    }
  },
  {
    "id": "mineiro_de_earthspur",
    "source": "mba",
    "name": "Earthspur Miner",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [
      "Dwarvish",
      "Undercommon"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Shovel or miner's pick",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Block and tackle",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Climber's kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Deep Miner",
      "description": "You never get lost in caves or mines you have mapped or visited, and you find water and food for four others each day."
    }
  },
  {
    "id": "artista",
    "source": "phb",
    "name": "Entertainer",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "performance"
      ]
    },
    "toolProficiencies": [
      "Disguise kit"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "costume",
        "name": "Costume",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "By Popular Demand",
      "description": "You always find work at festivals, taverns, and fairs."
    }
  },
  {
    "id": "sem_rosto",
    "source": "bgdia",
    "name": "Faceless",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "disguise kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Disguise kit",
        "qty": 1
      },
      {
        "catalogId": "costume",
        "name": "Costume",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Dual Personalities",
      "description": "Your public persona and your true self do not recognize each other; changing disguise hides who you really are."
    }
  },
  {
    "id": "agente_de_faccao",
    "source": "scag",
    "name": "Faction Agent",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "arcana",
        "history",
        "investigation",
        "nature",
        "religion",
        "animal_handling",
        "medicine",
        "perception",
        "survival",
        "deception",
        "intimidation",
        "performance",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Faction insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Faction's core text",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Safe Haven",
      "description": "Secret signals and passwords grant access to hidden shelter, free lodging, and help in finding information."
    }
  },
  {
    "id": "mercador_falido",
    "source": "ai",
    "name": "Failed Merchant",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Merchant's scale",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Supply Chain",
      "description": "Connections with wholesalers, suppliers, and other merchants let you locate items or information."
    }
  },
  {
    "id": "estrangeiro",
    "source": "scag",
    "name": "Far Traveler",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "perception"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Musical instrument or gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Poorly drawn maps of your homeland",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gem worth 10 gp",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "All Eyes on You",
      "description": "Your accent and mannerisms attract curiosity; you turn that attention into access to people and places."
    }
  },
  {
    "id": "perdido_nas_terras_feericas",
    "source": "witchlight",
    "name": "Feylost",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Musical instrument of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Feywild Connection",
      "description": "Feywild natives recognize your ways and lore and are inclined to help you if you are lost or in need."
    }
  },
  {
    "id": "pescador",
    "source": "gos",
    "name": "Fisher",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "fishing_tackle",
        "name": "Fishing tackle",
        "qty": 1
      },
      {
        "catalogId": "net",
        "name": "Net",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Favorite bait",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Harvest the Water",
      "description": "Advantage on checks with fishing equipment; you live a modest lifestyle and feed up to ten people per day."
    }
  },
  {
    "id": "heroi_do_povo",
    "source": "phb",
    "name": "Folk Hero",
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "smiths_tools",
        "name": "Smith's tools",
        "qty": 1
      },
      {
        "catalogId": "miners_pick",
        "name": "Miner's pick",
        "qty": 1
      },
      {
        "catalogId": "travelers_pack",
        "name": "Traveler's pack",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Rustic Hospitality",
      "description": "Common folk provide help and shelter in exchange for your protection."
    }
  },
  {
    "id": "apostador",
    "source": "ai",
    "name": "Gambler",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "insight"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Lucky charm",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Never Tell Me the Odds",
      "description": "In games of chance or risky decisions, you spot the best choice and opportunities too good to be true."
    }
  },
  {
    "id": "garoto_de_rua_do_portao",
    "source": "soh",
    "name": "Gate Urchin",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "thieves' tools"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Battered alms box",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Musical instrument",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cast-off military coat",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Red Plume and Mage Guild Contacts",
      "description": "Friends in the Red Plumes and the Mage's Guild provide food, temporary gear, and access to low-security areas."
    }
  },
  {
    "id": "guardiao_do_portao",
    "source": "planescape",
    "name": "Gate Warden",
    "skillChoices": {
      "count": 2,
      "options": [
        "persuasion",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Ring of keys",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Blank book",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Planar Infusion",
      "description": "You gain the Scion of the Outer Planes feat and know where to find free, modest lodging and food where you grew up."
    }
  },
  {
    "id": "criado_por_gigantes",
    "source": "bpg",
    "name": "Giant Foundling",
    "skillChoices": {
      "count": 2,
      "options": [
        "intimidation",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [
      "Giant"
    ],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "backpack",
        "name": "Backpack",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Stone or branch that reminds you of home",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Strike of the Giants",
      "description": "You gain the Strike of the Giants feat, tied to the type of giant you choose."
    }
  },
  {
    "id": "agente_golgari",
    "source": "ggr",
    "name": "Golgari Agent",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "survival"
      ]
    },
    "toolProficiencies": [
      "poisoner's kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Golgari insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Poisoner's kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pet beetle or spider",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Undercity Paths",
      "description": "Outside combat, you and allies you lead cross the city twice as fast through hidden underground routes."
    }
  },
  {
    "id": "sorridente",
    "source": "egw",
    "name": "Grinner",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "performance"
      ]
    },
    "toolProficiencies": [
      "thieves' tools"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": "disguise_kit",
        "name": "Disguise kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Musical instrument of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gold ring with a smiling face",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ballad of the Grinning Fool",
      "description": "Playing the ballad in a big-city tavern brings a member of the Golden Grin to shelter you and your companions."
    }
  },
  {
    "id": "anarquista_gruul",
    "source": "ggr",
    "name": "Gruul Anarch",
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "athletics"
      ]
    },
    "toolProficiencies": [
      "herbalism kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Gruul insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Hunting trap",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herbalism kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Boar skull",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Rubblebelt Refuge",
      "description": "You find shelter and rest in ruins and rubble, with water and food for you and five others per day."
    }
  },
  {
    "id": "mercador",
    "source": "phb",
    "name": "Guild Merchant",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "letter_of_introduction",
        "name": "Letter of introduction",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Guild Membership",
      "description": "The guild provides lodging, contacts, and favors in exchange for future favors."
    }
  },
  {
    "id": "morador_do_porto",
    "source": "mba",
    "name": "Harborfolk",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "vehicles (water)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "fishing_tackle",
        "name": "Fishing tackle",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Rowboat",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Harborfolk",
      "description": "Dockfolk welcome you with food and shelter and will even hide you from the City Watch if necessary."
    }
  },
  {
    "id": "alma_assombrada",
    "source": "cos",
    "name": "Haunted One",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "investigation",
        "religion",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "monster_hunters_pack",
        "name": "Monster hunter's pack",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artifact of special significance",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Heart of Darkness",
      "description": "Your eyes reveal the horrors you have faced; common folk treat you courteously, aid you, and fight at your side."
    }
  },
  {
    "id": "eremita",
    "source": "phb",
    "name": "Hermit",
    "skillChoices": {
      "count": 2,
      "options": [
        "medicine",
        "religion"
      ]
    },
    "toolProficiencies": [
      "Alchemist's supplies"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "herbs",
        "name": "Medicinal herbs",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp and other belongings",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Reclusion",
      "description": "People of faith offer you shelter and a hiding place."
    }
  },
  {
    "id": "mercador_de_hillsfar",
    "source": "soh",
    "name": "Hillsfar Merchant",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)",
      "vehicles (water)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Signet ring",
        "qty": 1
      },
      {
        "catalogId": "letter_of_introduction",
        "name": "Letter of introduction",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Factor",
      "description": "A loyal family retainer runs purchases, deliveries, and errands; they won't fight or enter obviously dangerous areas."
    }
  },
  {
    "id": "contrabandista_de_hillsfar",
    "source": "soh",
    "name": "Hillsfar Smuggler",
    "skillChoices": {
      "count": 2,
      "options": [
        "perception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "forgery kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "forgery_kit",
        "name": "Forgery kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Secret Passage",
      "description": "Smuggling contacts secure secret passage into or out of Hillsfar for you and your companions, no questions asked."
    }
  },
  {
    "id": "agente_da_casa",
    "source": "erlw",
    "name": "House Agent",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 2
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "House signet ring",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Identification papers",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "House Connections",
      "description": "House enclaves always offer food and lodging; missions bring supplies and transport, and former allies help you."
    }
  },
  {
    "id": "herdeiro",
    "source": "scag",
    "name": "Inheritor",
    "skillChoices": {
      "count": 2,
      "options": [
        "survival",
        "arcana",
        "history",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Your inheritance",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tool of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Inheritance",
      "description": "Your inheritance serves as a story hook, with its secrets and properties defined with the DM during play."
    }
  },
  {
    "id": "iniciado",
    "source": "psa",
    "name": "Initiate",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Simple puzzle box",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scroll of the five gods",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Trial of the Five Gods",
      "description": "By obeying Naktamun's norms, you receive constant training, comfortable lodging, and meals from servitor mummies."
    }
  },
  {
    "id": "inquisidor",
    "source": "psin",
    "name": "Inquisitor",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "religion"
      ]
    },
    "toolProficiencies": [
      "thieves' tools"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "holy_symbol",
        "name": "Holy symbol",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Legal Authority",
      "description": "As a church inquisitor, you can arrest criminals and, when no other authority is present, judge and sentence them."
    }
  },
  {
    "id": "investigador",
    "source": "vgr",
    "name": "Investigator",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "investigation",
        "perception"
      ]
    },
    "toolProficiencies": [
      "disguise kit",
      "thieves' tools"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Magnifying glass",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Evidence from an old case",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Official Inquiry",
      "description": "Determination, official papers, and smooth talk open places and people tied to your case; strangers avoid interfering."
    }
  },
  {
    "id": "bandido_da_estrada_de_ferro",
    "source": "cos",
    "name": "Iron Route Bandit",
    "skillChoices": {
      "count": 2,
      "options": [
        "stealth",
        "animal_handling"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Dark common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pack saddle",
        "qty": 1
      },
      {
        "catalogId": "thieves_pack",
        "name": "Burglar's pack",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Black Market Maker",
      "description": "You know who buys stolen animals and vehicles; your contact reports local demand and grants favors when you bring such goods."
    }
  },
  {
    "id": "engenheiro_izzet",
    "source": "ggr",
    "name": "Izzet Engineer",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "investigation"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Izzet insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Remains of a failed experiment",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Urban Infrastructure",
      "description": "You know a building's structure and find blueprints that reveal entrances and structural flaws; the guild won't shield you from the law."
    }
  },
  {
    "id": "cavaleiro_de_solamnia",
    "source": "dsotdq",
    "name": "Knight of Solamnia",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Rank insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Playing cards",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Squire of Solamnia",
      "description": "You gain the Squire of Solamnia feat; knight fortresses and camps offer free lodging and simple meals."
    }
  },
  {
    "id": "cavaleiro_de_uma_ordem",
    "source": "scag",
    "name": "Knight of the Order",
    "skillChoices": {
      "count": 2,
      "options": [
        "persuasion",
        "arcana",
        "history",
        "nature",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Insignia, banner, or seal of the order",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Order's Regard",
      "description": "Your order offers shelter, meals, and healing; religious orders turn to temples and allies sympathetic to your ideals."
    }
  },
  {
    "id": "estudante_de_lorehold",
    "source": "scc",
    "name": "Lorehold Student",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "School attire",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Lorehold Initiate",
      "description": "You gain the Strixhaven Initiate feat with Lorehold; if you cast spells, the Lorehold spell list is added to yours."
    }
  },
  {
    "id": "mago_da_alta_magia",
    "source": "dsotdq",
    "name": "Mage of High Sorcery",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "history"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Colored ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Initiate of High Sorcery",
      "description": "You gain the Initiate of High Sorcery feat; occupied High Towers and order members offer lodging and simple meals."
    }
  },
  {
    "id": "fuzileiro_naval",
    "source": "gos",
    "name": "Marine",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)",
      "vehicles (water)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Dagger of a fallen comrade",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cloth bearing your ship's symbol",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Steady",
      "description": "You can travel up to 16 hours a day before suffering forced march penalties, and you find on your own a safe route to beach a boat."
    }
  },
  {
    "id": "veterano_mercenario",
    "source": "scag",
    "name": "Mercenary Veteran",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Company uniform",
        "qty": 1
      },
      {
        "catalogId": "insignia",
        "name": "Rank insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Mercenary Life",
      "description": "You identify companies by insignia, know commanders and their reputations, find mercenaries' taverns, and get work between adventures."
    }
  },
  {
    "id": "aristocrata_de_mulmaster",
    "source": "mba",
    "name": "Mulmaster Aristocrat",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "performance"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 2
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools or musical instrument",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Born in the Heights",
      "description": "In Mulmaster, every class treats you with deference; aristocrats admit you to their circles, and you can reach a Zor or Zora."
    }
  },
  {
    "id": "nobre",
    "source": "phb",
    "name": "Noble",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 gp and a family ring",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Position of Privilege",
      "description": "People of lower rank treat you with respect and provide information."
    }
  },
  {
    "id": "representante_orzhov",
    "source": "ggr",
    "name": "Orzhov Representative",
    "skillChoices": {
      "count": 2,
      "options": [
        "intimidation",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Orzhov insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Chain of ten gold coins",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "1 pp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Leverage",
      "description": "You call on subordinates in the guild hierarchy — messages, rides, cleanups — and your influence grows with your status."
    }
  },
  {
    "id": "forasteiro",
    "source": "phb",
    "name": "Outlander",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "staff",
        "name": "Staff",
        "qty": 1
      },
      {
        "catalogId": "travelers_pack",
        "name": "Traveler's pack",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Wanderer",
      "description": "You sleep outdoors without losing preparation time and move through terrain without being tracked."
    }
  },
  {
    "id": "insurgente_de_phlan",
    "source": "cos",
    "name": "Phlan Insurgent",
    "skillChoices": {
      "count": 2,
      "options": [
        "stealth",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehicles (land)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "20 stakes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Keepsake from your former life",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Healer's kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Guerrilla",
      "description": "You quickly spot shelters and ambushes in the wild and improvise simple supplies (torches, rope, scraps) that are consumed when used."
    }
  },
  {
    "id": "refugiado_de_phlan",
    "source": "mba",
    "name": "Phlan Refugee",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "athletics"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Keepsake from your past life",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Phlan Survivor",
      "description": "Among Phlan refugees and sympathizers in Mulmaster, you find a place to sleep, recover, and hide from the watch."
    }
  },
  {
    "id": "reclamante",
    "source": "ai",
    "name": "Plaintiff",
    "skillChoices": {
      "count": 2,
      "options": [
        "medicine",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Legal Jargon",
      "description": "You know the local legal system's twists and use complex terms to intimidate or baffle laypeople, winning favors and special treatment."
    }
  },
  {
    "id": "filosofo_planar",
    "source": "planescape",
    "name": "Planar Philosopher",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "religion",
        "insight",
        "nature",
        "intimidation",
        "history",
        "stealth",
        "perception",
        "medicine",
        "survival",
        "persuasion",
        "performance",
        "athletics",
        "acrobatics",
        "deception",
        "investigation",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Portal key",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Manifesto of your philosophy",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes in your faction's style",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Conviction",
      "description": "You gain the Heir of the Outer Planes feat; members of your organization offer lodging and simple meals in their domains."
    }
  },
  {
    "id": "estudante_de_prismari",
    "source": "scc",
    "name": "Prismari Student",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "performance"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artisan's tools or musical instrument",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "School attire",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Prismari Initiate",
      "description": "You gain the Strixhaven Initiate feat with Prismari; if you cast spells, the Prismari spell list is added to yours."
    }
  },
  {
    "id": "estudante_de_quandrix",
    "source": "scc",
    "name": "Quandrix Student",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "nature"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Abacus",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "School attire",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Quandrix Initiate",
      "description": "You gain the Strixhaven Initiate feat with Quandrix; if you cast spells, the Quandrix spell list is added to yours."
    }
  },
  {
    "id": "cultista_rakdos",
    "source": "ggr",
    "name": "Rakdos Cultist",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "performance"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Rakdos insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Musical instrument of your choice",
        "qty": 1
      },
      {
        "catalogId": "costume",
        "name": "Costume",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Feared Reputation",
      "description": "Recognized as a Rakdos cultist, you get away with minor crimes when no authorities are around, and few dare report you."
    }
  },
  {
    "id": "recompensado",
    "source": "botmt",
    "name": "Rewarded",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "18 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Favor of Fortune",
      "description": "You gain the Lucky, Magic Initiate, or Skilled feat, your choice; the transformation that changed your life determines the feat."
    }
  },
  {
    "id": "estagiario_rival",
    "source": "ai",
    "name": "Rival Intern",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "investigation"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ledger of your former employer",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Inside Contact",
      "description": "You keep contacts at your former employer and other groups; you contact them for information, as the DM decides."
    }
  },
  {
    "id": "arruinado",
    "source": "botmt",
    "name": "Ruined",
    "skillChoices": {
      "count": 2,
      "options": [
        "stealth",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Cracked hourglass",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Rusty manacles",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Hunting trap",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gaming set of your choice",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "13 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Still Standing",
      "description": "You gain the Alert, Skilled, or Tough feat, your choice; your hidden reserves reflect how you faced the loss that changed your life."
    }
  },
  {
    "id": "entalhador_de_runas",
    "source": "bpg",
    "name": "Rune Carver",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "perception"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [
      "Giant"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Small knife",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Whetstone",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Rune Carver",
      "description": "You gain the Rune Carver feat, able to carve ancient runes into surfaces to grant them magical powers."
    }
  },
  {
    "id": "sabio",
    "source": "phb",
    "name": "Sage",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "history"
      ]
    },
    "toolProficiencies": [
      "Calligrapher's supplies"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 gp and parchment",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Scientific Discovery",
      "description": "You have access to places of learning and mentors in your field of study."
    }
  },
  {
    "id": "marinheiro",
    "source": "phb",
    "name": "Sailor",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "perception"
      ]
    },
    "toolProficiencies": [
      "Navigator's tools"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "sailors_kit",
        "name": "Sailor's kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ship's Passage",
      "description": "Ships offer free transport in exchange for your help with the crew."
    }
  },
  {
    "id": "identidade_secreta",
    "source": "soh",
    "name": "Secret Identity",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disguise kit",
      "forgery kit"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Disguise kit",
        "qty": 1
      },
      {
        "catalogId": "forgery_kit",
        "name": "Forgery kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Secret Identity",
      "description": "You maintain a secret identity that explains your presence and, with a sample in view, forge official documents and personal letters."
    }
  },
  {
    "id": "iniciado_selesnya",
    "source": "ggr",
    "name": "Selesnya Initiate",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Selesnya insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Healer's kit",
        "qty": 1
      },
      {
        "catalogId": "robes",
        "name": "Robes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Conclave's Shelter",
      "description": "In any Selesnya enclave, you and your companions find shelter and rest, and receive free healing (except for components)."
    }
  },
  {
    "id": "fanatico_das_sombras",
    "source": "soh",
    "name": "Shade Fanatic",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "forgery kit"
    ],
    "languages": [
      "Nefereu"
    ],
    "equipment": [
      {
        "catalogId": "forgery_kit",
        "name": "Forgery kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cylinder of translucent shadow",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Secret Society",
      "description": "On entering a city, you identify contacts who help or hinder the Shadow Enclave's return, depending on your goals."
    }
  },
  {
    "id": "construtor_de_navios",
    "source": "gos",
    "name": "Shipwright",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "perception"
      ]
    },
    "toolProficiencies": [
      "carpenter's tools",
      "vehicles (water)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Well-used carpenter's tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Blank book",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "I'll Fix It!",
      "description": "With carpenter's tools and wood, you repair a water vehicle, restoring 5 times your proficiency bonus in hit points to its hull."
    }
  },
  {
    "id": "estudante_de_silverquill",
    "source": "scc",
    "name": "Silverquill Student",
    "skillChoices": {
      "count": 2,
      "options": [
        "intimidation",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Book of poetry",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "School attire",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Silverquill Initiate",
      "description": "You gain the Strixhaven Initiate feat with Silverquill; if you cast spells, the Silverquill spell list is added to yours."
    }
  },
  {
    "id": "cientista_simic",
    "source": "ggr",
    "name": "Simic Scientist",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "medicine"
      ]
    },
    "toolProficiencies": [],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Simic insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Research notes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Squid ink",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Vial of acid",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Clades and Projects",
      "description": "You belong to a research clade or specialized project; roll a d6 or choose your research area on the corresponding table."
    }
  },
  {
    "id": "contrabandista",
    "source": "gos",
    "name": "Smuggler",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "deception"
      ]
    },
    "toolProficiencies": [
      "vehicles (water)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Stylish leather vest",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Leather boots",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Low Profile",
      "description": "A smuggler network helps you out of trouble: in a city, you and your companions stay for free in safe houses, unseen."
    }
  },
  {
    "id": "soldado",
    "source": "phb",
    "name": "Soldier",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Rank insignia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp and an enemy trophy",
        "qty": 1
      },
      {
        "catalogId": "dice_set",
        "name": "Dice set",
        "qty": 1
      }
    ],
    "feature": {
      "name": "War Pay",
      "description": "Your military rank guarantees a modest pension if you are invalided."
    }
  },
  {
    "id": "prisioneiro_de_stojanow",
    "source": "cos",
    "name": "Prisoner of Stojanow",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "perception"
      ]
    },
    "toolProficiencies": [
      "thieves' tools"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Small knife",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Memento of your previous life",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ex-Prisoner",
      "description": "You know which guards take bribes or look the other way and find shelter among other local criminals, away from the authorities."
    }
  },
  {
    "id": "nomade_de_ticklebelly",
    "source": "cos",
    "name": "Ticklebelly Nomad",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "animal_handling"
      ]
    },
    "toolProficiencies": [
      "herbalism kit"
    ],
    "languages": [
      "Giant"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Herbalism kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tribe's distinctive gem",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Hunting trap",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "At Home in the Wild",
      "description": "In the wild, you find a place to hide, rest, and recover, safe from most natural threats."
    }
  },
  {
    "id": "xerife_do_comercio",
    "source": "soh",
    "name": "Trade Sheriff",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "thieves' tools"
    ],
    "languages": [
      "Elvish"
    ],
    "equipment": [
      {
        "catalogId": "thieves_tools",
        "name": "Thieves' tools",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Gray cloak",
        "qty": 1
      },
      {
        "catalogId": "insignia",
        "name": "Sheriff's insignia",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "17 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Investigative Services",
      "description": "You invoke your office to access crime scenes and requisition equipment or temporary horses, and you identify local contacts."
    }
  },
  {
    "id": "cacador_de_recompensas_urbano",
    "source": "scag",
    "name": "Urban Bounty Hunter",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "insight",
        "persuasion",
        "stealth"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 2
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Clothes suited to your role",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ear to the Ground",
      "description": "A contact in any city you visit reports on people and places in the area, tied to the underworld, the streets, or high society."
    }
  },
  {
    "id": "garoto_de_rua",
    "source": "phb",
    "name": "Urchin",
    "skillChoices": {
      "count": 2,
      "options": [
        "sleight_of_hand",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disguise kit",
      "thieves' tools"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Small knife",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "City map",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pet rat",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Memento of your parents",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "City Secrets",
      "description": "You know the city's hidden passages; outside of combat, you and your companions travel between two points twice as fast."
    }
  },
  {
    "id": "membro_da_tribo_uthgardt",
    "source": "scag",
    "name": "Uthgardt Tribe Member",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Hunting trap",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Totemic token or tattoos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Uthgardt Heritage",
      "description": "You know your tribe's territory and the rest of the North; in any wilderness area, you find twice as much food and water when foraging."
    }
  },
  {
    "id": "vizir",
    "source": "psa",
    "name": "Vizier",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "religion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 2
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Artisan's tools or musical instrument",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scroll of the god's teachings",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Vizier's cartouche",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Voice of Authority",
      "description": "Your voice is your god's: initiates must obey, but abusing this power can earn you divine punishment."
    }
  },
  {
    "id": "agente_volstrucker",
    "source": "egw",
    "name": "Volstrucker Agent",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "poisoner's kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Common clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Black hooded cloak",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Poisoner's kit",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Shadow Network",
      "description": "Communicate at a distance with other order members: a letter written in arcane ink, addressed and burned, arrives intact at the recipient."
    }
  },
  {
    "id": "nobre_de_waterdeep",
    "source": "scag",
    "name": "Waterdhavian Noble",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "persuasion"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Fine clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Signet ring or brooch",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Scroll of lineage",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "High Birth",
      "description": "In Waterdeep and the North, your name and signet cover expenses: you keep a comfortable lifestyle without paying 2 gp per day."
    }
  },
  {
    "id": "viajante_do_espaco_selvagem",
    "source": "sps",
    "name": "Wildspacer",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [
      "navigator's tools",
      "vehicles (space)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Mooring stake",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traveler's clothes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Climbing claw",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Hempen rope, 50 feet",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Wildspace Adaptation",
      "description": "You gain the Tough feat; the lack of gravity doesn't impose disadvantage on your melee attacks."
    }
  },
  {
    "id": "carnavalesco_do_witchlight",
    "source": "witchlight",
    "name": "Witchlight Hand",
    "skillChoices": {
      "count": 2,
      "options": [
        "performance",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Disguise kit or musical instrument",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Playing cards",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Carnival uniform or costume",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Carnival Companion",
      "description": "You befriend another carnival attraction (roll a d8); the companion travels with you through the carnival but never abandons it."
    }
  },
  {
    "id": "estudante_de_witherbloom",
    "source": "scc",
    "name": "Witherbloom Student",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "survival"
      ]
    },
    "toolProficiencies": [
      "herbalism kit"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Ink",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Quill",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Plant identification book",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Iron pot",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 gp",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Witherbloom Initiate",
      "description": "You gain the Strixhaven Initiate feat with Witherbloom; if you cast spells, the Witherbloom spell list is added to yours."
    }
  }
]
;

export function getBackground(id: string): BackgroundDef | undefined {
  return BACKGROUNDS.find((b) => b.id === id);
}
