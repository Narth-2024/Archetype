import { expect, test } from "@playwright/test";
import { registerFresh } from "./helpers";

// Chip elements in the tracker (excludes <option> texts inside the select)
function chip(page: import("@playwright/test").Page, text: string) {
  return page
    .locator('span[class*="border-amber-700"]')
    .filter({ hasText: text });
}

test("combat tracker: conditions tick down with rounds and persist", async ({
  page,
}) => {
  await registerFresh(page);
  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);
  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Tracker");
  await expect(page.getByText("Salvo")).toBeVisible();
  const id = new URL(page.url()).pathname.split("/")[2];
  await page.goto(`/character/${id}`);

  // Add "Envenenado" lasting 2 rounds
  await page
    .getByRole("combobox", { name: "Adicionar condição" })
    .selectOption("envenenado");
  await page
    .getByRole("spinbutton", { name: "Rodadas (0 = até remover)" })
    .fill("2");
  await page.getByRole("button", { name: "Adicionar condição" }).click();
  await expect(chip(page, "Envenenado")).toBeVisible();
  await expect(chip(page, "2 rod.")).toBeVisible();

  // Each "+1 rodada" ticks the duration down
  await page.getByRole("button", { name: "+1 rodada" }).click();
  await expect(chip(page, "1 rod.")).toBeVisible();
  await page.getByRole("button", { name: "+1 rodada" }).click();
  await expect(chip(page, "Envenenado")).toHaveCount(0);

  // A condition without duration survives rounds and reloads
  await page
    .getByRole("combobox", { name: "Adicionar condição" })
    .selectOption("cego");
  await page.getByRole("button", { name: "Adicionar condição" }).click();
  await expect(chip(page, "Cego")).toBeVisible();
  await page.getByRole("button", { name: "+1 rodada" }).click();
  await expect(chip(page, "Cego")).toBeVisible();
  await page.reload();
  await expect(chip(page, "Cego")).toBeVisible();
  await expect(chip(page, "Envenenado")).toHaveCount(0);
});

test("combat roller: attack roll shows inline result", async ({ page }) => {
  await registerFresh(page);
  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);
  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Roller");

  // Pick Mago so the sheet shows a spell-attack roller
  const addBtn = page.getByRole("button", { name: "Adicionar classe" });
  if (await addBtn.isVisible().catch(() => false)) await addBtn.click();
  const search = page.getByPlaceholder("Buscar classe...").first();
  await search.fill("Mago");
  await search.locator("xpath=following-sibling::select[1]").selectOption({
    label: "Mago",
  });
  await expect(page.getByText("Salvo")).toBeVisible();
  const id = new URL(page.url()).pathname.split("/")[2];
  await page.goto(`/character/${id}`);

  const roll = page.getByRole("button", { name: "Rolar ataque" });
  await expect(roll).toBeVisible();
  await roll.click();
  await expect(page.getByText(/d20 \d+ [+-]\d+ →/)).toBeVisible();
});
