const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    await openBrowser();
    await goto("https://www.facebook.com/");
    await click($("//a[@data-testid='open-registration-form-button']"))
    await write("latha", into(textBox("First Name")))
    
    //await closeBrowser();
})();

//direct with taiko
/*
[PASS] Browser opened
> goto("https://www.facebook.com")
[PASS] Navigated to URL https://www.facebook.com
> click("Create New Account")
[PASS] Clicked element matching text "Create New Account"  1 times
> write("latha", into(textBox("Email address or phone number")))
[PASS] Wrote latha into the textBox with label Email address or phone number
> write("mypassword", into(textBox("Password")))
[PASS] Wrote ***** into the textBox with label Password
> click("Log In")
[PASS] Clicked element matching text "Log In"  1 times
> write("latha", into(textBox({id:"email"})))
[PASS] Wrote latha into the textBox[id="email"]
> write("latha", into(textBox({class:"inputtext _55r1 _6luy"})))
[PASS] Wrote latha into the textBox[class*="inputtext _55r1 _6luy"]
> write("latha", into(textBox({data-testid:"royal_email"})))
Uncaught Unexpected token, expected "," (1:48)
> Uncaught Unexpected token '-'
> write("latha", into(textBox({data-testid:"royal_email"})))
Uncaught Unexpected token, expected "," (1:48)
> Uncaught Unexpected token '-'
> write("latha", into(textBox({xpath:"//input[@id='email']"})))
[FAIL] Error: TextBox[xpath="//input[@id='email']"] not found, run `.trace` for more info.
> write("latha", into(textBox(${"//input[@id='email']"})))
Uncaught Unexpected token, expected "," (1:44)
> Uncaught missing ) after argument list
> write("latha", into(${"//input[@id='email']"}))
Uncaught Unexpected token, expected "," (1:36)
> Uncaught missing ) after argument list
>
*/