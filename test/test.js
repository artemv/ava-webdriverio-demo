const {remote} = require('webdriverio');
const test = require('ava');

let browser;

test.beforeEach(async () => {
  browser = await remote({
    logLevel: 'trace',
    capabilities: {
      browserName: 'chrome'
    }
  });
});

test.afterEach(async () => {
  await browser.deleteSession();
});

test('main', async (t) => {
  await browser.url('https://duckduckgo.com');

  const inputElem = await browser.$('input.js-search-input');
  await inputElem.setValue('WebdriverIO');

  debugger
  const submitBtn = await browser.$('.search__button');

  await submitBtn.click();
  t.is(true, true);
});
