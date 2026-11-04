const { test, expect } = require("@playwright/test");

test("TC001 - Verify the date filter by applying the last 7 days", async ({
  page,
}) => {
  await page.goto("https://alpha.quickrecruit.com/task");

  await page.locator(".ant-picker").click();

  await page.getByText("Last 7 days").click();
  const startDate = await page.getByPlaceholder("Start date");
  const endDate = await page.getByPlaceholder("End date");

  const currentDate = new Date();

  const currDate = currentDate.toLocaleDateString("en-GB");

  const previousDate = new Date(currentDate);

  previousDate.setDate(previousDate.getDate() - 6);

  const pastDate = previousDate.toLocaleDateString("en-GB");
  
  console.log(currDate,pastDate);

  await expect(endDate).toHaveValue(currDate);

  await expect(startDate).toHaveValue(pastDate);

  console.log("7 Days option verified");
});

test("TC002 - Verify the date filter by applying the last 30 days", async ({
  page,
}) => {
  await page.goto("https://alpha.quickrecruit.com/task");

  await page.locator(".ant-picker").click();

  await page.getByText("Last 30 days").click();

  const startDate = await page.getByPlaceholder("Start date");

  const endDate = await page.getByPlaceholder("End date");

  const currentDate = new Date();

  const currDate = currentDate.toLocaleDateString("en-GB");

  const previousDate = new Date(currentDate);

  previousDate.setDate(previousDate.getDate() - 29);

  const pastDate = previousDate.toLocaleDateString("en-GB");
  
  console.log(currDate,pastDate);

  await expect(endDate).toHaveValue(currDate);

  await expect(startDate).toHaveValue(pastDate);

  console.log("30 Days option verified");
});
test.only('TC003 - Verify the clear filter ',async({page}) =>{

    await page.goto("https://alpha.quickrecruit.com/task");

    await page.locator('.ant-picker').click();
    await page.getByRole('cell', { description: '2026-11-03', exact: true }).getByText('3').click();
    await page.getByRole('cell', { description: '2026-11-14', exact: true }).getByText('14').click();
    await page.locator('.ant-select-selector').first().click();
    await page.getByText('Pending').click();
    await page.getByText('Completed').click();
    await page.locator('div:nth-child(3) > .CommonLayout_filter_wraper__Esgeu > .Filters_FilterWrapper__3ayGN > div > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
    await page.getByText('Yasothaa').click();
    await page.locator('.ant-select.Filters_LanguageMultiFilter__lD811.css-46mkgk.ant-select-focused > .ant-select-selector > .ant-select-selection-overflow').click();
    await page.getByText('Barath').click();

    await page.getByText('New Plan Test').click();

    await page.getByText('Lead', { exact: true }).click();

    await page.getByText('Clear Filters').click();

    const parent1 = page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(0);
    await expect(parent1).toHaveCount(0);

    const startDate = page.getByPlaceholder("Start date");

    const endDate =  page.getByPlaceholder("End date");
    await expect(startDate).toHaveValue("");
    await expect(endDate).toHaveValue("");

    const parent2 =  page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(1);

    await expect(parent2).toHaveCount(0);

    const parent3 = page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(2);

    await expect(parent3).toHaveCount(0);
})
