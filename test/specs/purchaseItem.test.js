const { expect } = require('chai');
const OtpPage = require('../pageobjects/otpPage');
const HomePage = require('../pageobjects/homePage');
const BaseActions = require('../../utilities/actions/baseActions');
const ProductPage = require('../pageobjects/productPage');
const CartPage = require('../pageobjects/cartPage');
const LoginPageUtil = require('../commonFunctions/loginPageUtil');
const jsonData = require("../../resources/productDetails.json")
const credentialsJson = require("../../resources/credentials.json")


describe('My Login application', () => {

    let validCredentials;
    let productDetails;
    let homePage;
    let productPage;
    let cartPage;
    let loginPageUtil;
    let baseActions;
    let otpPage;

    before(async () => {
        validCredentials = credentialsJson.credentialsSets.validCredentials;
        productDetails = jsonData;
        homePage = new HomePage();
        productPage = new ProductPage();
        cartPage = new CartPage();
        loginPageUtil = new LoginPageUtil();
        baseActions = new BaseActions();
        otpPage = new OtpPage();
        await loginPageUtil.login(validCredentials.username, validCredentials.password);
        await otpPage.enterOtp(validCredentials.otp);
    })


    it('Should be able to place a an order with single product', async () => {
        const plusIcon = await homePage.getPlusIconEle();
        await baseActions.horizontalSwipe(plusIcon);

        // Click on explore more
        await homePage.clickExploreButton();

        await driver.pause(10000);
        await productPage.selectProductByName(productDetails[1].productName);

        // Click on add to cart
        await productPage.clickAddToCartButton();
        await productPage.clickGoToCartButton();
        await cartPage.clickPlaceOrderButton();

        // Wait for order confirmation label to be displayed and get the text
        const orderMsgElement = await cartPage.getOrderConfirmationLabelEle();
        await orderMsgElement.waitForDisplayed({ timeout: 10000 });
        const orderMsg = await orderMsgElement.getText();
        expect(orderMsg).to.contain('Your order has been confirmed');

    })
})