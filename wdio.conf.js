exports.config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],

    maxInstances: 1,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        timeout: 600000
    },

    hostname: 'appium-dev.headspin.io',
    port: 443,
    protocol: 'https',
    path: '/v0/ad756504216f408d8de3facc4a65c87e/wd/hub',


    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'S916B',
            'appium:udid': 'R5CN20524NJ',
            'appium:noReset': true,
            'appium:browserName': 'Chrome',
            'headspin:capture': true
        }
    ],

    connectionRetryCount: 3,

    afterTest: async function (test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};
