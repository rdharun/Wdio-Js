const { expect } = require('chai');
const LoginPage = require('../pageobjects/loginPage');
const OtpPage = require('../pageobjects/otpPage');
const HomePage = require('../pageobjects/homePage');
const BaseActions = require('../../utilities/actions/baseActions');
const productDetailsJson = require('../resource/testData/productDetails.json');
const FileUtils = require('../../utilities/file/fileUtils');
const ProductPage = require('../pageobjects/productPage');
const ProductDetails = require('../resource/customTypes/productDetails')




const productDetailsList = FileUtils.convertJsonToCustomType(productDetailsJson);



describe('My Login application', () => {

    before(async() => {
        await LoginPage.login('ulshopify@ultralesson.com', '12345');
        await OtpPage.enterOtp('0000');
    })

    it('Should be able to place a an order with single product', async () => {
        const plusIcon = await HomePage.getPlusIconEle();
        await BaseActions.horizontalSwipe(plusIcon);
        (await HomePage.getExploreMoreEle()).click();
        await driver.pause(10000);
        await ProductPage.selectProductByName(productDetailsList[1].productName);
        
    })
})