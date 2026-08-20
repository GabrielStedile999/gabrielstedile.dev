import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { StackConstellation } from "@/components/sections/StackConstellation";
import { Journey } from "@/components/sections/Journey";
import { Profile } from "@/components/sections/Profile";
import { Projects } from "@/components/sections/Projects";
import { Proof } from "@/components/sections/Proof";
import { StackSection } from "@/components/sections/StackSection";
import { WorkingStyle } from "@/components/sections/WorkingStyle";
import type { Dict } from "@/i18n";

const SKIP_LABEL: Record<string, string> = {
  en: "Skip to content",
  pt: "Pular para o conteúdo",
};

export function HomePage({ dict }: { dict: Dict }) {
  return (
    <>
      <a
        href="#hero"
        className="bg-surface-raised sr-only rounded-full px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        {SKIP_LABEL[dict.locale]}
      </a>
      <div
        className="gradient-hairline fixed inset-x-0 top-0 z-[60]"
        aria-hidden
      />
      <Navbar dict={dict} />
      <main className="flex flex-1 flex-col">
        <Hero dict={dict} />
        <StackConstellation dict={dict} />
        <Profile dict={dict} />
        <Journey dict={dict} />
        <Projects dict={dict} />
        <StackSection dict={dict} />
        <Proof dict={dict} />
        <WorkingStyle dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
