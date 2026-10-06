import { createClient, type Client, type InValue } from "@libsql/client";
import fs from "node:fs";
import path from "node:path";
import { SCHEMA_SQL } from "./schema";

const remoteUrl = process.env.TURSO_DATABASE_URL;
const localPath = path.resolve(
  process.cwd(),
  process.env.DATABASE_PATH ?? "data/dev.db",
);
const url = remoteUrl ?? `file:${localPath}`;
const isFile = !remoteUrl;

const globalForDb = globalThis as unknown as { __libsql?: Client };
export const client: Client =
  globalForDb.__libsql ??
  (globalForDb.__libsql = createClient({
    url,
    authToken: process.env.TURSO_AUTH_TOKEN,
  }));

let ready: Promise<void> | undefined;

async function initialize(): Promise<void> {
  if (isFile) {
    fs.mkdirSync(path.dirname(localPath), { recursive: true });
    await client.execute("PRAGMA busy_timeout = 5000");
    await client.execute("PRAGMA journal_mode = WAL");
    await client.execute("PRAGMA foreign_keys = ON");
  }
  await client.executeMultiple(SCHEMA_SQL);
  const cols = await client.execute("PRAGMA table_info(characters)");
  if (!cols.rows.some((r) => r.name === "user_id")) {
    await client.execute("ALTER TABLE characters ADD COLUMN user_id TEXT");
  }
  await client.execute(
    "CREATE INDEX IF NOT EXISTS idx_characters_user ON characters(user_id, updated_at DESC)",
  );
}

function ensureReady(): Promise<void> {
  if (!ready) {
    ready = initialize().catch((e) => {
      ready = undefined;
      throw e;
    });
  }
  return ready;
}

export async function all<T>(sql: string, args: InValue[] = []): Promise<T[]> {
  await ensureReady();
  const res = await client.execute({ sql, args });
  return res.rows as unknown as T[];
}

export async function get<T>(
  sql: string,
  args: InValue[] = [],
): Promise<T | undefined> {
  return (await all<T>(sql, args))[0];
}

export async function run(sql: string, args: InValue[] = []): Promise<number> {
  await ensureReady();
  const res = await client.execute({ sql, args });
  return Number(res.rowsAffected);
}
