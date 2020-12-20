const selenium = require("selenium-webdriver");
const chromedriver = require("chromedriver");
const script = require('jest');
const SignupPage = require('./pages/signup')
//const d  = require("selenium-webdrivere/chrome");

const By = selenium.By;
const driver = new selenium.Builder().forBrowser("chrome").build();
const page = new SignupPage(driver);
page.open()
/*
page.setUserName("username");
page.setPass("password");
page.clearPass();
page.setPass("password2");
page.submit();
*/
//driver.findElement(By.xpath("/html/body/section/div/div[1]/a")).click();
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
