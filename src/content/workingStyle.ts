export type WorkingHabit = {
  title: string;
  description: string;
  punchline: string;
};

export const workingHabits: WorkingHabit[] = [
  {
    title: "End-to-end ownership",
    description:
      "A feature isn't done at merge. I follow it through rollout, real-user metrics and feedback — and adjust when production disagrees with the plan.",
    punchline: "Shipped means measured",
  },
  {
    title: "Edge cases first",
    description:
      "Loading, empty and error states are designed with the happy path, not after it. That's where users actually decide if a product feels solid.",
    punchline: "The details are the product",
  },
  {
    title: "Alignment as a habit",
    description:
      "I turn vague requirements into explicit contracts, surface trade-offs early, and keep product, design and engineering moving in the same direction.",
    punchline: "Fewer surprises, faster teams",
  },
];
