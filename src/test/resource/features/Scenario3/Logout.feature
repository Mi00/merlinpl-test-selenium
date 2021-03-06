Feature: Log out with and without errors

  Background:
    Given I am on the merlin.pl site
    When I click on the link "ZALOGUJ SIĘ"
    And I populate the entire form
      |       Email      |  Password  |
      |muturuzi@gmail.com|  test1234  |
    And I submit the login form
    And I successfully logged on

  Scenario: Log out without errors
    When I click on the "WYLOGUJ"
    Then I successfully log out
    And I close the browser

  Scenario: Log out with failure
    When I scroll down page
    And I check if there is option to logout
    And I close the browser