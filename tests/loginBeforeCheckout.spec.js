const { test,expect } = require('@playwright/test');
const { assert } = require('console');

test('loginBeforeCheckout',async ({page}) =>{


// Locators:

const homeButton = page.getByRole('link',{ name:"Home" });

const signupLoginLink = page.locator("text='Signup / Login'");

const loginEmail = page.locator('input[data-qa="login-email"]');
const loginPassword = page.locator('input[data-qa="login-password"]');
const loginButton = page.locator('button[data-qa="login-button"]');

const loggedInUser = page.locator('//a[text()=" Logged in as "]');
const productsLink = page.getByRole('link',{ name:"Products" });

const firstProduct = page.locator('a[data-product-id ="1"]').first();
const continueShopping = page.locator('.modal-footer')
const secondProduct = page.locator('a[data-product-id ="2"]').first();
const viewCart = page.getByRole('link', {name:'View Cart'})

const product1 = page.locator('#product-1');
const product2 = page.locator('#product-2')

const checkout = page.locator('a[class = "btn btn-default check_out"]');
const deliveryAddress = page.locator('#address_delivery');
const reviewOrder = page.getByLabel('Review Your Order');

const addingComment = page.locator('textarea[name="message"]');
const placeOrder = page.locator('a[class="btn btn-default check_out"]');

// card details 
const nameOnCard = page.locator('input[data-qa="name-on-card"]');
const cardNumber = page.locator('input[data-qa = "card-number"]');
const cardCvv = page.locator('input[data-qa="cvc"]');
const cardExpiry = page.locator('input[data-qa = "expiry-month"]');
const expiryYear = page.locator('input[data-qa = "expiry-year"]');

const submit = page.locator('#submit');
const orderPlaced = page.locator('div[class="col-sm-9 col-sm-offset-1"]');
const continueAfterOrder = page.locator('a[data-qa="continue-button"]');
const cart = page.getByRole('link',{ name:"Cart" });
const emptyCart = page.locator('#empty_cart');


 // 2. Navigate to website
 await page.goto("https://www.automationexercise.com/");

 // Wait for the cookie consent button to be visible
 const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" }); // handling cookies consent
 await consentButton.waitFor(); // waiting for element 
 await consentButton.click(); // clicking on consent

// 3. Verify that home page is visible successfully

await expect(homeButton).toBeVisible();

// 4. Click 'Signup / Login' button

 await signupLoginLink.click();

// 5. Fill email, password and click 'Login' button
await loginEmail.fill("rupireddyqa@gmail.com");
await loginPassword.fill('Test123');
await loginButton.click();

// 6. Verify 'Logged in as username' at top

await expect(loggedInUser).toHaveText('Logged in as Sunitha');

// 7. Add products to cart
await productsLink.click();
await expect(page).toHaveURL("https://www.automationexercise.com/products");
await firstProduct.click();
await continueShopping.click();
await secondProduct.click();

// 8. Click 'View-Cart' button

await viewCart.click();

// 9. Verify that cart page is displayed

await expect(page).toHaveURL("https://www.automationexercise.com/view_cart");
await expect(product1).toBeTruthy();
await expect(product2).toContainText("Men > Tshirts");

// 10. Click Proceed To Checkout

await checkout.click();

// 11. Verify Address Details and Review Your Order
await expect(deliveryAddress).toBeVisible();
await expect(reviewOrder).toBeTruthy();

// 12. Enter description in comment text area and click 'Place Order'
await addingComment.fill(" Testing by adding comment");
await placeOrder.click();

// 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
await expect(page).toHaveURL('https://www.automationexercise.com/payment');
await nameOnCard.fill('Sunitha Rupireddy');
await cardNumber.fill('1234 5678 9012 3456');
await cardCvv.fill('123');
await cardExpiry.fill('10');
await expiryYear.fill('2030');


// 14. Click 'Pay and Confirm Order' button
await submit.click();

// 15. Verify success message 'Your order has been placed successfully!'
await expect(page).toHaveURL('https://www.automationexercise.com/payment_done/900');
await expect(orderPlaced).toBeTruthy();
await expect(orderPlaced).toContainText('Congratulations! Your order has been confirmed!');
await continueAfterOrder.click();

// 16. Click 'Cart' button
await cart.click();

// 17. Verify that cart is Empty after placing order. 
await expect(emptyCart).toBeVisible();
await expect(emptyCart).toBeTruthy();

})

