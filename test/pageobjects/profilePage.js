

const BasePage = require('./base/basePage');


class ProfilePage extends BasePage {

    locators = {
        registerButton: 'id:com.ultralesson.ulshopify:id/txt-register',
        loginButton: 'id:com.ultralesson.ulshopify:id/txt-login',
        logutButton: 'id:com.ultralesson.ulshopify:id/txt-logout'

    }

    async getLogoutButtonEle() {
        return this.getElement(this.locators.logutButton);
    }

    async clickOnLoginButton() {
        await this.click(this.locators.loginButton);
    }

}

module.exports = ProfilePage;