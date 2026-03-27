import { Page } from "@playwright/test";

export class invetoryLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

  get inventoryItems() {
    return this.page.locator(".inventory_item");
  }

  get btnShoppingCart() {
    return this.page.locator("//a[@class='shopping_cart_link']");
  }

  productTitleIndex(index: number) {
    return this.inventoryItems.nth(index).locator(".inventory_item_name");
  }

  addToCartButtonIndex(index: number) {
    return this.inventoryItems.nth(index).getByRole("button", { name: "Add to cart" });
  }
}    