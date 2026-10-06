"use client";

import { useState } from "react";
import { useWizard } from "../context";
import { Badge, Card, Field, NumberInput, Select, TextInput } from "@/components/ui";
import { ARMORS, getBackground, getClass, getWeapon, WEAPONS } from "@/data";
import { classEntries } from "@/domain/calc";
import { lbToKg } from "@/domain/units";
import type { InventoryItem } from "@/domain/types";

const CATEGORY_LABEL: Record<InventoryItem["category"], string> = {
  arma: "Arma",
  armadura: "Armadura",
  escudo: "Escudo",
  ferramenta: "Ferramenta",
  outro: "Outro",
};

export function StepEquipment() {
  const { doc, update } = useWizard();
  const classes = classEntries(doc)
    .map((e) => getClass(e.classId))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const bg = getBackground(doc.identity.backgroundId);

  function addItem(item: Omit<InventoryItem, "id">) {
    update((d) => {
      d.inventory.push({ ...item, id: crypto.randomUUID() });
    });
  }

  function addStartingEquipment() {
    const sources = [
      ...classes.flatMap((c) => c.startingEquipment),
      ...(bg?.equipment ?? []),
    ];
    for (const s of sources) {
      const exists = doc.inventory.some(
        (i) => i.name === s.name && i.catalogId === s.catalogId,
      );
      if (exists) continue;
      const weapon = s.catalogId ? getWeapon(s.catalogId) : undefined;
      const armor = s.catalogId ? ARMORS.find((a) => a.id === s.catalogId) : undefined;
      addItem({
        name: s.name,
        qty: s.qty,
        weight: weapon?.weight ?? armor?.weight ?? null,
        category: weapon ? "arma" : armor?.category === "escudo" ? "escudo" : armor ? "armadura" : "outro",
        catalogId: s.catalogId,
        equipped: false,
        description: "",
      });
    }
  }

  function addFromCatalog(catalogId: string, kind: "arma" | "armadura") {
    if (!catalogId) return;
    if (kind === "arma") {
      const w = getWeapon(catalogId);
      if (!w) return;
      addItem({
        name: w.name,
        qty: 1,
        weight: w.weight,
        category: "arma",
        catalogId: w.id,
        equipped: false,
        description: "",
      });
    } else {
      const a = ARMORS.find((x) => x.id === catalogId);
      if (!a) return;
      addItem({
        name: a.name,
        qty: 1,
        weight: a.weight,
        category: a.category === "escudo" ? "escudo" : "armadura",
        catalogId: a.id,
        equipped: false,
        description: "",
      });
    }
  }

  const equippedCount = doc.inventory.filter((i) => i.equipped).length;

  return (
    <div className="flex flex-col gap-5">
      <Card title="Equipamento inicial sugerido">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={addStartingEquipment}
            className="rounded-md border border-amber-700 px-3 py-1.5 text-sm text-amber-400 transition hover:bg-amber-950/50"
          >
            + Adicionar equipamento da classe/antecedente
          </button>
          <span className="text-xs text-zinc-500">
            {classes.map((c) => c.name).join(" + ") || "Classe"} ·{" "}
            {bg?.name ?? "Antecedente"}
          </span>
        </div>
      </Card>

      <Card title={`Inventário (${doc.inventory.length} itens · ${equippedCount} equipados)`}>
        {doc.inventory.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Inventário vazio. Adicione o equipamento inicial ou itens do
            catálogo abaixo.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {doc.inventory.map((item) => {
              const affectsAc =
                item.equipped && (item.category === "armadura" || item.category === "escudo");
              return (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center gap-3 rounded-md border border-zinc-800 px-3 py-2"
                >
                  <span className="text-sm font-medium text-zinc-200">
                    {item.name}
                  </span>
                  <Badge>{CATEGORY_LABEL[item.category]}</Badge>
                  {item.catalogId && <Badge color="blue">catálogo</Badge>}
                  {affectsAc && <Badge color="green">afeta a CA</Badge>}
                  <div className="ml-auto flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      Qtd
                      <NumberInput
                        value={item.qty}
                        onChange={(n) =>
                          update((d) => {
                            const found = d.inventory.find((i) => i.id === item.id);
                            if (found) found.qty = n;
                          })
                        }
                        min={1}
                        max={999}
                      />
                    </div>
                    <label className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <input
                        type="checkbox"
                        checked={item.equipped}
                        onChange={(e) =>
                          update((d) => {
                            const found = d.inventory.find((i) => i.id === item.id);
                            if (found) found.equipped = e.target.checked;
                          })
                        }
                        className="accent-amber-600"
                      />
                      Equipado
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        update((d) => {
                          d.inventory = d.inventory.filter((i) => i.id !== item.id);
                        })
                      }
                      className="text-xs text-zinc-600 transition hover:text-red-400"
                    >
                      remover
                    </button>
                  </div>
                  {item.weight != null && (
                    <span className="w-full text-xs text-zinc-600">
                      peso unitário: {lbToKg(item.weight)} kg
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Adicionar arma do catálogo">
          <Select
            defaultValue=""
            onChange={(e) => {
              addFromCatalog(e.target.value, "arma");
              e.target.value = "";
            }}
          >
            <option value="">Escolha uma arma...</option>
            {WEAPONS.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name} ({w.damage} {w.damageType})
              </option>
            ))}
          </Select>
        </Card>

        <Card title="Adicionar armadura/escudo do catálogo">
          <Select
            defaultValue=""
            onChange={(e) => {
              addFromCatalog(e.target.value, "armadura");
              e.target.value = "";
            }}
          >
            <option value="">Escolha uma armadura...</option>
            {ARMORS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </Select>
        </Card>
      </div>

      <CustomItemForm onAdd={addItem} />
    </div>
  );
}

function CustomItemForm({
  onAdd,
}: {
  onAdd: (item: Omit<InventoryItem, "id">) => void;
}) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const [category, setCategory] = useState<InventoryItem["category"]>("outro");

  function submit() {
    if (!name.trim()) return;
    onAdd({
      name: name.trim(),
      qty,
      weight: null,
      category,
      catalogId: null,
      equipped: false,
      description: "",
    });
    setName("");
    setQty(1);
    setCategory("outro");
  }

  return (
    <Card title="Adicionar item personalizado">
      <div className="grid gap-3 sm:grid-cols-[1fr_100px_140px_auto] sm:items-end">
        <Field label="Nome">
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Corda de 15 metros"
          />
        </Field>
        <Field label="Qtd">
          <NumberInput value={qty} onChange={setQty} min={1} max={999} />
        </Field>
        <Field label="Categoria">
          <Select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as InventoryItem["category"])
            }
          >
            {Object.entries(CATEGORY_LABEL).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </Select>
        </Field>
        <button
          type="button"
          onClick={submit}
          className="btn-primary h-9 rounded-md px-4 text-sm font-medium text-white"
        >
          Adicionar
        </button>
      </div>
    </Card>
  );
}
