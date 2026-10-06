"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui";
import { useT } from "@/lib/i18n/client";

const ACCEPT = ".txt,.md,.markdown,.csv,text/plain,text/markdown,text/csv";

export function LoreBox({
  id,
  lore,
  className = "",
}: {
  id: string;
  lore?: string;
  className?: string;
}) {
  const t = useT();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(lore ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  async function save() {
    setBusy(true);
    setError(false);
    try {
      const res = await fetch(`/api/characters/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lore: value.slice(0, 30000) }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      setEditing(false);
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  async function importFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const text = await file.text();
      setValue((prev) =>
        prev.trim() ? `${prev.replace(/\s+$/, "")}\n\n${text}` : text,
      );
      setEditing(true);
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <Card title={t("sheet.lore.title")} className={className}>
      {!editing ? (
        <div className="flex flex-col gap-3">
          <p className="whitespace-pre-wrap text-sm text-zinc-400">
            {value || t("sheet.lore.empty")}
          </p>
          <div>
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              {t("sheet.lore.edit")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={10}
            className="w-full resize-y rounded-md border border-zinc-700 bg-zinc-900/60 p-3 text-sm text-zinc-200 outline-none transition focus:border-amber-600"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={save}
              disabled={busy}
              className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              {t("common.save")}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setError(false);
                setValue(lore ?? "");
              }}
              disabled={busy}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400 disabled:opacity-50"
            >
              {t("common.cancel")}
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={busy}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400 disabled:opacity-50"
            >
              {t("sheet.lore.import")}
            </button>
            <span className="text-xs text-zinc-600">{t("sheet.lore.importHint")}</span>
            {error && <span className="text-xs text-red-400">{t("api.generic")}</span>}
          </div>
        </div>
      )}
      <input
        ref={fileRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={importFile}
      />
    </Card>
  );
}
