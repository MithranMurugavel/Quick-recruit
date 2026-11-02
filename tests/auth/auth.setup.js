
const { test: setup, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const authFile = path.join(
    __dirname,
    '../../playwright/.auth/user.json'
);

setup('QuickRecruit authentication', async ({ browser }) => {

    setup.setTimeout(90000);

    fs.mkdirSync(path.dirname(authFile), {
        recursive: true
    });

    const hasSavedSession = fs.existsSync(authFile);

    const context = await browser.newContext(
        hasSavedSession
            ? { storageState: authFile }
            : {}
    );

    const page = await context.newPage();

    try {

        // STEP 1: Open Task URL
        await page.goto(`${process.env.BASE_URL}/task`);

        // STEP 2: Check whether login is required
        const emailInput = page.locator('#signin_email');

        if (await emailInput.isVisible().catch(() => false)) {

            console.log('Login required...');

            // Enter email
            await emailInput.fill(process.env.LOGIN_EMAIL);

            // Enter password
            await page.locator('#signin_password')
                .fill(process.env.LOGIN_PASSWORD);

            // STEP 3: Click Sign in
            await page.getByRole('button', {
                name: 'Sign in',
                exact: true
            }).click();

            // STEP 4: Wait for Dashboard redirect
            await page.waitForURL(
                '**/dashboard/ai-hiring-platform',
                { timeout: 60000 }
            );

            console.log('Successfully redirected to Dashboard');

        } else {

            console.log('Existing session is valid');

        }

        // STEP 5: Navigate from Dashboard to Task
        await page.goto(`${process.env.BASE_URL}/task`);

        // STEP 6: Verify Task page
        await expect(page).toHaveURL(/\/task/);

        console.log('Successfully navigated to Task module');

        // STEP 7: Save authentication
        await context.storageState({
            path: authFile
        });

        console.log('Authentication state saved successfully');

    } finally {

        await context.close();

    }

});
