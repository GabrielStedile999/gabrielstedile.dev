"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Briefcase,
  Check,
  Copy,
  Download,
  FileText,
  Home,
  Layers,
  Mail,
  MapIcon,
  MessageCircle,
  PenLine,
  Search,
  Trophy,
  User,
  type LucideIcon,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Event other components can dispatch to open the palette. */
export const OPEN_PALETTE_EVENT = "palette:open";

type Command = {
  id: string;
  label: string;
  hint?: string;
  keywords: string;
  group: "Navigate" | "Actions";
  icon: LucideIcon | typeof FaGithub;
  run: () => void | Promise<void>;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();
  const router = useRouter();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    setCopied(false);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const goTo = (hash: string) => () => {
      close();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", hash);
      } else {
        // Section lives on the homepage — navigate there from subpages.
        router.push(`/${hash}`);
      }
    };
    const goToPage = (path: string) => () => {
      close();
      router.push(path);
    };
    return [
      {
        id: "nav-home",
        label: "Home",
        keywords: "home hero top start",
        group: "Navigate",
        icon: Home,
        run: goTo("#hero"),
      },
      {
        id: "nav-profile",
        label: "Profile",
        keywords: "profile about bio who",
        group: "Navigate",
        icon: User,
        run: goTo("#about"),
      },
      {
        id: "nav-journey",
        label: "Journey",
        keywords: "journey experience career timeline history",
        group: "Navigate",
        icon: MapIcon,
        run: goTo("#journey"),
      },
      {
        id: "nav-work",
        label: "Selected work",
        keywords: "work projects portfolio case studies clients",
        group: "Navigate",
        icon: Briefcase,
        run: goTo("#work"),
      },
      {
        id: "nav-stack",
        label: "Stack",
        keywords: "stack skills technologies tools react typescript",
        group: "Navigate",
        icon: Layers,
        run: goTo("#skills"),
      },
      {
        id: "nav-proof",
        label: "Proof",
        keywords: "proof achievements metrics numbers",
        group: "Navigate",
        icon: Trophy,
        run: goTo("#achievements"),
      },
      {
        id: "nav-contact",
        label: "Contact",
        keywords: "contact talk hire reach email",
        group: "Navigate",
        icon: MessageCircle,
        run: goTo("#contact"),
      },
      {
        id: "nav-resume",
        label: "Resume page",
        hint: "/resume",
        keywords: "resume cv curriculum web page online print",
        group: "Navigate",
        icon: FileText,
        run: goToPage("/resume"),
      },
      {
        id: "nav-notes",
        label: "Notes",
        hint: "/notes",
        keywords: "notes articles blog writing posts",
        group: "Navigate",
        icon: PenLine,
        run: goToPage("/notes"),
      },
      {
        id: "act-resume",
        label: "Download resume",
        hint: "PDF",
        keywords: "resume cv download pdf curriculum",
        group: "Actions",
        icon: Download,
        run: () => {
          close();
          const a = document.createElement("a");
          a.href = site.resumeUrl;
          a.download = "";
          a.click();
        },
      },
      {
        id: "act-copy-email",
        label: copied ? "Email copied!" : "Copy email address",
        hint: site.email,
        keywords: "copy email address clipboard",
        group: "Actions",
        icon: copied ? Check : Copy,
        run: async () => {
          try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            setTimeout(close, 900);
          } catch {
            close();
            window.location.href = `mailto:${site.email}`;
          }
        },
      },
      {
        id: "act-email",
        label: "Send an email",
        hint: "mailto",
        keywords: "email send mail message contact",
        group: "Actions",
        icon: Mail,
        run: () => {
          close();
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "act-github",
        label: "Open GitHub",
        hint: "new tab",
        keywords: "github code repositories source",
        group: "Actions",
        icon: FaGithub,
        run: () => {
          close();
          window.open(site.github, "_blank", "noopener");
        },
      },
      {
        id: "act-linkedin",
        label: "Open LinkedIn",
        hint: "new tab",
        keywords: "linkedin profile network connect",
        group: "Actions",
        icon: FaLinkedinIn,
        run: () => {
          close();
          window.open(site.linkedin, "_blank", "noopener");
        },
      },
    ];
  }, [close, copied, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (command) =>
        command.label.toLowerCase().includes(q) || command.keywords.includes(q),
    );
  }, [commands, query]);

  const groups = useMemo(() => {
    const order: Command["group"][] = ["Navigate", "Actions"];
    return order
      .map((group) => ({
        group,
        items: filtered.filter((command) => command.group === group),
      }))
      .filter(({ items }) => items.length > 0);
  }, [filtered]);

  // Global shortcut: ⌘K / Ctrl+K, plus the custom open event
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  // Focus input + scroll lock while open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = overflow;
      cancelAnimationFrame(id);
    };
  }, [open]);

  // Keep the active option scrolled into view
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      filtered[activeIndex]?.run();
    }
  };

  if (typeof document === "undefined") return null;

  let flatIndex = -1;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[16dvh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.15 }}
        >
          <div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-[rgba(4,5,12,0.7)] backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -12, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }
            }
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-edge bg-surface shadow-card relative w-full max-w-lg overflow-hidden rounded-2xl border"
          >
            <div className="border-edge flex items-center gap-3 border-b px-4">
              <Search className="text-faint size-4 shrink-0" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onInputKeyDown}
                placeholder="Type a command or search…"
                aria-label="Search commands"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={filtered[activeIndex]?.id}
                className="text-foreground placeholder:text-faint h-13 w-full bg-transparent text-sm outline-none"
              />
              <kbd className="border-edge bg-surface-raised text-faint rounded-md border px-1.5 py-0.5 font-mono text-[10px]">
                ESC
              </kbd>
            </div>

            <ul
              ref={listRef}
              id="palette-list"
              role="listbox"
              aria-label="Commands"
              className="max-h-[50dvh] overflow-y-auto p-2"
            >
              {groups.map(({ group, items }) => (
                <li key={group}>
                  <p className="text-faint px-3 pt-2.5 pb-1.5 font-mono text-[10px] tracking-[0.25em] uppercase">
                    {group}
                  </p>
                  <ul>
                    {items.map((command) => {
                      flatIndex += 1;
                      const index = flatIndex;
                      const isActive = index === activeIndex;
                      const Icon = command.icon;
                      return (
                        <li key={command.id}>
                          <button
                            type="button"
                            id={command.id}
                            role="option"
                            aria-selected={isActive}
                            data-active={isActive}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => command.run()}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                              isActive
                                ? "bg-surface-raised text-foreground"
                                : "text-muted",
                            )}
                          >
                            <Icon
                              className={cn(
                                "size-4 shrink-0",
                                isActive ? "text-accent-to" : "text-faint",
                              )}
                              aria-hidden
                            />
                            <span className="flex-1">{command.label}</span>
                            {command.hint && (
                              <span className="text-faint max-w-[45%] truncate font-mono text-[11px]">
                                {command.hint}
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="text-faint px-3 py-8 text-center text-sm">
                  No results for &ldquo;{query}&rdquo;
                </li>
              )}
            </ul>

            <div className="border-edge text-faint flex items-center gap-3 border-t px-4 py-2.5 font-mono text-[10px]">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span className="ml-auto">
                {site.initials} · {site.domain}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
