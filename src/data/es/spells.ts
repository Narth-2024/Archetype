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
    "name": "Evaporación de Abi-Dalzim",
    "level": 8,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (un trozo de esponja)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Drena la humedad de un cubo de 30 pies: 12d8 de daño necrótico (salvación de Constitución; mitad si tiene éxito); no afecta a no-muertos ni constructos.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "absorver_elementos",
    "name": "Absorber Elementos",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Reacción",
    "range": "Personal",
    "components": "S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Reacción a daño ácido, frío, fuego, eléctrico o de trueno: resistencia al tipo y +1d6 extra en tu próximo cuerpo a cuerpo. Niveles superiores: +1d6 por nivel superior al 1º.",
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
    "name": "Burbuja Ácida",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Burbuja de ácido en una o dos criaturas cercanas: salvación de Destreza o 1d6 de daño ácido. Niveles superiores: +1d6 en 5º, 11º y 17º.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "queimadura_de_aganazzar",
    "name": "Quemadura de Aganazzar",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una escama de dragón rojo)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Línea de llamas de 30 pies que emana de ti: salvación de Destreza o 3d8 de daño de fuego (mitad si tiene éxito). Niveles superiores: +1d8 por nivel superior al 2º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "auxilio",
    "name": "Auxilio",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una tira de tela blanca)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 3 criaturas obtienen 5 PV máximos y actuales durante 8 horas. Niveles superiores: +5 PV por nivel superior al 2º.",
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
    "name": "Burbuja de Aire",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Una criatura voluntaria obtiene una burbuja de aire fresco que evita el ahogo durante 24 horas. Niveles superiores: +2 burbujas por nivel superior al 2º.",
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
    "name": "Alarma",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S, M (un pequeño cable de cobre)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": true,
    "description": "Alerta cuando una criatura (no tuya) entra en el área.",
    "classes": [
      "artifice",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "alterar_se",
    "name": "Alterarse",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Te adaptas al agua, cambias tu apariencia o imitas a una criatura que toques, a tu elección, durante 1 hora.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dissuasao",
    "name": "Disuasión",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo con Cuidar de animales te evita (miedo amigable).",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "mensageiro_animal",
    "name": "Mensajero Animal",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (un bocado de comida)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: un animal Pequeño lleva tu mensaje de hasta 25 palabras al lugar indicado en un máximo de 24 horas. Niveles superiores: +48 horas por nivel superior al 2º.",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "formas_animais",
    "name": "Formas Animales",
    "level": 8,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Hasta 24 horas",
    "concentration": true,
    "ritual": false,
    "description": "Transforma cualquier número de criaturas voluntarias en bestias Grandes o menores de CA ≤ 4; en tu turno puedes cambiar su forma gratis.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "animar_mortos",
    "name": "Animar Muertos",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "1 minuto",
    "range": "10 pies",
    "components": "V, S, M (una gota de sangre, un trozo de carne y una pizca de polvo de hueso)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Levantas un esqueleto (huesos) o zombi (cadáver) a 10 pies, obediente 24 horas y dirigido con acción adicional. Niveles superiores: +2 no-muertos por nivel superior al 3º.",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "animar_objetos",
    "name": "Animar Objetos",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Anima hasta 10 objetos no mágicos (Mediano cuenta como 2, Grande como 4, Enorme como 8); cada uno lucha a tu mando con CA, PV y bonificador propios.",
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
    "name": "Antagonizar",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una carta de baraja de un pícaro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Susurro: 4d4 de daño psíquico y el objetivo gasta su reacción atacando a otra criatura (fallo en Sabiduría). Niveles superiores: +1d4 por nivel superior al 3º.",
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
    "name": "Barrera Antivida",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Barrera brillante de 10 pies te acompaña e impide a las criaturas (excepto no-muertos y constructos) entrar; no pueden atravesar ni atacar desde dentro.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "campo_antimagia",
    "name": "Campo Antimagia",
    "level": 8,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Esfera de 10 pies sin magia: los conjuros no se lanzan, las invocaciones desaparecen, los objetos mágicos se vuelven comunes y la propia magia queda suspendida dentro.",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "antipatia_simpatia",
    "name": "Antipatía/Simpatía",
    "level": 8,
    "school": "Encantamiento",
    "castingTime": "1 hora",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "10 días",
    "concentration": false,
    "ritual": false,
    "description": "Atrae o repele un tipo de criatura inteligente durante 10 días (radio de 120 pies, 24 horas para entrar/salir, salvación de Sabiduría).",
    "classes": [
      "bardo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "olho_arcano",
    "name": "Ojo Arcano",
    "level": 4,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Crea un ojo mágico invisible que vuela y transmite lo que ve (visión normal y en la oscuridad de 30 pies) hasta ti; puede moverse como acción.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "portais_arcanos",
    "name": "Portales Arcanos",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "500 pies",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Abre dos portales enlazados de 10 pies: uno a hasta 10 pies de ti y otro a hasta 500 pies; solo funcionan desde un lado, durante 10 minutos.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tranca_arcana",
    "name": "Cerradura Arcana",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (polvo de oro de al menos 25 po, consumido)",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Tocas una puerta o arcón cerrado: queda asegurado hasta que se disipe; una contraseña dicha a 5 pies suspende el efecto durante 1 minuto.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "armadura_de_agathys",
    "name": "Armadura de Agathys",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (pedazo de hielo)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "5 PV temporarios; quien te acierta cuerpo a cuerpo recibe 5 de frío.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "bracos_de_hadar",
    "name": "Brazos de Hadar",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tentáculos sombríos hieren en 10 pies: salvación de Fuerza o 2d6 necrótico y sin reacción hasta tu próximo turno. Niveles superiores: +1d6 por nivel superior al 1º.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "passo_de_ashardalon",
    "name": "Paso de Ashardalon",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tus pies arden: +20 pies de desplazamiento, sin ataques de oportunidad y 1d6 de fuego a quien esté a 5 pies. Niveles superiores: +5 pies y +1d6 por nivel superior al 3º.",
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
    "name": "Proyección Astral",
    "level": 9,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "10 pies",
    "components": "V, S, M",
    "duration": "Especial",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta 8 criaturas proyectáis cuerpos astrales; el cuerpo material queda inconsciente hasta que el alma regrese (el cordón plateado puede ser cortado, matando al cuerpo).",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "augurio",
    "name": "Augurio",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V, S, M (palos, huesos o símbolos marcados de al menos 25 po)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: huesos o cartas revelan un presagio (bueno, malo, ambos o ninguno) sobre la acción que planeas para los próximos 30 minutos.",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_vida",
    "name": "Aura de Vida",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Aura de 30 pies: criaturas no hostiles con resistencia al daño necrótico, PV máximos no reducibles y 1 PV al iniciar el turno con 0, durante 10 minutos.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_pureza",
    "name": "Aura de Pureza",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Aura de 30 pies: las criaturas no hostiles no enferman, resisten al veneno y tienen ventaja frente a ceguera, encantamiento, miedo, parálisis, veneno y aturdimiento.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "aura_de_vitalidade",
    "name": "Aura de Vitalidad",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Aura de 30 pies: con acción adicional, una criatura del aura (incluido tú) recupera 2d6 PV, durante 1 minuto.",
    "classes": [
      "clerigo",
      "druida",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "despertar",
    "name": "Despertar",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "8 horas",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tras 8 horas de conjuración, una besta o planta (CA ≤ 5, Inteligencia 3 o menos) gana Inteligencia 10, aprende a hablar y se vuelve amistosa contigo.",
    "classes": [
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "perdicao",
    "name": "Perdición",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gota de sangre)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Hasta 3 criaturas hacen salvación de Carisma y restan 1d4 a sus tiradas de ataque y salvación durante 1 minuto. Niveles superiores: +1 criatura por nivel superior al 1º.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "punicao_banidora",
    "name": "Castigo de Destierro",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu próximo acerto con arma inflige +5d10 de daño de fuerza; si deja al objetivo con 50 PV o menos, lo destierra durante 1 minuto.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "banimento",
    "name": "Destierro",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una criatura falla una prueba de Carisma; nativa de este plano es desterrada por 1 minuto, nativa de otro plano es devuelta a su plano de origen.",
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
    "name": "Piel de Corteza",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (un puñado de corteza de roble)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "La piel del objetivo se vuelve correosa y su CA no baja de 16, durante hasta 1 hora.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "sinal_de_esperanca",
    "name": "Faro de Esperanza",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Las criaturas elegidas tienen ventaja en salvaciones de Sabiduría y de muerte, y curan el máximo posible, durante 1 minuto.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "boa_sort",
    "name": "Buena Suerte",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un trébol)",
    "duration": "1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El objetivo tiene ventaja en una prueba de característica.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "sentido_feral",
    "name": "Sentido Bestial",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": true,
    "description": "Ves y oyes a través de una besta voluntaria que tocas hasta que usas tu acción para volver a tus sentidos.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rogar_maldicao",
    "name": "Imponer Maldición",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Toque: fallo en Sabiduría maldice al objetivo 1 minuto (efecto a elegir); Remover Maldición lo termina. Niveles superiores: 10 minutos (4º), 8 horas (5º).",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mao_arcana",
    "name": "Mano Arcana",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una mano Grande de fuerza translúcida actúa como mandas: tirar (50 pies), apretar (4d8 de daño contundente) o golpear (+8, 4d8+mod.).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "barreira_de_laminas",
    "name": "Barrera de Cuchillas",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Pared vertical de cuchillas mágicas (recta hasta 100×20 pies o anillo de 60 pies de diámetro): 4d10 de daño cortante a quien la atraviese o esté en el área.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "lamina_do_desastre",
    "name": "Hoja del Desastre",
    "level": 9,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Fenda planar en forma de hoja: hasta 2 ataques mágicos a 5 pies con 4d12 de daño de fuerza (crítico con 18 o más), durante 1 minuto.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "protecao_contra_laminas",
    "name": "Protección contra Cuchillas",
    "level": 0,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Hasta el final de tu próximo turno tienes resistencia al daño contundente, perforante y cortante de los ataques con arma.",
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
    "name": "Bendecir",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (agua bendita)",
    "duration": "Concentración, hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "3 objetivos suman 1d4 en ataques y salvaciones.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "murcha",
    "name": "Marchitez",
    "level": 4,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Energía nigromántica drena humedad: 8d8 de daño necrótico (mitad en salvación de Constitución); las plantas y los objetos vegetales tienen desventaja en la salvación.",
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
    "name": "Castigo de Ceguera",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu próximo acerto cuerpo a cuerpo inflige +3d8 radiante; salvación de Constitución o el objetivo queda Cegado, durante 1 minuto.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "cegueira_surdez",
    "name": "Ceguera/Sordera",
    "level": 2,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Un objetivo hace salvación de Constitución y queda Cegado o Ensordecido (a tu elección) 1 minuto; repite cada turno. Niveles superiores: +1 criatura por nivel superior al 2º.",
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
    "name": "Parpadeo",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Al final de cada turno tuyo tira un d20: con 11 o más pasas al Plano Etéreo y vuelves al iniciar tu próximo turno, durante 1 minuto.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "turvar",
    "name": "Borrosidad",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu cuerpo se vuelve borroso: los ataques contra ti tienen desventaja durante 1 minuto, salvo quien ignora las ilusiones.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ossos_da_terra",
    "name": "Huesos de la Tierra",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 6 pilares de piedra de hasta 30 pies brotan del suelo: salvación de Destreza o se alzan; si chocan con el techo, 6d6. Niveles superiores: +2 pilares por nivel superior al 6º.",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "lamina_estrondosa",
    "name": "Hoja Estruendosa",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S, M (un arma cuerpo a cuerpo de al menos 1 pp)",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Tu golpe cuerpo a cuerpo envuelve al objetivo en energía estruendosa: 1d8 de daño de trueno si se mueve 5 pies. Niveles superiores: +1d8 en 5º, 11º y 17º.",
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
    "name": "Conocimiento Prestado",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (un libro de al menos 25 po)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Ganas competencia en una pericia que no dominas durante 1 hora; repetir el conjuro cambia la pericia elegida.",
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
    "name": "Marca de Castigo",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu próximo acerto con arma inflige +2d6 radiante y hace visible al objetivo, que brilla penosamente 1 minuto. Niveles superiores: +1d6 por nivel superior al 2º.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "maos_ardentes",
    "name": "Manos Ardientes",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "15 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Cono de fuego 3d6 (mitad en DES).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_relampagos",
    "name": "Invocar Relámpagos",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Nube de tormenta a 60 pies sobre ti: con tu acción, un rayo golpea un punto con 3d10 eléctricos (salvación de Destreza). Niveles superiores: +1d10 por nivel superior al 3º.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "acalmar_emocoes",
    "name": "Calmar Emociones",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Esfera de 20 pies: los humanoides hacen salvación de Carisma y suprimes los efectos que hechizan o asustan, durante 1 minuto.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "catapulta",
    "name": "Catapulta",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un objeto de 1 a 5 libras vuela 90 pies en línea recta y causa 3d8 de daño (salvación de Destreza). Niveles superiores: +5 libras y +1d8 por nivel superior al 1º.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "soneca",
    "name": "Siesta",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "S, M (una pizca de arena)",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 3 criaturas voluntarias duermen 10 minutos y cuentan como descanso corto; el daño las despierta antes.",
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
    "name": "Causar Miedo",
    "level": 1,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una criatura hace salvación de Sabiduría y queda Asustada de ti 1 minuto (repite cada turno); constructos y no-muertos son inmunes. Niveles superiores: +1 objetivo.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "cerimonia",
    "name": "Ceremonia",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M (25 po en polvo de plata, consumido)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: realizas una ceremonia religiosa de 1 hora (agua bendita, matrimonio, mayoría de edad, funeral, etc.).",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "relampago_em_cadeia",
    "name": "Relámpago en Cadena",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un rayo impacta al objetivo (8d10 de daño elétrico, mitad en Destreza) y salta hacia hasta 3 otros objetivos a hasta 30 pies del primero.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_de_caos",
    "name": "Rayo de Caos",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ataque a distancia con 2d8+1d6 de daño y tipo definido por un d8; si ambos d8 coinciden, el caos salta a otra criatura. Niveles superiores: +1d6 por nivel superior al 1º.",
    "classes": [
      "feiticeiro"
    ],
    "source": "xge"
  },
  {
    "id": "enfeiticar_monstro",
    "name": "Hechizar Monstruo",
    "level": 4,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Una criatura hace salvación de Sabiduría (ventaja si la estáis combatiendo) y queda Hechizada 1 hora; sabe que la hechizaste. Niveles superiores: +1 por nivel superior al 4º.",
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
    "name": "Hechizar Persona",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El humano tiene ventaja en la amistad contigo; salvación o queda hechizado 1 hora.",
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
    "name": "Toque Necrótico",
    "level": 0,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Mano esquelética a distancia: 1d8 necrótico, impide curar hasta tu próximo turno y da desventaja a los no-muertos. Niveles superiores: +1d8 en 5º, 11º y 17º.",
    "classes": [],
    "source": "phb"
  },
  {
    "id": "orbe_cromatica",
    "name": "Orbe Cromática",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un diamante de al menos 50 po)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de energía a distancia con 3d8 del tipo que elijas (ácido, frío, fuego, eléctrico, veneno o de trueno). Niveles superiores: +1d8 por nivel superior al 1º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_da_morte",
    "name": "Círculo de la Muerte",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de energía negativa en un radio de 60 pies: 8d6 de daño necrótico (salvación de Constitución; mitad si tiene éxito).",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_de_poder",
    "name": "Círculo de Poder",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Criaturas amigables en 30 pies tienen ventaja en salvaciones contra conjuros y efectos mágicos durante 10 minutos.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "clarividencia",
    "name": "Clarividencia",
    "level": 3,
    "school": "Adivinación",
    "castingTime": "10 minutos",
    "range": "1 milla",
    "components": "V, S, M (un foco de 100 po: cuerno con joyas para oír u ojo de vidrio para ver)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Sensor invisible para ver u oír en un lugar familiar u obvio hasta 1 milla de distancia, durante 10 minutos.",
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
    "name": "Clon",
    "level": 8,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hace crecer un clon inerte en un vaso sellado (120 días hasta ser adulto); si mueres, el alma migra al clon, que despierta con 1 PV.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuvem_de_adagas",
    "name": "Nube de Dagas",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un trozo de vidrio)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Cubo de 5 pies lleno de dagas giratorias: 4d4 cortante a quien entra o inicia su turno ahí, durante 1 minuto. Niveles superiores: +2d4 por nivel superior al 2º.",
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
    "name": "Nube Venenosa",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Nube amarillo verdosa de 20 pies de radio: 5d8 de daño venenoso por turno (salvación de Constitución; mitad si tiene éxito) y visión gravemente obstruida.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "leque_cromatico",
    "name": "Abanico Cromático",
    "level": 1,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una pizca de polvo o arena roja, amarilla y azul)",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "6d10 determinan los PV afectados: las criaturas del cono de 15 pies quedan Cegadas, de menor a mayor PV, durante 1 ronda. Niveles superiores: +2d10 por nivel superior al 1º.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "enfeiticar_cavalo",
    "name": "Comando",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Comanda una palabra: Arrodíllate, Suéltate, Huye, Alto o Acércate.",
    "classes": [
      "bardo",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "comunhao",
    "name": "Comunión",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: haces hasta 3 preguntas de sí o no a tu divinidad y recibes respuestas correctas, aunque no necesariamente completas.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "comunhao_com_a_natureza",
    "name": "Comunión con la Naturaleza",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: te fusionas con la naturaleza y sabes sobre la región en un radio de 3 millas (terreno, criaturas y fenómenos, hasta 3 criaturas específicas).",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "duelo_compelido",
    "name": "Duelo Obligado",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción adicional",
    "range": "30 pies",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Un objetivo hace salvación de Sabiduría y queda atraído hacia ti: desventaja en ataques contra otros y debe salvar para alejarse más de 30 pies, 1 minuto.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "compreender_idiomas",
    "name": "Comprender Idiomas",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una pizca de humo y incienso)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Entiende cualquier idioma hablado o escrito.",
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
    "name": "Compulsión",
    "level": 4,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Las criaturas que pueden oírte (fallo en Sabiduría) se ven obligadas a moverse en su turno en la dirección que elijas, sin provocar ataques de oportunidad.",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "cone_de_frio",
    "name": "Cono de Frío",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un cono de 60 pies causa 8d8 de daño frío (salvación de Constitución; mitad si tiene éxito); las criaturas muertas por él se congelan en pedazos de hielo.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "confusao",
    "name": "Confusión",
    "level": 4,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera de 10 pies de radio: cada criatura hace una salvación de Sabiduría o actúa de forma aleatoria (cargar, actuar normalmente, gastar la acción temblando, etc.).",
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
    "name": "Invocar Animales",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas espíritus feéricos con forma de besta en espacios libres a la vista, obedientes durante 1 hora. Niveles superiores: aparecen el doble (5º) o el triple (7º y 9º).",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_rajada",
    "name": "Invocar Ráfaga",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una munición o un arma arrojadiza)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un arma o munición no mágica se multiplica en un cono de 60 pies: salvación de Destreza o 3d8 del mismo tipo (mitad si tiene éxito).",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_celestial",
    "name": "Invocar Celestial",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "90 pies",
    "components": "V, S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invoca un ser celestial de CA ≤ 4 en un espacio libre y visible; es amistoso contigo y con tus compañeros.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_elemental",
    "name": "Invocar Elemental",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "90 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invoca un elemental de CA 5 o menor de aire, tierra, fuego o agua en un cubo de 10 pies adyacente; es hostil y debe ser contenido por un círculo mágico.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_fada",
    "name": "Invocar Hada",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "90 pies",
    "components": "V, S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invoca una criatura hada de CA ≤ 6 o un espíritu hada con forma de bestia de CA ≤ 6 en un espacio libre visible.",
    "classes": [
      "druida",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_elementais_menores",
    "name": "Invocar Elementales Menores",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "90 pies",
    "components": "V, S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invoca elementales en espacios libres: 1 con CA ≤ 2, 2 con CA ≤ 1 o 4 con CA ≤ ½; te obedecen.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_saraivada",
    "name": "Invocar Descarga",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (una munición o un arma arrojadiza)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Munición o arma no mágica cae en lluvia sobre un cilindro de 40 pies: salvación de Destreza o 8d8 del mismo tipo.",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "convocar_seres_da_floresta",
    "name": "Invocar Seres del Bosque",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invoca hadas en espacios libres: 1 con CA ≤ 2, 2 con CA ≤ 1 o 4 con CA ≤ ½; te obedecen.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "contato_com_outro_plano",
    "name": "Contacto con Otro Plano",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: contactas con una entidad de otro plano; debes resistir una prueba de Inteligencia (CD 15) o sufrir 2d6 de daño psíquico y quedar Mudo durante una hora.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "contagio",
    "name": "Contagio",
    "level": 5,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "7 días",
    "concentration": false,
    "ritual": false,
    "description": "Un ataque cuerpo a cuerpo mágico infecta a la criatura con una enfermedad de tu elección (Agotamiento, Ceguera, Fractura, Locura, etc.); fallo en la pericia de Constitución al final de cada turno aplica los efectos.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "contingencia",
    "name": "Contingencia",
    "level": 6,
    "school": "Evocación",
    "castingTime": "10 minutos",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "10 días",
    "concentration": false,
    "ritual": false,
    "description": "Prepara un conjuro de nivel ≤ 5 (acción, que te tiene como objetivo) para dispararse automáticamente cuando se cumpla una condición que elijas, dentro de 10 días.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chama_continua",
    "name": "Llama Continua",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (polvo de rubí de 50 po, que el conjuro consume)",
    "duration": "Hasta ser disipada",
    "concentration": false,
    "ritual": false,
    "description": "Una llama tan brillante como una antorcha brota del objeto tocado: no da calor, no consume oxígeno y no puede apagarse.",
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
    "name": "Controlar Llamas",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "Instantáneo o 1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Una llama no mágica de un cubo de 5 pies se extiende, apaga, mueve o deforma; hasta tres efectos no instantáneos activos.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "controlar_agua",
    "name": "Controlar Agua",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Controla agua quieta en un cubo de hasta 100 pies: separar, invertir, levantar olas o vaciar, repitiendo la elección en cada turno.",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "controlar_o_tempo",
    "name": "Controlar el Tiempo",
    "level": 8,
    "school": "Transmutación",
    "castingTime": "10 minutos",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 8 horas",
    "concentration": true,
    "ritual": false,
    "description": "Controla el clima en un radio de 5 millas: cambiar lluvia por sol, niebla, viento fuerte y tormentas (10 minutos por cambio, 8 horas en total).",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "controlar_os_ventos",
    "name": "Controlar los Vientos",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Controlas el aire de un cubo de 100 pies durante hasta 1 hora: ráfaga, corriente descendente o ciclón; con una acción cambias de efecto.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "cordao_de_flechas",
    "name": "Cordón de Flechas",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "5 pies",
    "components": "V, S, M (cuatro o más flechas o virotes)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Cuatro muniones plantadas atacan a quien llega a 30 pies: 1d6 perforante (salvación de Destreza); dura 8 horas. Niveles superiores: +2 muniones por nivel superior al 2º.",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "contramagica",
    "name": "Contramagia",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Reacción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Anula un conjuro de nivel 3 o menor en 60 pies.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criar_fogueira",
    "name": "Crear Hoguera",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Hoguera en un cubo de 5 pies: 1d8 de fuego (salvación de Destreza) a quien entra o termina el turno, durante 1 minuto. Niveles superiores: +1d8 en 5º, 11º y 17º.",
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
    "name": "Crear Comida y Agua",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Crea 45 libras de comida y 30 galones de agua para quince humanoides durante 24 horas; la comida se echa a perder si no se come.",
    "classes": [
      "artifice",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "criar_homunculo",
    "name": "Crear Homúnculo",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M (barro, ceniza y raíz de mandrágora, consumidos, y una daga con joyas de al menos 1.000 po)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Te cortas con una daga con joyas (2d4 perforante) y los componentes se transforman en un homúnculo, que muere cuando mueres.",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "criar_magen",
    "name": "Crear Magen",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M (un frasco de mercurio de 500 po y una muñeca de tamaño real, ambos consumidos, y una varita de cristal de al menos 1.500 po, no consumida)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Los componentes se convierten en un magen; tu PV máximo baja en su reto (mínimo 1) y solo Deseo lo revierte.",
    "classes": [
      "mago"
    ],
    "source": "rotf"
  },
  {
    "id": "criar_ou_destruir_agua",
    "name": "Crear o Destruir Agua",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gota de agua al crearla o unos granos de arena al destruirla)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Crea o destruye 10 galones de agua en un recipiente abierto; también lluvia o niebla en un cubo de 30 pies. Niveles superiores: +10 galones o +5 pies por nivel.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "criar_elmo_de_navegacao",
    "name": "Crear Elmo de Navegación",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una varita de cristal de al menos 5.000 po, que el conjuro consume)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Al tocar con la varita una silla Grande o menor desocupada, la transformas en un Elmo de Navegación y la varita desaparece.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "sps"
  },
  {
    "id": "criar_mortos_vivos",
    "name": "Crear No-Muertos",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "1 minuto",
    "range": "10 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Solo de noche: transforma hasta 3 cadáveres de humanoides en verdugos bajo tu control; puedes dar órdenes a cada uno como acción adicional.",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criacao",
    "name": "Creación",
    "level": 5,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Especial",
    "concentration": false,
    "ritual": false,
    "description": "Trae material de las Sombras para crear un objeto no vivo (vegetal dura 1 día; mineral, metal y piedra duran 6 horas).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "coroa_da_loucura",
    "name": "Corona de Locura",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o un humanoide queda Hechizado y debe atacar antes de moverse a la criatura que elijas; una salvación repetida termina el conjuro.",
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
    "name": "Corona de Estrellas",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Siete motas orbitan tu cabeza 1 hora; con acción adicional envías una hasta 120 pies: ataque a distancia con 4d12 radiante. Niveles superiores: +2 motas por nivel superior al 7º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "manto_do_cruzado",
    "name": "Manto del Cruzado",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Aura de 30 pies: tú y las criaturas no hostiles infligen +1d4 radiante con aciertos de arma, durante 1 minuto.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "curar_feridas",
    "name": "Curar Heridas",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Recupera 1d8+mod. de PV (2d8 en nivel 2, etc.).",
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
    "name": "Chispas",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, M (fósforo)",
    "duration": "1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Fuegos fatuos coloridos; iluminan o producen sonido.",
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
    "name": "Danza Macabra",
    "level": 5,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Hasta cinco cadáveres se levantan como no-muertos con +mod. de conjuración en ataque, durante 1 hora. Niveles superiores: +2 cadáveres por nivel superior al 5º.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "estrela_negra",
    "name": "Estrella Negra",
    "level": 8,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (un fragmento de ónice y una gota de sangre del conjurador, ambos consumidos por el conjuro)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Esfera de hasta 40 pies con oscuridad mágica y gravedad aplastante: 8d10 de daño de fuerza (salvación de Constitución), terreno difícil y sordera.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "escuridao",
    "name": "Oscuridad",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, M (pelaje de murciélago y una gota de alquitrán o un trozo de carbón)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Oscuridad mágica de 15 pies en un punto durante hasta 10 minutos; rodea esquinas, anula la luz no mágica y la cubre opaca la bloquea.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "visao_no_escuro",
    "name": "Visión en la Oscuridad",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pizca de zanahoria seca o una ágata)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Una criatura voluntaria que tocas gana visión en la oscuridad de 60 pies durante 8 horas.",
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
    "name": "Aurora",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un colgante solar de al menos 100 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Luz del amanecer en un cilindro solar (radio 30 pies, altura 40 pies): 4d10 radiante con salvación de Constitución, durante 1 minuto.",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "luz_do_dia",
    "name": "Luz del Día",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de luz de 60 pies de radio con penumbra otros 60 pies, dura 1 hora y disipa la oscuridad de conjuros de nivel 3 o menor.",
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
    "name": "Protección contra la Muerte",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "La primera vez que el objetivo baje a 0 PV por daño, queda con 1 PV y el conjuro termina; acciones como conjuros no lo derriban.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bola_de_fogo_atrasada",
    "name": "Bola de Fuego Retrasada",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera luminosa queda suspendida; cuando la detonas, causa 12d6 de daño de fuego (radio 20 pies, salvación de Destreza; mitad si tiene éxito), creciendo en cada ronda mantenida.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "demiplano",
    "name": "Demiplano",
    "level": 8,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Crea una puerta sombría hacia un demiplano vacío de 30 pies en cada dimensión, existente durante 1 hora; quien salga por las puertas sale en el punto de origen.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "onda_destrutiva",
    "name": "Onda Destructiva",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (radio de 30 pies)",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Golpeas el suelo: onda de 30 pies con 5d6 de trueno + 5d6 radiante o necrótico a elegir, derribando a quien falle la salvación de Constitución.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_o_bem_e_o_mal",
    "name": "Detectar el Bien y el Mal",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Durante 10 minutos conoces la presencia y ubicación de aberraciones, celestiales, elementales, hadas, infernales y no-muertos a 30 pies.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "detectar_magia",
    "name": "Detectar Magia",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": true,
    "ritual": true,
    "description": "Percibe magia y objetos mágicos en 30 pies.",
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
    "name": "Detectar Veneno y Enfermedad",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una hoja de tejo)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": true,
    "description": "Durante 10 minutos percibes la presencia y el tipo de venenos, criaturas venenosas y enfermedades a 30 pies, incluso tras barreras comunes.",
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
    "name": "Detectar Pensamientos",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una pieza de cobre)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Durante 1 minuto lees los pensamientos superficiales de una criatura a 30 pies; profundizar exige salvación de Sabiduría y revela emociones.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "porta_dimensional",
    "name": "Porta Dimensional",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "500 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta 5 voluntarios os teletransportáis hasta 500 pies (lugar visto, imaginado o descrito); los seres involuntarios requieren prueba de Destreza.",
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
    "name": "Disfraz Alterado",
    "level": 1,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (polvo para pintar)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Cambia tu apariencia (rostro, cuerpo) durante 1 hora.",
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
    "name": "Desintegrar",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un rayo verde: 100 de daño de energía (salvación de Destreza; fallo y 0 PV desintegra al objetivo, dejando solo cenizas y objetos).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "anular_bem_e_mal",
    "name": "Anular Bien y Mal",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Energía protectora: las criaturas celestiales, elementales, feéricas, infernales y no-muertos tienen desventaja en ataques contra ti; puedes terminarlo para desterrar a una de ellas.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "dissipar_magia",
    "name": "Disipar Magia",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un polvo de ámbar)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Intenta cancelar un conjuro activo o un objeto mágico.",
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
    "name": "Susurros Disonantes",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Susurro dissonante: salvación de Sabiduría o 3d6 psíquico y la criatura huye con su reación (mitad si tiene éxito). Niveles superiores: +1d6 por nivel superior al 1º.",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "distorcer_valor",
    "name": "Distorsionar Valor",
    "level": 1,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Un objeto de hasta 1 pie dobla o reduce a la mitad su valor percibido durante 8 horas; exige prueba de Investigación. Niveles superiores: +1 pie por nivel superior al 1º.",
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
    "name": "Adivinación",
    "level": 4,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: con una ofrenda, preguntas algo sobre un evento de los próximos 7 días y recibes una respuesta verdadera (corta, enigmática o incompleta).",
    "classes": [
      "clerigo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "favor_divino",
    "name": "Favor Divino",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu oración te envuelve en luz divina: durante hasta 1 minuto tus aciertos con arma causan +1d4 de daño radiante.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_divina",
    "name": "Palabra Divina",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "30 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Una palabra de poder: fallo en Carisma causa daño psíquico (4d8 a criaturas de 50 PV o menos, hasta 20d6 a 1 PV) y efectos adicionales (mudo, ciego o sordo durante 1 minuto).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "encantar_besta",
    "name": "Hechizar Besta",
    "level": 4,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o la besta queda Hechizada; puedes usar una acción adicional para comandarla (ataque, moverse, etc.).",
    "classes": [
      "druida",
      "patrulheiro",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "dominar_monstro",
    "name": "Dominar Monstruo",
    "level": 8,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o la criatura (cualquier tipo) queda Hechizada; puedes dar órdenes por acción adicional en cada turno.",
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
    "name": "Dominar Persona",
    "level": 5,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o el humanoide queda Hechizado; puedes usar una acción adicional para dar órdenes directas (pelear, quedarse quieto, entregar objetos).",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transformacao_draconica",
    "name": "Transformación Dracónica",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S, M (una estatua de dragón de al menos 500 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Con un rugido ganas visión ciega de 30 pies, aliento en cono de 60 pies con 6d8 de daño de fuerza (salvación de Destreza) y vuelo de 60 pies.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "sopro_do_dragao",
    "name": "Aliento de Dragón",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S, M (un chile muy picante)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El toque da a una criatura un aliento de ácido, frío, fuego, eléctrico o veneno en cono de 15 pies: 3d6 (salvación de Destreza). Niveles superiores: +1d6 por nivel superior al 2º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocacao_instantanea",
    "name": "Invocación Instantánea",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: marcas un objeto de hasta 10 lb con una zafira; un comando (acción) lo teletransporta a tu mano instantáneamente, desde donde esté.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "sonho",
    "name": "Sueño",
    "level": 5,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "Especial",
    "components": "V, S, M",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Tú o un emisario entráis en los sueños de una criatura del mismo plano, creando una aparición; en la versión pesadilla, no duerme bien y amanece exhausta (hasta 1d4 de agotamiento).",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "sonho_do_veu_azul",
    "name": "Sueño del Velo Azul",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "20 pies",
    "components": "V, S, M (un objeto mágico o una criatura voluntaria del mundo de destino)",
    "duration": "6 horas",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta ocho voluntarios dormís 6 horas y despertáis en el mundo de las visiones; requiere un objeto mágico de ese mundo.",
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
    "name": "Arboleda Druidica",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "10 minutos",
    "range": "Toque",
    "components": "V, S, M (muérdago, que el conjuro consume, cortado con una hoz dorada a la luz de la luna llena)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Durante 24 horas, espíritus protegen un área al aire libre: niebla densa, vegetación trepadora y hasta cuatro guardianes-árbol animados.",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "oficio_druidico",
    "name": "Oficio Druidico",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Susurrando a los espíritos de la naturaleza, produces un efecto sensorial inofensivo, haces florecer una flor o predices el clima.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "diabo_da_poeira",
    "name": "Diablo de Polvo",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (una pizca de polvo)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Vórtice elemental en un cubo de 5 pies empuja a quien falle la salvación de Fuerza (1d8) y se mueve 30 pies con acción adicional. Niveles superiores: +1d8 por nivel sobre el 2º.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "tremor_de_terra",
    "name": "Temblor de Tierra",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (radio de 10 pies)",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Temblor en un radio de 10 pies: salvación de Destreza o 1d6 contundente y caída; el suelo suelto se vuelve terreno difícil. Niveles superiores: +1d6 por nivel sobre el 1º.",
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
    "name": "Agarre de la Tierra",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Bandas amarillas de energía sujeta a una criatura: salvación de Fuerza o su desplazamiento de vuelo baja a 0 y desciende 60 pies por ronda.",
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
    "name": "Terremoto",
    "level": 8,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "500 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Sismos en un radio de 100 pies durante 1 minuto: grietas, estructuras que se derrumban y criaturas que caen (salvaciones de Destreza/Fuerza).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "mordido_ardiloso",
    "name": "Mordida Astuta",
    "level": 0,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Ataque a distancia sombrío 1d10 psíquico.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "destruicao_elemental",
    "name": "Maldición Elemental",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Constitución: la criatura pierde la resistencia al tipo elegido y sufre +2d6 de ese tipo por turno, 1 minuto. Niveles superiores: +1 criatura por nivel sobre el 4º.",
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
    "name": "Arma Elemental",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Un arma no mágica gana +1 en ataques y +1d4 del tipo elemental elegido hasta 1 hora. Niveles superiores: espacios 5º–6º dan +2 y 2d4; 7º+ dan +3 y 3d4.",
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
    "name": "Codificar Pensamientos",
    "level": 0,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Transformas un recuerdo, idea o mensaje en un hilo de energía luminoso que dura 8 horas y puede guardarse o leerse.",
    "classes": [],
    "source": "ggr"
  },
  {
    "id": "inimigos_abundantes",
    "name": "Enemigos por Todas Partes",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Inteligencia y la criatura pierde la noción de amigo y enemigo, eligiendo blancos al azar; nueva salvación con cada daño; 1 minuto.",
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
    "name": "Enervación",
    "level": 5,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tentáculo de oscuridad: salvación de Destreza o 2d8 necróticos; con fallo, causas 4d8 por acción y curas la mitad. Niveles superiores: +1d8 por nivel sobre el 5º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "aprimorar_atributo",
    "name": "Mejorar Atributo",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (pelaje o pluma de una bestia)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "El toque concede una mejora mágica a un atributo a tu elección hasta 1 hora. Niveles superiores: +1 criatura por nivel sobre el 2º.",
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
    "name": "Aumentar/Reducir",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una pizca de hierro en polvo)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una criatura u objeto dobla o reduce a la mitad su tamaño por 1 minuto: ventaja o desventaja en pruebas de Fuerza y ±1d4 de daño.",
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
    "name": "Golpe Constriñor",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El próximo acerto con arma crea enredaderas: salvación de Fuerza o la criatura queda Agarrada y sufre 1d6 perforante por turno. Niveles superiores: +1d6 por nivel sobre el 1º.",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "herbacio",
    "name": "Hierbáceo",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S",
    "duration": "Concentración, hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Las plantas crean, las criaturas quedan en terreno difícil y caen al atravesarlo.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "cativar",
    "name": "Cautivar",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Una frase cautivadora: las criaturas que la oyen hacen salvación de Sabiduría o tienen desventaja en Percepción para notar a otros que no seas tú.",
    "classes": [
      "bardo",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "erupcao_de_terra",
    "name": "Erupción de Tierra",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un trozo de obsidiana)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Chorro de tierra y roca en un cubo de 20 pies causa 3d12 contundente (salvación de Destreza) y vuelve el suelo terreno difícil. Niveles superiores: +1d12 por nivel sobre el 3º.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mergulho_no_etereo",
    "name": "Mergullo en el Etéreo",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Entras en la frontera del Plano Etéreo y cruzas normalmente durante 8 horas, atravesando materiales y criaturas como un fantasma.",
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
    "name": "Tentáculos Negros",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tentáculos en un cuadrado de 20 pies vuelven el terreno difícil; las criaturas en el área sufren 3d6 de daño contundente y quedan Inmovilizadas (salvación de Destreza).",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "retirada_acelerada",
    "name": "Retirada Acelerada",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Corres a un ritmo increíble: puedes usar la acción de Correr como acción adicional en cada turno, hasta 10 minutos.",
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
    "name": "Ojos del Terror",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tus ojos ganan poder terrible: por ronda eliges una criatura hasta 60 pies — Dormida, Asustada, Confundida o Inconsciente (fallo en Sabiduría).",
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
    "name": "Fabricar",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "10 minutos",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Convierte materias primas en productos terminados (cuerda, ropa, arcos, etc.) en un volumen de hasta 100 pies cúbicos.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fogo_das_fadas",
    "name": "Fuego Feérico",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Objetos y criaturas en un cubo de 20 pies quedan con una luz contorneada (salvación de Destreza): los ataques tienen ventaja y la invisibilidad falla, 1 minuto.",
    "classes": [
      "artifice",
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "vitalidade_vazia",
    "name": "Vitalidad Falsa",
    "level": 1,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una pequeña cantidad de licor o bebida destilada)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Ganas 1d4+4 PV temporarios durante 1 hora con un vigor nigromántico falso. Niveles superiores: +5 PV temporarios por nivel sobre el 1º.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "passo_distante",
    "name": "Paso Lejano",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Te teletransportas hasta 60 pies a un espacio visible y puedes repetirlo como acción adicional en cada turno, por 1 minuto.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "amigos_imediatos",
    "name": "Amigos Inmediatos",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría y un humanoide que pueda verte y oírte queda Hechizado, dispuesto a ayudarte durante 1 hora. Niveles superiores: +1 criatura por nivel sobre el 3º.",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "medo",
    "name": "Miedo",
    "level": 3,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal (cono de 30 pies)",
    "components": "V, S, M (una pluma blanca o el corazón de una gallina)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "La imagen del peor miedo: las criaturas en un cono de 30 pies hacen salvación de Sabiduría o dejan caer lo que llevan, huyen e intentan escapar de ti.",
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
    "name": "Caída Suave",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Reacción",
    "range": "60 pies",
    "components": "V, M (una pluma pequeña o una pluma de ave)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Hasta cinco criaturas en caída descienden 60 pies por ronda, no sufren daño por caída y aterrizan de pie; reacción, 1 minuto.",
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
    "name": "Mente Segada",
    "level": 8,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "4d6 de daño psíquico y un fallo en Inteligencia deja a la criatura con Inteligencia y Carisma 1 (solo Disipación Mayor lo restaura).",
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
    "name": "Fingir Muerte",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pizca de tierra de cementerio)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Una criatura voluntaria finge estar muerta durante 1 hora: ciega, incapacitada, velocidad 0 y resistencia a todo daño salvo psíquico.",
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
    "name": "Encontrar Familiar",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "1 hora",
    "range": "10 pies",
    "components": "V, S, M (10 po en carbón, incienso y hierbas, quemados en un brasero de latón)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: convocas un espírito en forma de animal (cuervo, búho, gato, etc.), fiel a ti y vinculado telepáticamente a 100 pies.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "encontrar_montaria_maior",
    "name": "Encontrar Montaria Mayor",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "En 10 minutos invocas un espírito como montura leal (grifo, pegaso, lobo, rinoceronte, etc.), celestial, feérica o infernal.",
    "classes": [
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "encontrar_montaria",
    "name": "Encontrar Montaria",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "En 10 minutos invocas una montura leal (caballo de guerra, pony, camello, etc.), celestial, feérica o infernal, a 1 milla de ti.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "encontrar_o_caminho",
    "name": "Encontrar el Camino",
    "level": 6,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 24 horas",
    "concentration": true,
    "ritual": false,
    "description": "Sabes la ruta más directa hasta un lugar fijo y conocido en el mismo plano; para lugares en otro plano, solo dice si el camino existe.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "localizar_armadilhas",
    "name": "Localizar Trampas",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Percibes la presencia de una trampa a la vista en 120 pies y la naturaleza general del peligro, pero no su ubicación exacta.",
    "classes": [
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "dedo_da_morte",
    "name": "Dedo de la Muerte",
    "level": 7,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Energía negativa: 7d8 + 30 de daño necrótico (salvación de Constitución; mitad si tiene éxito); la criatura reducida a 0 PV por él muere.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_de_fogo",
    "name": "Rayo de Fuego",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Proyectil de fuego; ataque a distancia, 1d10 de daño de fuego.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_de_fogo",
    "name": "Escudo de Fuego",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Llamas te envuelven (luz en 10 pies); el toque causa 2d8 de daño de fuego o frío (tú eliges), o puedes causar el mismo daño al ser golpeado en cuerpo a cuerpo.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "tempestade_de_fogo",
    "name": "Tormenta de Fuego",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Una tempestada de llamas en hasta 10 cubos de 10 pies adyacentes: 7d10 de daño de fuego (salvación de Destreza; mitad si tiene éxito).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "bola_fogo",
    "name": "Bola de Fuego",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (un pedazo de polvo de tifón)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de 20 pies; 8d6 de fuego (mitad en DES, doblado en fallo).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_de_platina_de_fizban",
    "name": "Escudo de Platino de Fizban",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S, M (una escama de dragón bañada en platino, de al menos 500 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Campo plateado en una criatura a elegir: media cobertura, resistencia a ácido, frío, fuego, relámpago y veneno, y Evasión en salvaciones.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "flechas_de_chama",
    "name": "Flechas de Llama",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Hasta 12 municiones de un carcaj causan +1d6 de fuego en impactos a distancia. Niveles superiores: +2 municiones por espacio sobre el 3.",
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
    "name": "Hoja Llameante",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S, M (una espada de metal barato)",
    "duration": "Concentración, hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Crea un arma llameante que empuñas con acción adicional.",
    "classes": [
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_de_fogo",
    "name": "Golpe de Fuego",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Columna divina de fuego en un cilindro de 10 pies de radio: 4d6 de fuego + 4d6 de daño radiante (salvación de Destreza; mitad si tiene éxito).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_chamas",
    "name": "Esfera de Llamas",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S, M (una bola de grasa)",
    "duration": "Concentración, hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Esfera de fuego de 5 pies; 2d6 por turno (DES).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "carne_em_pedra",
    "name": "Carne en Piedra",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Fallo en Constitución: la criatura queda Inmovilizada mientras se endurece; otro fallo (o 3 fallos seguidos) la petrifica por completo.",
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
    "name": "Banda de Familiares",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Convocas 3 familiares que se comunican contigo telepáticamente y comparten sentidos a 1 milla. Niveles superiores: +1 familiar por espacio sobre el 2.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "voar",
    "name": "Volar",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pluma de águila)",
    "duration": "Concentración, hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "El objetivo vuela con un desplazamiento de 60 pies.",
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
    "name": "Nube de Niebla",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Niebla en una esfera de 20 pies de radio, altamente obstruida, que rodea las esquinas. Niveles superiores: +20 pies de radio por espacio sobre el 1.",
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
    "name": "Interdicción",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "10 minutos",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: protege hasta 40.000 pies cuadrados contra teletransporte y portales; las criaturas que crucen la frontera por magia reciben 5d12 de daño radiante o necrótico.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "jaula_de_forca",
    "name": "Jaula de Fuerza",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "100 pies",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Prisión de fuerza invisible (jaula abierta o caja sólida, hasta 20 pies): ningún objeto pasa, las criaturas no se teletransportan dentro; la caja bloquea incluso la adivinación.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "previsao",
    "name": "Previsión",
    "level": 9,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Durante 8 horas el objetivo no puede ser sorprendido y tiene ventaja en ataques, pruebas y salvaciones; los demás tienen desventaja contra él.",
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
    "name": "Favor de la Fortuna",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "60 pies",
    "components": "V, S, M (una perla blanca de al menos 100 po, consumida)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El destino concede 1d20 extra a elegir en un ataque, prueba o salvación, tuyos o contra un ataque recibido. Niveles superiores: +1 criatura por espacio sobre el 2.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "liberdade_de_movimento",
    "name": "Libertad de Movimiento",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Durante 1 hora el objetivo ignora el terreno difícil, no tiene su velocidad reducida ni queda Paralizado/Inmovilizado por medios mágicos.",
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
    "name": "Amigos",
    "level": 0,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S, M (un poco de maquillaje que te pones en la cara al conjurar)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Ventaja en pruebas de Carisma contra una criatura no hostil; al terminar, percibe la magia y se vuelve hostil contigo.",
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
    "name": "Dedos Helados",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (cono de 15 pies)",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Cono de 15 pies: 2d8 de frío (Constitución; mitad si tiene éxito) y congela líquidos no mágicos. Niveles superiores: +1d8 por espacio sobre el 1.",
    "classes": [
      "mago"
    ],
    "source": "rotf"
  },
  {
    "id": "brilho_radiante",
    "name": "Resplandor Radiante",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "5 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Centella arcana (rayo helado o relámpago) con efecto elemental leve.",
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
    "name": "Correo Veloz de Galder",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S, M (25 monedas de oro o bienes minerales equivalentes, consumidos)",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Un elemental del aire transparente lleva un baúl con tus objetos a una criatura que ya hayas visto, dondequiera que esté. Niveles superiores: con espacio de 8º, viaja a otro plano.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "torre_de_galder",
    "name": "Torre de Galder",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "30 pies",
    "components": "V, S, M (un fragmento de piedra, madera u otro material de construcción)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Torre de dos plantas, seca y climatizada, con una planta a tu elección; se deshace al terminar la duración. Niveles superiores: +1 planta por espacio sobre el 3.",
    "classes": [
      "mago"
    ],
    "source": "lok"
  },
  {
    "id": "forma_gasosa",
    "name": "Forma Gaseosa",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (un trozo de gasa y un hilo de humo)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "El blanco se convierte en niebla: vuelo de 10 pies, resistencia al daño no mágico y ventaja en FUE, DES y CON; pasa por rendijas, pero los líquidos son sólidos.",
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
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Abre un portal circular (5 a 20 pies) hasta un lugar preciso en otro plano; puedes invocar a una criatura específica diciendo su nombre verdadero.",
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
    "name": "Sello de Portal",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "60 pies",
    "components": "V, S, M (una clave de portal rota, consumida)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Cubo de 30 pies donde los portales se cierran y el viaje planar falla al entrar o salir. Niveles superiores: con espacio de 6º o superior, dura hasta ser disipado.",
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
    "school": "Encantamiento",
    "castingTime": "1 minuto",
    "range": "60 pies",
    "components": "V",
    "duration": "30 días",
    "concentration": false,
    "ritual": false,
    "description": "Impone una orden mágica durante 30 días; quien desobedezca recibe 5d10 de daño psíquico (1 vez por día) y el conjuro termina.",
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
    "name": "Reposo Suave",
    "level": 2,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pizca de sal y una moneda de cobre sobre cada ojo del cadáver, que deben permanecer allí)",
    "duration": "10 días",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: el cadáver no se corrompe ni se vuelve no-muerto, y los días bajo el efecto no cuentan para el límite de conjuros de resurrección.",
    "classes": [
      "clerigo",
      "paladino",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "inseto_gigante",
    "name": "Insecto Gigante",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Transforma ciempiés, arañas, avispas o un escorpión en versiones gigantes (p. ej. araña gigante) que te obedecen.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "dom_da_presteza",
    "name": "Don de la Presteza",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "El blanco puede sumar 1d8 a sus tiradas de iniciativa durante la duración.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "dom_da_labia",
    "name": "Don de la Labia",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Reacción",
    "range": "Personal",
    "components": "V, S, M (2 monedas de oro, consumidas como tarifa del conjuro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Reacción al hablar: las criaturas a 5 pies olvidan lo que dijiste en los últimos 6 segundos y solo recuerdan las palabras del componente verbal.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "desenvoltura",
    "name": "Desenvoltura",
    "level": 8,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Durante 1 hora sustituyes el resultado de las pruebas de Carisma por 15 y los conjuros de verdad siempre te consideran sincero.",
    "classes": [
      "bardo",
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "globo_de_invulnerabilidade",
    "name": "Globo de Invulnerabilidad",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Barrera inmóvil de 10 pies: los conjuros de nivel ≤ 5 lanzados desde fuera no afectan a quien está dentro; puedes conjurar normalmente desde dentro.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "glifo_de_protecao",
    "name": "Glifo de Protección",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M (incienso y polvo de diamante de al menos 200 po, consumidos)",
    "duration": "hasta ser disipado o activado",
    "concentration": false,
    "ritual": false,
    "description": "Glifo de hasta 10 pies armado por una condición: runas explosivas causan 5d8 (Destreza; mitad) o lanza el conjuro guardado. Niveles superiores: +1d8 por espacio sobre el 3.",
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
    "name": "Bayas Beneficiosas",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una rama de muérdago)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Aparecen hasta 10 frutos mágicos: cada uno cura 1 PV y nutre durante un día; pierden el efecto si no se comen en 24 horas.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "vinha_agarradora",
    "name": "Enredadera Agarradora",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "30 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Enredadera que mueves como acción adicional y que hace una agarrada: Destreza o la criatura es arrastrada 20 pies hacia ella.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "fissura_gravitacional",
    "name": "Fisura Gravitatoria",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (línea de 100 pies)",
    "components": "V, S, M (un puñado de limaduras de hierro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Línea de 100×5 pies: Constitución o 8d8 de fuerza (mitad si tiene éxito); quien esté a 10 pies también es arrastrado. Niveles superiores: +1d8 por espacio sobre el 6.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "sumidouro_gravitacional",
    "name": "Sumidero Gravitatorio",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (una bolita de mármol negro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de 20 pies que atrae a las criaturas al centro: Constitución o 5d10 de fuerza (mitad sin ser arrastrado). Niveles superiores: +1d10 por espacio sobre el 4.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "escorregadio",
    "name": "Resbaladizo",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gota de grasa)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Lámina de hielo en el suelo; las criaturas caen al entrar.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "invisibilidade_maior",
    "name": "Invisibilidad Mayor",
    "level": 4,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tú o una criatura tocada quedáis invisibles (todo lo que porta y lleva también) hasta que termine la duración.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "restauracao_maior",
    "name": "Restauración Mayor",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Neutraliza una condición debilitante: 1 nivel de agotamiento, quedar hechizado o petrificado, maldición, ceguera o sordera mágica.",
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
    "name": "Hoja de Llama Verde",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (radio de 5 pies)",
    "components": "S, M (un arma cuerpo a cuerpo de al menos 1 pl)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Golpe cuerpo a cuerpo; al impactar, una llama verde salta a una criatura a 5 pies (mod. de conjuro). Niveles superiores: +1d8 en el 5º, 2d8 en el 11º y 3d8 en el 17º.",
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
    "name": "Guardián de la Fe",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Un guardián espectral queda en un espacio libre; las criaturas hostiles que se acerquen sufren 20 de daño radiante y el guardián desaparece.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "guardiao_da_natureza",
    "name": "Guardián de la Naturaleza",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Un espíritu de la naturaleza te convierte en Bestia Primordial o Gran Árbol, con beneficios ofensivos o defensivos a tu elección.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "salvaguardas",
    "name": "Salvaguardas",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "10 minutos",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Protege hasta 2.500 pies cuadrados: cerraduras mágicas, corredores confusos, puertas clave, alarmas y otras salvaguardas de tu elección.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "guia",
    "name": "Guía",
    "level": 0,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": true,
    "ritual": false,
    "description": "El objetivo suma 1d4 a su próxima prueba de característica.",
    "classes": [
      "artifice",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "guia_sagrada",
    "name": "Dardo Guiado",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Ataque a distancia; 4d6 radiante y el próximo ataque contra el objetivo tiene ventaja.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "sopro",
    "name": "Soplo",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Empujas una criatura u objeto hasta 5 pies, soplas un sonido a distancia o produces otro efecto menor de viento a elección.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sopro_de_vento",
    "name": "Ráfaga de Viento",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (línea de 60 pies)",
    "components": "V, S, M (una semilla de leguminosa)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Línea de 60×10 pies de viento fuerte: Fuerza o 15 pies de empuje, cuesta el doble avanzar contra él y dispersa gases.",
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
    "name": "Lluvia de Espinas",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El próximo acerto con arma a distancia suelta espinas: Destreza o 1d10 perforante en el blanco y a 5 pies. Niveles superiores: +1d10 por espacio sobre el 1 (máx. 6d10).",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "consagrar",
    "name": "Consagrar",
    "level": 5,
    "school": "Evocación",
    "castingTime": "24 horas",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Santifica un área (radio de 60 pies) durante 36 horas: los no-muertos y los infernales no pueden entrar; las criaturas elegidas tienen desventaja en pruebas de Carisma contra magia.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "terreno_alucinatorio",
    "name": "Terreno Alucinatorio",
    "level": 4,
    "school": "Ilusión",
    "castingTime": "10 minutos",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Un cubo de terreno natural de 150 pies parece, suena y huele diferente; las criaturas que lo examinen de cerca perciben la ilusión con una prueba.",
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
    "name": "Maleficio",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Suelta una enfermedad virulenta: 14d6 de daño necrótico (salvación de Constitución; mitad si tiene éxito), limitado al máximo de PV del objetivo; la criatura reducida a la mitad de sus PV queda Enferma.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "velocidade",
    "name": "Velocidad",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gota de trementina)",
    "duration": "Concentración, hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "+40 pies de desplazamiento, acción extra y +2 en la CA.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "curar",
    "name": "Curar",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo recupera 70 PV y termina ceguera, sordera y enfermedades; no funciona en constructos o no-muertos.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "espirito_curativo",
    "name": "Espíritu Curativo",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Un espíritu en un cubo de 5 pies cura 1d6 PV a quien entre o empiece su turno allí (mín. 2 curas). Niveles superiores: +1d6 por espacio sobre el 2.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_curativa",
    "name": "Palabra de Curación",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Recupera 1d4+mod. de PV a distancia con acción adicional.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "aquecer_metal",
    "name": "Calentar Metal",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un trozo de hierro y una llama)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Objeto metálico al rojo: 2d8 de fuego a quien lo sostenga (Constitución o lo suelta), repetible como acción adicional. Niveles superiores: +1d8 por espacio sobre el 2.",
    "classes": [
      "artifice",
      "bardo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "replica_infernal",
    "name": "Réplica Infernal",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Reacción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Reacción al daño: llamas infernales al agresor, 2d10 de fuego (Destreza; mitad si tiene éxito). Niveles superiores: +1d10 por espacio sobre el 1.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "banquete_de_herois",
    "name": "Banquete de Héroes",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un banquete para hasta 13 criaturas: tras 1 hora de consumo, PV máximos +2d10, inmunidad al veneno y ventaja en pruebas de Sabiduría durante 24 horas.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "heroismo",
    "name": "Heroísmo",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El blanco es inmune al miedo y gana PV temporarios iguales a tu mod. de conjuro al inicio de cada turno. Niveles superiores: +1 criatura por espacio sobre el 1.",
    "classes": [
      "bardo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "maldicao",
    "name": "Maldición",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción adicional",
    "range": "90 pies",
    "components": "V, S, M (el ojo petrificado de una lagartija)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Marca al blanco: +1d6 necrótico por impacto y desventaja en pruebas de una habilidad elegida. Niveles superiores: dura hasta 8h (3º–4º) o 24h (5º+).",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "imobilizar_monstro",
    "name": "Inmovilizar Monstruo",
    "level": 5,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o la criatura queda Paralizada; repite la salvación al final de cada turno. No afecta a no-muertos.",
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
    "name": "Inmovilizar Persona",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un trozo de hierro pequeño y recto)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o un humanoide queda Paralizado, con nueva salvación al final de cada turno. Niveles superiores: +1 humanoide por espacio sobre el 2.",
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
    "name": "Aura Sagrada",
    "level": 8,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Luz sagrada en 30 pies: las criaturas elegidas tienen ventaja en salvaciones y brillan; los no-muertos y los infernales que te ataquen de cerca tienen desventaja y quedan Ciegos si fallan su Constitución.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "arma_sagrada",
    "name": "Arma Sagrada",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "El arma brilla y causa +2d8 radiante; como acción adicional puede explotar: 4d8 radiante y Ceguera (Constitución; mitad si tiene éxito) en 30 pies.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "xge"
  },
  {
    "id": "fome_de_hadar",
    "name": "Hambre de Hadar",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (un tentáculo de pulpo en conserva)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Esfera de 20 pies sin luz y con terreno difícil: ciega a quien esté dentro, 2d6 de frío al iniciar y 2d6 de ácido al terminar el turno allí.",
    "classes": [
      "bruxo"
    ],
    "source": "phb"
  },
  {
    "id": "marca_do_cacador",
    "name": "Marca del Cazador",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción adicional",
    "range": "90 pies",
    "components": "V",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Marca a la presa: +1d6 de daño por impacto y ventaja en Percepción o Supervivencia para encontrarla. Niveles superiores: dura hasta 8h (3º–4º) o 24h (5º+).",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "padrao_hipnotico",
    "name": "Patrón Hipnótico",
    "level": 3,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "S, M (un palo de incienso brillante o un frasco de cristal con material fosforescente)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Patrón en un cubo de 30 pies: Sabiduría o la criatura queda Hechizada, incapacitada y con desplazamiento 0; el daño o una acción para despertar lo termina.",
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
    "name": "Puñalada de Hielo",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S, M (una gota de agua o un trozo de hielo)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ataque a distancia: 1d10 perforante; luego explota, 2d6 de frío (Destreza; mitad) en el blanco y a 5 pies. Niveles superiores: +1d6 por espacio sobre el 1.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "tempestade_de_gelo",
    "name": "Tormenta de Hielo",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Granizo en un cilindro de 20 pies de radio: 2d8 de daño contundente y 4d6 de daño frío (salvación de Destreza; mitad si tiene éxito, sin daño contundente con éxito).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "identificar",
    "name": "Identificar",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M (una perla de al menos 100 po y una pluma de búho)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: tocas un objeto durante la conjuración y aprendes sus propiedades mágicas, necesidad de sintonía, cargas y conjuros activos.",
    "classes": [
      "artifice",
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "dragao_ilusorio",
    "name": "Dragón Ilusorio",
    "level": 8,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Dragón sombrío Enorme: salvación de Sabiduría o Asustado, 1 minuto; acción adicional lo mueve y escupe un cono de 60 pies con 7d6 (Inteligencia; mitad).",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "escrita_ilusoria",
    "name": "Escritura Ilusoria",
    "level": 1,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "S, M (una tinta a base de plomo de al menos 10 po, consumida)",
    "duration": "10 días",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: el texto parece normal solo para ti y para quien designes; para los demás es escrita desconocida u otro mensaje. La Visión verdadera lo lee todo.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "imolacao",
    "name": "Inmolación",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Llamas envuelven al blanco: Destreza o 8d6 de fuego y sigue ardiendo (4d6 en cada fallo) hasta superarlo; si muere, queda en cenizas.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "objeto_imovel",
    "name": "Objeto Inamovible",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (polvo de oro de al menos 25 po, consumido)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Objeto de hasta 10 libras queda fijo en el lugar; una prueba de Fuerza (CD) lo mueve 10 pies. Niveles superiores: CD +5 y 24h (4º–5º); CD +10 y permanente (6º+).",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "aprisionar",
    "name": "Aprisionar",
    "level": 9,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Aprisiona a una criatura (salvación de Sabiduría) en movimiento, estasis, lentitud, prisión o destierro; una gema de 500 pp sirve como componente y es destruida.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nuvem_incendiaria",
    "name": "Nube Incendiaria",
    "level": 8,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Nube de humo y ascuas en un radio de 20 pies: 10d8 de daño de fuego por turno a quien esté dentro (salvación de Destreza; mitad si tiene éxito).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "incitar_ganancia",
    "name": "Incitar Avaricia",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gema de al menos 50 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Las criaturas que te ven hacen salvación de Sabiduría o quedan Hechizadas y solo avanzan hacia ti; a 5 pies contemplan la gema sin moverse.",
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
    "name": "Convocar Diablos",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "90 pies",
    "components": "V, S, M (un rubí de al menos 999 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Convocas un diablo de Nivel de Desafío 6 o inferior, hostil; las órdenes exigen una prueba de Carisma disputada. Niveles superiores: +1 de Desafío por espacio sobre el 5.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "infestacao",
    "name": "Infestación",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una pulga viva)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Salvación de Constitución o 1d6 de veneno y la criatura camina 5 pies en dirección aleatoria. Niveles superiores: 2d6 en el nivel 5, 3d6 en el 11 y 4d6 en el 17.",
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
    "name": "Heridas Causadas",
    "level": 1,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ataque cuerpo a cuerpo con conjuro; 3d10 necrótico.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "praga_de_insetos",
    "name": "Plaga de Insectos",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Enjambre de langostas en una esfera de 20 pies: terreno difícil, visión ligeramente obstruida y 4d10 de daño contundente por turno a quien esté allí (salvación de Destreza).",
    "classes": [
      "clerigo",
      "druida",
      "feiticeiro"
    ],
    "source": "phb"
  },
  {
    "id": "fortaleza_do_intelecto",
    "name": "Fortaleza del Intelecto",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Tú o una criatura voluntaria ganáis resistencia al daño psíquico y ventaja en salvaciones de INT, SAB y CAR. Niveles superiores: +1 criatura por espacio sobre el 3.",
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
    "name": "Investidura de Llamas",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Llamas en el cuerpo (luz de 30 pies): inmune al fuego y puedes gastar tu acción para causar 4d8 de fuego en un cono de 15 pies (Destreza; mitad si tiene éxito).",
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
    "name": "Investidura de Hielo",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Hielo cubre tu cuerpo: el suelo a 10 pies es difícil para otros y, con tu acción, un cono de 15 pies causa 4d6 de frío (Constitución; mitad).",
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
    "name": "Investidura de Piedra",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Resistes el daño físico no mágico; con tu acción, un terremoto de 15 pies derriba criaturas (Destreza) y atraviesas tierra y roca sólidas.",
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
    "name": "Investidura de Viento",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Los ataques a distancia tienen desventaja contra ti y vuelas a 60 pies; con tu acción, un cubo de 15 pies causa 2d10 contundente (Constitución).",
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
    "name": "Invisibilidad",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una lente de vidrio)",
    "duration": "Concentración, hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Objetivo invisible; se rompe con ataque o conjuro.",
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
    "name": "Invulnerabilidad",
    "level": 9,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (un trozo de adamantino de 500 po, consumido)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Mientras dure el conjuro, eres inmune a cualquier daño, incluso al proveniente de la magia.",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "moeda_brilhante_de_jim",
    "name": "Moneda Brillante de Jim",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S, M (una moneda y 2 po, consumidos como tarifa)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "La moneda lanzada brilla como con Luz; las criaturas a 30 pies fallan la salvación de Sabiduría y quedan distraídas, con desventaja en Percepción e Iniciativa.",
    "classes": [
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "misseis_magicos_de_jim",
    "name": "Misiles Mágicos de Jim",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (1 po, consumido como tarifa)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "3 dardos con ataque a distancia causan 2d4 de fuerza cada uno; en un 1 natural, vuelven contra ti. Niveles superiores: 1 dardo extra por nivel sobre el 1º.",
    "classes": [
      "mago"
    ],
    "source": "ai"
  },
  {
    "id": "salto",
    "name": "Salto",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pata de saltamontes)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo salta 3 veces más lejos.",
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
    "name": "Impulso Cinético",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Pasos danzantes dan +10 pies de desplazamiento, ignoran ataques de oportunidad y permiten atravesar el espacio de otras criaturas.",
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
    "name": "Forzar",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Abre puertas, cofres y grilletes a distancia y anula Cerradura Arcana durante 10 minutos; un estruendo se oye a 300 pies.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lenda",
    "name": "Leyenda",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "10 minutos",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Nominas a una persona, lugar u objeto y recibes un resumen del conocimiento legendario sobre él (actuales, olvidados o secretos).",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "cofre_secreto",
    "name": "Cofre Secreto",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esconde un arcón y su contenido en el Plano Etéreo; usando la miniatura, lo convocas de vuelta (hasta 20 pies del lugar).",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequeno_refugio",
    "name": "Pequeño Refugio",
    "level": 3,
    "school": "Evocación",
    "castingTime": "1 minuto",
    "range": "Personal (hemisferio de 10 pies de radio)",
    "components": "V, S, M (una pequeña cuenta de cristal)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": true,
    "description": "Cúpula de fuerza inmóvil de 10 pies de radio alberga hasta 9 criaturas Medianas: opaca por fuera, transparente por dentro, con aire seco y confortable.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "restauracao_menor",
    "name": "Restauración Menor",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tocas una criatura y terminas una enfermedad o una condición: ceguera, sordera, parálisis o envenenamiento.",
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
    "name": "Levitación",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un anillo de cuero o alambre dorado con forma de taza)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Una criatura u objeto suelto de hasta 500 lb sube hasta 20 pies y flota; solo se mueve empujando superficies fijas (salvación de Constitución).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transmissao_de_vida",
    "name": "Transmisión de Vida",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Sufres 4d8 de daño necrótico irreducible y una criatura visible recupera el doble en PV. Niveles superiores: +1d8 por nivel superior al 3º.",
    "classes": [
      "clerigo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "luz",
    "name": "Luz",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, M (una varita de luz)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Un objeto brilla como una antorcha (luz ámbar 20 pies, penumbra 20 pies).",
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
    "name": "Flecha de Relámpago",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu próximo ataque a distancia se vuelve rayo: 4d8 eléctrico al objetivo y 2d8 (Destreza) a los vecinos de 10 pies. Niveles superiores: +1d8 en cada daño por nivel superior al 3º.",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "relampago",
    "name": "Relámpago",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (una pluma de agachadiza)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Línea eléctrica de 100 pies; 2d8 de daño eléctrico (mitad en DES).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "isca_de_relampago",
    "name": "Isca de Relámpago",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (radio de 15 pies)",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Latigazo de relámpago: atrae a una criatura 10 pies hacia ti (Fuerza) e inflige 1d8 eléctrico si termina a 5 pies. Niveles superiores: +1d8 en los niveles 5, 11 y 17.",
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
    "name": "Localizar Animales o Plantas",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (un poco de pelo de sabueso)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: conoces la dirección y la distancia del animal o planta de ese tipo más cercano, hasta 5 millas.",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "localizar_criatura",
    "name": "Localizar Criatura",
    "level": 4,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Percibe la dirección de una criatura familiar hasta 1.000 pies; si se mueve, sabes hacia dónde.",
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
    "name": "Localizar Objeto",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una rama bifurcada)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Sientes la dirección de un objeto familiar o del más cercano de ese tipo, hasta 1.000 pies; el plomo en el camino bloquea el efecto.",
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
    "name": "Pasos Largos",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una pizca de tierra)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo tocado gana +10 pies de desplazamiento durante 1 hora. Niveles superiores: 1 criatura extra por nivel superior al 1º.",
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
    "name": "Oscuridad Enloquecedora",
    "level": 8,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, M (una gota de alquitrán con una gota de mercurio)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Oscuridad mágica de 60 pies de radio bloquea la luz de hasta el 8º nivel e inflige 8d8 psíquicos a quien inicie su turno allí (Sabiduría; mitad).",
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
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (papel o hoja con forma de embudo)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Agua de 5 pies gira en 30 pies de radio: terreno difícil y 6d6 de daño contundente (Fuerza) a quien inicie su turno allí, siendo atraído 10 pies al centro.",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "armadura_magica",
    "name": "Armadura Mágica",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una aguja de coser)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Un objetivo sin armadura tiene CA 13 + mod. de DES.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "magem_maos",
    "name": "Mano de Mago",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Mano espectral débil que manipula objetos a distancia.",
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
    "name": "Círculo Mágico",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "10 pies",
    "components": "V, S, M (agua bendita o plata y hierro de 100 po, consumidos)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Cilindro de 10 pies de radio repele o aprisiona celestiales, elementales, seres feéricos, infernales y no-muertos. Niveles superiores: +1 hora por nivel superior al 3º.",
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
    "name": "Frasco Mágico",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "1 minuto",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Tu alma deja el cuerpo y entra en un frasco; puedes poseer a una criatura hasta 120 pies (salvación de Carisma), pero el cuerpo original queda indefenso.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "misseis_magicos",
    "name": "Misiles Mágicos",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "3 dardos luminosos; impacto automático, 1d4+1 de daño cada uno.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "boca_encantada",
    "name": "Boca Mágica",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S, M (panal de miel y polvo de jade de 10 po, consumidos)",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: graba un mensaje de hasta 25 palabras en un objeto y lo recita una boca mágica cuando se cumple una condición visual o sonora a 30 pies.",
    "classes": [
      "artifice",
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pedra_magica",
    "name": "Piedra Mágica",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 3 piedras ganan ataque a distancia: 1d6 contundente + mod. de conjuro, usando el bono de ataque de quien las lanza.",
    "classes": [
      "artifice",
      "druida",
      "bruxo"
    ],
    "source": "xge"
  },
  {
    "id": "arma_magica",
    "name": "Arma Mágica",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Un arma no mágica gana +1 en tiradas de ataque y daño. Niveles superiores: +2 con espacio de nivel 4º y +3 con espacio de 6º.",
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
    "name": "Gravedad Ampliada",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Gravedad duplicada en una esfera de 10 pies: 2d8 de fuerza y medio desplazamiento (Constitución; mitad si tiene éxito). Niveles superiores: +1d8 por nivel superior al 1º.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "imagem_maior",
    "name": "Imagen Mayor",
    "level": 3,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un montón de lana)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Ilusión realista de hasta 20 pies cúbicos, con sonido, olor y temperatura, movida con tu acción. Niveles superiores: con espacio de nivel 6º, dura hasta ser disipada.",
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
    "name": "Curación en Masa",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 6 criaturas en una esfera de 30 pies recuperan 3d8 + modificador de atributo de conjuración de PV.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "cura_massiva",
    "name": "Curación Masiva",
    "level": 9,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Restaura hasta 700 PV repartidos como quieras entre criaturas visibles y cura todas las enfermedades y la ceguera/sordera mágica.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_curativa_em_massa",
    "name": "Palabra Curativa en Masa",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 6 criaturas visibles recuperan 1d4 + mod. de conjuro de PV. Niveles superiores: +1d4 por nivel superior al 3º.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "polimorfia_em_massa",
    "name": "Polimorfismo en Masa",
    "level": 9,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (una crisálida de oruga)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Transforma hasta 10 criaturas visibles en bestias que ya hayas visto (Sabiduría); cada una gana PV temporarios iguales a los de la forma.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sugestao_em_massa",
    "name": "Sugestión en Masa",
    "level": 6,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Sugiere una actividad (una o dos frases) a hasta 12 criaturas que pueden oírte y comprenderte; siguen la sugerencia hasta 24 horas o hasta terminar la tarea.",
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
    "name": "Garra Terrestre de Maximillian",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una miniatura de mano de barro)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una mano de tierra agarra a una criatura: Fuerza o 2d6 contundente y queda Inmovilizada; con acción, la aplasta por 2d6 (Fuerza, mitad) hasta escapar con prueba de Fuerza.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "labirinto",
    "name": "Laberinto",
    "level": 8,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Aprisiona a una criatura en un demiplano laberíntico durante 10 minutos; solo escapa con una acción y una prueba de Inteligencia CD 20, o con un conjuro como Cambio de Plano.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mesclar_se_as_rochas",
    "name": "Fundirse con la Piedra",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: te fundes con un objeto o superficie de piedra durante 8 horas; si la piedra es destruida, eres expulsado con 6d6 de daño contundente.",
    "classes": [
      "clerigo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "flecha_acida_de_melf",
    "name": "Flecha Ácida de Melf",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (polvo de hoja de ruibarbo y estómago de víbora)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ataque a distancia: 4d4 de ácido al instante y 2d4 al final de tu próximo turno (mitad si fallas). Niveles superiores: +1d4 en cada daño por nivel superior al 2º.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequenos_meteoros_de_melf",
    "name": "Pequeños Meteoros de Melf",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (nitro, azufre y alquitrán de pino)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Creas 6 meteoros en órbita; con acción adicional, lanza 1 o 2 a hasta 120 pies: 2d6 de fuego en 5 pies (Destreza). Niveles superiores: +2 meteoros por nivel superior al 3º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "reparar",
    "name": "Reparar",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M (dos imanes)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Repara una única rotura o rasgón de hasta 1 pie en un objeto tocado, sin dejar vestigios; no restaura la magia de los objetos.",
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
    "name": "Prisión Mental",
    "level": 6,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Fallo en la salvación de Inteligencia: 5d10 psíquicos y el objetivo queda Inmovilizado en una ilusión; cruzarla causa 10d10 psíquicos y termina el conjuro.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mensagem",
    "name": "Mensaje",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un trozo corto de alambre de cobre)",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Susurras un mensaje a una criatura que puede responderte solo a ti; atraviesa objetos, pero no plomo, 1 pie de piedra o metal.",
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
    "name": "Enjambre de Meteoros",
    "level": 9,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "1 milla",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Cuatro bolas de fuego explodan en puntos hasta 1 milla: esferas de 40 pies con 20d6 de daño de fuego cada una (salvación de Destreza; mitad si tiene éxito).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "fortaleza_poderosa",
    "name": "Fortaleza Poderosa",
    "level": 8,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "1 milla",
    "components": "V, S, M (un diamante de 500 po, consumido)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ergues una fortaleza de piedra de 120 pies con torres, muralla y castillo; se derrumba en 7 días, salvo que la conjures un año en el mismo punto.",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mente_em_branco",
    "name": "Mente en Blanco",
    "level": 8,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Durante 24 horas el objetivo es inmune al daño psíquico, a la lectura de pensamientos, a quedar hechizado, a la adivinación y hasta al propio Deseo (salvo que tú seas el conjurador).",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lasca_mental",
    "name": "Lasca Mental",
    "level": 0,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Fallo en Inteligencia: 1d6 psíquicos y -1d4 en su próxima salvación. Niveles superiores: 2d6 (5º), 3d6 (11º) y 4d6 (17º).",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "golpe_mental",
    "name": "Golpe Mental",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Fallo en Sabiduría: 3d8 psíquicos (mitad si tiene éxito) y sabes dónde está el objetivo. Niveles superiores: +1d8 por nivel superior al 2º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "ilusao_menor",
    "name": "Ilusión Menor",
    "level": 0,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (hilo)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Sonido, imagen o pequeña ilusión sensorial.",
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
    "name": "Miraje Arcano",
    "level": 7,
    "school": "Ilusión",
    "castingTime": "10 minutos",
    "range": "A la vista",
    "components": "V, S",
    "duration": "10 días",
    "concentration": false,
    "ritual": false,
    "description": "Cambia la apariencia de hasta 1 cuadrado de milla de terreno (parece, huele y suena diferente), pero mantiene la forma general; las personas que lo toquen perciben la ilusión.",
    "classes": [
      "bardo",
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "espelho_sombrio",
    "name": "Imagen Oposta",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "3 imágenes ilusorias; el ataque falla o se redirige.",
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
    "name": "Engaño",
    "level": 5,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Te vuelves invisible y una dupla ilusoria aparece en tu lugar; dura 1 hora y puedes moverla como acción, pero atacar o conjurar rompe la invisibilidad.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "passo_nebuloso",
    "name": "Paso Nebuloso",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Envolto en niebla plateada, te teletransportas hasta 30 pies a un espacio desocupado que puedas ver.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "modificar_memoria",
    "name": "Modificar Memoria",
    "level": 5,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría (con ventaja si estás luchando con él) o queda Hechizado; eliges el recuerdo y puedes eliminarlo o alterarlo.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "moldar_terra",
    "name": "Moldar Tierra",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "S",
    "duration": "Instantáneo o 1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Manipulas un cubo de 5 pies de tierra o piedra: lo mueves, excavas o endureces; los efectos duraderos duran 1 hora y solo hay 2 activos.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "raio_lunar",
    "name": "Rayo Lunar",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (semillas lunares y un trozo de feldespato opalescente)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Cilindro de 5 pies: 2d10 radiante (Constitución) a quien entre o empiece su turno allí. Niveles superiores: +1d10 por nivel superior al 2º.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "cao_de_guarda_leal",
    "name": "Perro de Guarda Leal",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Perro espectral de guardia invisible (excepto para ti); ladra y muerde a quien se acerque a 5 pies (4d8 de daño perforante cada 30 segundos).",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "mansao_magnifica",
    "name": "Mansión Magnífica",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Conjura una moradia extradimensional (13 invitados + sirvientes mágicos) con entrada en un resplandor de 5×10 pies; dura 24 horas.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "santuario_particular",
    "name": "Santuario Particular",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "10 minutos",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Vuelve segura un área (cubo de 5 a 100 pies): las barreras mágicas bloquean el paso, el sonido y la luz entran solo si tú lo permites, las criaturas no son adivinadas por magia.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "espada_arcana",
    "name": "Espada Arcana",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una espada de fuerza flota y ataca a tu mando (3d10 de daño de fuerza por golpe, +8 en el ataque) y no provoca ataques de oportunidad.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "discurso_motivador",
    "name": "Discurso Motivador",
    "level": 3,
    "school": "Encantamiento",
    "castingTime": "1 minuto",
    "range": "60 pies",
    "components": "V",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 5 criaturas que te oyen ganan 5 PV temporarios y ventaja en salvaciones de Sabiduría durante 1 hora. Niveles superiores: +5 PV por nivel superior al 3º.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "ai"
  },
  {
    "id": "mover_a_terra",
    "name": "Mover la Tierra",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 2 horas",
    "concentration": true,
    "ritual": false,
    "description": "Modela tierra, arena o barro en un área de hasta 40 pies: elevar/bajar terreno, abrir zanjas, levantar parapetos y derrumbar estructuras.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "travessuras_de_nathair",
    "name": "Travesuras de Nathair",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "S, M (una corteza de tarta de manzana)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Llenas un cubo de 20 pies con magia feérica y dracónica: tira en la tabla de Travesuras cada turno y puedes mover el cubo 10 pies.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "inundacao_de_energia_negativa",
    "name": "Inundación de Energía Negativa",
    "level": 5,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, M (un hueso roto y seda negra)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Fallo en Constitución: 5d12 necróticos (mitad) y un muerto vuelve como zumbi; a un no-muerto le da PV temporarios por la mitad.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "indetectavel",
    "name": "Indetectable",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (polvo de diamante de 25 po, consumido)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Oculta a una criatura, lugar u objeto de hasta 10 pies a la adivinación y a los sensores de espionaje durante 8 horas.",
    "classes": [
      "bardo",
      "patrulheiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "manto_do_esquecimento",
    "name": "Manto del Olvido",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una toalla)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Crea un campo que impide la adivinación.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_congelante",
    "name": "Esfera Congelante",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un globo de frío explota en un radio de 60 pies: 10d6 de daño frío (salvación de Constitución; mitad si tiene éxito) y puede congelar el agua a 6 pulgadas de profundidad.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_resistente",
    "name": "Esfera Resistente",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera de fuerza encierra a una criatura u objeto Grande o menor (salvación de Destreza); es a prueba de magia y flota, pero el objetivo puede respirar.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "danca_irresistivel",
    "name": "Danza Irresistible",
    "level": 6,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "La criatura baila sin parar: no puede reaccionar, tiene desventaja en salvaciones y CA, y sufre +2d6 de daño de quien la ataque.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "anjos_terror",
    "name": "Pasos sin Rastro",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": true,
    "ritual": false,
    "description": "El objetivo no deja rastros y no puede ser rastreado por magia.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "passagem",
    "name": "Pasaje",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Abre un pasaje de hasta 5 pies de ancho, 8 de alto y 20 de profundidad en una superficie de madera, yeso o piedra; cabezas de tornillo lo mantienen cerrado para quien no conoce la palabra de exclusión.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "forca_espectral",
    "name": "Fuerza Espectral",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un montón de lana)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Fallo en Inteligencia: ilusión de hasta 10 pies cúbicos visible solo para el objetivo, que puede sufrir 1d6 psíquicos por turno si le hiere.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "assassino_fantasmagorico",
    "name": "Asesino Fantasmagórico",
    "level": 4,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "La ilusión de los temores del objetivo: fallo en Sabiduría causa miedo y 4d10 de daño psíquico al inicio de cada turno; si tiene éxito, la ilusión lo distrae con desventaja.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "montaria_fantasmagorica",
    "name": "Montura Fantasmagórica",
    "level": 3,
    "school": "Ilusión",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: creas un caballo casi real con 100 pies de desplazamiento; se desvanece en 1 minuto al terminar o si recibe cualquier daño.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "aliado_planar",
    "name": "Aliado Planar",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "10 minutos",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Suplicas a una divinidad o entidad cósmica ayuda: envía a un ser celestial, elemental o infernal fiel, que puede exigirte un servicio a cambio.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "vinculacao_planar",
    "name": "Vinculación Planar",
    "level": 5,
    "school": "Abjuración",
    "castingTime": "1 hora",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Intenta atar a un ser celestial, elemental, feérico o infernal a tu servicio durante 24 horas (salvación de Carisma del objetivo, con modificaciones por lazos de protección).",
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
    "name": "Cambio de Plano",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta 8 criaturas que se sostienen en círculo sois transportados a otro plano; una varita de metal se dobla cuando el conjuro se lanza por error.",
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
    "name": "Crecimiento de Plantas",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción u 8 horas",
    "range": "150 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Con 1 acción, la vegetación densa en 100 pies cuesta 4 pies de movimiento por pie; con 8 horas, enriquece la tierra durante 1 año y duplica la cosecha.",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rajada_de_veneno",
    "name": "Ráfaga de Veneno",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Gas nauseabundo: salvación de Constitución o 1d12 de daño venenoso. Niveles superiores: 2d12 (5º), 3d12 (11º) y 4d12 (17º).",
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
    "name": "Polimorfia",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Transforma a una criatura en una bestia de CA ≤ tu nivel; la involuntaria resiste con Sabiduría; las estadísticas son las de la forma, pero la mente es la original.",
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
    "name": "Palabra de Poder: Sanar",
    "level": 9,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo tocado recupera todos sus PV y se libera de Hechizado, Asustado, Paralizado o Aturdido; si está en el suelo, se levanta con reacción.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "palavra_de_poder_matar",
    "name": "Palabra de Poder: Matar",
    "level": 9,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Si la criatura tiene 100 PV o menos, muere instantáneamente; de lo contrario, el conjuro no tiene efecto.",
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
    "name": "Palabra de Poder: Dolor",
    "level": 7,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Con 100 PV o menos, su desplazamiento es de 10 pies y tiene desventaja en ataques, pruebas y salvaciones hasta superar una salvación de Constitución al final de su turno.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_de_poder_atordoar",
    "name": "Palabra de Poder: Aturdir",
    "level": 8,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Si la criatura tiene 150 PV o menos, queda Aturdida; se recupera en un minuto salvo que tenga éxito en una prueba de Constitución.",
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
    "name": "Oración de Curación",
    "level": 2,
    "school": "Evocación",
    "castingTime": "10 minutos",
    "range": "30 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 6 criaturas que ves recuperan 2d8 + mod. de conjuro de PV; no-muertos y constructos no se benefician. Niveles superiores: +1d8 por nivel.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "prestidigitacao",
    "name": "Prestidigitación",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Efectos menores de truco: limpiar, calentar, oler, marcar, alterar la apariencia.",
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
    "name": "Salvajismo Primitivo",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tus dientes o uñas se afilan: ataque mágico cuerpo a cuerpo a 5 pies con 1d10 de daño ácido. Niveles superiores: +1d10 en los niveles 5, 11 y 17.",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "salvaguarda_primordial",
    "name": "Salvaguarda Primordial",
    "level": 6,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Resistes ácido, frío, fuego, relámpago y trueno; al sufrir ese daño, puedes usar una reacción para ganar inmunidad al tipo hasta el fin de tu próximo turno.",
    "classes": [
      "druida"
    ],
    "source": "xge"
  },
  {
    "id": "spray_prismatico",
    "name": "Chorro Prismático",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ocho rayos coloridos (d8 por objetivo) en un cono de 60 pies, cada uno con efecto propio: daño, piedra, ceguera, destierro, confusión, miedo o desintegración.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_prismatico",
    "name": "Muro Prismático",
    "level": 9,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Pared o esfera multicolorida de hasta 90×30 pies: siete capas con efectos propios (daño, destierro, piedra, ceguera, confusión, miedo y desintegración) contra quien la atraviese.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "criar_chamas",
    "name": "Crear Llamas",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Una llama en tu mano ilumina 10 pies y puede lanzarse (ataque a distancia, 1d8 de fuego). Niveles superiores: +1d8 en los niveles 5, 11 y 17.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "ilusao_programada",
    "name": "Ilusión Programada",
    "level": 6,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta ser disipada",
    "concentration": false,
    "ritual": false,
    "description": "Crea una ilusión de hasta un cubo de 30 pies que permanece invisible hasta que se cumpla una condición elegida por ti, momento en el que se manifiesta durante 5 minutos.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "projetar_imagem",
    "name": "Proyectar Imagen",
    "level": 7,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "500 millas",
    "components": "V, S, M",
    "duration": "Hasta 24 horas",
    "concentration": true,
    "ritual": false,
    "description": "Una duplicata ilusión tuya aparece en un lugar que ya has visto (hasta 500 millas); ves y oyes por ella, pero es intangible — los ataques contra ella revelan que es una ilusión.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "protecao_contra_energia",
    "name": "Protección contra la Energía",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "La criatura que tocas resiste un tipo de daño a tu elección: ácido, frío, fuego, relámpago o trueno, durante el conjuro.",
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
    "name": "Protección contra el Bien y el Mal",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (agua bendita o plata y hierro en polvo, consumidos por el conjuro)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "La criatura que tocas queda protegida contra aberraciones, celestiales, elementales, seres feéricos, diablos y no-muertos, con desventaja en los ataques contra ella.",
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
    "name": "Protección contra el Veneno",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Tocas una criatura: si está envenenada, neutraliza la toxina; durante el conjuro tiene ventaja frente al veneno y resistencia a su daño.",
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
    "name": "Grito Psíquico",
    "level": 9,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 10 criaturas que ves: salvación de Inteligencia o 14d6 de daño psíquico y Aturdidas (mitad si tienen éxito).",
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
    "name": "Onda de Pulso",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (cono de 30 pies)",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "En un cono de 30 pies: salvación de Constitución o 6d6 de daño de fuerza, además de ser atraído o empujado 15 pies en la dirección que elijas.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "curar_doentes",
    "name": "Purificar Alimentos",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S, M (una piedra y una hoja)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": true,
    "description": "Purifica agua y comida para 15 personas.",
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
    "name": "Pirotecnia",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Elige una llama en un cubo de 5 pies: se vuelve fuegos artificiales (salvación de Constitución o Ceguera) o humo denso que oscurece el área 1 minuto.",
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
    "name": "Resurrección Menor",
    "level": 5,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M (1000 po de diamante)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Vuelve de entre los muertos con 1d4 PV; hubo desventaja en la prueba.",
    "classes": [
      "bardo",
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "ligacao_telepatica",
    "name": "Vínculo Telepático",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: vincula telepáticamente hasta 8 criaturas voluntárias; todas se oyen incluso sin verse, hasta 1 hora.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lanca_psiquica_de_raulothim",
    "name": "Lanza Psíquica de Raulothim",
    "level": 4,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Una criatura hace salvación de Inteligencia o sufre 7d6 de daño psíquico y queda Incapacitada hasta tu próximo turno. Niveles superiores: +1d6 por nivel.",
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
    "name": "Vacío Devorador",
    "level": 9,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "1.000 pies",
    "components": "V, S, M (una pequeña estrella de nueve puntas de hierro)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera de fuerza gravitacional de 20 pies atrae criaturas y objetos; quien entre o empiece su turno allí sufre 5d10 de daño de fuerza y queda Inmovilizado hasta salir.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "raio_do_enfraquecimento",
    "name": "Rayo de Debilitamiento",
    "level": 2,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Un haz negro hace medio daño con armas basadas en Fuerza durante el conjuro; al final de cada turno del objetivo, una salvación de Constitución termina el efecto.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "toque_glacial",
    "name": "Toque Glacial",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Chorro de frío; ataque a distancia, 1d8 de daño frío y -10 pies de desplazamiento.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "raio_nauseante",
    "name": "Rayo Nauseante",
    "level": 1,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un rayo causa 2d8 de daño venenoso y exige salvación de Constitución; si falla, el objetivo queda Envenenado hasta su próximo turno. Niveles superiores: +1d8.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ruptura_da_realidade",
    "name": "Ruptura de la Realidad",
    "level": 8,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un prisma de cristal)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Salvación de Sabiduría o el objetivo no reacciona y tira un d10 cada turno con efectos caóticos; al final de su turno repite la salvación para terminar el conjuro.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "regenerar",
    "name": "Regenerar",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo recupera 4d8 + 15 PV y 1 PV más por ronda; los miembros desprendidos se recomponen en la mitad del tiempo normal.",
    "classes": [
      "bardo",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "reencarnar",
    "name": "Reencarnar",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Crea un nuevo cuerpo adulto para un humanoide muerto hace hasta 10 días y llama de vuelta a su alma; la raza se elige al azar y la muerte por vejez no vale.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "remover_maldicao",
    "name": "Remover Maldición",
    "level": 3,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Con tu toque terminan todas las maldiciones que afectan a una criatura u objeto; la maldición de un objeto mágico permanece, pero se rompe el vínculo de sintonía.",
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
    "name": "Resistencia",
    "level": 0,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una capa en miniatura)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una criatura que tocas suma 1d4 a la salvación que elijas antes o después de la tirada, y el conjuro termina.",
    "classes": [
      "artifice",
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "ressurreicao",
    "name": "Resurrección",
    "level": 7,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Devuelve a la vida una criatura muerta hace hasta 100 años (no por vejez): vuelve con todos los PV y sin enfermedades; los conjuros malditos se disuelven.",
    "classes": [
      "bardo",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "inverter_a_gravidade",
    "name": "Invertir la Gravedad",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "100 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "La gravedad se invierte en un cilindro de 50 pies de radio y 100 pies de altura: todo y todos caen hacia arriba hasta el final del conjuro.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ressuscitar",
    "name": "Revivir",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Devuelve a la vida una criatura muerta hace hasta 10 días (alma libre y dispuesta): vuelve con 1 PV y cura enfermedades/envenenamiento; sin las piezas originales, queda tuerta (1d4 de daño por cada).",
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
    "name": "Hielo Aprisionador de Rime",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (cono de 30 pies)",
    "components": "S, M (un frasco de agua derretida)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "En un cono de 30 pies: 3d8 de daño de frío y el objetivo queda atrapado en hielo 1 minuto (desplazamiento 0); si tiene éxito, solo la mitad del daño. Niveles superiores: +1d8.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "corda_extradimensional",
    "name": "Cuerda Extradimensional",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (extracto de maíz en polvo y un cordón retorcido de pergamino)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Una cuerda de hasta 60 pies se alza y abre una entrada a un espacio extradimensional que alberga hasta 8 criaturas Medianas hasta el fin del conjuro.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chama_sagrada",
    "name": "Llama Sagrada",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Fulgor de luz; prueba de Destreza o recibe 1d8 de daño radiante (2d8 en nivel 5, etc.).",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "sanctuario",
    "name": "Santuario",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Acción adicional",
    "range": "30 pies",
    "components": "V, S, M (agua bendita)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": true,
    "description": "El objetivo solo puede ser objetivo de ti o de tus aliados; salvación o el efecto termina.",
    "classes": [
      "artifice",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "picada_esgotante",
    "name": "Picadura Agotadora",
    "level": 0,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Drenas la vitalidad de una criatura a la vista: salvación de Constitución o 1d4 de daño necrótico y cae al suelo. Niveles superiores: +1d4 en los niveles 5, 11 y 17.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "dispersao",
    "name": "Dispersión",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hasta 5 criaturas que ves se teletransportan a un espacio visible a hasta 120 pies; las criaturas reacias pueden resistirse con salvación de Sabiduría.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "raio_ardente",
    "name": "Rayo Abrasador",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Lanzas tres rayos de fuego (ataque a distancia cada uno) con 2d6 de daño de fuego por impacto. Niveles superiores: +1 rayo por nivel superior al 2º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "observar",
    "name": "Observar",
    "level": 5,
    "school": "Adivinación",
    "castingTime": "10 minutos",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Ves y oyes a una criatura específica en el mismo plano; el objetivo hace una salvación de Sabiduría, con modificaciones por conocerte o tener un objeto tuyo.",
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
    "name": "Golpe Cauterizante",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu golpe inflige +1d6 de fuego y el objetivo arde: al inicio de cada turno, salvación de Constitución o +1d6 de fuego más. Niveles superiores: +1d6.",
    "classes": [
      "paladino",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "ver_o_invisivel",
    "name": "Ver lo Invisible",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una pizca de talco y un poco de plata en polvo)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Durante el conjuro ves criaturas y objetos invisibles como si fueran visibles y además percibes el Plano Etéreo.",
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
    "name": "Semblante",
    "level": 5,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Altera la apariencia ilusoria de cualquier número de criaturas visibles durante 8 horas (incluso cabello, edad y constitución aparentes); los voluntarios pueden elegir el efecto.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "remeter",
    "name": "Remitir",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Ilimitado",
    "components": "V, S, M (un trozo corto de alambre fino de cobre)",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Envías un mensaje de hasta veinticinco palabras a una criatura que conozcas; lo oye en su mente y puede responderte de inmediato, a cualquier distancia.",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "esconderijo",
    "name": "Escondrijo",
    "level": 7,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Esconde un objeto o criatura voluntaria: queda invisible, no puede ser objeto de adivinación y entra en estasis hasta que se disipe con el mismo conjuro.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lamina_sombria",
    "name": "Hoja Sombría",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Creas una espada de sombras: arma simple cuerpo a cuerpo con 2d8 de daño psíquico y ventaja contra objetivos en penumbra u oscuridad, hasta el fin del conjuro.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sombra_de_moil",
    "name": "Sombra de Moil",
    "level": 4,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (un ojo de no-muerto engastado en una gema de al menos 150 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Sombras llameantes te envuelven: quedas intensamente oscurecido, resistes el daño radiante y retalias a los agresores a 10 pies con 2d8 de daño necrótico.",
    "classes": [
      "bruxo"
    ],
    "source": "xge"
  },
  {
    "id": "moldar_agua",
    "name": "Moldar Agua",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "S",
    "duration": "Instantáneo o 1 hora",
    "concentration": false,
    "ritual": false,
    "description": "Manipulas agua en un cubo de 5 pies: la mueves, cambias su forma o color, la congelas o creas sonido con forma de imagen. Máximo 2 efectos duraderos.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "mudanca_de_forma",
    "name": "Cambio de Forma",
    "level": 9,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Asumes la forma de cualquier criatura de CA igual o menor que hayas visto (no constructo ni no-muerto), manteniendo la personalidad y conjuros, pero cambiando las estadísticas.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "despedacar",
    "name": "Despedazar",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un fragmento de mica)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Una onda sonora en una esfera de 10 pies causa 3d8 de daño de trueno (desventaja para seres de materia inorgánica). Niveles superiores: +1d8 por nivel.",
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
    "name": "Escudo Mágico",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Reacción",
    "range": "Personal",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "+5 en la CA hasta el inicio de tu próximo turno.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "escudo_da_fe",
    "name": "Escudo de la Fe",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S, M (un pequeño pergamino con un fragmento de texto sagrado)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Un campo centelleante envuelve a una criatura elegida y le otorga +2 de CA durante el conjuro.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bordao_mistico",
    "name": "Bordón Místico",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S, M (muérdago, una hoja de trébol y un garrote o bordón)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "El garrote o bordón gana poder de la naturaleza: usas tu atributo de conjuro en el ataque, el daño pasa a d8 y el arma se vuelve mágica durante 1 minuto.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "toque_chocante",
    "name": "Toque Eléctrico",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un toque causa 1d8 de daño eléctrico e impide reacciones hasta el próximo turno del objetivo; tienes ventaja contra quien lleva armadura de metal.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "radiancia_nauseante",
    "name": "Resplandor Nauseante",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Luz verdosa en una esfera de 30 pies causa 4d10 de daño radiante y un nivel de agotamiento a quien falle la salvación de Constitución al entrar o empezar su turno.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "silencio",
    "name": "Silencio",
    "level": 2,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": true,
    "description": "Ritual: no se crea ni atraviesa ningún sonido una esfera de 20 pies: las criaturas totalmente dentro son sordas, inmunes al daño de trueno y fallan los conjuros verbales.",
    "classes": [
      "bardo",
      "clerigo",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "imagem_silenciosa",
    "name": "Imagen Silenciosa",
    "level": 1,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un poco de lana)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Creas la imagen de hasta un cubo de 15 pies, puramente visual, que puedes mover con tu acción; el contacto físico revela que es una ilusión.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "farpas_prateadas",
    "name": "Púas Plateadas",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Reacción",
    "range": "60 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Quien superó la tirada la repite y usa el peor resultado; después, una criatura de tu elección gana ventaja en su próxima prueba o salvación.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "simulacro",
    "name": "Simulacro",
    "level": 7,
    "school": "Ilusión",
    "castingTime": "12 horas",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Crea una duplicata de hielo de una besta o humanoide (PV por la mitad, sin capacidades mágicas); lleva 12 horas y 1.500 pp en oro.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "empoderamento_de_pericias",
    "name": "Empoderamiento de Pericias",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Tocas una criatura con competencia en una pericia y le otorgas maestría: duplica su bono de competencia en las pruebas de esa pericia hasta el fin del conjuro.",
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
    "name": "Escribir en el cielo",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "A la vista",
    "components": "V, S",
    "duration": "hasta 1 día",
    "concentration": true,
    "ritual": true,
    "description": "Ritual: hasta diez palabras se forman en las nubes de un cielo visible hasta el fin del conjuro; el viento fuerte las disipa.",
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
    "name": "Dormir",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (arena fina)",
    "duration": "5 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Duerme a criaturas con 5d8 o menos de PV restantes.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "nevasca",
    "name": "Granizada",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (una pizca de tierra y unas gotas de agua)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Lluvia helada en un cilindro de 40 pies oscurece el área, apaga llamas y vuelve resbaladizo el suelo; salvación de Destreza o caída, y se pierde la concentración.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "lentidao",
    "name": "Lentitud",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (una gota de melaza)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Hasta seis criaturas en un cubo de 40 pies que fallen Sabiduría quedan lentas: la mitad de desplazamiento, -2 de CA, sin reacciones y solo una acción por turno.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "armadilha",
    "name": "Trampa",
    "level": 1,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "S, M (25 pies de cuerda, consumidos por el conjuro)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Una cuerda se vuelve una trampa casi invisible que suspende en el aire a una criatura Mediana o menor que pise el círculo, reteniéndola hasta el fin del conjuro.",
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
    "name": "Enjambre de Bolas de Nieve de Snilloc",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un trozo de hielo o un fragmento de piedra blanca)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un enjambre de bolas de nieve estalla en una esfera de 5 pies: salvación de Destreza o 3d6 de daño de frío (mitad si tiene éxito). Niveles superiores: +1d6 por nivel.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "jaula_de_almas",
    "name": "Jaula de Almas",
    "level": 6,
    "school": "Nigromancia",
    "castingTime": "Reacción, cuando un humanoide que ves a 60 pies o menos muere",
    "range": "60 pies",
    "components": "V, S, M (una jaula de plata minúscula de 100 po)",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Aprisionas el alma de un humanoide que muere ante tus ojos en una jaula de plata y puedes consumirla hasta seis veces en 8 horas para curarte o interrogarla.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "acudir_os_moribundos",
    "name": "Socorro",
    "level": 0,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tocas a una criatura viva con 0 PV y queda estable, sin más salvaciones. Los no-muertos y los constructos no se ven afectados.",
    "classes": [
      "artifice",
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_animais",
    "name": "Hablar con Animales",
    "level": 1,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: comprendes y hablas con bestias durante el conjuro; pueden informar de lugares, monstruos y lo que percibieron en las últimas 24 horas.",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_mortos",
    "name": "Hablar con los Muertos",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S, M (incienso ardiendo)",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Un cadáver con boca responde hasta cinco preguntas durante 10 minutos, sabiendo solo lo que sabía en vida y sin obligación de decir la verdad.",
    "classes": [
      "bardo",
      "clerigo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "falar_com_plantas",
    "name": "Hablar con las Plantas",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal (radio de 30 pies)",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Las plantas en un radio de 30 pies adquieren conciencia limitada, se comunican contigo y obedecen órdenes simples, además de alterar el terreno difícil del área.",
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "escalada_de_aranha",
    "name": "Escalada de Araña",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (una gota de betún y una araña)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "La criatura que tocas puede andar por superficies verticales y techos con las manos libres y gana velocidad de escalada igual a su desplazamiento.",
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
    "name": "Crecimiento de Espinas",
    "level": 2,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (siete espinas afiadas o siete ramas pequeñas, cada una con la punta afilada)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "El suelo en un radio de 20 pies brota espinas y se vuelve terreno difícil camuflado: 2d4 de daño perforante cada 5 pies recorridos.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "guardioes_espirituais",
    "name": "Guardianes Espirituales",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal (radio de 15 pies)",
    "components": "V, S, M (un símbolo sagrado)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Espíritos rondan un radio de 15 pies y causan 3d8 de daño (radiante o necrótico) a quien entre o empiece el turno allí, con mitad si tiene éxito.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "espirito_da_morte",
    "name": "Espírito de la Muerte",
    "level": 4,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (una carta dorada de al menos 400 po que retrata un avatar de la muerte)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito de la muerte (bloque ceifador) en un espacio libre a 60 pies; actúa tras ti, obedece órdenes verbales y lucha a tu lado.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "botmt"
  },
  {
    "id": "veu_espiritual",
    "name": "Sudario Espiritual",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Espíritos te rodean: tus armas infligen 1d8 extra de radiante, necrótico o frío a criaturas a 10 pies, que no recuperan PV hasta tu próximo turno.",
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
    "name": "Arma Espiritual",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "60 pies",
    "components": "V, S, M (un arma de dos manos)",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Flota y ataca (1d8+mod.) con acción adicional.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "rajada_de_cartas",
    "name": "Ráfaga de Cartas",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal (cono de 15 pies)",
    "components": "V, S, M (una baraja de cartas)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Un cono de 15 pies de cartas espectrales: salvación de Destreza o 2d10 de daño de fuerza y Ceguera hasta el fin de tu próximo turno; mitad si tiene éxito.",
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
    "name": "Castigo de Aturdimiento",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu golpe inflige 4d6 de daño psíquico extra y exige salvación de Sabiduría; si falla, tiene desventaja en ataques y pruebas y no puede reaccionar hasta tu próximo turno.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "golpe_de_aco_do_vento",
    "name": "Golpe de Acero del Viento",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "S, M (un arma cuerpo a cuerpo de al menos 1 pp)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Desapareces y aciertas hasta cinco criaturas que ves con un ataque de conjuro cuerpo a cuerpo, infligiendo 6d10 de daño de fuerza, y reapareces cerca de un objetivo.",
    "classes": [
      "patrulheiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "nuvem_fetida",
    "name": "Nube Fétida",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un huevo podrido o unas hojas fétidas)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una nube de gas amarillo en una esfera de 20 pies oscurece el área; quien esté dentro al iniciar el turno debe superar una salvación de Constitución o pierde la acción.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "forma_de_pedra",
    "name": "Forma de Piedra",
    "level": 4,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Modela un objeto de piedra Mediano o menor (o una sección de hasta 5 pies) en la forma deseada, como un arma, ídolo o arcón.",
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
    "name": "Piel de Piedra",
    "level": 4,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "La carne del objetivo se endurece como piedra: resistencia al daño contundente, perforante y cortante no mágico.",
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
    "name": "Tormenta de la Venganza",
    "level": 9,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "A la vista",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Se forma y escala una nube de 360 pies de radio: truenos (6d6 eléctrico), granizo (2d6 frío) y, en el 6º turno, un rayo que causa 10d10 elétrico y 10d10 de daño ácido al relámpago.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_de_tempestade",
    "name": "Esfera de Tempestad",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera de viento de 20 pies causa 2d6 a quien termine el turno dentro; con acción adicional, un relámpago causa 4d6 eléctrico a una criatura a 60 pies.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "sugestao",
    "name": "Sugestión",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, M (cera dulce)",
    "duration": "Concentración, hasta 8 horas",
    "concentration": true,
    "ritual": false,
    "description": "Sugiere un curso de acción; salvación o obedece si es razonable.",
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
    "name": "Invocar Aberración",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un tentáculo en conserva y un ojo en un frasco de platina de al menos 400 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito aberrante (Beholderkin, Slaad o Engendro Estelar) que lucha a tu lado, actúa tras ti y obedece órdenes verbales, durante 1 hora.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_besta",
    "name": "Invocar Besta",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (una pluma, un mechón de pelo y una cola de pez dentro de una bellota dorada de al menos 200 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito bestial (aire, tierra o agua) en un espacio libre visible, aliado obediente. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_celestial",
    "name": "Invocar Celestial",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un relicario dorado de al menos 500 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito celestial angélico en un espacio libre visible, aliado obediente. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_constructo",
    "name": "Invocar Constructo",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un cofre ornamentado de piedra y metal de al menos 400 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito constructo (arcilla, metal o piedra) en un espacio libre visible, aliado. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_espirito_draconico",
    "name": "Invocar Espírito Dracónico",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (objeto grabado con la imagen de un dragón, de al menos 500 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito dracónico (cromático, de gema o metálico) en un espacio libre visible. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "ftd"
  },
  {
    "id": "invocar_elemental",
    "name": "Invocar Elemental",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (aire, un guijarro, ceniza y agua en un frasco dorado de al menos 400 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito elemental (aire, tierra, fuego o agua) en un espacio libre visible, aliado. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "druida",
      "patrulheiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_fada",
    "name": "Invocar Fada",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (una flor dorada de al menos 300 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito fada (irritado, alegre o travieso) en un espacio libre visible, aliado. Niveles superiores: usa el nivel del conjuro en la ficha.",
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
    "name": "Invocar Espírito Infernal",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (sangre de humanoide en un frasco de rubí de al menos 600 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito infernal (demonio, diablo o yugoloth) en un espacio libre visible, aliado. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_demonio_superior",
    "name": "Invocar Demonio Superior",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (frasco de sangre de humanoide muerto en las últimas 24 horas)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un demonio de nivel de amenaza 5 o menor en un espacio libre visible; salva de Carisma cada turno. Niveles superiores: +1 al nivel de amenaza por nivel superior al 4º.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocar_demonios_menores",
    "name": "Invocar Demonios Menores",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (frasco de sangre de humanoide muerto en las últimas 24 horas)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas demonios hostiles en espacios libres visibles, bloqueados por el círculo de sangre. Niveles superiores: aparecen el doble (6º–7º) o el triple (8º–9º).",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "invocar_cria_das_sombras",
    "name": "Invocar Engendro de las Sombras",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (lágrimas en un frasco de cristal de al menos 300 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito sombrío (furia, desespero o miedo) en un espacio libre visible, aliado. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "invocar_morto_vivo",
    "name": "Invocar No-Muerto",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (un cráneo dorado de al menos 300 po)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Invocas un espírito no-muerto (espectral, putrefacto o esquelético) en un espacio libre visible. Niveles superiores: usa el nivel del conjuro en la ficha.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "feixe_de_sol",
    "name": "Haz de Sol",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Haz de luz de 5 pies por 60 pies: 6d8 de daño radiante y Ceguera (salvación de Constitución); los no-muertos sufren daño extra al ser impactados.",
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
    "name": "Explosión Solar",
    "level": 8,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Luz solar intensa en un radio de 60 pies: 12d6 de daño radiante y Ceguera durante 1 minuto (salvación de Constitución; mitad y sin ceguera si tiene éxito).",
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
    "name": "Aljava Veloz",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Toque",
    "components": "V, S, M (un aljaba con al menos una munición)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu aljaba produce munición sin fin; con acción adicional, haces 2 ataques con ella por turno.",
    "classes": [
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "rompante_de_espadas",
    "name": "Ráfaga de Espadas",
    "level": 0,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal (radio de 5 pies)",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Hojas espectrales giran a tu alrededor: criaturas a 5 pies sufren 1d6 de daño de fuerza (salvación de Destreza). Niveles superiores: +1d6 en 5º, 11º y 17º.",
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
    "name": "Símbolo",
    "level": 7,
    "school": "Abjuración",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Hasta ser disipado o activado",
    "concentration": false,
    "ritual": false,
    "description": "Inscribe un glifo (Muerte, Dolor, Ceguera, Sueño, Miedo, Locura o Envenenamiento) que se activa por una condición elegida y provoca sus efectos en un radio de 10 pies.",
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
    "name": "Estática Sináptica",
    "level": 5,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de 20 pies: 8d6 de daño psíquico (salvación de Inteligencia) y, durante 1 minuto, resta 1d6 a ataques y pruebas.",
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
    "name": "Infusión Cáustica de Tasha",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (línea de 30 pies)",
    "components": "V, S, M (un poco de comida podrida)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Línea de 30 pies: salvación de Destreza o la criatura queda cubierta de ácido y sufre 2d4 por turno. Niveles superiores: +2d4 por nivel superior al 1º.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "risada_terrivel",
    "name": "Risa Espantosa de Tasha",
    "level": 1,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (pastelitos pequeños y una pluma agitada en el aire)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "El objetivo lo ve todo como gracioso: salvación de Sabiduría o cae y queda incapacitado hasta el fin del conjuro.",
    "classes": [
      "bardo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "chicote_mental_da_tasha",
    "name": "Chicote Mental de Tasha",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "3d6 psíquicos (salvación de Inteligencia); si falla, en su próximo turno elige solo mover, actuar o acción adicional. Niveles superiores: +1 objetivo por nivel superior al 2º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "disfarce_transcendental_de_tasha",
    "name": "Disfarce Trascendental de Tasha",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V, S, M (objeto grabado con el símbolo de los Planos Exteriores, de al menos 500 po)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Durante 1 minuto: +2 a la CA, vuelo de 40 pies, ataques con tu atributo mágico e inmunidades del plano elegido.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "tce"
  },
  {
    "id": "telecinese",
    "name": "Telequinesis",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Mueve o manipula por voluntad: objetos (hasta 1.000 lb, o 500 en movimiento rápido) y criaturas (salvación de Fuerza, empujón de hasta 25 pies).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "telepatia",
    "name": "Telepatía",
    "level": 8,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Ilimitada",
    "components": "V, S, M (un par de anéis de plata unidos)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Tú y una criatura voluntaria intercambiáis palabras, imágenes y sonidos mentalmente durante 24 horas, a cualquier distancia.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "teletransporte",
    "name": "Teletransporte",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Transporta a ti y hasta 8 criaturas visibles (u objeto) a un destino; cuanto menos familiar, mayor la probabilidad de error, que dispersa a los objetivos alrededor del destino.",
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "circulo_de_teletransporte",
    "name": "Círculo de Teletransporte",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "10 pies",
    "components": "V, M",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Dibuja un círculo de 10 pies que lo une a un círculo permanente cuya secuencia de sigilos conoces; durante 1 ronda, las criaturas que entren son teletransportadas allí.",
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
    "name": "Templo de los Dioses",
    "level": 7,
    "school": "Conjuración",
    "castingTime": "1 hora",
    "range": "120 pies",
    "components": "V, S, M (un símbolo sagrado de al menos 5 po)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": false,
    "description": "Crea un templo durante 24 horas que repele a criaturas elegidas (salvación de Carisma) y potencia las curaciones dentro de él.",
    "classes": [
      "clerigo"
    ],
    "source": "xge"
  },
  {
    "id": "desvio_temporal",
    "name": "Desvío Temporal",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Reacción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Si una criatura que ves inicia un ataque o conjuro, salvación de Sabiduría o desaparece en el tiempo y el efecto falla. Niveles superiores: +1 objetivo por nivel superior al 5º.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "disco_flutuante",
    "name": "Disco Flotante",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (una gota de mercurio)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: creas un disco flotante a 3 pies del suelo que te sigue y carga hasta 500 lb durante 1 hora.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "transformacao_de_tenser",
    "name": "Transformación de Tenser",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (unos pocos pelos de un toro)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Durante 10 minutos: 50 PV temporarios, ventaja en ataques y +2d12 de fuerza, pero no puedes lanzar conjuros; al acabar, salvación de Constitución (CD 15) o Agotamiento.",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vincular_essencia",
    "name": "Vincular Esencia",
    "level": 7,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (carrete de hilo de platina de 250 po, consumido por el conjuro)",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Dos criaturas que ves deben superar una salvación de Constitución; si ambas fallan, el daño y la curación que una reciba afectan a la otra durante 1 hora.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "truque_do_mago",
    "name": "Taumaturgia",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V",
    "duration": "1 minuto",
    "concentration": false,
    "ritual": false,
    "description": "Prodigios menores: voz ecoante, temblores, luces divinas.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "chicote_de_espinhos",
    "name": "Chicote de Espinas",
    "level": 0,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (el tallo de una planta con espinas)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ataque de conjuro cuerpo a cuerpo: 1d6 perforante y atrae a la criatura hasta 10 pies. Niveles superiores: +1d6 en 5º, 11º y 17º.",
    "classes": [
      "artifice",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "passo_do_trovao",
    "name": "Paso del Trueno",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Te teletransportas hasta 90 pies; el estruendo causa 3d10 de trueno a criaturas a 10 pies de origen (salvación de Constitución). Niveles superiores: +1d10 por nivel superior al 3º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "trovoada",
    "name": "Estruendo",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (radio de 5 pies)",
    "components": "S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Estruendo audible a 100 pies: criaturas a 5 pies salvan de Constitución o sufren 1d6 de trueno. Niveles superiores: +1d6 en 5º, 11º y 17º.",
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
    "name": "Castigo de Trueno",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu golpe cuerpo a cuerpo añade 2d6 de daño de trueno; la criatura salva de Fuerza o es empujada 10 pies y derribada.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "onda_trovejante",
    "name": "Onda Tronante",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal (cubo de 15 pies)",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Onda en un cubo de 15 pies: 2d8 de trueno y empuje de 10 pies (salvación de Constitución). Niveles superiores: +1d8 por nivel superior al 1º.",
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
    "name": "Maremoto",
    "level": 3,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (una gota de agua)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Ola de agua en un área de 30×10 pies: 4d8 de daño contundente y derriba (salvación de Destreza; mitad y sin derribar).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "devastacao_temporal",
    "name": "Devastación Temporal",
    "level": 9,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (reloj de arena con polvo de diamante de 5.000 po, consumido por el conjuro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo envejece: 10d12 de daño necrótico (salvación de Constitución) y, si falla, pierde 1 mes de vida, con desventaja y la mitad de desplazamiento.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "parar_o_tempo",
    "name": "Parar el Tiempo",
    "level": 9,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tomas 1d4+1 turnos seguidos mientras el tiempo se congela para los demás; el conjuro termina si te ve afectado por otro conjuro o sufres daño.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pequeno_servo",
    "name": "Pequeño Siervo",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "1 minuto",
    "range": "Toque",
    "components": "V, S",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Un objeto pequeño se anima como tu siervo durante 8 horas; dirígelo mentalmente a 120 pies. Niveles superiores: +2 objetos por nivel superior al 3º.",
    "classes": [
      "artifice",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "pedagio_aos_mortos",
    "name": "Campana Fúnebre",
    "level": 0,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Campana fúnebre: salvación de Sabiduría o 1d8 de daño necrótico (1d12 si el objetivo está herido). Niveles superiores: +1 dado en 5º, 11º y 17º.",
    "classes": [
      "clerigo",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "linguas",
    "name": "Lenguas",
    "level": 3,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, M (un pequeño modelo de barro de un zigurat)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo que tocas entiende cualquier idioma hablado y es entendido por quien lo oye, durante 1 hora.",
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
    "name": "Transmutar Piedra",
    "level": 5,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (barro y agua)",
    "duration": "Hasta ser disipado",
    "concentration": false,
    "ritual": false,
    "description": "Transforma piedra en barro (o barro en piedra) en un cubo de 40 pies; el barro es terreno difícil y sujeta a las criaturas.",
    "classes": [
      "artifice",
      "druida",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "transporte_por_plantas",
    "name": "Transporte por Plantas",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "10 pies",
    "components": "V, S",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Crea un vínculo mágico entre dos árboles (Grandes o mayores) en el mismo plano; has visto o tocado el de destino antes; hasta 9 criaturas entran en un árbol y salen por el otro.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "passo_entre_arvores",
    "name": "Paso entre Árboles",
    "level": 5,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Entras en un árbol y sales por otro del mismo tipo en un radio de 500 pies; al salir, recibes 1d12 de daño necrótico (sobrevives si tienes éxito en Constitución).",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "polimorfia_verdadeira",
    "name": "Polimorfia Verdadera",
    "level": 9,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Transforma a una criatura en otra criatura (u objeto en criatura) durante 1 hora; si se mantiene durante toda la duración, el objetivo se convierte permanentemente en el nuevo ser.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "ressurreicao_verdadeira",
    "name": "Resurrección Verdadera",
    "level": 9,
    "school": "Nigromancia",
    "castingTime": "1 hora",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Devuelve a la vida una criatura muerta hace hasta 200 años (no por vejez), incluso sin partes del cuerpo (recreadas a partir de barro y encías): PV máximos, sin enfermedades y sin conjuros malditos.",
    "classes": [
      "clerigo",
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "visao_verdadeira",
    "name": "Visión Verdadera",
    "level": 6,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo gana visión verdadera a 120 pies: ve a través de magia e ilusiones, nota puertas secretas ocultas por magia y ve el Plano Etéreo.",
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
    "name": "Golpe Certero",
    "level": 0,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "S",
    "duration": "hasta 1 ronda",
    "concentration": true,
    "ritual": false,
    "description": "Tu próximo ataque contra el objetivo tiene ventaja; el conjuro dura 1 ronda y requiere concentración.",
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
    "school": "Conjuración",
    "castingTime": "1 minuto",
    "range": "A la vista",
    "components": "V, S",
    "duration": "hasta 6 rondas",
    "concentration": true,
    "ritual": false,
    "description": "Muro de agua de hasta 300 pies: 6d10 de daño contundente al formarse (salvación de Fuerza) y avanza 50 pies por turno.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "servo_invisivel",
    "name": "Siervo Invisible",
    "level": 1,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (un trozo de cordón y un poco de madera)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: una fuerza invisible realiza tareas simples durante 1 hora (CA 10, 1 PV); dirígela con acción adicional a 60 pies.",
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "toque_vampirico",
    "name": "Toque Vampírico",
    "level": 3,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Ataque de conjuro cuerpo a cuerpo: 3d6 necróticos y recuperas PV por la mitad, repetible cada turno. Niveles superiores: +1d6 por nivel superior al 3º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "zombaria_viscosa",
    "name": "Burla Viscosa",
    "level": 0,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V",
    "duration": "1 ronda",
    "concentration": false,
    "ritual": false,
    "description": "Daño psíquico 1d6; el objetivo tiene desventaja en su próxima tirada de ataque.",
    "classes": [
      "bardo"
    ],
    "source": "phb"
  },
  {
    "id": "esfera_caustica",
    "name": "Esfera Cáustica",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "150 pies",
    "components": "V, S, M (una gota de bilis de babosa gigante)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de ácido en un radio de 20 pies: 10d4 (salvación de Destreza) y otros 5d4 al final de tu próximo turno. Niveles superiores: +2d4 inicial por nivel superior al 4º.",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vortice_dimensional",
    "name": "Vórtice Dimensional",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "El espacio se retuerce: el objetivo salva de Constitución o es teletransportado a un espacio libre que viste. Niveles superiores: +30 pies de alcance por nivel superior al 2º.",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "muro_de_fogo",
    "name": "Muro de Fuego",
    "level": 4,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Muro de 60 pies (o anillo de 20 pies de diámetro): 5d8 de daño de fuego a quien esté a 10 pies de cada lado (salvación de Destreza; mitad si tiene éxito).",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_forca",
    "name": "Muro de Fuerza",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro invisible de fuerza (sin masa, a prueba de magia) que bloquea el paso; no puede ser disipado por magia, pero tiene 30 PV y se destruye si se rompe.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_gelo",
    "name": "Muro de Hielo",
    "level": 6,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro de hielo (paneles de 10×10 pies, hasta 30 pies de ancho): 10d6 de daño frío a quien lo atraviese; si se rompe, crea niebla helada.",
    "classes": [
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_luz",
    "name": "Muro de Luz",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un espejo de mano)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro luminoso de 60 pies: 4d8 de daño radiante y Ceguera (salvación de Constitución); emite luz. Niveles superiores: +1d8 por nivel superior al 5º.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "muro_de_areia",
    "name": "Muro de Areia",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (una mano de arena)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro de arena que corta la visión y hace gastar 3 pies de movimiento por pie recorrido; Ceguera dentro del muro.",
    "classes": [
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "muro_de_pedra",
    "name": "Muro de Piedra",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro no mágico de piedra (10 cm de espesor, 10 paneles de 10×10 pies) que, si se sostiene, se vuelve permanente; los paneles pueden moldearse como quieras.",
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
    "name": "Muro de Espinas",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M",
    "duration": "Hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro de arbustos con espinas (hasta 60×10 pies): 7d10 de daño cortante a quien lo atraviese, además de terreno difícil.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_agua",
    "name": "Muro de Agua",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (una gota de agua)",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Muro de agua: terreno difícil, desventaja en ataques a distancia y el daño de fuego se reduce a la mitad.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "vinculo_de_protecao",
    "name": "Vínculo de Protección",
    "level": 2,
    "school": "Abjuración",
    "castingTime": "Acción",
    "range": "Toque",
    "components": "V, S, M (par de anillos de platina de 50 po usados por la pareja durante la duración)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": false,
    "description": "El objetivo que tocas gana +1 a la CA y a las salvaciones y resistencia al daño durante 1 hora; tú sufres el mismo daño que él.",
    "classes": [
      "clerigo",
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "vento_protetor",
    "name": "Viento Protector",
    "level": 2,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 10 minutos",
    "concentration": true,
    "ritual": false,
    "description": "Viento fuerte de 10 pies te sigue durante 10 minutos: sordera en el área, terreno difícil y desventaja en ataques a distancia.",
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
    "name": "Percepción de Portal",
    "level": 2,
    "school": "Adivinación",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V, S, M (una hoja de vid cortante)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Durante 1 minuto percibes portales a 30 pies (inactivos incluso); con una acción, una prueba revela el plano de destino y la clave requerida.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "planescape"
  },
  {
    "id": "respirar_na_agua",
    "name": "Respirar en el Agua",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (un junco corto o un trozo de paja)",
    "duration": "24 horas",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: hasta 10 criaturas que ves respiran bajo el agua durante 24 horas.",
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
    "name": "Caminar sobre las Aguas",
    "level": 3,
    "school": "Transmutación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (un trozo de corcho)",
    "duration": "1 hora",
    "concentration": false,
    "ritual": true,
    "description": "Ritual: hasta 10 criaturas caminan sobre cualquier líquido como si fuera suelo firme durante 1 hora.",
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
    "name": "Esfera Aquosa",
    "level": 4,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "90 pies",
    "components": "V, S, M (una gota de agua)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Una esfera de 5 pies sujeta a criaturas (salvación de Fuerza, repetida al final del turno) y se mueve a tu mando.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "teia",
    "name": "Telaraña",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (una telaraña)",
    "duration": "Concentración, hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "20 pies cúbicos de telarañas; ralentiza e inmoviliza (DES).",
    "classes": [
      "artifice",
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "pavor",
    "name": "Pavor",
    "level": 9,
    "school": "Ilusión",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "Hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "La mente de las criaturas en una esfera de 30 pies ve sus pesadillas: fallo en Sabiduría causa 4d10 de daño psíquico y Miedo mientras dure el conjuro.",
    "classes": [
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "vendaval",
    "name": "Vendaval",
    "level": 7,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "300 pies",
    "components": "V, M (un trozo de paja)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Ciclone de 10 pies de radio y 30 pies de altura: 10d6 de daño contundente (salvación de Destreza) y las criaturas Grandes o menores quedan Retenidas.",
    "classes": [
      "druida",
      "mago"
    ],
    "source": "xge"
  },
  {
    "id": "caminho_do_vento",
    "name": "Camino del Viento",
    "level": 6,
    "school": "Transmutación",
    "castingTime": "1 minuto",
    "range": "30 pies",
    "components": "V, S, M",
    "duration": "8 horas",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta 10 criaturas os volvéis gaseosos como nubes: velocidad de vuelo 300 pies, resistencia al daño de armas no mágicas, pero sin atacar hasta asumir forma normal.",
    "classes": [
      "druida"
    ],
    "source": "phb"
  },
  {
    "id": "muro_de_vento",
    "name": "Muro de Viento",
    "level": 3,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S, M (un abanico menudo y una pluma de origen exótico)",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Muro de viento de 50 pies: 3d8 de daño contundente (salvación de Fuerza), bloquea proyectiles y criaturas Voladoras pequeñas.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "phb"
  },
  {
    "id": "desejo",
    "name": "Deseo",
    "level": 9,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "El conjuro más poderoso: repite conjuros de nivel ≤ 8, produce efectos equivalentes (teletransporte, crear objetos, curar, revivir) o pide algo extraordinario — riesgo de estrés (3d8 de daño por 1d4×10 lb extras y debilidad).",
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "bruxaria",
    "name": "Brujería",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "30 pies",
    "components": "V, S, M (un pedazo de cordón)",
    "duration": "Concentración, hasta 1 hora",
    "concentration": true,
    "ritual": false,
    "description": "Ataque a distancia con rayo; 1d12 eléctrico en el turno siguiente.",
    "classes": [
      "feiticeiro",
      "bruxo",
      "mago"
    ],
    "source": "phb"
  },
  {
    "id": "murchar_e_florescer",
    "name": "Marchitar y Florecer",
    "level": 2,
    "school": "Nigromancia",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S, M (una vid marchita retorcida en un aro)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de 10 pies: 2d6 necróticos (salvación de Constitución); una criatura gasta un dado de vida para curarse. Niveles superiores: +1d6 y +1 dado de vida por nivel superior al 2º.",
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "source": "scc"
  },
  {
    "id": "palavra_de_radiancia",
    "name": "Palabra de Radiancia",
    "level": 0,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "5 pies",
    "components": "V, M (un símbolo sagrado)",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Palabra divina: criaturas elegidas a 5 pies de ti salvan de Constitución o sufren 1d6 radiante. Niveles superiores: +1d6 en 5º, 11º y 17º.",
    "classes": [
      "clerigo"
    ],
    "source": "xge"
  },
  {
    "id": "palavra_de_retorno",
    "name": "Palabra de Retorno",
    "level": 6,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "5 pies",
    "components": "V",
    "duration": "Instantáneo",
    "concentration": false,
    "ritual": false,
    "description": "Tú y hasta 5 criaturas voluntarias a 5 pies son teletransportadas a un santuario previamente designado y preparado como conjuro.",
    "classes": [
      "clerigo"
    ],
    "source": "phb"
  },
  {
    "id": "ira_da_natureza",
    "name": "Ira de la Naturaleza",
    "level": 5,
    "school": "Evocación",
    "castingTime": "Acción",
    "range": "120 pies",
    "components": "V, S",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Espíritus de la naturaleza animan vegetación y rocas en un cubo de 60 pies: terreno difícil, 4d6 por ramas y 3d8 por rocas.",
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "punicao_colerica",
    "name": "Castigo de Cólera",
    "level": 1,
    "school": "Evocación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu golpe cuerpo a cuerpo añade 1d6 de daño psíquico; la criatura salva de Sabiduría o queda Asustada de ti.",
    "classes": [
      "paladino"
    ],
    "source": "phb"
  },
  {
    "id": "bolso_dimensional",
    "name": "Bolsillo Dimensional",
    "level": 2,
    "school": "Conjuración",
    "castingTime": "Acción",
    "range": "Personal",
    "components": "S",
    "duration": "hasta 1 hora",
    "concentration": true,
    "ritual": true,
    "description": "Ritual: un objeto de hasta 5 lb de tu mano pasa a un espacio extradimensional; una acción para traerlo de vuelta.",
    "classes": [
      "mago"
    ],
    "source": "egw"
  },
  {
    "id": "ataque_do_zefiro",
    "name": "Ataque del Zéfiro",
    "level": 1,
    "school": "Transmutación",
    "castingTime": "Acción adicional",
    "range": "Personal",
    "components": "V",
    "duration": "hasta 1 minuto",
    "concentration": true,
    "ritual": false,
    "description": "Tu movimiento no provoca ataques de oportunidad; una vez, ataque con ventaja y +1d8 de fuerza, con +30 pies de desplazamiento.",
    "classes": [
      "patrulheiro"
    ],
    "source": "xge"
  },
  {
    "id": "zona_da_verdade",
    "name": "Zona de Verdad",
    "level": 2,
    "school": "Encantamiento",
    "castingTime": "Acción",
    "range": "60 pies",
    "components": "V, S",
    "duration": "10 minutos",
    "concentration": false,
    "ritual": false,
    "description": "Esfera de 15 pies: las criaturas salvan de Carisma o no pueden mentir mientras estén dentro.",
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
