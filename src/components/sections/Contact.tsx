import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something people{" "}
              <GradientText>enjoy using.</GradientText>
            </>
          }
          description="Tell me about the product, the stack and what success looks like — I'll bring frontend depth and the range to go further when needed."
        />

        <Card
          raised
          className="flex w-full max-w-2xl flex-col items-center gap-6 p-8 text-center"
        >
          <Pill dot tone="success">
            Open to work
          </Pill>
          <p className="text-muted text-sm leading-relaxed">
            Best fit: senior frontend or frontend-leaning full-stack roles in
            product-driven teams — remote, Brazil or international. Replies
            within 1–2 business days.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonLink variant="primary" href={`mailto:${site.email}`}>
              <Mail className="size-4" aria-hidden />
              Email me
            </ButtonLink>
            <ButtonLink href={site.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="size-4" aria-hidden />
              LinkedIn
            </ButtonLink>
            <ButtonLink href={site.github} target="_blank" rel="noreferrer">
              <FaGithub className="size-4" aria-hidden />
              GitHub
            </ButtonLink>
          </div>

          <p className="text-faint font-mono text-xs">{site.email}</p>
        </Card>
      </div>
    </section>
  );
}
