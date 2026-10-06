"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui";
import type { CharacterSummary } from "@/domain/types";
import { useData, useFormat, useT } from "@/lib/i18n/client";

export function CharacterList({ items }: { items: CharacterSummary[] }) {
  const router = useRouter();
  const t = useT();
  const d = useData();
  const fmt = useFormat();
  const [creating, setCreating] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [removed, setRemoved] = useState<string[]>([]);
  const [deleteError, setDeleteError] = useState(false);

  const visible = items.filter((item) => !removed.includes(item.id));

  async function handleCreate() {
    setCreating(true);
    try {
      const res = await fetch("/api/characters", { method: "POST" });
      const { id } = await res.json();
      router.push(`/character/${id}/edit`);
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(id: string) {
    setConfirmId(null);
    setDeleteError(false);
    setPending(true);
    setRemoved((prev) => [...prev, id]);
    try {
      const res = await fetch(`/api/characters/${id}`, { method: "DELETE" });
      if (!res.ok && res.status !== 404) throw new Error(`DELETE ${res.status}`);
      router.refresh();
    } catch (e) {
      console.error(t("pages.list.deleteFailed"), e);
      setRemoved((prev) => prev.filter((r) => r !== id));
      setDeleteError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          {t(
            visible.length === 1 ? "pages.list.countOne" : "pages.list.countMany",
            { count: fmt.num(visible.length) },
          )}
          {deleteError && (
            <span className="ml-3 text-red-400">
              {t("pages.list.deleteFailed")}
            </span>
          )}
        </p>
        <button
          onClick={handleCreate}
          disabled={creating}
          className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {creating ? t("creating") : `+ ${t("create")}`}
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 p-12 text-center">
          <p className="text-zinc-400">{t("pages.list.emptyTitle")}</p>
          <p className="mt-1 text-sm text-zinc-500">
            {t("pages.list.emptyHint", { button: t("create") })}
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map((item) => {
            const race = d.getRace(item.raceId);
            const cls = d.getClass(item.classId);
            const confirming = confirmId === item.id;
            return (
              <li
                key={item.id}
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm shadow-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-700/60 hover:shadow-lg hover:shadow-black/10"
              >
                <Link
                  href={`/character/${item.id}`}
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-zinc-800 text-3xl font-semibold text-zinc-600">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt=""
                        width={112}
                        height={112}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      (item.name || "?").slice(0, 1).toUpperCase()
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="truncate text-lg font-bold text-zinc-100 transition group-hover:text-amber-400">
                        {item.name || t("pages.list.noName")}
                      </span>
                      {!item.complete && <Badge color="amber">{t("pages.list.draft")}</Badge>}
                    </span>
                    {race && (
                      <span className="mt-0.5 block truncate text-sm text-zinc-400">
                        {race.name}
                      </span>
                    )}
                    <span className="mt-2 block truncate text-sm text-zinc-300">
                      {cls?.name ?? t("pages.list.unknownClass")}
                      {` - ${t("level")} ${fmt.num(item.level)}`}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500">
                      {t("sheet.hpAbbr")}: {fmt.num(item.hpCurrent)}/{fmt.num(item.hpMax)}
                    </span>
                    <span className="block text-xs text-zinc-500">
                      {t("sheet.acAbbr")}: {fmt.num(item.ac)}
                    </span>
                  </span>
                </Link>
                <div className="flex shrink-0 flex-col items-stretch gap-2">
                  {confirming ? (
                    <>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={pending}
                        className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
                      >
                        {pending ? t("pages.list.deleting") : t("common.confirmDelete")}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        disabled={pending}
                        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-500"
                      >
                        {t("common.cancel")}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setConfirmId(item.id)}
                      disabled={pending}
                      className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
                    >
                      {t("common.delete")}
                    </button>
                  )}
                  <Link
                    href={`/character/${item.id}/edit`}
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-center text-xs font-medium text-white transition hover:bg-emerald-500"
                  >
                    {t("common.edit")}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
