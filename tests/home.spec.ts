import { expect, test } from "@playwright/test";

test.describe("Homepage (EN)", () => {
  test("renders hero and all sections", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: /feel simple/i }),
    ).toBeVisible();
    for (const id of [
      "hero",
      "about",
      "journey",
      "work",
      "skills",
      "achievements",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("has SEO meta tags, JSON-LD and canonical", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Gabriel Stedile/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /og\.png/,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /^https:\/\/gabrielstedile\.dev\/?$/,
    );
    await expect(
      page.locator('script[type="application/ld+json"]'),
    ).toBeAttached();
  });

  test("projects filter narrows the grid and modal opens/closes", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator("#work").scrollIntoViewIfNeeded();

    await page.getByRole("tab", { name: "SaaS" }).click();
    await expect(page.getByRole("tab", { name: "SaaS" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await expect(
      page.getByRole("button", { name: /B2B SaaS built from zero/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Long-running enterprise platforms/ }),
    ).toBeHidden();

    await page.getByRole("tab", { name: "All" }).click();
    await page
      .getByRole("button", { name: /Long-running enterprise platforms/ })
      .click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("What I did")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("command palette opens with Ctrl+K and navigates", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");
    const palette = page.getByRole("dialog", { name: "Command palette" });
    await expect(palette).toBeVisible();

    await page.keyboard.type("contact");
    await page.keyboard.press("Enter");
    await expect(palette).toBeHidden();
    await expect(page.locator("#contact")).toBeInViewport({ timeout: 5000 });
  });

  test("custom 404 page renders for unknown routes", async ({ page }) => {
    await page.goto("/this-route-does-not-exist");
    await expect(
      page.getByRole("heading", { name: /doesn't render/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Back to gabrielstedile\.dev/i }),
    ).toBeVisible();
  });
});
