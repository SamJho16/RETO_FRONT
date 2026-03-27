import { Page } from "@playwright/test";

export class overviewLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get btnFinish() {
        return this.page.locator("//button[@id='finish']")
    }

}