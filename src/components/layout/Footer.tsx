import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-edge border-t">
      <div className="text-muted mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm">
        <p className="text-foreground font-semibold">{site.name}</p>
        <p>
          Senior Frontend Engineer — building interfaces that move products
          forward.
        </p>
        <p className="text-faint font-mono text-xs">
          © 2026 {site.name} · {site.location} · {site.availability}
        </p>
      </div>
    </footer>
  );
}
