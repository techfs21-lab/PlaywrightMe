import { test, expect } from '@playwright/test';
// Import individual named exports
import { STANDARD_USERNAME, PASSWORD, URLs } from './data/credentials.js'; // Adjust path as needed


test('loginsaucedemo', async ({ page }) => {
  await page.goto(URLs.login);
  await page.waitForTimeout(3000);
  console.log("Open Sauce Demo Page");

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(STANDARD_USERNAME);
  console.log("Input Username");

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(PASSWORD);
  console.log("Input Password");

  await page.locator('[data-test="login-button"]').click();
  await page.getByText('Swag Labs').click();
  console.log("Click Login");

  console.log("User successfully Logged In");

  page.close();
  console.log("Browser was Closed");
  
});