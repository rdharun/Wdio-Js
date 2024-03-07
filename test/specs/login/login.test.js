const { expect } = require('chai');
const OtpPage = require('../../pageobjects/loginPage/otpPage');
const HomePage = require('../../pageobjects/homePage/homePage');
const ProfilePage = require('../../pageobjects/profilePage/profilePage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/credentials.json")
const LOGGER = require('../../../utilities/customLogger/loggerHelper');


describe('My Login application', () => {


    let homePage;
    let profilePage;
    let otpPage;
    let loginPageUtil;
    let validCredentials;

    const specName = 'Test_login_scenarios';
    before(async () => {
        // Arrange
        homePage = new HomePage();
        profilePage = new ProfilePage();
        otpPage = new OtpPage();
        loginPageUtil = new LoginPageUtil();
        validCredentials = jsonData.credentialsSets.validCredentials;
        LOGGER.initialize(specName);
    });

    afterEach(async () => {
        await loginPageUtil.logout();
    })


    it('should login with valid credentials', async () => {
        try {
            LOGGER.info('starting the test')

            // Act
            await loginPageUtil.login(validCredentials.username, validCredentials.password);
            await loginPageUtil.enterOtpAndClickOnVerifyButton(validCredentials.otp);
            const userNameText = await (await homePage.getUserNameEle()).getText();

            // Assert
            expect(userNameText).to.equal('Jack Sparrow');
            LOGGER.info('ending the test');
        } catch (error) {
            LOGGER.error('An error occurred during the test:', error);
            throw error;
        }

    })

})