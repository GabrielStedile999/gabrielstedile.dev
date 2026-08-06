import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { StatCard } from "@/components/ui/StatCard";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-10 sm:pt-40">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <p className="text-accent-to flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase">
            <span aria-hidden className="bg-accent-to/60 h-px w-6" />
            Frontend engineering with product sense
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            I build interfaces that make complex products{" "}
            <GradientText>feel simple.</GradientText>
          </h1>

          <p className="text-muted max-w-xl text-lg text-pretty">
            React-first and product-shaped: I turn business requirements into
            fast, accessible web applications — and the Node.js layer behind
            them — for global brands and growing startups.
          </p>

          <p className="border-edge bg-surface text-muted rounded-xl border px-4 py-2.5 font-mono text-sm">
            <span className="text-accent-to">$</span> Senior Frontend Engineer /
            Full Stack Capable / AI Integration
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink variant="primary" href="#journey">
              Explore my work
            </ButtonLink>
            <ButtonLink href={site.resumeUrl} download>
              <Download className="size-4" aria-hidden />
              Download resume
            </ButtonLink>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Pill dot tone="success">
              {site.availability}
            </Pill>
            <span className="text-muted flex items-center gap-1.5 font-mono text-xs">
              <MapPin className="size-3.5" aria-hidden />
              {site.location}
            </span>
          </div>

          <div className="flex items-center gap-3" aria-label="Social links">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <FaGithub className="size-4.5" aria-hidden />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <FaLinkedinIn className="size-4.5" aria-hidden />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send email"
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <Mail className="size-4.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="border-edge bg-surface rounded-card shadow-card flex flex-col gap-4 border p-5">
          <div className="flex items-center justify-between">
            <p className="text-faint font-mono text-xs tracking-[0.25em] uppercase">
              Interface in production
            </p>
            <Pill dot tone="accent">
              Live
            </Pill>
          </div>

          <TerminalWindow title="web-vitals.log">
            <p>
              <span className="text-accent-to">▲</span> deploy: production ·{" "}
              {site.domain}
            </p>
            <p className="text-success">✓ LCP 1.2s · INP 80ms · CLS 0.01</p>
            <p>
              <span className="text-accent-from">a11y:</span> keyboard + screen
              reader tested
            </p>
            <p>
              <span className="text-accent-from">ai:</span> agent tools
              connected · 0 hallucinated pixels
            </p>
          </TerminalWindow>

          <div className="grid grid-cols-2 gap-3">
            <StatCard value={10} suffix="+" label="Years of experience" />
            <StatCard value={10} suffix="+" label="Apps delivered" />
            <StatCard value={6} label="Global clients" />
            <StatCard value={3} label="Layers: UI · API · AI" />
          </div>
        </div>
      </div>
    </section>
  );
}
