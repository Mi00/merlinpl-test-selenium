package pl.merlin;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pl.merlin.pageObjects.CartPage;
import pl.merlin.pageObjects.LandingPage;
import pl.merlin.pageObjects.LoggedOn;
import pl.merlin.pageObjects.LoginPage;

import java.sql.Driver;
import java.util.List;

public class StepDefinitions {

    WebDriver driver = WebDriverFactory.createWebDriver();
    LandingPage landingPage;
    LoginPage loginPage;
    LoggedOn loggedOn;
    CartPage cartpage;
    int itemCount;


    @Given("^I am on the merlin\\.pl site$")
    public void shouldNavigateToMainPage() throws Exception {
        landingPage = new LandingPage(driver);
        landingPage.navigateToWebApp();
    }

    @When("^I click on the link \"([^\"]*)\"$")
    public void shouldClickOnTheLink(String link) throws Throwable {
        loginPage = landingPage.navigateToLoginPage(link);
    }

    @And("^I populate the entire form$")
    public void shouldPopulateTheFormWithValidInformations(DataTable table) throws Exception {
        List<List<String>> data = table.raw();
        loginPage.setEmailField(data.get(1).get(0))
                .setPassword(data.get(1).get(1));
    }

    @And("^I submit the login form$")
    public void shouldSubmitTheForm() throws Exception {
        loggedOn = loginPage.submitForm();
    }

    @Then("^I successfully logged on$")
    public void shouldSuccessfullyLogIn() throws Exception {
        Assert.assertTrue(loggedOn.checkIsLoggedIn());
    }

    @Then("^I'm not logged in$")
    public void shouldNotLoggedIn() throws Throwable {
        Assert.assertEquals(loginPage.notLoggedIn(), "Taki użytkownik nie istnieje albo hasło nieprawidłowe");
    }

    @And("^I close the browser$")
    public void shouldCloseBrowser() throws Exception {
        landingPage.closeDriver();
    }

    @When("^I click on button \"([^\"]*)\"$")
    public void shouldClickOnTheAddToCartButton(String buttonName) throws Throwable {
        loggedOn = loggedOn.addToBasket();

    }

    @Then("^I successfully add item to basket$")
    public void shouldSuccessfullyAddItemToBasket() throws Throwable {
        Assert.assertTrue(loggedOn.checkIsItemAdded());
    }

    @And("^I click \"([^\"]*)\" button$")
    public void shouldClickBackToShopButton(String arg0) throws Throwable {
        loggedOn = loggedOn.backToShop();
    }

    @When("^Check if basket is not empty$")
    public void checkIfBasketIsNotEmpty() throws Throwable {
        Assert.assertNotEquals(loggedOn.checkIfCartIsNotEmpty(), "pusty");
    }

    @And("^Click on the cart link$")
    public void clickOnTheCartLink() throws Throwable {
        cartpage = loggedOn.clickOnTheCartButton();
    }

    @And("^Click on the remove product link$")
    public void clickOnTheRemoveProductLink() throws Throwable {
        itemCount = cartpage.checkHowManyItemsAreInBasket();
        cartpage = cartpage.clickOnTheRemoveItem();
    }

    @And("^Product is deleted$")
    public void productIsDeleted() throws Throwable {
        Assert.assertTrue(cartpage.isCartEmpty());
    }

    @And("^Click on the remove product link until not empty$")
    public void clickOnTheRemoveProductLinkUntilNotEmpty() throws Throwable {
        cartpage = cartpage.clickToRemoveAllItemsFromCart();
    }


    @Then("^Check if basket is empty$")
    public void checkIfBasketIsEmpty() throws Throwable {
        Assert.assertTrue(cartpage.isCartEmpty());
    }

    @Then("^I successfully log out$")
    public void iSuccessfullyLogOut() throws Throwable {
        Assert.assertEquals(loggedOn.checkIsLoggedOut(), "CZEŚĆ, ZALOGUJ SIĘ");
    }

    @And("^I click category \"([^\"]*)\"$")
    public void iClickCategory(String category) throws Throwable {
        loggedOn = loggedOn.clickOnTheCategory(category);
    }

    @And("^I click search by name \"([^\"]*)\"$")
    public void iClickSearchByName(String name) throws Throwable {
        loggedOn = loggedOn.searchTheItem(name);
    }

    @When("^I scroll down page$")
    public void iScrollDownPage() throws Throwable {
        loggedOn = loggedOn.scrollDownPage();
    }

    @Then("^I fail to log out$")
    public void iFailToLogOut() throws Throwable {
        Assert.assertNotEquals(loggedOn.checkIsLoggedOut(), "CZEŚĆ, ZALOGUJ SIĘ");
    }

    @When("^I click on the \"([^\"]*)\"$")
    public void iClickOnThe(String name) throws Throwable {
        loggedOn = loggedOn.logOut(name);
    }

    @And("^I check if there is option to logout$")
    public void iCheckIfThereIsOptionToLogout() throws Throwable {
        Assert.assertEquals(true, loggedOn.checkIfOptionLogOutIsVisible());
    }
}