const { test, expect } = require('@playwright/test');

test.describe('Task Module - Search Functionality', () => {

    
    test('TC001 - Verify search works with uppercase and lowercase characters', async ({ page }) => {

        const searchInput = page.getByPlaceholder('Search Task');

        await searchInput.fill(' TeSt ThE LaBEl ');

        const tableRows = page.locator('.ant-table-tbody > tr.ant-table-row');

        await expect(tableRows.first()).toBeVisible();

        const firstRowTitle = tableRows.first().locator('td').first();
        
        await expect(firstRowTitle).toHaveText('Test The Label');

        console.log('Search functionality verified successfully');

    });
});
