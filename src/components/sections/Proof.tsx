import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/i18n";

export function Proof({ dict }: { dict: Dict }) {
  const t = dict.proof;
  return (
    <section id="achievements" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.map((metric, index) => (
            <Reveal key={metric.title} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-3">
                <Counter
                  to={metric.value}
                  suffix={metric.suffix}
                  className="from-accent-from to-accent-to bg-gradient-to-r bg-clip-text text-4xl font-semibold tracking-tight text-transparent"
                />
                <h3 className="text-sm font-semibold">{metric.title}</h3>
                <p className="text-muted text-xs leading-relaxed">
                  {metric.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
