const { expect } = require('chai');
const LoginPage = require('../pageobjects/loginPage');
const OtpPage = require('../pageobjects/otpPage');
const HomePage = require('../pageobjects/homePage');


describe('My Login application', () => {

    before(async() => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
    })

    it('should be able to place a an order with single product', async () => {
   
        
    })
})