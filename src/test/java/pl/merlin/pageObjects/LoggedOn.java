package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class LoggedOn extends AbstractPage{

    public LoggedOn(WebDriver driver){
        super(driver);
    }

    public boolean checkIsLoggedIn() {
        return driver.findElements(By.xpath("//a[@href='/profile/setting/']")).size() > 0;
    }

    public LoggedOn addToBasket(){
        ((JavascriptExecutor)driver).executeScript("scroll(0, 1000)");
        driver.findElement(By.xpath("//button[contains(text(), 'do koszyka')]")).click();
        return new LoggedOn(driver);
    }

    public LoggedOn backToShop(){
        driver.findElement(By.xpath("//*[contains(text(), 'Powróć do sklepu')]")).click();
        return new LoggedOn(driver);
    }

    public boolean checkIsItemAdded(){
        return driver.findElements(By.className("minicart")).size() > 0;
    }
}