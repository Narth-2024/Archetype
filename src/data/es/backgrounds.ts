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
    "name": "Acolito",
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
        "name": "Símbolo sagrado",
        "qty": 1
      },
      {
        "catalogId": "incense",
        "name": "Incienso",
        "qty": 5
      },
      {
        "catalogId": "robes",
        "name": "Hábitos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Acolitado",
      "description": "Tienes una posición en un templo y puedes refugiarte y recibir ayuda de otros templos."
    }
  },
  {
    "id": "antropologo",
    "source": "toa",
    "name": "Antropólogo",
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
        "name": "Diario de cuero",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Lingüista adepto",
      "description": "Tras observar humanoides durante 1 día, te comunicas con ellos mediante palabras y gestos básicos, aunque no hablen ningún idioma que conozcas."
    }
  },
  {
    "id": "arqueologo",
    "source": "toa",
    "name": "Arqueólogo",
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
        "name": "Caja de madera con mapa",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Linterna de caza",
        "qty": 1
      },
      {
        "catalogId": "miners_pick",
        "name": "Pico de minador",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pala",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Conocimiento histórico",
      "description": "Al entrar en una ruina o mazmorra, identificas su propósito original y sus constructores, y estimas el valor de obras de arte con más de un siglo."
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
      "kit de herborista"
    ],
    "languages": [
      "Primordial"
    ],
    "equipment": [
      {
        "catalogId": "staff",
        "name": "Bastón de la tribu",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de herborista",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Armonía elemental",
      "description": "Como acción, canalizas un menudo hechizo elemental de tu orden: encender o apagar llamas, crear roca, agua o una ráfaga de viento."
    }
  },
  {
    "id": "viajante_astral",
    "source": "sps",
    "name": "Viajero astral",
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
        "name": "Diario",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Contacto divino",
      "description": "Ganas el rasgo Iniciación mágica (clérigo) y un secreto cósmico revelado por un dios errante en el Mar Astral."
    }
  },
  {
    "id": "atleta",
    "source": "moot",
    "name": "Atleta",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "athletics"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Disco de bronce o pelota de cuero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Amuleto de la suerte",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ecos de victoria",
      "description": "En cualquier pueblo a menos de 100 millas de donde creciste, hay un 50% de posibilidades de encontrar a alguien que te adore y te ofrezca alojamiento."
    }
  },
  {
    "id": "funcionario_azorius",
    "source": "ggr",
    "name": "Funcionario Azorius",
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
        "name": "Insignia Azorius",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pergamino con texto legal",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Autoridad legal",
      "description": "La insignia Azorius te garantiza audiencia con cualquier persona y el respeto del pueblo; abusar de ella trae problemas con tus superiores."
    }
  },
  {
    "id": "agente_duplo_do_punho_negro",
    "source": "cos",
    "name": "Agente doble del Puño Negro",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "insight"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Kit de disfraces",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Emblema de las Lágrimas de Virulencia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herramientas de artesano o juegos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Agente doble",
      "description": "Un contacto fiable en el campamento de las Lágrimas de Virulencia te proporciona información y te ayuda a salir de pequeños delitos en Phlan."
    }
  },
  {
    "id": "legionario_boros",
    "source": "ggr",
    "name": "Legionario Boros",
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
        "name": "Insignia Boros",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pluma de ala de ángel",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Estandarte rasgado de los Boros",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "2 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Puesto en la legión",
      "description": "Requisas equipo sencillo, descansas en cualquier guarnición Boros con atención médica y recibes 1 po por semana de paga."
    }
  },
  {
    "id": "especialista_em_caravana",
    "source": "mba",
    "name": "Especialista en caravanas",
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "whip",
        "name": "Látigo",
        "qty": 1
      },
      {
        "catalogId": "tent",
        "name": "Tienda de campaña",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Mapa regional",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Maestro de caravana",
      "description": "En caravanas atraes a dos trabajadores leales, identificas campamentos defendibles y siempre sabes los puntos cardinales."
    }
  },
  {
    "id": "herdeiro_de_aventureiros_famosos",
    "source": "ai",
    "name": "Heredero de aventureros famosos",
    "skillChoices": {
      "count": 2,
      "options": [
        "perception",
        "performance"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Kit de disfraces",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "30 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Lucirse con los contactos",
      "description": "Conoces personas influyentes que pueden darte ayuda menor; el pueblo común te trata con deferencia, asegurándote una comida o una cama."
    }
  },
  {
    "id": "bufao",
    "source": "phb",
    "name": "Bufón",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Daga",
        "qty": 2
      },
      {
        "catalogId": "dice_set",
        "name": "Kit de dados",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Bolsillo Amistoso",
      "description": "La gente confía en ti lo suficiente como para guardarte objetos preciados."
    }
  },
  {
    "id": "guarda_da_cidade",
    "source": "scag",
    "name": "Guardia de la ciudad",
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
        "name": "Uniforme de la guardia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cuerno de llamada",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Grilletes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ojo del vigilante",
      "description": "Conoces las leyes y los criminales locales, y localizas sin esfuerzo el puesto de la guardia y los antros delictivos de la comunidad."
    }
  },
  {
    "id": "artesao_do_cla",
    "source": "scag",
    "name": "Artesano del clan",
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
      "Enano"
    ],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cincel de marca del clan",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po y una gema de 10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Respeto del pueblo robusto",
      "description": "En los asentamientos enanos recibes alojamiento y comida gratis, y los habitantes compiten por ofrecerte los mejores servicios."
    }
  },
  {
    "id": "erudito",
    "source": "scag",
    "name": "Erudito",
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
      "kit de escriba"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 po y pergaminhos",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Investigación",
      "description": "Puedes consultar bibliotecas y pasar desapercibido en instituciones de aprendizaje."
    }
  },
  {
    "id": "refugiado_de_cormanthor",
    "source": "soh",
    "name": "Refugiado de Cormanthor",
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
      "Élfico"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Tienda de campaña para dos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": "holy_symbol",
        "name": "Símbolo sagrado",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Amparo del clero élfico",
      "description": "Los clérigos de Elventree te ofrecen curación y alojamiento gratuito a ti y a tu grupo, además de sustento modesto solo para ti."
    }
  },
  {
    "id": "cortesao",
    "source": "scag",
    "name": "Cortesano",
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
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Funcionario de la corte",
      "description": "Acceso a los registros y al funcionamiento de cortes y gobiernos, sabiendo quiénes son los influyentes y a quién acudir."
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
      "herramientas de ladrón"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Daga",
        "qty": 1
      },
      {
        "catalogId": "thieves_tools",
        "name": "Herramientas de ladrón",
        "qty": 1
      },
      {
        "catalogId": "crowbar",
        "name": "Palanca",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Contacto",
      "description": "Tienes un contacto fiable en cada ciudad con noticias y oportunidades."
    }
  },
  {
    "id": "agente_dimir",
    "source": "ggr",
    "name": "Agente Dimir",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Insignia Dimir",
        "qty": 1
      },
      {
        "catalogId": "dagger",
        "name": "Daga",
        "qty": 3
      },
      {
        "catalogId": null,
        "name": "Ropa oscura",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Identidad falsa",
      "description": "Identidad de miembro de otro gremio, con documentos y contactos, desechable para mezclarte con el pueblo sin gremio."
    }
  },
  {
    "id": "dissidente",
    "source": "psa",
    "name": "Disidente",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Caja de rompecabezas sencillo",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pergamino de los cinco dioses",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Amparo de los disidentes",
      "description": "Encuentras escondite, descanso y recuperación entre otros disidentes, que te protegen de quien te persigue."
    }
  },
  {
    "id": "vitima_de_dragao",
    "source": "cos",
    "name": "Víctima de dragón",
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
      "Dracónico"
    ],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Daga",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa andrajosa",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Escama arrancada a Vorgansharax",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Marcado por el dragón",
      "description": "Superviviente deformado por las torturas de Vorgansharax; la notoriedad te abre puertas, pero dificulta ocultar tu apariencia."
    }
  },
  {
    "id": "mineiro_de_earthspur",
    "source": "mba",
    "name": "Minero de Earthspur",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [
      "Enano",
      "Subcomún"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Pala o pico de minador",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Bloque y polipasto",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de escalada",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Minero de las profundidades",
      "description": "Nunca te pierdes en cuevas o minas ya visitadas o con mapa, y encuentras agua y comida para ti y otras cuatro personas al día."
    }
  },
  {
    "id": "artista",
    "source": "phb",
    "name": "Artista",
    "skillChoices": {
      "count": 2,
      "options": [
        "acrobatics",
        "performance"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "costume",
        "name": "Traje de fantasía",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Representación",
      "description": "Siempre encuentras trabajo en festivales, tabernas y ferias."
    }
  },
  {
    "id": "sem_rosto",
    "source": "bgdia",
    "name": "Sin rostro",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "disfraces"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Kit de disfraces",
        "qty": 1
      },
      {
        "catalogId": "costume",
        "name": "Traje de fantasía",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Personalidades duales",
      "description": "Tu persona pública y tu verdadero yo no se reconocen entre sí; cambiar de disfraz oculta quién eres."
    }
  },
  {
    "id": "agente_de_faccao",
    "source": "scag",
    "name": "Agente de facción",
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
        "name": "Insignia de la facción",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Texto fundamental de la facción",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Refugio seguro",
      "description": "Señas y contraseñas secretas dan acceso a un refugio oculto, alojamiento gratuito y ayuda para encontrar información."
    }
  },
  {
    "id": "mercador_falido",
    "source": "ai",
    "name": "Mercader fracasado",
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
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Balanza de mercader",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Cadena de suministro",
      "description": "Conexiones con mayoristas, proveedores y otros mercaderes para localizar objetos o información."
    }
  },
  {
    "id": "estrangeiro",
    "source": "scag",
    "name": "Forastero de tierras lejanas",
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
        "name": "Instrumento musical o juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Mapas mal trazados de la patria",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Joyas de 10 po",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Todos los ojos puestos en ti",
      "description": "Tu acento y tus modales atraen la curiosidad; conviertes esa atención en acceso a personas y lugares."
    }
  },
  {
    "id": "perdido_nas_terras_feericas",
    "source": "witchlight",
    "name": "Perdido en las Tierras Feéricas",
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
        "name": "Instrumento musical a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Conexión feérica",
      "description": "Los nativos de las Tierras Feéricas reconocen tus modos y saberes y tienden a ayudarte si te pierdes o necesitas socorro."
    }
  },
  {
    "id": "pescador",
    "source": "gos",
    "name": "Pescador",
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
        "name": "Equipo de pesca",
        "qty": 1
      },
      {
        "catalogId": "net",
        "name": "Red",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cebo favorito",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Cosecha de las aguas",
      "description": "Tienes ventaja en pruebas con equipo de pesca; mantienes un nivel de vida modesto y alimentas hasta diez personas al día."
    }
  },
  {
    "id": "heroi_do_povo",
    "source": "phb",
    "name": "Héroe Popular",
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
        "name": "Herramientas de herrero",
        "qty": 1
      },
      {
        "catalogId": "miners_pick",
        "name": "Pico de minador",
        "qty": 1
      },
      {
        "catalogId": "travelers_pack",
        "name": "Bolsa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Reputación Popular",
      "description": "Los pueblos comunes ofrecen ayuda y alojamiento a cambio de tu protección."
    }
  },
  {
    "id": "apostador",
    "source": "ai",
    "name": "Apostador",
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
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Amuleto de la suerte",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Nunca digan las probabilidades",
      "description": "En juegos de azar o decisiones de riesgo, identificas la mejor elección y las oportunidades demasiado buenas para ser verdad."
    }
  },
  {
    "id": "garoto_de_rua_do_portao",
    "source": "soh",
    "name": "Gamín de la puerta",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "herramientas de ladrón"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Caja de limosnas abollada",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Instrumento musical",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Abrigo militar desechado",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Contactos con las Plumas Rojas y los Magos",
      "description": "Amigos en las Plumas Rojas y en la Guilda de los Magos te proporcionan comida, equipo temporal y acceso a zonas poco seguras."
    }
  },
  {
    "id": "guardiao_do_portao",
    "source": "planescape",
    "name": "Guardián del portal",
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
        "name": "Llavecero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Libro en blanco",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Infusión planar",
      "description": "Ganas el rasgo Heredero de los Planos Exteriores y conoces alojamiento y comida gratuitas donde creciste."
    }
  },
  {
    "id": "criado_por_gigantes",
    "source": "bpg",
    "name": "Criado por gigantes",
    "skillChoices": {
      "count": 2,
      "options": [
        "intimidation",
        "survival"
      ]
    },
    "toolProficiencies": [],
    "languages": [
      "Gigante"
    ],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "backpack",
        "name": "Mochila",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Piedra o rama que recuerde al hogar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Golpe de los gigantes",
      "description": "Ganas el rasgo Golpe de los gigantes, ligado al tipo de gigante elegido."
    }
  },
  {
    "id": "agente_golgari",
    "source": "ggr",
    "name": "Agente Golgari",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "survival"
      ]
    },
    "toolProficiencies": [
      "kit de envenenador"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Insignia Golgari",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de envenenador",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Escarabajo o araña de mascota",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Caminos de la subciudad",
      "description": "Fuera de combate, tú y los aliados que lideres recorréis la ciudad dos veces más rápido por los caminos subterráneos ocultos."
    }
  },
  {
    "id": "sorridente",
    "source": "egw",
    "name": "Sonriente",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "performance"
      ]
    },
    "toolProficiencies": [
      "herramientas de ladrón"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": "disguise_kit",
        "name": "Kit de disfraces",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Instrumento musical a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Anillo dorado con rostro sonriente",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Balada del loco sonriente",
      "description": "Tocar la balada en una taberna de una gran ciudad hace que un miembro del Sonrisa Dorada te encuentre y os dé alojamiento a ti y a tu grupo."
    }
  },
  {
    "id": "anarquista_gruul",
    "source": "ggr",
    "name": "Anarquista Gruul",
    "skillChoices": {
      "count": 2,
      "options": [
        "animal_handling",
        "athletics"
      ]
    },
    "toolProficiencies": [
      "kit de herborista"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "insignia",
        "name": "Insignia Gruul",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Trampa de caza",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de herborista",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Calavera de jabalí",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Refugio de los escombros",
      "description": "Encuentras escondite y descanso en ruinas y escombros, con agua y comida para ti y otras cinco personas al día."
    }
  },
  {
    "id": "mercador",
    "source": "phb",
    "name": "Mercader de Gremio",
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
        "name": "Carta de presentación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Pertenencia a la Guilda",
      "description": "La guilda te ofrece alojamiento, contactos y favores a cambio de favores futuros."
    }
  },
  {
    "id": "morador_do_porto",
    "source": "mba",
    "name": "Habitante del puerto",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "sleight_of_hand"
      ]
    },
    "toolProficiencies": [
      "vehículos (acuáticos)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "fishing_tackle",
        "name": "Equipo de pesca",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Barca de remos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Gente del puerto",
      "description": "Los portuarios te acogen, te ofrecen comida y alojamiento e incluso te esconden de la guardia de la ciudad si es necesario."
    }
  },
  {
    "id": "alma_assombrada",
    "source": "cos",
    "name": "Alma atormentada",
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
        "name": "Kit de cazador de monstruos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Artefacto de especial significado",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Corazón de las tinieblas",
      "description": "Tus ojos revelan el horror ya afrontado; los comunes te tratan con cortesía, te ayudan e incluso luchan a tu lado."
    }
  },
  {
    "id": "eremita",
    "source": "phb",
    "name": "Eremita",
    "skillChoices": {
      "count": 2,
      "options": [
        "medicine",
        "religion"
      ]
    },
    "toolProficiencies": [
      "kit de alquimia"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "herbs",
        "name": "Hierbas medicinales",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po y otros enseres",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Retiro",
      "description": "Las personas de fe te ofrecen refugio y escondite."
    }
  },
  {
    "id": "mercador_de_hillsfar",
    "source": "soh",
    "name": "Mercader de Hillsfar",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)",
      "vehículos (acuáticos)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Anillo con sello",
        "qty": 1
      },
      {
        "catalogId": "letter_of_introduction",
        "name": "Carta de presentación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Factor",
      "description": "Un siervo leal de la familia hace compras, entregas y recados; no lucha ni entra en zonas peligrosas."
    }
  },
  {
    "id": "contrabandista_de_hillsfar",
    "source": "soh",
    "name": "Contrabandista de Hillsfar",
    "skillChoices": {
      "count": 2,
      "options": [
        "perception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "falsificación"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "forgery_kit",
        "name": "Kit de falsificación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Paso secreto",
      "description": "Contactos en el contrabando garantizan entrada o salida sigilosa de Hillsfar para ti y tus compañeros, sin preguntas."
    }
  },
  {
    "id": "agente_da_casa",
    "source": "erlw",
    "name": "Agente de la Casa",
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
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Anillo con sello de la casa",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Documentos de identificación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Conexión con la Casa",
      "description": "En los enclaves de la Casa siempre hay comida y alojamiento; las misiones traen suministros y transporte, y los antiguos aliados ayudan."
    }
  },
  {
    "id": "herdeiro",
    "source": "scag",
    "name": "Heredero",
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
        "name": "Tu herencia",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herramientas a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Herencia",
      "description": "La herencia funciona como gancho de la historia, con secretos y propiedades definidos con el director durante el juego."
    }
  },
  {
    "id": "iniciado",
    "source": "psa",
    "name": "Iniciado",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Caja de rompecabezas sencillo",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pergamino de los cinco dioses",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Prueba de los cinco dioses",
      "description": "Obedeciendo a las normas de Naktamun, recibes entrenamiento constante, morada cómoda y comidas proporcionadas por sirvientes momias."
    }
  },
  {
    "id": "inquisidor",
    "source": "psin",
    "name": "Inquisidor",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "religion"
      ]
    },
    "toolProficiencies": [
      "herramientas de ladrón"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": "holy_symbol",
        "name": "Símbolo sagrado",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Autoridad legal",
      "description": "Como inquisidor de la iglesia, tienes autoridad para arrestar criminales y, en ausencia de otras autoridades, juzgar y sentenciar."
    }
  },
  {
    "id": "investigador",
    "source": "vgr",
    "name": "Investigador",
    "skillChoices": {
      "count": 2,
      "options": [
        "insight",
        "investigation",
        "perception"
      ]
    },
    "toolProficiencies": [
      "disfraces",
      "herramientas de ladrón"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Lupa",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Prueba de un caso antiguo",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Requerimiento oficial",
      "description": "Determinación, papeles oficiales y conversación persuasiva te abren puertas y personas ligadas al crimen investigado; los ajenos evitan obstaculizarte."
    }
  },
  {
    "id": "bandido_da_estrada_de_ferro",
    "source": "cos",
    "name": "Bandido de la Ruta de Hierro",
    "skillChoices": {
      "count": 2,
      "options": [
        "stealth",
        "animal_handling"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Ropa oscura común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Silla de carga",
        "qty": 1
      },
      {
        "catalogId": "thieves_pack",
        "name": "Bolsa de ladrón",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Criador del mercado negro",
      "description": "Encuentras a quien busca animales y vehículos robados; tu contacto te informa de la demanda local y te ofrece favores si le traes dichos bienes."
    }
  },
  {
    "id": "engenheiro_izzet",
    "source": "ggr",
    "name": "Ingeniero Izzet",
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
        "name": "Insignia Izzet",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Restos de un experimento fallido",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Infraestructura urbana",
      "description": "Conoces la estructura de los edificios y hallas planos que revelan entradas y fallos estructurales; la guilda no te protege de problemas con la ley."
    }
  },
  {
    "id": "cavaleiro_de_solamnia",
    "source": "dsotdq",
    "name": "Caballero de Solamnia",
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
        "name": "Insignia de rango",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Baraja de cartas",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Escudero de Solamnia",
      "description": "Ganas el rasgo Escudero de Solamnia; las fortalezas y campamentos de los caballeros ofrecen alojamiento y comida sencilla gratuitos."
    }
  },
  {
    "id": "cavaleiro_de_uma_ordem",
    "source": "scag",
    "name": "Caballero de una orden",
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
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Insignia, estandarte o sello de la orden",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Consideración de la orden",
      "description": "Tu orden te ofrece refugio, comidas y curación; las órdenes religiosas recurren a templos y aliados simpatizantes de tus ideales."
    }
  },
  {
    "id": "estudante_de_lorehold",
    "source": "scc",
    "name": "Estudiante de Lorehold",
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
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traje escolar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de Lorehold",
      "description": "Ganas el rasgo Iniciado de Strixhaven con Lorehold; si lanzas conjuros, los hechizos de la tabla de Lorehold entran en tu lista."
    }
  },
  {
    "id": "mago_da_alta_magia",
    "source": "dsotdq",
    "name": "Mago de la Alta Magia",
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
        "name": "Tinta de colores",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de la Alta Magia",
      "description": "Ganas el rasgo Iniciado en la Alta Magia; las Torres de la Alta Magia ocupadas y los miembros de la orden ofrecen alojamiento y comida sencilla."
    }
  },
  {
    "id": "fuzileiro_naval",
    "source": "gos",
    "name": "Infante de Marina",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)",
      "vehículos (acuáticos)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "dagger",
        "name": "Daga de un compañero caído",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Paño con el símbolo del barco",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Estabilidad",
      "description": "Puedes recorrer hasta 16 horas al día antes de sufrir marcha forzada y hallas por tu cuenta una ruta segura para varar un barco en la playa."
    }
  },
  {
    "id": "veterano_mercenario",
    "source": "scag",
    "name": "Veterano mercenario",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Uniforme de la compañía",
        "qty": 1
      },
      {
        "catalogId": "insignia",
        "name": "Insignia de rango",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Vida mercenaria",
      "description": "Identificas compañías por sus insignias, conoces comandantes y reputaciones, hallas tabernas de mercenarios y consigues trabajo entre aventuras."
    }
  },
  {
    "id": "aristocrata_de_mulmaster",
    "source": "mba",
    "name": "Aristócrata de Mulmaster",
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
        "name": "Herramientas de artesano o instrumento musical",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Alto linaje",
      "description": "En Mulmaster todas las clases te tratan con deferencia; los aristócratas te reciben en sus círculos y puedes alcanzar a un Zor o Zora."
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
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 po y un anillo familiar",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Posición de Privilegio",
      "description": "Las personas de rango inferior te tratan con respeto y te proporcionan información."
    }
  },
  {
    "id": "representante_orzhov",
    "source": "ggr",
    "name": "Representante Orzhov",
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
        "name": "Insignia Orzhov",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cadena de diez monedas de oro",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "1 pl",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Palanca",
      "description": "Cobras ayuda de subordinados en la jerarquía de la guilda: mensajes, transportes, limpiezas; tu influencia crece conforme tu estatus."
    }
  },
  {
    "id": "forasteiro",
    "source": "phb",
    "name": "Forastero",
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
        "name": "Bastón",
        "qty": 1
      },
      {
        "catalogId": "travelers_pack",
        "name": "Bolsa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Camino de Nadie",
      "description": "Duermes al aire libre sin perder tiempo de preparación y te desplazas por el terreno sin ser rastreado."
    }
  },
  {
    "id": "insurgente_de_phlan",
    "source": "cos",
    "name": "Insurgente de Phlan",
    "skillChoices": {
      "count": 2,
      "options": [
        "stealth",
        "survival"
      ]
    },
    "toolProficiencies": [
      "vehículos (terrestres)"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "20 púas",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Recuerdo de la vida anterior",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de curación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Guerrilla",
      "description": "Reconoces rápidamente refugios y emboscadas en la naturaleza e improvisas suministros sencillos (antorchas, cuerda, retazos) que se consumen al usarlos."
    }
  },
  {
    "id": "refugiado_de_phlan",
    "source": "mba",
    "name": "Refugiado de Phlan",
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
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Recuerdo de la vida pasada",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Superviviente de Phlan",
      "description": "Entre refugiados de Phlan y simpatizantes en Mulmaster hallas dónde dormir, recuperarte y esconderte de la guardia."
    }
  },
  {
    "id": "reclamante",
    "source": "ai",
    "name": "Demandante",
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
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Jerga jurídica",
      "description": "Conoces los meandros del sistema legal local e intimidas o engañas a legos con términos complejos para obtener favores y trato especial."
    }
  },
  {
    "id": "filosofo_planar",
    "source": "planescape",
    "name": "Filósofo planar",
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
        "name": "Llave de portal",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Manifiesto de tu filosofía",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común al estilo de la facción",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Convicción",
      "description": "Ganas el rasgo Heredero de los Planos Exteriores; los miembros de tu organización te ofrecen alojamiento y comida sencilla en sus dominios."
    }
  },
  {
    "id": "estudante_de_prismari",
    "source": "scc",
    "name": "Estudiante de Prismari",
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
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Herramientas de artesano o instrumento musical",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traje escolar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de Prismari",
      "description": "Ganas el rasgo Iniciado de Strixhaven con Prismari; si lanzas conjuros, los hechizos de la tabla de Prismari entran en tu lista."
    }
  },
  {
    "id": "estudante_de_quandrix",
    "source": "scc",
    "name": "Estudiante de Quandrix",
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
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ábaco",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traje escolar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de Quandrix",
      "description": "Ganas el rasgo Iniciado de Strixhaven con Quandrix; si lanzas conjuros, los hechizos de la tabla de Quandrix entran en tu lista."
    }
  },
  {
    "id": "cultista_rakdos",
    "source": "ggr",
    "name": "Cultista Rakdos",
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
        "name": "Insignia Rakdos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Instrumento musical a elegir",
        "qty": 1
      },
      {
        "catalogId": "costume",
        "name": "Traje de fantasía",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Reputación temible",
      "description": "Te reconocen como cultista de Rakdos; los delitos menores quedan impunes si no hay autoridades presentes y casi nadie se atreve a denunciarte."
    }
  },
  {
    "id": "recompensado",
    "source": "botmt",
    "name": "Recompensado",
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
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "18 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Favor de la fortuna",
      "description": "Ganas los rasgos Afortunado, Iniciación Mágica o Habilidoso, a elegir; la transformación que cambió tu vida define el rasgo recibido."
    }
  },
  {
    "id": "estagiario_rival",
    "source": "ai",
    "name": "Becario rival",
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
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Libro de cuentas del empleador anterior",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Informante interno",
      "description": "Mantienes contactos de tu empleador anterior y de otros grupos; comunícate con ellos para obtener información, a criterio del DJ."
    }
  },
  {
    "id": "arruinado",
    "source": "botmt",
    "name": "Arruinado",
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
        "name": "Reloj de arena agrietado",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Grilletes herrumbrosos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Trampa de caza",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Juegos a elegir",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "13 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Aún en pie",
      "description": "Ganas los rasgos Alerta, Habilidoso o Duro, a elegir; tus reservas ocultas reflejan cómo afrontaste la pérdida que cambió tu vida."
    }
  },
  {
    "id": "entalhador_de_runas",
    "source": "bpg",
    "name": "Tallador de runas",
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
      "Gigante"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Herramientas de artesano",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cuchillo pequeño",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Piedra de afilar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Moldeador de runas",
      "description": "Ganas el rasgo Moldeador de runas, capaz de entallar runas ancestrales en las superfícies para dotarlas de poderes mágicos."
    }
  },
  {
    "id": "sabio",
    "source": "phb",
    "name": "Sabio",
    "skillChoices": {
      "count": 2,
      "options": [
        "arcana",
        "history"
      ]
    },
    "toolProficiencies": [
      "kit de escriba"
    ],
    "languages": [],
    "languageChoices": {
      "count": 2
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 po y pergaminhos",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Descubrimiento Científico",
      "description": "Tienes acceso a lugares de aprendizaje y mentores de tu área de estudio."
    }
  },
  {
    "id": "marinheiro",
    "source": "phb",
    "name": "Marinero",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "perception"
      ]
    },
    "toolProficiencies": [
      "kit de navegante"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "sailors_kit",
        "name": "Kit de marinero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Pasaje en Barco",
      "description": "Los barcos ofrecen transporte gratuito a cambio de tu ayuda en la tripulación."
    }
  },
  {
    "id": "identidade_secreta",
    "source": "soh",
    "name": "Identidad secreta",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disfraces",
      "falsificación"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": "disguise_kit",
        "name": "Kit de disfraces",
        "qty": 1
      },
      {
        "catalogId": "forgery_kit",
        "name": "Kit de falsificación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Identidad secreta",
      "description": "Mantienes una identidad secreta que explica tu presencia y, con un ejemplo a la vista, falsificas documentos oficiales y cartas personales."
    }
  },
  {
    "id": "iniciado_selesnya",
    "source": "ggr",
    "name": "Iniciado Selesnya",
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
        "name": "Insignia Selesnya",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de curación",
        "qty": 1
      },
      {
        "catalogId": "robes",
        "name": "Hábitos",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Refugio del cónclave",
      "description": "En cualquier enclave Selesnya tú y tus compañeros halláis refugio y descanso, y recibís curación gratuita (salvo componentes)."
    }
  },
  {
    "id": "fanatico_das_sombras",
    "source": "soh",
    "name": "Fanático de las Sombras",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "intimidation"
      ]
    },
    "toolProficiencies": [
      "falsificación"
    ],
    "languages": [
      "Netherino"
    ],
    "equipment": [
      {
        "catalogId": "forgery_kit",
        "name": "Kit de falsificación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cilindro de sombra translúcido",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Sociedad secreta",
      "description": "Al entrar en una ciudad identificas contactos que ayudan o dificultan el retorno del Enclave de las Sombras, según tus objetivos."
    }
  },
  {
    "id": "construtor_de_navios",
    "source": "gos",
    "name": "Carpintero de ribera",
    "skillChoices": {
      "count": 2,
      "options": [
        "history",
        "perception"
      ]
    },
    "toolProficiencies": [
      "herramientas de carpintero",
      "vehículos (acuáticos)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Herramientas de carpintero bien usadas",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Libro en blanco",
        "qty": 1
      },
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "¡Lo arreglaré!",
      "description": "Con herramientas de carpintero y madera reparas un vehículo acuático, restableciendo 5 × tu bonificador de competencia de PV del casco."
    }
  },
  {
    "id": "estudante_de_silverquill",
    "source": "scc",
    "name": "Estudiante de Silverquill",
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
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Libro de poesía",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Traje escolar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de Silverquill",
      "description": "Ganas el rasgo Iniciado de Strixhaven con Silverquill; si lanzas conjuros, los hechizos de la tabla de Silverquill entran en tu lista."
    }
  },
  {
    "id": "cientista_simic",
    "source": "ggr",
    "name": "Científico Simic",
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
        "name": "Insignia Simic",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Notas de investigación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Tinta de calamar",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Frasco de ácido",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Clados y proyectos",
      "description": "Perteneces a un clado de investigación o a un proyecto especializado; lanza 1d6 o elige tu área de investigación en la tabla correspondiente."
    }
  },
  {
    "id": "contrabandista",
    "source": "gos",
    "name": "Contrabandista",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "deception"
      ]
    },
    "toolProficiencies": [
      "vehículos (acuáticos)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Chaleco de cuero elegante",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Botas de cuero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Bajo perfil",
      "description": "Una red de contrabandistas te ayuda en apuros: en una ciudad tú y tus compañeros os alojáis gratis en casas seguras, sin ser vistos."
    }
  },
  {
    "id": "soldado",
    "source": "phb",
    "name": "Soldado",
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
        "name": "Insignia de rango",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po y un trofeo de enemigo",
        "qty": 1
      },
      {
        "catalogId": "dice_set",
        "name": "Kit de dados",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Paga de Guerra",
      "description": "Tu rango militar garantiza una pensión modesta si quedas invalidado."
    }
  },
  {
    "id": "prisioneiro_de_stojanow",
    "source": "cos",
    "name": "Prisionero de Stojanow",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "perception"
      ]
    },
    "toolProficiencies": [
      "herramientas de ladrón"
    ],
    "toolChoices": {
      "count": 1
    },
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Cuchillo pequeño",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Recuerdo de la vida anterior",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Ex prisionero",
      "description": "Sabes qué guardias aceptan sobornos o cierran los ojos y hallas refugio entre otros criminales locales, lejos de las autoridades."
    }
  },
  {
    "id": "nomade_de_ticklebelly",
    "source": "cos",
    "name": "Nómada de Ticklebelly",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "animal_handling"
      ]
    },
    "toolProficiencies": [
      "kit de herborista"
    ],
    "languages": [
      "Gigante"
    ],
    "equipment": [
      {
        "catalogId": null,
        "name": "Kit de herborista",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Joya distintiva de la tribu",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Trampa de caza",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "5 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "En casa en la naturaleza",
      "description": "En la naturaleza hallas un lugar para esconderte, descansar y recuperarte, seguro frente a la mayoría de las amenazas naturales."
    }
  },
  {
    "id": "xerife_do_comercio",
    "source": "soh",
    "name": "Sheriff del comercio",
    "skillChoices": {
      "count": 2,
      "options": [
        "investigation",
        "persuasion"
      ]
    },
    "toolProficiencies": [
      "herramientas de ladrón"
    ],
    "languages": [
      "Élfico"
    ],
    "equipment": [
      {
        "catalogId": "thieves_tools",
        "name": "Herramientas de ladrón",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Capa gris",
        "qty": 1
      },
      {
        "catalogId": "insignia",
        "name": "Insignia de sheriff",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "17 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Servicios de investigación",
      "description": "Invocas tu puesto para acceder a escenas del crimen y requisar equipo o caballos temporales, e identificas contactos locales."
    }
  },
  {
    "id": "cacador_de_recompensas_urbano",
    "source": "scag",
    "name": "Cazador de recompensas urbano",
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
        "name": "Ropa adecuada a tu ocupación",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Oído atento",
      "description": "Un contacto en cualquier ciudad que visitas te informa de personas y lugares de la zona, ligados al submundo, a las calles o a la alta sociedad."
    }
  },
  {
    "id": "garoto_de_rua",
    "source": "phb",
    "name": "Gamín",
    "skillChoices": {
      "count": 2,
      "options": [
        "sleight_of_hand",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "disfraces",
      "herramientas de ladrón"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Cuchillo pequeño",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Mapa de la ciudad",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Rata de mascota",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Recuerdo de tus padres",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Secretos de la ciudad",
      "description": "Conoces pasadizos ocultos de la ciudad; fuera de combate tú y tus compañeros recorréis entre dos puntos el doble de rápido."
    }
  },
  {
    "id": "membro_da_tribo_uthgardt",
    "source": "scag",
    "name": "Miembro de la tribu Uthgardt",
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
        "name": "Trampa de caza",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Amuleto totémico o tatuajes",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Herencia Uthgardt",
      "description": "Conoces el territorio de tu tribu y el resto del Norte; en cualquier zona salvaje hallas el doble de comida y agua al forrajear."
    }
  },
  {
    "id": "vizir",
    "source": "psa",
    "name": "Visir",
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
        "name": "Herramientas de artesano o instrumento musical",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pergamino de las enseñanzas del dios",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cartucho de visir",
        "qty": 1
      },
      {
        "catalogId": "fine_clothes",
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "25 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Voz de autoridad",
      "description": "Tu voz es la de tu dios: los iniciados deben obedecer, pero abusar de ese poder puede granjearte un castigo divino."
    }
  },
  {
    "id": "agente_volstrucker",
    "source": "egw",
    "name": "Agente Volstrucker",
    "skillChoices": {
      "count": 2,
      "options": [
        "deception",
        "stealth"
      ]
    },
    "toolProficiencies": [
      "kit de envenenador"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": null,
        "name": "Ropa común",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Capa negra con capucha",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Kit de envenenador",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Red de sombras",
      "description": "Comunícate a distancia con otros miembros de la orden: una carta con tinta arcano, dirigida y quemada, aparece intacta en el destinatario."
    }
  },
  {
    "id": "nobre_de_waterdeep",
    "source": "scag",
    "name": "Noble de Waterdeep",
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
        "name": "Ropa fina",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Anillo de sello o broche",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Pergamino de linaje",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "20 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Vida de alto linaje",
      "description": "En Waterdeep y el Norte el nombre y el sello cubren gastos: mantienes un estilo de vida cómodo sin pagar 2 po al día."
    }
  },
  {
    "id": "viajante_do_espaco_selvagem",
    "source": "sps",
    "name": "Viajante del Espacio Salvaje",
    "skillChoices": {
      "count": 2,
      "options": [
        "athletics",
        "survival"
      ]
    },
    "toolProficiencies": [
      "kit de navegante",
      "vehículos (espaciales)"
    ],
    "languages": [],
    "equipment": [
      {
        "catalogId": null,
        "name": "Palo de amarre (garrote)",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Ropa de viajero",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Garra de escalada",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Cuerda de cáñamo, 50 pies",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "10 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Adaptación al espacio salvaje",
      "description": "Ganas el rasgo Duro; la ausencia de gravedad no impone desventaja a tus ataques cuerpo a cuerpo."
    }
  },
  {
    "id": "carnavalesco_do_witchlight",
    "source": "witchlight",
    "name": "Peón de Brujaluz",
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
        "name": "Kit de disfraces o instrumento musical",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Baraja de cartas",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Uniforme o traje de la feria",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "8 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Compañero de la feria",
      "description": "Amistad con otra atracción fija de la feria (tira 1d8); tu compañero circula contigo por la feria, pero no te abandona."
    }
  },
  {
    "id": "estudante_de_witherbloom",
    "source": "scc",
    "name": "Estudiante de Witherbloom",
    "skillChoices": {
      "count": 2,
      "options": [
        "nature",
        "survival"
      ]
    },
    "toolProficiencies": [
      "kit de herborista"
    ],
    "languages": [],
    "languageChoices": {
      "count": 1
    },
    "equipment": [
      {
        "catalogId": "ink",
        "name": "Tinta",
        "qty": 1
      },
      {
        "catalogId": "quill",
        "name": "Pluma",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Libro de identificación de plantas",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "Olla de hierro",
        "qty": 1
      },
      {
        "catalogId": null,
        "name": "15 po",
        "qty": 1
      }
    ],
    "feature": {
      "name": "Iniciado de Witherbloom",
      "description": "Ganas el rasgo Iniciado de Strixhaven con Witherbloom; si lanzas conjuros, los hechizos de la tabla de Witherbloom entran en tu lista."
    }
  }
]
;

export function getBackground(id: string): BackgroundDef | undefined {
  return BACKGROUNDS.find((b) => b.id === id);
}
