import { expect, test } from "@playwright/test";

test("public compendium groups spells by school in PT", async ({ page }) => {
  await page.goto("/compendium");
  await expect(page.getByRole("heading", { name: "Evocação" })).toBeVisible();
  await expect(page.getByText("Bola de Fogo", { exact: true })).toBeVisible();
});

test("compendium renders in EN when the locale cookie says so", async ({
  page,
  context,
}) => {
  await context.addCookies([
    { name: "fs_lang", value: "en", url: "http://localhost:3000" },
  ]);
  await page.goto("/compendium");
  await expect(page.getByRole("heading", { name: "Evocation" })).toBeVisible();
  await expect(page.getByText("Fireball", { exact: true })).toBeVisible();
});
