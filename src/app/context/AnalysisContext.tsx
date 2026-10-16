"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";

// Define the shape of the data we expect from the backend
export interface AnalysisResult {
  email: string;
  appeal: string;
  potential_money_back: number;
  percentage?: number;
  total_billed_amount: number;
}

interface AnalysisContextType {
  analysis: AnalysisResult | null;
  // False until the saved analysis has been read in the browser
  loaded: boolean;
  setAnalysis: (data: AnalysisResult | null) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

// The analysis is kept in sessionStorage (per browser tab) so a page refresh doesn't lose it.
// `memory` is the fallback when the browser blocks storage.
const STORAGE_KEY = "medibill-analysis";
const listeners = new Set<() => void>();
let memory: string | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readStored(): string | null {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return memory;
  }
}

function writeStored(value: string | null) {
  memory = value;
  try {
    if (value === null) sessionStorage.removeItem(STORAGE_KEY);
    else sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked: `memory` still holds it for this page session
  }
  listeners.forEach((listener) => listener());
}

export function AnalysisProvider({ children }: { children: ReactNode }) {
  // The server can't read sessionStorage, so its snapshot is `undefined` ("not read yet")
  const stored = useSyncExternalStore(subscribe, readStored, () => undefined);
  const analysis: AnalysisResult | null = stored ? JSON.parse(stored) : null;

  const setAnalysis = (data: AnalysisResult | null) => {
    writeStored(data ? JSON.stringify(data) : null);
  };

  return (
    <AnalysisContext.Provider value={{ analysis, loaded: stored !== undefined, setAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error("useAnalysis must be used within an AnalysisProvider");
  }
  return context;
}
