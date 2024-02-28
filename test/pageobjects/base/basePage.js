

class BasePage {

    async getElement(selector) {
        return await $(selector);
    }

    async getElements(selector) {
        if (typeof selector !== 'string' || !selector) {
            throw new Error('Invalid selector provided');
        }
        return await $$(selector);
    }

    async click(selector) {
        const element = await this.getElement(selector);
        // await element.waitForDisplayed({ timeoutMsg: 'Element not displayed for click action' });
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
        const element = await this.getElement(selector);
        // await element.waitForDisplayed({ timeoutMsg: 'Element not displayed' });
        return element.isDisplayed();
    }

    async getText(selector) {
        const element = await this.getElement(selector);
        return await element.getText();
    }

    async waitForDisplayed(selector) {
        const element = await this.getElement(selector);
        return await element.waitForDisplayed({timeoutMsg: 'Element not displayed' });
    }
}

module.exports = BasePage;