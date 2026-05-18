"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  localeLabels,
  locales,
  messages,
  type Locale,
} from "@/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  locales: readonly Locale[];
  localeLabels: Record<Locale, string>;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale?: string;
  children: React.ReactNode;
}) {
  const resolvedInitialLocale = isLocale(initialLocale) ? initialLocale : defaultLocale;
  const [locale, setLocaleState] = useState<Locale>(resolvedInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(localeCookieName, nextLocale);
      window.location.reload();
    }
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string, fallback?: string) =>
        messages[locale][key] ?? fallback ?? messages[defaultLocale][key] ?? key,
      locales,
      localeLabels,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
