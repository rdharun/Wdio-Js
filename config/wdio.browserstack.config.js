const fs = require('fs');


exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'dharunr_TgAxvB',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'hGpAuxyqtHMDpdwse38H',
    hostname: 'hub.browserstack.com',
    specs: [`${process.cwd()}/test/specs/**/*.test.ts`],
    maxInstances: 1,
    coloredLogs: true,
    logLevel: "info",
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: [
      [
        'browserstack',
        {
          app: 'bs://8fe087e80c94a64a3a1d3aaef111ce3687053799',
          // buildIdentifier: "${DATE_TIME}",
          browserstackLocal: false
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      }
    }, 
  ],
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack UltraLesson App",
        buildName: "bstack-ultralesson",
        sessionName: 'BStack parallel webdriverio-appium',
        debug: true,
        networkLogs: true
      }
    },
    reporters: [
        "spec",
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                disableMochaHooks: true
            },
        ],
    ],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!fs.existsSync("./errorShots")) {
            fs.mkdirSync("./errorShots");
        }
        if (!passed) {
            await driver.saveScreenshot(`./errorShots/${test.title.replaceAll(" ", "_")}.png`);
        }
    },
}