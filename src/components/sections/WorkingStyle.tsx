import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workingHabits } from "@/content/workingStyle";

export function WorkingStyle() {
  return (
    <section className="py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Working style"
            title="The habits behind the delivery."
            description="Practical principles I bring to every product team."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {workingHabits.map((habit, index) => (
            <Reveal key={habit.title} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold tracking-tight">
                  {habit.title}
                </h3>
                <p className="text-muted flex-1 text-sm leading-relaxed">
                  {habit.description}
                </p>
                <p className="text-accent-to font-mono text-xs tracking-widest uppercase">
                  — {habit.punchline}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
