export type ProjectCategory = "enterprise" | "saas" | "fintech" | "personal";

export type Project = {
  /** Stable id, used for filtering keys and aria wiring. */
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  /** One-line summary shown on the card. */
  summary: string;
  /** Longer context shown in the modal. */
  context: string;
  /** What Gabriel actually did, shown in the modal as a list. */
  contributions: string[];
  /** Qualitative outcome — no invented numbers. */
  outcome: string;
  stack: string[];
  /** Optional external link (only for public work). */
  link?: { label: string; url: string };
  /** Work under NDA is described at a shareable level. */
  nda?: boolean;
};

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "enterprise", label: "Enterprise" },
  { value: "saas", label: "SaaS" },
  { value: "fintech", label: "Fintech" },
  { value: "personal", label: "AI & Personal" },
];

export const projects: Project[] = [
  {
    id: "ibm-platforms",
    title: "Long-running enterprise platforms",
    client: "IBM · via ArcTouch",
    category: "enterprise",
    summary:
      "Years-long React + TypeScript platforms where consistency, accessibility and process mattered as much as features.",
    context:
      "Multi-year engagements delivering and evolving web platforms for one of the world's largest technology companies — large codebases, distributed teams and enterprise-grade review culture.",
    contributions: [
      "Built and maintained React + TypeScript applications inside long-running product teams",
      "Served as Tech Lead on a key engagement, coordinating delivery and technical decisions",
      "Contributed to Node.js APIs and BFF layers shaped by what the interfaces needed",
      "Kept accessibility and code review standards consistent across years of iteration",
    ],
    outcome:
      "Sustained delivery across multiple releases and team rotations — the kind of platform work where the codebase has to outlive any single developer.",
    stack: ["React", "TypeScript", "Node.js", "Accessibility"],
    nda: true,
  },
  {
    id: "pfizer-health",
    title: "Healthcare web experiences",
    client: "Pfizer · via ArcTouch",
    category: "enterprise",
    summary:
      "Accessible, compliant web applications for a global pharmaceutical company — where getting details right is non-negotiable.",
    context:
      "Healthcare-adjacent web products for a global pharma brand, built under strict review: legal, accessibility and brand compliance on every deliverable.",
    contributions: [
      "Implemented accessible React interfaces reviewed against WCAG expectations",
      "Translated regulated, legally-reviewed content into maintainable component systems",
      "Worked design-to-code from high-fidelity handoffs with pixel-level fidelity",
    ],
    outcome:
      "Shipped experiences that passed pharma's layered compliance reviews without missing delivery dates.",
    stack: ["React", "TypeScript", "Accessibility", "Design systems"],
    nda: true,
  },
  {
    id: "audi-automotive",
    title: "Automotive digital experiences",
    client: "Audi · via ArcTouch",
    category: "enterprise",
    summary:
      "Brand-heavy, motion-rich web experiences where design fidelity and performance budgets pulled in opposite directions.",
    context:
      "Digital experiences for a premium automotive brand — highly visual, animation-driven interfaces where the design bar is set by the brand's own standards.",
    contributions: [
      "Implemented motion-rich interfaces with GSAP and CSS animation, applied with restraint",
      "Balanced heavy visual assets against Core Web Vitals budgets",
      "Delivered faithful design-to-code implementation from agency-grade handoffs",
    ],
    outcome:
      "Interfaces that kept the premium feel of the brand without giving up load performance.",
    stack: ["React", "TypeScript", "GSAP", "Web Vitals"],
    nda: true,
  },
  {
    id: "agency-campaigns",
    title: "Campaign & brand platforms",
    client: "AKQA · BCW · via ArcTouch",
    category: "enterprise",
    summary:
      "Fast-turnaround campaign sites and brand platforms for global agencies — greenfield MVPs shipped on agency timelines.",
    context:
      "Work with two global agencies across multiple campaign and platform projects — short cycles, shifting requirements and launch dates that don't move.",
    contributions: [
      "Took greenfield projects from kickoff to production on fixed launch dates",
      "Built reusable component foundations so each campaign didn't start from zero",
      "Collaborated directly with agency design and strategy teams",
    ],
    outcome:
      "Repeated on-time launches — the reason the engagements kept coming back.",
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    nda: true,
  },
  {
    id: "involves-saas",
    title: "B2B SaaS built from zero",
    client: "Involves",
    category: "saas",
    summary:
      "API, web app and mobile app of a new product — developed simultaneously, inside a strong code-review culture.",
    context:
      "A new B2B SaaS product at a consolidated retail-tech company: one small team building the entire product surface at once, from database to app store.",
    contributions: [
      "Developed the Node.js API, React web app and React Native mobile app in parallel",
      "Helped shape the product's technical foundations from the first commit",
      "Worked inside an engineering culture centered on code review and continuous feedback",
    ],
    outcome:
      "A complete product surface — API, web and mobile — built from zero by a small team that owned all of it.",
    stack: ["React", "React Native", "Node.js", "REST APIs"],
  },
  {
    id: "parmais-fintech",
    title: "Investment advisory platform",
    client: "Par Mais",
    category: "fintech",
    summary:
      "Production fintech platform for investment advisory clients — where engineering earned a seat in business and UX discussions.",
    context:
      "A live financial platform serving real advisory clients: React frontend, Node.js backend, and business rules where mistakes have a cost measured in money.",
    contributions: [
      "Maintained and evolved the platform's React frontend and Node.js services",
      "Participated in business-rule and UX discussions, bridging engineering and product",
      "Handled the care that production financial data demands",
    ],
    outcome:
      "Trusted enough to move from implementing tickets to helping define them.",
    stack: ["React", "Node.js", "UX collaboration", "Fintech"],
  },
  {
    id: "philips-health",
    title: "Clinical informatics solutions",
    client: "Philips · via Supero",
    category: "enterprise",
    summary:
      "Custom healthcare software for Philips Clinical Informatics — early proof that adaptability is a skill of its own.",
    context:
      "Software-house work for enterprise clients including Philips Clinical Informatics and Engie Brasil — different stacks, different domains, same expectation of quality.",
    contributions: [
      "Delivered features across AngularJS, Java and JavaScript codebases",
      "Adapted quickly between client contexts, domains and tech stacks",
      "Built the versatility that later made fast-paced agency work feel familiar",
    ],
    outcome:
      "The foundation years: learning that fundamentals transfer even when the stack doesn't.",
    stack: ["AngularJS", "Java", "JavaScript"],
    nda: true,
  },
  {
    id: "necroforja",
    title: "NecroForja — tabletop campaign manager",
    client: "Personal · necroforja.com.br",
    category: "personal",
    summary:
      "Full-stack campaign manager for Necromunda tabletop, live in production — with an AI rules assistant built on RAG.",
    context:
      "A complete product built end to end and running at necroforja.com.br: it manages a multi-cycle Necromunda campaign — players, gangs, challenges and rankings — with automated rating and wealth calculations.",
    contributions: [
      "Built the whole stack: Next.js App Router frontend, PostgreSQL with Drizzle ORM, and Auth.js authentication with role-protected routes",
      "Implemented an AI rules assistant: RAG over indexed rulebooks with pgvector embeddings and Claude, answering with page citations",
      "Set up automated tests (Vitest + Playwright e2e), seed data for local development and deployment on Vercel",
    ],
    outcome:
      "A live product running a real campaign — full-stack and AI integration working together in production.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "RAG",
      "Claude API",
    ],
    link: {
      label: "View source on GitHub",
      url: "https://github.com/GabrielStedile999/necroforja",
    },
  },
  {
    id: "portfolio-ai",
    title: "gabrielstedile.dev — this site",
    client: "Personal · AI-assisted",
    category: "personal",
    summary:
      "This portfolio: Next.js + Tailwind v4 + Motion, built in pair with an AI agent — the workflow it advertises, applied to itself.",
    context:
      "A working demonstration of AI-integrated engineering: the site was designed and built in collaboration with an AI coding agent, with every decision reviewed and shipped through a real git workflow to Vercel.",
    contributions: [
      "Designed the design-token system, component library and content architecture",
      "Directed an AI agent through phased delivery — design system, layout, interactions",
      "Owns the deploy pipeline: GitHub → Vercel, with Web Analytics in production",
    ],
    outcome:
      "The site you're reading — built in days through phased, reviewed deliveries.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "AI agents"],
    link: {
      label: "View source on GitHub",
      url: "https://github.com/GabrielStedile999/gabrielstedile.dev",
    },
  },
];
