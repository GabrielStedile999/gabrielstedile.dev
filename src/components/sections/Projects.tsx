"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import type { Project, ProjectCategory } from "@/content/projects";
import type { Dict } from "@/i18n";
import { cn } from "@/lib/cn";

export function Projects({ dict }: { dict: Dict }) {
  const t = dict.work;
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "all" ? t.items : t.items.filter((p) => p.category === filter);

  return (
    <section id="work" className="scroll-mt-24 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        {/* Filters */}
        <div
          role="tablist"
          aria-label={t.filterAria}
          className="flex flex-wrap justify-center gap-2"
        >
          {t.categories.map((category) => {
            const isActive = filter === category.value;
            return (
              <button
                key={category.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(category.value)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 font-mono text-xs tracking-wide transition-colors",
                  isActive
                    ? "text-background"
                    : "text-muted hover:text-foreground border-edge bg-surface hover:border-edge-bright border",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 32 }
                    }
                    className="from-accent-from to-accent-to absolute inset-0 rounded-full bg-gradient-to-r"
                    aria-hidden
                  />
                )}
                <span className="relative">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                layout
                key={project.id}
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }
                }
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="group border-edge bg-surface rounded-card shadow-card hover:border-edge-bright focus-visible:border-edge-bright flex h-full w-full flex-col gap-4 border p-6 text-left transition-all duration-300 outline-none hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-faint font-mono text-[11px] tracking-[0.2em] uppercase">
                      {project.client}
                    </p>
                    {project.nda ? (
                      <span
                        className="text-faint flex items-center gap-1 font-mono text-[10px]"
                        title={t.ndaTitle}
                      >
                        <Lock className="size-3" aria-hidden />
                        {t.ndaShort}
                      </span>
                    ) : (
                      <ArrowUpRight
                        className="text-faint group-hover:text-accent-to size-4 transition-colors"
                        aria-hidden
                      />
                    )}
                  </div>

                  <h3 className="text-base leading-snug font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted flex-1 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-faint self-center font-mono text-[11px]">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-accent-to font-mono text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {t.viewDetails}
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      {/* Detail modal */}
      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={
          selected
            ? `${selected.title} ${t.modalLabelSuffix}`
            : t.modalFallbackLabel
        }
        closeLabel={t.closeAria}
      >
        {selected && (
          <article className="flex flex-col gap-6">
            <header className="flex flex-col gap-2 pr-10">
              <p className="text-faint font-mono text-[11px] tracking-[0.2em] uppercase">
                {selected.client}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-balance">
                {selected.title}
              </h3>
              {selected.nda && (
                <p className="text-faint flex items-center gap-1.5 font-mono text-xs">
                  <Lock className="size-3" aria-hidden />
                  {t.ndaLong}
                </p>
              )}
            </header>

            <div className="flex flex-col gap-2">
              <h4 className="text-accent-to font-mono text-xs tracking-[0.25em] uppercase">
                {t.modalContext}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {selected.context}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-accent-to font-mono text-xs tracking-[0.25em] uppercase">
                {t.modalWhat}
              </h4>
              <ul className="flex flex-col gap-2">
                {selected.contributions.map((item) => (
                  <li
                    key={item}
                    className="text-muted flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden
                      className="bg-accent-to/70 mt-1.75 size-1 shrink-0 rounded-full"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-accent-to font-mono text-xs tracking-[0.25em] uppercase">
                {t.modalOutcome}
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                {selected.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {selected.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            {selected.link && (
              <a
                href={selected.link.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent-to inline-flex items-center gap-1.5 font-mono text-sm hover:underline"
              >
                {selected.link.label}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            )}
          </article>
        )}
      </Modal>
    </section>
  );
}
