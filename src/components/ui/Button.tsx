import { cn } from "@/lib/cn";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

/** Anchor styled as a button. Primary = gradient CTA; ghost = outlined. */
export function ButtonLink({
  variant = "ghost",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "from-accent-from to-accent-to text-background hover:shadow-glow bg-gradient-to-r hover:brightness-110",
        variant === "ghost" &&
          "border-edge text-foreground hover:border-edge-bright bg-surface-raised border",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
