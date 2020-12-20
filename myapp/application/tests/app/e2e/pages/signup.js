const By = require("selenium-webdriver").By;
module.exports = class SignupPage {
    constructor(driver) {
        this.driver = driver;
    }
    open (){
       // this.driver.get(`${procces.env.URL}/signup`)
       this.driver.get('localhost:8000/signup')
    }
    setUserName (user){
       // this.driver.findElement(By.xpath("/html/body/section/input[1]")).sendKeys(user); 
    }
    clearUserName (){
      //  this.driver.findElement(By.xpath("/html/body/section/input[1]")).clear(); 
    }
    setPass (pass){
      //  this.driver.findElement(By.xpath("/html/body/section/input[2]")).sendKeys(pass); 
    }
    clearPass (){
      //  this.driver.findElement(By.xpath("/html/body/section/input[2]")).clear();
    }
    submit (){
      //  this.driver.findElement(By.xpath("/html/body/section/comment()[4]")).submit();
    }
}

