import { NextResponse } from "next/server";
import { get } from "@/lib/db";
import {
  createSession,
  sessionCookie,
  verifyLogin,
  SESSION_COOKIE,
} from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    username?: string;
    password?: string;
  } | null;
  const username = (body?.username ?? "").trim().toLowerCase();
  const password = body?.password ?? "";
  const row = await get<{ id: string; password_hash: string }>(
    "SELECT id, password_hash FROM users WHERE username = ?",
    [username],
  );
  const ok = verifyLogin(password, row?.password_hash);
  if (!row || !ok) {
    return NextResponse.json(
      { error: "Usuário ou senha incorretos." },
      { status: 401 },
    );
  }
  const token = await createSession(row.id);
  const res = NextResponse.json({ ok: true, username });
  res.cookies.set(SESSION_COOKIE, token, sessionCookie());
  return res;
}
