const { expect } = require('chai');
const LoginPage = require('../../pageobjects/loginPage');
const OtpPage = require('../../pageobjects/otpPage');
const HomePage = require('../../pageobjects/homePage');
const LogoutPage = require('../../pageobjects/logutPage');


describe('My Login application', () => {

    it('should display the error message for blank email and password field', async () => {
        await LoginPage.login('', '');
        const emailErrMsg = await (await LoginPage.getEmailFieldErrMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email field cannot be empty');

        const passErrMsg = await (await LoginPage.getPasswordFieldErrMsgEle()).getText();
        expect(passErrMsg).to.equal('Password field cannot be empty');
    })

    it('should display error message for wrong password', async () => {
        await LoginPage.login('ulshopify@ultralesson.com', 'invalid');

        const passErrMsg = await (await LoginPage.getWrongPasswordLabelEle()).getText();
        expect(passErrMsg).to.equal('Password is wrong');
    })

    it('should display error message for invalid email format', async () => {
        await LoginPage.login('invalidemail', '12345');

        const emailErrMsg = await (await LoginPage.getInvalidEmailFormatMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email format is incorrect');
    })
})