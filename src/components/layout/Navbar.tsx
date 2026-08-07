"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { OPEN_PALETTE_EVENT } from "@/components/CommandPalette";
import { site } from "@/content/site";
import { homePath, type Dict } from "@/i18n";
import { cn } from "@/lib/cn";

type NavbarProps = { dict: Dict };

export function Navbar({ dict }: NavbarProps) {
  const [active, setActive] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMac] = useState(() =>
    typeof navigator === "undefined"
      ? true
      : /mac|iphone|ipad/i.test(navigator.platform),
  );

  const home = homePath(dict.locale);

  useEffect(() => {
    const sections = dict.nav.links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [dict.nav.links]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label={dict.nav.ariaMain}
        className="border-edge mx-auto flex max-w-7xl items-center justify-between rounded-full border bg-[rgba(8,9,20,0.75)] py-2 pr-2 pl-4 backdrop-blur-md"
      >
        <Link href={`${home}#hero`} className="flex items-center gap-2.5">
          <span className="from-accent-from to-accent-to text-background flex size-8 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
            {site.name}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 md:flex xl:gap-1">
          {dict.nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={`${home}${link.href}`}
                className={cn(
                  "rounded-full px-2.5 py-1.5 text-sm whitespace-nowrap transition-colors xl:px-3.5",
                  active === link.href.slice(1)
                    ? "bg-surface-raised text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={dict.nav.langToggle.href}
              aria-label={dict.nav.langToggle.aria}
              className="border-edge bg-surface text-muted hover:border-edge-bright hover:text-foreground ml-1 flex items-center rounded-full border px-3 py-1.5 font-mono text-xs transition-colors"
            >
              {dict.nav.langToggle.label}
            </Link>
          </li>
          <li className="hidden lg:block">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent(OPEN_PALETTE_EVENT))
              }
              aria-label={dict.nav.ariaOpenPalette}
              className="border-edge bg-surface text-muted hover:border-edge-bright hover:text-foreground flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs whitespace-nowrap transition-colors"
            >
              <Search className="size-3.5" aria-hidden />
              <kbd suppressHydrationWarning className="tracking-wide">
                {isMac ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>
          </li>
          <li className="hidden lg:block">
            <Link
              href={`${home}#contact`}
              className="from-accent-from to-accent-to text-background ml-1 rounded-full bg-gradient-to-r px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all duration-300 hover:brightness-110"
            >
              {dict.nav.talk}
            </Link>
          </li>
        </ul>

        {/* Mobile: language toggle + menu button */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href={dict.nav.langToggle.href}
            aria-label={dict.nav.langToggle.aria}
            className="border-edge bg-surface text-muted hover:text-foreground flex items-center rounded-full border px-3 py-1.5 font-mono text-xs transition-colors"
          >
            {dict.nav.langToggle.label}
          </Link>
          <button
            type="button"
            aria-label={dict.nav.ariaToggleMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-muted hover:text-foreground p-2"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-edge mx-auto mt-2 max-w-7xl rounded-2xl border bg-[rgba(8,9,20,0.92)] p-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={`${home}${link.href}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-sm transition-colors",
                    active === link.href.slice(1)
                      ? "bg-surface-raised text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
