import { notFound } from "next/navigation";
import { CharacterWizard } from "@/components/wizard/CharacterWizard";
import { WizardProvider } from "@/components/wizard/context";
import { getCharacter } from "@/lib/characters";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function EditCharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const doc = await getCharacter(id, user.id);
  if (!doc) notFound();

  return (
    <WizardProvider initialDoc={doc} characterId={id}>
      <CharacterWizard />
    </WizardProvider>
  );
}
