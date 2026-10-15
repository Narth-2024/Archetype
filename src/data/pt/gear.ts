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
  // --- focos e grimórios ---
  { id: "component_pouch", name: "Saco de componentes", category: "foco", weight: 2, cost: 25, description: "Bolsa de couro com giz, pó e gravetos; contém os componentes não dispendiosos de magias.", spellcaster: "universal" },
  { id: "arcane_focus", name: "Foco arcano", category: "foco", weight: 1, cost: 20, description: "Cristal, orbe, cajado ou varinha; substitui os componentes não dispendiosos de magias arcanas.", spellcaster: "arcano" },
  { id: "holy_symbol", name: "Símbolo sagrado", category: "foco", weight: 1, cost: 5, description: "Amuleto, medalhão ou símbolo exibido; substitui os componentes não dispendiosos de magias divinas.", spellcaster: "divino" },
  { id: "druidic_focus", name: "Foco druídico", category: "foco", weight: 2, cost: 10, description: "Baga, cacho de ervas, penas, graveto oco ou ramo de carvalho; substitui os componentes não dispendiosos druídicos.", spellcaster: "druidico" },
  { id: "spellbook", name: "Grimório", category: "foco", weight: 3, cost: 50, description: "Livro de 100 páginas onde o mago copia e prepara suas magias.", spellcaster: "arcano" },
  // --- mochilas ---
  { id: "backpack", name: "Mochila", category: "mochila", weight: 5, cost: 12, description: "Mochila com alças; cabe em um balcão de carga de 18 kg, com quatro compartimentos." },
  { id: "explorers_pack", name: "Mochila do explorador", category: "mochila", weight: 59, cost: 10, description: "Mochila, saco de dormir, kit de jantar, caixa de fogo, 10 dias de rações, cantil e 15 m de corda." },
  { id: "scholars_pack", name: "Mochila do erudito", category: "mochila", weight: 25, cost: 40, description: "Mochila, frasco de tinta, pena, pergaminho, areia, pequena faca e livros de erudição." },
  { id: "entertainers_pack", name: "Mochila do artista", category: "mochila", weight: 38, cost: 40, description: "Mochila, saco de dormir, trajes de fantasia, 5 velas, travesseiro, 2 dias de rações e maquiagem." },
  { id: "thieves_pack", name: "Mochila do ladrão", category: "mochila", weight: 25, cost: 40, description: "Mochila, pé de cabra, 10 velas, saco, 5 dias de rações, cantil e 15 m de corda." },
  { id: "travelers_pack", name: "Mochila do viajante", category: "mochila", weight: 24, cost: 16, description: "Mochila, saco de dormir, kit de jantar, caixa de fogo, 10 dias de rações, cantil e capa de viagem." },
  { id: "sailors_kit", name: "Kit do marinheiro", category: "mochila", weight: 40, cost: 12, description: "Mochila, saco de dormir, kit de jantar, caixa de fogo, 10 dias de rações, cantil e 15 m de corda." },
  { id: "monster_hunters_pack", name: "Kit do caçador de monstros", category: "mochila", weight: 45, cost: 25, description: "Mochila, saco de dormir, kit de jantar, caixa de fogo, 10 dias de rações, cantil, estaca de madeira e marreta." },
  // --- ferramentas ---
  { id: "thieves_tools", name: "Ferramentas de ladrão", category: "ferramenta", weight: 1, cost: 25, description: "Ferramentas para abrir fechaduras e desarmar armadilhas; requer proficiência." },
  { id: "disguise_kit", name: "Kit de disfarces", category: "ferramenta", weight: 3, cost: 25, description: "Creme, tinta, espelho, roupa de fantasia e maquiagem para mudar de aparência; requer proficiência." },
  { id: "forgery_kit", name: "Kit de falsificação", category: "ferramenta", weight: 5, cost: 15, description: "Ferramentas e materiais para imitar documentos, selos e escrita; requer proficiência." },
  { id: "fishing_tackle", name: "Equipamento de pesca", category: "ferramenta", weight: 4, cost: 1, description: "Vara, linha com anzol, isca artificial e rede de mão." },
  { id: "miners_pick", name: "Picareta de minerador", category: "ferramenta", weight: 10, cost: 2, description: "Picareta pesada para quebrar rocha; funciona como arma improvisada em um punhado." },
  { id: "smiths_tools", name: "Ferramentas de ferreiro", category: "ferramenta", weight: 20, cost: 20, description: "Bigorna, martelo e ferramentas para forjar e reparar itens de metal; requer proficiência." },
  { id: "herbalism_kit", name: "Kit de herborista", category: "ferramenta", weight: 3, cost: 25, description: "Frascos, ervas e ferramentas para identificar plantas e preparar antídotos e remédios; requer proficiência." },
  { id: "navigators_tools", name: "Ferramentas de navegador", category: "ferramenta", weight: 6, cost: 25, description: "Carta náutica, bússola e instrumentos de navegação; requer proficiência." },
  { id: "poisoners_kit", name: "Kit de envenenador", category: "ferramenta", weight: 2, cost: 50, description: "Ferramentas, vidrarias e ingredientes para preparar venenos; requer proficiência." },
  { id: "dice_set", name: "Kit de dados", category: "ferramenta", weight: 0, cost: 1, description: "Dados e peças para jogos de azar; requer proficiência em jogos." },
  { id: "herbs", name: "Ervas medicinais", category: "ferramenta", weight: 0.5, cost: 1, description: "Ervas colhidas; combinadas com um kit de herborista, servem para preparar remédios." },
  // --- instrumentos ---
  { id: "lute", name: "Lira", category: "instrumento", weight: 2, cost: 30, description: "Instrumento de cordas com corpo de madeira; requer proficiência." },
  { id: "drum", name: "Tambor", category: "instrumento", weight: 3, cost: 15, description: "Instrumento de percussão de couro e madeira; requer proficiência." },
  { id: "flute", name: "Flauta", category: "instrumento", weight: 1, cost: 5, description: "Instrumento de sopro de madeira; requer proficiência." },
  { id: "bagpipes", name: "Gaitas", category: "instrumento", weight: 6, cost: 30, description: "Instrumento de sopros com bolsa de ar; requer proficiência." },
  // --- munição ---
  { id: "arrows", name: "Flechas (20)", category: "municao", weight: 1, cost: 1, description: "20 flechas; munição para arcos." },
  { id: "crossbow_bolts", name: "Virotes de besta (20)", category: "municao", weight: 1, cost: 1, description: "20 virotes; munição para bestas." },
  // --- equipamento geral ---
  { id: "tent", name: "Barraca", category: "geral", weight: 20, cost: 10, description: "Barraca de lona para duas pessoas." },
  { id: "rope_hempen", name: "Corda de cânhamo", category: "geral", weight: 10, cost: 1, description: "15 metros de corda; suporta até 270 kg." },
  { id: "torch", name: "Tocha", category: "geral", weight: 1, cost: 1, description: "Queima por 1 hora e ilumina a curta distância." },
  { id: "lamp", name: "Lâmpada", category: "geral", weight: 2, cost: 5, description: "Lâmpada de óleo; ilumina a curta distância enquanto tiver combustível." },
  { id: "waterskin", name: "Cantil", category: "geral", weight: 5, cost: 2, description: "Bolsa de couro para carregar água (cerca de 2 litros)." },
  { id: "rations", name: "Rações de viagem", category: "geral", weight: 2, cost: 5, description: "1 dia de comida seca para viagem." },
  { id: "acid", name: "Ácido", category: "geral", weight: 1, cost: 25, description: "Frasco de ácido; arremessado, causa 2d6 de dano ácido." },
  { id: "alchemist_fire", name: "Fogo-alquímico", category: "geral", weight: 1, cost: 50, description: "Frasco adesivo; causa 2d4 de dano fogo no impacto e dano contínuo até ser apagado." },
  { id: "holy_water", name: "Água benta", category: "geral", weight: 1, cost: 25, description: "Frasco abençoado; arremessado, causa 2d6 de dano radiante a mortos-vivos e elementos." },
  { id: "antitoxin", name: "Antitoxina", category: "geral", weight: 1, cost: 50, description: "Vial; concede vantagem em testes de resistência contra veneno por 1 hora." },
  { id: "healers_kit", name: "Kit de curandeiro", category: "geral", weight: 3, cost: 25, description: "Banda, bálsamo e unguento; 10 usos para estabilizar alguém sem fazer testes." },
  { id: "ball_bearings", name: "Esferas de pregos", category: "geral", weight: 2, cost: 1, description: "Bolsa de esferas espalhadas num quadrado de 3 m; cria terreno difícil até ser varrida." },
  { id: "caltrops", name: "Espinchos", category: "geral", weight: 2, cost: 5, description: "Espinhos num quadrado de 3 m; quem pisa toma 1d4 de dano perfurante e tem a velocidade reduzida pela metade até curar." },
  { id: "chains", name: "Cadeias", category: "geral", weight: 10, cost: 15, description: "3 metros de corrente de ferro para imobilizar ou prender." },
  { id: "lock", name: "Ferrolho", category: "geral", weight: 1, cost: 20, description: "Ferrolho de qualidade; CD 20 para abrir sem ferramentas de ladrão." },
  { id: "mirror", name: "Espelho de aço", category: "geral", weight: 0.5, cost: 5, description: "Espelho de mão de 30 cm." },
  { id: "crowbar", name: "Pé de cabra", category: "geral", weight: 5, cost: 2, description: "Ignora a desvantagem por espaço apertado em testes de FOR para forçar coisas." },
  { id: "shovel", name: "Pá", category: "geral", weight: 5, cost: 2, description: "Pá para cavar terra e enterrar coisas." },
  { id: "costume", name: "Roupas de fantasia", category: "geral", weight: 3, cost: 5, description: "Roupas para performances, festivais ou disfarces comuns." },
  { id: "fine_clothes", name: "Roupas finas", category: "geral", weight: 6, cost: 15, description: "Roupas elegantes para ocasiões sociais importantes." },
  { id: "robes", name: "Vestes", category: "geral", weight: 3, cost: 1, description: "Vestes simples de tecido, comuns entre sacerdotes e eruditos." },
  { id: "incense", name: "Incenso", category: "geral", weight: 0.5, cost: 1, description: "Uma unidade de incenso, queimada em rituais e cerimônias." },
  { id: "ink", name: "Tinta", category: "geral", weight: 0.25, cost: 8, description: "Frasco de tinta para escrever em pergaminho." },
  { id: "quill", name: "Pena", category: "geral", weight: 0, cost: 2, description: "Pena de escrita; combinada com tinta, serve para redigir documentos." },
  { id: "insignia", name: "Insígnia", category: "geral", weight: 0, cost: 5, description: "Insígnia que identifica um cargo, facção ou unidade militar." },
  { id: "letter_of_introduction", name: "Carta de apresentação", category: "geral", weight: 0, cost: 1, description: "Carta que apresenta o portador a contatos, instituições ou aliados." },
];

export function getGear(id: string): GearDef | undefined {
  return GEAR.find((g) => g.id === id);
}
