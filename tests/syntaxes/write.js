const { openBrowser, goto, textBox, into, write, clear, $, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.facebook.com");
        ;
        ;
        await write("latha", into(textBox("Email address or phone number")));
        await clear();
        await write("latha", into(textBox({id:"email"})));
        clear;
        await clear();
        await write("latha", into(textBox({class:"inputtext _55r1 _6luy"})));
        await clear();
        await write("latha",$("//input[@id='email']")); //using xpath, same syntax for css as well
        await clear();
        //await closeBrowser();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();

//execute this file directly using taiko commands :::::::::::  npx taiko write.js --observe