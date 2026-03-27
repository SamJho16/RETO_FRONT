import { Page } from '@playwright/test';
import { loginLocators } from '../locators/loginLocators';

export class loginPage {
    private page: Page;
    private loginLocator: loginLocators;

    constructor(page: Page) {
        this.page = page;
        this.loginLocator = new loginLocators(page);
    }

    async navigateToLoginPage() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async enterUsername(username: string) {
        await this.loginLocator.inputUsername.fill(username);
    }

    async enterPassword(password: string) {
        await this.loginLocator.inputPassword.fill(password);
    }

    async clickLoginButton() {
        await this.loginLocator.btnLogin.click();
    }

    async isLockedOutMessageVisible() {
        return await this.loginLocator.headingLockedOut.isVisible();
    }
}