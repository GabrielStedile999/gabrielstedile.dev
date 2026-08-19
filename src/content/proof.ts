export type ProofMetric = {
  value: number;
  suffix?: string;
  title: string;
  description: string;
};

export const proofMetrics: ProofMetric[] = [
  {
    value: 10,
    suffix: "+",
    title: "Years inside product teams",
    description:
      "From software house to global consultancy — the same fundamentals carried across every context: clear contracts, honest estimates, shipped work.",
  },
  {
    value: 10,
    suffix: "+",
    title: "Applications delivered",
    description:
      "Greenfield MVPs to long-running platforms in React and TypeScript, each one taken from requirement to production.",
  },
  {
    value: 6,
    title: "Global brands served",
    description:
      "IBM, Pfizer, Audi, AKQA, BCW and Philips — enterprise expectations for quality, accessibility and process.",
  },
  {
    value: 3,
    title: "Stack layers in production",
    description:
      "UI, API and AI — day-to-day work across React interfaces and the Node.js services behind them, now expanding into LLM integration.",
  },
];
