const { expect } = require('chai');
const OtpPage = require('../../pageobjects/otpPage');
const HomePage = require('../../pageobjects/homePage');
const ProfilePage = require('../../pageobjects/profilePage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/credentials.json")



describe('My Login application', () => {

    let validCredentials;

    before(async () => {
        validCredentials = jsonData.credentialsSets.validCredentials;
    });

    afterEach(async () => {
        await ProfilePage.logout();
    })


    it('should login with valid credentials', async () => {

        await LoginPageUtil.login(validCredentials.username, validCredentials.password);
        await OtpPage.enterOtp(validCredentials.otp);
        const userNameText = await (await HomePage.getUserNameEle()).getText();
        expect(userNameText).to.equal('Jack Sparrow');
    })

})