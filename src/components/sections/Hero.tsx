import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { StatCard } from "@/components/ui/StatCard";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { site } from "@/content/site";
import type { Dict } from "@/i18n";

export function Hero({ dict }: { dict: Dict }) {
  const t = dict.hero;
  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-10 sm:pt-40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <p className="text-accent-to flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase">
            <span aria-hidden className="bg-accent-to/60 h-px w-6" />
            {t.eyebrow}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {t.titlePre}
            <GradientText>{t.titleGradient}</GradientText>
          </h1>

          <p className="text-muted max-w-xl text-lg text-pretty">{t.lead}</p>

          <p className="border-edge bg-surface text-muted rounded-xl border px-4 py-2.5 font-mono text-sm">
            <span className="text-accent-to">$</span> {t.monoLine}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink variant="primary" href="#journey">
              {t.ctaWork}
            </ButtonLink>
            <ButtonLink href={site.resumeUrl} download>
              <Download className="size-4" aria-hidden />
              {t.ctaResume}
            </ButtonLink>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Pill dot tone="success">
              {t.availability}
            </Pill>
            <span className="text-muted flex items-center gap-1.5 font-mono text-xs">
              <MapPin className="size-3.5" aria-hidden />
              {site.location}
            </span>
          </div>

          <div
            className="flex items-center gap-3"
            aria-label={t.socialAria.group}
          >
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t.socialAria.github}
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <FaGithub className="size-4.5" aria-hidden />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={t.socialAria.linkedin}
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <FaLinkedinIn className="size-4.5" aria-hidden />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label={t.socialAria.email}
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
              {t.panelLabel}
            </p>
            <Pill dot tone="accent">
              {t.live}
            </Pill>
          </div>

          <TerminalWindow title="web-vitals.log">
            <p>
              <span className="text-accent-to">▲</span>{" "}
              {t.terminal.deployPrefix} {site.domain}
            </p>
            <p className="text-success">{t.terminal.vitals}</p>
            <p>
              <span className="text-accent-from">{t.terminal.a11yLabel}</span>{" "}
              {t.terminal.a11yValue}
            </p>
            <p>
              <span className="text-accent-from">{t.terminal.aiLabel}</span>{" "}
              {t.terminal.aiValue}
            </p>
          </TerminalWindow>

          <div className="grid grid-cols-2 gap-3">
            <StatCard value={10} suffix="+" label={t.stats.years} />
            <StatCard value={10} suffix="+" label={t.stats.apps} />
            <StatCard value={6} label={t.stats.clients} />
            <StatCard value={3} label={t.stats.layers} />
          </div>
        </div>
      </div>
    </section>
  );
}
