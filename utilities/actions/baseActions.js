




class BaseActions {


    async horizontalSwipe(element, maxScrollAttempts = 5) {
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
    
                const startX = 200;
                const endX = 800;
                const startY = 500;
    
                await driver.touchAction([
                    { action: 'press', x: endX, y: startY },
                    { action: 'wait', ms: 500 },
                    { action: 'moveTo', x: startX, y: startY },
                    { action: 'release' }
                ]);
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
    
}


module.exports = new BaseActions();
