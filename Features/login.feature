Feature: Validating login test cases

@Login
Scenario: Verify login test
Given I launch the application
When I login to the application
Then Home page should be seen
