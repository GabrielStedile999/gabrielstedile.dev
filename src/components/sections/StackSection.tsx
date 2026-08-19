import { Bot, Component, Gauge, Palette, Server, Workflow } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dict } from "@/i18n";

/** Icons aligned by index with dict.stack.areas. */
const AREA_ICONS = [Component, Server, Workflow, Gauge, Palette, Bot];

export function StackSection({ dict }: { dict: Dict }) {
  const t = dict.stack;
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={
              <>
                {t.titlePre}
                <GradientText>{t.titleGradient}</GradientText>
                {t.titlePost}
              </>
            }
            description={t.description}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.areas.map((area, index) => {
            const Icon = AREA_ICONS[index % AREA_ICONS.length];
            return (
              <Reveal key={area.title} delay={(index % 3) * 0.08}>
                <Card className="flex h-full flex-col gap-4">
                  <span className="border-edge bg-surface-raised text-accent-from flex size-11 items-center justify-center rounded-xl border">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {area.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
