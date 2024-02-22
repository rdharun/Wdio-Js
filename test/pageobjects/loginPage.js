


class LoginPage {

    locators = {
        profileEle: "#icon-profile",
        loginButton: "id:com.ultralesson.ulshopify:id/txt-login",
        emailInputField: "id:com.ultralesson.ulshopify:id/inp-email",
        passwordInputField: "id:com.ultralesson.ulshopify:id/inp-password",
        wrongPasswordLabel: 'id:com.ultralesson.ulshopify:id/txt-toast-message',
        emailFieldErrMsg: 'id:com.ultralesson.ulshopify:id/txt-email-field-cannot-be-empty',
        passwordFieldErrMsg: 'id:com.ultralesson.ulshopify:id/txt-password-field-cannot-be-empty',
        invalidEmailFormatMsg: 'id:com.ultralesson.ulshopify:id/txt-email-format-is-incorrect'

    }

    async getEmailFieldErrMsgEle() {
        return $(this.locators.emailFieldErrMsg);
    }

    async getPasswordFieldErrMsgEle() {
        return $(this.locators.passwordFieldErrMsg);
    }

    async getInvalidEmailFormatMsgEle() {
        return $(this.locators.invalidEmailFormatMsg);
    }

    async getWrongPasswordLabelEle() {
        return $(this.locators.wrongPasswordLabel);
    }

    async login(username, password) {
        await driver.pause(4000);
        if ((await $(this.locators.profileEle)).isDisplayed()) {
            (await $(this.locators.profileEle)).click();
        }
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
