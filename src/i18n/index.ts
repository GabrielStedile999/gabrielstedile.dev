import { en } from "./en";
import { pt } from "./pt";
import type { Dict, Locale } from "./types";

export type { Dict, Locale };

export const locales: Locale[] = ["en", "pt"];

const dictionaries: Record<Locale, Dict> = { en, pt };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

/** Locale of a pathname: "/pt..." → "pt", anything else → "en". */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/pt" || pathname.startsWith("/pt/") ? "pt" : "en";
}

/** Home path for a locale. */
export function homePath(locale: Locale): string {
  return locale === "pt" ? "/pt" : "/";
}
