

const HomePage = require('../pageobjects/homePage')


class ProfilePage {

    locators = {
        registerButton: `#txt-register`,
        loginButton: `#txt-login`,
        logutButton: 'id:com.ultralesson.ulshopify:id/txt-logout'

    }

    async clickOnLoginButton() {
        (await $(this.locators.loginButton)).click();
    }

    async logout() {
        if ((await HomePage.getProfileEle()).isDisplayed()) {
            (await HomePage.getProfileEle()).click();
        }
        (await $(this.locators.logutButton)).click();
    }


}

module.exports = new ProfilePage();