const selenium = require("selenium-webdriver");
const chromedriver = require("chromedriver");
const script = require('jest');
const SignupPage = require('./pages/signup')
console.log(SignupPage)
//const d  = require("selenium-webdrivere/chrome");

const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();

driver.get("localhost:8000");
//driver.findElement(By.xpath("/html/body/section/input[1]")).sendKeys("username")
//driver.findElement(By.xpath("/html/body/section/input[2]")).sendKeys("password")
//driver.findElement(By.xpath("/html/body/section/comment()[4]")).submit();
driver.findElement(By.xpath("/html/body/section/div/div[1]/a")).click();
/*describe('signup page testing',()=>{
    beforeAll(()=>{
      const page = new SignupPage(driver,By);
    })
    test('if signup page renders corrctly',async ()=>{
        page.open();
    })
})
afterAll(async()=>{
    await driver.quit();
},15000)
*/
