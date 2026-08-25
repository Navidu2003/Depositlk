import { test, expect } from "@playwright/test";

test.describe("DepositLK Core User Journeys", () => {
  test("Homepage loads with branding and quick links", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/DepositLK/i);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("Bank directory renders listed institutions", async ({ page }) => {
    await page.goto("/browse");
    await expect(page.getByRole("heading", { name: "Bank of Ceylon", exact: true })).toBeVisible();
  });

  test("Bank comparison matrix loads with table", async ({ page }) => {
    await page.goto("/compare?banks=boc,commercial-bank");
    await expect(page.locator("table")).toBeVisible();
  });

  test("Calculator displays projected returns", async ({ page }) => {
    await page.goto("/calculator");
    await expect(page.locator("text=Projected Maturity Balance")).toBeVisible();
  });
});