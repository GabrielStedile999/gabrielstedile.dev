import Link from "next/link";
import { site } from "@/content/site";
import type { Dict } from "@/i18n";

export function Footer({ dict }: { dict: Dict }) {
  const t = dict.footer;
  return (
    <footer className="border-edge border-t">
      <div className="text-muted mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center text-sm">
        <p className="text-foreground font-semibold">{site.name}</p>
        <p>{t.tagline}</p>
        <nav aria-label={t.ariaLabel}>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs">
            {t.links.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-faint font-mono text-xs">
          © 2026 {site.name} · {site.location} · {t.rights}
        </p>
      </div>
    </footer>
  );
}
