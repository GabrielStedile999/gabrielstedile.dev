"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

type CounterProps = {
  /** Final value to count up to. */
  to: number;
  /** Appended after the number, e.g. "+". */
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
};

/** Number that counts up from 0 when it enters the viewport (once). */
export function Counter({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        el.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
