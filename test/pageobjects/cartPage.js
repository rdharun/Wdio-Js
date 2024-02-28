const BasePage = require("./base/basePage");


class CartPage extends BasePage {

    locators = {
        deleteIcon: 'id:com.ultralesson.ulshopify:id/icon-delete',
        plusIcon: 'id:com.ultralesson.ulshopify:id/btn-increment',
        minusIcon: 'id:com.ultralesson.ulshopify:id/btn-decrement',
        placeOrder: 'id:com.ultralesson.ulshopify:id/txt-place-order',
        totalPrice: 'id:com.ultralesson.ulshopify:id/txt-basket-total',
        orderConfirmationLabel: 'id:com.ultralesson.ulshopify:id/txt-confirmed-order',
        continueShoppingButton: 'id:com.ultralesson.ulshopify:id/txt-continue-shopping',
        orderDetailsButton: 'id:com.ultralesson.ulshopify:id/txt-order-details'
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

    async clickPlaceOrderButton() {
        await driver.pause(4000);
        await this.waitForDisplayed(await this.getPlaceOrderEle());
        await this.click(await this.getPlaceOrderEle());
    }

}

module.exports = CartPage;