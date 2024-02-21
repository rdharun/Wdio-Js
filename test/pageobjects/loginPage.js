


class LoginPage {

    locators = {
        profileEle: "id:com.ultralesson.ulshopify:id/icon-profile",
        loginButton: "id:com.ultralesson.ulshopify:id/txt-login",
        emailInputField: "id:com.ultralesson.ulshopify:id/inp-email",
        passwordInputField: "id:com.ultralesson.ulshopify:id/inp-password"
    }

    async login(username, password) {
        await driver.pause(4000);
        await $(this.locators.profileEle).click();
        (await $(this.locators.loginButton)).click();
        await driver.pause(4000);
        (await $(this.locators.emailInputField)).addValue(username);
        (await $(this.locators.passwordInputField)).addValue(password);
        (await $(this.locators.loginButton)).click();
        await driver.pause(4000);
    } 
}


// export default new LoginPage()
module.exports = new LoginPage();
