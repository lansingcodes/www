module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#page-top', 5000)
      .assert.elementPresent('#calendar')
      .assert.elementPresent('#meetups')
      .assert.elementPresent('#beginner-resources')
      .assert.elementPresent('#membership-organizations')
      .assert.elementPresent('#contact')
      .end()
  }
}
