import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { publishedNotes } from "@/content/notes";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short notes on frontend engineering, AI-assisted workflows and building products — by Gabriel Stedile.",
  alternates: { canonical: "/notes" },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export default function NotesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12">
      <nav aria-label="Notes navigation" className="mb-10">
        <Link
          href="/"
          className="text-muted hover:text-foreground flex items-center gap-2 font-mono text-sm transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {site.domain}
        </Link>
      </nav>

      <header className="mb-10 flex flex-col gap-3">
        <p className="text-accent-to flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase">
          <span aria-hidden className="bg-accent-to/60 h-px w-6" />
          Notes
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Notes from the workbench.
        </h1>
        <p className="text-muted max-w-xl text-base text-pretty">
          Short write-ups on frontend engineering, AI-assisted workflows and the
          practical side of shipping products.
        </p>
      </header>

      <ul className="flex flex-col gap-5">
        {publishedNotes.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="group block">
              <Card className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <time
                    dateTime={note.date}
                    className="text-faint font-mono text-xs"
                  >
                    {dateFormatter.format(new Date(`${note.date}T00:00:00Z`))}
                  </time>
                  {note.placeholder && (
                    <span className="text-faint flex items-center gap-1 font-mono text-[10px] tracking-wide uppercase">
                      <FlaskConical className="size-3" aria-hidden />
                      Example — replace me
                    </span>
                  )}
                </div>
                <h2 className="group-hover:text-accent-to text-lg font-semibold tracking-tight transition-colors">
                  {note.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {note.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {note.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
