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
    "name": "Alquimista",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Herramientas del Oficio",
        "description": "En el 3er nivel, ganas competencia con herramientas de alquimia (u otra herramienta de artesano a tu elección si ya la tienes)."
      },
      {
        "level": 3,
        "name": "Conjuros del Alquimista",
        "description": "A partir del 3er nivel, siempre preparas los conjuros de la tabla del Alquimista según tu nivel de artífice, sin contar contra tus conjuros preparados."
      },
      {
        "level": 3,
        "name": "Elixir Experimental",
        "description": "Al terminar un descanso largo, creas un elixir (efecto de la tabla); gastas un slot de 1er o superior para crear otro a tu elección. Dos elixires en el 6º y tres en el 15º nivel."
      },
      {
        "level": 5,
        "name": "Sabiduría Alquímica",
        "description": "Con herramientas de alquimia como foco, sumas mod. INT (mínimo +1) a una tirada de curación o de daño de ácido, fuego, necrótico o veneno del conjuro."
      },
      {
        "level": 9,
        "name": "Reagentes Restauradores",
        "description": "Una criatura que bebe tu elixir gana 2d6 + INT PV temporales; lanzas Restauración Menor sin slot ni preparación (usos = mod. INT; 1/ descanso largo)."
      },
      {
        "level": 15,
        "name": "Maestría Química",
        "description": "Resistencia al daño de ácido y de veneno e inmunidad a quedar envenenado; lanzas Restauración Mayor y Curar sin slot ni componente material (1/ descanso largo cada una)."
      }
    ]
  },
  {
    "id": "armeiro",
    "source": "tce",
    "classId": "artifice",
    "name": "Armero",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Herramientas del Oficio",
        "description": "En el 3er nivel, ganas competencia con armadura pesada y herramientas de herrero (u otra herramienta de artesano a tu elección si ya la tienes)."
      },
      {
        "level": 3,
        "name": "Conjuros del Armero",
        "description": "A partir del 3er nivel, siempre preparas los conjuros de la tabla del Armero según tu nivel de artífice, sin contar contra tus conjuros preparados."
      },
      {
        "level": 3,
        "name": "Armadura Arcana",
        "description": "Acción y herramientas de herrero en mano: transformas tu armadura puesta en Arcana: no exige FUER, sirve como foco, se adhiere a tu cuerpo y puedes ponértela como acción."
      },
      {
        "level": 3,
        "name": "Modelo de Armadura",
        "description": "Eliges Guardián (Puños de Trueno 1d8; Campo Defensivo con PV temporales) o Infiltrador (Lanza de Relámpago 1d6 + 1d6 a 90/300 pies; +5 pies; ventaja en Sigilo)."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "A partir del 5º nivel, atacas dos veces cuando usas la acción de atacar."
      },
      {
        "level": 9,
        "name": "Modificaciones de Armadura",
        "description": "En el 9º nivel, la Armadura Arcana cuenta como objetos separados (armadura, botas, casco y arma) para Infundir Objetos y el límite de objetos infundidos sube en 2."
      },
      {
        "level": 15,
        "name": "Armadura Perfeccionada",
        "description": "Guardián: reacción, arrastras a una criatura Grande o menor 25 pies si falla su salvación de FUER. Infiltrador: el próximo ataque contra el objetivo iluminado por la Lanza tiene ventaja (+1d6)."
      }
    ]
  },
  {
    "id": "artilheiro",
    "source": "tce",
    "classId": "artifice",
    "name": "Artillero",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Herramientas del Oficio",
        "description": "En el 3er nivel, ganas competencia con herramientas de carpintero (u otra herramienta de artesano a tu elección si ya la tienes)."
      },
      {
        "level": 3,
        "name": "Conjuros del Artillero",
        "description": "A partir del 3er nivel, siempre preparas los conjuros de la tabla del Artillero según tu nivel de artífice, sin contar contra tus conjuros preparados."
      },
      {
        "level": 3,
        "name": "Cañón Arcano",
        "description": "Acción: creas un Cañón Pequeño o Diminuto a 5 pies (CA 18, PV 5 × nivel); lo activas como acción adicional a 60 pies. Tipos: Lanza de Fuego (2d8), Bala de Fuerza (2d8) o Protector (1d8 + INT)."
      },
      {
        "level": 5,
        "name": "Arma Arcana",
        "description": "Tras un descanso largo, grabas runas en una vara, cajado o cetro; al lanzar un conjuro de artífice con él, tiras 1d8 y sumas el resultado a una tirada de daño."
      },
      {
        "level": 9,
        "name": "Cañón Explosivo",
        "description": "A partir del 9º nivel, tus cañones causan +1d8 de daño; acción: detonas un cañón a 60 pies — 3d8 de fuerza en 20 pies (salvación de DES, mitad) y el cañón queda destruido."
      },
      {
        "level": 15,
        "name": "Posición Fortificada",
        "description": "En el 15º nivel, tú y tus aliados tenéis cobertura parcial a 10 pies de tu cañón y puedes tener dos cañones simultáneos, activados por la misma acción adicional."
      }
    ]
  },
  {
    "id": "ferreiro_de_batalha",
    "source": "tce",
    "classId": "artifice",
    "name": "Herrero de Batalla",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Herramientas del Oficio",
        "description": "En el 3er nivel, ganas competencia con herramientas de herrero (u otra herramienta de artesano a tu elección si ya la tienes)."
      },
      {
        "level": 3,
        "name": "Conjuros del Herrero de Batalla",
        "description": "A partir del 3er nivel, siempre preparas los conjuros de la tabla del Herrero de Batalla, sin contar contra tus conjuros preparados."
      },
      {
        "level": 3,
        "name": "Listo para la Batalla",
        "description": "En el 3er nivel, ganas competencia con armas marciales y, al atacar con un arma mágica, usas mod. INT en vez de FUER o DES en las tiradas de ataque y de daño."
      },
      {
        "level": 3,
        "name": "Defensor de Acero",
        "description": "Un constructo aliado (CA 15, PV 2 + INT + 5 × nivel) actúa después de ti con Esquivar por defecto; lo revives con un slot de 1er o superior o lo recreas en el descanso largo."
      },
      {
        "level": 5,
        "name": "Ataque Extra",
        "description": "A partir del 5º nivel, atacas dos veces cuando usas la acción de atacar."
      },
      {
        "level": 9,
        "name": "Golpe Arcano",
        "description": "En el 9º nivel, tus aciertos con un arma mágica o del Defensor causan +2d6 de fuerza o curan 2d6 PV (usos = mod. INT; una vez por turno)."
      },
      {
        "level": 15,
        "name": "Defensor Mejorado",
        "description": "En el 15º nivel, el Golpe Arcano causa o cura 4d6; el Defensor gana +2 de CA y represalia con 1d4 + INT de fuerza al usar Desviar Ataque."
      }
    ]
  },
  {
    "id": "caminho_dos_ancestrais",
    "source": "xge",
    "classId": "barbaro",
    "name": "Senda del Guardián Ancestral",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Guardianes Ancestrales",
        "description": "Al entrar en Furia aparecen espíritus: la primera criatura que aciertes tiene desventaja en los ataques contra otros y, cuando acierta a otra criatura, esta tiene resistencia al daño."
      },
      {
        "level": 6,
        "name": "Escudo Espiritual",
        "description": "Mientras estás en Furia, reacción: reduces en 2d6 el daño causado a una criatura que ves a 30 pies (3d6 en el 10º y 4d6 en el 14º nivel)."
      },
      {
        "level": 10,
        "name": "Consultar a los Espíritus",
        "description": "En el 10º nivel, lanzas Augurio o Clarividencia sin slot ni componente material (SAB); solo vuelves a usarlo tras un descanso corto o largo."
      },
      {
        "level": 14,
        "name": "Ancestros Vengativos",
        "description": "En el 14º nivel, cuando el Escudo Espiritual reduce un daño, el atacante sufre un daño de fuerza igual al valor evitado."
      }
    ]
  },
  {
    "id": "caminho_da_furia_de_batalha",
    "source": "scag",
    "classId": "barbaro",
    "name": "Senda del Batallador",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Armadura de Espinas",
        "description": "Solo los enanos siguen esta senda. En Furia, acción adicional: atacas con las espinas de la armadura (1d4 de perforante, mod. FUER); un agarre exitoso causa 3 de perforante."
      },
      {
        "level": 6,
        "name": "Abandono Temerario",
        "description": "Al usar Ataque Temerario en Furia, ganas PV temporales iguales al mod. CON (mínimo 1); pierdes los que queden cuando la Furia termina."
      },
      {
        "level": 10,
        "name": "Carga del Batallador",
        "description": "A partir del 10º nivel, puedes usar la acción Correr como acción adicional mientras estás en Furia."
      },
      {
        "level": 14,
        "name": "Retaliación Espinosa",
        "description": "Una criatura a 5 pies que te acierte en cuerpo a cuerpo sufre 3 de perforante si estás en Furia, consciente y con una armadura con espinas."
      }
    ]
  },
  {
    "id": "caminho_da_besta",
    "source": "tce",
    "classId": "barbaro",
    "name": "Senda de la Bestia",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Forma Bestial",
        "description": "En Furia, manifiestas un arma natural a tu elección: Mordisco 1d8 (curas PV si estás por debajo de la mitad), Garras 1d6 (+1 ataque extra) o Cola 1d8 con alcance (+1d8 en la CA, reacción)."
      },
      {
        "level": 6,
        "name": "Alma Bestial",
        "description": "Desde el 6º nivel, las armas naturales son mágicas; tras un descanso, tienes hasta el final de él natación y respiración acuáticas, escalada sin prueba y salto extendido con Atletismo."
      },
      {
        "level": 10,
        "name": "Fúria Infecciosa",
        "description": "En el 10º nivel, acierto con un arma natural en Furia: salvación de SAB (CD 8 + CON + comp.) o el objetivo ataca a otra criatura con su reacción o sufre 2d12 psíquico (usos = comp.)."
      },
      {
        "level": 14,
        "name": "Llamada a la Caza",
        "description": "En el 14º nivel, al entrar en Furia eliges hasta mod. CON criaturas aliadas a 30 pies: ganas 5 PV temporales por cada una y ellas suman 1d6 al daño una vez por turno."
      }
    ]
  },
  {
    "id": "berserker",
    "source": "phb",
    "classId": "barbaro",
    "name": "Camino del Berserker",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Frenesí",
        "description": "Durante la Furia, puedes gastar tu acción adicional para atacar en cada turno; al terminar la furia, sufres 1 nivel de agotamiento."
      },
      {
        "level": 6,
        "name": "Mente Insensible",
        "description": "Mientras estás en Furia, eres inmune a ser hechizado o asustado."
      },
      {
        "level": 10,
        "name": "Presencia Intimidadora",
        "description": "Acción: las criaturas hostiles a 15 pies que fallen su salvación de SAB quedan asustadas durante 1 minuto."
      },
      {
        "level": 14,
        "name": "Represalia",
        "description": "Reacción: cuando una criatura a 5 pies te causa daño, la atacas con un arma cuerpo a cuerpo."
      }
    ]
  },
  {
    "id": "caminho_do_gigante",
    "source": "bpg",
    "classId": "barbaro",
    "name": "Senda del Gigante",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Poder del Gigante",
        "description": "Al elegir esta senda, aprendes la lengua Gigante (u otro idioma) y el truco Taumaturgia o un truco de druida a tu elección (SAB como atributo de conjuración)."
      },
      {
        "level": 3,
        "name": "Destrucción del Gigante",
        "description": "En Furia: tus lanzamientos a distancia con FUER suman el bono de daño de la Furia; el alcance sube 5 pies y te vuelves Grande, si hay espacio."
      },
      {
        "level": 6,
        "name": "Hoja Elemental",
        "description": "Al entrar en Furia, imbues un arma con ácido, frío, fuego, trueno o eléctrico: cambias el tipo, causa +1d6, gana lanzamiento 20/60 pies y vuelve a tu mano; una acción adicional cambia el tipo."
      },
      {
        "level": 10,
        "name": "Lanzamiento Poderoso",
        "description": "En el 10º nivel, acción adicional en Furia: mueves una criatura Mediana o menor a tu alcance hasta 30 pies (salvación de FUER si es involuntaria); sin soporte, cae."
      },
      {
        "level": 14,
        "name": "Coloso Demiúrgico",
        "description": "En el 14º nivel, en Furia el alcance sube 10 pies, tu tamaño puede llegar a Enorme, el Lanzamiento Poderoso mueve criaturas Grandes y la Hoja Elemental causa +2d6."
      }
    ]
  },
  {
    "id": "caminho_do_arauto_da_tempestade",
    "source": "xge",
    "classId": "barbaro",
    "name": "Senda del Heraldo de la Tormenta",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Aura de la Tempestad",
        "description": "En Furia emites un aura de 10 pies (activación como acción adicional): Desierto causa 2 de fuego, Mar exige salvación de DES o causa 1d6 eléctrico, Tundra da 2 PV temporales; CD = 8 + comp. + CON."
      },
      {
        "level": 6,
        "name": "Alma Tempestuosa",
        "description": "Desierto: resistencia al fuego e ignoras el calor extremo. Mar: resistencia a electricidad, respiras bajo el agua y natación de 30 pies. Tundra: resistencia al frío y congelas agua con tu acción."
      },
      {
        "level": 10,
        "name": "Tempestad Protectora",
        "description": "En el 10º nivel, las criaturas a tu elección dentro del aura tienen la resistencia al daño que ganaste con Alma Tempestuosa."
      },
      {
        "level": 14,
        "name": "Tempestad Furiosa",
        "description": "Desierto: reacción, la criatura que te acierta hace salvación de DES y sufre daño de fuego = tu nivel. Mar: reacción, salvación de FUER o derribada. Tundra: salvación de FUER o desplazamiento 0."
      }
    ]
  },
  {
    "id": "totem_warrior",
    "source": "phb",
    "classId": "barbaro",
    "name": "Camino del Tótem",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Buscador de Espíritus",
        "description": "Lanzas Percibir Besta y Hablar con Animales solo como rituales."
      },
      {
        "level": 3,
        "name": "Espíritu Tótem",
        "description": "Eliges un animal tótem (oso, águila, alce, tigre o lobo) y ganas su poder durante la Furia — ej.: el oso concede resistencia a todo el daño."
      },
      {
        "level": 6,
        "name": "Aspecto de la Bestia",
        "description": "Poder secundario del animal tótem — ej.: el oso dobla tu capacidad de carga, el águila te da visión a 1 milla."
      },
      {
        "level": 10,
        "name": "Camino del Espíritu",
        "description": "Lanzas Comunión con la Naturaleza solo como ritual."
      },
      {
        "level": 14,
        "name": "Sintonía Totémica",
        "description": "Nuevo poder tótem permanente durante la Furia — ej.: el oso impone desventaja en los ataques contra tus aliados."
      }
    ]
  },
  {
    "id": "caminho_da_magia_selvagem",
    "source": "tce",
    "classId": "barbaro",
    "name": "Senda de la Magia Salvaje",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Percepción Mágica",
        "description": "Acción: hasta el final de tu próximo turno, localizas conjuros y objetos mágicos a 60 pies sin cobertura total y sabes su escuela (usos = comp.; lo recuperas en el descanso largo)."
      },
      {
        "level": 3,
        "name": "Surto Salvaje",
        "description": "Al entrar en Furia, tiras 1d8 en la tabla de Magia Salvaje por el efecto producido; CD = 8 + comp. + CON para las salvaciones requeridas."
      },
      {
        "level": 6,
        "name": "Magia de Refuerzo",
        "description": "En el 6º nivel, acción: tocas a una criatura — sumas 1d3 a sus ataques y pruebas durante 10 minutos, o recuperas un slot de nivel igual o inferior al tirado (usos = comp.)."
      },
      {
        "level": 10,
        "name": "Retaliación Inestable",
        "description": "En el 10º nivel, al sufrir daño o fallar una salvación en Furia, reacción: tiras en la tabla de Magia Salvaje y el nuevo efecto sustituye al actual."
      },
      {
        "level": 14,
        "name": "Surto Controlado",
        "description": "En el 14º nivel, al tirar en la tabla, tiras dos veces y eliges uno de los efectos; con valores iguales, eliges cualquier efecto de la tabla."
      }
    ]
  },
  {
    "id": "caminho_do_fanatico",
    "source": "xge",
    "classId": "barbaro",
    "name": "Senda del Fanático",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Fúria Divina",
        "description": "En Furia, la primera criatura que aciertes con un arma por turno sufre +1d6 + la mitad de tu nivel de bárbaro de daño necrótico o radiante (a tu elección)."
      },
      {
        "level": 3,
        "name": "Guerrero de los Dioses",
        "description": "Los conjuros que solo te devuelven a la vida, como Revivir, se lanzan en ti sin componentes materiales."
      },
      {
        "level": 6,
        "name": "Foco Fanático",
        "description": "Al fallar una salvación en Furia, puedes volver a tirar y debes usar el nuevo valor (una vez por Furia)."
      },
      {
        "level": 10,
        "name": "Presencia Celosa",
        "description": "Acción adicional: grito de batalla — hasta 10 criaturas que te oigan a 60 pies tienen ventaja en ataques y salvaciones hasta el inicio de tu próximo turno (1/ descanso largo)."
      },
      {
        "level": 14,
        "name": "Fúria Más Allá de la Muerte",
        "description": "En Furia, caer a 0 PV no te deja inconsciente; sigues haciendo salvaciones de muerte y solo mueres cuando la Furia termine, si aún tienes 0 PV."
      }
    ]
  },
  {
    "id": "faculdade_da_criacao",
    "source": "tce",
    "classId": "bardo",
    "name": "Colegio de la Creación",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Chispa de Potencial",
        "description": "Al conceder un dado, creas una chispa a 5 pies del objetivo: en una prueba, vuelve a tirar el dado; en un ataque, sufre daño de trueno (salvación de CON); en una salvación, gana PV temporales."
      },
      {
        "level": 3,
        "name": "Actuación de la Creación",
        "description": "Acción: creas un objeto no mágico (≤ 20 po × nivel, Mediano o menor) en un espacio libre a 10 pies; desaparece tras horas = comp. (1/descanso largo o slot de 2º o superior)."
      },
      {
        "level": 6,
        "name": "Actuación Animada",
        "description": "En el 6º nivel, acción: animas un objeto no mágico Grande o menor a 30 pies durante 1 hora (bloque Objeto Danzante; lo comandas con acción adicional; 1/ descanso largo o slot de 3º o superior)."
      },
      {
        "level": 14,
        "name": "Crescendo Creativo",
        "description": "En el 14º nivel, la Actuación de la Creación crea varios objetos iguales a mod. CAR (mínimo 2) y ya no tiene límite de valor en po; solo uno puede ser del tamaño máximo."
      }
    ]
  },
  {
    "id": "faculdade_da_eloquencia",
    "source": "moot",
    "classId": "bardo",
    "name": "Colegio de la Elocuencia",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Lengua de Plata",
        "description": "En pruebas de CAR (Persuasión) o CAR (Engaño), consideras una tirada de 9 o menos como 10."
      },
      {
        "level": 3,
        "name": "Palabras Inquietantes",
        "description": "Acción adicional: gastas 1 uso de Inspiración Bárdica; una criatura a 60 pies resta el dado de su próxima salvación antes del inicio de tu próximo turno."
      },
      {
        "level": 6,
        "name": "Inspiración Inquebrantable",
        "description": "Cuando una criatura usa tu dado de Inspiración Bárdica y la tirada falla, puede conservar el dado."
      },
      {
        "level": 6,
        "name": "Habla Universal",
        "description": "Acción: hasta mod. CAR criaturas a 60 pies te comprenden durante 1 hora, sea cual sea el idioma (1/ descanso largo o slot)."
      },
      {
        "level": 14,
        "name": "Inspiración Contagiosa",
        "description": "Cuando una criatura a 60 pies suma tu dado y acierta, reacción: concedes otro dado a una criatura distinta que te oiga (usos = mod. CAR; lo recuperas en el descanso largo)."
      }
    ]
  },
  {
    "id": "faculdade_do_glamour",
    "source": "xge",
    "classId": "bardo",
    "name": "Colegio del Glamour",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Manto de Inspiración",
        "description": "Acción adicional: gastas 1 uso de Inspiración; hasta mod. CAR criaturas a 60 pies ganan 5 PV temporales (8 en el 5º, 11 en el 10º y 14 en el 15º) y pueden moverse con su reacción sin ATA."
      },
      {
        "level": 3,
        "name": "Actuación Cautivadora",
        "description": "Tras actuar durante 1 minuto, hasta mod. CAR humanoides a 60 pies hacen salvación de SAB o quedan hechizados durante 1 hora, idolatrándote (1/ descanso corto o largo)."
      },
      {
        "level": 6,
        "name": "Manto de Majestad",
        "description": "Acción adicional: lanzas Comando sin slot y asumes una belleza sobrenatural durante 1 minuto; en ese periodo, Comando como acción adicional y las criaturas hechizadas fallan su salvación."
      },
      {
        "level": 14,
        "name": "Majestad Inquebrantable",
        "description": "Acción adicional, 1 minuto: el primer ataque contra ti en cada turno exige salvación de CAR o el ataque se anula; si tiene éxito, el atacante tiene desventaja en su próxima salvación contra ti."
      }
    ]
  },
  {
    "id": "saberes",
    "source": "phb",
    "classId": "bardo",
    "name": "Colegio del Conocimiento",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Pericias Adicionales",
        "description": "Ganas competencia con 3 pericias a tu elección."
      },
      {
        "level": 3,
        "name": "Palabras Cortantes",
        "description": "Reacción: restas un dado de inspiración bárdica del ataque, prueba o daño de una criatura a 60 pies."
      },
      {
        "level": 6,
        "name": "Secretos Mágicos Adicionales",
        "description": "Aprendes 2 conjuros de cualquier lista de conjuros de clase."
      },
      {
        "level": 14,
        "name": "Habilidad Sin Igual",
        "description": "En una prueba de habilidad, puedes gastar la inspiración bárdica después de tirar para sumar el dado."
      }
    ]
  },
  {
    "id": "faculdade_dos_espiritos",
    "source": "vgr",
    "classId": "bardo",
    "name": "Colegio de los Espíritus",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Susurros Guía",
        "description": "En el 3er nivel, aprendes el truco Guía, fuera del recuento de trucos de bardo, con un alcance de 60 pies."
      },
      {
        "level": 3,
        "name": "Foco Espiritual",
        "description": "Una vela, bola de cristal, cráneo, tablero de espíritus o baraja de tarokka sirven como foco; desde el 6º nivel, tiras 1d6 y lo sumas a una tirada de daño o curación de un conjuro lanzado con él."
      },
      {
        "level": 3,
        "name": "Cuentos del Más Allá",
        "description": "Acción adicional con el foco en mano: gastas 1 uso de Inspiración y tiras en la tabla de Cuentos Espirituales; eliges una criatura a 30 pies que recibe el efecto (CD = salvación del conjuro)."
      },
      {
        "level": 6,
        "name": "Sesión Espiritual",
        "description": "Ritual de 1 hora con hasta comp. criaturas: aprendes temporalmente un conjuro de Adivinación o Nigromancia de cualquier lista, de un nivel ≤ al número de participantes, hasta el descanso largo."
      },
      {
        "level": 14,
        "name": "Conexión Mística",
        "description": "En el 14º nivel, al tirar en la tabla de Cuentos Espirituales, tiras el dado dos veces y eliges; con valores iguales, eliges cualquier cuento de la tabla."
      }
    ]
  },
  {
    "id": "faculdade_das_espadas",
    "source": "xge",
    "classId": "bardo",
    "name": "Colegio de las Espadas",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencias",
        "description": "En el 3er nivel, ganas competencia con armadura media y cimitarra; un arma cuerpo a cuerpo sencilla o marcial con la que tengas competencia sirve como foco de conjuros."
      },
      {
        "level": 3,
        "name": "Estilo de Combate",
        "description": "Eliges Duelo (+2 al daño con un arma cuerpo a cuerpo a una mano y ninguna otra) o Combate con Dos Armas (sumas el mod. de atributo al daño del segundo ataque)."
      },
      {
        "level": 3,
        "name": "Floritura de la Hoja",
        "description": "Al usar la acción de atacar, +10 pies de desplazamiento y, al acertar, puedes gastar un uso de Inspiración: Defensiva (+daño y +CA), Cortante (daño a 5 pies) o Móvil (empujas y lo sigues)."
      },
      {
        "level": 6,
        "name": "Ataque Extra",
        "description": "A partir del 6º nivel, atacas dos veces cuando usas la acción de atacar."
      },
      {
        "level": 14,
        "name": "Floritura del Maestro",
        "description": "En el 14º nivel, al usar una Floritura de la Hoja, tiras 1d6 en vez de gastar un dado de Inspiración Bárdica."
      }
    ]
  },
  {
    "id": "valor",
    "source": "phb",
    "classId": "bardo",
    "name": "Colegio del Valor",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencias",
        "description": "Armaduras medianas, escudos y armas marciales."
      },
      {
        "level": 3,
        "name": "Inspiración de Combate",
        "description": "El dado de inspiración puede sumar a la CA contra un ataque o aumentar el daño de un arma."
      },
      {
        "level": 6,
        "name": "Ataque Extra",
        "description": "Realizas dos ataques cuando usas la acción de atacar."
      },
      {
        "level": 14,
        "name": "Magia de Batalla",
        "description": "Tras lanzar un conjuro con tu acción, puedes atacar con un arma como acción adicional."
      }
    ]
  },
  {
    "id": "faculdade_dos_sussurros",
    "source": "xge",
    "classId": "bardo",
    "name": "Colegio de los Susurros",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Hojas Psíquicas",
        "description": "Acierto con un arma: gastas 1 uso de Inspiración y causas +2d6 psíquico (3d6 en el 5º, 5d6 en el 10º y 8d6 en el 15º nivel), una vez por turno."
      },
      {
        "level": 3,
        "name": "Palabras de Terror",
        "description": "Tras hablar 1 minuto a solas con un humanoide, hace salvación de SAB o queda asustado durante 1 hora, hasta que sea golpeado o vea aliados golpeados (1/ descanso)."
      },
      {
        "level": 6,
        "name": "Manto de Susurros",
        "description": "Reacción: cuando un humanoide a 30 pies muere, capturas su sombra; acción: asumes su apariencia durante 1 hora y sabes lo que divulgaría a sus conocidos (Engaño +5 contra Perspicacia)."
      },
      {
        "level": 14,
        "name": "Palabras Sombrías",
        "description": "Acción: susurro mágico a una criatura a 30 pies; salvación de SAB o queda hechizada durante 8 horas, obedeciendo por miedo a exponer su secreto (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "ordem_do_caca_fantasma",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Orden del Cazador de Fantasmas",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Ritual del Amanecer",
        "description": "En el 3er nivel, el Ritual del Amanecer causa daño radiante; con él activo, el arma ilumina 20 pies, tienes resistencia al daño necrótico y tiras un dado de hemocraft extra contra no-muertos."
      },
      {
        "level": 3,
        "name": "Especialista en Maldiciones",
        "description": "En el 3er nivel, ganas 1 uso adicional de Maldición de Sangre y tus maldiciones pueden afectar a criaturas que no tienen sangre."
      },
      {
        "level": 7,
        "name": "Paso Etéreo",
        "description": "En el 7º nivel, al inicio de tu turno atraviesas criaturas y objetos y ves el Plano Etéreo durante rondas = mod. de hemocraft (1d10 si terminas dentro de un objeto; 1/ descanso; 2 en el 15º nivel)."
      },
      {
        "level": 11,
        "name": "Marca de Destrucción",
        "description": "En el 11º nivel, los aciertos con un Ritual Carmesí tiran un dado de hemocraft extra y la criatura marcada no atraviesa criaturas ni objetos."
      },
      {
        "level": 15,
        "name": "Maldición de Exorcista",
        "description": "En el 15º nivel, ganas la Maldición de Exorcista para Maldición de Sangre (no cuenta entre las maldiciones conocidas)."
      },
      {
        "level": 18,
        "name": "Renacer por el Ritual",
        "description": "En el 18º nivel, al caer a 0 PV con un Ritual Carmesí activo, terminas todos los rituales y vuelves a 1 PV."
      }
    ]
  },
  {
    "id": "ordem_do_licantropo",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Orden del Licántropo",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Sentidos Agudizados",
        "description": "En el 3er nivel, ventaja en pruebas de SAB (Percepción) basadas en el oído o el olfato."
      },
      {
        "level": 3,
        "name": "Transformación Híbrida",
        "description": "Acción adicional, hasta 1 hora (1/ descanso): +1 al daño cuerpo a cuerpo, resistencia al daño no mágico que no sea de plata, +1 de CA sin armadura pesada y ataques desarmados de 1d6 con DES."
      },
      {
        "level": 7,
        "name": "Instinto de Depredador",
        "description": "En el 7º nivel, desplazamiento +10 pies, salto largo +10 pies y alto +3 pies; los ataques desarmados tienen +1 al ataque (2 en el 11º y 3 en el 18º) y son mágicos con un Ritual Carmesí activo."
      },
      {
        "level": 11,
        "name": "Transformación Avanzada",
        "description": "En el 11º nivel, la Transformación Híbrida puede usarse 2 veces por descanso y recuperas 1 + CON PV al inicio de tu turno si estás por debajo de la mitad de tus PV."
      },
      {
        "level": 15,
        "name": "Marca del Voraz",
        "description": "En el 15º nivel, ventaja en la salvación de Sed Sangrienta en forma híbrida y en los ataques contra una criatura marcada con la Marca de Castigo mientras estás híbrido."
      },
      {
        "level": 18,
        "name": "Maestría de la Transformación",
        "description": "En el 18º nivel, la Transformación Híbrida es ilimitada y dura hasta que la reviertas, quedes inconsciente o mueras; ganas la Maldición del Aullido para Maldición de Sangre."
      }
    ]
  },
  {
    "id": "ordem_do_mutante",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Orden del Mutante",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Alquimia Mutagénica",
        "description": "En el 3er nivel, acción adicional: ingieres un mutágeno (efectos hasta el descanso; tu acción lo elimina); creas 1 mutágeno con 4 fórmulas; el número crece con tu nivel (3 y 8 en el 18º)."
      },
      {
        "level": 7,
        "name": "Metabolismo Extraño",
        "description": "En el 7º nivel, inmunidad al daño de veneno y a quedar envenenado; acción adicional: ignoras el efecto secundario de un mutágeno durante 1 minuto (1/ descanso largo)."
      },
      {
        "level": 11,
        "name": "Marca del Axioma",
        "description": "En el 11º nivel, terminan las ilusiones y la invisibilidad de la criatura marcada; su forma alternativa exige salvación de SAB o revierte y queda aturdida hasta el final de tu próximo turno."
      },
      {
        "level": 15,
        "name": "Maldición de Corrosión",
        "description": "En el 15º nivel, ganas la Maldición de Corrosión para Maldición de Sangre (no cuenta entre las maldiciones conocidas)."
      },
      {
        "level": 18,
        "name": "Mutación Exaltada",
        "description": "En el 18º nivel, acción adicional: cambias un mutágeno activo por otro cuya fórmula conoces (usos = mod. de hemocraft; lo recuperas en el descanso largo)."
      }
    ]
  },
  {
    "id": "ordem_da_alma_profana",
    "source": "ddb",
    "classId": "cacador_de_sangue",
    "name": "Orden del Alma Profana",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Patrono Sobrenatural",
        "description": "En el 3er nivel, haces pacto con un ser — Archihada, Diabólico, Gran Antiguo, Imperecedero, Celestial, Hoja Maldita, Insondable, Genio o Difunto — que altera tus habilidades."
      },
      {
        "level": 3,
        "name": "Conjuración Profana",
        "description": "Lanzas conjuros de brujo según la tabla (2 trucos, slots de 1er a 4º) usando el mod. de hemocraft, que se recuperan en un descanso corto o largo; ganas un truco extra en el 10º nivel."
      },
      {
        "level": 3,
        "name": "Foco Profano",
        "description": "Con un Ritual Carmesí activo, el arma sirve como foco de brujo y concede el beneficio del patrono: Archihada revela, Celestial cura con el dado de hemocraft, Difunto mitiga el daño necrótico."
      },
      {
        "level": 7,
        "name": "Frenesí Místico",
        "description": "Al lanzar un truco con tu acción, puedes realizar un ataque con un arma como acción adicional."
      },
      {
        "level": 7,
        "name": "Arcana Revelada",
        "description": "El patrono te concede un conjuro concreto (p. ej., Desenfoque con el Archihada o Rayo abrasador con el diabólico) sin gastar un slot (1/ descanso largo)."
      },
      {
        "level": 11,
        "name": "Marca de la Cicatriz Profana",
        "description": "En el 11º nivel, una criatura marcada con la Marca de Castigo tiene desventaja en las salvaciones contra tus conjuros de brujo."
      },
      {
        "level": 15,
        "name": "Arcana Sellada",
        "description": "El patrono te concede un conjuro adicional (p. ej., Velocidad con el Gran Antiguo) sin gastar un slot (1/ descanso largo)."
      },
      {
        "level": 18,
        "name": "Maldición del Devorador de Almas",
        "description": "En el 18º nivel, ganas la Maldición del Devorador de Almas para Maldición de Sangre (no cuenta entre las maldiciones conocidas)."
      }
    ]
  },
  {
    "id": "dominio_da_ambicao",
    "source": "psa",
    "classId": "clerigo",
    "name": "Dominio de la Ambición",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Ambición según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Resplandor Protector",
        "description": "Reacción: una criatura a 30 pies que te ataca tiene desventaja en el ataque (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Invocar Doble",
        "description": "Acción: creas un doble ilusorio tuyo durante 1 minuto; puedes lanzar conjuros como si estuvieras en él y tienes ventaja en los ataques contra objetivos a los que tú y el doble estáis a 5 pies."
      },
      {
        "level": 6,
        "name": "Canalizar: Manto de Sombras",
        "description": "Acción: quedas invisible hasta el final de tu próximo turno; apareces al atacar o lanzar un conjuro."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Doble Mejorado",
        "description": "Puedes crear hasta 4 dobles con Invocar Doble y moverlos como acción adicional hasta 30 pies (como máximo a 120 pies de ti)."
      }
    ]
  },
  {
    "id": "dominio_do_arcano",
    "source": "scag",
    "classId": "clerigo",
    "name": "Dominio del Arcano",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio del Arcano según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Iniciación Arcana",
        "description": "En el 1er nivel, ganas competencia en Arcanos y 2 trucos a tu elección de la lista del mago (cuentan como trucos de clérigo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Abjuración Arcana",
        "description": "Acción: una criatura celestial, elemental, feérica o diabólica a 30 pies hace salvación de SAB o es repelida 1 minuto; desde el 5º nivel, puedes desterrarla si su CR es lo bastante bajo."
      },
      {
        "level": 6,
        "name": "Romper Conjuros",
        "description": "Al curar a un aliado con un conjuro de 1er o superior, también terminas en esa criatura un conjuro de un nivel igual o inferior al del slot usado."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Maestría Arcana",
        "description": "En el 17º nivel, eliges 4 conjuros del mago (6º, 7º, 8º y 9º) y los añades a tus conjuros de dominio, siempre preparados."
      }
    ]
  },
  {
    "id": "dominio_da_morte",
    "source": "dmg",
    "classId": "clerigo",
    "name": "Dominio de la Muerte",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Muerte según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "En el 1er nivel, ganas competencia con armas marciales."
      },
      {
        "level": 1,
        "name": "Segador",
        "description": "En el 1er nivel, aprendes 1 truco nigromántico de cualquier lista; un truco nigromántico que afectaba a 1 criatura puede afectar a 2 a hasta 5 pies una de otra."
      },
      {
        "level": 2,
        "name": "Canalizar: Toque de la Muerte",
        "description": "Al acertar en cuerpo a cuerpo, canalizas energía vital: causas +5 + 2 × el nivel del clérigo de daño necrótico."
      },
      {
        "level": 6,
        "name": "Destrucción Ineludible",
        "description": "A partir del 6º nivel, el daño necrótico de tus conjuros y de tus opciones de Canalizar Divinidad ignora la resistencia al daño necrótico."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño necrótico extra en los ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Segador Mejorado",
        "description": "En el 17º nivel, un conjuro nigromántico de 1er a 5º que afectaba a 1 criatura puede afectar a 2 a hasta 5 pies; consumes componentes materiales por cada objetivo."
      }
    ]
  },
  {
    "id": "dominio_da_forja",
    "source": "xge",
    "classId": "clerigo",
    "name": "Dominio de la Forja",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Forja según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencias",
        "description": "En el 1er nivel, ganas competencia con armadura pesada y herramientas de herrero."
      },
      {
        "level": 1,
        "name": "Bendición de la Forja",
        "description": "Al final del descanso largo, tocas un arma o una armadura no mágicas: +1 de CA (armadura) o en ataque y daño (arma) hasta el final del próximo descanso largo (1/ descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Bendición del Artesano",
        "description": "Ritual de 1 hora que crea un objeto no mágico de metal de hasta 100 po, gastando metal de igual valor; el objeto se forma en un espacio libre a 5 pies."
      },
      {
        "level": 6,
        "name": "Alma de la Forja",
        "description": "Resistencia al daño de fuego y +1 de CA mientras llevas armadura pesada."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño de fuego extra en los ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Santo de la Forja y del Fuego",
        "description": "Inmunidad al daño de fuego y, con armadura pesada, resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      }
    ]
  },
  {
    "id": "dominio_do_sepulcro",
    "source": "xge",
    "classId": "clerigo",
    "name": "Dominio de la Tumba",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Tumba según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Círculo de la Muerte",
        "description": "Las curaciones en una criatura a 0 PV usan el valor máximo de cada dado; aprendes Salvar a los Moribundos (30 pies, acción adicional), sin contar entre tus trucos."
      },
      {
        "level": 1,
        "name": "Ojos de la Muerte",
        "description": "Acción: hasta el final de tu próximo turno, localizas no-muertos a 60 pies sin cobertura total (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Camino a la Tumba",
        "description": "Marcas a una criatura a 30 pies hasta el final de tu próximo turno; el primer ataque que tú o un aliado realices contra ella causa vulnerabilidad al daño de ese ataque."
      },
      {
        "level": 6,
        "name": "Centinelas de la Muerte",
        "description": "Reacción: conviertes un crítico sufrido por ti o por un aliado a 30 pies en un acierto normal (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Guardián de las Almas",
        "description": "Cuando un enemigo que ves muere a 30 pies, tú o un aliado recuperas PV iguales a los dados de vida del enemigo (hasta el inicio de tu próximo turno)."
      }
    ]
  },
  {
    "id": "conhecimento",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio del Conocimiento",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Bendiciones del Conocimiento",
        "description": "2 pericias a elegir (Arcanos, Historia, Naturaleza o Religión) con especialización y 2 idiomas."
      },
      {
        "level": 2,
        "name": "Canalizar: Saberes de los Tiempos",
        "description": "Te vuelves temporalmente competente en cualquier pericia."
      },
      {
        "level": 6,
        "name": "Canalizar: Leer Pensamientos",
        "description": "Lees los pensamientos superficiales de una criatura a 30 pies (SAB o lees solo superficialmente)."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Visiones del Pasado",
        "description": "Al sostener un objeto o permanecer en un lugar, tienes visiones del pasado relacionado con él."
      }
    ]
  },
  {
    "id": "vida",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio de la Vida",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "Competencia con armadura pesada."
      },
      {
        "level": 1,
        "name": "Discípulo de la Vida",
        "description": "Los conjuros de curación de nivel 1+ recuperan 2 + el nivel del conjuro PV adicionales."
      },
      {
        "level": 2,
        "name": "Canalizar: Preservar la Vida",
        "description": "Cura 5 × nivel del clérigo PV repartidos entre criaturas a 30 pies (máx. la mitad de los PV de cada una; no afecta a no-muertos)."
      },
      {
        "level": 6,
        "name": "Sanador Bendecido",
        "description": "Los conjuros de curación lanzados en otros también te curan a ti 2 + nivel del conjuro PV."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño radiante extra en ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Curación Suprema",
        "description": "Los dados de curación de los conjuros usan el valor máximo posible en cada dado."
      }
    ]
  },
  {
    "id": "luz",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio de la Luz",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Truco Extra",
        "description": "Ganas el truco Luz, si aún no lo conoces."
      },
      {
        "level": 1,
        "name": "Resplandor Protector",
        "description": "Reacción: la criatura que te ataca tiene desventaja en el ataque (usos = mod. SAB; 1/ descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Resplandor del Alba",
        "description": "Disipa la magia de oscuridad en 30 pies y causa daño radiante a las criaturas hostiles cercanas (salvación de DES)."
      },
      {
        "level": 6,
        "name": "Resplandor Mejorado",
        "description": "El Resplandor Protector también protege a las criaturas que ves a 30 pies."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Corona de Luz",
        "description": "Aura de luz solar de 30 pies durante 1 minuto."
      }
    ]
  },
  {
    "id": "natureza",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio de la Naturaleza",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Acogido por la Naturaleza",
        "description": "Aprendes 1 truco de la lista de conjuros del druida."
      },
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "Competencia con armadura pesada."
      },
      {
        "level": 2,
        "name": "Canalizar: Hechizar Animales y Plantas",
        "description": "Hechiza bestias y plantas a 30 pies (SAB; amigables o paralizadas)."
      },
      {
        "level": 6,
        "name": "Amortiguar Elementos",
        "description": "Reacción: concedes resistencia a ácido, frío, fuego, eléctrico o trueno a ti o a una criatura a 30 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño radiante extra en ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Maestro de la Naturaleza",
        "description": "Puedes comandar animales y criaturas vegetales."
      }
    ]
  },
  {
    "id": "dominio_da_ordem",
    "source": "ggr",
    "classId": "clerigo",
    "name": "Dominio del Orden",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio del Orden según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencias",
        "description": "En el 1er nivel, ganas competencia con armadura pesada y pericia en Intimidación o Persuasión (a tu elección)."
      },
      {
        "level": 1,
        "name": "Voz de la Autoridad",
        "description": "Al lanzar un conjuro con un slot que tenga como objetivo a un aliado, este puede usar su reacción después para realizar un ataque con un arma contra una criatura que tú veas."
      },
      {
        "level": 2,
        "name": "Canalizar: Mandato del Orden",
        "description": "Las criaturas a 30 pies que veas y oigas hacen salvación de SAB o quedan hechizadas hasta el final de tu próximo turno (o hasta que sufran daño); puedes hacer que dejen caer lo que llevan en mano."
      },
      {
        "level": 6,
        "name": "Encarnación de la Ley",
        "description": "Un conjuro de encantamiento con tiempo de lanzamiento de 1 acción puede lanzarse como acción adicional (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño psíquico extra en los ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Ira del Orden",
        "description": "Al causar daño con el Golpe Divino, marcas a la criatura hasta el inicio de tu próximo turno; el próximo aliado que la acierte causa +2d8 psíquico y la marca termina."
      }
    ]
  },
  {
    "id": "dominio_da_paz",
    "source": "tce",
    "classId": "clerigo",
    "name": "Dominio de la Paz",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Paz según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Instrumento de Paz",
        "description": "En el 1er nivel, ganas competencia en Perspicacia, Actuación o Persuasión (a tu elección)."
      },
      {
        "level": 1,
        "name": "Vínculo Estimulante",
        "description": "Acción: hasta comp. criaturas a 30 pies quedan vinculadas durante 10 minutos; entre ellas suman 1d4 a ataques, pruebas y salvaciones, una vez por turno (usos = comp.)."
      },
      {
        "level": 2,
        "name": "Canalizar: Bálsamo de Paz",
        "description": "Te mueves hasta tu desplazamiento sin provocar ataques de oportunidad; cada criatura a 5 pies por la que pases recupera 2d6 + SAB PV (una vez cada una)."
      },
      {
        "level": 6,
        "name": "Vínculo Protector",
        "description": "Cuando una criatura vinculada vaya a sufrir daño, otra vinculada a 30 pies usa su reacción para teletransportarse a 5 pies de ella y asume todo el daño."
      },
      {
        "level": 8,
        "name": "Conjuración Poderosa",
        "description": "Sumas SAB al daño de los trucos del clérigo."
      },
      {
        "level": 17,
        "name": "Vínculo Expansivo",
        "description": "El Vínculo Estimulante y el Protector funcionan a 60 pies; quien absorbe el daño del Vínculo Protector tiene resistencia a él."
      }
    ]
  },
  {
    "id": "dominio_da_solidariedade",
    "source": "psa",
    "classId": "clerigo",
    "name": "Dominio de la Solidaridad",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Solidaridad según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "En el 1er nivel, ganas competencia con armadura pesada."
      },
      {
        "level": 1,
        "name": "Acción de Solidaridad",
        "description": "Al usar la acción Ayudar para apoyar el ataque de un aliado, puedes realizar un ataque con un arma como acción adicional (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Preservar la Vida",
        "description": "Cura 5 × nivel del clérigo PV repartidos entre criaturas a 30 pies (máx. la mitad de los PV de cada una; no afecta a no-muertos ni a constructos)."
      },
      {
        "level": 6,
        "name": "Canalizar: Bendición de Oketra",
        "description": "Reacción: concedes +10 en la tirada de ataque de una criatura a 30 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño extra del mismo tipo que el del arma en los ataques, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Curación Suprema",
        "description": "Los dados de curación de los conjuros usan el valor máximo posible en cada dado."
      }
    ]
  },
  {
    "id": "dominio_da_forca",
    "source": "psa",
    "classId": "clerigo",
    "name": "Dominio de la Fuerza",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio de la Fuerza según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "En el 1er nivel, ganas competencia con armadura pesada."
      },
      {
        "level": 1,
        "name": "Acogido por la Fuerza",
        "description": "En el 1er nivel, aprendes 1 truco de la lista de conjuros del druida y eliges competencia en Cuidar de animales, Atletismo, Naturaleza o Supervivencia."
      },
      {
        "level": 2,
        "name": "Canalizar: Hazañas de Fuerza",
        "description": "Al realizar un ataque, prueba o salvación usando Fuerza, sumas +10 a la tirada."
      },
      {
        "level": 6,
        "name": "Canalizar: Bendición de Rhonas",
        "description": "Reacción: concedes +10 a un ataque, prueba o salvación de Fuerza de una criatura a 30 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño extra del mismo tipo que el del arma en los ataques, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Avatar de la Batalla",
        "description": "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      }
    ]
  },
  {
    "id": "tempestade",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio de la Tempestad",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Competencias",
        "description": "Armas marciales y armadura pesada."
      },
      {
        "level": 1,
        "name": "Furia de la Tempestad",
        "description": "Reacción: la criatura a 5 pies que te ataca hace una salvación de DES y recibe 2d8 de relámpago o trueno (mitad en éxito; usos = mod. SAB)."
      },
      {
        "level": 2,
        "name": "Canalizar: Furia Destructora",
        "description": "Garantiza el valor máximo en un daño de relámpago o trueno."
      },
      {
        "level": 6,
        "name": "Golpe Tronante",
        "description": "Al causar daño eléctrico a una criatura Grande o menor, la empujas hasta 10 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño radiante extra en ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Nacido de la Tempestad",
        "description": "Desplazamiento de vuelo igual al desplazamiento a pie, fuera de ambientes cerrados."
      }
    ]
  },
  {
    "id": "trapaça",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio del Engaño",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Bendición del Engaño",
        "description": "Acción: tocas a una criatura voluntaria para darle ventaja en Sigilo (1 hora)."
      },
      {
        "level": 2,
        "name": "Canalizar: Invocar Doble",
        "description": "Crea una ilusión perfecta de ti mismo durante 1 minuto; puedes lanzar conjuros como si estuvieras en el doble."
      },
      {
        "level": 6,
        "name": "Canalizar: Manto de Sombras",
        "description": "Desapareces de las vistas; las criaturas tienen desventaja para acertarte hasta tu próximo turno."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño venenoso extra en ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Doble Mejorado",
        "description": "Puedes crear hasta 4 dobles con Invocar Doble."
      }
    ]
  },
  {
    "id": "dominio_do_crepusculo",
    "source": "tce",
    "classId": "clerigo",
    "name": "Dominio del Crepúsculo",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio del Crepúsculo según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencias",
        "description": "En el 1er nivel, ganas competencia con armas marciales y armadura pesada."
      },
      {
        "level": 1,
        "name": "Ojos de la Noche",
        "description": "Visión en la oscuridad de 300 pies; acción: la compartes durante 1 hora con hasta mod. SAB criaturas a 10 pies (1/ descanso largo o slot)."
      },
      {
        "level": 1,
        "name": "Bendición Vigilante",
        "description": "Acción: una criatura que tocas, incluido tú, tiene ventaja en su próxima tirada de iniciativa."
      },
      {
        "level": 2,
        "name": "Canalizar: Santuario del Crepúsculo",
        "description": "Esfera de penumbra de 30 pies durante 1 minuto; una criatura que termine su turno en ella gana 1d6 + nivel del clérigo de PV temporales o termina un efecto de hechizado o asustado."
      },
      {
        "level": 6,
        "name": "Pasos de la Noche",
        "description": "Acción adicional en penumbra u oscuridad: desplazamiento de vuelo igual al de caminata durante 1 minuto (usos = comp.; lo recuperas en el descanso largo)."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño radiante extra en los ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Velo del Crepúsculo",
        "description": "Tú y tus aliados tenéis cobertura parcial dentro de la esfera creada por el Santuario del Crepúsculo."
      }
    ]
  },
  {
    "id": "guerra",
    "source": "phb",
    "classId": "clerigo",
    "name": "Dominio de la Guerra",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Competencia Extra",
        "description": "Armas marciales y armadura pesada."
      },
      {
        "level": 1,
        "name": "Sacerdote de la Guerra",
        "description": "Tras usar la acción de atacar, atacas de nuevo con un arma como acción adicional (usos = mod. SAB; mínimo 1)."
      },
      {
        "level": 2,
        "name": "Canalizar: Golpe Guiado",
        "description": "Sumas tu bonificador de competencia a un ataque."
      },
      {
        "level": 6,
        "name": "Canalizar: Bendición del Dios de la Guerra",
        "description": "Reacción: concedes +10 en el ataque de una criatura a 30 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño radiante extra en ataques con arma, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Avatar de la Batalla",
        "description": "Resistencia al daño contundente, perforante y cortante de ataques no mágicos."
      }
    ]
  },
  {
    "id": "dominio_do_zelo",
    "source": "psa",
    "classId": "clerigo",
    "name": "Dominio del Celo",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros del Dominio",
        "description": "A partir del 1er nivel, siempre preparas los conjuros del Dominio del Celo según tu nivel de clérigo, sin contar contra tus conjuros preparados."
      },
      {
        "level": 1,
        "name": "Competencias",
        "description": "En el 1er nivel, ganas competencia con armas marciales y armadura pesada."
      },
      {
        "level": 1,
        "name": "Sacerdote del Celo",
        "description": "Al usar la acción de atacar, puedes realizar un ataque extra con un arma como acción adicional (usos = mod. SAB; lo recuperas en el descanso largo)."
      },
      {
        "level": 2,
        "name": "Canalizar: Fervor Devorador",
        "description": "Cuando tires daño de fuego o de trueno, usa Canalizar Divinidad para causar el valor máximo en vez de tirar los dados."
      },
      {
        "level": 6,
        "name": "Golpe Tronante",
        "description": "Al causar daño de trueno a una criatura Grande o menor, la empujas hasta 10 pies."
      },
      {
        "level": 8,
        "name": "Golpe Divino",
        "description": "1d8 de daño extra del mismo tipo que el del arma en los ataques, una vez por turno (2d8 en el 14º nivel)."
      },
      {
        "level": 17,
        "name": "Destello de Gloria",
        "description": "Al caer a 0 PV por un ataque que ves, reacción: te mueves hasta el atacante y lo atacas con ventaja; un acierto causa +5d10 de fuego y +5d10 del tipo del arma (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "circulo_dos_sonhos",
    "source": "xge",
    "classId": "druida",
    "name": "Círculo de los Sueños",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Bálsamo de la Corte del Verano",
        "description": "Acción adicional: gastas dados d6 de un reservorio = a tu nivel de druida para curar a un aliado a 120 pies: recupera la suma en PV y gana 1 PV temporal por dado."
      },
      {
        "level": 6,
        "name": "Hogar de la Luz y la Sombra",
        "description": "Al iniciar un descanso, creas una esfera invisible de 30 pies: tú y tus aliados ganáis +5 en Sigilo y Percepción y las llamas no brillan fuera de ella; desaparece al terminar el descanso o si sales."
      },
      {
        "level": 10,
        "name": "Caminos Ocultos",
        "description": "Acción adicional: te teletransportas 60 pies; o acción: teletransportas a una criatura que tocas 30 pies. Usos = mod. SAB (mínimo 1), todos recuperados en el descanso largo."
      },
      {
        "level": 14,
        "name": "Caminante de los Sueños",
        "description": "Tras un descanso corto, lanzas Sueño, Observar o Círculo de Teletransporte sin slot (este abre en tu último lugar de descanso largo); 1/ descanso largo."
      }
    ]
  },
  {
    "id": "terra",
    "source": "phb",
    "classId": "druida",
    "name": "Círculo de la Tierra",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Truco Extra",
        "description": "Aprendes 1 truco de druida más a tu elección."
      },
      {
        "level": 2,
        "name": "Recuperación Natural",
        "description": "En un descanso corto, recuperas slots (hasta la mitad del nivel del druida, sin slots de 6º+); 1/ descanso largo."
      },
      {
        "level": 3,
        "name": "Conjuros del Círculo",
        "description": "Eliges un terreno (arco, costa, desierto, bosque, campo, montaña, pantano o Abismo Profundo) y siempre preparas los conjuros ligados a él."
      },
      {
        "level": 6,
        "name": "Paso de la Tierra",
        "description": "El terreno difícil no mágico no cuesta desplazamiento extra; ventaja para sobrevivir en el exterior."
      },
      {
        "level": 10,
        "name": "Protección de la Naturaleza",
        "description": "Inmune a ser hechizado/asustado por elementales y feéricos; inmune al veneno y a las enfermedades."
      },
      {
        "level": 14,
        "name": "Santuario de la Naturaleza",
        "description": "Las criaturas de la naturaleza dudan en atacarte (SAB o no ataca)."
      }
    ]
  },
  {
    "id": "lua",
    "source": "phb",
    "classId": "druida",
    "name": "Círculo de la Luna",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Forma Salvaje de Combate",
        "description": "Te transformas como acción adicional y puedes gastar un slot para recuperar PV al cambiar de forma."
      },
      {
        "level": 2,
        "name": "Formas del Círculo",
        "description": "Puedes asumir formas de bestas más peligrosas (el límite de CR se dobla)."
      },
      {
        "level": 6,
        "name": "Golpe Primal",
        "description": "Los ataques en forma de besta cuentan como mágicos para superar resistencias al daño no mágico."
      },
      {
        "level": 10,
        "name": "Forma Salvaje Elemental",
        "description": "Gastas 2 usos de Forma Salvaje para transformarte en elemental del aire, tierra, fuego o agua."
      },
      {
        "level": 14,
        "name": "Mil Formas",
        "description": "Puedes lanzar Cambio de Forma sin componente material."
      }
    ]
  },
  {
    "id": "circulo_do_pastor",
    "source": "xge",
    "classId": "druida",
    "name": "Círculo del Pastor",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Habla de los Bosques",
        "description": "Aprendes a leer, hablar y escribir Silvano; las bestias entienden tus palabras y tú comprendes sus ruidos y gestos."
      },
      {
        "level": 2,
        "name": "Tótem Espiritual",
        "description": "Acción adicional: invocas un espíritu (oso, halcón o unicornio) a 60 pies, con un aura de 30 pies durante 1 minuto; lo mueves con una acción adicional; 1/ descanso corto o largo."
      },
      {
        "level": 6,
        "name": "Invocador Poderoso",
        "description": "Las bestias y los feéricos que invocas con un conjuro aparecen con +2 PV por dado de vida y causan daño mágico con sus armas naturales."
      },
      {
        "level": 10,
        "name": "Espíritu Guardián",
        "description": "Una bestia o un feérico invocado por ti que termine su turno en el aura del Tótem Espiritual recupera PV iguales a la mitad de tu nivel de druida."
      },
      {
        "level": 14,
        "name": "Invocaciones Fieles",
        "description": "Al caer a 0 PV o quedar incapacitado, ganas el efecto de Formas Animales como con un slot de 9º (4 bestias de CR ≤ 2 a 20 pies, 1 hora, sin concentración); 1/ descanso largo."
      }
    ]
  },
  {
    "id": "circulo_dos_esporos",
    "source": "ggr",
    "classId": "druida",
    "name": "Círculo de las Esporas",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Conjuros del Círculo",
        "description": "Aprendes el truco Toque Glacial y, en los niveles 3º, 5º, 7º y 9º, los conjuros del círculo, siempre preparados y sin contar en el límite diario."
      },
      {
        "level": 2,
        "name": "Halo de Esporas",
        "description": "Reacción: una criatura que entra o inicia su turno a 10 pies sufre 1d4 necrótico (salvación de CON contra la CD de tu conjuro); pasa a 1d6 en el 6º, 1d8 en el 10º y 1d10 en el 14º nivel."
      },
      {
        "level": 2,
        "name": "Entidad Simbiótica",
        "description": "Acción: gastas 1 uso de Forma Salvaje para ganar 4 PV temporales por nivel de druida; durante 10 minutos el Halo dobla el daño y los ataques cuerpo a cuerpo suman 1d6 necrótico."
      },
      {
        "level": 6,
        "name": "Infestación Fúngica",
        "description": "Reacción: animas el cadáver de una bestia o de un humanoide de tamaño Pequeño o Mediano que muera a 10 pies (zombi con 1 PV, 1 hora); usos = mod. SAB (mínimo 1), descanso largo."
      },
      {
        "level": 10,
        "name": "Esporas Propagadas",
        "description": "Acción adicional con la Entidad Simbiótica activa: lanzas esporos a 30 pies en un cubo de 10 pies durante 1 minuto; quien entre o inicie su turno ahí sufre el daño del Halo (1/ turno)."
      },
      {
        "level": 14,
        "name": "Cuerpo Fúngico",
        "description": "No puedes quedar ciego, sordo, asustado ni envenenado, y los críticos contra ti cuentan como aciertos normales, salvo que estés incapacitado."
      }
    ]
  },
  {
    "id": "circulo_das_estrelas",
    "source": "tce",
    "classId": "druida",
    "name": "Círculo de las Estrellas",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Mapa Estelar",
        "description": "Un mapa estelar (foco de conjuración): concede el truco Guía, prepara Dardo Guiado y te permite lanzarlo sin slot (usos = bónus de competencia; lo recuperas en el descanso largo)."
      },
      {
        "level": 2,
        "name": "Forma Estelar",
        "description": "Acción adicional: gastas 1 uso de Forma Salvaje durante 10 minutos — Arquero (1d8 + SAB radiante), Cáliz (curación 1d8 + SAB) o Dragón (las tiradas ≤ 9 valen 10)."
      },
      {
        "level": 6,
        "name": "Presagio Cósmico",
        "description": "Tras un descanso largo, tiras un dado: par, reacción suma 1d6 a la tirada de una criatura a 30 pies; impar, la resta; usos = bónus de competencia."
      },
      {
        "level": 10,
        "name": "Constelaciones Centelleantes",
        "description": "El daño del Arquero y la curación del Cáliz pasan a 2d8; con el Dragón activo ganas vuelo de 20 pies y mantenerte en el aire, y puedes cambiar de constelación al inicio de tu turno."
      },
      {
        "level": 14,
        "name": "Lleno de Estrellas",
        "description": "Mientras estás en la Forma Estelar, te vuelves parcialmente etéreo: resistencia al daño contundente, perforante y cortante."
      }
    ]
  },
  {
    "id": "circulo_do_fogo_selvagem",
    "source": "tce",
    "classId": "druida",
    "name": "Círculo del Fuego Salvaje",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Conjuros del Círculo",
        "description": "Ganas los conjuros del círculo (Manos Ardientes, Curar Heridas, etc.) en los niveles indicados, siempre preparados y sin contar en el límite diario."
      },
      {
        "level": 2,
        "name": "Invocar Espíritu Salvaje",
        "description": "Acción: gastas 1 uso de Forma Salvaje para invocar el espíritu a 30 pies (las criaturas a 10 pies hacen salvación de DES o sufren 2d6 de fuego); dura 1 hora y actúa después de ti."
      },
      {
        "level": 6,
        "name": "Vínculo Mejorado",
        "description": "Con el espíritu invocado, los conjuros de fuego o de curación suman 1d8 en una tirada; los conjuros de alcance pueden partir de ti o del espíritu."
      },
      {
        "level": 10,
        "name": "Llamas Cauterizantes",
        "description": "Reacción: cuando una criatura Pequeña o mayor muera a 30 pies, creas una llama espectral durante 1 minuto que cura o hiere con 2d10 + SAB; usos = bónus de competencia."
      },
      {
        "level": 14,
        "name": "Resurrección Llameante",
        "description": "Al caer a 0 PV con el espíritu a 120 pies, derribas al espíritu a 0 PV, recuperas la mitad de tus PV y te levantas; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "arquetipo_do_arqueiro_arcano",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Arquetipo del Arquero Arcano",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Saberes del Arquero Arcano",
        "description": "Competencia en Arcanos o Naturaleza y elección entre los trucos Prestidigitación o Oficio Druida."
      },
      {
        "level": 3,
        "name": "Disparo Arcano",
        "description": "Aprendes 2 opciones de Disparo Arcano y aplicas 1 por turno a una flecha de arco (2 usos, descanso corto o largo); ganas +1 opción en los niveles 7, 10, 15 y 18."
      },
      {
        "level": 7,
        "name": "Flecha Mágica",
        "description": "Las flechas no mágicas disparadas con un arco corto o largo cuentan como mágicas para superar resistencias e inmunidades al daño no mágico."
      },
      {
        "level": 7,
        "name": "Tiro Curvado",
        "description": "Al fallar un ataque con una flecha mágica, acción adicional: vuelves a tirar contra otro objetivo a 60 pies del original."
      },
      {
        "level": 15,
        "name": "Disparo Siempre Listo",
        "description": "Al tirar la iniciativa sin usos de Disparo Arcano restantes, recuperas 1 uso."
      }
    ]
  },
  {
    "id": "arquetipo_do_estandarte",
    "source": "scag",
    "classId": "guerreiro",
    "name": "Arquetipo del Estandartista",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Grito de Convocatoria",
        "description": "Al usar Segundo Aliento, hasta 3 criaturas aliadas a 60 pies recuperan PV iguales a tu nivel de guerrero, si pueden verte u oírte."
      },
      {
        "level": 7,
        "name": "Enviado Real",
        "description": "Competencia en Persuasión (o pericia si ya la tienes) y doblas el bónus de competencia en Persuasión."
      },
      {
        "level": 10,
        "name": "Soplo Inspirador",
        "description": "Al usar Surto de Acción, eliges 1 aliado a 60 pies que puede atacar con su reacción (2 aliados desde el 18º nivel)."
      },
      {
        "level": 15,
        "name": "Baluarte",
        "description": "Al usar Implacable, extiendes la nueva tirada a un aliado a 60 pies que falló en la misma salvación, si puedes verlo u oírlo."
      }
    ]
  },
  {
    "id": "mestre_de_armas",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Arquetipo del Maestro de Armas",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Superioridad de Combate",
        "description": "Aprendes 3 maniobras y usas dados de superioridad (d8) para alimentarlas; 4 dados en el 7º, 5 en el 10º y 6 en el 15º nivel."
      },
      {
        "level": 3,
        "name": "Estudiante de la Guerra",
        "description": "Ganas competencia con un tipo de herramienta de artesano a tu elección."
      },
      {
        "level": 7,
        "name": "Conoce al Enemigo",
        "description": "Tras al menos 1 minuto observando o interactuando con una criatura fuera de combate, descubres cómo se compara contigo (FUER, DES, CON, CA, PV, bonificador de ataque y salvaciones)."
      },
      {
        "level": 10,
        "name": "Superioridad Mejorada",
        "description": "Tus dados de superioridad se convierten en d10 (d12 en el 18º nivel)."
      },
      {
        "level": 15,
        "name": "Implacable",
        "description": "Al tirar la iniciativa sin ningún dado de superioridad restante, recuperas 1 dado de superioridad."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Arquetipo del Caballero",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencia Extra",
        "description": "Eliges una pericia entre Cuidar de animales, Historia, Perspicacia, Actuación y Persuasión, o aprendes 1 idioma."
      },
      {
        "level": 3,
        "name": "Nacido en la Silla",
        "description": "Ventaja en las salvaciones para no caer de la montura; al caer hasta 10 pies aterrizas de pie; montar o desmontar cuesta 5 pies de desplazamiento."
      },
      {
        "level": 3,
        "name": "Marca Inquebrantable",
        "description": "Marcas a quien aciertes en cuerpo a cuerpo: a 5 pies de ti tiene desventaja contra otros; si hiere a otros, acción adicional: ataque con ventaja y daño = mitad del nivel (usos = mod. FUER)."
      },
      {
        "level": 7,
        "name": "Maniobra de Protección",
        "description": "Reacción: tiras 1d8 y lo sumas a la CA de ti o de una criatura a 5 pies; si aún así aciertan, el objetivo tiene resistencia al daño. Usos = mod. CON (mínimo 1)."
      },
      {
        "level": 10,
        "name": "Dominar la Línea",
        "description": "Las criaturas provocan tu ataque de oportunidad al moverse 5 pies o más a tu alcance; al acertar, su desplazamiento cae a 0 hasta el final de su turno."
      },
      {
        "level": 15,
        "name": "Carga Feroz",
        "description": "Tras moverte 10 pies en línea recta y acertar, el objetivo hace salvación de FUER (CD 8 + comp. + FUER) o cae; 1/ turno."
      },
      {
        "level": 18,
        "name": "Defensor Vigilante",
        "description": "En combate, ganas una reacción extra por turno de cada criatura (excepto en tu turno), usada solo para ataques de oportunidad."
      }
    ]
  },
  {
    "id": "campeao",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Arquetipo del Campeón",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Crítico Mejorado",
        "description": "Los ataques con arma aciertan en crítico con una tirada de 19 o 20."
      },
      {
        "level": 7,
        "name": "Atletismo Notable",
        "description": "La mitad de tu bonificador de competencia (redondeada hacia arriba) en pruebas de FUER, DES o CON sin competencia; ventaja en saltos."
      },
      {
        "level": 10,
        "name": "Estilo de Combate Extra",
        "description": "Eliges una segunda opción de la característica Estilo de Combate."
      },
      {
        "level": 15,
        "name": "Crítico Superior",
        "description": "Los ataques con arma aciertan en crítico con una tirada de 18, 19 o 20."
      },
      {
        "level": 18,
        "name": "Sobreviviente",
        "description": "Al inicio de tu turno, con la mitad de los PV o menos, recuperas 5 + mod. CON PV; ventaja en salvaciones de muerte en esa condición; inmune a las enfermedades."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro_eco",
    "source": "egw",
    "classId": "guerreiro",
    "name": "Arquetipo del Caballero Eco",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Manifestar Eco",
        "description": "Acción adicional: creas un eco translúcido a 15 pies (CA 14 + comp., 1 PV); lo mueves sin acción, cambias de sitio con él (15 pies de desplazamiento) y atacas desde su posición."
      },
      {
        "level": 3,
        "name": "Liberar Encarnación",
        "description": "Al usar la acción de atacar, haces 1 golpe cuerpo a cuerpo extra desde el eco; usos = mod. CON (mínimo 1), descanso largo."
      },
      {
        "level": 7,
        "name": "Avatar del Eco",
        "description": "Acción: ves y oyes por el eco durante hasta 10 minutos, quedando ciego y sordo; el eco puede estar a 1.000 pies sin ser destruido."
      },
      {
        "level": 10,
        "name": "Mártir de las Sombras",
        "description": "Reacción: mueves el eco a 5 pies del objetivo amenazado y el ataque que lo provocó pasa a apuntarle; 1/ descanso corto o largo."
      },
      {
        "level": 15,
        "name": "Recuperar Potencial",
        "description": "Con el eco destruido por daño, ganas 2d6 + mod. CON de PV temporales; usos = mod. CON (mínimo 1), descanso largo."
      },
      {
        "level": 18,
        "name": "Legión de Uno",
        "description": "Acción adicional: creas 2 ecos que coexisten (un tercero destruye a los anteriores); al tirar la iniciativa sin usos de Liberar Encarnación, recuperas 1."
      }
    ]
  },
  {
    "id": "cavaleiro_arcano",
    "source": "phb",
    "classId": "guerreiro",
    "name": "Arquetipo del Caballero Arcano",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Conjuración",
        "description": "Aprendes 2 trucos de la lista del mago y conjuros de guerrero con slots según la tabla (INT como atributo de conjuración)."
      },
      {
        "level": 3,
        "name": "Vínculo con el Arma",
        "description": "Ritual de 1 hora: vinculas un arma; puedes invocarla a tu mano o al suelo como acción adicional y no puede ser desarmada a la fuerza."
      },
      {
        "level": 7,
        "name": "Magia de Guerra",
        "description": "Al lanzar un truco con tu acción, puedes atacar con un arma como acción adicional."
      },
      {
        "level": 10,
        "name": "Golpe Arcano",
        "description": "La criatura alcanzada por tu arma tiene desventaja en la próxima salvación contra conjuros que lances contra ella."
      },
      {
        "level": 15,
        "name": "Carga Arcana",
        "description": "Al usar un Surto de Acción, puedes teletransportarte hasta 30 pies a un espacio vacío que veas, antes o después de la acción extra."
      },
      {
        "level": 18,
        "name": "Magia de Guerra Mejorada",
        "description": "Al lanzar cualquier conjuro con tu acción, puedes atacar con un arma como acción adicional."
      }
    ]
  },
  {
    "id": "arquetipo_do_guerreiro_psiquico",
    "source": "tce",
    "classId": "guerreiro",
    "name": "Arquetipo del Guerrero Psiónico",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Poder Psiónico",
        "description": "Los Dados de Energía Psiónica (d6, cantidad = 2 × comp.; d8 en el 5º, d10 en el 11º y d12 en el 17º) alimentan Campo Protector, Golpe Psiónico y Movimiento Telequinético."
      },
      {
        "level": 7,
        "name": "Adepto Telequinético",
        "description": "Salto Impulsado: acción adicional con vuelo = 2 × tu desplazamiento hasta el final del turno; Empellón Telequinético: salvación de FUER o cae o se mueve 10 pies."
      },
      {
        "level": 10,
        "name": "Mente Guardada",
        "description": "Resistencia al daño psíquico; si inicias tu turno hechizado o asustado, gastas 1 Dado de Energía Psiónica para terminar el efecto."
      },
      {
        "level": 15,
        "name": "Baluarte de Fuerza",
        "description": "Acción adicional: hasta mod. INT criaturas que ves a 30 pies (incluido tú) tienen cobertura media durante 1 minuto."
      },
      {
        "level": 18,
        "name": "Maestro Telequinético",
        "description": "Lanzas Telequinesis sin componentes (INT); por turno durante la concentración, puedes realizar 1 ataque con un arma como acción adicional."
      }
    ]
  },
  {
    "id": "arquetipo_do_cavaleiro_runico",
    "source": "tce",
    "classId": "guerreiro",
    "name": "Arquetipo del Caballero Rúnico",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencias Adicionales",
        "description": "Ganas competencia con herramientas de herrero y aprendes a hablar, leer y escribir Gigante."
      },
      {
        "level": 3,
        "name": "Tallador de Runas",
        "description": "Aprendes 2 runas (3 en el 7º, 4 en el 10º y 5 en el 15º nivel) y las inscribes en objetos con cada descanso largo; CD de la runa = 8 + comp. + CON."
      },
      {
        "level": 3,
        "name": "Poder del Gigante",
        "description": "Acción adicional: durante 1 minuto te vuelves Grande (si eres menor), ganas ventaja en pruebas y salvaciones de FUER y +1d6 de daño; usos = bónus de competencia."
      },
      {
        "level": 7,
        "name": "Escudo Rúnico",
        "description": "Reacción: obligas al atacante a volver a tirar el d20 al acertar a una criatura que ves a 60 pies; usos = bónus de competencia."
      },
      {
        "level": 10,
        "name": "Gran Estatura",
        "description": "Creces 3d4 pulgadas y el daño extra del Poder del Gigante pasa a 1d8."
      },
      {
        "level": 15,
        "name": "Maestro de las Runas",
        "description": "Puedes invocar cada runa que conoces dos veces y recuperas los usos al terminar un descanso corto o largo."
      },
      {
        "level": 18,
        "name": "Coloso Rúnico",
        "description": "El daño extra del Poder del Gigante pasa a 1d10 y la transformación puede volverte Colosal, con alcance aumentado en 5 pies."
      }
    ]
  },
  {
    "id": "arquetipo_do_samurai",
    "source": "xge",
    "classId": "guerreiro",
    "name": "Arquetipo del Samurái",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencia Extra",
        "description": "Eliges una pericia entre Historia, Perspicacia, Actuación y Persuasión, o aprendes 1 idioma."
      },
      {
        "level": 3,
        "name": "Espíritu de Batalla",
        "description": "Acción adicional: ventaja en todos los ataques con arma y 5 PV temporales (10 en el 10º y 15 en el 15º nivel) hasta el final del turno; 3 usos, descanso largo."
      },
      {
        "level": 7,
        "name": "Cortesano Elegante",
        "description": "Sumas mod. SAB en las pruebas de Persuasión y ganas competencia en la salvación de SAB (o INT/CAR si ya la tienes)."
      },
      {
        "level": 10,
        "name": "Espíritu Incansable",
        "description": "Al tirar la iniciativa sin usos de Espíritu de Batalla, recuperas 1 uso."
      },
      {
        "level": 15,
        "name": "Golpe Rápido",
        "description": "Si atacas con ventaja, puedes renunciar a ella para hacer 1 ataque con arma extra contra el mismo objetivo; 1/ turno."
      },
      {
        "level": 18,
        "name": "Fuerza Antes de la Muerte",
        "description": "Al sufrir daño que te reduzca a 0 PV, reacción: pospones el desmayo y ganas un turno extra inmediato; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "tradicao_do_dragao_ascendente",
    "source": "ftd",
    "classId": "monge",
    "name": "Tradición del Dragón Ascendente",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Discípulo Dracónico",
        "description": "Reacción: vuelves a tirar una prueba de CAR fallida (1/ descanso largo); tus golpes sin armas pueden causar ácido, frío, fuego, eléctrico o veneno; aprendes Dracónico."
      },
      {
        "level": 3,
        "name": "Soplo del Dragón",
        "description": "En vez de un ataque, exhalas un cono de 20 pies o una línea de 30 pies (salvación de DES, 2 × el dado de Artes Marciales); usos = bonificador de competencia o 2 ki (3 × en el 11º nivel)."
      },
      {
        "level": 6,
        "name": "Alas Desplegadas",
        "description": "Al usar Paso del Viento, despliegas alas espectrales y vuelas con un desplazamiento igual al tuyo hasta el fin del turno; usos = bonificador de competencia."
      },
      {
        "level": 11,
        "name": "Aspecto del Wyrm",
        "description": "Acción adicional: aura dracónica de 10 pies durante 1 minuto — Presencia Intimidadora (salvación de SAB o asustado) o resistencia a un tipo de daño; 1/ descanso largo o 3 ki."
      },
      {
        "level": 17,
        "name": "Aspecto Ascendente",
        "description": "Soplo con 1 ki: cono de 60 pies o línea de 90 pies (4 × el dado de Artes Marciales) y percepción ciega; con el Aspecto del Wyrm, criaturas del aura: salvación de DES o 3d10."
      }
    ]
  },
  {
    "id": "tradicao_do_ser_astral",
    "source": "tce",
    "classId": "monge",
    "name": "Tradición del Ser Astral",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Brazos del Ser Astral",
        "description": "Acción adicional (1 ki): brazos espectrales por 10 minutos — usas SAB en vez de FUE y +5 pies de alcance; al surgir, criaturas a 10 pies sufren 2 dados de Artes Marciales de fuerza (salvación de DES)."
      },
      {
        "level": 6,
        "name": "Visaje del Ser Astral",
        "description": "Acción adicional (1 ki): visaje por 10 minutos — visión en la oscuridad a 120 pies, ventaja en Intimidación y Perspicacia, y proyectas tu voz a una criatura a 60 pies o a todos a 600 pies."
      },
      {
        "level": 11,
        "name": "Cuerpo del Ser Astral",
        "description": "Con brazos y visaje, el cuerpo espectral surge sin acción: Desvío Energético (reacción, −1d10 + SAB) y los golpes con los brazos suman el dado de Artes Marciales."
      },
      {
        "level": 17,
        "name": "Ser Astral Despierto",
        "description": "Acción adicional (5 ki): manifiestas brazos, visaje y cuerpo por 10 minutos — +2 a la CA y tu Ataque Extra permite 3 golpes con los brazos espectrales."
      }
    ]
  },
  {
    "id": "tradicao_do_mestre_bebado",
    "source": "xge",
    "classId": "monge",
    "name": "Tradición del Maestro Ebrio",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencias Adicionales",
        "description": "Competencia en Actuación (si no la tenías) y con herramientas de cervecero."
      },
      {
        "level": 3,
        "name": "Técnica Ebria",
        "description": "Al usar Tajo de Golpes, obtienes el beneficio de la acción Desenganchar y +10 pies de desplazamiento hasta el fin del turno."
      },
      {
        "level": 6,
        "name": "Balance Ebrio",
        "description": "Ponerse de pie cuesta 5 pies de desplazamiento; reacción (1 ki): rediriges un ataque que te falló hacia una criatura a 5 pies que ves."
      },
      {
        "level": 11,
        "name": "Suerte del Ebrio",
        "description": "Al tirar con desventaja una prueba, un ataque o una salvación, gastas 2 ki para cancelar la desventaja."
      },
      {
        "level": 17,
        "name": "Frenesí Ebrio",
        "description": "Tajo de Golpes puede hacer hasta 3 golpes extra (5 en total), siempre que cada golpe se dirija a una criatura diferente."
      }
    ]
  },
  {
    "id": "quatro_elementos",
    "source": "phb",
    "classId": "monge",
    "name": "Tradición de los Cuatro Elementos",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Discípulo de los Elementos",
        "description": "Aprendes Sintonía Elemental y una disciplina elemental; cada disciplina se alimenta con puntos de ki."
      },
      {
        "level": 6,
        "name": "Disciplinas Elementales (6º)",
        "description": "Aprendes una disciplina elemental más (puedes cambiar una conocida); a partir del 5º nivel de monje gastas ki extra para lanzar disciplinas a niveles superiores."
      },
      {
        "level": 11,
        "name": "Disciplinas Elementales (11º)",
        "description": "Aprendes una disciplina elemental más a tu elección."
      },
      {
        "level": 17,
        "name": "Disciplinas Elementales (17º)",
        "description": "Aprendes la última disciplina elemental a la que tienes acceso."
      }
    ]
  },
  {
    "id": "tradicao_do_kensei",
    "source": "xge",
    "classId": "monge",
    "name": "Tradición del Kensei",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Camino del Kensei",
        "description": "Eliges 1 arma cuerpo a cuerpo y 1 a distancia como kensei (competencia; +1 tipo en los 6º, 11º y 17º); +2 a la CA al acertar un golpe sin armas y +1d4 en ataques a distancia (acción adicional)."
      },
      {
        "level": 6,
        "name": "Uno con la Hoja",
        "description": "Las armas kensei cuentan como mágicas para superar resistencias; Golpe Habilidoso: gastas 1 ki al acertar para sumar el dado de Artes Marciales al daño (1/ turno)."
      },
      {
        "level": 11,
        "name": "Afilado de la Hoja",
        "description": "Acción adicional: gastas hasta 3 ki y sumas el mismo valor a las tiradas de ataque y daño con un arma kensei durante 1 minuto."
      },
      {
        "level": 17,
        "name": "Precisión Inquebrantable",
        "description": "Al fallar un ataque con un arma de monje, puedes volver a tirar; 1/ turno."
      }
    ]
  },
  {
    "id": "tradicao_da_morte_longa",
    "source": "scag",
    "classId": "monge",
    "name": "Tradición de la Muerte Lejana",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Toque de la Muerte",
        "description": "Al reducir a 0 PV a una criatura a 5 pies, ganas PV temporarios iguales a mod. SAB + tu nivel de monje."
      },
      {
        "level": 6,
        "name": "Hora de la Cosecha",
        "description": "Acción: las criaturas que pueden verte a 30 pies hacen salvación de SAB o quedan asustadas hasta el fin de tu próximo turno."
      },
      {
        "level": 11,
        "name": "Dominio de la Muerte",
        "description": "Al caer a 0 PV, gastas 1 ki (sin acción) para permanecer con 1 PV."
      },
      {
        "level": 17,
        "name": "Toque de la Muerte Lejana",
        "description": "Acción: tocas una criatura a 5 pies gastando de 1 a 10 ki — 2d10 necróticos por ki gastado (salvación de CON, mitad en caso de éxito)."
      }
    ]
  },
  {
    "id": "tradicao_da_misericordia",
    "source": "tce",
    "classId": "monge",
    "name": "Tradición de la Misericordia",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Instrumentos de la Misericordia",
        "description": "Competencia en Perspicacia, Medicina y kit de herborista; obtienes una máscara especial usada en las características de la tradición."
      },
      {
        "level": 3,
        "name": "Manos que Curan",
        "description": "Acción (1 ki): tocas una criatura y curas el dado de Artes Marciales + mod. SAB; puedes sustituir un golpe de Tajo de Golpes sin gastar ki."
      },
      {
        "level": 3,
        "name": "Manos que Heren",
        "description": "Golpe sin armas (1 ki): causa daño necrótico extra igual al dado de Artes Marciales + mod. SAB; 1/ turno."
      },
      {
        "level": 6,
        "name": "Toque del Médico",
        "description": "Manos que Curan también elimina enfermedad, ceguera, sordera, parálisis, envenenamiento o aturdimiento; Manos que Heren imponen envenenado hasta el fin de tu próximo turno."
      },
      {
        "level": 11,
        "name": "Tajo de Golpes de Curación y Daño",
        "description": "En Tajo de Golpes, cada golpe puede volverse Manos que Curan sin ki, y Manos que Heren puede usarse sin ki (sigue 1/ turno)."
      },
      {
        "level": 17,
        "name": "Mano de la Misericordia Suprema",
        "description": "Acción: tocas un cadáver de hasta 24 horas y gastas 5 ki para revivirlo con 4d10 + SAB PV, eliminando ceguera, sordera, parálisis, envenenamiento y aturdimiento; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "mao_aberta",
    "source": "phb",
    "classId": "monge",
    "name": "Tradición de la Mano Abierta",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Técnica de la Mano Abierta",
        "description": "Al acertar un golpe del Tajo de Golpes, impones un efecto: empujas 10 pies, derribas, desarmas o impides al objetivo usar reacciones."
      },
      {
        "level": 6,
        "name": "Integridad Corporal",
        "description": "Acción: recuperas PV iguales a 3 veces tu nivel de monje (1/ descanso largo)."
      },
      {
        "level": 11,
        "name": "Serenidad",
        "description": "Al final del descanso largo, quedas bajo el efecto de Santuario hasta el próximo descanso largo."
      },
      {
        "level": 17,
        "name": "Palma Temblorosa",
        "description": "Con un golpe sin armas, gastas 3 ki para crear vibraciones imperceptibles (duran días iguales al nivel del monje); activación: el objetivo hace salvación de CON o cae a 0 PV (en éxito recibe 3d10 de daño)."
      }
    ]
  },
  {
    "id": "sombra",
    "source": "phb",
    "classId": "monge",
    "name": "Tradición de las Sombras",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Artes de las Sombras",
        "description": "Gastas 2 ki para lanzar Oscuridad, Visión en la Oscuridad, Pasar sin Rastro o Silencio (sin componente material); aprendes el truco Ilusión Menor."
      },
      {
        "level": 6,
        "name": "Paso en las Sombras",
        "description": "En penumbra u oscuridad, acción adicional: te teletransportas 60 pies a un espacio en sombras que veas y ganas ventaja en tu próximo ataque cuerpo a cuerpo hasta el final del turno."
      },
      {
        "level": 11,
        "name": "Manto de Sombras",
        "description": "En penumbra u oscuridad, acción: quedas invisible hasta atacar, lanzar un conjuro o entrar en un área de luz intensa."
      },
      {
        "level": 17,
        "name": "Oportunista",
        "description": "Reacción: cuando una criatura a 5 pies de ti es alcanzada por el ataque de otra criatura, puedes atacarla con un arma cuerpo a cuerpo."
      }
    ]
  },
  {
    "id": "tradicao_da_alma_solar",
    "source": "scag",
    "classId": "monge",
    "name": "Tradición del Alma Solar",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Dardo Solar Radiante",
        "description": "Nuevo ataque a distancia (30 pies, d4 que escala con Artes Marciales, suma mod. DES); con 1 ki, haces 2 como acción adicional; sirve para el Ataque Extra."
      },
      {
        "level": 6,
        "name": "Golpe Incandescente",
        "description": "Tras la acción de atacar, 2 ki: lanzas Manos Ardientes como acción adicional; los ki extra suben el nivel del conjuro (máximo = la mitad de tu nivel de monje)."
      },
      {
        "level": 11,
        "name": "Estallido Solar",
        "description": "Acción: un orbe a 150 pies explota en una esfera de 20 pies — 2d6 radiantes (salvación de CON, mitad); cada ki extra, hasta 3, suma 2d6."
      },
      {
        "level": 17,
        "name": "Escudo Solar",
        "description": "Aura de luz de 30 pies (más 30 pies de penumbra); reacción: la criatura que te acierta cuerpo a cuerpo recibe 5 + mod. SAB de daño radiante."
      }
    ]
  },
  {
    "id": "ancestrais",
    "source": "phb",
    "classId": "paladino",
    "name": "Juramento de los Ancestros",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de los Ancestros",
        "description": "Proteger la vida, nutrir la alegría y honrar la belleza: el bien por encima de cualquier ley."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Naturaleza del Más Allá y Convertir a los Infiels",
        "description": "Acción: espinas de vegetación atan a un objetivo a 30 pies (salvación de DES o preso); o feéricos y demonios a 30 pies que fallen su salvación de SAB quedan asustados durante 1 minuto."
      },
      {
        "level": 7,
        "name": "Aura de Protección",
        "description": "Tú y los aliados a 10 pies tenéis resistencia al daño causado por conjuros (el radio aumenta a 30 pies en el 18º nivel)."
      },
      {
        "level": 15,
        "name": "Centinela Inmortal",
        "description": "Al caer a 0 PV sin ser dado por muerto de inmediato, puedes volver a 1 PV (1/ descanso largo); tienes ventaja contra no-muertos."
      },
      {
        "level": 20,
        "name": "Campeón Ancestral",
        "description": "Acción: durante 1 minuto asumes la forma de una fuerza de la naturaleza: desplazamiento +10 pies, ventaja en ataques cuerpo a cuerpo y puedes lanzar un conjuro usando la acción (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "juramento_da_conquista",
    "source": "xge",
    "classId": "paladino",
    "name": "Juramento de la Conquista",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Conquista",
        "description": "Apagar la Llama de la Esperanza, Gobernar con Puño de Hierro y la Fuerza por Encima de Todo: la victoria debe quebrar la voluntad de luchar del enemigo."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Presencia Conquistadora y Golpe Guiado",
        "description": "Acción: las criaturas que ves a 30 pies hacen salvación de SAB o quedan asustadas durante 1 minuto; o sumas +10 a un ataque, elegido tras ver la tirada."
      },
      {
        "level": 7,
        "name": "Aura de la Conquista",
        "description": "Aura de 10 pies: la criatura asustada tiene desplazamiento 0 y recibe daño psíquico igual a la mitad de tu nivel de paladín al iniciar su turno en el aura (30 pies en el 18º)."
      },
      {
        "level": 15,
        "name": "Reprimenda Siniestra",
        "description": "La criatura que te acierta con un ataque recibe daño psíquico igual a mod. CAR (mínimo 1), si no estás incapacitado."
      },
      {
        "level": 20,
        "name": "Conquistador Invencible",
        "description": "Acción: durante 1 minuto, avatar de la conquista — resistencia a todo daño, 1 ataque extra con la acción de atacar y crítico con 19-20; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "juramento_da_coroa",
    "source": "scag",
    "classId": "paladino",
    "name": "Juramento de la Corona",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Corona",
        "description": "Ley, Lealtad, Coraje y Responsabilidad: la ley es suprema y tu palabra es el vínculo que sostiene la civilización."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Desafío del Campeón y Torcer el Curso",
        "description": "Acción adicional: desafío (las criaturas que ves a 30 pies hacen salvación de SAB y no se alejan más de 30 pies); o: aliados a 30 pies con la mitad de los PV o menos curan 1d6 + mod. CAR."
      },
      {
        "level": 7,
        "name": "Lealtad Divina",
        "description": "Reacción: al sufrir daño, tomas el daño en lugar de una criatura a 5 pies (no puede reducirse de ningún modo)."
      },
      {
        "level": 15,
        "name": "Santo Inquebrantable",
        "description": "Ventaja en salvaciones para no quedar paralizado o aturdido."
      },
      {
        "level": 20,
        "name": "Campeón Exaltado",
        "description": "Acción: durante 1 hora — resistencia al daño de armas no mágicas, ventaja en salvaciones de muerte para ti y aliados a 30 pies y ventaja en salvaciones de SAB; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "devocao",
    "source": "phb",
    "classId": "paladino",
    "name": "Juramento de Devoción",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Devoción",
        "description": "Honor, Coraje, Compasión y Deber: guían tus actos y son la base del juramento."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Armas Sagradas y Desterrar lo Profano",
        "description": "Acción: sumas mod. CAR a los ataques durante 1 minuto; o asustas a no-muertos y aberraciones que fallen su salvación de SAB."
      },
      {
        "level": 7,
        "name": "Aura de la Devoción",
        "description": "Tú y los aliados a 10 pies no podéis ser hechizados mientras estéis conscientes (el radio aumenta a 30 pies en el 18º nivel)."
      },
      {
        "level": 15,
        "name": "Espíritu Puro",
        "description": "Estás siempre bajo los efectos del conjuro Protección Contra el Bien y el Mal."
      },
      {
        "level": 20,
        "name": "Nimbo Sagrado",
        "description": "Acción: aura de luz solar de 30 pies durante 1 minuto; el enemigo que inicie su turno en la luz recibe 10 de daño radiante y tienes ventaja en salvaciones contra conjuros de demonios y no-muertos (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "juramento_da_gloria",
    "source": "moot",
    "classId": "paladino",
    "name": "Juramento de la Gloria",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Gloria",
        "description": "Las Acciones por Encima de las Palabras, los Desafíos son Pruebas, Afila el Cuerpo y Disciplina el Alma: la gloria se conquista con actos heroicos."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Atleta Sin Par e Inspiración de Golpe",
        "description": "Acción adicional: 10 minutos con ventaja en Atletismo y Acrobacias, el doble de carga y saltos +10 pies; o, tras un Golpe Divino, repartes 2d8 + nivel en PV temporarios entre criaturas a 30 pies."
      },
      {
        "level": 7,
        "name": "Aura de la Premura",
        "description": "Tú y tus aliados ganáis +10 pies de desplazamiento; los aliados que inician su turno a 5 pies también, hasta el fin del turno (radio de 10 pies en el 18º)."
      },
      {
        "level": 15,
        "name": "Defensa Gloriosa",
        "description": "Reacción: sumas mod. CAR (mín. +1) a tu CA o a la de una criatura a 10 pies; si el ataque falla, contraatacas; usos = mod. CAR."
      },
      {
        "level": 20,
        "name": "Leyenda Viviente",
        "description": "Acción adicional: 1 minuto — ventaja en todas las tiradas de CAR, conviertes fallos en aciertos (1/ turno) y vuelves a tirar una salvación fallida como reacción; 1/ descanso largo."
      }
    ]
  },
  {
    "id": "juramento_quebrado",
    "source": "dmg",
    "classId": "paladino",
    "name": "Perjuro",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Controlar No-Muertos y Aspecto Temible",
        "description": "Acción: un no-muerto a 30 pies hace salvación de SAB o te obedece 24 h (inmune si su CR ≥ tu nivel); o acción: criaturas que te ven a 30 pies hacen salvación de SAB o quedan asustadas 1 minuto."
      },
      {
        "level": 7,
        "name": "Aura del Odio",
        "description": "Tú, los diablos y los no-muertos a 10 pies sumáis mod. CAR (mín. +1) al daño cuerpo a cuerpo (radio de 30 pies en el 18º); el beneficio cuenta una vez por paladín."
      },
      {
        "level": 15,
        "name": "Resistencia Sobrenatural",
        "description": "Resistencia al daño contundente, perforante y cortante causado por armas no mágicas."
      },
      {
        "level": 20,
        "name": "Señor del Pavor",
        "description": "Acción: 1 minuto — aura de penumbra de 30 pies, las criaturas asustadas reciben 4d10 psíquicos al iniciar su turno en ella; acción adicional: sombras atacan (3d10 + mod. CAR); 1/ descanso largo."
      }
    ]
  },
  {
    "id": "juramento_da_redencao",
    "source": "xge",
    "classId": "paladino",
    "name": "Juramento de la Redención",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Redención",
        "description": "Paz, Inocencia, Paciencia y Sabiduría: la violencia es el último recurso y todo ser puede ser redimido."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Emissario de la Paz y Reprensión al Violento",
        "description": "Acción adicional: +5 a Persuasión durante 10 minutos; o reacción: quien cause daño a una criatura a 30 pies hace salvación de SAB y recibe radiante igual al daño (mitad en caso de éxito)."
      },
      {
        "level": 7,
        "name": "Aura del Guardián",
        "description": "Reacción: tomas para ti el daño causado a una criatura a 10 pies (sin posibilidad de reducirlo); el radio aumenta a 30 pies en el 18º nivel."
      },
      {
        "level": 15,
        "name": "Espíritu Protector",
        "description": "Al terminar tu turno en combate con la mitad de los PV o menos, recuperas 1d6 + la mitad de tu nivel de paladín."
      },
      {
        "level": 20,
        "name": "Emissario de la Redención",
        "description": "Resistencia a todo daño causado por otras criaturas; quien te acierta recibe radiante igual a la mitad del daño recibido (pierdes el beneficio contra criaturas que hayas atacado)."
      }
    ]
  },
  {
    "id": "vinganca",
    "source": "phb",
    "classId": "paladino",
    "name": "Juramento de la Venganza",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de la Venganza",
        "description": "Castigar a los culpables a cualquier costa: sin piedad con el mal, aunque sea despiadado."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Condenar al Enemigo y Juramento de Odio",
        "description": "Acción: un objetivo a 30 pies hace salvación de SAB o queda asustado y con desventaja en los ataques contra ti; o acción adicional: un objetivo a 10 pies queda marcado — ventaja en los ataques contra él durante 1 minuto."
      },
      {
        "level": 7,
        "name": "Aprendiz Implacable",
        "description": "Al acertar un ataque de oportunidad, te mueves hasta la mitad de tu desplazamiento sin provocar ataques de oportunidad."
      },
      {
        "level": 15,
        "name": "Alma de la Venganza",
        "description": "Cuando una criatura bajo el efecto del Juramento de Odio ataca, puedes usar tu reacción para atacarla."
      },
      {
        "level": 20,
        "name": "Ángel Vengador",
        "description": "Durante 1 hora: ganas desplazamiento de vuelo igual al desplazamiento a pie y un aura de miedo — una criatura hostil a 30 pies que inicie su turno allí hace salvación de SAB o queda asustada (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "juramento_dos_vigias",
    "source": "tce",
    "classId": "paladino",
    "name": "Juramento de los Vigías",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Preceptos de los Vigías",
        "description": "Vigilancia, Lealtad y Disciplina: salvaguardar los reinos mortales de las amenazas que vienen de otros planos."
      },
      {
        "level": 3,
        "name": "Conjuros del Juramento",
        "description": "Ganas conjuros de juramento preparados según tu nivel de paladín."
      },
      {
        "level": 3,
        "name": "Divinidad: Voluntad del Vigía y Condenar lo Extraplano",
        "description": "Acción: hasta mod. CAR criaturas a 30 pies tienen ventaja en salvaciones de INT, SAB y CAR 1 minuto; o acción: criaturas extraplanarias a 30 pies: salvación de SAB o repelidas 1 minuto."
      },
      {
        "level": 7,
        "name": "Aura de la Centinela",
        "description": "Tú y los aliados que elijas a 10 pies sumáis el bonificador de competencia a la iniciativa (radio de 30 pies en el 18º nivel)."
      },
      {
        "level": 15,
        "name": "Reprimenda Vigilante",
        "description": "Reacción: cuando tú o una criatura a 30 pies superáis una salvación de INT, SAB o CAR, causas 2d8 + mod. CAR de daño de fuerza a quien impuso la prueba."
      },
      {
        "level": 20,
        "name": "Baluarte Mortal",
        "description": "Acción adicional: 1 minuto — visión verdadera de 120 pies, ventaja contra extraplanarias y, al acertar, el objetivo hace salvación de CAR o es desterrado a su plano (1/ descanso largo o slot de 5º)."
      }
    ]
  },
  {
    "id": "companheiro",
    "source": "phb",
    "classId": "patrulheiro",
    "name": "Compañero Animal",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Compañero Animal",
        "description": "Eliges una bestia Mediana o menor con CR de 1/4 o menos (oso, halcón, pantera, etc.); obedece tus órdenes con tu acción o acción adicional."
      },
      {
        "level": 7,
        "name": "Entrenamiento Excepcional",
        "description": "Cuando la bestia no ataca, puedes usar tu acción adicional para comandarle que Huya, Ayude o Se Esquive; sus ataques cuentan como mágicos."
      },
      {
        "level": 11,
        "name": "Furia Bestial",
        "description": "Cuando comandas a la bestia para usar la acción de Atacar, puede realizar 2 ataques o usar la acción de Ataque Múltiple."
      },
      {
        "level": 15,
        "name": "Compartir Conjuros",
        "description": "El conjuro que lanzas en ti mismo también afecta a la bestia, si está a 30 pies de ti."
      }
    ]
  },
  {
    "id": "guardiao_do_draco",
    "source": "ftd",
    "classId": "patrulheiro",
    "name": "Guardián del Draco",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Don Dracónico",
        "description": "Aprendes el truco Taumaturgia (como conjuro de explorador) y hablas, lees y escribes Dracónico u otro idioma a tu elección."
      },
      {
        "level": 3,
        "name": "Compañero Draco",
        "description": "Acción: invocas al draco a 30 pies, que actúa después de ti y tiene la inmunidad que elijas (ácido, frío, fuego, relámpago o veneno); 1/ descanso largo o con slot."
      },
      {
        "level": 7,
        "name": "Vínculo de Presa y Escama",
        "description": "El draco gana alas y vuelo, se convierte en montura de tamaño Medio, su mordida causa +1d6 del tipo elegido y tú ganas resistencia a ese tipo."
      },
      {
        "level": 11,
        "name": "Soplo del Draco",
        "description": "Acción: cono de 30 pies con ácido, frío, fuego, relámpago o veneno — salvación de DES o 8d6 (mitad en caso de éxito); 1/ descanso largo o slot de 3º+."
      },
      {
        "level": 15,
        "name": "Vínculo Perfeccionado",
        "description": "Mordida con +2d6, draco de tamaño Grande que puede volar montado y reacción para conceder resistencia al daño a ti o al draco (usos = bonificador de competencia)."
      }
    ]
  },
  {
    "id": "andarilho_feerico",
    "source": "tce",
    "classId": "patrulheiro",
    "name": "Errante Feérico",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Golpes Temibles",
        "description": "El arma que acierta causa 1d4 de daño psíquico extra (1/ turno); aumenta a 1d6 en el 11º nivel."
      },
      {
        "level": 3,
        "name": "Magia del Errante Feérico",
        "description": "Aprendes conjuros de explorador a niveles fijos (3º, 5º, 9º, 13º y 17º) fuera del límite de conjuros conocidos."
      },
      {
        "level": 3,
        "name": "Glamour del Más Allá",
        "description": "Sumas mod. SAB (mín. +1) a las tiradas de CAR y obtienes competencia en Engaño, Actuación o Persuasión."
      },
      {
        "level": 7,
        "name": "Giro Engañoso",
        "description": "Ventaja en salvaciones contra quedar hechizado o asustado; reacción: una criatura a 120 pies hace salvación de SAB o queda hechizada o asustada durante 1 minuto."
      },
      {
        "level": 11,
        "name": "Refuerzos Feéricos",
        "description": "Lanzas Invocar Hada sin componente material y una vez sin slot (recupera al descanso largo); puedes prescindir de la concentración (dura 1 minuto)."
      },
      {
        "level": 15,
        "name": "Errante Nebuloso",
        "description": "Lanzas Paso Nebuloso sin gastar slot (usos = mod. SAB; recupera al descanso largo) y llevas contigo a 1 criatura voluntaria a 5 pies."
      }
    ]
  },
  {
    "id": "espreitador_sombrio",
    "source": "xge",
    "classId": "patrulheiro",
    "name": "Acechador Oscuro",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Magia del Acechador Oscuro",
        "description": "Aprendes conjuros de explorador a niveles fijos (3º, 5º, 9º, 13º y 17º) fuera del límite de conjuros conocidos."
      },
      {
        "level": 3,
        "name": "Emboscada Temible",
        "description": "Sumas mod. SAB a la iniciativa; en el 1er turno de cada combate ganas 10 pies de desplazamiento y un ataque con arma extra (+1d8 si aciertas)."
      },
      {
        "level": 3,
        "name": "Visión Umbral",
        "description": "Ganas visión en la oscuridad de 60 pies (30 pies más si ya la tenías); en la oscuridad eres invisible para quien depende de la visión en la oscuridad."
      },
      {
        "level": 7,
        "name": "Mente de Hierro",
        "description": "Obtienes competencia en salvaciones de SAB; si ya la tienes, eliges INT o CAR."
      },
      {
        "level": 11,
        "name": "Investida Implacable",
        "description": "Al fallar un ataque con arma (1/ turno), puedes realizar otro ataque con la misma acción."
      },
      {
        "level": 15,
        "name": "Esquiva Sombria",
        "description": "Reacción: cuando un ataque contra ti no tiene ventaja, le impones desventaja (antes de conocer el resultado del ataque)."
      }
    ]
  },
  {
    "id": "andarilho_do_horizonte",
    "source": "xge",
    "classId": "patrulheiro",
    "name": "Caminante del Horizonte",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Magia del Caminante del Horizonte",
        "description": "Aprendes conjuros de explorador a niveles fijos (3º, 5º, 9º, 13º y 17º) fuera del límite de conjuros conocidos."
      },
      {
        "level": 3,
        "name": "Detectar Portal",
        "description": "Acción: percibes la distancia y dirección del portal planar más cercano en 1 milla; recuperas al descanso corto o largo."
      },
      {
        "level": 3,
        "name": "Guerrero Planar",
        "description": "Acción adicional: el siguiente acerto con un arma contra una criatura a 30 pies causa daño de fuerza +1d8 extra (2d8 en el 11º nivel)."
      },
      {
        "level": 7,
        "name": "Paso Etéreo",
        "description": "Acción adicional: lanzas Mergullo en el Etéreo sin gastar slot, finalizándolo al fin del turno (1/ descanso corto o largo)."
      },
      {
        "level": 11,
        "name": "Golpe Lejano",
        "description": "Al usar la acción de Atacar, te teletransportas hasta 10 pies antes de cada ataque; si impactas a 2 criaturas diferentes, ganas 1 ataque extra."
      },
      {
        "level": 15,
        "name": "Defensa Espectral",
        "description": "Reacción: al sufrir daño de un ataque, ganas resistencia a todo ese daño hasta el fin del turno."
      }
    ]
  },
  {
    "id": "cacador",
    "source": "phb",
    "classId": "patrulheiro",
    "name": "Cazador",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Presa del Cazador",
        "description": "Eliges: Fera Colosal (1d8 extra contra un objetivo herido, 1/ turno), Gigante Devastador (reacción contra una criatura Grande) o Rompehordas (ataque extra contra un objetivo adyacente)."
      },
      {
        "level": 7,
        "name": "Tácticas Defensivas",
        "description": "Eliges: Huir de la Horda (desventaja en ataques de oportunidad), Defensa Múltiple (+4 en la CA contra el primer ataque que sufres) o Voluntad de Acero (ventaja contra asustado)."
      },
      {
        "level": 11,
        "name": "Ataque Múltiple",
        "description": "Eliges: Ataque Múltiple (dos ataques a distancia contra el mismo objetivo), Lluvia de Golpes (ataque contra todos en un radio de 15 pies) o Ataque Giratorio (todos a 5 pies)."
      },
      {
        "level": 15,
        "name": "Defensas Superiores del Cazador",
        "description": "Eliges: Evasión (sin daño en éxito de Destreza), Firme Contra la Marea (reacción: atacar al objetivo que te falla) o Desvío Increíble (reacción: reduces el daño a la mitad)."
      }
    ]
  },
  {
    "id": "matador_de_monstros",
    "source": "xge",
    "classId": "patrulheiro",
    "name": "Cazador de Monstruos",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Magia del Cazador de Monstruos",
        "description": "Aprendes conjuros de explorador a niveles fijos (3º, 5º, 9º, 13º y 17º) fuera del límite de conjuros conocidos."
      },
      {
        "level": 3,
        "name": "Sentir el Peligro",
        "description": "Acción: una criatura a 60 pies — sabes si tiene inmunidades, resistencias o vulnerabilidades al daño (usos = mod. SAB; descanso largo)."
      },
      {
        "level": 3,
        "name": "Presa del Cazador",
        "description": "Acción adicional: marcas una criatura a 60 pies; el 1er ataque con arma que la acierte por turno causa 1d6 extra (hasta descansar o cambiar de objetivo)."
      },
      {
        "level": 7,
        "name": "Defensa Sobrenatural",
        "description": "Sumas 1d6 a las salvaciones forzadas por el objetivo de tu Presa del Cazador y a las tiradas para escapar de su agarre."
      },
      {
        "level": 11,
        "name": "Némesis del Hechicero",
        "description": "Reacción: una criatura lanza un conjuro o se teletransporta a 60 pies — hace salvación de SAB o el conjuro o teletransporte falla (1/ descanso corto o largo)."
      },
      {
        "level": 15,
        "name": "Contraataque del Cazador",
        "description": "Reacción: cuando el objetivo de tu Presa del Cazador te fuerza a una salvación, lo atacas antes; si aciertas, la salvación se supera automáticamente."
      }
    ]
  },
  {
    "id": "guardiao_do_enxame",
    "source": "tce",
    "classId": "patrulheiro",
    "name": "Guardián del Enjambre",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Enjambre Reunido",
        "description": "Tras acertar (1/ turno), el enjambre causa 1d6 de perforación, empuja al objetivo 15 pies (salvación de FUE) o te mueve a ti 5 pies."
      },
      {
        "level": 3,
        "name": "Magia del Guardián del Enjambre",
        "description": "Aprendes el truco Mano de Mago (con apariencia de enjambre) y conjuros de explorador a niveles fijos fuera del límite de conjuros conocidos."
      },
      {
        "level": 7,
        "name": "Marea Retorcida",
        "description": "Acción adicional: condensas el enjambre en ti y ganas vuelo de 10 pies con planeo durante 1 minuto (usos = bonificador de competencia; descanso largo)."
      },
      {
        "level": 11,
        "name": "Enjambre Poderoso",
        "description": "Enjambre Reunido causa 1d8, puede derribar a quien falle la salvación y concede cobertura total hasta tu próximo turno."
      },
      {
        "level": 15,
        "name": "Dispersión del Enjambre",
        "description": "Reacción: al sufrir daño, ganas resistencia y te teletransportas con el enjambre hasta 30 pies (usos = bonificador de competencia; descanso largo)."
      }
    ]
  },
  {
    "id": "arquetipo_do_ladino_arcano",
    "source": "phb",
    "classId": "ladino",
    "name": "Arquetipo del Ladino Arcano",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Conjuración",
        "description": "Aprendes trucos (Mano de Mago + 2) y conjuros de mago según la tabla (INT como atributo; 2 de los 3 iniciales de Encantamiento o Ilusión)."
      },
      {
        "level": 3,
        "name": "Mano de Mago Ardidesca",
        "description": "La mano espectral queda invisible, puede colocar u obtener objetos de criaturas, usar herramientas de ladrón a distancia y dirigirla con Acción Ardilosa."
      },
      {
        "level": 9,
        "name": "Emboscada Arcana",
        "description": "Si estás oculto al lanzar un conjuro contra una criatura, esta tiene desventaja en la salvación contra ese conjuro."
      },
      {
        "level": 13,
        "name": "Truco Versátil",
        "description": "Acción adicional: designas a una criatura a 5 pies de la mano espectral — ventaja en los ataques contra ella hasta el fin del turno."
      },
      {
        "level": 17,
        "name": "Ladrón de Conjuros",
        "description": "Reacción: un conjuro que te tiene como objetivo — el conjurador hace una salvación con su modificador; si falla, niegas el efecto y lo aprendes durante 8 horas (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "assassino",
    "source": "phb",
    "classId": "ladino",
    "name": "Arquetipo del Asesino",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Competencias Adicionales",
        "description": "Ganas competencia con el kit de disfraces y el kit de venenos."
      },
      {
        "level": 3,
        "name": "Asesinar",
        "description": "Ventaja en ataques contra una criatura que aún no ha actuado en el combate; contra una criatura sorprendida, el ataque acierta en crítico."
      },
      {
        "level": 9,
        "name": "Pericia de Infiltración",
        "description": "Creas identidades falsas sin fallo: 7 días y 25 po para establecer historia, oficio y afiliaciones."
      },
      {
        "level": 13,
        "name": "Impostor",
        "description": "Tras 3 horas estudiando habla, escritura y comportamiento, imitas a cualquier persona el tiempo que quieras."
      },
      {
        "level": 17,
        "name": "Golpe de Muerte",
        "description": "Al acertar a una criatura sorprendida, ella hace salvación de CON (CD 8 + DES + comp.) o sufre el doble del daño (en éxito, daño normal)."
      }
    ]
  },
  {
    "id": "arquetipo_do_inquisitivo",
    "source": "xge",
    "classId": "ladino",
    "name": "Arquetipo del Inquisitivo",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Oído para la Mentira",
        "description": "En las tiradas de SAB (Perspicacia) para detectar mentiras, las tiradas de 7 o menos en el d20 cuentan como 8."
      },
      {
        "level": 3,
        "name": "Mirada al Detalle",
        "description": "Acción adicional: haces Percepción para hallar una criatura u objeto oculto, o Investigación para descubrir o descifrar pistas."
      },
      {
        "level": 3,
        "name": "Lucha Perspicaz",
        "description": "Acción adicional: SAB (Perspicacia) contra Engaño; si superas la tirada, puedes usar Ataque Furtivo contra ese objetivo aunque no tengas ventaja, durante 1 minuto."
      },
      {
        "level": 9,
        "name": "Mirada Firme",
        "description": "Ventaja en Percepción o Investigación si no te mueves más de la mitad de tu desplazamiento en el turno."
      },
      {
        "level": 13,
        "name": "Mirada Infalible",
        "description": "Acción: percibes ilusiones, cambiaformas y conjuros destinados a engañar los sentidos a 30 pies (usos = mod. SAB; descanso largo)."
      },
      {
        "level": 17,
        "name": "Mirada a la Flaqueza",
        "description": "Mientras tu Lucha Perspicaz se aplique al objetivo, tu Ataque Furtivo contra él aumenta en 3d6."
      }
    ]
  },
  {
    "id": "arquetipo_do_mestre_das_intrigas",
    "source": "xge",
    "classId": "ladino",
    "name": "Arquetipo del Maestro de las Intrigas",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Maestro de las Intrigas",
        "description": "Competencia con kit de disfraces, kit de falsificación y un juego de mesa a tu elección, además de 2 idiomas; imitas el habla y el acento de quien oyes durante 1 minuto."
      },
      {
        "level": 3,
        "name": "Maestro de la Táctica",
        "description": "Usas la acción Ayudar como acción adicional; el objetivo de la ayuda puede estar a 30 pies (en vez de 5), si puedes verlo u oírlo."
      },
      {
        "level": 9,
        "name": "Manipulador Perspicaz",
        "description": "Tras 1 minuto observando o interactuando con una criatura fuera de combate, comparas 2 de estas características contigo: INT, SAB, CAR y niveles de clase."
      },
      {
        "level": 13,
        "name": "Desvío",
        "description": "Reacción: cuando un ataque te tiene como objetivo y una criatura a 5 pies te da cobertura, rediriges el ataque hacia ella."
      },
      {
        "level": 17,
        "name": "Alma del Engaño",
        "description": "Tus pensamientos no pueden leerse sin tu consentimiento; puedes presentar pensamientos falsos y los conjuros que detectan mentiras no te afectan si lo eliges."
      }
    ]
  },
  {
    "id": "arquetipo_do_fantasma",
    "source": "tce",
    "classId": "ladino",
    "name": "Arquetipo del Fantasma",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Susurros de los Muertos",
        "description": "Al terminar un descanso corto o largo, ganas competencia con una pericia o herramienta a tu elección; puedes cambiarla al usar esta característica de nuevo."
      },
      {
        "level": 3,
        "name": "Gritos del Sepulcro",
        "description": "Tras causar un Ataque Furtivo, una criatura a 30 pies sufre daño necrótico igual a la mitad de los dados (redondeado hacia arriba); usos = bonificador de competencia (descanso largo)."
      },
      {
        "level": 9,
        "name": "Amuletos de los Muertos",
        "description": "Reacción: una criatura que muere a 30 pies deja un amuleto de alma (máx. = bonificador de competencia); llevarlo da ventaja en salvaciones de muerte y de CON."
      },
      {
        "level": 13,
        "name": "Caminar como Fantasma",
        "description": "Acción adicional: forma espectral durante 10 minutos — vuelo de 10 pies, flotación, desventaja en los ataques contra ti y atraviesas criaturas; se recarga con descanso largo o un amuleto."
      },
      {
        "level": 17,
        "name": "Amigo de la Muerte",
        "description": "Los Gritos del Sepulcro causan daño necrótico a dos criaturas y, al terminar el descanso largo, un amuleto de alma aparece en tu mano si no tienes ninguno."
      }
    ]
  },
  {
    "id": "arquetipo_do_batedor",
    "source": "xge",
    "classId": "ladino",
    "name": "Arquetipo del Explorador",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Escaramuzador",
        "description": "Reacción: cuando un enemigo termina su turno a 5 pies de ti, te mueves hasta la mitad de tu desplazamiento sin provocar ataques de oportunidad."
      },
      {
        "level": 3,
        "name": "Superviviente",
        "description": "Ganas competencia en Naturaleza y Supervivencia (si no la tenías) y sumas el doble de tu bonificador de competencia en esas pruebas."
      },
      {
        "level": 9,
        "name": "Movilidad Superior",
        "description": "Tu desplazamiento a pie aumenta en 10 pies; lo mismo aplica a tu desplazamiento de trepar o nadar, si lo tienes."
      },
      {
        "level": 13,
        "name": "Maestro de la Emboscada",
        "description": "Ventaja en la iniciativa; la primera criatura que aciertes en el 1er turno tiene ventaja en sus ataques contra ti hasta tu próximo turno."
      },
      {
        "level": 17,
        "name": "Golpe Súbito",
        "description": "Tras usar la acción de Atacar, haces 1 ataque extra como acción adicional que puede usar Ataque Furtivo, aunque ya lo hayas usado (nunca dos veces contra el mismo objetivo)."
      }
    ]
  },
  {
    "id": "arquetipo_da_lamina_da_alma",
    "source": "tce",
    "classId": "ladino",
    "name": "Arquetipo del Puñal de Alma",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Poder Psíquico",
        "description": "Dados de energía psíquica (d6; 2 × bonificador de competencia; d8 en el 5º, d10 en el 11º y d12 en el 17º) alimentan tus poderes y se recargan con el descanso largo."
      },
      {
        "level": 3,
        "name": "Hojas Psíquicas",
        "description": "Creas una hoja psíquica en tu mano libre (1d6 psíquico, alcance 60 pies) y puedes atacar con una segunda (1d4) como acción adicional en el mismo turno."
      },
      {
        "level": 9,
        "name": "Hojas del Alma",
        "description": "Con las hojas: sumas un dado psíquico a un ataque fallido (Golpes Guiados) o te teletransportas hasta 10 × el valor tirado como acción adicional (Teletransporte Psíquico)."
      },
      {
        "level": 13,
        "name": "Velo Psíquico",
        "description": "Acción: quedas invisible durante 1 hora, hasta causar daño o forzar una salvación (1/ descanso largo o gastando un dado psíquico)."
      },
      {
        "level": 17,
        "name": "Hendir la Mente",
        "description": "Al causar un Ataque Furtivo con la hoja, el objetivo hace salvación de SAB o queda aturdido durante 1 minuto (1/ descanso largo o gastando 3 dados psíquicos)."
      }
    ]
  },
  {
    "id": "arquetipo_do_espadachim",
    "source": "xge",
    "classId": "ladino",
    "name": "Arquetipo del Salteador",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Pasos Elegantes",
        "description": "Después de acertar un ataque cuerpo a cuerpo en tu turno, la criatura no puede hacer ataques de oportunidad contra ti hasta el fin del turno."
      },
      {
        "level": 3,
        "name": "Audacia Atrevida",
        "description": "Sumas mod. CAR a la iniciativa; puedes usar Ataque Furtivo contra una criatura a 5 pies sin ventaja si ninguna otra criatura está a 5 pies de ti."
      },
      {
        "level": 9,
        "name": "Jactancia",
        "description": "Acción: CAR (Persuasión) contra SAB (Perspicacia); una criatura hostil tiene desventaja en los ataques contra otros y no hace ataques de oportunidad contra ellos (1 minuto)."
      },
      {
        "level": 13,
        "name": "Maniobra Elegante",
        "description": "Acción adicional: ventaja en la próxima prueba de DES (Acrobacia) o FUE (Atletismo) que hagas en este turno."
      },
      {
        "level": 17,
        "name": "Maestro Duelista",
        "description": "Cuando fallas un ataque, puedes repetirlo con ventaja (1/ descanso corto o largo)."
      }
    ]
  },
  {
    "id": "ladrao",
    "source": "phb",
    "classId": "ladino",
    "name": "Arquetipo del Ladrón",
    "level": 3,
    "features": [
      {
        "level": 3,
        "name": "Manos Ágiles",
        "description": "Usas la acción adicional de Acción Ardilosa para hacer una prueba de Destreza (Juego de Manos), usar herramientas de ladrón o interactuar con un objeto."
      },
      {
        "level": 3,
        "name": "Trabajo de Segundo Piso",
        "description": "Escalar no cuesta desplazamiento extra y los saltos corridos alcanzan la mitad de distancia más."
      },
      {
        "level": 9,
        "name": "Sigilo Supremo",
        "description": "Ventaja en pruebas de Destreza (Sigilo) cuando no te mueves más de la mitad de tu desplazamiento en el turno."
      },
      {
        "level": 13,
        "name": "Uso de Mágicos",
        "description": "Ignoras los requisitos de clase, raza y nivel para usar objetos mágicos; tiras el d20 con ventaja cuando el objeto lo pide."
      },
      {
        "level": 17,
        "name": "Reflejos de Ladrón",
        "description": "En el primer turno de combate, puedes actuar dos veces (inicial y extra)."
      }
    ]
  },
  {
    "id": "origem_aberrante",
    "source": "tce",
    "classId": "feiticeiro",
    "name": "Mente Aberrante",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros Psíquicos",
        "description": "Aprendes conjuros de hechicero a niveles fijos fuera del límite; al ganar nivel, puedes cambiar uno por un conjuro de adivinación o encantamiento de las listas de hechicero, brujo o mago."
      },
      {
        "level": 1,
        "name": "Habla Telepática",
        "description": "Acción adicional: te comunicas telepáticamente con una criatura a 30 pies durante minutos igual a mod. CAR (mín. 1 milla); termina si mueres, quedas incapacitado o hablas con otro."
      },
      {
        "level": 6,
        "name": "Hechicería Psíquica",
        "description": "Lanzas los Conjuros Psíquicos gastando puntos de hechicería iguales al nivel del conjuro, sin componentes verbal, somático o material (salvo que se consuman)."
      },
      {
        "level": 6,
        "name": "Defensas Psíquicas",
        "description": "Resistencia al daño psíquico y ventaja en salvaciones contra quedar hechizado o asustado."
      },
      {
        "level": 14,
        "name": "Revelación en la Carne",
        "description": "Acción adicional: gastas 1+ puntos de hechicería durante 10 minutos; cada punto concede ver invisibles, vuelo, natación con respiración acuática o pasar por espacios de 1 pulgada."
      },
      {
        "level": 18,
        "name": "Implosión Distorsionada",
        "description": "Acción: te teletransportas 120 pies y las criaturas a 30 pies del punto de partida hacen salvación de FUE o reciben 3d10 de fuerza y son atraídas (1/ descanso largo o 5 puntos)."
      }
    ]
  },
  {
    "id": "origem_da_alma_relogio",
    "source": "tce",
    "classId": "feiticeiro",
    "name": "Alma Relojera",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Conjuros Relojeros",
        "description": "Aprendes conjuros de hechicero a niveles fijos fuera del límite; puedes cambiarlos por conjuros de abjuración o transmutación de las listas de hechicero, brujo o mago."
      },
      {
        "level": 1,
        "name": "Restaurar el Equilibrio",
        "description": "Reacción: anulas la ventaja o desventaja en una tirada de d20 de una criatura a 60 pies (usos = bonificador de competencia; se recuperan con el descanso largo)."
      },
      {
        "level": 6,
        "name": "Baluarte de la Ley",
        "description": "Acción: gastas de 1 a 5 puntos de hechicería para darte a ti o a una criatura a 30 pies un escudo de dados d8 que reduce el daño recibido (hasta el descanso largo)."
      },
      {
        "level": 14,
        "name": "Trance del Orden",
        "description": "Acción adicional durante 1 minuto: los ataques contra ti no se benefician de la ventaja y las tiradas de 9 o menos cuentan como 10 (1/ descanso largo o 5 puntos)."
      },
      {
        "level": 18,
        "name": "Cataclismo Relojero",
        "description": "Acción: espíritus de orden en un cubo de 30 pies curan hasta 100 PV, reparan objetos y terminan conjuros de 6º nivel o inferiores (1/ descanso largo o 7 puntos)."
      }
    ]
  },
  {
    "id": "origem_da_alma_divina",
    "source": "xge",
    "classId": "feiticeiro",
    "name": "Alma Divina",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Magia Divina",
        "description": "Aprendes conjuros de la lista de clérigo o de hechicero; eliges una afinidad (bien, mal, orden, caos o neutralidad) que concede un conjuro adicional."
      },
      {
        "level": 1,
        "name": "Favor de los Dioses",
        "description": "Después de fallar una salvación o un ataque, sumas 2d4 al resultado (1/ descanso corto o largo)."
      },
      {
        "level": 6,
        "name": "Curación Potenciada",
        "description": "Cuando tiras dados de curación para ti o para un aliado a 5 pies, gastas 1 punto de hechicería para volver a tirar cualquiera de ellos una vez (1/ turno)."
      },
      {
        "level": 14,
        "name": "Alas Sobrenaturales",
        "description": "Acción adicional: manifiestas alas espirituales con vuelo de 30 pies, hasta que quedes incapacitado, mueras o las dispenses; la apariencia sigue tu afinidad."
      },
      {
        "level": 18,
        "name": "Recuperación Sobrenatural",
        "description": "Acción adicional: cuando tienes menos de la mitad de los PV, recuperas PV iguales a la mitad de tu máximo (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "draconica",
    "source": "phb",
    "classId": "feiticeiro",
    "name": "Origen Dracónico",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Ancestro del Dragón",
        "description": "Eliges el tipo de dragón ancestral (define el tipo de daño de tus recursos futuros); hablas, lees y escribes Dracónico; bonificador de competencia doblado en pruebas de CAR para interactuar con dragones."
      },
      {
        "level": 1,
        "name": "Resistencia Dracónica",
        "description": "Tu máximo de PV aumenta en 1 por cada nivel de hechicero; tu CA no es menor que 13 + DES (sin armadura)."
      },
      {
        "level": 6,
        "name": "Afinidad Elemental",
        "description": "Sumas mod. CAR a una tirada de daño de un conjuro del tipo de tu linaje; puedes gastar 1 punto de hechicería para ganar resistencia a ese tipo de daño durante 1 hora."
      },
      {
        "level": 14,
        "name": "Alas de Dragón",
        "description": "Acción adicional: creas alas de dragón — desplazamiento de vuelo igual al de caminata."
      },
      {
        "level": 18,
        "name": "Presencia Dracónica",
        "description": "Acción: gastas 5 puntos de hechicería para exudar un aura de temor o maravilla de 60 pies durante 1 minuto (concentración) — las criaturas hostiles hacen salvación de SAB o quedan asustadas o maravilladas."
      }
    ]
  },
  {
    "id": "origem_lunar",
    "source": "dsotdq",
    "classId": "feiticeiro",
    "name": "Brujería Lunar",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Encarnación Lunar",
        "description": "Aprendes conjuros por fase (Luna Llena, Nueva o Creciente) fuera del límite; al terminar el descanso largo eliges la fase y lanzas 1 conjuro de 1º de ella sin slot."
      },
      {
        "level": 1,
        "name": "Fuego Lunar",
        "description": "Aprendes Llama Sagrada fuera del límite de trucos y, al lanzarla, puedes elegir 2 criaturas en el alcance que estén a 5 pies entre sí."
      },
      {
        "level": 6,
        "name": "Dones Lunares",
        "description": "La Metamagia en conjuros de la escuela de tu fase actual cuesta 1 punto de hechicería menos (usos = bonificador de competencia; descanso largo)."
      },
      {
        "level": 6,
        "name": "Menguante y Creciente",
        "description": "Acción adicional: gastas 1 punto para cambiar de fase y puedes lanzar 1 conjuro de 1º de cada fase sin slot (1/ descanso largo por fase)."
      },
      {
        "level": 14,
        "name": "Empoderamiento Lunar",
        "description": "Fase Llena: ilumina y da ventaja en Percepción e Investigación; Nueva: ventaja en Sigilo y desventaja en los ataques en la oscuridad; Creciente: resistencia al daño necrótico y radiante."
      },
      {
        "level": 18,
        "name": "Fenómeno Lunar",
        "description": "Acción adicional: Llena: ciega y cura 3d8; Nueva: 3d10 necróticos, desplazamiento 0 e invisibilidad; Creciente: te teletransporta 60 pies (1/ descanso largo o 5 puntos)."
      }
    ]
  },
  {
    "id": "origem_da_piromancia",
    "source": "psk",
    "classId": "feiticeiro",
    "name": "Piromancia",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Corazón de Fuego",
        "description": "Al lanzar un conjuro de 1º o superior que cause daño de fuego, las criaturas que ves a 10 pies reciben daño de fuego igual a la mitad de tu nivel (mín. 1)."
      },
      {
        "level": 6,
        "name": "Fuego en las Venas",
        "description": "Resistencia al daño de fuego y los conjuros que lanzas ignoran la resistencia al fuego."
      },
      {
        "level": 14,
        "name": "Furia del Piromante",
        "description": "Reacción: al ser acertado en cuerpo a cuerpo, causas daño de fuego igual a tu nivel de hechicero, ignorando la resistencia al fuego."
      },
      {
        "level": 18,
        "name": "Alma Ígnea",
        "description": "Inmunidad al daño de fuego; los conjuros y efectos que creas ignoran la resistencia y tratan la inmunidad al fuego como resistencia."
      }
    ]
  },
  {
    "id": "origem_das_sombras",
    "source": "xge",
    "classId": "feiticeiro",
    "name": "Magia de las Sombras",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Ojos de la Oscuridad",
        "description": "Visión en la oscuridad de 120 pies; en el 3º nivel aprendes Oscuridad fuera del límite y puedes lanzarla con 2 puntos de hechicería, viendo a través de la oscuridad creada."
      },
      {
        "level": 1,
        "name": "Fuerza de la Tumba",
        "description": "Al caer a 0 PV, haces salvación de CAR (CD 5 + el daño recibido) o vuelves a 1 PV; no funciona contra daño radiante ni en golpes críticos (1/ descanso largo)."
      },
      {
        "level": 6,
        "name": "Sabueso de Mal Agüero",
        "description": "Acción adicional: gastas 3 puntos e invocas un sabueso de las sombras (lobo siniestro Mediano) contra una criatura a 120 pies; tiene desventaja en las salvaciones contra tus conjuros."
      },
      {
        "level": 14,
        "name": "Paso en las Sombras",
        "description": "En penumbra u oscuridad, acción adicional: te teletransportas hasta 120 pies a un espacio vacío en penumbra u oscuridad que veas."
      },
      {
        "level": 18,
        "name": "Forma Umbral",
        "description": "Acción adicional: gastas 6 puntos y durante 1 minuto tienes resistencia a todo daño salvo fuerza y radiante, y atraviesas criaturas y objetos."
      }
    ]
  },
  {
    "id": "origem_da_tempestade",
    "source": "scag",
    "classId": "feiticeiro",
    "name": "Brujería de la Tormenta",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Portavoz del Viento",
        "description": "Hablas, lees y escribes Primordial, comprendiendo y siendo comprendido por los hablantes de los idiomas elementales."
      },
      {
        "level": 1,
        "name": "Magia Tempestuosa",
        "description": "Acción adicional: inmediatamente antes o después de lanzar un conjuro de 1º o superior, vuelas 10 pies sin provocar ataques de oportunidad."
      },
      {
        "level": 6,
        "name": "Corazón de la Tempestad",
        "description": "Resistencia al daño de relámpago y trueno; al lanzar un conjuro que cause ese daño, las criaturas a 10 pies reciben daño igual a la mitad de tu nivel de hechicero."
      },
      {
        "level": 6,
        "name": "Guía de la Tempestad",
        "description": "Acción: haces que la lluvia se detenga en una esfera de 20 pies; acción adicional por ronda: eliges la dirección del viento en una esfera de 100 pies."
      },
      {
        "level": 14,
        "name": "Furia de la Tempestad",
        "description": "Reacción: al ser acertado en cuerpo a cuerpo, causas daño de relámpago igual a tu nivel y la criatura hace salvación de FUE o es empujada 20 pies."
      },
      {
        "level": 18,
        "name": "Alma del Viento",
        "description": "Inmune al relámpago y al trueno y vuelas 60 pies; acción: durante 1 hora reduces el vuelo a 30 pies y concedes vuelo de 30 pies a 3 + mod. CAR criaturas a 30 pies."
      }
    ]
  },
  {
    "id": "selvagem",
    "source": "phb",
    "classId": "feiticeiro",
    "name": "Origen Salvaje",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Surto de Magia Salvaje",
        "description": "Tras lanzar un conjuro de hechicero de 1º nivel o superior, el DJ puede pedirte que tires 1d20 — en un 1, tiras en la tabla de surtos de magia salvaje."
      },
      {
        "level": 1,
        "name": "Mareas del Caos",
        "description": "Ventaja en un ataque, prueba o salvación; recuperas el uso al lanzar un conjuro de hechicero y tirar un 20 en la tabla de surtos (o en un descanso largo)."
      },
      {
        "level": 6,
        "name": "Doblar la Suerte",
        "description": "Reacción: gastas 2 puntos de hechicería y tiras 1d4 para sumar o restar de un ataque, prueba o salvación de una criatura que ves."
      },
      {
        "level": 14,
        "name": "Caos Controlado",
        "description": "Al tirar en la tabla de surtos, tiras dos veces y uses cualquiera de los resultados."
      },
      {
        "level": 18,
        "name": "Bombardeo Arcano",
        "description": "Cuando un conjuro saca el valor máximo posible en algún dado de daño, eliges ese dado, lo vuelves a tirar y sumas el resultado."
      }
    ]
  },
  {
    "id": "arquifee",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pacto: El Archihada",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del Archihada."
      },
      {
        "level": 1,
        "name": "Presencia Feérica",
        "description": "Acción: cada criatura en un cubo de 10 pies desde ti hace salvación de SAB o queda asustada o hechizada hasta el final de tu próximo turno."
      },
      {
        "level": 6,
        "name": "Escape Nebuloso",
        "description": "Reacción: al sufrir daño, quedas invisible y te teletransportas hasta 60 pies a un espacio vacío que veas (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Defensas Seductoras",
        "description": "Inmune a ser hechizado; cuando otra criatura intenta hechizarte, ella hace salvación de SAB o falla y el efecto no te afecta."
      },
      {
        "level": 14,
        "name": "Delirio Sombrío",
        "description": "Acción: sumerges a una criatura a 60 pies en una ilusión durante 1 minuto (salvación de SAB o ilusionado; puede repetir con su acción)."
      }
    ]
  },
  {
    "id": "pacto_o_celestial",
    "source": "xge",
    "classId": "bruxo",
    "name": "Pacto: El Celestial",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del patrono celestial."
      },
      {
        "level": 1,
        "name": "Trucos Adicionales",
        "description": "Aprendes los trucos Luz y Llama Sagrada, que no cuentan para tu límite de trucos conocidos."
      },
      {
        "level": 1,
        "name": "Luz Curadora",
        "description": "Acción adicional: gastas dados d6 de una reserva (igual a 1 + tu nivel de brujo) para curar a una criatura a 60 pies (máx. = mod. CAR dados por uso); se recupera con el descanso largo."
      },
      {
        "level": 6,
        "name": "Alma Radiante",
        "description": "Resistencia al daño radiante y sumas mod. CAR a una tirada de daño radiante o de fuego de un conjuro que lances."
      },
      {
        "level": 10,
        "name": "Resistencia Celestial",
        "description": "Al terminar un descanso, ganas PV temporarios iguales a tu nivel de brujo + mod. CAR y hasta 5 criaturas que veas ganan la mitad."
      },
      {
        "level": 14,
        "name": "Venganza Incandescente",
        "description": "Cuando hagas una salvación de muerte, puedes levantarte con la mitad de los PV, causar 2d8 + mod. CAR de daño radiante y cegar a criaturas a 30 pies (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "pacto_o_abissal",
    "source": "tce",
    "classId": "bruxo",
    "name": "Pacto: El Insondable",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del patrono insondable."
      },
      {
        "level": 1,
        "name": "Tentáculo del Abismo",
        "description": "Acción adicional: creas un tentáculo espectral a 60 pies durante 1 minuto que ataca (1d8 de frío y −10 pies de desplazamiento; 2d8 en el 10º); usos = bonificador de competencia."
      },
      {
        "level": 1,
        "name": "Don del Mar",
        "description": "Ganas un desplazamiento de natación de 40 pies y puedes respirar bajo el agua."
      },
      {
        "level": 6,
        "name": "Alma Oceánica",
        "description": "Resistencia al daño frío; mientras estás totalmente sumergido, comprendes y eres comprendido por cualquier criatura sumergida."
      },
      {
        "level": 6,
        "name": "Espiral Guardiana",
        "description": "Reacción: cuando tú o una criatura que ves a 10 pies del tentáculo sufre daño, reduces ese daño en 1d8 (2d8 en el 10º nivel)."
      },
      {
        "level": 10,
        "name": "Tentáculos Agarradores",
        "description": "Aprendes Tentáculos Negros fuera del límite, la lanzas 1 vez sin slot (descanso largo) y ganas PV temporarios iguales a tu nivel de brujo; el daño no rompe la concentración."
      },
      {
        "level": 14,
        "name": "Mergullo Abisal",
        "description": "Acción: teletransportas a ti y hasta 5 criaturas voluntarias a 30 pies, hasta 1 milla de distancia, dentro o a 30 pies de un cuerpo de agua que hayas visto (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "demoniaco",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pacto: El Diablo",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del diablo."
      },
      {
        "level": 1,
        "name": "Bendición del Umbral",
        "description": "Al reducir a una criatura hostil a 0 PV, ganas PV temporales iguales a mod. CAR + nivel del brujo (mínimo 1)."
      },
      {
        "level": 6,
        "name": "Suerte del Umbral",
        "description": "Acción adicional: sumas 1d10 a una prueba de habilidad o salvación (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Resistencia Demoníaca",
        "description": "Tras un descanso corto o largo, eliges un tipo de daño; ganas resistencia a él hasta que elijas otro."
      },
      {
        "level": 14,
        "name": "Arrojado al Inframundo",
        "description": "Al acertar, envías al objetivo a los Planos Inferiores durante 1 minuto (sin daño; vuelve con miedo de ti; 1/ descanso largo)."
      }
    ]
  },
  {
    "id": "grande_antigo",
    "source": "phb",
    "classId": "bruxo",
    "name": "Pacto: El Gran Antiguo",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del Gran Antiguo."
      },
      {
        "level": 1,
        "name": "Mente Despierta",
        "description": "Hablas telepáticamente con cualquier criatura que veas a 30 pies, sin que ella necesite entender tu idioma."
      },
      {
        "level": 6,
        "name": "Protección Entrópica",
        "description": "Reacción: cuando una criatura te ataca, ella falla y tienes ventaja en tu próximo ataque contra ella hasta el final del turno (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Escudo Mental",
        "description": "Tus pensamientos no pueden ser leídos; tienes resistencia al daño psíquico y la criatura que te causa daño psíquico recibe el mismo daño."
      },
      {
        "level": 14,
        "name": "Crear Siervo",
        "description": "Acción: tocas a un humanoide incapazitado — queda hechizado por ti y obedece órdenes básicas (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "pacto_a_lamina_amaldicoada",
    "source": "xge",
    "classId": "bruxo",
    "name": "Pacto: La Hoja Maldita",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista de la hoja maldita."
      },
      {
        "level": 1,
        "name": "Maldición de la Hoja",
        "description": "Acción adicional: marcas a una criatura a 30 pies durante 1 minuto — +bonificador de competencia al daño, crítico con 19-20 y recuperas PV = nivel + CAR al matarla (1/ descanso corto)."
      },
      {
        "level": 1,
        "name": "Guerrero de la Hoja",
        "description": "Competencia con armadura media, escudos y armas marciales; al terminar el descanso largo tocas un arma sin la propiedad de dos manos y usas CAR para el ataque y el daño con ella."
      },
      {
        "level": 6,
        "name": "Espectro Maldito",
        "description": "Al matar a un humanoide, su espíritu se alza como espectro a tu servicio hasta el fin de tu próximo descanso largo (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Armadura de las Maldiciones",
        "description": "Reacción: cuando la criatura marcada te ataca, tiras 1d6 — con 4 o más, el ataque falla sin importar el resultado."
      },
      {
        "level": 14,
        "name": "Maestro de las Maldiciones",
        "description": "Cuando la criatura marcada muere, transfieres la maldición a otra criatura a 30 pies que veas (sin recuperar PV)."
      }
    ]
  },
  {
    "id": "pacto_o_genio",
    "source": "tce",
    "classId": "bruxo",
    "name": "Pacto: El Genio",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del genio, además de conjuros propios de tu tipo de patrono (dao, djinni, efreeti o marid)."
      },
      {
        "level": 1,
        "name": "Recipiente del Genio",
        "description": "Recibes un recipiente mágico (foco de conjuración); acción: entras en él hasta 2 × tu bonificador de competencia en horas y causas daño extra = competencia por turno (tipo de tu patrono)."
      },
      {
        "level": 6,
        "name": "Don Elemental",
        "description": "Resistencia al tipo de daño de tu patrono (contundente, trueno, fuego o frío) y acción adicional: vuelo de 30 pies con levitación durante 10 minutos (usos = bonificador de competencia)."
      },
      {
        "level": 10,
        "name": "Recipiente Santuario",
        "description": "Llevas a hasta 5 criaturas voluntarias a 30 pies dentro del recipiente; quien permanece 10 minutos allí descansa y suma su bonificador de competencia a los PV curados."
      },
      {
        "level": 14,
        "name": "Deseo Limitado",
        "description": "Acción: pides al recipiente el efecto de un conjuro de 6º o inferior con tiempo de lanzamiento de 1 acción, sin componentes costosos (1/ 1d4 descansos largos)."
      }
    ]
  },
  {
    "id": "pacto_o_nao_morto",
    "source": "vgr",
    "classId": "bruxo",
    "name": "Pacto: El No-Muerto",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del patrono no-muerto."
      },
      {
        "level": 1,
        "name": "Forma del Miedo",
        "description": "Acción adicional (1 minuto): 1d10 + nivel en PV temporarios, inmune a asustado y, al acertar (1/ turno), la criatura hace salvación de SAB o queda asustada; usos = bonificador de competencia."
      },
      {
        "level": 6,
        "name": "Toque Sepulcral",
        "description": "No necesitas comer, beber ni respirar; al acertar, puedes cambiar el daño a necrótico y, con la Forma del Miedo, tiras 1 dado de daño adicional."
      },
      {
        "level": 10,
        "name": "Caparazón Necrótico",
        "description": "Resistencia al daño necrótico (inmunidad con la Forma del Miedo); al caer a 0 PV, reacción: vuelves a 1 PV y causas 2d10 + nivel en 30 pies, ganando 1 nivel de agotamiento (1/ 1d4 descansos largos)."
      },
      {
        "level": 14,
        "name": "Proyección Espiritual",
        "description": "Acción: proyectas tu espíritu durante 1 hora (el cuerpo queda inconsciente) con resistencia al daño físico, vuelo y conjuros de Conjuración o Nigromancia sin componentes; recarga con descanso largo."
      }
    ]
  },
  {
    "id": "pacto_o_imperecivel",
    "source": "scag",
    "classId": "bruxo",
    "name": "Pacto: El Imperecedero",
    "level": 1,
    "features": [
      {
        "level": 1,
        "name": "Lista de Conjuros Expandida",
        "description": "Ganas conjuros adicionales de brujo de la lista del patrono imperecedero."
      },
      {
        "level": 1,
        "name": "Entre los Muertos",
        "description": "Aprendes Conservar al Herido como truco y tienes ventaja en salvaciones contra enfermedades; un no-muerto que te ataca directamente hace salvación de SAB o debe elegir otro objetivo (24 horas)."
      },
      {
        "level": 6,
        "name": "Desafiar a la Muerte",
        "description": "Recuperas 1d8 + mod. CON PV al superar una salvación de muerte o al estabilizar a una criatura con Conservar al Herido (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Naturaleza Imperecedera",
        "description": "No necesitas comida, agua ni sueño, envejeces 1 año cada 10 y eres inmune al envejecimiento mágico."
      },
      {
        "level": 14,
        "name": "Vida Indestructible",
        "description": "Acción adicional: recuperas 1d8 + nivel de brujo PV y recolocas un miembro cercenado (1/ descanso corto o largo)."
      }
    ]
  },
  {
    "id": "abjuracao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Abjuración",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Abjuración",
        "description": "El tiempo y el oro para copiar conjuros de abjuración en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Arcano Mágico",
        "description": "Al lanzar un conjuro de abjuración de 1º+, creas una protección con PV temporales iguales a 2× nivel del mago + nivel del mago (mínimo 6); puedes recargarla con conjuros de abjuración."
      },
      {
        "level": 6,
        "name": "Arcano Mágico Proyectado",
        "description": "Reacción: el Arcano Mágico absorbe el daño causado a una criatura que ves a 30 pies."
      },
      {
        "level": 10,
        "name": "Abjuración Mejorada",
        "description": "Cuando lanzas un conjuro que requiere una prueba de habilidad (Disipar Magia, Contrahechizo), sumas tu bonificador de competencia a la prueba."
      },
      {
        "level": 14,
        "name": "Resistencia a Conjuros",
        "description": "Ventaja en salvaciones contra conjuros y resistencia al daño de conjuros."
      }
    ]
  },
  {
    "id": "canto_da_lamina",
    "source": "scag",
    "classId": "mago",
    "name": "Canto de la Hoja",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Entrenamiento en Guerra y Canto",
        "description": "Competencia con armadura ligera, un arma cuerpo a cuerpo de una mano y pericia en Actuación, si no la tenías."
      },
      {
        "level": 2,
        "name": "Canto de la Hoja",
        "description": "Acción adicional (1 minuto): +mod. INT a la CA (mín. +1), +10 pies de desplazamiento, ventaja en Acrobacia y sumas mod. INT en salvaciones de CON de concentración; usos = bonificador de competencia."
      },
      {
        "level": 6,
        "name": "Ataque Extra",
        "description": "Cuando usas la acción de Atacar, atacas dos veces y puedes sustituir uno de los ataques por un truco."
      },
      {
        "level": 10,
        "name": "Canto de la Defensa",
        "description": "Reacción: gastas un slot de conjuro para reducir el daño que sufres en 5 × el nivel del slot (con el Canto de la Hoja activo)."
      },
      {
        "level": 14,
        "name": "Canto de la Victoria",
        "description": "Sumas mod. INT (mín. +1) al daño de los ataques cuerpo a cuerpo con arma mientras el Canto de la Hoja está activo."
      }
    ]
  },
  {
    "id": "magia_cronurgica",
    "source": "egw",
    "classId": "mago",
    "name": "Cronurgia",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Desplazamiento Temporal",
        "description": "Reacción: después de una tirada de ataque, prueba o salvación tuya o de una criatura a 30 pies, fuerzas una nueva tirada y usas el segundo resultado (2/ descanso largo)."
      },
      {
        "level": 2,
        "name": "Percepción Temporal",
        "description": "Sumas mod. INT a tus tiradas de iniciativa."
      },
      {
        "level": 6,
        "name": "Estasis Momentánea",
        "description": "Acción: una criatura Grande o menor a 60 pies hace salvación de CON o queda incapacitada y con desplazamiento 0 hasta tu próximo turno o hasta que sufra daño (usos = mod. INT; descanso largo)."
      },
      {
        "level": 10,
        "name": "Suspensión Arcana",
        "description": "Congelas un conjuro de un slot de 4º o inferior en una cuenta gris durante 1 hora; una criatura que la sostiene usa su acción para lanzarlo (1/ descanso corto)."
      },
      {
        "level": 14,
        "name": "Futuro Convergente",
        "description": "Reacción: decides que la tirada tuya o de una criatura a 60 pies valga el mínimo para el éxito o 1 menos; ganas 1 nivel de agotamiento (solo se elimina con un descanso largo)."
      }
    ]
  },
  {
    "id": "conjuracao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Conjuración",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Conjuración",
        "description": "El tiempo y el oro para copiar conjuros de conjuración en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Conjuración Menor",
        "description": "Acción: creas un objeto inanimado de hasta 10 libras dentro del alcance de 10 pies; lo deshaces con tu acción (el objeto no puede ser mágico ni causar daño)."
      },
      {
        "level": 6,
        "name": "Transporte Benévolo",
        "description": "Acción: te teletransportas hasta 30 pies o cambias de sitio con una criatura Mediana o menor que veas (libre o voluntaria)."
      },
      {
        "level": 10,
        "name": "Conjuración Enfocada",
        "description": "Mientras concentras en un conjuro de conjuración, el daño no rompe tu concentración."
      },
      {
        "level": 14,
        "name": "Invocaciones Duraderas",
        "description": "Las criaturas que invocas o creas con un conjuro de conjuración ganan 30 PV temporales."
      }
    ]
  },
  {
    "id": "adivinhacao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Adivinación",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Adivinación",
        "description": "El tiempo y el oro para copiar conjuros de adivinación en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Presagio",
        "description": "Al final del descanso largo, tiras 2d20 y anotas los valores; puedes sustituir una tirada de ataque, habilidad o salvación por uno de ellos (se repone al final del descanso largo)."
      },
      {
        "level": 6,
        "name": "Adivinación Experimentada",
        "description": "Al lanzar un conjuro de adivinación de 2º+ con slot, recuperas un slot gastado de nivel inferior al del conjuro (1/ ronda)."
      },
      {
        "level": 10,
        "name": "El Tercer Ojo",
        "description": "Acción: ganas visión en la oscuridad, visión en la niebla, lectura de lenguas o ver más allá del velo durante 1 minuto (hasta usar la acción o descanso corto)."
      },
      {
        "level": 14,
        "name": "Presagio Mayor",
        "description": "Tiras 3d20 para el Presagio en lugar de 2d20."
      }
    ]
  },
  {
    "id": "encantamento",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Encantamiento",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Encantamiento",
        "description": "El tiempo y el oro para copiar conjuros de encantamiento en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Mirada Hipnótica",
        "description": "Acción: hechizas a una criatura que ves a 5 pies (salvación de SAB o hasta que uses otra acción, ataques o ella reciba daño)."
      },
      {
        "level": 6,
        "name": "Encantamiento Instintivo",
        "description": "Reacción: cuando una criatura a 30 pies te ataca, desvías el ataque hacia otra criatura a 5 pies que puedas ver (salvación de SAB o el ataque continúa con normalidad)."
      },
      {
        "level": 10,
        "name": "Encantamiento Dividido",
        "description": "Un conjuro de encantamiento que afectaba a 1 criatura pasa a afectar a 2."
      },
      {
        "level": 14,
        "name": "Alterar Memorias",
        "description": "El objetivo hechizado no percibe tu influencia; puedes borrar las memorias del conjuro (salvación de SAB o falla)."
      }
    ]
  },
  {
    "id": "evocacao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Evocación",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Evocación",
        "description": "El tiempo y el oro para copiar conjuros de evocación en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Esculpir Conjuros",
        "description": "Al lanzar un conjuro de evocación que afecta a criaturas que ves, eliges hasta 6 — quedan libres de los efectos beneficiosos y dañinos."
      },
      {
        "level": 6,
        "name": "Truco Potente",
        "description": "Cuando una criatura salva contra tu truco, sufre la mitad del daño (ningún otro efecto)."
      },
      {
        "level": 10,
        "name": "Evocación Empoderada",
        "description": "Sumas mod. INT (mínimo +1) a una tirada de daño de un conjuro de evocación del mago (1/ ronda)."
      },
      {
        "level": 14,
        "name": "Sobrecanalización",
        "description": "Un conjuro de evocación de 1º a 5º causa daño máximo; el primer uso no tiene coste, los usos siguientes causan 2d12 de daño necrótico por nivel del conjuro en ti."
      }
    ]
  },
  {
    "id": "magia_graviturgica",
    "source": "egw",
    "classId": "mago",
    "name": "Graviturgia",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Ajustar la Densidad",
        "description": "Acción: duplicas o reduces a la mitad el peso de un objeto o de una criatura Grande o menor a 30 pies durante 1 minuto (concentración); el desplazamiento y las pruebas de FUE cambian en consecuencia."
      },
      {
        "level": 6,
        "name": "Pozo Gravitacional",
        "description": "Cuando lanzas un conjuro contra una criatura, puedes moverla 5 pies a un espacio vacío si acepta, si el conjuro la acierta o si falla su salvación."
      },
      {
        "level": 10,
        "name": "Atracción Violenta",
        "description": "Reacción: aumentas en 1d10 el daño de un ataque con arma de una criatura a 60 pies, o en 2d10 el daño de una caída (usos = mod. INT; descanso largo)."
      },
      {
        "level": 14,
        "name": "Horizonte de Sucesos",
        "description": "Acción: campo gravitacional de 30 pies durante 1 minuto (concentración) — criaturas hostiles al iniciar su turno allí: salvación de FUE o 2d10 de fuerza y desplazamiento 0 (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "illusao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Ilusión",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Ilusión",
        "description": "El tiempo y el oro para copiar conjuros de ilusión en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Ilusión Menor Mejorada",
        "description": "Aprendes Ilusión Menor (u otro truco si ya la conoces) y puedes crear una ilusión visual y sonora a la vez."
      },
      {
        "level": 6,
        "name": "Ilusiones Mutables",
        "description": "Acción adicional: alteras la naturaleza de una ilusión lanzada (duración de 1 minuto o más)."
      },
      {
        "level": 10,
        "name": "Autoilusión",
        "description": "Reacción: creas un doble de ti mismo que absorbe un ataque (1/ descanso largo)."
      },
      {
        "level": 14,
        "name": "Realidad Ilusoria",
        "description": "Un objeto inanimado de una ilusión de 1º+ se vuelve real durante 1 minuto (no puede causar daño ni herir)."
      }
    ]
  },
  {
    "id": "necromancia",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Nigromancia",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Nigromancia",
        "description": "El tiempo y el oro para copiar conjuros de nigromancia en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Cosecha Macabra",
        "description": "Al matar a una criatura con un conjuro de 1º+ (no no-muerto), recuperas PV = 2× nivel del conjuro (1/ ronda)."
      },
      {
        "level": 6,
        "name": "Siervos No-Muertos",
        "description": "Animar Muertos entra en el grimorio; animas 1 cuerpo o montón de huesos adicional y los no-muertos comandados ganan PV y CA iguales al nivel del mago."
      },
      {
        "level": 10,
        "name": "Endurecido en la No-Vida",
        "description": "Resistencia al daño necrótico y tu máximo de PV no puede ser reducido."
      },
      {
        "level": 14,
        "name": "Controlar No-Muertos",
        "description": "Acción: eliges un no-muerto a 60 pies (salvación de SAB o queda hechizado por ti; los no-muertos inteligentes tienen ventaja)."
      }
    ]
  },
  {
    "id": "ordem_dos_escribas",
    "source": "tce",
    "classId": "mago",
    "name": "Orden de los Escribas",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Pluma del Mago",
        "description": "Acción adicional: creas una pluma mágica que no necesita tinta, transcribe conjuros en 2 minutos por nivel, borra lo que escribe (5 pies) y desaparece si creas otra."
      },
      {
        "level": 2,
        "name": "Grimorio Despierto",
        "description": "Sirve como foco; cambias el tipo de daño de un conjuro por el de otro del grimorio de mismo nivel, lanzas rituales sin +10 minutos (1/ descanso largo) y recreas el libro durante un descanso corto."
      },
      {
        "level": 6,
        "name": "Manifestar la Mente",
        "description": "Acción adicional: manifiestas la mente del grimorio como un objeto espectral a 60 pies; lanzas conjuros desde su posición (usos = bonificador de competencia) y lo mueves 30 pies (1/ descanso largo)."
      },
      {
        "level": 10,
        "name": "Escriba Maestro",
        "description": "Al terminar el descanso largo, creas un pergamino con un conjuro de 1º o 2º de 1 acción, tratado como 1 nivel más alto; con la Pluma, gastas la mitad de oro y tiempo en pergaminos."
      },
      {
        "level": 14,
        "name": "Uno con la Palabra",
        "description": "Ventaja en Arcanos; reacción: al sufrir daño, lo anulas del todo disipando la mente espectral, pero pierdes conjuros del grimorio (3d6 niveles) durante 1d6 descansos largos (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "transmutacao",
    "source": "phb",
    "classId": "mago",
    "name": "Escuela de Transmutación",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Erudito de Transmutación",
        "description": "El tiempo y el oro para copiar conjuros de transmutación en el grimorio se reducen a la mitad."
      },
      {
        "level": 2,
        "name": "Alquimia Menor",
        "description": "Acción (10 minutos): transformas temporalmente un objeto no mágico de metal, madera o piedra en otro (1 hora; 1/ descanso largo)."
      },
      {
        "level": 6,
        "name": "Piedra de Transmutación",
        "description": "Tras 8 horas, creas una piedra que concede un beneficio (puedes dársela a otra criatura); una criatura solo se beneficia de una a la vez."
      },
      {
        "level": 10,
        "name": "Metamorfosis",
        "description": "Aprendes Polimorfar y puedes lanzarla sin slot, con el objetivo restringido a ti (1/ descanso largo)."
      },
      {
        "level": 14,
        "name": "Transmutador Maestro",
        "description": "Acción: consumes la piedra para curar 2d8+INT PV, eliminar ceguera/sordera/mudez/enfermedad/envenenamiento, rejuvenecer 10 años o transformar materia (1/ descanso largo)."
      }
    ]
  },
  {
    "id": "magia_de_guerra",
    "source": "xge",
    "classId": "mago",
    "name": "Magia de Guerra",
    "level": 2,
    "features": [
      {
        "level": 2,
        "name": "Desvío Arcano",
        "description": "Reacción: al ser acertado por un ataque o fallar una salvación, ganas +2 a la CA contra ese ataque o +4 a la salvación; hasta tu próximo turno solo puedes lanzar trucos."
      },
      {
        "level": 2,
        "name": "Ingenio Táctico",
        "description": "Sumas mod. INT a tus tiradas de iniciativa."
      },
      {
        "level": 6,
        "name": "Surtos de Poder",
        "description": "Guardas hasta mod. INT surtos (mín. 1); ganas 1 al disipar o lanzar Contrahechizo, o al terminar un descanso corto sin surtos; gastas 1 para causar daño de fuerza extra = la mitad de tu nivel de mago."
      },
      {
        "level": 10,
        "name": "Magia Duradera",
        "description": "Mientras mantienes la concentración en un conjuro, tienes +2 a la CA y a todas tus salvaciones."
      },
      {
        "level": 14,
        "name": "Manto de Desvío",
        "description": "Cuando usas el Desvío Arcano, hasta 3 criaturas a 60 pies de ti reciben daño de fuerza igual a la mitad de tu nivel de mago."
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
