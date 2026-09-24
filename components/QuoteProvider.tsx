"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type QuoteContextValue = {
  /** Texto que precarga el mensaje del formulario de contacto. */
  request: string;
  requestQuote: (detail: string) => void;
  clearRequest: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState("");

  const requestQuote = useCallback((detail: string) => {
    setRequest(detail);
    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const clearRequest = useCallback(() => setRequest(""), []);

  const value = useMemo(
    () => ({ request, requestQuote, clearRequest }),
    [request, requestQuote, clearRequest],
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuote debe usarse dentro de <QuoteProvider />");
  }

  return context;
}
