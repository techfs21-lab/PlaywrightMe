import { test, expect } from '@playwright/test';

test('testpractice1', async ({ page }) => {
  test.setTimeout(120000); // 120 seconds
  
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.waitForLoadState();
  await page.locator('label').filter({ hasText: 'Radio3' }).getByRole('radio').check();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('Australia');
  await page.getByText('Australia').click();
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkBoxOption3').check();
  //await page.getByRole('button', { name: 'Open Window' }).click();

  // Get context from existing page
  const context = page.context();

  // Wait for the new popup window
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'Open Window' }).click()
  ]);

  // Wait for the popup to load
  await newPage.waitForLoadState();

  // Optionally do something in the popup
  // await newPage.screenshot({ path: 'popup.png' });

  // Close the new popup window
  await newPage.close();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page1 = await page1Promise;
  await page1.close();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Alert');

  /*
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
*/
  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500 pixels
  });

  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await expect(page.getByRole('textbox', { name: 'Hide/Show Example' })).toBeVisible();

  await page.evaluate(() => {
    window.scrollBy(0, 500); // Scroll down 500 pixels
  });
  await page.getByRole('button', { name: 'Mouse Hover' }).hover();
  await expect(page.getByRole('link', { name: 'Top' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Reload' })).toBeVisible();

  page.close();
  console.log("Browser was Closed");
});