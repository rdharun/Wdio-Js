const BasePage = require("./base/basePage");




class HomePage extends BasePage {

    locators = {
        profileEle: `#icon-profile`,
        userNameEle: "id:com.ultralesson.ulshopify:id/txt-username",
        searchForMoreEle: 'id:com.ultralesson.ulshopify:id/txt-search-for-more',
        searchInput: 'id:com.ultralesson.ulshopify:id/inp-search',
        productName: 'id:com.ultralesson.ulshopify:id/txt-product-name',
        plusIcon: 'id:com.ultralesson.ulshopify:id/icon-plus-circle',
        exploreMore: 'id:com.ultralesson.ulshopify:id/txt-explore-more'
    }

    async getUserNameEle() {
        return this.getElement(this.locators.userNameEle);
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


    async clickExploreButton() {
        await this.waitForDisplayed(this.locators.exploreMore);
        await this.click(this.locators.exploreMore);
    }
}


module.exports = HomePage;
