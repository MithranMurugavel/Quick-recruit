# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tasks/FilterInputs.spec.js >> TC003 - Verify the clear filter 
- Location: tests/tasks/FilterInputs.spec.js:64:6

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Pending') resolved to 2 elements:
    1) <td class="ant-table-cell">Pending</td> aka getByRole('cell', { name: 'Pending' })
    2) <div class="ant-select-item-option-content">Pending</div> aka getByText('Pending').nth(1)

Call log:
  - waiting for getByText('Pending')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link [ref=e7] [cursor=pointer]:
          - /url: /
          - img "company logo" [ref=e8]
        - list [ref=e11]:
          - listitem [ref=e12]:
            - generic [ref=e13] [cursor=pointer]:
              - img "appstore" [ref=e15]
              - text: Dashboard
              - img "caret-down" [ref=e19]
          - listitem [ref=e22]:
            - link [ref=e23] [cursor=pointer]:
              - /url: /vacancy
              - generic [ref=e24]:
                - img "file-search" [ref=e26]
                - text: Vacancy
          - listitem [ref=e29]:
            - generic [ref=e30] [cursor=pointer]:
              - img "user" [ref=e32]
              - text: Candidates - CRM
              - img "caret-down" [ref=e36]
          - listitem [ref=e39]:
            - generic [ref=e40] [cursor=pointer]:
              - img "bar-chart" [ref=e42]
              - text: Reports
              - img "caret-down" [ref=e46]
          - listitem [ref=e49]:
            - generic [ref=e50] [cursor=pointer]:
              - img "audit" [ref=e52]
              - text: Interviews
              - img "caret-down" [ref=e56]
          - listitem [ref=e59]:
            - generic [ref=e60] [cursor=pointer]:
              - img "more" [ref=e62]
              - text: More
              - img "caret-down" [ref=e66]
        - generic [ref=e69]:
          - img "warning" [ref=e70] [cursor=pointer]
          - img "search" [ref=e74] [cursor=pointer]
          - link [ref=e77] [cursor=pointer]:
            - /url: /calendar
            - img "calendar" [ref=e78]
          - link [ref=e81] [cursor=pointer]:
            - /url: /announcements
            - img "sound" [ref=e82]
          - img "bell" [ref=e87] [cursor=pointer]
          - generic [ref=e90] [cursor=pointer]: "N"
    - img "loading" [ref=e94]
    - main [ref=e97]:
      - generic [ref=e98]:
        - generic [ref=e99]:
          - generic [ref=e100]:
            - heading "Filters" [level=3] [ref=e101]
            - paragraph [ref=e102] [cursor=pointer]: Clear Filters
          - generic [ref=e105]:
            - generic [ref=e107]:
              - paragraph [ref=e108]: Due Date
              - generic [ref=e109]:
                - textbox "Start date" [ref=e111]: 03/11/2026
                - generic "to" [ref=e113]:
                  - img "swap-right" [ref=e114]
                - textbox "End date" [ref=e118]: 14/11/2026
                - generic:
                  - img "calendar"
                - img "close-circle" [ref=e120] [cursor=pointer]
            - generic [ref=e124]:
              - paragraph [ref=e126]: Status
              - generic [ref=e128]:
                - combobox [expanded] [active] [ref=e133]:
                  - listbox:
                    - option "Pending": f9f35732-fce2-4c9f-96aa-ba46e3b9e288
                    - option "Completed": 3f1bd5d4-c921-45aa-a929-6b1577b0adc2
                - generic: Select status
            - generic [ref=e135]:
              - paragraph [ref=e137]: Assignees
              - generic [ref=e139]:
                - combobox [ref=e144]
                - generic: Select assignees
            - generic [ref=e146]:
              - paragraph [ref=e148]: Related Entity
              - generic [ref=e150]:
                - combobox [ref=e155]
                - generic: Select related entity
          - paragraph [ref=e158] [cursor=pointer]:
            - text: Scroll to Top
            - img "arrow-up" [ref=e160]
        - generic [ref=e164]:
          - generic [ref=e165]:
            - generic [ref=e166]:
              - img "search" [ref=e168]
              - textbox "Search Task" [ref=e171]
              - img "info-circle" [ref=e173] [cursor=pointer]
            - generic [ref=e177]:
              - generic [ref=e178]: Showing 1 - 3 of 3
              - button [ref=e179] [cursor=pointer]:
                - img "plus" [ref=e180]
                - generic: Add Task
          - generic [ref=e184]:
            - table [ref=e191]:
              - rowgroup [ref=e199]:
                - row [ref=e200]:
                  - columnheader "Title" [ref=e201]
                  - columnheader "Related Entity" [ref=e202]
                  - columnheader "Assignees" [ref=e203]
                  - columnheader "Due Date" [ref=e204]
                  - columnheader "Status" [ref=e205]
                  - columnheader "Actions" [ref=e206]
              - rowgroup [ref=e207]:
                - row [ref=e208]:
                  - cell "Certificate" [ref=e209]
                  - cell "General" [ref=e210]
                  - cell [ref=e211]:
                    - paragraph [ref=e213] [cursor=pointer]: "2"
                  - cell "11/4/2026" [ref=e214]
                  - cell "Pending" [ref=e215]
                  - cell "View Details" [ref=e216]
                - row [ref=e217]:
                  - cell "Test The Label" [ref=e218]
                  - cell "General" [ref=e219]
                  - cell [ref=e220]:
                    - paragraph [ref=e222] [cursor=pointer]: "1"
                  - cell "10/28/2026" [ref=e223]
                  - cell "Completed" [ref=e224]
                  - cell "View Details" [ref=e225]
                - row [ref=e226]:
                  - cell "<H1> Hai</H1>" [ref=e227]
                  - cell "General" [ref=e228]
                  - cell [ref=e229]:
                    - paragraph [ref=e231] [cursor=pointer]: "1"
                  - cell "8/20/2026" [ref=e232]
                  - cell "Completed" [ref=e233]
                  - cell "View Details" [ref=e234]
            - generic [ref=e235]:
              - generic [ref=e236]:
                - generic [ref=e237]: Go to
                - spinbutton "Go to page" [ref=e240]: "1"
              - list [ref=e241]:
                - listitem "Previous Page" [ref=e242]:
                  - button [disabled] [ref=e243]:
                    - img "left" [ref=e244]
                - listitem "1" [ref=e247] [cursor=pointer]
                - listitem "Next Page" [ref=e249]:
                  - button [disabled] [ref=e250]:
                    - img "right" [ref=e251]
                - listitem [ref=e254]:
                  - generic "Page Size" [ref=e255] [cursor=pointer]:
                    - generic [ref=e256]:
                      - combobox "Page Size" [ref=e258]
                      - generic "10" [ref=e259]
  - alert [ref=e260]: Task | Quick Recruit
  - generic [ref=e266]:
    - generic "Pending" [ref=e267] [cursor=pointer]
    - generic "Completed" [ref=e269] [cursor=pointer]
```

# Test source

```ts
  1   | const { test, expect } = require("@playwright/test");
  2   | 
  3   | test("TC001 - Verify the date filter by applying the last 7 days", async ({
  4   |   page,
  5   | }) => {
  6   |   await page.goto("https://alpha.quickrecruit.com/task");
  7   | 
  8   |   await page.locator(".ant-picker").click();
  9   | 
  10  |   await page.getByText("Last 7 days").click();
  11  |   const startDate = await page.getByPlaceholder("Start date");
  12  |   const endDate = await page.getByPlaceholder("End date");
  13  | 
  14  |   const currentDate = new Date();
  15  | 
  16  |   const currDate = currentDate.toLocaleDateString("en-GB");
  17  | 
  18  |   const previousDate = new Date(currentDate);
  19  | 
  20  |   previousDate.setDate(previousDate.getDate() - 6);
  21  | 
  22  |   const pastDate = previousDate.toLocaleDateString("en-GB");
  23  |   
  24  |   console.log(currDate,pastDate);
  25  | 
  26  |   await expect(endDate).toHaveValue(currDate);
  27  | 
  28  |   await expect(startDate).toHaveValue(pastDate);
  29  | 
  30  |   console.log("7 Days option verified");
  31  | });
  32  | 
  33  | test("TC002 - Verify the date filter by applying the last 30 days", async ({
  34  |   page,
  35  | }) => {
  36  |   await page.goto("https://alpha.quickrecruit.com/task");
  37  | 
  38  |   await page.locator(".ant-picker").click();
  39  | 
  40  |   await page.getByText("Last 30 days").click();
  41  | 
  42  |   const startDate = await page.getByPlaceholder("Start date");
  43  | 
  44  |   const endDate = await page.getByPlaceholder("End date");
  45  | 
  46  |   const currentDate = new Date();
  47  | 
  48  |   const currDate = currentDate.toLocaleDateString("en-GB");
  49  | 
  50  |   const previousDate = new Date(currentDate);
  51  | 
  52  |   previousDate.setDate(previousDate.getDate() - 29);
  53  | 
  54  |   const pastDate = previousDate.toLocaleDateString("en-GB");
  55  |   
  56  |   console.log(currDate,pastDate);
  57  | 
  58  |   await expect(endDate).toHaveValue(currDate);
  59  | 
  60  |   await expect(startDate).toHaveValue(pastDate);
  61  | 
  62  |   console.log("30 Days option verified");
  63  | });
  64  | test.only('TC003 - Verify the clear filter ',async({page}) =>{
  65  | 
  66  |     await page.goto("https://alpha.quickrecruit.com/task");
  67  | 
  68  |     await page.locator('.ant-picker').click();
  69  |     await page.getByRole('cell', { description: '2026-11-03', exact: true }).getByText('3').click();
  70  |     await page.getByRole('cell', { description: '2026-11-14', exact: true }).getByText('14').click();
  71  |     await page.locator('.ant-select-selector').first().click();
> 72  |     await page.getByText('Pending').click();
      |                                     ^ Error: locator.click: Error: strict mode violation: getByText('Pending') resolved to 2 elements:
  73  |     await page.getByText('Completed').click();
  74  |     await page.locator('div:nth-child(3) > .CommonLayout_filter_wraper__Esgeu > .Filters_FilterWrapper__3ayGN > div > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
  75  |     await page.getByText('Yasothaa').click();
  76  |     await page.locator('.ant-select.Filters_LanguageMultiFilter__lD811.css-46mkgk.ant-select-focused > .ant-select-selector > .ant-select-selection-overflow').click();
  77  |     await page.getByText('Barath').click();
  78  |     await page.getByText('New Plan Test').click();
  79  |     await page.getByText('Lead', { exact: true }).click();
  80  |     await page.getByText('Clear Filters').click();
  81  | 
  82  |     const parent1 = page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(0);
  83  |     await expect(parent1).toHaveCount(0);
  84  | 
  85  |     const startDate = page.getByPlaceholder("Start date");
  86  | 
  87  |     const endDate =  page.getByPlaceholder("End date");
  88  |     await expect(startDate).toHaveValue("");
  89  |     await expect(endDate).toHaveValue("");
  90  | 
  91  |     const parent2 =  page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(1);
  92  | 
  93  |     await expect(parent2).toHaveCount(0);
  94  | 
  95  |     const parent3 = page.locator('.Dropdowncomponent_tagsWrapper__xzgYY').locator('.ant-tag .Dropdowncomponent_SelectTag__RAvNF .css-46mkgk').nth(2);
  96  | 
  97  |     await expect(parent3).toHaveCount(0);
  98  | 
  99  | })
  100 | 
```