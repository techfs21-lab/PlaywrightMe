import { test, expect } from '@playwright/test';

test('playwrightpractice', async ({ page }) => {
  test.setTimeout(120000); // 120 seconds
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('link', { name: 'GUI Elements' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PlaywrightPractice' })).toBeVisible();
  await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
  await expect(page.getByRole('heading', { name: 'getByRole() Locators' })).toBeVisible();
  await page.getByRole('heading', { name: 'getByRole() Locators' }).click();
  await page.getByRole('button', { name: 'Primary Action' }).click();
  await page.getByRole('button', { name: 'Toggle Button' }).click();
  await page.getByRole('button', { name: 'Toggle Button' }).click();
  await page.getByRole('button', { name: 'Div with button role' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Testme');
  await page.getByRole('checkbox', { name: 'Accept terms' }).check();
  await page.getByText('This is an important alert').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('Software Testing');

  await page.waitForTimeout(5000);
  await page.locator('input[type="submit"]').click();

  await page.waitForTimeout(5000);
  
  await expect(page.getByRole('link', { name: 'Software testing', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'START' }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole('button', { name: 'STOP' })).toBeVisible();
  
  await expect(page.locator('#HTML9')).toContainText('Alerts & Popups');
   
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    //dialog.dismiss().catch(() => {});
    dialog.accept(); // This closes the dialog
  });

  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  
  await page.getByRole('textbox', { name: 'Email Address:' }).click();
  await page.getByRole('textbox', { name: 'Email Address:' }).fill('test@gmail.com');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('testing');
  await page.waitForTimeout(3000);
  await page.getByRole('spinbutton', { name: 'Your Age:' }).click();
  await page.getByRole('spinbutton', { name: 'Your Age:' }).fill('55');
  await page.waitForTimeout(3000);
  await page.getByRole('radio', { name: 'Standard' }).check();
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter your full name' }).click();
  await page.getByRole('textbox', { name: 'Enter your full name' }).fill('test me');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Enter your full name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Phone number (xxx-xxx-xxxx)' }).fill('09177777777');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Type your message here...' }).click();
  await page.getByRole('textbox', { name: 'Type your message here...' }).fill('Test Me multi text box');
  await page.waitForTimeout(3000);
  await page.locator('#slider-range span').first().click();
  await page.waitForTimeout(3000);
  await page.locator('#slider-range div').click();
   

  page.close();
  console.log("Browser was Closed");
  
});