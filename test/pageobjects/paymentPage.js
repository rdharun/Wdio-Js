const BasePage = require("./base/basePage");




class PaymentPage extends BasePage {


    locators = {
        orderConfirmationLabel: 'id:com.ultralesson.ulshopify:id/txt-confirmed-order',
        continueShoppingButton: 'id:com.ultralesson.ulshopify:id/txt-continue-shopping',

    }

    async getOrderConfirmationLabelEle() {
        await this.waitForDisplayed(this.locators.orderConfirmationLabel);
        return (await this.getText(this.locators.orderConfirmationLabel));
    }

    async clickContinueShoppingButton() {
        await this.click(this.locators.continueShoppingButton);
    }

}

module.exports = PaymentPage;