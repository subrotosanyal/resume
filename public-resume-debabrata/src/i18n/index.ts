import en from "./messages/en";

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "portfolio_locale";

export const localeLabels: Record<Locale, string> = {
  en: "English",
};

export const messages: Record<Locale, Record<string, string>> = {
  en,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function tFor(locale: Locale, key: string, fallback?: string) {
  return messages[locale][key] ?? fallback ?? messages[defaultLocale][key] ?? key;
}
