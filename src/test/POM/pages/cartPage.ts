import { Page } from '@playwright/test';
import { cartLocators } from '../locators/cartLocators';

export class cartPage {
    private page: Page;
    private cartLocator: cartLocators;

    constructor(page: Page) {
        this.page = page;
        this.cartLocator = new cartLocators(page);
    }

    get productTitle() {
        return this.page.locator('.inventory_item_name').first();
    }

    async goToYourInformation() {
        await this.cartLocator.btnCheckout.click();
    }
    
}