import { cookies } from "next/headers";
import { defaultLocale, isLocale, localeCookieName, messages, tFor, type Locale } from "./index";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookieName)?.value;
  return isLocale(value) ? value : defaultLocale;
}

export async function getServerI18n() {
  const locale = await getServerLocale();
  return {
    locale,
    messages: messages[locale],
    t: (key: string, fallback?: string) => tFor(locale, key, fallback),
  };
}
