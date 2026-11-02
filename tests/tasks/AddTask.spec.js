const { test, expect } = require('@playwright/test');

test('TC001 - Verify Add Task button is working', async ({ page }) => {

    
    await page.goto('/task');

    
    await expect(page).toHaveURL(/\/task$/);

    
    const addTaskButton = page.getByRole('button', {
        name: /Add Task/i
    });

    
    await expect(addTaskButton).toBeVisible();

   
    await expect(addTaskButton).toBeEnabled();

    
    await addTaskButton.click();

    
    await expect(page).toHaveURL(/\/task\/create$/);

    
    await expect(
        page.getByText('Add Task', { exact: true }).first()
    ).toBeVisible();

    
    await expect(page.getByPlaceholder('Enter Title')).toBeVisible();

    console.log('Add Task page opened successfully');

});