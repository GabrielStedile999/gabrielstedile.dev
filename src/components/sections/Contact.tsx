import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import type { Dict } from "@/i18n";

export function Contact({ dict }: { dict: Dict }) {
  const t = dict.contact;
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={
              <>
                {t.titlePre}
                <GradientText>{t.titleGradient}</GradientText>
              </>
            }
            description={t.description}
          />
        </Reveal>

        <Reveal delay={0.1} className="flex w-full justify-center">
          <Card
            raised
            className="flex w-full max-w-2xl flex-col items-center gap-6 p-8 text-center"
          >
            <Pill dot tone="success">
              {t.openToWork}
            </Pill>
            <p className="text-muted text-sm leading-relaxed">{t.copy}</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <ButtonLink variant="primary" href={`mailto:${site.email}`}>
                <Mail className="size-4" aria-hidden />
                {t.emailBtn}
              </ButtonLink>
              <ButtonLink href={site.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn className="size-4" aria-hidden />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={site.github} target="_blank" rel="noreferrer">
                <FaGithub className="size-4" aria-hidden />
                GitHub
              </ButtonLink>
              <ButtonLink href={dict.resume.path}>
                <FileText className="size-4" aria-hidden />
                {t.resumeBtn}
              </ButtonLink>
            </div>

            <p className="text-faint font-mono text-xs">{site.email}</p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
