

const LoginPage = require('../pageobjects/loginPage');
const HomePage = require('../pageobjects/homePage');
const ProfilePage = require('../pageobjects/profilePage');
const BasePage = require('../pageobjects/base/basePage');


const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const homePage = new HomePage();

class LoginPageUtil extends BasePage {

    async login(username, password) {

        await browser.pause(10000);
        if (await this.isDisplayed(await homePage.getProfileEle())) {
            await this.click(await homePage.getProfileEle());
        }
        await profilePage.clickOnLoginButton();
        await loginPage.enterCredentials(username, password);
        await loginPage.clickOnLoginButton();
    }


    async logout() {

        if (await this.isDisplayed(await homePage.getProfileEle())) {
            await this.click(await homePage.getProfileEle());
        }
        await driver.pause(2000);
        await this.click(await profilePage.getLogoutButtonEle());
    }
}

module.exports = LoginPageUtil;