package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class LoginPage extends AbstractPage{

    public LoginPage(WebDriver driver){
        super(driver);
    }

    public LoginPage setEmailField(String value){
        driver.findElement(By.id("login_login")).sendKeys(value);
        return new LoginPage(driver);
    }

    public LoginPage setPassword(String value){
        driver.findElement(By.id("login_password")).sendKeys(value);
        return new LoginPage(driver);
    }

    public LoggedOn submitForm(){
        driver.findElement(By.cssSelector(".auth-button")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        return new LoggedOn(driver);
    }
}
