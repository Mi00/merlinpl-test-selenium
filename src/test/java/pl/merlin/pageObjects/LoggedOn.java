package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class LoggedOn extends AbstractPage{

    public LoggedOn(WebDriver driver){
        super(driver);
    }

    public boolean checkIsLoggedIn() {
        return driver.findElements(By.xpath("//a[@href='/profile/setting/']")).size() > 0;
    }

    public LoggedOn addToBasket(){
        ((JavascriptExecutor)driver).executeScript("scroll(0, 600)");
        driver.findElement(By.xpath("//button[contains(text(), 'do koszyka')]")).click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        return new LoggedOn(driver);
    }

    public LoggedOn backToShop(){
        driver.findElement(By.xpath("//*[contains(text(), 'Powróć do sklepu')]")).click();
        return new LoggedOn(driver);
    }

    public boolean checkIsItemAdded(){
        return driver.findElements(By.className("minicart")).size() > 0;
    }

    public String checkIfCartIsNotEmpty(){
        return driver.findElement(By.id("header-cart-item-count-text")).getText();
    }

    public CartPage clickOnTheCartButton(){
        driver.findElement(By.id("header-cart-item-count-text")).click();
        return new CartPage(driver);
    }

    public String checkIsLoggedOut(){
        return driver.findElement(By.xpath("//div[2]/header/div[1]/div/ul/li[1]/a")).getText();
    }

    public LoggedOn clickOnTheCategory(String category){
        driver.findElement(By.id("sub-menu-main_submenu")).findElement(By.linkText(category)).click();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        return new LoggedOn(driver);
    }

    public LoggedOn searchTheItem(String name){
        driver.findElement(By.id("search_header")).sendKeys(name);
        driver.findElement(By.id("search-submit-header")).click();
        return new LoggedOn(driver);
    }
}