"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import type { CharacterDoc } from "@/domain/types";
import { useT } from "@/lib/i18n/client";

type State = {
  doc: CharacterDoc;
  dirty: boolean;
  saving: boolean;
  savedAt: string | null;
  error: string | null;
};

type Action =
  | { type: "update"; apply: (doc: CharacterDoc) => void }
  | { type: "saved" }
  | { type: "saving" }
  | { type: "error"; message: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "update": {
      const doc = structuredClone(state.doc);
      action.apply(doc);
      return { ...state, doc, dirty: true, error: null };
    }
    case "saving":
      return { ...state, saving: true, error: null };
    case "saved":
      return { ...state, dirty: false, saving: false, savedAt: new Date().toISOString() };
    case "error":
      return { ...state, saving: false, error: action.message };
  }
}

type WizardContextValue = State & {
  characterId: string;
  update: (apply: (doc: CharacterDoc) => void) => void;
  saveNow: () => Promise<void>;
};

const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({
  initialDoc,
  characterId,
  children,
}: {
  initialDoc: CharacterDoc;
  characterId: string;
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, {
    doc: initialDoc,
    dirty: false,
    saving: false,
    savedAt: null,
    error: null,
  });

  const t = useT();

  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const saveNow = useCallback(async () => {
    const current = stateRef.current;
    if (!current.dirty) return;
    dispatch({ type: "saving" });
    try {
      const res = await fetch(`/api/characters/${characterId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(current.doc),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      dispatch({ type: "saved" });
    } catch (e) {
      dispatch({ type: "error", message: t("wizard.saveFailed", { error: String(e) }) });
    }
  }, [characterId, t]);

  useEffect(() => {
    if (!state.dirty) return;
    const timer = setTimeout(() => void saveNow(), 900);
    return () => clearTimeout(timer);
  }, [state.dirty, state.doc, saveNow]);

  const update = useCallback((apply: (doc: CharacterDoc) => void) => {
    dispatch({ type: "update", apply });
  }, []);

  const value = useMemo(
    () => ({ ...state, characterId, update, saveNow }),
    [state, characterId, update, saveNow],
  );

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
}

export function useWizard(): WizardContextValue {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard fora do WizardProvider");
  return ctx;
}
