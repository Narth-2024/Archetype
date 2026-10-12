"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, TextArea } from "@/components/ui";
import { useT } from "@/lib/i18n/client";

const MAX = 10000;

export function NotesBox({
  id,
  notes,
  className = "",
}: {
  id: string;
  notes?: string;
  className?: string;
}) {
  const t = useT();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(notes ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const over = value.length > MAX;

  async function save() {
    if (over) return;
    setBusy(true);
    setError(false);
    try {
      const res = await fetch(`/api/characters/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: value }),
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

  return (
    <Card title={t("sheet.notes.title")} className={className}>
      {!editing ? (
        <div className="flex flex-col gap-3">
          <p className="whitespace-pre-wrap text-sm text-zinc-400">
            {value || t("sheet.notes.empty")}
          </p>
          <div>
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400"
            >
              {t("sheet.notes.edit")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={6}
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={save}
              disabled={busy || over}
              className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              {t("common.save")}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setError(false);
                setValue(notes ?? "");
              }}
              disabled={busy}
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-amber-600 hover:text-amber-400 disabled:opacity-50"
            >
              {t("common.cancel")}
            </button>
            <span
              className={`text-xs ${over ? "text-red-400" : "text-zinc-600"}`}
            >
              {value.length}/{MAX}
            </span>
            {error && <span className="text-xs text-red-400">{t("api.generic")}</span>}
          </div>
        </div>
      )}
    </Card>
  );
}
