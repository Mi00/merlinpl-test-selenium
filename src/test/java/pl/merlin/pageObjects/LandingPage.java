package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LandingPage extends AbstractPage {

    public LandingPage(WebDriver driver) {
        super(driver);
    }

    public LoginPage navigateToLoginPage(String link){
        driver.findElement(By.partialLinkText(link)).click();
        return new LoginPage(driver);
    }
}
