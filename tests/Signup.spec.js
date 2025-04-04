const {test, expect} = require("@playwright/test")
//const ExcelUtil = require('../ExcelData/ExcelUtil')
const UserData = JSON.parse(JSON.stringify(require('../ExcelData/new.json')));



test("Validate Application Signup", async ({page})=>{


    console.log("first name - "+ UserData.Fname);
    
//     let UserAccess = "Admin"
// //Read data from excel and store in object
// var UserData =await ExcelUtil.getExcelData(UserAccess)
// console.log(UserData);


// Locators in Login form for New user signup
const signupName = page.getByPlaceholder('name'); //
const signupEmailAddress = page.locator('//input[@data-qa="signup-email"]');
const signupButton = page.locator('//button[@data-qa="signup-button"]');


// Locators in signup form - ( https://www.automationexercise.com/signup )
const name = page.locator('#name'); // Name input field
const email = page.locator('#email'); // Email input field
const password = page.locator('//input[@data-qa="password"]'); // Password input field

// Radio button
const radioButtonMr = page.locator('#id_gender1'); // Radio button for Mr
const radioButtonMrs = page.locator('#id_gender2'); // Radio button for Mrs

// Drop down for Date of Birth.
const days = page.locator('#days');// Drop down for Days
const month = page.locator('#months');// Drop down for Months
const year = page.locator('#years'); // Drop down for Years

// checkbox for Newsletter
const newsletter = page.locator('#newsletter');

// Generating a unique and random number for email.
let RanNum = Math.floor((Math.random()* 9999) + 1000);
let EmailAddress = UserData.Fname+RanNum+"@test.com"


// Entering Address information.

const firstName = page.locator('#first_name');// using Id
const lastName = page.locator ('input[name ="last_name"]');// using CSS
const company = page.locator('#company'); // using Id
const address1 = page.getByLabel('Address'); // using getByLabel
const state = page.getByRole('textbox', { name: 'State' });// using getByRole
const city = page.locator('//input[@data-qa="city"]'); // using Xpath
const zipcode = page.locator('input[name ="zipcode"]');// using CSS
const mobileNumber = page.locator('#mobile_number'); // using Id
const createAccount = page.locator('button[data-qa = "create-account"]'); // using CSS
const accountCreated = page.locator('h2[data-qa ="account-created"]+p');
const continueButton = page.locator('a[data-qa="continue-button"]');
const deleteAccountLink = page.locator('a[href="/delete-account"]');
const logoutLink = page.locator('a[href="/logout"]');

// Navigating to website.
await page.goto("https://www.automationexercise.com/");

// Wait for the cookie consent button to be visible
const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" }); // handling cookies consent
await consentButton.waitFor(); // waiting for element
await consentButton.click(); // clicking on consent

// Clicking on Signup/Login link
await page.locator("text='Signup / Login'").click(); // click on signup from menu list.
await expect(page).toHaveURL("https://www.automationexercise.com/login"); // Assertion after clicking on signup.


// Entering Name and email address in login screen for new signup.
await signupName.fill(UserData.Fname); // entering name
await signupEmailAddress.fill(EmailAddress); // entering unique email address
await signupButton.click(); // clicking on signup button
await expect(page).toHaveURL('https://www.automationexercise.com/signup'); // Assertion after clicking on signup

// Checking whether Name and email address are prepopulated in signup
await expect(name).toBeDisabled;
await expect(name).toHaveValue(UserData.Fname);
await expect(name).toBeEditable;
await expect(email).toBeDisabled;
//await expect(email).toHaveValue("emailaddress");
await expect(email).toBeEditable;

// entering account information//
await radioButtonMr.click();
await password.fill('Test123');

// Scrolling window a little to see the dob field. its blocking because of a popup.
await page.evaluate(() => window.scrollBy(0, 200)); // Adjust the scroll height as needed

// Selecting date of Birth
await days.waitFor({ state: "visible" });
await days.selectOption("7");

await month.waitFor({ state: "visible" });
await month.selectOption("March")

await year.waitFor({state: "visible"});
await year.selectOption("1980")

await newsletter.click();

// Entering Address information
await firstName.fill(UserData.Fname);
await lastName.fill(UserData.Lname);
await company.fill(UserData.Company);
await address1.first().fill(UserData.Address);
await state.fill (UserData.State);
await city.fill (UserData.City);
await zipcode.fill(UserData.ZipCode);
await mobileNumber.fill(UserData.Mobile);

await createAccount.click();

 // Adding assertion for next page and also capturing text displaying on success page
 await expect(page).toHaveURL("https://www.automationexercise.com/account_created");
 await expect(accountCreated).toHaveText("Congratulations! Your new account has been successfully created!")
 //update excel with email address to the same role
 UserData.Email = EmailAddress
//await ExcelUtil.UpdateExcelData(UserAccess, EmailAddress)
 // clicking on continue button
 await continueButton.click();

 await expect(page).toHaveURL("https://www.automationexercise.com/");
 await expect(deleteAccountLink).toBeTruthy();
 await expect(logoutLink).toBeTruthy();



})



test.skip('Login test', async ({page})=>{
    // Navigating to website.
    await page.goto("https://www.automationexercise.com/");
    
    // Wait for the cookie consent button to be visible
    const consentButton = page.locator(".fc-button-label").filter({ hasText: "Consent" }); // handling cookies consent
    await consentButton.waitFor(); // waiting for element
    await consentButton.click(); // clicking on consent
    
    // Clicking on Signup/Login link
    await page.locator("text='Signup / Login'").click(); // click on signup from menu list.
    await expect(page).toHaveURL("https://www.automationexercise.com/login"); // Assertion after clicking on signup.
    
    
    //
    await page.locator("input[data-qa='login-email']").fill("EmailAddress@test.com")
    await page.locator("input[data-qa='login-password']").fill("Test123")
    
    
     //Temp code for learning to wait the code
     await page.waitForTimeout(3000)
    
    })





