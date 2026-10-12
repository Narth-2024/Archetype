"use client";

import { useT } from "@/lib/i18n/client";
import type { CharacterDoc } from "@/domain/types";

export function SheetActions({ doc, characterId }: { doc: CharacterDoc; characterId: string }) {
  const t = useT();

  function exportJson() {
    const blob = new Blob([JSON.stringify(doc, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeName = (doc.identity.name || "character")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    a.href = url;
    a.download = `${safeName || "character"}-${characterId}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <button
        type="button"
        onClick={exportJson}
        title={t("sheet.exportJson")}
        aria-label={t("sheet.exportJson")}
        className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
      >
        ⬇ JSON
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        title={t("sheet.print")}
        aria-label={t("sheet.print")}
        className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
      >
        🖨 {t("sheet.print")}
      </button>
    </>
  );
}
