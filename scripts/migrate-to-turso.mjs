import { DatabaseSync } from "node:sqlite";
import { createClient } from "@libsql/client";
import { SCHEMA_SQL } from "../src/lib/schema.ts";

const sourceUrl = process.env.SOURCE_DATABASE_URL ?? "file:data/dev.db";
const targetUrl = process.env.TURSO_DATABASE_URL;
const targetToken = process.env.TURSO_AUTH_TOKEN;

if (!targetUrl) {
  console.error("Defina TURSO_DATABASE_URL (e TURSO_AUTH_TOKEN) no ambiente.");
  process.exit(1);
}
const sourceFile = sourceUrl.startsWith("file:") ? sourceUrl.slice(5) : sourceUrl;
const source = new DatabaseSync(sourceFile, { readOnly: true });
const target = createClient({ url: targetUrl, authToken: targetToken });

await target.executeMultiple(SCHEMA_SQL);
await target.execute(
  "CREATE INDEX IF NOT EXISTS idx_characters_user ON characters(user_id, updated_at DESC)",
);
await target.execute(
  "CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at)",
);

function rows(table) {
  return source.prepare(`SELECT * FROM ${table}`).all();
}

const stats = {};

try {
  const users = rows("users");
  if (users.length > 0) {
    await target.batch(
      users.map((u) => ({
        sql: "INSERT OR IGNORE INTO users (id, username, password_hash, created_at) VALUES (?, ?, ?, ?)",
        args: [u.id, u.username, u.password_hash, u.created_at],
      })),
      "write",
    );
  }
  stats.users = users.length;

  const now = new Date().toISOString();
  const sessions = rows("sessions").filter((s) => s.expires_at > now);
  if (sessions.length > 0) {
    await target.batch(
      sessions.map((s) => ({
        sql: "INSERT OR IGNORE INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)",
        args: [s.token_hash, s.user_id, s.expires_at, s.created_at],
      })),
      "write",
    );
  }
  stats.sessions = sessions.length;

  const chars = rows("characters");
  if (chars.length > 0) {
    await target.batch(
      chars.map((c) => ({
        sql: `INSERT OR IGNORE INTO characters
              (id, user_id, name, level, class_id, race_id, complete, step, data, created_at, updated_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          c.id,
          c.user_id ?? null,
          c.name,
          c.level,
          c.class_id,
          c.race_id,
          c.complete,
          c.step,
          c.data,
          c.created_at,
          c.updated_at,
        ],
      })),
      "write",
    );
  }
  stats.characters = chars.length;
} finally {
  source.close();
}

console.log("Migração concluída:", JSON.stringify(stats));
