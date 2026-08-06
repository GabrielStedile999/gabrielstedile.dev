"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/cn";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

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
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="border-edge mx-auto flex max-w-5xl items-center justify-between rounded-full border bg-[rgba(8,9,20,0.75)] py-2 pr-2 pl-4 backdrop-blur-md"
      >
        <a href="#hero" className="flex items-center gap-2.5" aria-label="Home">
          <span className="from-accent-from to-accent-to text-background flex size-8 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {site.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === link.href.slice(1)
                    ? "bg-surface-raised text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="from-accent-from to-accent-to text-background ml-2 rounded-full bg-gradient-to-r px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:brightness-110"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-muted hover:text-foreground p-2 md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-edge mx-auto mt-2 max-w-5xl rounded-2xl border bg-[rgba(8,9,20,0.92)] p-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-sm transition-colors",
                    active === link.href.slice(1)
                      ? "bg-surface-raised text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
