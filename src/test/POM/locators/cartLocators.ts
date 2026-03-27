import { Page } from "@playwright/test";

export class cartLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get btnCheckout() {
        return this.page.locator("//button[@id='checkout']");
    }

}    