package pl.merlin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebDriverFactory {

    public static WebDriver createWebDriver(){
        String webdriver = System.getProperty("browser", "firefox");
        switch(webdriver) {
            case "firefox":
                System.setProperty("webdriver.firefox.driver", "driver/geckodriver");
                return new FirefoxDriver();
            case "chrome":
                System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
                return new ChromeDriver();
            default:
                throw new RuntimeException("Unsupported webdriver: " + webdriver);
        }
    }
}
