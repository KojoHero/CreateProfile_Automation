package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Profile {
	

	WebDriver driver;
	  
	@Before()
	public void setup() {  
		System.setProperty("webdriver.chrome.driver",
				"F:\\Create_profile\\create_profile\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}

	
	@Given("^User visits the community platform and logs in$")
	public void user_visits_the_community_platform_and_logs_in() throws Throwable {
		driver.get("http://20.52.44.20/auth/login");
	    driver.findElement(By.id("InputEmail")).sendKeys("amalibus@amalitech.com");
	    driver.findElement(By.id("InputPassword1")).sendKeys("12345678!Aa");
	    driver.findElement(By.id("signin_button")).click();
	}


	@When("^User goes to edit profile$")
	public void user_goes_to_edit_profile() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div/div[2]/div[1]/div[2]/a")).click();
	}

	@When("^User taps on organization title$")
	public void user_taps_on_organization_title() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/input")).clear();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/input")).sendKeys("Amali Enterprise");
	}

	@When("^User taps on website$")
	public void user_taps_on_website() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//div[@id='__next']/div/div/div[2]/div[2]/div[2]/div[2]/div/div[3]/div/input")).clear();
		driver.findElement(By.xpath("//div[@id='__next']/div/div/div[2]/div[2]/div[2]/div[2]/div/div[3]/div/input")).sendKeys("http://www.amalibus.com");
	}

	@When("^User taps on phone number$")
	public void user_taps_on_phone_number() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[2]/input")).clear();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[2]/input")).sendKeys("0202020202");
	}


	@When("^User taps on digital address$")
	public void user_taps_on_digital_address() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[4]/input")).clear();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[4]/input")).sendKeys("Ws 020 2451");
	}

	@When("^User taps on Town$")
	public void user_taps_on_Town() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[5]/input")).clear();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[3]/div[5]/input")).sendKeys("Anaji");
	}

	@When("^User taps on Description$")
	public void user_taps_on_Description() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[4]/div/div/textarea")).clear();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[1]/div[4]/div/div/textarea")).sendKeys("Hello welcome to my business centre");
	}


	@Then("^when user click on save$")
	public void when_user_click_on_save() throws Throwable {
		Thread.sleep(8000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/button")).click();
	}

	@Then("^user should be told profile updated$")
	public void user_should_be_told_profile_updated() throws Throwable {
		Thread.sleep(8000);
		String message = "Success: Business profile saved";
		String prompt = driver.findElement(By.xpath("//div[@id='myModal']/div[2]/div/p")).getText();   
		Assert.assertEquals(message,prompt);
		
	}
}  
