$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/Login.feature");
formatter.feature({
  "name": "Test the login page with and without errors",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am on the merlin.pl site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.shouldNavigateToMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the login form without errors",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the link \"ZALOGUJ SIĘ\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.shouldClickOnTheLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I populate the entire form",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "muturuzi@gmail.com",
        "test1234"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldPopulateTheFormWithValidInformations(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the login form",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSubmitTheForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully logged on",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldCloseBrowser()"
});
formatter.result({
  "status": "passed"
});
});