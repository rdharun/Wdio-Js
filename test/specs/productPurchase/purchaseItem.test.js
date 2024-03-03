const { expect } = require('chai');
const OtpPage = require('../../pageobjects/loginPage/otpPage');
const HomePage = require('../../pageobjects/homePage/homePage');
const ProductPage = require('../../pageobjects/productPage/productPage');
const CheckoutPage = require('../../pageobjects/checkoutPage/checkoutPage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/productDetails.json")
const credentialsJson = require("../../../resources/credentials.json")
const PaymentPage = require('../../pageobjects/paymentPage/paymentPage');
const LOGGER = require('../../../utilities/customLogger/loggerHelper');

describe('My Login application', () => {

    let validCredentials;
    let productDetails;
    let homePage;
    let productPage;
    let checkoutPage;
    let loginPageUtil;
    let otpPage;
    let paymentPage;

    const specName = 'E2E Purchase';
    before(async () => {
        // Arrange
        validCredentials = credentialsJson.credentialsSets.validCredentials;
        productDetails = jsonData;
        homePage = new HomePage();
        productPage = new ProductPage();
        checkoutPage = new CheckoutPage();
        loginPageUtil = new LoginPageUtil();
        otpPage = new OtpPage();
        paymentPage = new PaymentPage();
        await loginPageUtil.login(validCredentials.username, validCredentials.password);
        await otpPage.enterOtp(validCredentials.otp);
        LOGGER.initialize(specName);
    })

    afterEach(async () => {
        await loginPageUtil.logout();
    })



    it('Should be able to place a an order with single product', async () => {

        try {

            // Act
            // Click on explore more
            await homePage.clickOnExploreMoreButton(HomePage.sectionType.newArrivals);

            await driver.pause(10000);
            await productPage.selectProductByName(productDetails[1].productName);

            // Click on add to cart
            await productPage.clickAddToCartButton();
            await productPage.clickGoToCartButton();
            await checkoutPage.clickPlaceOrderButton();

            // Assert
            // Wait for order confirmation label to be displayed and get the text
            const orderMsgElement = await paymentPage.getOrderConfirmationLabelEle();
            expect(orderMsgElement).to.contain('Your order has been confirmed');
            await paymentPage.clickContinueShoppingButton();
            await driver.pause(2000);
        } catch (error) {
            LOGGER.error('An error occurred during the test:', error);
            throw error;
        }

    })
})