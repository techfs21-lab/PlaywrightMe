import { test, expect } from '@playwright/test';

//import { STUDENT_USERNAME, STUDENT_PASSWORD, URLs } from './data/practicelogin.js'; // Adjust path as needed


test('anytest', async ({ page }) => {

  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('buy some cheese');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByTestId('todo-title')).toBeVisible();
  await expect(page.getByText('All Active Completed')).toBeVisible();
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();

  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('feed the cat');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByText('feed the cat')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'feed the cat' }).getByLabel('Toggle Todo').check();
  await expect(page.getByText('feed the cat')).toBeVisible();

 
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('book a doctors appointment');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByText('book a doctors appointment')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'book a doctors appointment' }).getByLabel('Toggle Todo').check();

  page.close();
  console.log("Browser was Closed");
  });
