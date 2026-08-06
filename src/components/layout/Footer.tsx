import { site } from "@/content/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Notes", href: "/notes" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  {
    label: "Source",
    href: "https://github.com/GabrielStedile999/gabrielstedile.dev",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="border-edge border-t">
      <div className="text-muted mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center text-sm">
        <p className="text-foreground font-semibold">{site.name}</p>
        <p>
          Senior Frontend Engineer — building interfaces that move products
          forward.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-faint font-mono text-xs">
          © 2026 {site.name} · {site.location} · {site.availability}
        </p>
      </div>
    </footer>
  );
}
