    // pages/LoginPage.js
    import { expect } from '@playwright/test';

    export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successHeading = page.getByRole('heading', { name: 'Logged In Successfully' });
        this.successMessage = page.getByRole('strong');
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.errorMessage = page.locator('#error'); // For failed login
    }

    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.successHeading).toBeVisible();
        await expect(this.successMessage).toContainText('Congratulations student. You successfully logged in!');
    }

    async assertLoginFailure() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(/invalid/);
    }

    async logout() {
        await this.logoutLink.click();
    }
    }
