import { RACES, SUBRACES } from "./races";

export type SourceDef = { id: string; name: string };

export const SOURCES: SourceDef[] = [
  { id: "phb", name: "Manual do Jogador (PHB)" },
  { id: "scag", name: "Guia do Aventureiro da Costa da Espada (SCAG)" },
  { id: "mtf", name: "Tomo de Inimigos de Mordenkainen (MToF)" },
  { id: "vg", name: "Guia de Monstros de Volo (VGtM)" },
  { id: "mtotm", name: "Mordenkainen: Monstros do Multiverso (MPMM)" },
  { id: "ftd", name: "Tesouro de Dragões de Fizban (FTD)" },
  { id: "tce", name: "Caldeirão de Tudo de Tasha (TCoE)" },
  { id: "erlw", name: "Eberron: A Ascensão da Última Guerra (ERLW)" },
  { id: "egw", name: "Guia do Explorador de Wildemount (EGtW)" },
  { id: "ggr", name: "Guia dos Mestres de Guilda de Ravnica (GGR)" },
  { id: "moot", name: "Odisseias Míticas de Theros (MOoT)" },
  { id: "vgr", name: "Guia de Van Richten para Ravenloft (VGR)" },
  { id: "scc", name: "Strixhaven: Um Currículo de Caos (SCC)" },
  { id: "sps", name: "Spelljammer: Aventuras no Espaço (SpS)" },
  { id: "dsotdq", name: "Dragonlance: A Sombra da Rainha Dragão (DSotDQ)" },
  { id: "ai", name: "Acquisitions Inc. (AI)" },
  { id: "lr", name: "Locathah Rising (LR)" },
  { id: "oga", name: "One Grung Above (OGA)" },
  { id: "psk", name: "Plane Shift: Kaladesh (PSK)" },
  { id: "psa", name: "Plane Shift: Amonkhet (PSA)" },
  { id: "psz", name: "Plane Shift: Zendikar (PSZ)" },
  { id: "psi", name: "Plane Shift: Ixalan (PSI)" },
  { id: "dmg", name: "Manual do Mestre (DMG)" },
  { id: "xge", name: "O Guia de Tudo do Xanathar (XGE)" },
  { id: "cos", name: "A Maldição de Strahd (CoS)" },
  { id: "toa", name: "A Tumba da Aniquilação (ToA)" },
  { id: "bgdia", name: "Baldur's Gate: Descida em Avernus (BG:DiA)" },
  { id: "gos", name: "Ghosts of Saltmarsh (GoS)" },
  { id: "rotf", name: "Icewind Dale: Rima da Meia-noite Gélida (RotFM)" },
  { id: "botmt", name: "O Livro de Muitas Coisas (BoMT)" },
  { id: "planescape", name: "Planescape: Aventuras no Multiverso (PlAn)" },
  { id: "bpg", name: "Glória dos Gigantes de Bigby (BPG)" },
  { id: "witchlight", name: "The Wild Beyond the Witchlight (TWBTW)" },
  { id: "tcsr", name: "Tal'Dorei: A Campanha Renascida (TCSR)" },
  { id: "lok", name: "The Lost Laboratory of Kwalish (LoK)" },
  { id: "wgte", name: "Wayfinder's Guide to Eberron (WGtE)" },
  { id: "ddb", name: "D&D Beyond (DDB)" },
  { id: "soh", name: "State of Hillsfar (SoH)" },
  { id: "mba", name: "Mulmaster Bonds and Backgrounds (MBA)" },
  { id: "psin", name: "Plane Shift: Innistrad (PSIn)" },
];

export function getSource(id: string): SourceDef | undefined {
  return SOURCES.find((s) => s.id === id);
}

export function sourcesWithRaces(): SourceDef[] {
  return SOURCES.filter(
    (s) =>
      RACES.some((r) => r.source === s.id) ||
      SUBRACES.some((sub) => sub.source === s.id),
  );
}

export function racesForSource(sourceId: string): typeof RACES {
  if (!sourceId) return RACES;
  return RACES.filter(
    (r) =>
      r.source === sourceId ||
      SUBRACES.some((sub) => sub.raceId === r.id && sub.source === sourceId),
  );
}
