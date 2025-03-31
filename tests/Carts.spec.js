const {test, expect} = require("@playwright/test")
const {HomePage} = require('../PageObjects/HomePage')
const {ProductsPage} = require('../PageObjects/ProductsPage')
const {CartsPage} = require('../PageObjects/CartsPage')
const {SignUpLoginPage} = require('../PageObjects/SignUpLoginPage')
const TestData = JSON.parse(JSON.stringify(require('../ExcelData/TestData.json')));



test('12 - Add Products to Cart', async ({page})=>{
// Navigating to website.
await page.goto(TestData.AppUrl);

//Creating objects to the pages
const homePage = new HomePage(page)
const productsPage = new ProductsPage(page)
const cartsPage = new CartsPage(page)

//Accept Cookies
await homePage.AcceptCookies()

//Verify if slider is visible or not
await homePage.VerifySlider()

//CLick on Products
await homePage.ClickProducts()

//hover on first product and add to cart
await productsPage.AddFirstProduct()
//hover on second product and add to cart
await productsPage.AddSecondProduct()

//CLick on Cart
await homePage.ClickCart()

//Count no of rows present in cart page//Verifying no of products
let rows =await cartsPage.CountNoofProducts()
expect(rows).toEqual(2);
 
})


test('20.5 - Verify Cart After Login', async ({page})=>{
     // Navigating to website.
     await page.goto(TestData.AppUrl);


     //Creating objects to the pages
     const homePage = new HomePage(page)
     const productsPage = new ProductsPage(page)
     const cartsPage = new CartsPage(page)
     const signUpLoginPage = new SignUpLoginPage(page)


     //Accept Cookies
     await homePage.AcceptCookies()
     
     //Verify if slider is visible or not
     await homePage.VerifySlider()
     
     //CLick on Products
     await homePage.ClickProducts()
     
     //hover on first product and add to cart
     await productsPage.AddFirstProduct()
     //hover on second product and add to cart
     await productsPage.AddSecondProduct()
     
     //CLick on Cart
     await homePage.ClickCart()
     
     //Count no of rows present in cart page//Verifying no of products
     let rows =await cartsPage.CountNoofProducts()
     expect(rows).toEqual(2);

     //Capture the names of the products and their prices
     let FirstProductName =await cartsPage.CaptureFirstProductName()
     let SecondProductName =await cartsPage.CaptureSecondProductName()

     let FirstProductPrice =await cartsPage.CaptureFirstProductPrice()
     let SecondProductPrice =await cartsPage.CaptureSecondProductPrice()

     console.log(FirstProductName);
     console.log(SecondProductName);
     console.log(FirstProductPrice);
     console.log(SecondProductPrice);

     // Clicking on Signup/Login link
     await homePage.ClickSignUpLogin()

     //Login to the application with valid credentials
     await signUpLoginPage.LoginApp()
     //CLick on Cart
     await homePage.ClickCart()
     //Capture the names of the products and their prices
     let FirstProductNameNew =await cartsPage.CaptureFirstProductName()
     let SecondProductNameNew =await cartsPage.CaptureSecondProductName()

     let FirstProductPriceNew = await cartsPage.CaptureFirstProductPrice()
     let SecondProductPriceNew = await cartsPage.CaptureSecondProductPrice()

     console.log(FirstProductNameNew);
     console.log(SecondProductNameNew);
     console.log(FirstProductPriceNew);
     console.log(SecondProductPriceNew);
     expect(FirstProductNameNew).toEqual(FirstProductName)
     expect(SecondProductNameNew).toEqual(SecondProductName)
     expect(FirstProductPriceNew).toEqual(FirstProductPrice)
     expect(SecondProductPriceNew).toEqual(SecondProductPrice)

     })

     test('git demo test', async ({page})=>{
          // Navigating to website.
          //await page.goto(TestData.AppUrl);
     })