import { NextResponse } from "next/server";
import { createCharacter, listCharacters } from "@/lib/characters";
import { readSessionUser } from "@/lib/auth";
import { newCharacterDoc } from "@/domain/create";
import type { CharacterDoc } from "@/domain/types";
import { getI18n } from "@/lib/i18n/server";

export async function GET() {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: t("api.notAuth") }, { status: 401 });
  }
  return NextResponse.json(await listCharacters(user.id));
}

export async function POST(request: Request) {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: t("api.notAuth") }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as Partial<CharacterDoc> | null;
  const base = newCharacterDoc();
  const doc = {
    ...base,
    ...(body ?? {}),
    identity: { ...base.identity, ...(body?.identity ?? {}) },
  } as CharacterDoc;
  doc.schemaVersion = 3;
  const id = await createCharacter(doc, user.id);
  return NextResponse.json({ id }, { status: 201 });
}
