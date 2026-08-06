import { cn } from "@/lib/cn";
import { Card } from "./Card";
import { Counter } from "./Counter";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

/** Metric card with an animated count-up number and a short label. */
export function StatCard({ value, suffix, label, className }: StatCardProps) {
  return (
    <Card raised className={cn("flex flex-col gap-1 p-5", className)}>
      <Counter
        to={value}
        suffix={suffix}
        className="text-2xl font-semibold tracking-tight"
      />
      <span className="text-muted text-sm">{label}</span>
    </Card>
  );
}
