/**
 * Notes / articles content.
 *
 * ⚠️ The two notes below are PLACEHOLDER EXAMPLES written to demonstrate the
 * structure — replace them with your own writing before sharing the /notes
 * URL. Set `placeholder: false` (or remove the field) once a note is real.
 * Notes with `placeholder: true` render with a visible "example" banner.
 */

export type NoteBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; language?: string; code: string }
  | { type: "list"; items: string[] };

export type Note = {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-08-06"
  excerpt: string;
  tags: string[];
  placeholder?: boolean;
  blocks: NoteBlock[];
};

export const notes: Note[] = [
  {
    slug: "example-ai-pair-workflow",
    title: "Example: How I structure AI-assisted delivery in phases",
    date: "2026-08-06",
    excerpt:
      "A placeholder note showing the format — swap this for your own write-up about pairing with AI agents through phased delivery.",
    tags: ["AI", "Workflow"],
    placeholder: true,
    blocks: [
      {
        type: "paragraph",
        text: "This is an example note. It exists so you can see how a note is structured — a list of typed blocks: paragraphs, headings, code and lists. Replace the content in src/content/notes.ts with your own writing.",
      },
      { type: "heading", text: "Why phases" },
      {
        type: "paragraph",
        text: "Working with an AI agent in explicit phases (design system → layout → interactions → SEO) keeps every review small enough to actually review. Each phase ends in a commit you can inspect, run and reject.",
      },
      {
        type: "list",
        items: [
          "Phase boundaries force verification before new complexity arrives.",
          "Content lives in typed files, so copy edits never touch components.",
          "The human owns git push — nothing reaches production unreviewed.",
        ],
      },
      {
        type: "code",
        language: "bash",
        code: "git add -A\ngit commit -m 'Phase N: ...'\ngit push  # the human step, on purpose",
      },
    ],
  },
  {
    slug: "example-react-boundaries",
    title: "Example: Server components as a content boundary",
    date: "2026-08-05",
    excerpt:
      "A second placeholder demonstrating a shorter, more technical note. Replace it with a real one.",
    tags: ["React", "Next.js"],
    placeholder: true,
    blocks: [
      {
        type: "paragraph",
        text: "Another example note. Keeping sections as server components and pushing interactivity into small client leaves (a Reveal wrapper, a Counter) keeps the JS bundle honest while the page stays mostly static.",
      },
      {
        type: "code",
        language: "tsx",
        code: "// server component stays clean\n<Reveal delay={0.1}>\n  <Card>…</Card>\n</Reveal>",
      },
    ],
  },
];

export const publishedNotes = [...notes].sort((a, b) =>
  b.date.localeCompare(a.date),
);
