export type WorkingHabit = {
  title: string;
  description: string;
  punchline: string;
};

export const workingHabits: WorkingHabit[] = [
  {
    title: "End-to-end ownership",
    description:
      "I work with an owner's mindset: I get involved in the problem beyond the code and commit to the impact of what ships — following metrics and feedback after launch, not just until the merge.",
    punchline: "Shipped means measured",
  },
  {
    title: "Continuous learning",
    description:
      "Every project expands the repertoire. Studying and adapting is a life philosophy for me — knowledge that turns into real work.",
    punchline: "Dedication that ships",
  },
  {
    title: "Alignment as a habit",
    description:
      "I turn vague requirements into explicit contracts, surface trade-offs early, and keep product, design and engineering moving in the same direction.",
    punchline: "Fewer surprises, better-informed decisions",
  },
];
