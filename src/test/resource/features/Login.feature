Feature: Test the login page with and without errors

  Background:
    Given I am on the merlin.pl site

  Scenario: Check the login form without errors
    When I click on the link "ZALOGUJ SIĘ"
    And I populate the entire form
      |       Email      |  Password  |
      |muturuzi@gmail.com|  test1234  |
    And I submit the login form
    Then I successfully logged on
    And I close the browser

    Scenario: Check the login form with wrong password
      When I click on the link "ZALOGUJ SIĘ"
      And I populate the entire form
        |       Email      |  Password  |
        |muturuzi@gmail.com|  password  |
      And I submit the login form
      Then I'm not logged in
      And I close the browser