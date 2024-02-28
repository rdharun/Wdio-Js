

class BasePage {

    async getElement(selector) {
        return await $(selector);
    }

    async getElements(selector) {
        return await $$(selector);
    }

    async click(selector) {
        const element = await this.getElement(selector);
        await element.click();
    }

    async setValue(selector, value) {
        const element = await this.getElement(selector);
        await element.setValue(value);
    }

    async clearText(selector) {
        const element = await this.getElement(selector);
        await element.clearValue();
    }

    async isDisplayed(selector) {
        try {
            const element = await this.getElement(selector);
            return await element.isDisplayed();
        } catch (error) {
            console.error(`Error occurred while checking if element is displayed: ${error}`);
            return false;
        }
    }

    async getText(selector) {
        const element = await this.getElement(selector);
        return await element.getText();
    }

    async waitForDisplayed(selector) {
        const element = await this.getElement(selector);
        return await element.waitForDisplayed({ timeoutMsg: 'Element not displayed' });
    }
}

module.exports = BasePage;