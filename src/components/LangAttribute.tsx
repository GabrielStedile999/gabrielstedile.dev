"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getDict, localeFromPathname } from "@/i18n";

/**
 * Keeps <html lang> in sync with the route's locale. The root layout renders
 * lang="en" statically; Portuguese pages live under /pt and correct it here.
 */
export function LangAttribute() {
  const pathname = usePathname();

  useEffect(() => {
    const dict = getDict(localeFromPathname(pathname ?? "/"));
    document.documentElement.lang = dict.htmlLang;
  }, [pathname]);

  return null;
}
