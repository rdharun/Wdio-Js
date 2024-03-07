const { XpathUtil } = require("../../../utilities/common/xpathUtils");
const LOGGER = require("../../../utilities/customLogger/loggerHelper");
const BasePage = require("../base/basePage");



class ExploreProductsPage extends BasePage {

    locators = {
        productName: "//android.widget.TextView[@text='##PLACEHOLDER##']",
    }


    async clickOnProduct(productName) {
        const productEle = XpathUtil.getPlaceholderReplaced(this.locators.productName, productName)
        await this.swipeTillElement(productEle);
        await this.click(productEle);
    }
}

module.exports = ExploreProductsPage;