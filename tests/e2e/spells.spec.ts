import { expect, test, type Page } from "@playwright/test";
import { registerFresh } from "./helpers";

async function pickClass(page: Page, label: string) {
  const addBtn = page.getByRole("button", { name: "Adicionar classe" });
  if (await addBtn.isVisible().catch(() => false)) await addBtn.click();
  const search = page.getByPlaceholder("Buscar classe...").first();
  await search.fill(label);
  const select = search.locator("xpath=following-sibling::select[1]");
  await select.selectOption({ label });
}

test("spells: search filter narrows catalog and descriptions expand", async ({
  page,
}) => {
  await registerFresh(page);
  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);

  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Spells");
  await pickClass(page, "Mago");

  // Jump to spells step (index 7)
  await page.getByRole("tab", { name: "Magias" }).click();
  await expect(page).toHaveURL(/step=7/);

  // The spell catalog renders one <details> per spell
  const before = await page.locator("details").count();
  expect(before).toBeGreaterThan(0);

  // Search filter narrows the list
  const searchInput = page.getByPlaceholder(/Nome, escola ou descrição/i);
  await searchInput.fill("bola");
  await page.waitForTimeout(200);
  const after = await page.locator("details").count();
  expect(after).toBeLessThan(before);

  // Clear search, full list returns
  await searchInput.fill("");
  await page.waitForTimeout(200);
  const restored = await page.locator("details").count();
  expect(restored).toBe(before);

  // Level filter narrows to a single level
  const levelSelect = page.getByRole("combobox", { name: "Nível" });
  await levelSelect.selectOption("3");
  await page.waitForTimeout(200);
  const levelCount = await page.locator("details").count();
  expect(levelCount).toBeGreaterThan(0);
  expect(levelCount).toBeLessThan(restored);
  // Reset level filter
  await levelSelect.selectOption("all");
  await page.waitForTimeout(200);
  expect(await page.locator("details").count()).toBe(restored);

  // Clicking a spell summary expands its description (mouse click)
  const firstDetails = page.locator("details").first();
  const summary = firstDetails.locator("summary").first();
  await summary.click();
  await expect(firstDetails).toHaveJSProperty("open", true);
  // The description block inside becomes visible
  await expect(firstDetails.locator("div").first()).toBeVisible();

  // Clicking again collapses it
  await summary.click();
  await expect(firstDetails).toHaveJSProperty("open", false);
});

test("spells: known toggle marks spell without expanding", async ({ page }) => {
  await registerFresh(page);
  await page.getByRole("button", { name: "Novo personagem" }).click();
  await page.waitForURL(/\/character\/.+\/edit/);

  await page.getByPlaceholder("Ex: Thora Valdris").fill("E2E Toggle");
  await pickClass(page, "Mago");
  await page.getByRole("tab", { name: "Magias" }).click();
  await expect(page).toHaveURL(/step=7/);

  const firstDetails = page.locator("details").first();
  // The known toggle sits beside the summary (outside <details>)
  const toggle = firstDetails
    .locator("xpath=ancestor::div[contains(@class,'rounded-md')][1]")
    .getByRole("switch")
    .first();

  const wasKnown = await toggle.getAttribute("aria-checked");
  await toggle.click();
  await expect(toggle).toHaveAttribute(
    "aria-checked",
    wasKnown === "true" ? "false" : "true",
  );
  // Toggling known must NOT open the details
  await expect(firstDetails).toHaveJSProperty("open", false);
});
