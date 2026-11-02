
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');
require('dotenv').config();

const authFile = path.join(
    __dirname,
    'playwright/.auth/user.json'
);

module.exports = defineConfig({

    testDir: './tests',

    fullyParallel: false,

    workers: 1,

    reporter: 'html',

    use: {
        baseURL: process.env.BASE_URL,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },

    projects: [

        {
            name: 'setup',

            testMatch: '**/auth.setup.js'
        },

        {
            name: 'chromium',

            use: {
                ...devices['Desktop Chrome'],
                storageState: authFile,
                headless: false
            },

            dependencies: ['setup'],

            testIgnore: '**/auth.setup.js'
        },


    ]

});
