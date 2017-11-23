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
  "location": "StepDefinitions.shouldClickOnTheAddToCartButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully add item to basket",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyAddItemToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"back to shop\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickBackToShopButton(String)"
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
  "name": "Successfully remove item from basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Check if basket is not empty",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkIfBasketIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnTheCartLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the remove product link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnTheRemoveProductLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.productIsDeleted()"
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
  "name": "Successfully add several items to basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on button \"do koszyka\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.shouldClickOnTheAddToCartButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully add item to basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyAddItemToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"back to shop\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickBackToShopButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click category \"Gry\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iClickCategory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button \"do koszyka\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickOnTheAddToCartButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully add item to basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyAddItemToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"back to shop\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickBackToShopButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search by name \"film\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iClickSearchByName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on button \"do koszyka\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickOnTheAddToCartButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully add item to basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyAddItemToBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"back to shop\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldClickBackToShopButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the browser",
  "keyword": "Then "
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
  "name": "Clear the basket",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Check if basket is not empty",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.checkIfBasketIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnTheCartLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the remove product link until not empty",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.clickOnTheRemoveProductLinkUntilNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check if basket is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.checkIfBasketIsEmpty()"
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
formatter.uri("src/test/resource/features/Scenario3/Logout.feature");
formatter.feature({
  "name": "Log out with and without errors",
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
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log out without errors",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the \"WYLOGUJ\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.iClickOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I successfully log out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.iSuccessfullyLogOut()"
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
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.shouldSuccessfullyLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log out with failure",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I scroll down page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.iScrollDownPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check if there is option to logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.iCheckIfThereIsOptionToLogout()"
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