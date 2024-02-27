const { expect } = require('chai');
const LoginPage = require('../../pageobjects/loginPage');
const DataLoader = require('../../../utilities/file/dataLoder')
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');


describe('My Login application', () => {

    let credentialsData;

    before(async () => {
        credentialsData = DataLoader.loadData('credentials.json');
    });


    it('should display the error message for blank email and password field', async () => {
        await LoginPageUtil.login('', '');
        const emailErrMsg = await (await LoginPage.getEmailFieldErrMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email field cannot be empty');

        const passErrMsg = await (await LoginPage.getPasswordFieldErrMsgEle()).getText();
        expect(passErrMsg).to.equal('Password field cannot be empty');
    })

    it('should display error message for wrong password', async () => {
        const { username, password } = credentialsData.credentialsSets.invalidPassword;

        await LoginPageUtil.login(username, password);

        const passErrMsg = await (await LoginPage.getWrongPasswordLabelEle()).getText();
        expect(passErrMsg).to.equal('Password is wrong');
    })

    it('should display error message for invalid email format', async () => {
        const { username, password } = credentialsData.credentialsSets.invalidCredentials;
        await LoginPageUtil.login(username, password);

        const emailErrMsg = await (await LoginPage.getInvalidEmailFormatMsgEle()).getText();
        expect(emailErrMsg).to.equal('Email format is incorrect');
    })
})