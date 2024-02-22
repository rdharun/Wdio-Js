const { expect } = require('chai');
const LoginPage = require('../../pageobjects/loginPage');
const OtpPage = require('../../pageobjects/otpPage');
const HomePage = require('../../pageobjects/homePage');
const LogoutPage = require('../../pageobjects/logutPage');


describe('My Login application', () => {

    afterEach(async () => {
        await LogoutPage.logout();
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
        const userNameText = await (await HomePage.getUserNameEle()).getText();
        expect(userNameText).to.equal('Jack Sparrow');
    })

})