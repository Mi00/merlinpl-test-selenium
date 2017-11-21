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