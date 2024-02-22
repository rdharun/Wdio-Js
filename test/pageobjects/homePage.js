



class HomePage {

    locators = {
        profileEle: "id:com.ultralesson.ulshopify:id/icon-profile",
        userNameEle: "id:com.ultralesson.ulshopify:id/txt-username",
        searchForMoreEle: 'id:com.ultralesson.ulshopify:id/txt-search-for-more',
        searchInput: 'id:com.ultralesson.ulshopify:id/inp-search',
        productName: 'id:com.ultralesson.ulshopify:id/txt-product-name',
        plusIcon: 'id:com.ultralesson.ulshopify:id/icon-plus-circle',
        exploreMore: 'id:com.ultralesson.ulshopify:id/txt-explore-more'
    }

    async getUserNameEle() {
        return await $(this.locators.userNameEle)
    }

    async getProfileEle() {
        return await $(this.locators.profileEle);
    }

    async getPlusIconEle() {
        return await $(this.locators.plusIcon);
    }

    async getExploreMoreEle() {
        return await $(this.locators.exploreMore);
    }


    async clickExploreButton() {
        (await $(this.locators.exploreMore)).waitForDisplayed();
        (await $(this.locators.exploreMore)).click();
    }
}


module.exports = new HomePage();
