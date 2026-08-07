import type { Metadata } from "next";
import { ResumeDocument } from "@/components/ResumeDocument";
import { getDict } from "@/i18n";

const dict = getDict("pt");

export const metadata: Metadata = {
  title: dict.resume.metaTitle,
  description: dict.resume.metaDescription,
  alternates: {
    canonical: "/pt/resume",
    languages: { en: "/resume", "pt-BR": "/pt/resume" },
  },
  openGraph: {
    title: `${dict.resume.metaTitle} | Gabriel Stedile`,
    description: dict.resume.metaDescription,
    locale: "pt_BR",
  },
};

export default function ResumePagePt() {
  return <ResumeDocument dict={dict} />;
}
