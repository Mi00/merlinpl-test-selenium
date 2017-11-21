$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/Scenario1/Login.feature");
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
  "name": "Check the login form with wrong password",
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
        "password"
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
  "name": "I\u0027m not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.shouldNotLoggedIn()"
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
  "name": "Check the login form with wrong username",
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
        "test1234@gmail.com",
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
  "name": "I\u0027m not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.shouldNotLoggedIn()"
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
formatter.uri("src/test/resource/features/Scenario2/Basket.feature");
formatter.feature({
  "name": "Test basket functionality. Add/remove item, clear basket.",
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
formatter.scenario({
  "name": "Successfully add \"item\" to basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on button \"do koszyka\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.iClickOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully add item to basket",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.iSuccessfullyAddItemToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"back to shop\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iClickButton(String)"
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