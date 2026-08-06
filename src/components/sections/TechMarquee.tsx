import { techMarquee } from "@/content/tech";

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <section
      aria-label="Core technologies"
      className="border-edge relative overflow-hidden border-y py-5"
    >
      <div className="animate-marquee flex w-max gap-3 hover:[animation-play-state:paused]">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            aria-hidden={index >= techMarquee.length}
            className="border-edge bg-surface text-muted inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm whitespace-nowrap"
          >
            <span
              aria-hidden
              className="bg-accent-to/70 size-1.5 rounded-full"
            />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
