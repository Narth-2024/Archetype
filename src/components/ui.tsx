"use client";

import type { DerivedPart } from "@/domain/calc";

export type CardAccent =
  | "amber"
  | "emerald"
  | "sky"
  | "violet"
  | "rose"
  | "orange"
  | "cyan"
  | "teal";

const CARD_ACCENTS: Record<CardAccent, { edge: string; title: string }> = {
  amber: { edge: "border-l-amber-500", title: "text-amber-400" },
  emerald: { edge: "border-l-emerald-500", title: "text-emerald-400" },
  sky: { edge: "border-l-sky-400", title: "text-sky-400" },
  violet: { edge: "border-l-violet-400", title: "text-violet-400" },
  rose: { edge: "border-l-rose-400", title: "text-rose-400" },
  orange: { edge: "border-l-orange-400", title: "text-orange-400" },
  cyan: { edge: "border-l-cyan-400", title: "text-cyan-400" },
  teal: { edge: "border-l-teal-400", title: "text-teal-400" },
};

export function Card({
  title,
  accent,
  children,
  className = "",
}: {
  title?: string;
  accent?: CardAccent;
  children: React.ReactNode;
  className?: string;
}) {
  const a = accent ? CARD_ACCENTS[accent] : null;
  return (
    <section
      className={`rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-sm shadow-black/5 p-5 ${
        a ? `border-l-2 ${a.edge}` : ""
      } ${className}`}
    >
      {title && (
        <h3
          className={`mb-3 text-sm font-semibold uppercase tracking-wide ${a ? a.title : "text-zinc-400"}`}
        >
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
  className = "",
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-sm text-zinc-400">{label}</span>
      {children}
      {hint && <span className="text-xs text-zinc-600">{hint}</span>}
    </label>
  );
}

const inputClass =
  "rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/30";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClass} min-h-24 resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${inputClass} ${props.className ?? ""}`}
    />
  );
}

export function NumberInput({
  value,
  onChange,
  min = 0,
  max = 99,
  className = "",
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-8 w-8 rounded-md border border-zinc-700 text-zinc-300 transition hover:border-amber-600"
      >
        −
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => {
          const n = Number(e.target.value);
          if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
        }}
        className="h-8 w-14 rounded-md border border-zinc-700 bg-zinc-900 text-center text-sm text-zinc-100 outline-none focus:border-amber-600"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-8 w-8 rounded-md border border-zinc-700 text-zinc-300 transition hover:border-amber-600"
      >
        +
      </button>
    </div>
  );
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition ${
        checked
          ? "border-amber-700 bg-amber-950/40 text-amber-200"
          : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
      } ${disabled ? "opacity-50" : ""}`}
    >
      <span>{label}</span>
      <span
        className={`ml-2 flex h-5 w-5 items-center justify-center rounded border text-xs ${
          checked
            ? "border-amber-600 bg-amber-600 text-white"
            : "border-zinc-600 text-transparent"
        }`}
      >
        ✓
      </span>
    </button>
  );
}

export function Badge({
  children,
  color = "zinc",
}: {
  children: React.ReactNode;
  color?: "zinc" | "amber" | "green" | "blue";
}) {
  const colors = {
    zinc: "border-zinc-700 text-zinc-400",
    amber: "border-amber-700 text-amber-400",
    green: "border-emerald-700 text-emerald-400",
    blue: "border-sky-700 text-sky-400",
  };
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs ${colors[color]}`}
    >
      {children}
    </span>
  );
}

export function Formula({
  value,
  parts,
  className = "",
}: {
  value: number;
  parts: DerivedPart[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <span className="text-2xl font-bold text-zinc-100">
        {value >= 0 ? `+${value}` : value}
      </span>
      <span className="text-xs text-zinc-500">
        {parts
          .map((p) => `${p.value >= 0 ? "+" : "−"} ${Math.abs(p.value)} ${p.label}`)
          .join(" ")
          .replace(/^\+ /, "")}
      </span>
    </div>
  );
}
