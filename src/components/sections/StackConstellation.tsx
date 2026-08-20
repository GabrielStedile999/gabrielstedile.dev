"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { Dict } from "@/i18n";

/**
 * The stack as a constellation. Technologies are nodes grouped
 * in three clusters (UI / API / AI) with subtle orbital drift; hovering a node
 * highlights its connections. Canvas-drawn, static data only.
 */

type Node = {
  label: string;
  cluster: 0 | 1 | 2; // UI · API · AI
  /** Base offset from the cluster center, in px at 1x scale. */
  dx: number;
  dy: number;
  /** Drift phase/speed so nodes don't move in sync. */
  phase: number;
  speed: number;
};

const NODES: Node[] = [
  // UI
  { label: "React", cluster: 0, dx: 0, dy: -26, phase: 0.3, speed: 0.55 },
  { label: "Next.js", cluster: 0, dx: -92, dy: 8, phase: 1.7, speed: 0.4 },
  { label: "TypeScript", cluster: 0, dx: 88, dy: -2, phase: 3.1, speed: 0.5 },
  { label: "Tailwind", cluster: 0, dx: -38, dy: 40, phase: 4.4, speed: 0.45 },
  { label: "SASS", cluster: 0, dx: 52, dy: 42, phase: 5.6, speed: 0.6 },
  // API
  { label: "Node.js", cluster: 1, dx: 0, dy: -28, phase: 0.9, speed: 0.5 },
  { label: "REST", cluster: 1, dx: -84, dy: 12, phase: 2.2, speed: 0.55 },
  { label: "GraphQL", cluster: 1, dx: 80, dy: 4, phase: 3.8, speed: 0.42 },
  { label: "PostgreSQL", cluster: 1, dx: -22, dy: 44, phase: 5.1, speed: 0.48 },
  { label: "Docker", cluster: 1, dx: 62, dy: 44, phase: 0.2, speed: 0.58 },
  // AI
  { label: "Claude API", cluster: 2, dx: 0, dy: -26, phase: 1.4, speed: 0.5 },
  { label: "RAG", cluster: 2, dx: -78, dy: 10, phase: 2.8, speed: 0.6 },
  { label: "MCP", cluster: 2, dx: 74, dy: 6, phase: 4.0, speed: 0.44 },
  { label: "AI Agents", cluster: 2, dx: 6, dy: 44, phase: 5.9, speed: 0.52 },
];

/** Edges as [from, to] indexes into NODES. */
const EDGES: [number, number][] = [
  // UI cluster
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 2],
  // API cluster
  [5, 6],
  [5, 7],
  [5, 8],
  [5, 9],
  [7, 8],
  // AI cluster
  [10, 11],
  [10, 12],
  [10, 13],
  [11, 13],
  // cross-layer bridges
  [2, 5],
  [1, 5],
  [8, 11],
  [10, 2],
];

const CLUSTER_LABELS = ["UI", "API", "AI"];
const CLUSTER_X = [0.18, 0.5, 0.82];
const CLUSTER_COLORS = ["#8b7cf6", "#4fd1e0", "#4ade80"];

export function StackConstellation({ dict }: { dict: Dict }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const hoverRef = useRef<number>(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const positions: { x: number; y: number }[] = NODES.map(() => ({
      x: 0,
      y: 0,
    }));

    // Compact layout on small screens
    const scaleFor = () => Math.min(1, Math.max(0.62, width / 1100));

    const compute = (t: number) => {
      const scale = scaleFor();
      const cy = height / 2 + 6;
      NODES.forEach((node, i) => {
        const cx = CLUSTER_X[node.cluster] * width;
        const drift = reduceMotion ? 0 : 1;
        positions[i].x =
          cx +
          node.dx * scale +
          Math.sin(t * 0.00045 * node.speed + node.phase) * 7 * drift;
        positions[i].y =
          cy +
          node.dy * scale +
          Math.cos(t * 0.0006 * node.speed + node.phase) * 5 * drift;
      });
    };

    const draw = (t: number) => {
      compute(t);
      ctx.clearRect(0, 0, width, height);
      const hover = hoverRef.current;

      // Cluster labels
      ctx.font = "600 10px 'JetBrains Mono Variable', ui-monospace, monospace";
      ctx.textAlign = "center";
      CLUSTER_LABELS.forEach((label, c) => {
        ctx.fillStyle = "rgba(130, 137, 164, 0.55)";
        ctx.fillText(label, CLUSTER_X[c] * width, 16);
      });

      // Edges
      EDGES.forEach(([a, b]) => {
        const active = hover === a || hover === b;
        ctx.strokeStyle = active
          ? "rgba(79, 209, 224, 0.55)"
          : "rgba(148, 163, 255, 0.13)";
        ctx.lineWidth = active ? 1.2 : 1;
        ctx.beginPath();
        ctx.moveTo(positions[a].x, positions[a].y);
        ctx.lineTo(positions[b].x, positions[b].y);
        ctx.stroke();
      });

      // Nodes
      ctx.font = "12px 'Inter Variable', system-ui, sans-serif";
      NODES.forEach((node, i) => {
        const { x, y } = positions[i];
        const neighbor =
          hover >= 0 &&
          EDGES.some(
            ([a, b]) => (a === hover && b === i) || (b === hover && a === i),
          );
        const active = hover === i || neighbor;

        ctx.fillStyle = CLUSTER_COLORS[node.cluster];
        ctx.globalAlpha = hover === -1 || active ? 1 : 0.35;
        ctx.beginPath();
        ctx.arc(x, y, hover === i ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle =
          active && hover !== -1
            ? "rgba(230, 232, 242, 1)"
            : "rgba(154, 161, 185, 0.9)";
        ctx.fillText(node.label, x, y + 17);
        ctx.globalAlpha = 1;
      });
    };

    const loop = (t: number) => {
      draw(t);
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    // Reduced motion: draw once (and on resize/hover)
    const redraw = () => reduceMotion && draw(0);

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      let found = -1;
      positions.forEach((p, i) => {
        if (Math.hypot(p.x - mx, p.y - my) < 26) found = i;
      });
      hoverRef.current = found;
      canvas.style.cursor = found >= 0 ? "pointer" : "default";
      redraw();
    };
    const onLeave = () => {
      hoverRef.current = -1;
      redraw();
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  return (
    <section
      aria-label={dict.marqueeAria}
      className="border-edge bg-surface/50 border-y"
    >
      <p className="text-faint flex items-center justify-center gap-2 pt-5 text-center font-mono text-[11px] tracking-[0.25em] uppercase">
        <span aria-hidden className="bg-accent-to/50 h-px w-5" />
        {dict.stackStrip.title}
        <span aria-hidden className="bg-accent-to/50 h-px w-5" />
      </p>
      <div
        ref={containerRef}
        className="relative mx-auto h-40 w-full max-w-7xl"
      >
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0" />
        {/* Accessible fallback list for screen readers */}
        <ul className="sr-only">
          {NODES.map((node) => (
            <li key={node.label}>{node.label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
