import { cn } from "@/lib/cn";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

/** Inline text painted with the brand purple→cyan gradient. */
export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "from-accent-from to-accent-to bg-gradient-to-r bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
