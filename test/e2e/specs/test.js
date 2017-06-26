// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser.url(devServer).pause(1000);

    browser.expect.element('#app').to.be.present

    // 一开始加载，后面加载完了
    // browser.expect.element('.el-loading-text').to.be.visible
    browser.expect.element('.el-loading-text').to.be.not.visible.after(5000)

    // 点击第一张海报跳转
    browser.click('.home-posters__poster').pause(1000);
    browser.expect.element('.movie-info').to.be.visible

    browser.end()
  }
}
