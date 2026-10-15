import { NextResponse } from "next/server";
import { createCharacter, listCharacters } from "@/lib/characters";
import { readSessionUser } from "@/lib/auth";
import { newCharacterDoc } from "@/domain/create";
import { parseImportedDoc } from "@/domain/import";
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
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  const isBlank =
    body === null ||
    typeof body !== "object" ||
    Object.keys(body).length === 0;
  const doc = isBlank ? newCharacterDoc() : parseImportedDoc(body);
  if (!doc) {
    return NextResponse.json({ error: t("api.invalidDoc") }, { status: 400 });
  }
  const id = await createCharacter(doc, user.id);
  return NextResponse.json({ id }, { status: 201 });
}
