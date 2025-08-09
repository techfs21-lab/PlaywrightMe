// tests/login.spec.js
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { credentials } from '../utils/credentials.js';

test.describe('Multiple login attempts', () => {
  for (const { username, password, shouldSucceed } of credentials) {
    test(`Login with ${username}/${password} — expect ${shouldSucceed ? 'success' : 'failure'}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(username, password);

      if (shouldSucceed) {
        await loginPage.assertLoginSuccess();
        await loginPage.logout();
      } else {
        await loginPage.assertLoginFailure();
      }

      await page.close();
    });
  }
});
