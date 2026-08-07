import { defineConfig } from "@playwright/test";

/**
 * E2E suite for the static export. Run `npm run build` first — the webServer
 * serves the `out/` directory exactly as Vercel does in production.
 *
 * CHROMIUM_PATH lets sandboxed environments point at a preinstalled browser
 * instead of downloading one (`npx playwright install chromium` otherwise).
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    baseURL: "http://localhost:3123",
    trace: "on-first-retry",
    ...(process.env.CHROMIUM_PATH
      ? { launchOptions: { executablePath: process.env.CHROMIUM_PATH } }
      : {}),
  },
  webServer: {
    command: "npx serve out -l 3123",
    url: "http://localhost:3123",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
