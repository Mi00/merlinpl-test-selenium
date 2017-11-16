package pl.merlin;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
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
}
