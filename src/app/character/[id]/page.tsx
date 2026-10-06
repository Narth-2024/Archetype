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

export const dynamic = "force-dynamic";

export default async function CharacterSheetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const doc = await getCharacter(id, user.id);
  if (!doc) notFound();

  const hp = maxHp(doc);
  const ac = armorClass(doc);
  const init = initiative(doc);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <CombatQuickBar
        characterId={id}
        hpCurrent={doc.combat.hpCurrent}
        hpMax={hp.value}
        hpTemp={doc.combat.hpTemp}
        ac={ac.value}
        initiative={init.value}
        speed={speed(doc)}
      />
      <SheetView doc={doc} characterId={id} />
    </main>
  );
}
