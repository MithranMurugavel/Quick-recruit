
const { test, expect } = require('@playwright/test');

test.use({
    colorScheme: 'dark'
});

test('TC001 - Verify Go To input accepts exact entered value', async ({ page }) => {

     test.info().annotations.push({
        type: 'Test Type',
        description: 'Negative Test Case'
    });

    await page.goto('https://alpha.quickrecruit.com/task?search=');

    // Locate the actual input element
    const goToInput = page.locator('input[aria-label="Go to page"]');

    // Verify initial value
    await expect(goToInput).toHaveValue('1');

    // Click directly on the input
    await goToInput.click();

    // Select existing value
    await goToInput.press('Control+A');

    // Remove existing value
    await goToInput.press('Backspace');

    // Enter new value
    await goToInput.pressSequentially('2');

    // Capture actual value
    const actualValue = await goToInput.inputValue();

    console.log('Actual input value:', actualValue);

    
    await expect(goToInput).not.toHaveValue('2');

});

test('TC002 - Verify pagination count matches actual records', async ({ page }) => {

    
    await page.goto('https://alpha.quickrecruit.com/task?search=');

   
    const paginationText = page.getByText(
        /Showing\s+\d+\s*-\s*\d+\s+of\s+\d+/
    );

    
    await expect(paginationText).toBeVisible();

    
    const text = await paginationText.innerText();

    console.log('Pagination text:', text);

    
    const match = text.match(
        /Showing\s+(\d+)\s*-\s*(\d+)\s+of\s+(\d+)/
    );

    
    expect(match).not.toBeNull();

    const startRecord = Number(match[1]);
    const endRecord = Number(match[2]);
    const totalRecords = Number(match[3]);

    
    const tableRows = page.locator('.ant-table-tbody > tr:visible');

    const actualRecords = await tableRows.count();

    console.log('Starting record:', startRecord);
    console.log('Ending record:', endRecord);
    console.log('Total records:', totalRecords);
    console.log('Actual table records:', actualRecords);

    
    expect(actualRecords).toBe(endRecord - startRecord + 1);

    
    expect(actualRecords).toBe(totalRecords);

});
