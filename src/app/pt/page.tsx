import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getDict } from "@/i18n";

const dict = getDict("pt");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: "/pt",
    languages: { en: "/", "pt-BR": "/pt" },
  },
  openGraph: {
    title: dict.meta.title,
    description: dict.meta.description,
    locale: "pt_BR",
  },
};

export default function HomePt() {
  return <HomePage dict={dict} />;
}
