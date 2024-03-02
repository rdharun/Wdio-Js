const { expect } = require('chai');
const OtpPage = require('../../pageobjects/otpPage');
const HomePage = require('../../pageobjects/homePage');
const BaseActions = require('../../../utilities/actions/baseActions');
const ProductPage = require('../../pageobjects/productPage');
const CheckoutPage = require('../../pageobjects/checkoutPage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/productDetails.json")
const credentialsJson = require("../../../resources/credentials.json")
const PaymentPage = require('../../pageobjects/paymentPage');

describe('My Login application', () => {

    let validCredentials;
    let productDetails;
    let homePage;
    let productPage;
    let checkoutPage;
    let loginPageUtil;
    let baseActions;
    let otpPage;
    let paymentPage;

    before(async () => {
        validCredentials = credentialsJson.credentialsSets.validCredentials;
        productDetails = jsonData;
        homePage = new HomePage();
        productPage = new ProductPage();
        checkoutPage = new CheckoutPage();
        loginPageUtil = new LoginPageUtil();
        baseActions = new BaseActions();
        otpPage = new OtpPage();
        paymentPage = new PaymentPage();
        await loginPageUtil.login(validCredentials.username, validCredentials.password);
        await otpPage.enterOtp(validCredentials.otp);
    })

    afterEach(async () => {
        await loginPageUtil.logout();
    })



    it('Should be able to place a an order with single product', async () => {
     
        // Click on explore more
        await homePage.clickOnExploreMoreButton(HomePage.sectionType.newArrivals);

        await driver.pause(10000);
        await productPage.selectProductByName(productDetails[1].productName);

        // Click on add to cart
        await productPage.clickAddToCartButton();
        await productPage.clickGoToCartButton();
        await checkoutPage.clickPlaceOrderButton();

        // Wait for order confirmation label to be displayed and get the text
        const orderMsgElement = await paymentPage.getOrderConfirmationLabelEle();
        expect(orderMsgElement).to.contain('Your order has been confirmed');
        await paymentPage.clickContinueShoppingButton();
        await driver.pause(2000)

    })
})