export default class SignupPage {
    constructor(driver,By) {
        this.driver = driver;
        this.By = By;
    }
    static async getElementXpath(xpath,timeout = 3000){
        const el = await this.driver.wait(until.elementLocated(this.By.xpath(xpath)),timeout);
        return await driver.wait(until.elementIsVisible(el),timeout);
    }
    open (){
       // this.driver.get(`${procces.env.URL}/signup`)
       this.driver.get('localhost/8000')
        const test = this.getElementXpath("/html/body/section/input[1]");
        console.log(test);
    }
}

