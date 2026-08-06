import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small technology chip, e.g. "React", "TypeScript". */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "border-edge bg-surface-raised text-muted inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs",
        className,
      )}
    >
      <span aria-hidden className="bg-accent-to/70 size-1 rounded-full" />
      {children}
    </span>
  );
}
