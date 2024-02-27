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

    before(async () => {
        validCredentials = credentialsJson.credentialsSets.validCredentials;
        productDetails = jsonData;
        await LoginPageUtil.login(validCredentials.username, validCredentials.password);
        await OtpPage.enterOtp(validCredentials.otp);
    })


    it('Should be able to place a an order with single product', async () => {
        const plusIcon = await HomePage.getPlusIconEle();
        await BaseActions.horizontalSwipe(plusIcon);

        // Click on explore more
        await HomePage.clickExploreButton();

        await driver.pause(10000);
        await ProductPage.selectProductByName(productDetails[1].productName);

        // Click on add to cart
        await ProductPage.clickAddToCartButton();
        await ProductPage.clickGoToCartButton();
        await CartPage.clickPlaceOrderButton();

        // Wait for order confirmation label to be displayed and get the text
        const orderMsgElement = await CartPage.getOrderConfirmationLabelEle();
        await orderMsgElement.waitForDisplayed({ timeout: 10000 });
        const orderMsg = await orderMsgElement.getText();
        expect(orderMsg).to.contain('Your order has been confirmed');

    })
})