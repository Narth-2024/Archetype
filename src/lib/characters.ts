import { randomUUID } from "node:crypto";
import { all, get, run } from "./db";
import type { CharacterDoc, CharacterSummary } from "../domain/types";
import { migrateDoc } from "../domain/migrate";
import { armorClass, classEntries, maxHp, totalLevel } from "../domain/calc";

type Row = {
  id: string;
  name: string;
  level: number;
  class_id: string;
  race_id: string;
  complete: number;
  step: number;
  data: string;
  updated_at: string;
};

function summaryFrom(doc: CharacterDoc) {
  const entries = classEntries(doc);
  const primary = entries.length > 0 ? entries[0].classId : "";
  return {
    name: doc.identity.name || "",
    level: totalLevel(doc),
    classId: primary,
    raceId: doc.identity.raceId,
    complete: doc.complete ? 1 : 0,
    step: doc.step,
  };
}

function toSummary(row: Row): CharacterSummary {
  const doc = migrateDoc(JSON.parse(row.data));
  return {
    id: row.id,
    name: row.name,
    level: row.level,
    classId: row.class_id,
    raceId: row.race_id,
    complete: row.complete === 1,
    updatedAt: row.updated_at,
    photo: doc.photo ?? null,
    ac: armorClass(doc).value,
    hpCurrent: doc.combat.hpCurrent,
    hpMax: maxHp(doc).value,
  };
}

export async function listCharacters(userId: string): Promise<CharacterSummary[]> {
  const rows = await all<Row>(
    "SELECT id, name, level, class_id, race_id, complete, step, data, updated_at FROM characters WHERE user_id = ? ORDER BY updated_at DESC",
    [userId],
  );
  return rows.map(toSummary);
}

export async function getCharacter(
  id: string,
  userId: string,
): Promise<CharacterDoc | undefined> {
  const row = await get<{ data: string }>(
    "SELECT data FROM characters WHERE id = ? AND user_id = ?",
    [id, userId],
  );
  if (!row) return undefined;
  return migrateDoc(JSON.parse(row.data));
}

export async function createCharacter(
  doc: CharacterDoc,
  userId: string,
  id?: string,
): Promise<string> {
  const charId = id ?? randomUUID();
  const s = summaryFrom(doc);
  await run(
    "INSERT INTO characters (id, user_id, name, level, class_id, race_id, complete, step, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [charId, userId, s.name, s.level, s.classId, s.raceId, s.complete, s.step, JSON.stringify(doc)],
  );
  return charId;
}

export async function updateCharacter(
  id: string,
  userId: string,
  doc: CharacterDoc,
): Promise<boolean> {
  const s = summaryFrom(doc);
  const changes = await run(
    `UPDATE characters
     SET name = ?, level = ?, class_id = ?, race_id = ?, complete = ?, step = ?, data = ?, updated_at = datetime('now')
     WHERE id = ? AND user_id = ?`,
    [s.name, s.level, s.classId, s.raceId, s.complete, s.step, JSON.stringify(doc), id, userId],
  );
  return changes > 0;
}

export async function deleteCharacter(id: string, userId: string): Promise<boolean> {
  const changes = await run("DELETE FROM characters WHERE id = ? AND user_id = ?", [
    id,
    userId,
  ]);
  return changes > 0;
}

export async function adoptOrphanCharacters(userId: string): Promise<number> {
  return run("UPDATE characters SET user_id = ? WHERE user_id IS NULL", [userId]);
}
