import { Page } from '@playwright/test';
import { yourInformationLocators } from '../locators/yourInformationLocators';

export class yourInformationPage {
    private page: Page;
    private yourInformationLocator: yourInformationLocators;

    constructor(page: Page) {
        this.page = page;
        this.yourInformationLocator = new yourInformationLocators(page);
    }

    async goToOverview() {
        await this.yourInformationLocator.btnContinue.click();
    }

    async enterFirstname(firstname: string) {
        await this.yourInformationLocator.inputFirstName.fill(firstname);
    }

    async enterLastName(lastname: string) {
        await this.yourInformationLocator.inputLastName.fill(lastname);
    }

    async enterZipPostalCode(zipPostalCode: string) {
        await this.yourInformationLocator.inputZipPostalCode.fill(zipPostalCode);
    }
}
    