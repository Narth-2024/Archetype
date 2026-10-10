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
    "name": "Artífice",
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
        "name": "Arreglo Mágico",
        "description": "Acción con herramientas en mano: das a un objeto no mágico luz, mensaje grabado, olor/sonido o imagen; el efecto dura hasta que lo cierras (máx. objetos = mod. de INT)."
      },
      {
        "level": 1,
        "name": "Lanzamiento de conjuros",
        "description": "Preparas conjuros = INT + la mitad del nivel de artífice (mín. 1); lanzas usando herramientas de artesano o de ladrón como foco y puedes lanzar rituales preparados."
      },
      {
        "level": 2,
        "name": "Infundir Objeto",
        "description": "Tras un descanso largo, tocas objetos no mágicos para volverlos mágicos con infusiones; conoces 4 infusiones y el límite de objetos infundidos crece con el nivel."
      },
      {
        "level": 3,
        "name": "Especialista en Artífice",
        "description": "Eliges una especialización (Alquimista, Armero, Artillero o Herrero de Batalla), que define tu función y tus recursos."
      },
      {
        "level": 3,
        "name": "La Herramienta Adecuada para el Trabajo",
        "description": "Con 1 hora de trabajo continuado (durante un descanso), creas por conjuro un conjunto de herramientas de artesano en un espacio libre a 5 pies; desaparece al usarlo de nuevo."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 5,
        "name": "Recursos del Especialista",
        "description": "Recursos adicionales de la especialización elegida, concedidos en los niveles 5, 9 y 15."
      },
      {
        "level": 6,
        "name": "Pericia con Herramientas",
        "description": "Bono de competencia doble en pruebas de habilidad que usen competencia con herramientas."
      },
      {
        "level": 7,
        "name": "Relámpago de Ingenio",
        "description": "Reacción: añades el mod. de INT a una prueba de habilidad o salvación de ti o de una criatura que veas a 30 pies; usos = mod. de INT/ descanso largo."
      },
      {
        "level": 10,
        "name": "Adepto en Objetos Mágicos",
        "description": "Te sintonizas hasta 4 objetos mágicos y creas objetos comunes o poco comunes en 1/4 del tiempo y la mitad del coste."
      },
      {
        "level": 11,
        "name": "Objeto que Almacena Magia",
        "description": "Tras un descanso largo, guardas un conjuro de 1º o 2º nivel en un arma o foco; una criatura que lo sostiene lo lanza con una acción, hasta 2× mod. de INT (mín. 2)."
      },
      {
        "level": 14,
        "name": "Veterano en Objetos Mágicos",
        "description": "Te sintonizas hasta 5 objetos mágicos e ignoras los requisitos de clase, raza, conjuro y nivel para sintonizar u usar objetos mágicos."
      },
      {
        "level": 18,
        "name": "Maestro de Objetos Mágicos",
        "description": "Te sintonizas hasta 6 objetos mágicos al mismo tiempo."
      },
      {
        "level": 20,
        "name": "Alma del Artífice",
        "description": "+1 en cada salvación por objeto mágico sintonizado; al caer a 0 PV sin morir, terminas una infusión para quedar a 1 PV en vez de 0."
      }
    ]
  },
  {
    "id": "barbaro",
    "source": "phb",
    "name": "Bárbaro",
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
        "name": "Furia",
        "description": "Acción adicional durante 1 minuto: ventaja en FUER, +daño en ataques cuerpo a cuerpo con FUER y resistencia al daño; no puedes lanzar ni concentrar conjuros; usos/ descanso largo."
      },
      {
        "level": 1,
        "name": "Defensa sin Armadura",
        "description": "Sin armadura: CA = 10 + mod. DES + mod. CON (se permite escudo)."
      },
      {
        "level": 2,
        "name": "Ataque Temerario",
        "description": "Puedes atacar temerariamente: ventaja en ataques cuerpo a cuerpo con FUER en este turno y los ataques contra ti tienen ventaja hasta tu próximo turno."
      },
      {
        "level": 2,
        "name": "Sentido del Peligro",
        "description": "Ventaja en salvaciones de DES contra efectos que veas (trampas y conjuros); no puedes estar ciego, sordo o incapacitado."
      },
      {
        "level": 3,
        "name": "Camino Primordial",
        "description": "Concedido por la subclase elegida."
      },
      {
        "level": 3,
        "name": "Conocimiento Primordial (opcional)",
        "description": "Regla opcional de Tasha: ganas competencia en una pericia a elegir de bárbaro en el 3º nivel y en otra en el 10º."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques al usar la acción de atacar."
      },
      {
        "level": 5,
        "name": "Movimiento Rápido",
        "description": "+10 pies de velocidad mientras no lleves armadura pesada."
      },
      {
        "level": 6,
        "name": "Recursos del Camino",
        "description": "Recursos adicionales del Camino Primordial, concedidos en los niveles 6, 10 y 14."
      },
      {
        "level": 7,
        "name": "Instinto Feral",
        "description": "Ventaja en la iniciativa; si estás sorprendido, actúas con normalidad en el primer turno, siempre que entres en Furia antes que nada."
      },
      {
        "level": 7,
        "name": "Salto Instintivo (opcional)",
        "description": "Regla opcional de Tasha: como parte de la acción adicional de entrar en Furia, puedes moverte hasta la mitad de tu velocidad."
      },
      {
        "level": 9,
        "name": "Crítico Brutal",
        "description": "Dado extra de daño en críticos cuerpo a cuerpo: +1 dado en el 9º, +2 en el 13º y +3 en el 17º nivel."
      },
      {
        "level": 11,
        "name": "Furia Incansable",
        "description": "Al caer a 0 PV en Furia, salvación de CON con CD 10 para quedar a 1 PV; la CD sube 5 con cada uso y vuelve a 10 al descansar."
      },
      {
        "level": 15,
        "name": "Furia Persistente",
        "description": "La Furia solo termina si quedas inconsciente o decides ponerle fin."
      },
      {
        "level": 18,
        "name": "Poder Indomable",
        "description": "Si el total de una prueba de FUER es menor que tu valor de FUER, usas el valor del atributo en lugar del total."
      },
      {
        "level": 20,
        "name": "Campeón Primordial",
        "description": "Tus valores de FUER y CON aumentan en 4 y su máximo pasa a 24."
      }
    ]
  },
  {
    "id": "bardo",
    "source": "phb",
    "name": "Bardo",
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
        "name": "Lanzamiento de conjuros",
        "description": "Lanzas conjuros de bardo con CAR; conoces 2 trucos y 4 conjuros en el 1º nivel, aprendes más según la tabla y puedes lanzar conjuros conocidos como ritual."
      },
      {
        "level": 1,
        "name": "Inspiración Bárdica",
        "description": "Acción adicional: otorgas un d6 a una criatura que te oiga a 60 pies (10 min); el dado pasa a d8 en el 5º, d10 en el 10º y d12 en el 15º; usos = mod. CAR/ descanso largo."
      },
      {
        "level": 2,
        "name": "Saber Improvisado",
        "description": "Añades la mitad del bono de competencia (redondeado hacia abajo) a cualquier prueba de habilidad sin competencia."
      },
      {
        "level": 2,
        "name": "Canción de Descanso",
        "description": "En un descanso corto, quien gaste dados de vida recupera +1d6 PV (d8 en el 9º, d10 en el 13º y d12 en el 17º nivel)."
      },
      {
        "level": 2,
        "name": "Inspiración Mágica (opcional)",
        "description": "Regla opcional de Tasha: una criatura con tu Inspiración puede sumar el dado a los PV recuperados o al daño de un conjuro que lances."
      },
      {
        "level": 3,
        "name": "Colegio de Bardo",
        "description": "Eliges un colegio de bardo (Conocimiento, Valor, Espadas...), que otorga conjuros propios y nuevas capacidades."
      },
      {
        "level": 3,
        "name": "Pericia",
        "description": "Duplicas el bono de competencia en 2 pericias elegidas; eliges 2 pericias más en el 10º nivel."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad Bárdica (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias una pericia de Pericia o un truco por otro de la lista de bardo."
      },
      {
        "level": 5,
        "name": "Fuente de Inspiración",
        "description": "Recuperas todos los usos de Inspiración Bárdica al terminar un descanso corto o largo."
      },
      {
        "level": 6,
        "name": "Contramagia",
        "description": "Acción: actuas hasta el final de tu próximo turno; tú y tus aliados a 30 pies tenéis ventaja en salvaciones contra miedo y encantamiento (deben oírte)."
      },
      {
        "level": 6,
        "name": "Recursos del Colegio",
        "description": "Recursos del colegio de bardo, concedidos en los niveles 6 y 14."
      },
      {
        "level": 10,
        "name": "Secretos Mágicos",
        "description": "Eliges 2 conjuros de cualquier lista de clase; ganas 2 más en el 14º y otros 2 en el 18º nivel."
      },
      {
        "level": 20,
        "name": "Inspiración Superior",
        "description": "Si ruedas la iniciativa sin usos de Inspiración Bárdica restantes, recuperas 1 uso."
      }
    ]
  },
  {
    "id": "bruxo",
    "source": "phb",
    "name": "Brujo",
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
        "name": "Patrón Sobrenatural",
        "description": "Eliges un patrono (El Archihada, El Gran Antiguo, La Hoja Maldita...), que otorga poderes y recursos en los niveles 6, 10 y 14."
      },
      {
        "level": 1,
        "name": "Magia de Pacto",
        "description": "Lanzas con CAR: 2 trucos y 2 conjuros en el 1º nivel; todos los slots tienen el mismo nivel y se recuperan en descanso corto o largo."
      },
      {
        "level": 2,
        "name": "Invocaciones Profanas",
        "description": "Eliges 2 invocaciones profanas (más según la tabla) y puedes cambiar una de ellas al subir de nivel en esta clase."
      },
      {
        "level": 3,
        "name": "Dones de Pacto",
        "description": "El patrono te concede un regalo: Arma de Pacto, Cadena, Tomo o Talismán."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad Profana (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias un truco, la opción de Dones de Pacto o un conjuro de Arcano Místico."
      },
      {
        "level": 6,
        "name": "Recursos del Patrono",
        "description": "Recursos del patrono elegido, concedidos en los niveles 6, 10 y 14."
      },
      {
        "level": 11,
        "name": "Arcano Místico",
        "description": "Eliges un conjuro de 6º (11º), 7º (13º), 8º (15º) y 9º (17º) nivel lanzable una vez sin slot; se recupera en descanso largo."
      },
      {
        "level": 20,
        "name": "Maestro Profano",
        "description": "1 minuto suplicando a tu patrono recupera todos los slots de Magia de Pacto; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "cacador_de_sangue",
    "source": "ddb",
    "name": "Cazador de Sangre",
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
        "name": "Maldición del Cazador",
        "description": "Ventaja en Supervivencia para rastrear y en pruebas de INT para recordar información sobre feéricos, demonios y no-muertos."
      },
      {
        "level": 1,
        "name": "Maldición de Sangre",
        "description": "Conoces 1 maldición de sangre (nueva en el 6º, 10º, 14º y 18º); usos/ descanso: 1, 2 en el 6º, 3 en el 13º y 4 en el 17º; puedes ampliarla sufriendo daño necrótico igual al dado de hemocraft."
      },
      {
        "level": 2,
        "name": "Estilo de Combate",
        "description": "Eliges un estilo (tiro, duelo, arma a dos manos, doble empuñadura...); ninguna opción puede elegirse dos veces."
      },
      {
        "level": 2,
        "name": "Rito Carmesí",
        "description": "Acción adicional: activas un rito en el arma hasta el descanso; los golpes se vuelven mágicos y causan +dado de hemocraft de un tipo elemental; sufres daño necrótico igual al activarlo."
      },
      {
        "level": 3,
        "name": "Orden del Cazador de Sangre",
        "description": "Eliges una orden de cazadores de sangre, que guía tu filosofía y otorga recursos."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques al usar la acción de atacar."
      },
      {
        "level": 6,
        "name": "Marca de Castigo",
        "description": "Al acertar con un arma rituada, marcas a la criatura: sabes su dirección y sufre daño psíquico = mod. de hemocraft al herirte o a un aliado a 5 pies; 1/ descanso."
      },
      {
        "level": 7,
        "name": "Recursos de la Orden",
        "description": "Recursos de la orden elegida, concedidos en los niveles 7, 11, 15 y 18."
      },
      {
        "level": 7,
        "name": "Perfeccionamiento del Rito Carmesí",
        "description": "Aprendes un rito carmesí adicional en el 7º nivel y uno más en el 14º nivel."
      },
      {
        "level": 9,
        "name": "Psicometría Macabra",
        "description": "Ventaja en pruebas de Historia (INT) sobre la historia siniestra del objeto que tocas o del lugar donde estás; puedes tener breves visiones del pasado."
      },
      {
        "level": 10,
        "name": "Aumento de las Tinieblas",
        "description": "+5 pies de velocidad y bono = mod. de hemocraft (mín. +1) en salvaciones de FUER, DES y CON."
      },
      {
        "level": 13,
        "name": "Marca de Vínculo",
        "description": "El daño psíquico de la Marca de Castigo se duplica (mín. 2); el objetivo marcado no puede usar Correr y sufre 4d6 y salvación de SAB al teleportarse o cambiar de plano."
      },
      {
        "level": 14,
        "name": "Alma Endurecida",
        "description": "Ventaja en salvaciones contra estar encantado o asustado."
      },
      {
        "level": 20,
        "name": "Maestría Sangrienta",
        "description": "Una vez por turno, puedes volver a tirar un dado de hemocraft y usar cualquier resultado; un crítico con un arma rituada recupera 1 uso de Maldición de Sangre."
      }
    ]
  },
  {
    "id": "clerigo",
    "source": "phb",
    "name": "Clérigo",
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
        "name": "Lanzamiento de conjuros",
        "description": "Preparas conjuros = SAB + nivel de clérigo (mín. 1); conoces 3 trucos en el 1º nivel, lanzas con símbolo sagrado y puedes lanzar rituales preparados."
      },
      {
        "level": 1,
        "name": "Dominio Divino",
        "description": "Eliges un dominio (Vida, Luz, Conocimiento...), que define conjuros del dominio, habilidades propias y usos extras de Canalizar Divinidad."
      },
      {
        "level": 2,
        "name": "Canalizar Divinidad",
        "description": "Usas energía divina: Expulsar No-Muertos y el efecto del dominio; 1 uso por descanso, 2 desde el 6º y 3 desde el 18º nivel."
      },
      {
        "level": 2,
        "name": "Recursos del Dominio",
        "description": "Recursos del dominio elegido, concedidos en los niveles 2, 6, 8 y 17."
      },
      {
        "level": 2,
        "name": "Canalizar Poder Divino (opcional)",
        "description": "Regla opcional de Tasha: una acción adicional gasta 1 uso de Canalizar Divinidad para recuperar un slot de nivel ≤ la mitad del bono de competencia (redondeado hacia arriba)."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad de Trucos (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias un truco de Lanzamiento de conjuros por otro de la lista de clérigo."
      },
      {
        "level": 5,
        "name": "Destruir No-Muertos",
        "description": "Los no-muertos que fallen al ser expulsados se destruyen si su CR es ≤ 1/2 (5º), 1 (8º), 2 (11º), 3 (14º) o 4 (17º)."
      },
      {
        "level": 10,
        "name": "Intervención Divina",
        "description": "Acción: pides ayuda a tu deidad tirando d% ≤ nivel de clérigo; funciona automáticamente en el 20º nivel (1/ 7 días, si no, tras un descanso largo)."
      }
    ]
  },
  {
    "id": "druida",
    "source": "phb",
    "name": "Druida",
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
        "name": "Lengua Druídica",
        "description": "Puedes hablar y escribir la lengua druídica secreta; los mensajes dejados con ella solo los perciben (no descifran) quienes también la conocen."
      },
      {
        "level": 1,
        "name": "Lanzamiento de conjuros",
        "description": "Preparas conjuros = SAB + nivel de druida (mín. 1); lanzas con foco druídico y puedes lanzar conjuros preparados como ritual."
      },
      {
        "level": 2,
        "name": "Forma Salvaje",
        "description": "Acción: te transformas en una bestia ya vista (2 usos/ descanso corto); CR máx. 1/4 sin vuelo o natación (2º), 1/2 sin vuelo (4º) y 1 libre (8º)."
      },
      {
        "level": 2,
        "name": "Círculo Druídico",
        "description": "Eliges un círculo (Luna, Tierra, Sueños...), que define tu filosofía y tus poderes."
      },
      {
        "level": 2,
        "name": "Compañero Salvaje (opcional)",
        "description": "Regla opcional de Tasha: gastas 1 uso de Forma Salvaje para lanzar Encontrar Familiar sin componentes materiales; el familiar es feérico y dura la mitad de tu nivel en horas."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad de Trucos (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias un truco de Lanzamiento de conjuros por otro de la lista de druida."
      },
      {
        "level": 6,
        "name": "Recursos del Círculo",
        "description": "Recursos del círculo druídico, concedidos en los niveles 6, 10 y 14."
      },
      {
        "level": 18,
        "name": "Cuerpo Atemporal",
        "description": "Envejeces 1 año cada 10 años que pasan."
      },
      {
        "level": 18,
        "name": "Conjuros de Bestia",
        "description": "Puedes lanzar conjuros druídicos en cualquier forma de bestia: componentes verbales y gestuales, pero no materiales."
      },
      {
        "level": 20,
        "name": "Arquidruida",
        "description": "Usas Forma Salvaje sin límite y ignoras los componentes verbales, gestuales y materiales (sin coste) de los conjuros druídicos."
      }
    ]
  },
  {
    "id": "feiticeiro",
    "source": "phb",
    "name": "Hechicero",
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
        "name": "Lanzamiento de conjuros",
        "description": "Lanzas conjuros de hechicero con CAR; conoces 4 trucos y 2 conjuros en el 1º nivel y aprendes más según la tabla."
      },
      {
        "level": 1,
        "name": "Origen Hechicero",
        "description": "Eliges un origen (Sangre Dracónica, Magia Salvaje...), que describe la fuente de tu poder innato."
      },
      {
        "level": 2,
        "name": "Fuente de Magia",
        "description": "Puntos de hechicería = tu nivel (se recuperan en descanso largo); conviertes puntos en slots y slots en puntos como acción adicional."
      },
      {
        "level": 3,
        "name": "Metamagia",
        "description": "Eliges 2 opciones de metamagia (2 más en el 10º y 2 en el 17º nivel); solo puedes aplicar una opción a cada conjuro lanzado."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad Hechicera (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias una metamagia o un truco por otro de la lista de hechicero."
      },
      {
        "level": 5,
        "name": "Orientación Mágica (opcional)",
        "description": "Regla opcional de Tasha: al fallar una prueba de habilidad, gastas 1 punto de hechicería para volver a tirar el d20."
      },
      {
        "level": 6,
        "name": "Recursos del Origen",
        "description": "Recursos del origen hechicero, concedidos en los niveles 6, 14 y 18."
      },
      {
        "level": 20,
        "name": "Recuperación Hechicera",
        "description": "Recuperas 4 puntos de hechicería siempre que terminas un descanso corto."
      }
    ]
  },
  {
    "id": "guerreiro",
    "source": "phb",
    "name": "Guerrero",
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
        "name": "Estilo de Combate",
        "description": "Eliges un estilo (defensa, duelo, protección, arma a dos manos, tiro...); ninguna opción puede elegirse dos veces."
      },
      {
        "level": 1,
        "name": "Segundo Aliento",
        "description": "Acción adicional: recuperas 1d10 + nivel de guerrero PV; 1/ descanso corto."
      },
      {
        "level": 2,
        "name": "Oleada de Acción",
        "description": "Ganas una acción extra en tu turno; 1 uso por descanso corto y 2 usos desde el 17º nivel (máx. 1 por turno)."
      },
      {
        "level": 3,
        "name": "Arquetipo Marcial",
        "description": "Eliges un arquétipo (Campeón, Maestro de Armas, Caballero Arcano...), que define tus técnicas."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19; el Guerrero también lo recibe en los niveles 6 y 14."
      },
      {
        "level": 4,
        "name": "Versatilidad Marcial (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias un estilo de combate por otro disponible para el guerrero."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques en la acción de atacar, tres en el 11º y cuatro en el 20º nivel."
      },
      {
        "level": 7,
        "name": "Recursos del Arquétipo",
        "description": "Recursos del arquétipo marcial, concedidos en los niveles 7, 10, 15 y 18."
      },
      {
        "level": 9,
        "name": "Indomable",
        "description": "Puedes volver a tirar un salvamento fallido, usando el nuevo resultado; 1 uso/ descanso largo, 2 en el 13º y 3 en el 17º nivel."
      }
    ]
  },
  {
    "id": "ladino",
    "source": "phb",
    "name": "Pícaro",
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
        "name": "Pericia",
        "description": "Duplicas el bono de competencia en 2 pericias o en 1 perícia y herramientas de ladrón; eliges 2 competencias más en el 6º nivel."
      },
      {
        "level": 1,
        "name": "Ataque Furtivo",
        "description": "+1d6 de daño (aumenta 1d6 por nivel de pícaro, hasta 10d6) si tienes ventaja o el objetivo está a 5 pies de un enemigo; exige un arma ágil o a distancia."
      },
      {
        "level": 1,
        "name": "Jerga de Ladrones",
        "description": "Argot secreto que oculta mensajes en una conversación normal (4× más lento) y señales de peligro, gremio o refugio; solo lo entiende quien también lo sabe."
      },
      {
        "level": 2,
        "name": "Acción Astuta",
        "description": "Acción adicional para usar las acciones Correr, Retroceder u Esconderse."
      },
      {
        "level": 3,
        "name": "Arquetipo del Pícaro",
        "description": "Eliges un arquétipo (Asesino, Ladrón, Granuja Arcano...), que define tu especialización."
      },
      {
        "level": 3,
        "name": "Mira Firme (opcional)",
        "description": "Regla opcional de Tasha: una acción adicional otorga ventaja en tu próximo ataque del turno, pero solo si no te has movido y tu velocidad queda en 0 hasta el final del turno."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19; el Pícaro también lo recibe en el nivel 10."
      },
      {
        "level": 5,
        "name": "Esquiva Oportuna",
        "description": "Reacción contra un ataque que ves: reduces el daño sufrido por la mitad."
      },
      {
        "level": 7,
        "name": "Evasión",
        "description": "En efectos que permiten salvación de DES para reducir daño: sin daño si pasas y la mitad si fallas."
      },
      {
        "level": 9,
        "name": "Recursos del Arquétipo",
        "description": "Recursos del arquétipo pícaro, concedidos en los niveles 9, 13 y 17."
      },
      {
        "level": 11,
        "name": "Talentos Confiables",
        "description": "En pruebas de habilidad con competencia, tratas cualquier d20 con resultado 9 o menor como 10."
      },
      {
        "level": 14,
        "name": "Sentido Ciego",
        "description": "Mientras puedas oír, sabes la localización de criaturas ocultas o invisibles a 10 pies."
      },
      {
        "level": 15,
        "name": "Mente Resbaladiza",
        "description": "Ganas competencia en salvaciones de SAB."
      },
      {
        "level": 18,
        "name": "Esquivo",
        "description": "Ningún ataque tiene ventaja contra ti mientras no estés incapacitado."
      },
      {
        "level": 20,
        "name": "Golpe de Suerte",
        "description": "Un ataque que falla puede convertirse en acierto o una prueba de habilidad fallida usa 20 en el d20; 1/ descanso corto."
      }
    ]
  },
  {
    "id": "mago",
    "source": "phb",
    "name": "Mago",
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
        "name": "Lanzamiento de conjuros",
        "description": "Grimorio con 6 conjuros de 1º nivel y 3 trucos; preparas conjuros = mod. INT + nivel de mago (mín. 1) y puedes lanzar rituales presentes en el grimorio."
      },
      {
        "level": 1,
        "name": "Recuperación Arcana",
        "description": "Una vez al día, al terminar un descanso corto, recuperas slots de nivel total ≤ la mitad del nivel de mago (redondeado hacia arriba; ninguno de 6º o superior)."
      },
      {
        "level": 2,
        "name": "Tradición Arcana",
        "description": "Eliges una tradición (Abjuración, Evocación, Ilusión...), que define tu escuela de estudio preferida."
      },
      {
        "level": 3,
        "name": "Fórmulas de Trucos (opcional)",
        "description": "Regla opcional de Tasha: consultando las fórmulas del grimorio tras un descanso largo, cambias un truco de mago por otro de la lista de mago."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 6,
        "name": "Recursos de la Tradición",
        "description": "Recursos de la tradición arcana, concedidos en los niveles 6, 10 y 14."
      },
      {
        "level": 18,
        "name": "Maestría Mágica",
        "description": "Eliges 1 conjuro de 1º y 1 de 2º del grimorio: los lanzas a voluntad sin gastar slot; cambias las elecciones con 8 horas de estudio."
      },
      {
        "level": 20,
        "name": "Conjuros de Firma",
        "description": "Dos conjuros de 3º siempre preparados, que no cuentan en el límite; lanzas cada uno una vez sin slot por descanso largo."
      }
    ]
  },
  {
    "id": "monge",
    "source": "phb",
    "name": "Monje",
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
        "name": "Defensa sin Armadura",
        "description": "Sin armadura ni escudo: CA = 10 + mod. DES + mod. SAB."
      },
      {
        "level": 1,
        "name": "Artes Marciales",
        "description": "Usas DES en golpes desarmados y con armas de monje; daño d4 (d6 en el 5º, d8 en el 11º, d10 en el 17º) y un golpe desarmado extra como acción adicional."
      },
      {
        "level": 2,
        "name": "Puntos de Ki",
        "description": "Gastas puntos de ki (iguales al nivel) en Ráfaga de Golpes, Defensa Paciente y Paso del Viento; lo recuperas todo al descansar (30 min meditando)."
      },
      {
        "level": 2,
        "name": "Movimiento sin Armadura",
        "description": "+10 pies sin armadura ni escudo (+15 en el 6º, +20 en el 10º, +25 en el 14º, +30 en el 18º); en el 9º te mueves por superficies verticales y sobre líquidos."
      },
      {
        "level": 2,
        "name": "Arma Dedicada (opcional)",
        "description": "Regla opcional de Tasha: tras un descanso, vuelves una arma simple o marcial (sin pesada) que domines en arma de monje hasta volver a usar esta característica."
      },
      {
        "level": 3,
        "name": "Tradición Monástica",
        "description": "Eliges una tradición (Mano Abierta, Sombras, Cuatro Elementos...), que define tu entrenamiento avanzado."
      },
      {
        "level": 3,
        "name": "Desviar de Proyectiles",
        "description": "Reacción: reduces el daño de un ataque a distancia en 1d10 + mod. DES + nivel de monje; si el daño queda a 0, recoges el proyectilo y puedes devolverlo (1 ki)."
      },
      {
        "level": 3,
        "name": "Ataque Impulsado por Ki (opcional)",
        "description": "Regla opcional de Tasha: al gastar 1 o más ki con una acción en tu turno, puedes hacer un golpe desarmado o con arma de monje como acción adicional."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Queda Lenta",
        "description": "Reacción al caer: reduces el daño de la caída en 5 × nivel de monje."
      },
      {
        "level": 4,
        "name": "Cura Acelerada (opcional)",
        "description": "Regla opcional de Tasha: una acción gasta 2 ki y tira el dado de Artes Marciales para recuperar PV = resultado + bono de competencia."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques al usar la acción de atacar."
      },
      {
        "level": 5,
        "name": "Golpe Atordojante",
        "description": "Al acertar un ataque cuerpo a cuerpo, gastas 1 ki: el objetivo hace una salvación de CON o queda aturdado hasta el final de tu próximo turno."
      },
      {
        "level": 5,
        "name": "Mira Focalizada (opcional)",
        "description": "Regla opcional de Tasha: al fallar un ataque, gastas de 1 a 3 ki para sumar +2 a la tirada de ataque por ki gastado."
      },
      {
        "level": 6,
        "name": "Golpes Impulsados por Ki",
        "description": "Los golpes desarmados son mágicos para superar la resistencia e inmunidad al daño no mágico."
      },
      {
        "level": 6,
        "name": "Recursos de la Tradición",
        "description": "Recursos de la tradición monástica, concedidos en los niveles 6, 11 y 17."
      },
      {
        "level": 7,
        "name": "Evasión",
        "description": "En efectos que permiten salvación de DES para reducir daño: sin daño si pasas y la mitad si fallas."
      },
      {
        "level": 7,
        "name": "Serenidad de la Mente",
        "description": "Acción: terminas un efecto en ti que cause encantamiento o miedo."
      },
      {
        "level": 10,
        "name": "Pureza del Cuerpo",
        "description": "Inmune a enfermedades y venenos."
      },
      {
        "level": 13,
        "name": "Lengua del Sol y la Luna",
        "description": "Entiendes cualquier lengua hablada y cualquier criatura que comprenda idiomas entiende lo que dices."
      },
      {
        "level": 14,
        "name": "Alma de Diamante",
        "description": "Competente en todas las salvaciones; al fallar una, puedes gastar 1 ki para volver a tirar."
      },
      {
        "level": 15,
        "name": "Cuerpo Atemporal",
        "description": "No sufres los efectos de la vejez, no puedes ser envejecido por conjuro y no necesitas comida ni agua."
      },
      {
        "level": 18,
        "name": "Cuerpo Vacío",
        "description": "Acción con 4 ki: invisible durante 1 minuto y resistencia a todo daño, excepto a la fuerza; con 8 ki lanzas Proyección Astral sin componentes materiales."
      },
      {
        "level": 20,
        "name": "Perfección Personal",
        "description": "Si ruedas la iniciativa sin puntos de ki restantes, recuperas 4 puntos de ki."
      }
    ]
  },
  {
    "id": "paladino",
    "source": "phb",
    "name": "Paladín",
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
        "name": "Sentido Divino",
        "description": "Acción: detectas celestiales, demonios y no-muertos a 60 pies (no detrás de cobertura total) hasta el final de tu próximo turno; usos = 1 + mod. CAR/ descanso largo."
      },
      {
        "level": 1,
        "name": "Imposición de Manos",
        "description": "Reserva de curación = 5 × nivel de paladino (se recupera en descanso largo); al tocar restauras PV o gastas 5 para curar una enfermedad o neutralizar un veneno."
      },
      {
        "level": 2,
        "name": "Estilo de Combate",
        "description": "Eliges un estilo (defensa, duelo, protección, arma a dos manos...); ninguna opción puede elegirse dos veces."
      },
      {
        "level": 2,
        "name": "Lanzamiento de conjuros",
        "description": "Preparas conjuros = mod. CAR + la mitad del nivel de paladino (mín. 1) y lanzas con símbolo sagrado como foco."
      },
      {
        "level": 2,
        "name": "Golpe Divino",
        "description": "Al acertar un ataque cuerpo a cuerpo, gastas un slot para causar +2d8 radiante (1d8 más por nivel del slot, máx. 5d8; +1d8 contra no-muertos o demonios)."
      },
      {
        "level": 3,
        "name": "Salud Divina",
        "description": "El poder divino que hay en ti te hace inmune a enfermedades."
      },
      {
        "level": 3,
        "name": "Juramento Sagrado",
        "description": "Eliges un juramento (Devoción, Ancestros, Venganza...), que otorga conjuros de juramento y opciones de Canalizar Divinidad."
      },
      {
        "level": 3,
        "name": "Canalizar Poder Divino (opcional)",
        "description": "Regla opcional de Tasha: una acción adicional gasta 1 uso de Canalizar Divinidad para recuperar un slot de nivel ≤ la mitad del bono de competencia (redondeado hacia arriba)."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad Marcial (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias tu estilo de combate por otro disponible para el paladino."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques al usar la acción de atacar."
      },
      {
        "level": 6,
        "name": "Aura de Protección",
        "description": "Tú y las criaturas amigables a 10 pies sumáis el mod. CAR (mín. +1) a las salvaciones mientras estés consciente."
      },
      {
        "level": 7,
        "name": "Recursos del Juramento",
        "description": "Recursos del juramento sagrado, concedidos en los niveles 7, 15 y 20."
      },
      {
        "level": 10,
        "name": "Aura de Valor",
        "description": "Tú y las criaturas amigables a 10 pies no podéis ser asustados mientras estés consciente."
      },
      {
        "level": 11,
        "name": "Golpe Divino Mejorado",
        "description": "Los aciertos con armas cuerpo a cuerpo causan +1d8 de daño radiante."
      },
      {
        "level": 14,
        "name": "Toque Purificador",
        "description": "Acción: terminas un conjuro en ti o en una criatura voluntaria que toques; usos = mod. CAR/ descanso largo."
      },
      {
        "level": 18,
        "name": "Ampliación de los Auras",
        "description": "El alcance de los Auras de Protección y de Valor aumenta a 30 pies."
      }
    ]
  },
  {
    "id": "patrulheiro",
    "source": "phb",
    "name": "Explorador",
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
        "name": "Enemigo Favorito",
        "description": "Ventaja en Supervivencia para rastrear y en INT para recordar sobre el enemigo favorito; eliges uno más en el 6º y en el 14º nivel y un idioma."
      },
      {
        "level": 1,
        "name": "Explorador Natural",
        "description": "Terreno favorito: duplica la competencia en pruebas relacionadas y da ventajas de viaje; eliges +1 terreno en el 6º y +1 en el 10º nivel."
      },
      {
        "level": 1,
        "name": "Explorador Habilidoso (opcional)",
        "description": "Regla opcional de Tasha, sustituye Explorador Natural: Ágil (1º), Errante (6º: +5 pies, escalar y nadar) e Incansable (10º: PV temporáneos, −1 de agotamiento/ descanso corto)."
      },
      {
        "level": 1,
        "name": "Presa Favorita (opcional)",
        "description": "Regla opcional de Tasha, sustituye Enemigo Favorito: una acción adicional marca al objetivo 1 minuto y suma +1d4 al primer daño del turno (d6 en el 6º, d8 en el 14º); usos = bono de competencia."
      },
      {
        "level": 2,
        "name": "Estilo de Combate",
        "description": "Eliges un estilo (tiro, defensa, duelo, doble empuñadura...); ninguna opción puede elegirse dos veces."
      },
      {
        "level": 2,
        "name": "Lanzamiento de conjuros",
        "description": "Lanzas conjuros de explorador con SAB; conoces 2 conjuros en el 2º nivel y aprendes más según la tabla."
      },
      {
        "level": 2,
        "name": "Foco de Lanzamiento (opcional)",
        "description": "Regla opcional de Tasha: puedes usar un foco druídico como foco de lanzamiento de tus conjuros."
      },
      {
        "level": 3,
        "name": "Percepción Primordial",
        "description": "Gasta un slot (el efecto dura 1 minuto por nivel) para sentir aberraciones, celestiales, dragones, elementales, feéricos, demonios y no-muertos a 1 milla (6 millas en el terreno favorito)."
      },
      {
        "level": 3,
        "name": "Conclave de Explorador",
        "description": "Eliges un conclave (Cazador, Compañero Animal, Guardián del Horizonte...), que define tu especialización."
      },
      {
        "level": 3,
        "name": "Conciencia Primordial (opcional)",
        "description": "Regla opcional de Tasha, sustituye Percepción Primordial: aprendes conjuros de la lista de explorador (3º, 5º, 9º, 13º y 17º) y los lanzas una vez por descanso largo sin gastar slot."
      },
      {
        "level": 4,
        "name": "Aumento de Atributo",
        "description": "Aumenta un atributo en 2 o dos atributos en 1 (máx. 20) en los niveles 4, 8, 12, 16 y 19."
      },
      {
        "level": 4,
        "name": "Versatilidad Marcial (opcional)",
        "description": "Regla opcional de Tasha: con cada Aumento de Atributo, cambias tu estilo de combate por otro disponible para el explorador."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques al usar la acción de atacar."
      },
      {
        "level": 7,
        "name": "Recursos del Conclave",
        "description": "Recursos del conclave elegido, concedidos en los niveles 7, 11 y 15."
      },
      {
        "level": 8,
        "name": "Paso por la Tierra",
        "description": "El terreno difícil no mágico no cuesta movimiento extra; atraviesas plantas no mágicas sin sufrir daño y tienes ventaja en salvaciones contra ellas."
      },
      {
        "level": 10,
        "name": "Esconderse a Plena Vista",
        "description": "1 minuto preparando camuflaje con materiales naturales; pegado a una superficie sólida de tu tamaño, +10 en Furtividad sin moverte ni actuar."
      },
      {
        "level": 10,
        "name": "Velo de la Naturaleza (opcional)",
        "description": "Regla opcional de Tasha, sustituye Esconderse a Plena Vista: una acción adicional te vuelve invisible hasta el inicio de tu próximo turno; usos = bono de competencia."
      },
      {
        "level": 14,
        "name": "Desvanecerse",
        "description": "Puedes usar Esconderse como acción adicional y no puedes ser rastreado por medios no mágicos, salvo que elijas dejar un rastro."
      },
      {
        "level": 18,
        "name": "Sentidos Ferales",
        "description": "Sin desventaja en ataques contra criaturas que no ves y localizas criaturas invisibles a 30 pies que no se hayan ocultado de ti."
      },
      {
        "level": 20,
        "name": "Cazador de Presas",
        "description": "Una vez por turno, sumas el mod. SAB al ataque o al daño contra un enemigo favorito, antes o después de la tirada."
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
