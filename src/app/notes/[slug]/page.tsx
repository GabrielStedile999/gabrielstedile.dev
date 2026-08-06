import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { notes, type NoteBlock } from "@/content/notes";
import { site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((entry) => entry.slug === slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: note.title,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = notes.find((entry) => entry.slug === slug);
  if (!note) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <nav aria-label="Note navigation" className="mb-10">
        <Link
          href="/notes"
          className="text-muted hover:text-foreground flex items-center gap-2 font-mono text-sm transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All notes
        </Link>
      </nav>

      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          {note.placeholder && (
            <p className="border-edge bg-surface text-muted flex items-center gap-2 rounded-xl border px-4 py-3 font-mono text-xs">
              <FlaskConical className="text-accent-to size-3.5" aria-hidden />
              This is a placeholder example — replace it with real writing in
              src/content/notes.ts.
            </p>
          )}
          <time dateTime={note.date} className="text-faint font-mono text-xs">
            {dateFormatter.format(new Date(`${note.date}T00:00:00Z`))}
          </time>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {note.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {note.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {note.blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>

        <footer className="border-edge text-muted mt-4 border-t pt-6 text-sm">
          <p>
            Written by{" "}
            <Link href="/" className="text-accent-to hover:underline">
              {site.name}
            </Link>{" "}
            — senior frontend engineer. Want to talk?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent-to hover:underline"
            >
              {site.email}
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-3 text-xl font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-muted text-base leading-relaxed">{block.text}</p>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="text-muted flex items-start gap-2.5 text-base leading-relaxed"
            >
              <span
                aria-hidden
                className="bg-accent-to/70 mt-2.5 size-1 shrink-0 rounded-full"
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="border-edge bg-surface overflow-x-auto rounded-xl border p-4">
          <code className="font-mono text-sm leading-relaxed">
            {block.code}
          </code>
        </pre>
      );
  }
}
