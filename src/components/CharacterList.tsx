"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CharacterSummary } from "@/domain/types";
import { getClass, getRace } from "@/data";

export function CharacterList({ items }: { items: CharacterSummary[] }) {
  const router = useRouter();
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
      console.error("Falha ao excluir:", e);
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
          {visible.length} personagem{visible.length === 1 ? "" : "ns"}
          {deleteError && (
            <span className="ml-3 text-red-400">
              Falha ao excluir. Tente de novo.
            </span>
          )}
        </p>
        <button
          onClick={handleCreate}
          disabled={creating}
          className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          {creating ? "Criando..." : "+ Novo personagem"}
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-lg border border-dashed border-zinc-700 p-12 text-center">
          <p className="text-zinc-400">Nenhum personagem ainda.</p>
          <p className="mt-1 text-sm text-zinc-500">
            Clique em &quot;Novo personagem&quot; para começar a criar sua ficha
            passo a passo.
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => {
            const race = getRace(item.raceId);
            const cls = getClass(item.classId);
            const confirming = confirmId === item.id;
            return (
              <li
                key={item.id}
                className="group flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 bg-gradient-to-b from-white/[0.04] to-transparent p-5 shadow-sm shadow-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-700/60 hover:shadow-lg hover:shadow-black/10"
              >
                <Link href={`/character/${item.id}`} className="block">
                  <p className="text-lg font-semibold text-zinc-100 group-hover:text-amber-400">
                    {item.name || "Sem nome"}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {cls?.name ?? "Classe?"}
                    {race ? ` · ${race.name}` : ""}
                    {` · Nível ${item.level}`}
                  </p>
                  <p className="mt-3 text-xs text-zinc-500">
                    {item.complete ? "Ficha completa" : "Rascunho"} · atualizado{" "}
                    {item.updatedAt.slice(0, 10)}
                  </p>
                </Link>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    href={`/character/${item.id}/edit`}
                    className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-amber-700 hover:text-amber-400"
                  >
                    Editar
                  </Link>
                  {confirming ? (
                    <>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={pending}
                        className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
                      >
                        {pending ? "Excluindo..." : "Confirmar exclusão"}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        disabled={pending}
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-500"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setConfirmId(item.id)}
                      disabled={pending}
                      className="rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-red-800 hover:text-red-400 disabled:opacity-50"
                    >
                      Excluir
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
