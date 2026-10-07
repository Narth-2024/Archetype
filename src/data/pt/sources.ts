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
