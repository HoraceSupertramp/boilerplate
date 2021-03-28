import {NightwatchBrowser} from "nightwatch";

export default {
    'try the thing': (browser: NightwatchBrowser) => {
        browser
            .url('https://localhost:8080/')
            .waitForElementVisible('body')
            .assert.elementPresent('#root')
            .end();
    }
}