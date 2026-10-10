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
  { id: "dmg", name: "Manual del Maestro (DMG)" },
  { id: "xge", name: "La Guía de Todo de Xanathar (XGE)" },
  { id: "cos", name: "La Maldición de Strahd (CoS)" },
  { id: "toa", name: "La Tumba de la Aniquilación (ToA)" },
  { id: "bgdia", name: "Baldur's Gate: Descenso al Averno (BG:DiA)" },
  { id: "gos", name: "Ghosts of Saltmarsh (GoS)" },
  { id: "rotf", name: "Icewind Dale: Rima del Guardián de Escarcha (RotFM)" },
  { id: "botmt", name: "El Libro de Mil Cosas (BoMT)" },
  { id: "planescape", name: "Planescape: Aventuras en el Multiverso (PlAn)" },
  { id: "bpg", name: "Grandes Obras de Bigby: Gloria de los Gigantes (BPG)" },
  { id: "witchlight", name: "El Más Allá Salvaje y el Hechizo de la Bruja (TWBTW)" },
  { id: "tcsr", name: "Tal'Dorei: La Campaña Renacida (TCSR)" },
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
