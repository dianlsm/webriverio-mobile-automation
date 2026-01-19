// // exports.config = {
// //     runner: 'local',
// //     specs: ['./test/specs/**/*.test.js'],
// //     maxInstances: 1,
// //     capabilities: [{
// //         platformName: "Android",
// //         "appium:deviceName": "Samsung A20",
// //         "appium:udid": "RR8M50ELS5A",
// //         "appium:automationName": "UiAutomator2",
// //         // "appium:appPackage": "com.saucelabs.mydemoapp.rn",
// //         // "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",
// //         "appium:noReset": true,
// //         "appium:newCommandTimeout": 300
// //     }],
// //     logLevel: 'info',
// //     framework: 'mocha',
// //     reporters: [
// //         ['allure', {
// //             outputDir: 'allure-results',
// //             disableWebdriverStepsReporting: false,
// //             disableWebdriverScreenshotsReporting: false,
// //         }]
// //     ],
// //     mochaOpts: {
// //         ui: 'bdd',
// //         timeout: 60000
// //     },
// //     services: ['appium'],
// //     appium: {
// //         command: 'appium'
// //     },
// //     afterStep: async function (step, scenario, { error }) {
// //         if (error) {
// //             await browser.takeScreenshot();
// //         }
// //     }
// // };


// const { join } = require('path');

// exports.config = {
//     runner: 'local',

//     specs: [
//         './test/specs/**/*.js'
//     ],

//     maxInstances: 1,

//     capabilities: [{
//         platformName: "Android",
//         "appium:automationName": "UiAutomator2",
//         "appium:deviceName": "Android Device",
//         "appium:platformVersion": "10",
//         "appium:app": join(process.cwd(), "./apps/mda-1.0.13-25.apk"),
//         "appium:autoGrantPermissions": true
//     }],

//     logLevel: 'info',

//     framework: 'mocha',

//     reporters: [
//         'spec',
//         ['allure', {
//             outputDir: 'allure-results',
//             disableWebdriverStepsReporting: false,
//             disableWebdriverScreenshotsReporting: false,
//         }]
//     ],

//     mochaOpts: {
//         ui: 'bdd',
//         timeout: 60000
//     },

//     //
//     // AUTO SCREENSHOT ON FAILURE
//     //
//     afterStep: async function (step, scenario, { error }) {
//         if (error) {
//             await browser.takeScreenshot();
//         }
//     },
// };


const { join } = require('path');

exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "Samsung A20",
        "appium:udid": "RR8M50ELS5A",
        "appium:automationName": "UiAutomator2",
        // "appium:appPackage": "com.saucelabs.mydemoapp.android",
        // "appium:appActivity": "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
        "appium:noReset": true,
        "appium:newCommandTimeout": 300
    }],

    logLevel: 'info',

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: ['appium'],

    appium: {
        command: 'appium'
    },

    afterStep: async function (step, scenario, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};

