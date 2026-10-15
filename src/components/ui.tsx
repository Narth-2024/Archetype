"use client";

import { useState } from "react";
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
        <h2
          className={`mb-3 text-sm font-semibold uppercase tracking-wide ${a ? a.title : "text-zinc-400"}`}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export function Field({
  label,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-sm text-zinc-400">{label}</span>
      {children}
      {error ? (
        <span className="text-xs text-red-400">{error}</span>
      ) : hint ? (
        <span className="text-xs text-zinc-600">{hint}</span>
      ) : null}
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

export function SearchSelect({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  emptyLabel,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyLabel?: string;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter((o) => o.label.toLowerCase().includes(q))
    : options;
  const current = options.find((o) => o.value === value);
  const showCurrent = Boolean(current) && !filtered.some((o) => o.value === value);
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {searchPlaceholder !== undefined && (
        <TextInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
      )}
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {showCurrent && current && (
          <option value={current.value}>{current.label}</option>
        )}
        {filtered.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
      {filtered.length === 0 && emptyLabel && (
        <span className="text-xs text-zinc-600">{emptyLabel}</span>
      )}
    </div>
  );
}

export function NumberInput({
  value,
  onChange,
  min = 0,
  max = 99,
  className = "",
  decreaseLabel,
  increaseLabel,
  ariaLabel,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  className?: string;
  decreaseLabel?: string;
  increaseLabel?: string;
  ariaLabel?: string;
}) {
  const [draft, setDraft] = useState(String(value));
  const [lastValue, setLastValue] = useState(value);
  if (value !== lastValue) {
    setLastValue(value);
    setDraft(String(value));
  }

  function commit(raw: string) {
    const n = Number(raw);
    if (raw.trim() === "" || Number.isNaN(n)) {
      setDraft(String(value));
      return;
    }
    const clamped = Math.min(max, Math.max(min, n));
    setDraft(String(clamped));
    if (clamped !== value) onChange(clamped);
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label={decreaseLabel}
        className="h-8 w-8 rounded-md border border-zinc-700 text-zinc-300 transition hover:border-amber-600"
      >
        −
      </button>
      <input
        type="number"
        inputMode="numeric"
        value={draft}
        min={min}
        max={max}
        aria-label={ariaLabel}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={(e) => commit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit((e.target as HTMLInputElement).value);
        }}
        className="h-8 w-14 rounded-md border border-zinc-700 bg-zinc-900 text-center text-sm text-zinc-100 outline-none focus:border-amber-600"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        aria-label={increaseLabel}
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
      role="switch"
      aria-checked={checked}
      aria-label={label}
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
  title,
}: {
  children: React.ReactNode;
  color?: "zinc" | "amber" | "green" | "blue";
  title?: string;
}) {
  const colors = {
    zinc: "border-zinc-700 text-zinc-400",
    amber: "border-amber-700 text-amber-400",
    green: "border-emerald-700 text-emerald-400",
    blue: "border-sky-700 text-sky-400",
  };
  return (
    <span
      title={title}
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

export function Toast({
  message,
  tone = "error",
  onDismiss,
}: {
  message: string;
  tone?: "error" | "success" | "info";
  onDismiss?: () => void;
}) {
  const tones = {
    error: "border-red-800 bg-red-950/90 text-red-300",
    success: "border-emerald-800 bg-emerald-950/90 text-emerald-300",
    info: "border-zinc-700 bg-zinc-900/90 text-zinc-200",
  };
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      aria-live={tone === "error" ? "assertive" : "polite"}
      className={`fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-md border px-4 py-2 text-sm shadow-lg ${tones[tone]}`}
    >
      <span>{message}</span>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Fechar"
          className="ml-2 rounded p-0.5 text-current/70 transition hover:text-current"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel,
  cancelLabel,
  busy,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={busy ? undefined : onCancel}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
        className="w-full max-w-sm rounded-lg border border-zinc-700 bg-zinc-900 p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="confirm-title" className="text-base font-semibold text-zinc-100">
          {title}
        </h2>
        <p id="confirm-message" className="mt-2 text-sm text-zinc-400">
          {message}
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-zinc-500 disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
          >
            {busy ? "…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
