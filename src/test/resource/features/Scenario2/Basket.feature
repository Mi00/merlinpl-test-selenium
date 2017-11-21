Feature: Test basket functionality. Add/remove item, clear basket.

  Background:
    Given I am on the merlin.pl site
    When I click on the link "ZALOGUJ SIĘ"
    And I populate the entire form
      |       Email      |  Password  |
      |muturuzi@gmail.com|  test1234  |
    And I submit the login form
    Then I successfully logged on


  Scenario: Successfully add "item" to basket
    When I click on button "do koszyka"
    Then I successfully add item to basket
    And I click "back to shop" button
    And I close the browser

  Scenario: Successfully remove item from basket
    When Check if basket is not empty
    And Click on the cart link
    And Click on the remove product link
    Then Product is deleted
    And I close the browser


  Scenario: Clear the basket
    When Check if basket is not empty
    And Click on the cart link
    And Click on the remove product link until not empty
    Then Check if basket is empty
    And I close the browser

