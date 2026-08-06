import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "404 — Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-accent-to flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase">
          <span aria-hidden className="bg-accent-to/60 h-px w-6" />
          Error 404
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          This route <GradientText>doesn&apos;t render.</GradientText>
        </h1>
        <p className="text-muted max-w-md text-base text-pretty">
          The page you&apos;re looking for was moved, renamed, or never made it
          past code review.
        </p>
      </div>

      <div className="w-full max-w-md">
        <TerminalWindow title="router.log">
          <p>
            <span className="text-accent-from">GET</span> {"<unknown route>"}
          </p>
          <p className="text-accent-to">→ 404 · no matching segment</p>
          <p>
            <span className="text-accent-from">hint:</span> try the homepage —
            everything ships from there
          </p>
        </TerminalWindow>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <ButtonLink variant="primary" href="/">
          <ArrowLeft className="size-4" aria-hidden />
          Back to {site.domain}
        </ButtonLink>
        <ButtonLink href="/notes">Read the notes</ButtonLink>
      </div>
    </main>
  );
}
