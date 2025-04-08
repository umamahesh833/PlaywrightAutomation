const {expect} = require("@playwright/test")
const playwright = require('@playwright/test')
const {Given, When, Then} = require('@cucumber/cucumber')
const TestData = JSON.parse(JSON.stringify(require('../../ExcelData/TestData.json')));
const {HomePage} = require('../../PageObjects/HomePage')
const {ProductsPage} = require('../../PageObjects/ProductsPage')
const {CartsPage} = require('../../PageObjects/CartsPage')
const {SignUpLoginPage} = require('../../PageObjects/SignUpLoginPage')


Given('I launch the application',async function () {
    console.log("Step def for launching the application**************");

    const browser =await playwright.chromium.launch({
      headless:false
    })
    const context =await browser.newContext()
    this.page = await context.newPage();
    // Navigating to website.
    await this.page.goto(TestData.AppUrl);

    //Creating objects to the pages
    this.homePage = new HomePage(this.page)
    //Accept Cookies
    await this.homePage.AcceptCookies()

    //Verify if slider is visible or not
    await this.homePage.VerifySlider()
  
  });

  When('I click on Products',async function () {
    console.log("Step def for I click on home page**************");
      //CLick on Products
      await this.homePage.ClickProducts()
  });

  When('I add two products to Cart',async function () {

    const productsPage = new ProductsPage(this.page)
      //hover on first product and add to cart
      await productsPage.AddFirstProduct()
      //hover on second product and add to cart
      await productsPage.AddSecondProduct()
  });

  Then('product should be added to cart',async function () {
    console.log("Step def for product should be added to cart**************");
    //CLick on Cart
    await this.homePage.ClickCart()

    const cartsPage = new CartsPage(this.page)
    //Count no of rows present in cart page//Verifying no of products
    let rows =await cartsPage.CountNoofProducts()
    expect(rows).toEqual(2);
 
  });

  Then('Products price should be matching', function () {
    console.log("Step def for Products price should be matching**************");

  });

  When('I login to the application as {string} and password {string}', async function (usename, passwrod) {
    const signUpLoginPage = new SignUpLoginPage(this.page)
         // Clicking on Signup/Login link
         await this.homePage.ClickSignUpLogin()
     //Login to the application with valid credentials
     await signUpLoginPage.LoginApp(usename,passwrod)
     //CLick on Cart
     await this.homePage.ClickCart()
  });

  When('I login to the application',async function () {
    const signUpLoginPage = new SignUpLoginPage(this.page)
         // Clicking on Signup/Login link
         await this.homePage.ClickSignUpLogin()
        //Login to the application with valid credentials
        await signUpLoginPage.LoginAppOld()
  });


  Then('Home page should be seen', function () {

  });

