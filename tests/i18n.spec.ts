import { expect, test } from "@playwright/test";

test.describe("Portuguese pages", () => {
  test("/pt renders translated content", async ({ page }) => {
    await page.goto("/pt");
    await expect(
      page.getByRole("heading", { level: 1, name: /parecer simples/i }),
    ).toBeVisible();
    await expect(page).toHaveTitle(/Engenheiro Full Stack Sênior/);
    await expect(
      page.getByRole("navigation", { name: "Navegação principal" }),
    ).toBeVisible();
  });

  test("language toggle links EN ↔ PT", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: /Ver em português/ })
      .first()
      .click();
    await expect(page).toHaveURL(/\/pt$/);

    // Regression: switching language must not scroll the page away from the top
    // (Next router scroll reset + CSS smooth scrolling used to land at the footer).
    await page.waitForTimeout(800);
    expect(await page.evaluate(() => window.scrollY)).toBeLessThan(150);

    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: /View in English/ })
      .first()
      .click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("palette is localized on /pt and navigates within /pt", async ({
    page,
  }) => {
    await page.goto("/pt");
    await page.keyboard.press("Control+k");
    const palette = page.getByRole("dialog", { name: "Paleta de comandos" });
    await expect(palette).toBeVisible();
    await expect(palette.getByText("Navegar", { exact: true })).toBeVisible();

    await page.keyboard.type("contato");
    await page.keyboard.press("Enter");
    await expect(page.locator("#contact")).toBeInViewport({ timeout: 5000 });
  });

  test("/pt/resume renders the translated resume", async ({ page }) => {
    await page.goto("/pt/resume");
    await expect(
      page.getByRole("heading", { name: "Resumo Profissional" }),
    ).toBeVisible();
    await expect(page.getByText("Engenheiro Web Full Stack")).toBeVisible();
  });

  test("hreflang alternates are present on the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('link[rel="alternate"][hreflang="pt-BR"]'),
    ).toHaveAttribute("href", /\/pt$/);
    await expect(
      page.locator('link[rel="alternate"][hreflang="en"]'),
    ).toBeAttached();
  });
});
