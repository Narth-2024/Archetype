import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { get, run } from "@/lib/db";
import {
  createSession,
  hashPassword,
  sessionCookie,
  SESSION_COOKIE,
} from "@/lib/auth";
import { adoptOrphanCharacters } from "@/lib/characters";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    username?: string;
    password?: string;
  } | null;
  const username = (body?.username ?? "").trim().toLowerCase();
  const password = body?.password ?? "";
  if (!/^[a-z0-9_]{3,32}$/.test(username)) {
    return NextResponse.json(
      { error: "Usuário: 3 a 32 caracteres (letras, números ou _)." },
      { status: 400 },
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "A senha precisa de pelo menos 6 caracteres." },
      { status: 400 },
    );
  }
  const first = ((await get<{ n: number }>("SELECT COUNT(*) AS n FROM users"))?.n ?? 0) === 0;
  const id = randomUUID();
  try {
    await run("INSERT INTO users (id, username, password_hash) VALUES (?, ?, ?)", [
      id,
      username,
      hashPassword(password),
    ]);
  } catch {
    return NextResponse.json(
      { error: "Esse nome de usuário já existe." },
      { status: 409 },
    );
  }
  if (first) await adoptOrphanCharacters(id);
  const token = await createSession(id);
  const res = NextResponse.json({ ok: true, username }, { status: 201 });
  res.cookies.set(SESSION_COOKIE, token, sessionCookie());
  return res;
}
