import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { CommandPalette } from "@/components/CommandPalette";
import { LangAttribute } from "@/components/LangAttribute";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

const SITE_URL = "https://gabrielstedile.dev";
const DESCRIPTION =
  "Senior Full Stack Engineer — React, TypeScript, Node.js and AI integration. 10+ years building web products for global clients.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gabriel Stedile | Senior Full Stack Engineer",
    template: "%s | Gabriel Stedile",
  },
  description: DESCRIPTION,
  keywords: [
    "Gabriel Stedile",
    "Senior Full Stack Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "AI integration",
    "Florianópolis",
  ],
  authors: [{ name: "Gabriel Stedile", url: SITE_URL }],
  creator: "Gabriel Stedile",
  alternates: {
    canonical: "/",
    languages: { en: "/", "pt-BR": "/pt" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "gabrielstedile.dev",
    title: "Gabriel Stedile | Senior Full Stack Engineer",
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Stedile — Senior Full Stack Engineer. Interfaces that make the complex feel simple.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Stedile | Senior Full Stack Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Stedile",
  jobTitle: "Senior Full Stack Engineer",
  url: SITE_URL,
  email: "mailto:gabriel.stedile9@gmail.com",
  image: `${SITE_URL}/og.png`,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-stedile",
    "https://github.com/GabrielStedile999",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal de Santa Catarina",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Frontend Engineering",
    "AI Integration",
    "LLM Integration",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <LangAttribute />
        <CommandPalette />
        <Analytics />
      </body>
    </html>
  );
}
