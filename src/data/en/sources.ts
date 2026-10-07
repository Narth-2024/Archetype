import { RACES, SUBRACES } from "./races";

export type SourceDef = { id: string; name: string };

export const SOURCES: SourceDef[] = [
  { id: "phb", name: "Player's Handbook (PHB)" },
  { id: "scag", name: "Sword Coast Adventurer's Guide (SCAG)" },
  { id: "mtf", name: "Mordenkainen's Tome of Foes (MToF)" },
  { id: "vg", name: "Volo's Guide to Monsters (VGtM)" },
  { id: "mtotm", name: "Mordenkainen's Monsters of the Multiverse (MPMM)" },
  { id: "ftd", name: "Fizban's Treasury of Dragons (FTD)" },
  { id: "tce", name: "Tasha's Cauldron of Everything (TCoE)" },
  { id: "erlw", name: "Eberron: Rising from the Last War (ERLW)" },
  { id: "egw", name: "Explorer's Guide to Wildemount (EGtW)" },
  { id: "ggr", name: "Guildmaster's Guide to Ravnica (GGR)" },
  { id: "moot", name: "Mythic Odysseys of Theros (MOoT)" },
  { id: "vgr", name: "Van Richten's Guide to Ravenloft (VGR)" },
  { id: "scc", name: "Strixhaven: A Curriculum of Chaos (SCC)" },
  { id: "sps", name: "Spelljammer: Adventures in Space (SpS)" },
  { id: "dsotdq", name: "Dragonlance: Shadow of the Dragon Queen (DSotDQ)" },
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
