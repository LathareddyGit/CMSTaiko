const { openBrowser, goto, click, $, button, goBack, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.facebook.com");
        await click("Create New Account");
        await click($("//img[@class='_8idr img']"));
        await click(button({'name':'login'}));
        await goBack();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

//execute this file directly using taiko commands :::::::::::  npx taiko click.js --observe