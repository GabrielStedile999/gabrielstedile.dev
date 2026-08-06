import { CheckCircle2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const PRINCIPLES = [
  "Own the interface end-to-end — from design handoff to production metrics.",
  "Treat loading, empty and error states as part of the product, not leftovers.",
  "Ship fast without leaving code the next person can't read.",
];

export function Profile() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: narrative */}
        <Reveal className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Profile"
            title={
              <>
                React-first. AI-forward.{" "}
                <GradientText>Grounded in product reality.</GradientText>
              </>
            }
          />

          <div className="text-muted flex flex-col gap-4 text-base leading-relaxed">
            <p>
              I&apos;m Gabriel, a Florianópolis-based frontend engineer with 10+
              years across software houses, fintech, SaaS and global
              consultancy. My deepest experience is in React and TypeScript —
              delivering for clients like IBM, Pfizer, Audi, AKQA and BCW, where
              quality bars and deadlines are both non-negotiable.
            </p>
            <p>
              When the product needs it, I go further down the stack: I&apos;ve
              built a B2B SaaS API from scratch in Node.js, implemented
              authentication, authorization and pagination, and shaped BFF
              layers around what interfaces actually consume.
            </p>
            <p>
              Right now I&apos;m deepening AI integration — agents, LLM-powered
              features and AI-assisted engineering workflows — through an MBA in
              Software Engineering with AI and hands-on projects.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {PRINCIPLES.map((principle) => (
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
          <aside aria-label="Developer profile summary" className="h-full">
            <Card
              raised
              className="flex flex-col items-center gap-5 p-8 text-center"
            >
              <span className="from-accent-from to-accent-to flex size-20 items-center justify-center rounded-full bg-gradient-to-br p-[3px]">
                <span className="bg-surface-raised text-foreground flex size-full items-center justify-center rounded-full text-xl font-bold">
                  {site.initials}
                </span>
              </span>

              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{site.name}</p>
                <p className="text-muted text-sm">
                  Frontend engineer for product teams that care about the
                  details.
                </p>
              </div>

              <dl className="flex w-full flex-col gap-3 text-left">
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase">
                    <MapPin className="size-3.5" aria-hidden /> Based in
                  </dt>
                  <dd className="text-sm">{site.location} · remote-friendly</dd>
                </div>
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 font-mono text-xs tracking-widest uppercase">
                    Deepest experience
                  </dt>
                  <dd className="text-sm">
                    React, TypeScript, Next.js, Node.js BFF
                  </dd>
                </div>
                <div className="border-edge bg-surface rounded-xl border p-4">
                  <dt className="text-accent-to mb-1 font-mono text-xs tracking-widest uppercase">
                    Expanding into
                  </dt>
                  <dd className="text-sm">
                    AI agents, LLM integration, AI-assisted workflows
                  </dd>
                </div>
              </dl>
            </Card>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
