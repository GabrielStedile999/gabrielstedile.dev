import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Slightly lighter surface, for cards sitting on top of other cards. */
  raised?: boolean;
  /** Enable border highlight on hover (default true). */
  interactive?: boolean;
};

export function Card({
  raised = false,
  interactive = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border-edge bg-surface rounded-card shadow-card border p-6",
        raised && "bg-surface-raised",
        interactive &&
          "hover:border-edge-bright transition-colors duration-300",
        className,
      )}
      {...props}
    />
  );
}
