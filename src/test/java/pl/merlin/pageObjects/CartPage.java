package pl.merlin.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class CartPage extends AbstractPage{

    public CartPage(WebDriver driver){
        super(driver);
    }

    public CartPage clickOnTheRemoveItem(){
        driver.findElement(By.cssSelector("a.btn_action.delete.button--link-green")).click();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        return new CartPage(driver);
    }

    public CartPage clickToRemoveAllItemsFromCart() throws InterruptedException {
        List<WebElement> links = driver.findElements(By.cssSelector("li.b_cart-item.cart__item.grid__row"));
        int n = links.size();

        for (int i=n; i>0;i--){
            driver.findElement(By.cssSelector("a.btn_action.delete.button--link-green")).click();
            Thread.sleep(500);
            driver.navigate().refresh();
        }
        return new CartPage(driver);
    }

    public int checkHowManyItemsAreInBasket() {
        driver.navigate().refresh();
        return driver.findElements(By.cssSelector("li.b_cart-item.cart__item.grid__row")).size();
    }
    public boolean isCartEmpty(){
        return driver.findElements(By.cssSelector("h2.cart__text-empty")).size() > 0;
    }
}
