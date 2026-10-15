import { expect, test } from "@playwright/test";
import { registerFresh } from "./helpers";

test("importing an exported JSON sheet restores the character", async ({ page }) => {
  await registerFresh(page);

  const input = page.locator('input[type="file"][accept*="json"]');
  await input.setInputFiles("tests/e2e/fixtures/character.json");

  await expect(page).toHaveURL(/\/character\/[0-9a-f-]+$/);
  await expect(page.getByRole("heading", { name: "Aurora Testada" })).toBeVisible();
  await expect(page.getByText("Personagem de teste importado de um arquivo JSON.")).toBeVisible();
});

test("importing a file that is not a character shows an error", async ({ page }) => {
  await registerFresh(page);

  const input = page.locator('input[type="file"][accept*="json"]');
  await input.setInputFiles("tests/e2e/fixtures/invalid.json");

  await expect(page.getByText("não parece ser uma ficha exportada")).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});
