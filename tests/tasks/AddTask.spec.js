const { test, expect } = require('@playwright/test');

test('TC001 - Verify Add Task button is working', async ({ page }) => {

    // Step 1: Open Task page
    await page.goto('/task');

    // Step 2: Verify Task page
    await expect(page).toHaveURL(/\/task$/);

    // Step 3: Locate Add Task button
    const addTaskButton = page.getByRole('button', {
        name: /Add Task/i
    });

    // Step 4: Verify button is visible
    await expect(addTaskButton).toBeVisible();

    // Step 5: Verify button is enabled
    await expect(addTaskButton).toBeEnabled();

    // Step 6: Click Add Task
    await addTaskButton.click();

    // Step 7: Verify navigation to Create Task page
    await expect(page).toHaveURL(/\/task\/create$/);

    // Step 8: Verify Add Task page is displayed
    await expect(
        page.getByText('Add Task', { exact: true }).first()
    ).toBeVisible();

    // Step 9: Verify required form fields
    await expect(page.getByPlaceholder('Enter Title')).toBeVisible();

    console.log('Add Task page opened successfully');

});