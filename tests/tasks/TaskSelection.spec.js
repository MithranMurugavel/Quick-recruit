
const { test, expect } = require('@playwright/test');

test('TC011 - Verify first task selection works', async ({ page }) => {

    // Navigate to Task page
    await page.goto('/task');

    // Locate first task row using its title
    const firstTaskRow = page.locator('tr.ant-table-row')
        .filter({
            hasText: 'Test The Label'
        });

    // Verify task row exists
    await expect(firstTaskRow).toHaveCount(1);

    // Verify task row is visible
    await expect(firstTaskRow).toBeVisible();

    // Locate task title inside the row
    const taskTitle = firstTaskRow.locator('td').first()
        .getByText('Test The Label');

    // Verify task title is visible
    await expect(taskTitle).toBeVisible();

    // Verify task title is clickable
    await expect(taskTitle).toHaveCSS(
        'cursor',
        'pointer'
    );

    // Store current URL
    const previousUrl = page.url();

    // Click first task title
    await taskTitle.click();

    console.log('First task selected successfully');

    // Check whether selection opens a dialog or navigates
    await expect.poll(async () => {

        const urlChanged = page.url() !== previousUrl;

        const dialogOpened = await page.getByRole('dialog')
            .isVisible()
            .catch(() => false);

        return urlChanged || dialogOpened;

    }).toBe(true);

});
