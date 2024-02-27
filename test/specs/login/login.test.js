    const { expect } = require('chai');
    const OtpPage = require('../../pageobjects/otpPage');
    const HomePage = require('../../pageobjects/homePage');
    const ProfilePage = require('../../pageobjects/profilePage');
    const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
    const jsonData = require("../../../resources/credentials.json")
    const Logger = require('../../../utilities/customLogger/loggerHelper');


    describe('My Login application', () => {


        let homePage;
        let profilePage;
        let otpPage;
        let loginPageUtil;
        let validCredentials;
        let LOGGER;

        const specName = 'Test_login_scenarios';
        before(async () => {
            homePage = new HomePage();
            profilePage = new ProfilePage();
            otpPage = new OtpPage();
            loginPageUtil = new LoginPageUtil();
            validCredentials = jsonData.credentialsSets.validCredentials;
            LOGGER = new Logger(specName);
        });

        afterEach(async () => {
            await loginPageUtil.logout();
        })


        it('should login with valid credentials', async () => {
            try {
                LOGGER.info('starting the test')
                await loginPageUtil.login(validCredentials.username, validCredentials.password);
                await otpPage.enterOtp(validCredentials.otp);
                const userNameText = await (await homePage.getUserNameEle()).getText();
                expect(userNameText).to.equal('Jack Sparrow');
                LOGGER.info('ending the test');
            } catch (error) {
                LOGGER.error('An error occurred during the test:', error);
                throw error;
            }
        
        })

    })