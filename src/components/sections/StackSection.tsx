import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackAreas } from "@/content/stack";

export function StackSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              Organized by <GradientText>responsibility</GradientText>, not by
              logo count.
            </>
          }
          description="Tools change. Knowing which component boundary, data contract or millisecond deserves attention is what stays."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stackAreas.map((area) => (
            <Card key={area.title} className="flex flex-col gap-4">
              <span className="border-edge bg-surface-raised text-accent-from flex size-11 items-center justify-center rounded-xl border">
                <area.icon className="size-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold tracking-tight">
                {area.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
