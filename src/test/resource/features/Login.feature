Feature: Test the login page with and without errors

  Background:
    Given I am on the merlin.pl site

  Scenario: Check the login form without errors
    When I click on the login link
    And I populate the entire form
    And I submit the login form
    Then I successfully logged on
    And I close the browser