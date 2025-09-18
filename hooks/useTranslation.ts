"use client";

import { Dictionary } from "@/types/dictionary";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type Locale = "en" | "id";

export function useTranslation(dictionary?: Dictionary, locale?: Locale) {
  const router = useRouter();
  const pathname = usePathname();

  const t = useMemo(() => {
    return (key: string): string => {
      if (!dictionary) return key;

      const keys = key.split(".");
      let value: unknown = dictionary;

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key; // Return key if no translation found
        }
      }

      return typeof value === "string" ? value : key;
    };
  }, [dictionary]);

  const changeLanguage = (newLocale: Locale) => {
    // Extract current path without locale
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "id") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return {
    t,
    locale: locale || "en",
    changeLanguage,
    locales: ["en", "id"] as Locale[],
  };
}
