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

test("compendium gear tab lists adventuring gear in PT", async ({ page }) => {
  await page.goto("/compendium");
  await page.getByRole("tab", { name: "Equipamento" }).click();
  await expect(page.getByRole("heading", { name: "Focos e grimórios" })).toBeVisible();
  await expect(page.getByText("Saco de componentes", { exact: true })).toBeVisible();
  await page.getByPlaceholder("Buscar equipamento...").fill("mochila");
  await expect(page.getByText("Mochila do explorador", { exact: true })).toBeVisible();
  await expect(page.getByText("Saco de componentes", { exact: true })).toHaveCount(0);
});

test("compendium tabs browse weapons and armor in PT", async ({ page }) => {
  await page.goto("/compendium");
  await expect(page.getByRole("tab", { name: "Magias" })).toHaveAttribute(
    "aria-selected",
    "true",
  );

  await page.getByRole("tab", { name: "Armas", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Armas marciais" })).toBeVisible();
  await expect(page.getByText("Espada Longa", { exact: true })).toBeVisible();
  await page.getByPlaceholder("Buscar arma...").fill("arco");
  await expect(page.getByText("Arco Longo", { exact: true })).toBeVisible();
  await expect(page.getByText("Espada Longa", { exact: true })).toHaveCount(0);

  await page.getByRole("tab", { name: "Armaduras", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Armaduras pesadas" })).toBeVisible();
  await expect(page.getByText("Couro Batido", { exact: true })).toBeVisible();
});
