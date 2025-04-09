Feature: Validating carts related test cases

Scenario: Add Products to Cart
Given I launch the application
When I click on Products
And I add two products to Cart
Then product should be added to cart
And Products price should be matching

Scenario: Verify cart after login
Given I launch the application
When I click on Products
And I add two products to Cart
And I login to the application as "Bhavana8700@test.com" and password "Test123"
Then product should be added to cart
And Products price should be matching



