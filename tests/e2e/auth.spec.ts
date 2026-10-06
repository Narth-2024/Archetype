import { expect, test } from "@playwright/test";
import { registerFresh } from "./helpers";

test("register, logout and login again", async ({ page }) => {
  const user = await registerFresh(page);

  await page.getByRole("button", { name: "Sair" }).click();
  await page.waitForURL(/\/login/);

  await page.getByLabel("Usuário").fill(user);
  await page.getByLabel("Senha").fill("senha123");
  await page.getByRole("button", { name: "Entrar" }).click();

  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByText(`@${user}`)).toBeVisible();
});

test("wrong password shows the server error", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Usuário").fill("nobody_home_404");
  await page.getByLabel("Senha").fill("errada123");
  await page.getByRole("button", { name: "Entrar" }).click();
  await expect(page.getByText("Usuário ou senha incorretos.")).toBeVisible();
});

test("language switch re-renders the login page in English", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "en", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("button", { name: "Sign in" })).toBeVisible();
});
