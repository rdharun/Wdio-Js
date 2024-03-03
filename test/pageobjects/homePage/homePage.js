const { XpathUtil } = require("../../../utilities/common/xpathUtils");
const BasePage = require("../base/basePage");
const LOGGER = require("../../../utilities/customLogger/loggerHelper")



class HomePage extends BasePage {

    locators = {
        welcomeBackEle: "id:com.ultralesson.ulshopify:id/txt-welcome-back",
        profileEle: 'id:com.ultralesson.ulshopify:id/icon-profile',
        userNameEle: "id:com.ultralesson.ulshopify:id/txt-username",
        searchForMoreEle: 'id:com.ultralesson.ulshopify:id/txt-search-for-more',
        searchInput: 'id:com.ultralesson.ulshopify:id/inp-search',
        productName: 'id:com.ultralesson.ulshopify:id/txt-product-name',
        plusIcon: 'id:com.ultralesson.ulshopify:id/icon-plus-circle',
        exploreMore: 'id:com.ultralesson.ulshopify:id/txt-explore-more',
        productsSectionDynamic: "(//android.widget.TextView[@text='##PLACEHOLDER##']/parent::*/parent::*/child::*)[3]",
        footer: "id:com.ultralesson.ulshopify:id/txt-footer",
        bestSellersTitle: "//android.widget.TextView[@text='Best Sellers']",

    }

    static sectionType = {
        newArrivals: "New Arrivals",
        trendingProducts: "Trending Products",
        topRatedProducts: "Top-Rated Products",
        bestSellers: "Best Sellers"
    }

    async getUserNameEle() {
        return this.getElement(this.locators.userNameEle);
    }

    async getWelcomeBackEle() {
        return this.getElement(this.locators.welcomeBackEle);
    }

    async getProfileEle() {
        return this.getElement(this.locators.profileEle);
    }

    async getPlusIconEle() {
        return this.getElement(this.locators.plusIcon);
    }

    async getExploreMoreEle() {
        return this.getElement(this.locators.exploreMore);
    }

    async clickOnExploreMoreButton(sectionType) {
        try {
            switch (sectionType) {
                case HomePage.sectionType.newArrivals:
                    await this.swipeHorizontalOnSectionTillElement(XpathUtil.getPlaceholderReplaced(this.locators.productsSectionDynamic, sectionType), this.locators.exploreMore);
                    break;
                case HomePage.sectionType.trendingProducts:
                    await this.swipeHorizontalOnSectionTillElement(XpathUtil.getPlaceholderReplaced(this.locators.productsSectionDynamic, sectionType), this.locators.exploreMore);
                    break;
                case HomePage.sectionType.topRatedProducts:
                    await this.swipeTillElement(this.locators.bestSellersTitle);
                    await this.swipeHorizontalOnSectionTillElement(XpathUtil.getPlaceholderReplaced(this.locators.productsSectionDynamic, sectionType), this.locators.exploreMore);
                    break;
                case HomePage.sectionType.bestSellers:
                    await this.swipeTillElement(this.locators.footer);
                    await this.swipeHorizontalOnSectionTillElement(XpathUtil.getPlaceholderReplaced(this.locators.productsSectionDynamic, sectionType), this.locators.exploreMore);
                    break;
                default: throw new Error(`Invalid Section: ${sectionType}.`);
            }
            await this.click(this.locators.exploreMore);

        } catch (error) {
            LOGGER.error(`Error while clicking on explore more buttton`);
            throw error;
        }

    }


    async clickExploreButton() {
        await this.waitForDisplayed(this.locators.exploreMore);
        await this.click(this.locators.exploreMore);
    }
}


module.exports = HomePage;
