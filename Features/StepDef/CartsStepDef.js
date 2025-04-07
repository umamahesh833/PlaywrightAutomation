
const {Given, When, Then} = require('@cucumber/cucumber')



Given('I launch the application', function () {
    console.log("Step def for launching the application**************");
    
  
  });

  When('I click on home page', function () {
    console.log("Step def for I click on home page**************");

  });

  When('I Select a product', function () {
    console.log("Step def for I Select a product**************");

  });

  When('I click on add to cart', function () {
    console.log("Step def for I click on add to cart**************");
 
  });

  Then('product should be added to cart', function () {
    console.log("Step def for product should be added to cart**************");
 
  });

  Then('Products price should be matching', function () {
    console.log("Step def for Products price should be matching**************");

  });

  When('I login to the application', function () {
    console.log("Step def for I login to the application**************");
  });

