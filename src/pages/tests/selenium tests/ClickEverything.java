import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FindAndClickAllLink {
		
	public static void main(String[] args) throws InterruptedException {		
		System.setProperty("webdriver.gecko.driver","/home/linuxbrew/.linuxbrew/bin/geckodriver");
		WebDriver driver = new FirefoxDriver();

//		System.setProperty("webdriver.chrome.driver","/usr/bin/chromedriver");
//		WebDriver driver = new ChromeDriver();

		//driver.get("https://sudiptac.bitbucket.io");
		driver.get("http://localhost:3000/");
		//driver.get("https://www.google.com.sg");
		
		// get all the links
		java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
		System.out.println(links.size());
				
		// print all the links
		for (int i = 5; i < links.size(); i=i+1) {
			System.out.println(i + " " + links.get(i).getText());
			System.out.println(i + " " + links.get(i).getAttribute("href"));
		}
		
		// maximize the browser window
		driver.manage().window().maximize();
		
		// click all links in a web page
		for(int i = 5; i < links.size(); i++)
		{
			System.out.println("*** Navigating to" + " " + links.get(i).getAttribute("href"));
			if (links.get(i).getAttribute("href") == null)
				continue;
			boolean staleElementLoaded = true;
			while(staleElementLoaded) {
				try {
					driver.navigate().to(links.get(i).getAttribute("href"));
					Thread.sleep(3000);
					driver.navigate().back();
					links = driver.findElements(By.tagName("a"));
					System.out.println("*** Navigated to" + " " + links.get(i).getAttribute("href"));
					staleElementLoaded = false;
				} catch (StaleElementReferenceException e) {
					staleElementLoaded = true;
				}
			}
		}
	}
}
