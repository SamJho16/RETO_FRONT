import { Page } from '@playwright/test';
import { invetoryLocators } from '../locators/inventoryLocators';

export class inventoryPage {
    private page: Page;
    private inventoryLocator: invetoryLocators;

    constructor(page: Page) {
        this.page = page;
        this.inventoryLocator = new invetoryLocators(page);
    }

    async addRandomProductToCart(): Promise<string> {
        const totalProducts = await this.inventoryLocator.inventoryItems.count();
        const randomIndex = Math.floor(Math.random() * totalProducts);

        const productTitle = await this.inventoryLocator.productTitleIndex(randomIndex).textContent();

        const cleanTitle = productTitle?.trim();

        await this.inventoryLocator.addToCartButtonIndex(randomIndex).click();

        return cleanTitle || "";
    }

    async goToCart() {
        await this.inventoryLocator.btnShoppingCart.click();
    }
}