const { expect } = require('chai');
const OtpPage = require('../../pageobjects/loginPage/otpPage');
const HomePage = require('../../pageobjects/homePage/homePage');
const ProductPage = require('../../pageobjects/productPage/productPage');
const CheckoutPage = require('../../pageobjects/checkoutPage/checkoutPage');
const LoginPageUtil = require('../../commonFunctions/loginPageUtil');
const jsonData = require("../../../resources/productDetails.json")
const credentialsJson = require("../../../resources/credentials.json")
const LOGGER = require('../../../utilities/customLogger/loggerHelper');
const ExploreProductsPage = require('../../pageobjects/explorePage/exploreProductsPage')

describe('Emptying the Cart', () => {

    let validCredentials;
    let homePage;
    let productPage;
    let checkoutPage;
    let loginPageUtil;
    let otpPage;
    let exploreProductsPage

    const specName = 'Empty Cart';
    before(async () => {
        // Arrange
        validCredentials = credentialsJson.credentialsSets.validCredentials;
        productDetails = jsonData;
        homePage = new HomePage();
        productPage = new ProductPage();
        checkoutPage = new CheckoutPage();
        loginPageUtil = new LoginPageUtil();
        otpPage = new OtpPage();
        exploreProductsPage = new ExploreProductsPage();
        await loginPageUtil.login(validCredentials.username, validCredentials.password);
        await loginPageUtil.enterOtpAndClickOnVerifyButton(validCredentials.otp);
        LOGGER.initialize(specName);
    })


    it('Should remove the items from a non-empty cart', async () => {

        try {
            // Act
            await homePage.clickOnExploreMoreButton(HomePage.sectionType.newArrivals);
            await exploreProductsPage.clickOnProduct('Elegant Suite');
            await productPage.clickAddToCartButton();
            await productPage.clickBackButton();
            await homePage.clickOnExploreMoreButton(HomePage.sectionType.topRatedProducts);
            await exploreProductsPage.clickOnProduct('Winter Thermal Jacket');
            await productPage.clickAddToCartButton();
            await productPage.clickGoToCartButton();
            await checkoutPage.emptyCart();

            // Assert
            const emptyCartMsgText = await checkoutPage.getEmptyCartMsgText();
            expect(emptyCartMsgText).to.equal('Your Cart is Empty!!');

        } catch (error) {
            LOGGER.error('An error occurred during the test:', error);
            throw error;
        }
    })
})