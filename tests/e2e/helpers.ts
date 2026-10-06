import { expect, type Page } from "@playwright/test";

export async function registerFresh(page: Page): Promise<string> {
  const user = `e2e_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  await page.goto("/register");
  await page.getByLabel("Usuário").fill(user);
  await page.getByLabel(/^Senha/).fill("senha123");
  await page.getByLabel("Repetir senha").fill("senha123");
  await page.getByRole("button", { name: "Criar conta" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText(`@${user}`)).toBeVisible();
  return user;
}
