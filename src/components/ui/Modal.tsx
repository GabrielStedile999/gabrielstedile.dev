"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the dialog. */
  label: string;
  /** Accessible label for the close button. */
  closeLabel?: string;
  children: React.ReactNode;
  className?: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Accessible animated modal: portal to <body>, focus trap, Escape + backdrop
 * close, scroll lock, and focus restoration to the trigger element.
 */
export function Modal({
  open,
  onClose,
  label,
  closeLabel = "Close dialog",
  children,
  className,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  // Scroll lock + focus management
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    // Focus the panel after the enter animation kicks in
    const id = requestAnimationFrame(() => panelRef.current?.focus());
    return () => {
      document.body.style.overflow = overflow;
      cancelAnimationFrame(id);
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  // Escape + focus trap
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === panelRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          {/* Backdrop */}
          <div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-[rgba(4,5,12,0.7)] backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            tabIndex={-1}
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }
            }
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "border-edge bg-surface shadow-card relative flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border outline-none sm:rounded-3xl",
              className,
            )}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="border-edge bg-surface-raised text-muted hover:border-edge-bright hover:text-foreground absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border transition-colors"
            >
              <X className="size-4" aria-hidden />
            </button>
            <div className="overflow-y-auto p-6 sm:p-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
