const BasePage = require("../base/basePage");




class ProductPage extends BasePage {

    locators = {
        productTitle: 'id:com.ultralesson.ulshopify:id/txt-product-title',
        addToCartButton: 'id:com.ultralesson.ulshopify:id/txt-add-to-cart',
        goToCartButton: 'id:com.ultralesson.ulshopify:id/txt-go-to-cart'
    }


    async getProductTitle() {
        return this.getElements(this.locators.productTitle);
    }

    async getAddToCartButtonEle() {
        return this.getElement(this.locators.addToCartButton);
    }

    async getGoToCartButtonEle() {
        return this.getElement(this.locators.goToCartButton);
    }

    async clickGoToCartButton() {
        await this.click(this.locators.goToCartButton);
    }

    async clickAddToCartButton() {
        await this.click(this.locators.addToCartButton);
    }

    async findProductElementByName(productName) {
        const allProductElements = await this.getProductTitle();
        return allProductElements.find(async (element) => {
            const elementName = await element.getText();
            return elementName === productName;
        });
    }

    async selectProductByName(productName) {
        const productElement = await this.findProductElementByName(productName);
        if (productElement) {
            await productElement.click();
        } else {
            throw new Error(`Product not found: ${productName}`);
        }
    }
}

module.exports = ProductPage;
