
const { test,expect } = require('@playwright/test');
const { assert } = require('console');

test('login_signup_AE', async ({ page }) => { 

    const homeButton = page.getByRole('link',{ name:"Home" });
    const secondProduct = page.locator('a[data-product-id ="2"]').first();
    const continueShopping = page.locator('.modal-footer')
    const fourthProduct = page.locator('a[data-product-id ="4"]').first();
    const eleventhProduct = page.locator('a[data-product-id ="11"]').first();
    
    const product2 = page.locator('#product-2');
    const product4 = page.locator('#product-4');
    const product11 = page.locator('#product-11');

    const cart = page.getByRole('link',{ name:"Cart" });
    const removeProduct2 = page.locator('a[data-product-id="2"]');
    const removeProduct4 = page.locator('a[data-product-id="4"]');
    const removeProduct11 = page.locator('a[data-product-id="11"]');

    const emptyCart = page.locator('#empty_cart');


// // //  Actual tests // // // 

await page.goto("https://www.automationexercise.com/");

 // Wait for the cookie consent button to be visible
 const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" }); // handling cookies consent
 await consentButton.waitFor(); // waiting for element 
 await consentButton.click(); // clicking on consent

// 3. Verify that home page is visible successfully

await expect(homeButton).toBeVisible();

// 4. Add products to cart
await secondProduct.click();
await continueShopping.click();

// Scrolling window a little to see the dob field. its blocking because of a popup.
await page.evaluate(() => window.scrollBy(0, 200)); // Adjust the scroll height as needed

await fourthProduct.click();
await continueShopping.click();

// Scrolling window a little to see the dob field. its blocking because of a popup.
await page.evaluate(() => window.scrollBy(0, 700)); // Adjust the scroll height as needed
await eleventhProduct.click();
await continueShopping.click();

// 5. Click 'Cart' button
await cart.click();

// 6. Verify that cart page is displayed
await expect(page).toHaveURL("https://www.automationexercise.com/view_cart");
await expect(product2).toBeTruthy();
await expect(product4).toBeVisible();
await expect(product11).toContainText("Sleeves Printed Top - White");

// 7. Click 'X' button corresponding to particular product
await removeProduct2.click();
await removeProduct4.click();
await removeProduct11.click();
// 8. Verify that product is removed from the cart

await expect(emptyCart).toBeVisible();
await expect(emptyCart).toBeTruthy();

})