import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/i18n";

export function Journey({ dict }: { dict: Dict }) {
  const t = dict.journey;
  return (
    <section id="journey" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <ol className="relative mx-auto flex w-full max-w-3xl flex-col gap-8">
          {/* Vertical line */}
          <span
            aria-hidden
            className="from-accent-from/60 to-accent-to/10 absolute top-2 bottom-2 left-[3.25rem] w-px bg-gradient-to-b max-sm:hidden"
          />

          {t.entries.map((entry, index) => (
            <Reveal
              as="li"
              key={entry.period + entry.title}
              delay={index * 0.07}
              className="relative"
            >
              <article className="flex gap-6 max-sm:flex-col max-sm:gap-3">
                <span className="border-accent-from/40 bg-surface-raised text-accent-from z-10 flex h-fit w-[6.5rem] shrink-0 items-center justify-center rounded-full border px-3 py-1.5 font-mono text-xs">
                  {entry.period}
                </span>
                <Card className="flex-1">
                  {entry.company && (
                    <p className="text-accent-to mb-1 font-mono text-xs tracking-widest uppercase">
                      {entry.companyUrl ? (
                        <a
                          href={entry.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-accent-from inline-flex items-center gap-1 transition-colors"
                        >
                          {entry.company}
                          <ArrowUpRight className="size-3" aria-hidden />
                        </a>
                      ) : (
                        entry.company
                      )}
                    </p>
                  )}
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {entry.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </Card>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
