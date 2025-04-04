import { test, expect } from '@playwright/test';

test('searchButton', async ({ page }) => {
  // Locators
  const product = page.locator("text=Products");
  const productList = page.locator('.features_items');
  const searchProduct = page.locator("#search_product");
  const submitSearch = page.locator("#submit_search");
  

  // Navigate to website
  await page.goto("https://www.automationexercise.com/");

  // Handling cookies consent (if exists)
  const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" });
  if (await consentButton.count() > 0) {
    await consentButton.first().click();
  }

  // Click on Product link
  await product.click();
  await expect(page).toHaveURL('https://www.automationexercise.com/products');
  

  // Search for a product
  await searchProduct.fill("winter Top");
  await submitSearch.click();
  await expect(page).toHaveURL("https://www.automationexercise.com/products?search=winter%20Top")
  await expect(productList).toHaveCount(1);
  
})