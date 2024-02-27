

class CartPage {

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
        return $(this.locators.totalPrice);
    }

    async getPlaceOrderEle() {
        return $(this.locators.placeOrder);
    }

    async getOrderConfirmationLabelEle() {
        return $(this.locators.orderConfirmationLabel);
    }

    async clickPlaceOrderButton() {
        await (await this.getPlaceOrderEle()).waitForDisplayed({ timeout: 10000 });
        (await this.getPlaceOrderEle()).click();
    }

}

module.exports = CartPage;