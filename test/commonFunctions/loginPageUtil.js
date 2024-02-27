

const LoginPage = require('../pageobjects/loginPage');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profilePage');

class LoginPageUtil {

    async login(username, password) {
        await driver.pause(10000);
        if ((await HomePage.getProfileEle()).isDisplayed) {
            (await HomePage.getProfileEle()).click();
        }
        await ProfilePage.clickOnLoginButton();
        await LoginPage.enterCredentials(username, password);
        await driver.pause(3000);
        await LoginPage.clickOnLoginButton();
    }
}

module.exports = new LoginPageUtil();