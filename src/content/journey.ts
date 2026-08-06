export type JourneyEntry = {
  period: string;
  company?: string;
  companyUrl?: string;
  title: string;
  description: string;
};

export const journey: JourneyEntry[] = [
  {
    period: "2015",
    company: "Supero Tecnologia",
    companyUrl: "https://www.supero.com.br",
    title: "Learned versatility in a software house",
    description:
      "Custom solutions for clients like Philips Clinical Informatics and Engie Brasil, moving between AngularJS, Java and JavaScript — building the adaptability that fast-paced client work demands.",
  },
  {
    period: "2018",
    company: "Par Mais",
    companyUrl: "https://www.parmais.com.br",
    title: "Became a product stakeholder in fintech",
    description:
      "Maintained and evolved a production financial platform (React + Node.js) for investment advisory clients — and earned a seat in business rules and UX discussions, bridging engineering and product.",
  },
  {
    period: "2019",
    company: "Involves",
    companyUrl: "https://involves.com",
    title: "Built a B2B SaaS from zero",
    description:
      "Developed the API (Node.js), web app (React) and mobile app (React Native) of a new product simultaneously, inside an engineering culture centered on code review and continuous feedback.",
  },
  {
    period: "2020",
    company: "ArcTouch",
    companyUrl: "https://arctouch.com",
    title: "Scaled to global clients — and to Tech Lead",
    description:
      "Delivered 10+ web applications in React and TypeScript for IBM, Pfizer, Audi, AKQA and BCW, from greenfield MVPs to long-running platforms. Served as Tech Lead on a key engagement and contributed to Node.js APIs and BFF layers.",
  },
  {
    period: "2025–26",
    title: "Doubling down on AI-integrated engineering",
    description:
      "Building with React, TypeScript, Node.js and AI agents while pursuing an MBA in Software Engineering with AI — bringing LLM integration patterns into everyday product work.",
  },
];
