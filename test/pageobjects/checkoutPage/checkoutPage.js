const LOGGER = require("../../../utilities/customLogger/loggerHelper");
const BasePage = require("../base/basePage");


class CheckoutPage extends BasePage {

    locators = {
        deleteIcon: 'id:com.ultralesson.ulshopify:id/icon-delete',
        plusIcon: 'id:com.ultralesson.ulshopify:id/btn-increment',
        minusIcon: 'id:com.ultralesson.ulshopify:id/btn-decrement',
        placeOrder: 'id:com.ultralesson.ulshopify:id/txt-place-order',
        totalPrice: 'id:com.ultralesson.ulshopify:id/txt-basket-total',
        orderConfirmationLabel: 'id:com.ultralesson.ulshopify:id/txt-confirmed-order',
        continueShoppingButton: 'id:com.ultralesson.ulshopify:id/txt-continue-shopping',
        orderDetailsButton: 'id:com.ultralesson.ulshopify:id/txt-order-details',
        productNames: "id:com.ultralesson.ulshopify:id/txt-product-name",
        emptyCartMsg: "id:com.ultralesson.ulshopify:id/txt-empty-cart-message",

    }

    async getTotalPriceEle() {
        return this.getElement(this.locators.totalPrice);
    }

    async getPlaceOrderEle() {
        return this.getElement(this.locators.placeOrder);
    }

    async getOrderConfirmationLabelEle() {
        return this.getElement(this.locators.orderConfirmationLabel);
    }

    async getEmptyCartMsgText() {
        return this.getText(this.locators.emptyCartMsg);
    }

    async clickPlaceOrderButton() {
        await driver.pause(4000);
        await this.waitForDisplayed(await this.getPlaceOrderEle());
        await this.click(await this.getPlaceOrderEle());
    }

    async emptyCart() {
        try {
            let isCartEmpty = await this.isCartEmpty();
            while (!isCartEmpty) {
                await this.click(this.locators.deleteIcon);
                await driver.pause(2000);
                isCartEmpty = await this.isCartEmpty();
                if (isCartEmpty) {
                    break;
                }
            }
        } catch (error) {
            LOGGER.error("Error while emptying cart:", error);
            throw error;
        }
    }


    async isCartEmpty() {
        try {
            const cartItems = await this.getElements(this.locators.productNames);
            return cartItems.length === 0
        } catch (error) {
            LOGGER.error("Error while checking if cart is empty:", error);
            throw error;
        }
    }

}

module.exports = CheckoutPage;