"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-edge text-foreground hover:border-edge-bright bg-surface-raised inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300"
    >
      <Printer className="size-4" aria-hidden />
      Print
    </button>
  );
}
