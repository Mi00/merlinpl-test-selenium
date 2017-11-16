package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoggedOn extends AbstractPage{

    public LoggedOn(WebDriver driver){
        super(driver);
    }

    public boolean checkIsLoggedIn() {
        return driver.findElements(By.xpath("//a[@href='/profile/setting/']")).size() > 0;
    }
}
