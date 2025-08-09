import { test, expect } from '@playwright/test';
import { STUDENT_USERNAME, STUDENT_PASSWORD, URLs } from './data/practicelogin.js'; // Adjust path as needed


test('studentlogin', async ({ page }) => {
  await page.goto(URLs.testlogin);
  console.log("Open Student Login Practice Site");

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(STUDENT_USERNAME);
  console.log("User Input Username");

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(STUDENT_PASSWORD);
  console.log("User Input Password");

  await page.getByRole('button', { name: 'Submit' }).click();
  console.log("User successfuly Logged In");
   // await page.waitForTimeout(3000);

  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');

  await page.getByRole('link', { name: 'Log out' }).click();
  console.log("User click Log out");
  //  await page.waitForTimeout(3000);

  await page.getByRole('link', { name: 'Home' }).click();
   console.log("User click Home");

  await page.getByRole('link', { name: 'Courses', exact: true }).click();
   console.log("User click Courses");

  await page.getByRole('link', { name: 'Contact' }).click();
   console.log("User click Contact");

  page.close();
  console.log("Browser was Closed");

});