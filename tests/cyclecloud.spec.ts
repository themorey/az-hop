import {test, expect} from '@playwright/test';

test('CycleCloud', async ({browser}) => {
    // create context with HTTP credentials
    const context = await browser.newContext();

    // Open CycleCloud
    const page = await context.newPage();
    await page.goto('/cyclecloud/home', { waitUntil: 'networkidle' });

    // Click text=Arrays
    await page.click('text=Arrays');
    // Click #CloudStatus-NodeArraysTable-tbody >> text=execute
    await page.click('#CloudStatus-NodeArraysTable-tbody >> text=execute');

    // Click text=Activity
    await page.click('text=Activity');

    // Click text=Monitoring
    await page.click('text=Monitoring');

    await page.close()

    // Close the browser
    await context.close();
});
