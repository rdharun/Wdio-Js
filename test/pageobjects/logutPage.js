

const HomePage = require('../pageobjects/homePage');

class LogoutPage {

    locators = {
        logutButton: 'id:com.ultralesson.ulshopify:id/txt-logout'
    }


    async logout() {
        if ((await HomePage.getProfileEle()).isDisplayed()) {
            (await HomePage.getProfileEle()).click();
        }
        (await $(this.locators.logutButton)).click();
        await driver.pause(10000)
    }

}

module.exports = new LogoutPage();
