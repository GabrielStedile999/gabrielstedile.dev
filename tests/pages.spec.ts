import { expect, test } from "@playwright/test";

test.describe("Subpages and static assets", () => {
  test("/resume renders all sections and actions", async ({ page }) => {
    await page.goto("/resume");
    await expect(page).toHaveTitle(/Resume \| Gabriel Stedile/);
    for (const section of [
      "Professional Summary",
      "Technical Skills",
      "Experience",
      "Education",
      "Languages",
    ]) {
      await expect(page.getByRole("heading", { name: section })).toBeVisible();
    }
    await expect(
      page.getByRole("link", { name: /Download PDF/ }),
    ).toHaveAttribute("href", /Gabriel_Stedile_Resume_EN\.pdf/);
  });

  test("/notes lists entries and opens a note", async ({ page }) => {
    await page.goto("/notes");
    await expect(
      page.getByRole("heading", { name: /Notes from the workbench/ }),
    ).toBeVisible();
    await page.getByRole("link", { name: /AI-assisted delivery/ }).click();
    await expect(page).toHaveURL(/\/notes\/example-ai-pair-workflow/);
    await expect(page.getByRole("article")).toBeVisible();
  });

  test("SEO and PWA assets are served", async ({ request }) => {
    for (const path of [
      "/sitemap.xml",
      "/robots.txt",
      "/manifest.webmanifest",
      "/og.png",
      "/icon-192.png",
      "/icon-512.png",
      "/favicon.ico",
    ]) {
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
    }
  });

  test("sitemap includes localized routes", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();
    for (const url of [
      "https://gabrielstedile.dev",
      "https://gabrielstedile.dev/pt",
      "https://gabrielstedile.dev/resume",
      "https://gabrielstedile.dev/pt/resume",
      "https://gabrielstedile.dev/notes",
    ]) {
      expect(sitemap).toContain(`<loc>${url}</loc>`);
    }
  });
});
