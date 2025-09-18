"use client";

import { Dictionary } from "@/types/dictionary";
import { createContext, useCallback, useState } from "react";

interface TranslationProviderProps {
  dictionary: Dictionary;
  locale: string;
  children: React.ReactNode;
}

interface TranslationContextType {
  dictionary: Dictionary;
  locale: string;
  t: (key: string) => string;
  changeLanguage: (locale: "en" | "id") => void;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({
  dictionary,
  locale,
  children,
}: TranslationProviderProps) {
  const [currentLocale, setCurrentLocale] = useState(locale);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let value: unknown = dictionary;

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key; // Return the key if translation not found
        }
      }

      return typeof value === "string" ? value : key;
    },
    [dictionary]
  );

  const changeLanguage = useCallback((newLocale: "en" | "id") => {
    setCurrentLocale(newLocale);
    // In a real app, you might want to update the URL or store the preference
  }, []);

  const value: TranslationContextType = {
    dictionary,
    locale: currentLocale,
    t,
    changeLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export { TranslationContext };
