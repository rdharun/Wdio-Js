




class BaseActions {


    async horizontalSwipe(element, maxScrollAttempts = 6) {
        let elementFound = false;

        try {
            if (typeof element === 'string') {
                element = await $(element);
            }

            for (let attempt = 0; attempt < maxScrollAttempts; attempt++) {
                if (await element.isDisplayed()) {
                    elementFound = true;
                    break;
                }

                const startX = 893; 
                const endX = 59; 
                const startY = 1809;

                await driver
                .action('pointer')
                .move({ x: startX, y: startY })
                .down()
                .pause(500)
                .move({ x: endX, y: startY })
                .perform();

            }

            if (!elementFound) {
                console.warn(`Element not found after ${maxScrollAttempts} horizontal swipes.`);
            }

            return elementFound;
        } catch (err) {
            console.error(`Error performing horizontal swipe: \n${err.stack}`);
            throw err;
        }
    }


    async swipe(element, maxScrollAttempts = 5) {
        let elementFound = false;

        try {
            if (typeof element === 'string') {
                element = await $(element);
            }

            for (let attempt = 0; attempt < maxScrollAttempts; attempt++) {
                console.log(`Attempt ${attempt} of ${maxScrollAttempts}`);
                if (await element.isDisplayed()) {
                    elementFound = true;
                    break;
                }

                const startX = 500;
                const startY = 800;
                const endY = 200;

                await driver
                    .action('pointer')
                    .move({ x: startX, y: startY })
                    .down()
                    .pause(500)
                    .move({ x: startX, y: endY })
                    .perform();
            }

            if (!elementFound) {
                console.warn(`Element not found after ${maxScrollAttempts} swipe attempts.`);
            }
        } catch (err) {
            console.error(`Error performing swipe: \n${err.stack}`);
            throw err;
        }
    }



}




module.exports = new BaseActions();
