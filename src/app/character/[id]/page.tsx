import { notFound } from "next/navigation";
import { CombatQuickBar } from "@/components/sheet/CombatQuickBar";
import { SheetView } from "@/components/sheet/SheetView";
import {
  armorClass,
  initiative,
  maxHp,
  speed,
} from "@/domain/calc";
import { getCharacter } from "@/lib/characters";
import { requireUser } from "@/lib/auth";
import { getI18n } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

export default async function CharacterSheetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data: d } = await getI18n();
  const user = await requireUser();
  const { id } = await params;
  const doc = await getCharacter(id, user.id);
  if (!doc) notFound();

  const hp = maxHp(doc, d);
  const ac = armorClass(doc, d);
  const init = initiative(doc, d);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <CombatQuickBar
        characterId={id}
        hpCurrent={doc.combat.hpCurrent}
        hpMax={hp.value}
        hpTemp={doc.combat.hpTemp}
        ac={ac.value}
        initiative={init.value}
        speed={speed(doc, d)}
      />
      <SheetView doc={doc} characterId={id} />
    </main>
  );
}
