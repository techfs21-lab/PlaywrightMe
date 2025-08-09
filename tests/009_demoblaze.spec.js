import { test, expect } from '@playwright/test';

test('demoblazepractice', async ({ page }) => {
    test.setTimeout(120000); // 120 seconds
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('admin');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.locator('#next2').click();
    await page.getByRole('link', { name: 'Phones' }).click();
    await page.getByRole('link', { name: 'Laptops' }).click();
    await page.getByRole('link', { name: 'Monitors' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole('link', { name: 'ASUS Full HD' })).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'ASUS Full HD' }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator('h2')).toContainText('ASUS Full HD');
    await expect(page.locator('#more-information')).toContainText('Product descriptionASUS VS247H-P 23.6- Inch Full HD');
    await expect(page.locator('h3')).toContainText('$230 *includes tax');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    //await expect(page.getByRole('cell', { name: 'ASUS Full HD' })).toBeVisible();
    //await page.getByRole('link', { name: 'Delete' }).click();
    await page.getByRole('link', { name: 'Home (current)' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();

    page.close();
    console.log("Browser was Closed");

});