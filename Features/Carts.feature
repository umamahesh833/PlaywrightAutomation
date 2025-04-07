Feature: Validating carts related test cases

Scenario: Add Products to Cart
Given I launch the application
When I click on home page
And I Select a product
And I click on add to cart
Then product should be added to cart
And Products price should be matching

Scenario: Verify cart after login
Given I launch the application
When I click on home page
And I Select a product
And I click on add to cart
And I login to the application 
Then product should be added to cart
And Products price should be matching


