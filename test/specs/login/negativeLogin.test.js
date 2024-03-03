const { expect } = require('chai');
const LoginPage = require('../../pageobjects/loginPage/loginPage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/credentials.json")



describe('My Login application', () => {

    let loginPageUtil;
    let loginPage

    before(async () => {
        // Arrange
        loginPageUtil = new LoginPageUtil();
        loginPage = new LoginPage();
    })


    it('should display the error message for blank email and password field', async () => {
        // Act
        await loginPageUtil.login('', '');

        // Assert
        const emailErrMsg = await (await loginPage.getEmailFieldErrMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email field cannot be empty');

        const passErrMsg = await (await loginPage.getPasswordFieldErrMsgEle()).getText();
        expect(passErrMsg).to.equal('Password field cannot be empty');
    })

    it('should display error message for wrong password', async () => {
        // Arrange
        const { username, password } = jsonData.credentialsSets.invalidPassword;

        // Act
        await loginPageUtil.login(username, password);

        // Assert
        const passErrMsg = await (await loginPage.getWrongPasswordLabelEle()).getText();
        expect(passErrMsg).to.equal('Password is wrong');
    })

    it('should display error message for invalid email format', async () => {
        // Arrange
        const { username, password } = jsonData.credentialsSets.invalidCredentials;

        // Act
        await loginPageUtil.login(username, password);

        // Assert
        const emailErrMsg = await (await loginPage.getInvalidEmailFormatMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email format is incorrect');
    })
})