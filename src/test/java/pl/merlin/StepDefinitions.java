package pl.merlin;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

    @Given("^I am on the merlin\\.pl site$")
    public void i_am_on_the_merlin_pl_site() throws Exception {
        System.out.println("some stuff");
    }

    @When("^I click on the login link$")
    public void i_click_on_the_login_link() throws Exception {
        System.out.println("some stuff");
    }

    @And("^I populate the entire form$")
    public void i_populate_the_entire_form() throws Exception {
        System.out.println("some stuff");
    }

    @And("^I submit the login form$")
    public void i_submit_the_login_form() throws Exception {
        System.out.println("some stuff");
    }

    @Then("^I successfully logged on$")
    public void i_successfully_loggen_on() throws Exception {
        System.out.println("some stuff");
    }

    @And("^I close the browser$")
    public void i_close_the_browser() throws Exception {
        System.out.println("some stuff");
    }

}
