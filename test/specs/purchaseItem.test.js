const { expect } = require('chai');
const LoginPage = require('../pageobjects/loginPage');
const OtpPage = require('../pageobjects/otpPage');
const HomePage = require('../pageobjects/homePage');
const BaseActions = require('../../utilities/actions/baseActions');
const productDetailsJson = require('../resource/testData/productDetails.json');
const FileUtils = require('../../utilities/file/fileUtils');
const ProductPage = require('../pageobjects/productPage');
const CartPage = require('../pageobjects/cartPage');



const productDetailsList = FileUtils.convertJsonToCustomType(productDetailsJson);



describe('My Login application', () => {

    before(async () => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
    })


    it('Should be able to place a an order with single product', async () => {
        const plusIcon = await HomePage.getPlusIconEle();
        await BaseActions.horizontalSwipe(plusIcon);

        // Click on explore more
        await HomePage.clickExploreButton();

        await driver.pause(10000)
        await ProductPage.selectProductByName(productDetailsList[1].productName);

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