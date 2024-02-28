const BasePage = require("./base/basePage");



class LoginPage extends BasePage {


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
        return this.getElement(this.locators.emailFieldErrMsg);
        // return $(this.locators.emailFieldErrMsg);
    }

    async getPasswordFieldErrMsgEle() {
        return this.getElement(this.locators.passwordFieldErrMsg);
        // return $(this.locators.passwordFieldErrMsg);
    }

    async getInvalidEmailFormatMsgEle() {
        return this.getElement(this.locators.invalidEmailFormatMsg);
    }

    async getWrongPasswordLabelEle() {
        return this.getElement(this.locators.wrongPasswordLabel);
    }

    async enterCredentials(username, password) {
        await this.waitForDisplayed(this.locators.emailInputField);
        await this.setValue(this.locators.emailInputField, username)

        await this.waitForDisplayed(this.locators.passwordInputField);
        await this.setValue(this.locators.passwordInputField, password)
    }

    async clickOnLoginButton() {
        await this.waitForDisplayed(this.locators.loginButton);
        await this.click(this.locators.loginButton);
    }

}


// export default new LoginPage()
module.exports = LoginPage;
