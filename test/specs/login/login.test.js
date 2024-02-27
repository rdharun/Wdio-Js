const { expect } = require('chai');
const OtpPage = require('../../pageobjects/otpPage');
const HomePage = require('../../pageobjects/homePage');
const ProfilePage = require('../../pageobjects/profilePage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const DataLoader = require('../../../utilities/file/dataLoder')



describe('My Login application', () => {

    let credentialsData;

    before(async () => {
        credentialsData = DataLoader.loadData('credentials.json');
    });

    afterEach(async () => {
        await ProfilePage.logout();
    })


    it('should login with valid credentials', async () => {

        const validCredentials = credentialsData.credentialsSets.validCredentials;
        await LoginPageUtil.login(validCredentials.username, validCredentials.password);
        await OtpPage.enterOtp(validCredentials.otp);
        const userNameText = await (await HomePage.getUserNameEle()).getText();
        expect(userNameText).to.equal('Jack Sparrow');
    })

})