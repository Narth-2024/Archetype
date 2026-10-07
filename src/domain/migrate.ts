import type { CharacterDoc } from "./types";

export function migrateDoc(raw: unknown): CharacterDoc {
  const doc = raw as Record<string, unknown> & {
    identity: Record<string, unknown>;
  };

  if (doc.schemaVersion === 1) {
    const classId = (doc.identity.classId as string) ?? "";
    const level = (doc.identity.level as number) ?? 1;
    doc.identity.classes = classId ? [{ classId, level }] : [];
    delete doc.identity.classId;
    delete doc.identity.level;
    doc.identity.abilityMode = "pontos";
    doc.schemaVersion = 2;
  }

  if (doc.schemaVersion === 2) {
    doc.identity.subraceId ??= "";
    doc.feats ??= [];
    doc.schemaVersion = 3;
  }

  const identity = doc.identity as CharacterDoc["identity"];
  identity.abilityMode ??= "pontos";
  identity.subraceId ??= "";
  identity.classes ??= [];
  identity.raceBonusChoices ??= [];
  if (identity.raceId === "humano_variante") {
    identity.raceId = "humano";
    identity.subraceId = "humano_variante";
  }
  identity.classes = identity.classes.filter((c) => c.classId && c.level > 0);
  doc.feats ??= [];
  doc.photo ??= "";
  doc.lore ??= "";

  return doc as unknown as CharacterDoc;
}
