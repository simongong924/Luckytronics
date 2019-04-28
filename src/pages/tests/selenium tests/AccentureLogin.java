
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AccentureLogin {
	static boolean success;
	static String myUserName = "me@me.com";
	static String myPassword = "1q2w3e4r";
	
	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.gecko.driver","/home/linuxbrew/.linuxbrew/bin/geckodriver");
		WebDriver driver = new FirefoxDriver();

		driver.get("http://localhost:3000/signin");

		// get all the links
		java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
		System.out.println(links.size());
		
		// get the user name field of the account page
		WebElement username = driver.findElement(By.name("email"));
		
		// send my user name to fill up the box
		username.sendKeys(myUserName);
		WebElement passw = driver.findElement(By.name("password"));
		passw.sendKeys(myPassword);
		//explicitly wait until the password field is present in the page
		try {
			// locate the "Next" button in the account page
			WebElement nextButton = driver.findElement(By.className("FormField__Button mr-20"));
			nextButton.click();
		} catch (Exception NoSuchElementException) {
			System.out.println("login failed");
		}
		success = true;

	}
}
