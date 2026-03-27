import { Page } from "@playwright/test";

export class loginLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get inputUsername() {
        return this.page.getByRole('textbox', { name: 'Username' })
    }

    get inputPassword() {
        return this.page.getByRole('textbox', { name: /Password/ })
    }

    get btnLogin() {
        return this.page.locator("//input[@id='login-button']")
    }

    get headingLockedOut() {
        return this.page.getByRole('heading', { name: 'Epic sadface: Sorry, this user has been locked out.' })
    }
}