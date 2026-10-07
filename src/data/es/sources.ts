import { RACES, SUBRACES } from "./races";

export type SourceDef = { id: string; name: string };

export const SOURCES: SourceDef[] = [
  { id: "phb", name: "Manual del Jugador (PHB)" },
  { id: "scag", name: "Guía del Aventurero de la Costa de la Espada (SCAG)" },
  { id: "mtf", name: "Tomo de Enemigos de Mordenkainen (MToF)" },
  { id: "vg", name: "Guía de Monstruos de Volo (VGtM)" },
  { id: "mtotm", name: "Mordenkainen: Monstruos del Multiverso (MPMM)" },
  { id: "ftd", name: "El Tesoro de los Dragones de Fizban (FTD)" },
  { id: "tce", name: "La Caldera de Todo de Tasha (TCoE)" },
  { id: "erlw", name: "Eberron: El Ascenso de la Última Guerra (ERLW)" },
  { id: "egw", name: "Guía del Explorador de Wildemount (EGtW)" },
  { id: "ggr", name: "Guía de los Gremios de Maestros de Ravnica (GGR)" },
  { id: "moot", name: "Odiseas Míticas de Theros (MOoT)" },
  { id: "vgr", name: "La Guía de Van Richten para Ravenloft (VGR)" },
  { id: "scc", name: "Strixhaven: Un Currículo de Caos (SCC)" },
  { id: "sps", name: "Spelljammer: Aventuras en el Espacio (SpS)" },
  { id: "dsotdq", name: "Dragonlance: La Sombra de la Reina Dragón (DSotDQ)" },
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
