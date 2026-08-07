import { CheckCircle2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import type { Dict } from "@/i18n";

export function Profile({ dict }: { dict: Dict }) {
  const t = dict.profile;
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: narrative */}
        <Reveal className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow={t.eyebrow}
            title={
              <>
                {t.titlePre}
                <GradientText>{t.titleGradient}</GradientText>
              </>
            }
          />

          <div className="text-muted flex flex-col gap-4 text-base leading-relaxed">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ul className="flex flex-col gap-3">
            {t.principles.map((principle) => (
              <li key={principle}>
                <Card className="flex items-start gap-3 p-4">
                  <CheckCircle2
                    className="text-accent-to mt-0.5 size-4.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-sm">{principle}</span>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: summary card */}
        <Reveal as="div" delay={0.12} className="h-full">
          <aside aria-label={t.asideAria} className="h-full">
            <Card
              raised
              className="flex flex-col items-center gap-5 p-8 text-center"
            >
              <span className="from-accent-from to-accent-to flex size-28 items-center justify-center rounded-full bg-gradient-to-br p-[3px]">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the pre-optimized asset directly */}
                <img
                  src="/gabriel-stedile.webp"
                  alt={t.photoAlt}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="size-full rounded-full object-cover"
                />
              </span>

              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{site.name}</p>
                <p className="text-muted text-sm">{t.cardTagline}</p>
              </div>

              <dl className="flex w-full flex-col gap-3 text-left">
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase">
                    <MapPin className="size-3.5" aria-hidden />{" "}
                    {t.basedIn.label}
                  </dt>
                  <dd className="text-sm">{t.basedIn.value}</dd>
                </div>
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 font-mono text-xs tracking-widest uppercase">
                    {t.deepest.label}
                  </dt>
                  <dd className="text-sm">{t.deepest.value}</dd>
                </div>
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 font-mono text-xs tracking-widest uppercase">
                    {t.expanding.label}
                  </dt>
                  <dd className="text-sm">{t.expanding.value}</dd>
                </div>
              </dl>
            </Card>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
