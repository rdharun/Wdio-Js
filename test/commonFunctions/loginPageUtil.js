

const LoginPage = require('../pageobjects/loginPage/loginPage');
const HomePage = require('../pageobjects/homePage/homePage');
const ProfilePage = require('../pageobjects/profilePage/profilePage');
const BasePage = require('../pageobjects/base/basePage');
const OtpPage = require('../pageobjects/loginPage/otpPage');

const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const otpPage = new OtpPage();

class LoginPageUtil extends BasePage {

    async login(username, password) {

        await this.waitForElementDisplayed(await homePage.getWelcomeBackEle(), 10000, true);
        if (await this.isDisplayed(await homePage.getProfileEle())) {
            await this.click(await homePage.getProfileEle());
        }
        await profilePage.clickOnLoginButton();
        await loginPage.enterCredentials(username, password);
        await loginPage.clickOnLoginButton();
    }

    async enterOtpAndClickOnVerifyButton(otp) {
        await otpPage.enterOtp(otp);
        await otpPage.clickOnVerifyButton();
    }


    async logout() {

        if (await this.isDisplayed(await homePage.getProfileEle())) {
            await this.click(await homePage.getProfileEle());
        }
        await this.waitForElementDisplayed(await profilePage.getLogoutButtonEle(), 2000)
        await this.click(await profilePage.getLogoutButtonEle());
    }
}

module.exports = LoginPageUtil;