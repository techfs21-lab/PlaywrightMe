import { test, expect } from '@playwright/test';
import path from 'path';

test('playwrightpractice', async ({ page }) => {
  test.setTimeout(120000); // 120 seconds
  await page.goto('https://testautomationpractice.blogspot.com/');

  // START/STOP buttons
  await page.getByRole('button', { name: 'START' }).click();
  await expect(page.getByRole('button', { name: 'STOP' })).toBeVisible();

  // Handle popup window
  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const popup = await popupPromise;
  await popup.close();

  // Hover and check menu visibility
  await page.getByRole('button', { name: 'Point Me' }).hover();
  await expect(page.getByRole('link', { name: 'Mobiles' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();

  // Drag and drop
  const source = page.locator('#draggable');
  const target = page.locator('#droppable');
  await source.dragTo(target);
  await page.waitForLoadState();

  //Slider
  await page.waitForLoadState();
  await page.locator('#slider-range span').first().click();
  await page.waitForLoadState();
  await page.locator('#slider-range div').click();

  //Date Picker
  await page.locator('#datepicker').click();
  await page.getByTitle('Prev').click();
  await page.getByTitle('Prev').click();
  await page.getByTitle('Prev').click();
  await page.getByRole('link', { name: '30' }).click();
  await page.locator('#txtDate').click();
  await page.getByLabel('Select month').selectOption('0');
  await page.waitForLoadState();

  //Text Date
  await page.locator('#txtDate').click();
  await page.locator('.ui-datepicker-month').selectOption('0'); // January
  await page.locator('.ui-datepicker-year').selectOption('2016');
  await page.getByRole('link', { name: '31' }).click();

  //Start Date and End Date
  await page.waitForLoadState();
  await page.getByPlaceholder('Start Date').fill('2023-05-01');
  await page.waitForLoadState();
  await page.getByPlaceholder('End Date').fill('2024-12-31');
  await page.waitForLoadState();
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();

  //await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('C:/Users/admin/Downloads/Kapayapaan.jpg');

  await page.getByRole('button', { name: 'Upload Single File' }).click();


  await expect(page.locator('#singleFileStatus')).toContainText('Single file selected: Kapayapaan.jpg, Size: 212993 bytes, Type: image/jpeg');
  await page.waitForLoadState();

  //await page.locator('#multipleFilesInput').click();
  await page.locator('#multipleFilesInput').setInputFiles([
    path.resolve('C:/Users/admin/Downloads/App.config'),
    path.resolve('C:/Users/admin/Downloads/Laptop Specs.JPG'),
  ]);

  await page.getByRole('button', { name: 'Upload Multiple Files' }).click();
  await expect(page.locator('#multipleFilesStatus')).toContainText('Multiple files selected: App.config, Size: 1164 bytes, Type: application/xml Laptop Specs.JPG, Size: 161578 bytes, Type: image/jpeg');
  await page.waitForLoadState();


  await page.getByRole('link', { name: 'Errorcode 400' }).click();
  await expect(page.getByText('Bad Request')).toBeVisible();
  await page.goBack();
  await page.waitForLoadState();
 
  await page.getByRole('link', { name: 'Errorcode 401' }).click();
  await expect(page.getByRole('heading', { name: '401 - Unauthorized: Access is' })).toBeVisible();
  await page.goBack();
  await page.waitForLoadState();
 
  await page.getByRole('link', { name: 'Errorcode 403' }).click();
  await expect(page.getByRole('heading', { name: '- Forbidden: Access is denied.' })).toBeVisible();
  await page.goBack();
  await page.waitForLoadState();
 
  await page.getByRole('link', { name: 'Errorcode 404' }).click();
  await expect(page.getByRole('heading', { name: '- File or directory not found.' })).toBeVisible();
  await page.goBack();
  await page.waitForLoadState(); 

  await page.getByRole('link', { name: 'Errorcode 408' }).click();
  await expect(page.locator('body')).toContainText('The page cannot be displayed because the client took too long to complete its request and the server closed the connection.');
  await page.goBack();
  await page.waitForLoadState();
  
  
  await page.getByRole('link', { name: 'Errorcode 500' }).click();
  await page.getByRole('heading', { name: '- Internal server error.' }).click();
  await page.goBack();
  await page.waitForLoadState();

  await page.getByRole('link', { name: 'Errorcode 502' }).click();
  await expect(page.locator('h2')).toContainText('502 - Web server received an invalid response while acting as a gateway or proxy server.');

  await page.goBack();
  await page.waitForLoadState();

  await page.getByRole('link', { name: 'Errorcode 503' }).click();
  await expect(page.locator('body')).toContainText('The service is unavailable.');
  await page.waitForLoadState();

  console.log("Test completed successfully.");


  page.close();
  console.log("Browser was Closed");
});