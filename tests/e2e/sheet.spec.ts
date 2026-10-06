import { expect, test } from "@playwright/test";
import { registerFresh } from "./helpers";

test("create character, edit sheet, delete", async ({ page }) => {
  await registerFresh(page);

  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);
  const id = new URL(page.url()).pathname.split("/")[2];

  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Hero");
  await expect(page.getByText("Salvo")).toBeVisible();

  await page.goto(`/character/${id}`);
  await expect(page.getByRole("heading", { name: "E2E Hero" })).toBeVisible();

  const imperial = page.getByRole("button", { name: "Imperial (ft, lb)" });
  await expect(imperial).toHaveAttribute("aria-pressed", "false");
  await imperial.click();
  await expect(imperial).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("30 ft").first()).toBeVisible();

  await page.getByRole("button", { name: "Editar lore" }).click();
  await page.locator("textarea").fill("História de teste E2E.");
  await page.getByRole("button", { name: "Salvar", exact: true }).click();
  await expect(page.getByText("História de teste E2E.")).toBeVisible();

  const photoInput = page.locator('input[type="file"][accept*="image"]');
  await photoInput.setInputFiles("tests/e2e/fixtures/avatar.png");
  await expect(page.locator('img[src^="data:image/jpeg"]')).toBeVisible();

  await page.reload();
  await expect(page.locator('img[src^="data:image/jpeg"]')).toBeVisible();
  await expect(page.getByText("História de teste E2E.")).toBeVisible();

  await page.getByRole("button", { name: "en", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("button", { name: "Long Rest" })).toBeVisible();

  await page.goto("/");
  const card = page.locator("li.group").filter({ hasText: "E2E Hero" });
  await card.getByRole("button", { name: "Delete" }).click();
  await card.getByRole("button", { name: "Confirm delete" }).click();
  await expect(page.getByText("E2E Hero")).toHaveCount(0);
});
