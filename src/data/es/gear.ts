export type GearCategory =
  | "foco"
  | "mochila"
  | "ferramenta"
  | "instrumento"
  | "municao"
  | "geral";

export type GearCaster = "arcano" | "divino" | "druidico" | "universal";

export type GearDef = {
  id: string;
  name: string;
  category: GearCategory;
  weight: number;
  cost: number | null;
  description: string;
  spellcaster?: GearCaster;
};

export const GEAR: GearDef[] = [
  // --- focos y grimorios ---
  { id: "component_pouch", name: "Bolsa de componentes", category: "foco", weight: 2, cost: 25, description: "Bolsa de cuero con gis, polvo y palitos; contiene los componentes sin coste de los conjuros.", spellcaster: "universal" },
  { id: "arcane_focus", name: "Enfoque arcano", category: "foco", weight: 1, cost: 20, description: "Cristal, orbe, cajada o vara; sustituye a los componentes sin coste de los conjuros arcanos.", spellcaster: "arcano" },
  { id: "holy_symbol", name: "Símbolo sagrado", category: "foco", weight: 1, cost: 5, description: "Amuleto, medalla o emblema exhibido; sustituye a los componentes sin coste de los conjuros divinos.", spellcaster: "divino" },
  { id: "druidic_focus", name: "Enfoque druídico", category: "foco", weight: 2, cost: 10, description: "Baya, manojo de hierbas, plumas, palo hueco o rama de roble; sustituye a los componentes druídicos sin coste.", spellcaster: "druidico" },
  { id: "spellbook", name: "Grimorio", category: "foco", weight: 3, cost: 50, description: "Un libro de 100 páginas donde el mago copia y prepara sus conjuros.", spellcaster: "arcano" },
  // --- mochilas ---
  { id: "backpack", name: "Mochila", category: "mochila", weight: 5, cost: 12, description: "Mochila con correas; carga hasta 18 kg repartidos en cuatro compartimentos." },
  { id: "explorers_pack", name: "Mochila de explorador", category: "mochila", weight: 59, cost: 10, description: "Mochila, saco de dormir, kit de comida, yesquero, 10 días de raciones, bota de agua y 15 m de cuerda." },
  { id: "scholars_pack", name: "Mochila de erudito", category: "mochila", weight: 25, cost: 40, description: "Mochila, frasco de tinta, pluma, pergamino, arena, cuchillo pequeño y libros de estudio." },
  { id: "entertainers_pack", name: "Mochila de artista", category: "mochila", weight: 38, cost: 40, description: "Mochila, saco de dormir, traje de fantasia, 5 velas, almohada, 2 días de raciones y maquillaje." },
  { id: "thieves_pack", name: "Mochila de ladrón", category: "mochila", weight: 25, cost: 40, description: "Mochila, palanca, 10 velas, saco, 5 días de raciones, bota de agua y 15 m de cuerda." },
  { id: "travelers_pack", name: "Mochila de viajero", category: "mochila", weight: 24, cost: 16, description: "Mochila, saco de dormir, kit de comida, yesquero, 10 días de raciones, bota de agua y capa de viaje." },
  { id: "sailors_kit", name: "Kit de marinero", category: "mochila", weight: 40, cost: 12, description: "Mochila, saco de dormir, kit de comida, yesquero, 10 días de raciones, bota de agua y 15 m de cuerda." },
  { id: "monster_hunters_pack", name: "Kit de cazador de monstruos", category: "mochila", weight: 45, cost: 25, description: "Mochila, saco de dormir, kit de comida, yesquero, 10 días de raciones, bota de agua, estaque de madera y maza." },
  // --- herramientas ---
  { id: "thieves_tools", name: "Herramientas de ladrón", category: "ferramenta", weight: 1, cost: 25, description: "Herramientas para forzar cerraduras y desarmar trampas; requiere competencia." },
  { id: "disguise_kit", name: "Kit de disfraces", category: "ferramenta", weight: 3, cost: 25, description: "Grasa, maquillaje, espejo y piezas de traje para cambiar de apariencia; requiere competencia." },
  { id: "forgery_kit", name: "Kit de falsificación", category: "ferramenta", weight: 5, cost: 15, description: "Herramientas y materiales para imitar documentos, sellos y letras; requiere competencia." },
  { id: "fishing_tackle", name: "Aparejo de pesca", category: "ferramenta", weight: 4, cost: 1, description: "Caña, anzuelo con línea, cebo artificial y red de mano." },
  { id: "miners_pick", name: "Pico de minero", category: "ferramenta", weight: 10, cost: 2, description: "Un pico pesado para romper roca; sirve como arma improvisada." },
  { id: "smiths_tools", name: "Herramientas de herrero", category: "ferramenta", weight: 20, cost: 20, description: "Yunque, martelo y herramientas para forjar y reparar objetos de metal; requiere competencia." },
  { id: "herbalism_kit", name: "Kit de herboristería", category: "ferramenta", weight: 3, cost: 25, description: "Frascos, hierbas y herramientas para identificar plantas y preparar antídotos y remedios; requiere competencia." },
  { id: "navigators_tools", name: "Herramientas de navegador", category: "ferramenta", weight: 6, cost: 25, description: "Carta náutica, brújula e instrumentos de navegación; requiere competencia." },
  { id: "poisoners_kit", name: "Kit de envenenador", category: "ferramenta", weight: 2, cost: 50, description: "Herramientas, vidriería e ingredientes para preparar venenos; requiere competencia." },
  { id: "dice_set", name: "Juego de dados", category: "ferramenta", weight: 0, cost: 1, description: "Dados y fichas para juegos de azar; requiere competencia en juegos." },
  { id: "herbs", name: "Hierbas medicinales", category: "ferramenta", weight: 0.5, cost: 1, description: "Hierbas recolectadas; combinadas con un kit de herboristería, sirven para preparar remedios." },
  // --- instrumentos ---
  { id: "lute", name: "Lira", category: "instrumento", weight: 2, cost: 30, description: "Instrumento de cuerdas con cuerpo de madera; requiere competencia." },
  { id: "drum", name: "Tambor", category: "instrumento", weight: 3, cost: 15, description: "Instrumento de percusión de piel y madera; requiere competencia." },
  { id: "flute", name: "Flauta", category: "instrumento", weight: 1, cost: 5, description: "Instrumento de viento de madera; requiere competencia." },
  { id: "bagpipes", name: "Gaita", category: "instrumento", weight: 6, cost: 30, description: "Instrumento de soplido con bolsa de aire; requiere competencia." },
  // --- munición ---
  { id: "arrows", name: "Flechas (20)", category: "municao", weight: 1, cost: 1, description: "20 flechas; munición para arcos." },
  { id: "crossbow_bolts", name: "Virolas de ballesta (20)", category: "municao", weight: 1, cost: 1, description: "20 virolas; munición para ballestas." },
  // --- equipo general ---
  { id: "tent", name: "Tienda", category: "geral", weight: 20, cost: 10, description: "Tienda de lona para dos personas." },
  { id: "rope_hempen", name: "Cuerda de cáñamo", category: "geral", weight: 10, cost: 1, description: "15 metros de cuerda; soporta hasta 270 kg." },
  { id: "torch", name: "Antorcha", category: "geral", weight: 1, cost: 1, description: "Arde durante 1 hora e ilumina una corta distancia." },
  { id: "lamp", name: "Lámpara", category: "geral", weight: 2, cost: 5, description: "Lámpara de aceite; ilumina una corta distancia mientras tenga combustible." },
  { id: "waterskin", name: "Bota de agua", category: "geral", weight: 5, cost: 2, description: "Bolsa de cuero para transportar agua (unos 2 litros)." },
  { id: "rations", name: "Raciones", category: "geral", weight: 2, cost: 5, description: "1 día de comida seca de viaje." },
  { id: "acid", name: "Ácido", category: "geral", weight: 1, cost: 25, description: "Frasco de ácido; lanzado, inflige 2d6 de daño ácido." },
  { id: "alchemist_fire", name: "Fuego de alquimista", category: "geral", weight: 1, cost: 50, description: "Frasco pegajoso; inflige 2d4 de daño de fuego al impactar y daño continuo hasta apagarse." },
  { id: "holy_water", name: "Agua bendita", category: "geral", weight: 1, cost: 25, description: "Frasco bendecido; lanzado, inflige 2d6 de daño radiante a no-muertos y demonios." },
  { id: "antitoxin", name: "Antídoto", category: "geral", weight: 1, cost: 50, description: "Frasco; otorga ventaja en tiradas de salvación contra veneno durante 1 hora." },
  { id: "healers_kit", name: "Kit de sanador", category: "geral", weight: 3, cost: 25, description: "Vendas, bálsamo y ungüento; 10 usos para estabilizar a alguien sin tiradas." },
  { id: "ball_bearings", name: "Balines", category: "geral", weight: 2, cost: 1, description: "Bolsa de balines esparcidos en un cuadrado de 3 m; terreno difícil hasta que se barra." },
  { id: "caltrops", name: "Cerrones", category: "geral", weight: 2, cost: 5, description: "Púas en un cuadrado de 3 m; quien las pisa sufre 1d4 de daño perforante y su velocidad se reduce a la mitad hasta curarse." },
  { id: "chains", name: "Cadenas", category: "geral", weight: 10, cost: 15, description: "3 metros de cadena de hierro para atar o asegurar." },
  { id: "lock", name: "Cerradura", category: "geral", weight: 1, cost: 20, description: "Una cerradura de calidad; CD 20 para forzarla sin herramientas de ladrón." },
  { id: "mirror", name: "Espejo de acero", category: "geral", weight: 0.5, cost: 5, description: "Espejo de mano de 30 cm." },
  { id: "crowbar", name: "Palanca", category: "geral", weight: 5, cost: 2, description: "Ignora la desventaja por espacio reducido en pruebas de FUE para forzar cosas." },
  { id: "shovel", name: "Pala", category: "geral", weight: 5, cost: 2, description: "Pala para cavar tierra y enterrar cosas." },
  { id: "costume", name: "Ropa de disfraz", category: "geral", weight: 3, cost: 5, description: "Ropa para actuaciones, festivales o disfraces comunes." },
  { id: "fine_clothes", name: "Ropa fina", category: "geral", weight: 6, cost: 15, description: "Ropa elegante para ocasiones sociales importantes." },
  { id: "robes", name: "Túnica", category: "geral", weight: 3, cost: 1, description: "Túnicas simples de tela, comunes entre sacerdotes y eruditos." },
  { id: "incense", name: "Incienso", category: "geral", weight: 0.5, cost: 1, description: "Una unidad de incienso, quemada en rituales y ceremonias." },
  { id: "ink", name: "Tinta", category: "geral", weight: 0.25, cost: 8, description: "Frasco de tinta para escribir en pergamino." },
  { id: "quill", name: "Pluma", category: "geral", weight: 0, cost: 2, description: "Pluma de escritura; con tinta, sirve para redactar documentos." },
  { id: "insignia", name: "Insignia", category: "geral", weight: 0, cost: 5, description: "Insignia que identifica un cargo, facción o unidad militar." },
  { id: "letter_of_introduction", name: "Carta de presentación", category: "geral", weight: 0, cost: 1, description: "Carta que presenta al portador ante contactos, instituciones o aliados." },
];

export function getGear(id: string): GearDef | undefined {
  return GEAR.find((g) => g.id === id);
}
