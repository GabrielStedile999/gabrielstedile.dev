"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in seconds — use for simple stagger between siblings. */
  delay?: number;
  /** Render as a different element (defaults to div). */
  as?: "div" | "li" | "span";
  className?: string;
};

/**
 * Fade-and-rise on first scroll into view. Respects prefers-reduced-motion
 * (falls back to a plain fade with no movement).
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
