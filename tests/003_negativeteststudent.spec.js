import { test, expect } from '@playwright/test';

test('testinvaliduser', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('incorrectuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
  console.log("Message was displayed - Your username is invalid!");
  page.close();
  console.log("Browser was Closed");
  
});