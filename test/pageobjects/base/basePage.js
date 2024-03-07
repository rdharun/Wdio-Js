
const SwipeUtils = require('../../../utilities/actions/swipeUtils');

class BasePage {

    swipeUtils;

    constructor() {
        this.swipeUtils = new SwipeUtils();
    }

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

    async waitForElementDisplayed(element, timeout, ignoreIfNotDisplayed = false) {
        try {
            if (typeof element === 'string') {
                await (await this.getElement(element)).waitForDisplayed({ timeout });
            } else {
                await element.waitForDisplayed({ timeout });
            }
            return true;
        } catch (error) {
            if (!ignoreIfNotDisplayed) {
                throw new Error(`element ${element} not displayed even after waiting ${timeout}`);
            } else {
                return false;
            }
        }
    }

    async swipeTillElement(element, maxScrollAttempts = 5) {
        let elementFound = false;
        element = await this.getElement(element);
    
        let isElementDisplayed = false;
        try {
            for (let attempt = 0; attempt < maxScrollAttempts; attempt++) {
                isElementDisplayed = await element.isDisplayed();
                if (isElementDisplayed) {
                    elementFound = true;
                    break;
                }
                await this.swipeUtils.swipeByPercentage();
            }
            if (!elementFound) console.warn(`Element not found after ${maxScrollAttempts} swipe attempts.`);
    
            return elementFound;
        } catch (err) {
            console.error(`Error performing swipe: \n${err.stack}`);
            throw err;
        }
    }

    async swipeHorizontalOnSectionTillElement(section, element, maxScrollAttempts = 5) {
        let elementFound = false;
    
        try {
            section = await this.getElement(section);
            element = await this.getElement(element);
    
            // await this.swipeTillElement(section);
            await this.waitForDisplayed(section);
            const elementSize = await section.getSize();
            const elementLocation = await section.getLocation();
    
            const y = elementLocation.y + (elementSize.height * 0.5);
            const startX = elementLocation.x + (elementSize.width * 0.9);
            const endX = elementLocation.x + (elementSize.width * 0.1);
    
            let isElementDisplayed = false;
            for (let attempt = 0; attempt < maxScrollAttempts; attempt++) {
                isElementDisplayed = await element.isDisplayed();
                if (isElementDisplayed) {
                    elementFound = true;
                    break;
                }
    
                await this.swipeUtils.horizontalSwipe(startX, endX, y, y);
            }
            if (!elementFound) console.warn(`Element not found after ${maxScrollAttempts} swipe attempts.`);
    
            return elementFound;
        } catch (err) {
            console.error(`Error performing horizontal swipe on section.\n${err.stack}`);
            throw err;
        }
    }
}

module.exports = BasePage;