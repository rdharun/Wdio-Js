

const { XpathUtil } = require('../../../utilities/common/xpathUtils');
const BasePage = require('../base/basePage');




class OtpPage extends BasePage {

    locators = {
        otp: 'id:com.ultralesson.ulshopify:id/inp-opt-##PLACEHOLDER##',
        verifyButton: 'id:com.ultralesson.ulshopify:id/txt-verify'
    }

    async getOtpEle(index) {
        return this.getElement(XpathUtil.getPlaceholderReplaced(this.locators.otp, index));
    }

    async enterOtp(otp) {
        const otpElements = [
            await this.getOtpEle(1),
            await this.getOtpEle(2),
            await this.getOtpEle(3),
            await this.getOtpEle(4)
        ];

        for (let i = 0; i < otpElements.length; i++) {
            await otpElements[i].addValue(otp.charAt(i));
        }
    }

    async clickOnVerifyButton() {
        await this.waitForDisplayed(this.locators.verifyButton);
        await this.click(this.locators.verifyButton);
        await driver.pause(4000);
    }
}

module.exports = OtpPage;
