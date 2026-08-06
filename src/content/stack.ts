import {
  Bot,
  Component,
  Gauge,
  Palette,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type StackArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Stack organized by responsibility, not by logo count. */
export const stackAreas: StackArea[] = [
  {
    icon: Component,
    title: "Component architecture",
    description:
      "Design systems, composition patterns and accessible components that stay consistent across teams, brands and years of product evolution.",
  },
  {
    icon: Workflow,
    title: "State & data flow",
    description:
      "Server state, caching, forms and predictable data contracts over REST and GraphQL — so the UI always knows what to render, even when things fail.",
  },
  {
    icon: Gauge,
    title: "Performance & Web Vitals",
    description:
      "Budgets for LCP, INP and CLS, code-splitting, image strategy and measuring before and after — speed treated as a feature, not an afterthought.",
  },
  {
    icon: Palette,
    title: "Design-to-code & motion",
    description:
      "Faithful implementation from design handoff, Tailwind-based systems, and animation with GSAP and Motion applied with restraint and intent.",
  },
  {
    icon: Server,
    title: "Backend for frontend",
    description:
      "Node.js APIs, authentication and authorization, pagination and BFF layers shaped by what the interface actually needs.",
  },
  {
    icon: Bot,
    title: "AI integration",
    description:
      "LLM-powered features, AI agents and retrieval pipelines wired into product UIs — plus AI-assisted workflows that shorten development cycles.",
  },
];
