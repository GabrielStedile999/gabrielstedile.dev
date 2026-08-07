import { journey } from "@/content/journey";
import { categories, projects } from "@/content/projects";
import { proofMetrics } from "@/content/proof";
import { resume } from "@/content/resume";
import { stackAreas } from "@/content/stack";
import { workingHabits } from "@/content/workingStyle";
import type { Dict } from "./types";

export const en: Dict = {
  locale: "en",
  htmlLang: "en",

  meta: {
    title: "Gabriel Stedile | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer — React, TypeScript, Node.js and AI integration. 10+ years building web applications for global clients.",
  },

  nav: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "Profile", href: "#about" },
      { label: "Journey", href: "#journey" },
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#skills" },
      { label: "Proof", href: "#achievements" },
      { label: "Contact", href: "#contact" },
    ],
    talk: "Let's talk",
    ariaMain: "Main navigation",
    ariaHome: "Home",
    ariaToggleMenu: "Toggle navigation",
    ariaOpenPalette: "Open command palette",
    langToggle: { label: "PT", href: "/pt", aria: "PT · Ver em português" },
  },

  hero: {
    eyebrow: "Frontend engineering with product sense",
    titlePre: "Interfaces that make the complex ",
    titleGradient: "feel simple.",
    lead: "React-first and product-shaped: I turn business requirements into fast, accessible web applications — and the Node.js layer behind them — for global brands and growing startups.",
    monoLine: "Senior Frontend Engineer / Full Stack Capable / AI Integration",
    ctaWork: "Explore my work",
    ctaResume: "Download resume",
    availability: "Open to remote roles",
    socialAria: {
      group: "Social links",
      github: "GitHub profile",
      linkedin: "LinkedIn profile",
      email: "Send email",
    },
    panelLabel: "Interface in production",
    live: "Live",
    terminal: {
      deployPrefix: "deploy: production ·",
      vitals: "✓ LCP 1.2s · INP 80ms · CLS 0.01",
      a11yLabel: "a11y:",
      a11yValue: "keyboard + screen reader tested",
      aiLabel: "ai:",
      aiValue: "agent tools connected · 0 hallucinated pixels",
    },
    stats: {
      years: "Years of experience",
      apps: "Apps delivered",
      clients: "Global clients",
      layers: "Layers: UI · API · AI",
    },
  },

  marqueeAria: "Core technologies",

  profile: {
    eyebrow: "Profile",
    titlePre: "React-first. AI-forward. ",
    titleGradient: "Grounded in product reality.",
    paragraphs: [
      "I'm Gabriel, a Florianópolis-based frontend engineer with 10+ years across software houses, fintech, SaaS and global consultancy. My deepest experience is in React and TypeScript — delivering for clients like IBM, Pfizer, Audi, AKQA and BCW, where quality bars and deadlines are both non-negotiable.",
      "When the product needs it, I go further down the stack: I've built a B2B SaaS API from scratch in Node.js, implemented authentication, authorization and pagination, and shaped BFF layers around what interfaces actually consume.",
      "Right now I'm deepening AI integration — agents, LLM-powered features and AI-assisted engineering workflows — through an MBA in Software Engineering with AI and hands-on projects.",
    ],
    principles: [
      "Own the interface end-to-end — from design handoff to production metrics.",
      "Treat loading, empty and error states as part of the product, not leftovers.",
      "Ship fast without leaving code the next person can't read.",
    ],
    asideAria: "Developer profile summary",
    photoAlt: "Portrait of Gabriel Stedile",
    cardTagline:
      "Frontend engineer for product teams that care about the details.",
    basedIn: {
      label: "Based in",
      value: "Florianópolis, Brazil · remote-friendly",
    },
    deepest: {
      label: "Deepest experience",
      value: "React, TypeScript, Next.js, Node.js BFF",
    },
    expanding: {
      label: "Expanding into",
      value: "AI agents, LLM integration, AI-assisted workflows",
    },
  },

  journey: {
    eyebrow: "Journey",
    title: "A decade of getting closer to the user.",
    description:
      "The stacks changed, the direction didn't: toward the decisions that make software feel right for the people using it.",
    entries: journey,
  },

  work: {
    eyebrow: "Selected work",
    title: "Products I've helped ship.",
    description:
      "Most client work lives under NDA — here it's described at the level I can share, with the role and stack intact.",
    filterAria: "Filter projects by category",
    categories: [...categories],
    ndaShort: "NDA",
    ndaTitle: "Client work under NDA",
    ndaLong: "Client work under NDA — described at a shareable level.",
    viewDetails: "View details →",
    modalContext: "Context",
    modalWhat: "What I did",
    modalOutcome: "Outcome",
    modalLabelSuffix: "— details",
    modalFallbackLabel: "Project details",
    closeAria: "Close dialog",
    items: projects,
  },

  stack: {
    eyebrow: "Stack",
    titlePre: "Organized by ",
    titleGradient: "responsibility",
    titlePost: ", not by logo count.",
    description:
      "Tools change. Knowing which component boundary, data contract or millisecond deserves attention is what stays.",
    areas: stackAreas.map(({ title, description }) => ({ title, description })),
  },

  proof: {
    eyebrow: "Proof",
    title: "Signals of sustained delivery.",
    description:
      "Not vanity numbers — the scope and repetition behind a decade of shipping.",
    metrics: proofMetrics,
  },

  workingStyle: {
    eyebrow: "Working style",
    title: "The habits behind the delivery.",
    description: "Practical principles I bring to every product team.",
    habits: workingHabits,
  },

  contact: {
    eyebrow: "Contact",
    titlePre: "Let's build something people ",
    titleGradient: "enjoy using.",
    description:
      "Tell me about the product, the stack and what success looks like — I'll bring frontend depth and the range to go further when needed.",
    openToWork: "Open to work",
    copy: "Best fit: senior frontend or frontend-leaning full-stack roles in product-driven teams — remote, Brazil or international. Replies within 1–2 business days.",
    emailBtn: "Email me",
    resumeBtn: "Resume",
  },

  footer: {
    tagline:
      "Senior Frontend Engineer — building interfaces that move products forward.",
    ariaLabel: "Footer",
    links: [
      { label: "Home", href: "/" },
      { label: "Resume", href: "/resume" },
      { label: "Notes", href: "/notes" },
      { label: "Português", href: "/pt" },
      {
        label: "GitHub",
        href: "https://github.com/GabrielStedile999",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gabriel-stedile",
        external: true,
      },
      {
        label: "Source",
        href: "https://github.com/GabrielStedile999/gabrielstedile.dev",
        external: true,
      },
    ],
    rights: "Open to remote roles",
  },

  resume: {
    metaTitle: "Resume",
    metaDescription:
      "Resume of Gabriel Stedile — Senior Frontend Engineer with 10+ years of experience in React, TypeScript, Node.js and AI integration.",
    path: "/resume",
    actionsAria: "Resume actions",
    backLabel: "gabrielstedile.dev",
    downloadPdf: "Download PDF",
    print: "Print",
    langToggle: {
      label: "PT",
      href: "/pt/resume",
      aria: "PT · Ver currículo em português",
    },
    roleLine:
      "Senior Frontend Engineer | React · TypeScript · Node.js · AI Integration",
    availability: "Open to remote roles",
    sections: {
      summary: "Professional Summary",
      skills: "Technical Skills",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
    },
    summary: resume.summary,
    skills: [...resume.skills],
    experience: [...resume.experience],
    education: [...resume.education],
    languages: [...resume.languages],
    preferFile: "Prefer a file?",
    downloadLink: "Download the PDF version",
  },

  palette: {
    dialogAria: "Command palette",
    searchAria: "Search commands",
    placeholder: "Type a command or search…",
    listAria: "Commands",
    groups: { navigate: "Navigate", actions: "Actions" },
    noResultsPrefix: "No results for",
    hintNavigate: "↑↓ navigate",
    hintSelect: "↵ select",
    commands: {
      home: "Home",
      profile: "Profile",
      journey: "Journey",
      work: "Selected work",
      stack: "Stack",
      proof: "Proof",
      contact: "Contact",
      resumePage: "Resume page",
      notes: "Notes",
      downloadResume: "Download resume",
      copyEmail: "Copy email address",
      copied: "Email copied!",
      sendEmail: "Send an email",
      openGithub: "Open GitHub",
      openLinkedin: "Open LinkedIn",
    },
    hints: { pdf: "PDF", newTab: "new tab", mailto: "mailto" },
  },
};
