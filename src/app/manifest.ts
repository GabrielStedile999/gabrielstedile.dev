import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Stedile — Senior Frontend Engineer",
    short_name: "G. Stedile",
    description:
      "Portfolio of Gabriel Stedile — React, TypeScript, Node.js and AI integration.",
    start_url: "/",
    display: "standalone",
    background_color: "#080914",
    theme_color: "#080914",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
