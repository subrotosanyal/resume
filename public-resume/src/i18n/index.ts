import en from "./messages/en";
import hi from "./messages/hi";
import bn from "./messages/bn";
import de from "./messages/de";

export const locales = ["en", "hi", "bn", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "portfolio_locale";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  de: "Deutsch",
};

export const messages: Record<Locale, Record<string, string>> = {
  en,
  hi,
  bn,
  de,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function tFor(locale: Locale, key: string, fallback?: string) {
  return messages[locale][key] ?? fallback ?? messages[defaultLocale][key] ?? key;
}
