import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journey } from "@/content/journey";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Journey"
          title="A decade of getting closer to the user."
          description="The stacks changed, the direction didn't: toward the decisions that make software feel right for the people using it."
        />

        <ol className="relative mx-auto flex w-full max-w-3xl flex-col gap-8">
          {/* Vertical line */}
          <span
            aria-hidden
            className="from-accent-from/60 to-accent-to/10 absolute top-2 bottom-2 left-[3.25rem] w-px bg-gradient-to-b max-sm:hidden"
          />

          {journey.map((entry) => (
            <li key={entry.period + entry.title} className="relative">
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
