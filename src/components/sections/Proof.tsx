import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proofMetrics } from "@/content/proof";

export function Proof() {
  return (
    <section id="achievements" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Proof"
          title="Signals of sustained delivery."
          description="Not vanity numbers — the scope and repetition behind a decade of shipping."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((metric) => (
            <Card key={metric.title} className="flex flex-col gap-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
