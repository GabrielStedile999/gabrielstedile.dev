import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Profile } from "@/components/sections/Profile";
import { Proof } from "@/components/sections/Proof";
import { StackSection } from "@/components/sections/StackSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { WorkingStyle } from "@/components/sections/WorkingStyle";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="bg-surface-raised sr-only rounded-full px-4 py-2 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <div
        className="gradient-hairline fixed inset-x-0 top-0 z-[60]"
        aria-hidden
      />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TechMarquee />
        <Profile />
        <Journey />
        <StackSection />
        <Proof />
        <WorkingStyle />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
