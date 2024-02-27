

const LoginPage = require('../pageobjects/loginPage');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profilePage');


const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const homePage = new HomePage();

class LoginPageUtil {

    async login(username, password) {
        await driver.pause(10000);
        if ((await homePage.getProfileEle()).isDisplayed) {
            (await homePage.getProfileEle()).click();
        }
        await profilePage.clickOnLoginButton();
        await loginPage.enterCredentials(username, password);
        // await driver.pause(3000);
        await loginPage.clickOnLoginButton();
    }


    async logout() {
        if ((await homePage.getProfileEle()).isDisplayed()) {
            (await homePage.getProfileEle()).click();
        }
        ((await profilePage.getLogoutButtonEle()).click());
    }
}

module.exports = LoginPageUtil;