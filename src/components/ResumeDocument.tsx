import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { ButtonLink } from "@/components/ui/Button";
import { PrintButton } from "@/components/ui/PrintButton";
import { site } from "@/content/site";
import { homePath, type Dict } from "@/i18n";

export function ResumeDocument({ dict }: { dict: Dict }) {
  const t = dict.resume;
  return (
    <main className="print-page mx-auto w-full max-w-3xl px-6 py-12 print:max-w-none print:p-0">
      {/* Top bar — hidden when printing */}
      <nav
        aria-label={t.actionsAria}
        className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden"
      >
        <Link
          href={homePath(dict.locale)}
          className="text-muted hover:text-foreground flex items-center gap-2 font-mono text-sm transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t.backLabel}
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={t.langToggle.href}
            aria-label={t.langToggle.aria}
            className="border-edge bg-surface text-muted hover:border-edge-bright hover:text-foreground flex items-center rounded-full border px-3 py-2 font-mono text-xs transition-colors"
          >
            {t.langToggle.label}
          </Link>
          <ButtonLink variant="primary" href={site.resumeUrl} download>
            <Download className="size-4" aria-hidden />
            {t.downloadPdf}
          </ButtonLink>
          <PrintButton label={t.print} />
        </div>
      </nav>

      {/* Header */}
      <header className="border-edge flex flex-col gap-3 border-b pb-8 print:border-neutral-300">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="text-accent-to font-mono text-sm print:text-neutral-700">
          {t.roleLine}
        </p>
        <ul className="text-muted flex flex-wrap gap-x-5 gap-y-1.5 text-sm print:text-neutral-600">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Mail className="size-3.5 print:hidden" aria-hidden />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaLinkedinIn className="size-3.5 print:hidden" aria-hidden />
              linkedin.com/in/gabriel-stedile
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="size-3.5 print:hidden" aria-hidden />
              github.com/GabrielStedile999
            </a>
          </li>
          <li className="flex items-center gap-1.5">
            <MapPin className="size-3.5 print:hidden" aria-hidden />
            {site.location} · {t.availability}
          </li>
        </ul>
      </header>

      {/* Summary */}
      <ResumeSection title={t.sections.summary}>
        <p className="text-muted text-sm leading-relaxed print:text-neutral-700">
          {t.summary}
        </p>
      </ResumeSection>

      {/* Skills */}
      <ResumeSection title={t.sections.skills}>
        <dl className="flex flex-col gap-2.5">
          {t.skills.map((group) => (
            <div key={group.label} className="text-sm leading-relaxed">
              <dt className="text-foreground inline font-semibold">
                {group.label}:{" "}
              </dt>
              <dd className="text-muted inline print:text-neutral-700">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </ResumeSection>

      {/* Experience */}
      <ResumeSection title={t.sections.experience}>
        <div className="flex flex-col gap-7">
          {t.experience.map((job) => (
            <article
              key={job.company + job.period}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold tracking-tight">
                  {job.company}{" "}
                  <span className="text-muted font-normal print:text-neutral-600">
                    · {job.role}
                  </span>
                </h3>
                <p className="text-faint font-mono text-xs print:text-neutral-500">
                  {job.period}
                  {job.duration ? ` (${job.duration})` : ""}
                </p>
              </div>
              <p className="text-faint font-mono text-xs print:text-neutral-500">
                {job.location}
              </p>
              <ul className="flex flex-col gap-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-muted flex items-start gap-2.5 text-sm leading-relaxed print:text-neutral-700"
                  >
                    <span
                      aria-hidden
                      className="bg-accent-to/70 mt-1.75 size-1 shrink-0 rounded-full print:bg-neutral-400"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ResumeSection>

      {/* Education */}
      <ResumeSection title={t.sections.education}>
        <div className="flex flex-col gap-4">
          {t.education.map((entry) => (
            <div
              key={entry.institution}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <p className="text-sm">
                <span className="font-semibold">{entry.institution}</span>{" "}
                <span className="text-muted print:text-neutral-700">
                  · {entry.degree}
                </span>
              </p>
              <p className="text-faint font-mono text-xs print:text-neutral-500">
                {entry.period}
              </p>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* Languages */}
      <ResumeSection title={t.sections.languages}>
        <p className="text-muted text-sm print:text-neutral-700">
          {t.languages
            .map((entry) => `${entry.language}: ${entry.level}`)
            .join(" | ")}
        </p>
      </ResumeSection>

      <footer className="border-edge text-faint mt-12 border-t pt-6 text-center font-mono text-xs print:hidden">
        <p>
          {t.preferFile}{" "}
          <a
            href={site.resumeUrl}
            download
            className="text-accent-to hover:underline"
          >
            {t.downloadLink}
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-edge border-b py-7 last-of-type:border-b-0 print:border-neutral-300">
      <h2 className="text-accent-to mb-4 font-mono text-xs tracking-[0.3em] uppercase print:text-neutral-800">
        {title}
      </h2>
      {children}
    </section>
  );
}
