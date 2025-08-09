import { test, expect } from '@playwright/test';
import { expandtesturl_USERNAME, expandtesturl_PASSWORD, expandtesturl } from './data/practicelogin.js'; // Adjust path as needed

test('practiceexpandtesting', async ({ page }) => {
  await page.goto(expandtesturl);
  console.log("Open Practice Expand Testing Page");

    await page.evaluate(() => {
    window.scrollBy(0, 600); // Scroll down 500 pixels
  });

  //await page.getByText('Username: practice', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(expandtesturl_USERNAME);
  console.log("Input Username");

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(expandtesturl_PASSWORD);
  console.log("Input Password");

  await page.getByRole('button', { name: 'Login' }).click();
  console.log("Click Login");

  await page.waitForTimeout(3000);
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  console.log("Message is displayed - You logged into a secure area!");

  await page.getByRole('link', { name: 'Logout' }).click();
  console.log("Click Logout");

  page.close();
  console.log("Browser was Closed");


});