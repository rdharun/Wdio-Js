



class ProductPage {

    locators = {
        productTitle: 'id:com.ultralesson.ulshopify:id/txt-product-title',
        addToCartButton: 'id:com.ultralesson.ulshopify:id/txt-add-to-cart',
        goToCartButton: 'id:com.ultralesson.ulshopify:id/txt-go-to-cart'
    }


    async getProductTitle() {
        return $$(this.locators.productTitle);
    }

    async getAddToCartButtonEle() {
        return $(this.locators.addToCartButton);
    }

    async getGoToCartButtonEle() {
        return $(this.locators.goToCartButton);
    }

    async clickGoToCartButton() {
        (await $(this.locators.goToCartButton)).click();
    }

    async clickAddToCartButton() {
        (await $(this.locators.addToCartButton)).click();
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

module.exports = new ProductPage();
