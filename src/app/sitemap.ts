import type { MetadataRoute } from "next";
import { notes } from "@/content/notes";

const SITE_URL = "https://gabrielstedile.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const noteEntries: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${SITE_URL}/notes/${note.slug}`,
    lastModified: note.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/notes`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...noteEntries,
  ];
}
