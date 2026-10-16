"use client";

import { useState } from "react";
import type { RollMode } from "@/domain/conditions";
import {
  parseDamageExpression,
  rollAttack,
  rollParsedDamage,
} from "@/domain/dice";
import { useFormat, useT } from "@/lib/i18n/client";

type RollerResult =
  | {
      kind: "attack";
      d20: number;
      rolls: number[];
      mode: RollMode;
      total: number;
      nat: "crit" | "fumble" | null;
    }
  | { kind: "damage"; expr: string; total: number };

export function DiceRoller({
  bonus,
  damageExpr,
  mode = "normal",
}: {
  bonus: number;
  damageExpr: string | null;
  mode?: RollMode;
}) {
  const t = useT();
  const fmt = useFormat();
  const [result, setResult] = useState<RollerResult | null>(null);
  const parsed = damageExpr ? parseDamageExpression(damageExpr) : null;
  const signedBonus = bonus >= 0 ? `+${fmt.num(bonus)}` : fmt.num(bonus);

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <button
        type="button"
        aria-label={t("sheet.rollAttack")}
        onClick={() => {
          const r = rollAttack(bonus, mode);
          setResult({ kind: "attack", ...r });
        }}
        className="rounded-md border border-amber-800 px-2 py-1 text-xs font-bold text-amber-400 transition hover:bg-amber-950/60"
      >
        d20
      </button>
      {parsed && damageExpr && (
        <button
          type="button"
          aria-label={t("sheet.rollDamage")}
          onClick={() => {
            const r = rollParsedDamage(parsed);
            setResult({ kind: "damage", expr: damageExpr, total: r.total });
          }}
          className="rounded-md border border-zinc-700 px-2 py-1 text-xs tabular-nums text-zinc-300 transition hover:border-zinc-500"
        >
          {damageExpr}
        </button>
      )}
      {result?.kind === "attack" && (
        <span className="text-xs tabular-nums text-zinc-400" role="status">
          {result.mode === "normal" ? (
            <>d20 {fmt.num(result.d20)}</>
          ) : (
            <>
              d20 [{result.rolls.map((r) => fmt.num(r)).join(", ")}]→
              {fmt.num(result.d20)}
            </>
          )}{" "}
          {signedBonus} →{" "}
          <strong
            className={
              result.nat === "crit"
                ? "text-amber-400"
                : result.nat === "fumble"
                  ? "text-red-400"
                  : "text-zinc-100"
            }
          >
            {fmt.num(result.total)}
          </strong>
          {result.mode === "advantage" && (
            <span className="text-amber-500/80"> {t("sheet.withAdvantage")}</span>
          )}
          {result.mode === "disadvantage" && (
            <span className="text-amber-500/80">
              {" "}
              {t("sheet.withDisadvantage")}
            </span>
          )}
          {result.nat === "crit" && (
            <span className="text-amber-400"> {t("sheet.crit")}</span>
          )}
          {result.nat === "fumble" && (
            <span className="text-red-400"> {t("sheet.fumble")}</span>
          )}
        </span>
      )}
      {result?.kind === "damage" && (
        <span className="text-xs tabular-nums text-zinc-400" role="status">
          {result.expr} →{" "}
          <strong className="text-zinc-100">{fmt.num(result.total)}</strong>
        </span>
      )}
    </div>
  );
}
