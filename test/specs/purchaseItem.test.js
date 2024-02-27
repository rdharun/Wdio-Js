const { expect } = require('chai');
const OtpPage = require('../pageobjects/otpPage');
const HomePage = require('../pageobjects/homePage');
const BaseActions = require('../../utilities/actions/baseActions');
const ProductPage = require('../pageobjects/productPage');
const CartPage = require('../pageobjects/cartPage');
const DataLoader = require('../../utilities/file/dataLoder')
const LoginPageUtil = require('../commonFunctions/loginPageUtil');


describe('My Login application', () => {

    let credentialsData;
    let productDetails;

    before(async () => {
        credentialsData = DataLoader.loadData('credentials.json');
        productDetails = DataLoader.loadData('productDetails.json');

        const validCredentials = credentialsData.credentialsSets.validCredentials;
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