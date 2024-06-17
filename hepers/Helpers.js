class Helpers {

    async clickAndWait(selector, waitTime) {
        const element = await $(selector);
        await element.click();
        await browser.pause(waitTime);
    }

    async clickAndSetValue(selector, value) {
        const element = await $(selector);
        await element.setValue(value);
    }

    async scrollUntilButtonPresented(strategy, selector) {
        await browser.execute('mobile: scroll', {
            strategy: strategy, 
            selector: selector, 
            direction: 'down',
          });
    }
}

module.exports = new Helpers();