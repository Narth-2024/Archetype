"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWizard } from "./context";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangSelect } from "@/components/LangSelect";
import { useT, useFormat } from "@/lib/i18n/client";
import { StepIdentity } from "./steps/StepIdentity";
import { StepAbilities } from "./steps/StepAbilities";
import { StepFeatures } from "./steps/StepFeatures";
import { StepSkills } from "./steps/StepSkills";
import { StepEquipment } from "./steps/StepEquipment";
import { StepSpells } from "./steps/StepSpells";
import { StepAttacks } from "./steps/StepAttacks";
import { StepCombat } from "./steps/StepCombat";
import { StepReview } from "./steps/StepReview";

const STEPS = [
  { key: "wizard.steps.identity", short: "1", component: StepIdentity },
  { key: "wizard.steps.abilities", short: "2", component: StepAbilities },
  { key: "wizard.steps.features", short: "3", component: StepFeatures },
  { key: "wizard.steps.skills", short: "4", component: StepSkills },
  { key: "wizard.steps.equipment", short: "5", component: StepEquipment },
  { key: "wizard.steps.spells", short: "6", component: StepSpells },
  { key: "wizard.steps.attacks", short: "7", component: StepAttacks },
  { key: "wizard.steps.combat", short: "8", component: StepCombat },
  { key: "wizard.steps.review", short: "9", component: StepReview },
];

export const REVIEW_STEP_INDEX = STEPS.length - 1;

function stepFromUrl(fallback: number): number {
  const raw = new URLSearchParams(window.location.search).get("step");
  const n = raw === null ? fallback : Number(raw);
  return Number.isFinite(n) ? Math.min(Math.max(0, n), STEPS.length - 1) : fallback;
}

function writeStepToUrl(next: number) {
  const url = new URL(window.location.href);
  url.searchParams.set("step", String(next));
  window.history.replaceState(null, "", url.toString());
}

export function CharacterWizard() {
  const { doc, update, saving, savedAt, error, saveNow } = useWizard();
  const t = useT();
  const fmt = useFormat();
  const [step, setStep] = useState(() =>
    typeof window === "undefined"
      ? Math.min(doc.step, STEPS.length - 1)
      : stepFromUrl(Math.min(doc.step, STEPS.length - 1)),
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLOListElement>(null);

  const Current = STEPS[step].component;

  useEffect(() => {
    function onPop() {
      setStep(stepFromUrl(0));
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        void saveNow();
        return;
      }
      if (typing) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(step + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(step - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(STEPS.length - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, doc.identity.name, saveNow]);

  function goTo(next: number) {
    if (next < 0 || next >= STEPS.length) return;
    if (step === 0 && next > 0 && !doc.identity.name.trim()) {
      setValidationError(t("wizard.nameRequired"));
      return;
    }
    setValidationError(null);
    update((d) => {
      d.step = next;
    });
    setStep(next);
    writeStepToUrl(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => mainRef.current?.focus(), 0);
  }

  function onNavKeyDown(e: React.KeyboardEvent<HTMLOListElement>) {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    if (e.key === "ArrowRight") goTo(step + 1);
    else if (e.key === "ArrowLeft") goTo(step - 1);
    else if (e.key === "Home") goTo(0);
    else goTo(STEPS.length - 1);
    const buttons = navRef.current?.querySelectorAll("button");
    const idx = e.key === "ArrowRight" ? step + 1 : e.key === "ArrowLeft" ? step - 1 : e.key === "Home" ? 0 : STEPS.length - 1;
    const clamped = Math.min(Math.max(0, idx), STEPS.length - 1);
    buttons?.[clamped]?.focus();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link
            href="/"
            className="text-xs text-zinc-500 transition hover:text-amber-400"
          >
            ← {t("wizard.characters")}
          </Link>
          <h1 className="title-gold text-xl font-bold">
            {doc.identity.name || t("wizard.newCharacter")}
            {!doc.complete && (
              <span className="ml-2 text-sm font-normal text-zinc-500">
                ({t("wizard.draft")})
              </span>
            )}
          </h1>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          {error && (
            <>
              <span className="text-red-400">{error}</span>
              <button
                type="button"
                onClick={() => void saveNow()}
                className="rounded-md border border-red-800 px-2 py-1 text-red-400 transition hover:bg-red-950/60"
              >
                {t("wizard.retry")}
              </button>
            </>
          )}
          {!error && saving && (
            <span role="status" aria-live="polite">
              {t("wizard.saving")}
            </span>
          )}
          {!error && !saving && savedAt && (
            <span className="fade-in" role="status" aria-live="polite">
              ✓ {t("wizard.saved")}
            </span>
          )}
          <LangSelect />
          <ThemeToggle />
        </div>
      </header>

      <nav className="mb-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <ol
          ref={navRef}
          role="tablist"
          aria-label={t("wizard.newCharacter")}
          onKeyDown={onNavKeyDown}
          className="flex min-w-max gap-1 rounded-lg border border-zinc-800 bg-zinc-900/50 p-1.5"
        >
          {STEPS.map((s, i) => (
            <li key={s.key} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={i === step}
                aria-current={i === step ? "step" : undefined}
                onClick={() => goTo(i)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${
                  i === step
                    ? "bg-amber-600 text-white shadow-sm shadow-amber-950/50"
                    : i < step
                      ? "text-emerald-400 hover:bg-zinc-800"
                      : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                    i === step
                      ? "bg-black/25"
                      : i < step
                        ? "bg-emerald-900/60"
                        : "bg-zinc-800"
                  }`}
                >
                  {i < step ? "✓" : s.short}
                </span>
                <span className="hidden sm:inline">{t(s.key)}</span>
                <span className="sr-only">{t(s.key)}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-amber-500 transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </nav>

      <main ref={mainRef} tabIndex={-1} className="min-h-96 outline-none">
        <h2 className="sr-only">{t(STEPS[step].key)}</h2>
        <div key={step} className="step-enter">
          <Current />
        </div>
      </main>

      {validationError && (
        <p
          role="alert"
          className="mt-4 rounded-md border border-red-900 bg-red-950/40 px-3 py-2 text-sm text-red-400"
        >
          {validationError}
        </p>
      )}

      <footer className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">
        <button
          type="button"
          onClick={() => goTo(step - 1)}
          disabled={step === 0}
          className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 disabled:opacity-40"
        >
          ← {t("wizard.prev")}
        </button>
        <span className="text-xs text-zinc-600">
          {t("wizard.stepOf", {
            current: fmt.num(step + 1),
            total: fmt.num(STEPS.length),
          })}
        </span>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => goTo(step + 1)}
            className="btn-primary rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            {t("wizard.next")} →
          </button>
        ) : (
          <span className="text-sm text-zinc-600">{t("wizard.finishHint")}</span>
        )}
      </footer>
    </div>
  );
}
