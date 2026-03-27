import { Page } from '@playwright/test';
import { overviewLocators } from '../locators/overviewLocators';

export class overviewPage {
    private page: Page;
    private overviewLocator: overviewLocators;
    
    constructor(page: Page) {
        this.page = page;
        this.overviewLocator = new overviewLocators(page);
    }

    async goToFinish() {
        await this.overviewLocator.btnFinish.click();
    }
    
}