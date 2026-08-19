export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  bullets: string[];
};

export type ResumeEducation = {
  institution: string;
  degree: string;
  period: string;
};

export type ResumeSkillGroup = {
  label: string;
  items: string[];
};

export const resume = {
  summary:
    "Full Stack Engineer with 10+ years of experience building web applications for global enterprise clients including IBM, Pfizer, and AKQA. Deepest experience in the React/TypeScript ecosystem — component architecture, performance and API integration — with production backend work in Node.js (REST APIs, BFF layers, authentication). Tech Lead experience driving architectural decisions across greenfield and legacy modernization projects. Currently deepening AI integration skills (MCP, AI Agents, RAG, LLMs) through an MBA in Software Engineering with AI. Seeking senior full-stack or frontend-heavy roles focused on product and user experience.",

  skills: [
    {
      label: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "SASS",
        "GSAP",
      ],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "REST APIs",
        "GraphQL",
        "BFF Architecture",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      label: "AI / ML",
      items: [
        "Cursor",
        "Claude Code",
        "AI Agents",
        "MCP",
        "Prompt Engineering",
        "RAG",
        "LLM Integration",
      ],
    },
    {
      label: "Quality & Process",
      items: [
        "Agile/Scrum/Lean",
        "Technical Leadership",
        "Testing (Jest)",
        "Observability (OpenTelemetry, Sentry)",
        "Code Review",
        "CI/CD",
        "Git",
      ],
    },
  ] satisfies ResumeSkillGroup[],

  experience: [
    {
      company: "Self-employed",
      role: "Full Stack Engineer — Personal Projects & MBA",
      period: "Jul 2025 – Present",
      location: "Florianópolis, SC, Brazil",
      bullets: [
        "Building projects with React, TypeScript, Node.js, MCP, and AI Agents — applying AI-assisted engineering practices to explore LLM integration patterns and reduce development cycles.",
        "Pursuing MBA in Software Engineering with AI at Full Cycle, with focus on AI Agents, system design, and technical leadership.",
      ],
    },
    {
      company: "ArcTouch",
      role: "Web Full Stack Engineer",
      period: "Oct 2020 – Jun 2025",
      duration: "4 yrs 9 mos",
      location: "Florianópolis, SC, Brazil",
      bullets: [
        "Delivered 10+ web applications in React and TypeScript for clients of various sizes and business contexts, including global enterprises (IBM, Pfizer, Audi, AKQA, BCW), spanning greenfield MVPs to long-running platforms. Contributed to building and maintaining Node.js APIs and BFF layers.",
        "Served as Tech Lead on a key client engagement, coordinating a cross-functional team and driving critical technical decisions — aligning product requirements with engineering execution.",
        "Developed adaptability, rapid onboarding, and self-learning with new technologies across short-deadline client projects — expanding hands-on experience to include Tailwind CSS, GSAP, SASS, Craft CMS, and Meta Spark Studio, among others.",
      ],
    },
    {
      company: "Involves",
      role: "Software Developer",
      period: "Sep 2019 – Sep 2020",
      duration: "1 yr 1 mo",
      location: "Florianópolis, SC, Brazil",
      bullets: [
        "Built a B2B SaaS product from scratch, simultaneously developing the API (Node.js), web application (React), and mobile app (React Native).",
        "Worked within an engineering culture focused on code quality and continuous feedback — strengthening code review practices and technical collaboration.",
      ],
    },
    {
      company: "Par Mais",
      role: "Full Stack Developer",
      period: "Apr 2018 – Aug 2019",
      duration: "1 yr 5 mos",
      location: "Florianópolis, SC, Brazil",
      bullets: [
        "Developed a production financial web application (React + Node.js) for fintech investment advisory clients — ensuring stability and continuity of an established business system.",
        "Acted as a product stakeholder in business rules definition and UX discussions — bridging technical and business perspectives to align engineering delivery with client needs.",
      ],
    },
    {
      company: "Supero Tecnologia",
      role: "Full Stack Developer",
      period: "Nov 2015 – Jan 2018",
      duration: "2 yrs 3 mos",
      location: "Florianópolis, SC, Brazil",
      bullets: [
        "Delivered custom solutions for multiple clients, including Philips Clinical Informatics and Engie Brasil, adapting quickly across different stacks (AngularJS, Java, JavaScript) — building technical versatility in a fast-paced software house environment.",
      ],
    },
  ] satisfies ResumeExperience[],

  education: [
    {
      institution: "Full Cycle",
      degree: "MBA — Software Engineering with AI",
      period: "Feb 2026 – Feb 2027",
    },
    {
      institution: "Universidade Federal de Santa Catarina",
      degree: "B.S. in Information Systems",
      period: "2014 – 2020",
    },
  ] satisfies ResumeEducation[],

  languages: [
    { language: "English", level: "B2–C1" },
    { language: "Portuguese", level: "Native" },
  ],
} as const;
