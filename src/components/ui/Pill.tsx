import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  /** Show a pulsing status dot. */
  dot?: boolean;
  tone?: "accent" | "success" | "neutral";
  className?: string;
};

const toneStyles: Record<NonNullable<PillProps["tone"]>, string> = {
  accent: "border-accent-from/40 text-accent-from",
  success: "border-success/40 text-success",
  neutral: "border-edge text-muted",
};

const dotStyles: Record<NonNullable<PillProps["tone"]>, string> = {
  accent: "bg-accent-from",
  success: "bg-success",
  neutral: "bg-muted",
};

/** Rounded status pill, e.g. "Ready", "Open to work". */
export function Pill({
  children,
  dot = false,
  tone = "neutral",
  className,
}: PillProps) {
  return (
    <span
      className={cn(
        "bg-surface-raised inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs",
        toneStyles[tone],
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            "animate-pulse-dot size-1.5 rounded-full",
            dotStyles[tone],
          )}
        />
      )}
      {children}
    </span>
  );
}
