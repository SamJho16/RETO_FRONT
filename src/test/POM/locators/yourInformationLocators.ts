import { Page } from "@playwright/test";

export class yourInformationLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get inputFirstName() {
        return this.page.getByRole('textbox', { name: 'First Name' })
    }

    get inputLastName() {
        return this.page.getByRole('textbox', { name: 'Last Name' })
    }

    get inputZipPostalCode() {
        return this.page.getByRole('textbox', { name: 'Zip/Postal Code' })
    }

    get btnContinue() {
        return this.page.locator("//input[@id='continue']")
    }

}