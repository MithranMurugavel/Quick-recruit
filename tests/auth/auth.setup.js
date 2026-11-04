
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

        await page.goto(`${process.env.BASE_URL}/task`);

        const emailInput = page.locator('#signin_email');

        if (await emailInput.isVisible().catch(() => false)) {

            console.log('Login required...');

            
            await emailInput.fill(process.env.LOGIN_EMAIL);

            
            await page.locator('#signin_password')
                .fill(process.env.LOGIN_PASSWORD);

            
            await page.getByRole('button', {
                name: 'Sign in',
                exact: true
            }).click();

            
            await page.waitForURL(
                '**/dashboard/ai-hiring-platform',
                { timeout: 60000 }
            );

            console.log('Successfully redirected to Dashboard');

        } else {

            console.log('Existing session is valid');

        }

        
        await page.goto(`${process.env.BASE_URL}/task`);

        
        await expect(page).toHaveURL(/\/task/);

        console.log('Successfully navigated to Task module');

        
        await context.storageState({
            path: authFile
        });

        console.log('Authentication state saved successfully');

    } finally {

        await context.close();

    }

});
