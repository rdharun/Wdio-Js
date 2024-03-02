class SwipeUtils {
    constructor() {
        this.pauseTime = 500;
    }

    async swipe(startX = 500, endX = 500, startY = 800, endY = 200) {
        await driver.action('pointer')
            .move({ duration: 0, x: startX, y: startY })
            .down()
            .pause(this.pauseTime)
            .move({ duration: this.pauseTime, x: endX, y: endY })
            .up({ button: 0 })
            .perform();
    }

    async swipeByPercentage(startPercentage = 80, endPercentage = 20) {
        const screenSize = await driver.getWindowRect();
        const x = screenSize.width * (50 / 100);
        const startY = screenSize.height * (startPercentage / 100);
        const endY = screenSize.height * (endPercentage / 100);

        await this.swipe(x, x, startY, endY);
    }

    async horizontalSwipe(startX = 200, endX = 800, startY = 500, endY = 500) {
        await this.swipe(startX, endX, startY, endY);
    }

    async horizontalSwipeByPercentage() {
        const screenSize = await driver.getWindowRect();
        const startX = screenSize.width - (screenSize.width * 0.1);
        const endX = screenSize.width - (screenSize.width * 0.9);
        const y = screenSize.height * 0.5;

        await this.swipe(startX, endX, y, y);
    }
}

module.exports = SwipeUtils;
