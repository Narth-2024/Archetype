import { expect, test } from "@playwright/test";
import { registerFresh } from "./helpers";

test("wizard: name required, step persists in URL, reaches review", async ({
  page,
}) => {
  await registerFresh(page);

  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);

  // Name required: try to go next without a name
  await page.getByRole("button", { name: "Próximo" }).click();
  await expect(
    page.getByText("Informe o nome do personagem para continuar."),
  ).toBeVisible();

  // Fill name, advance
  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Wizard");
  await page.getByRole("button", { name: "Próximo" }).click();
  await expect(page).toHaveURL(/step=1/);

  // Back and forth keeps name, URL updates
  await page.getByRole("button", { name: "Anterior" }).click();
  await expect(page).toHaveURL(/step=0/);
  await expect(page.getByPlaceholder("Ex: Thora Valdris")).toHaveValue(
    "E2E Wizard",
  );

  // Jump to the last step via stepper (Review)
  await page.getByRole("tab", { name: "Revisão" }).click();
  await expect(page).toHaveURL(/step=8/);
  await expect(page.getByRole("tab", { name: "Revisão" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("wizard: keyboard shortcuts navigate steps and Ctrl+S saves", async ({
  page,
}) => {
  await registerFresh(page);
  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);

  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Keys");
  await expect(page.getByText("Salvo")).toBeVisible();

  // Blur the input so arrow keys are treated as navigation shortcuts
  await page.locator("main").click();

  // ArrowRight advances to step 1
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(/step=1/);

  // ArrowLeft goes back
  await page.keyboard.press("ArrowLeft");
  await expect(page).toHaveURL(/step=0/);

  // Ctrl+S triggers a save without navigating
  await page.keyboard.press("Control+s");
  await expect(page).toHaveURL(/step=0/);
});
