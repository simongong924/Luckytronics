module.exports = {
  'get to login page': (browser) => {
    browser
      // Load the page at the launch URL
      .url(browser.launchUrl)

    browser.assert.urlContains('local');
  },
  'logging in': (browser) => {},
  'logging out': (browser) => {},
  'close': (browser) => {},
}
