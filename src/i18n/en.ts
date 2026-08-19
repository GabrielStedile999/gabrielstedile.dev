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
    title: "Gabriel Stedile | Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer — React, TypeScript, Node.js and AI integration. 10+ years building web products for global clients.",
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
    eyebrow: "Full-stack engineering with product sense",
    titlePre: "Interfaces that make the complex ",
    titleGradient: "feel simple.",
    lead: "I build web products end to end — React and TypeScript on the front, Node.js APIs behind them — for global brands and growing startups.",
    monoLine: "Senior Full Stack Engineer / React · Node.js / AI Integration",
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
      aiValue: "LLM features · agent workflows",
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
    titlePre: "Frontend depth, ",
    titleGradient: "full-stack range.",
    paragraphs: [
      "I'm Gabriel, a full-stack engineer based in Florianópolis, with 10+ years across software houses, fintech, SaaS and global consultancy. Most of that time was spent in React and TypeScript, delivering for clients like IBM, Pfizer, Audi, AKQA and BCW.",
      "The backend is part of my routine, not a footnote: I've built a B2B SaaS API from scratch in Node.js, worked with authentication, authorization, PostgreSQL and Docker, and designed BFF layers around what interfaces actually consume.",
      "Right now I'm deepening AI integration — agents, LLM-powered features and AI-assisted engineering workflows — through an MBA in Software Engineering with AI and hands-on projects.",
    ],
    principles: [
      "Own the feature end-to-end — from design handoff to the API and production metrics.",
      "Interfaces built for the real world — including loading, error and empty states.",
      "Verifiable quality: automated tests and code review as part of the flow, not an extra step.",
      "Direct communication with product and design — aligning before building avoids rework after.",
      "Deliver fast without compromising quality — readable, documented code, ready for the next person to build on.",
    ],
    asideAria: "Developer profile summary",
    photoAlt: "Portrait of Gabriel Stedile",
    cardTagline:
      "Full-stack engineer for product teams — from interface to API.",
    basedIn: {
      label: "Based in",
      value: "Florianópolis, Brazil · remote-friendly",
    },
    deepest: {
      label: "Deepest experience",
      value: "React, TypeScript, Next.js, Node.js",
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
    titlePre: "What I solve, ",
    titleGradient: "not just what I use.",
    titlePost: "",
    description:
      "More than a list of technologies: the areas where I take responsibility inside a product — from interface to API.",
    areas: stackAreas.map(({ title, description }) => ({ title, description })),
  },

  proof: {
    eyebrow: "Proof",
    title: "The numbers behind the work.",
    description:
      "Quick context for the details: the volume and kind of delivery behind everything else on this site.",
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
      "Tell me about the product, the stack and what success looks like — I work across the whole feature, from interface to API.",
    openToWork: "Open to work",
    copy: "Best fit: senior full-stack or frontend-heavy roles in product-driven teams — remote, Brazil or international. Replies within 1–2 business days.",
    emailBtn: "Email me",
    resumeBtn: "Resume",
  },

  footer: {
    tagline: "Senior Full Stack Engineer — web products from interface to API.",
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
      "Resume of Gabriel Stedile — Senior Full Stack Engineer with 10+ years of experience in React, TypeScript, Node.js and AI integration.",
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
      "Senior Full Stack Engineer | React · TypeScript · Node.js · AI Integration",
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
