import { NextResponse } from "next/server";
import {
  deleteCharacter,
  getCharacter,
  updateCharacter,
} from "@/lib/characters";
import { readSessionUser } from "@/lib/auth";
import { migrateDoc } from "@/domain/migrate";
import type { CharacterDoc } from "@/domain/types";
import { getI18n } from "@/lib/i18n/server";

type Params = { params: Promise<{ id: string }> };

async function unauthorized() {
  const { t } = await getI18n();
  return NextResponse.json({ error: t("api.notAuth") }, { status: 401 });
}

export async function GET(_request: Request, { params }: Params) {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) return unauthorized();
  const { id } = await params;
  const doc = await getCharacter(id, user.id);
  if (!doc) {
    return NextResponse.json({ error: t("api.notFound") }, { status: 404 });
  }
  return NextResponse.json(doc);
}

export async function PUT(request: Request, { params }: Params) {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) return unauthorized();
  const { id } = await params;
  const existing = await getCharacter(id, user.id);
  if (!existing) {
    return NextResponse.json({ error: t("api.notFound") }, { status: 404 });
  }
  const doc = (await request.json().catch(() => null)) as CharacterDoc | null;
  if (!doc || typeof doc !== "object" || !doc.identity) {
    return NextResponse.json({ error: t("api.invalidDoc") }, { status: 400 });
  }
  if (!(await updateCharacter(id, user.id, migrateDoc(doc)))) {
    return NextResponse.json({ error: t("api.notFound") }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: Request, { params }: Params) {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) return unauthorized();
  const { id } = await params;
  const patch = (await request.json().catch(() => null)) as {
    combat?: { hpCurrent?: number; hpTemp?: number };
    photo?: string;
    lore?: string;
  } | null;
  const doc = await getCharacter(id, user.id);
  if (!doc || !patch) {
    return NextResponse.json({ error: t("api.notFound") }, { status: 404 });
  }
  if (patch.combat) {
    if (typeof patch.combat.hpCurrent === "number")
      doc.combat.hpCurrent = patch.combat.hpCurrent;
    if (typeof patch.combat.hpTemp === "number")
      doc.combat.hpTemp = patch.combat.hpTemp;
  }
  if (typeof patch.photo === "string") {
    const valid =
      patch.photo === "" ||
      (/^data:image\/(png|jpe?g|webp|gif|avif);base64,/.test(patch.photo) &&
        patch.photo.length <= 700000);
    if (!valid) {
      return NextResponse.json({ error: t("api.invalidDoc") }, { status: 400 });
    }
    doc.photo = patch.photo;
  }
  if (typeof patch.lore === "string") {
    if (patch.lore.length > 30000) {
      return NextResponse.json({ error: t("api.invalidDoc") }, { status: 400 });
    }
    doc.lore = patch.lore;
  }
  await updateCharacter(id, user.id, doc);
  return NextResponse.json({ ok: true, combat: doc.combat });
}

export async function DELETE(_request: Request, { params }: Params) {
  const { t } = await getI18n();
  const user = await readSessionUser();
  if (!user) return unauthorized();
  const { id } = await params;
  if (!(await deleteCharacter(id, user.id))) {
    return NextResponse.json({ error: t("api.notFound") }, { status: 404 });
  }
  return new NextResponse(null, { status: 204 });
}
