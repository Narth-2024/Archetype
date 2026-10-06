import { createHash, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { get, run } from "./db";

export const SESSION_COOKIE = "fs_session";
export const SESSION_DAYS = 30;

export type SessionUser = { id: string; username: string };

const DUMMY_HASH = hashPassword(randomBytes(16).toString("hex"));

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, salt, hash] = stored.split("$");
  if (scheme !== "scrypt" || !salt || !hash) return false;
  const expected = Buffer.from(hash, "hex");
  const candidate = scryptSync(password, salt, expected.length);
  return (
    candidate.length === expected.length &&
    timingSafeEqual(candidate, expected)
  );
}

export function verifyLogin(password: string, stored: string | undefined): boolean {
  return verifyPassword(password, stored ?? DUMMY_HASH);
}

function tokenHash(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(userId: string): Promise<string> {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86_400_000).toISOString();
  await run(
    "INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)",
    [tokenHash(token), userId, expiresAt],
  );
  return token;
}

export async function destroySession(token: string): Promise<void> {
  await run("DELETE FROM sessions WHERE token_hash = ?", [tokenHash(token)]);
}

export function sessionCookie() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.VERCEL === "1",
    path: "/",
    maxAge: SESSION_DAYS * 86_400,
  };
}

async function userFromToken(token: string): Promise<SessionUser | undefined> {
  const row = await get<{ expires_at: string; id: string; username: string }>(
    `SELECT s.expires_at, u.id, u.username
     FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ?`,
    [tokenHash(token)],
  );
  if (!row) return undefined;
  if (row.expires_at <= new Date().toISOString()) {
    await destroySession(token);
    return undefined;
  }
  return { id: row.id, username: row.username };
}

export async function readSessionUser(): Promise<SessionUser | undefined> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return undefined;
  return userFromToken(token);
}

export async function requireUser(): Promise<SessionUser> {
  const user = await readSessionUser();
  if (!user) redirect("/login");
  return user;
}
