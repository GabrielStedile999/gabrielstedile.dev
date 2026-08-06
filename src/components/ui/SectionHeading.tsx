import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Small mono uppercase label above the title, e.g. "Profile". */
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <p className="text-accent-to flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase">
        <span aria-hidden className="bg-accent-to/60 h-px w-6" />
        {eyebrow}
      </p>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-xl text-base text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
