import { cn } from "@/lib/cn";

type TerminalWindowProps = {
  /** Filename shown in the title bar, e.g. "deploy.log". */
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Dark terminal-style window with traffic-light dots and a mono body. */
export function TerminalWindow({
  title,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "border-edge overflow-hidden rounded-xl border bg-[#0a0b16]",
        className,
      )}
    >
      <div className="border-edge flex items-center gap-2 border-b px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#f87171]" />
          <span className="size-2.5 rounded-full bg-[#fbbf24]" />
          <span className="size-2.5 rounded-full bg-[#8b7cf6]" />
        </span>
        <span className="text-faint ml-2 font-mono text-xs">{title}</span>
      </div>
      <div className="text-muted p-4 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
