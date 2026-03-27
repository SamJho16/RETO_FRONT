import { Given, When, Then } from "@cucumber/cucumber";
import { _android, expect } from "@playwright/test";
import { inventoryPage } from "../pages/inventoryPage";
import { cartPage } from "../pages/cartPage";
import { yourInformationPage } from "../pages/yourInformationPage";
import { overviewPage } from "../pages/overviewPage";

When("agrego productos al carrito", async function () {
    this.inventory = new inventoryPage(this.page);
    this.productTitle = await this.inventory.addRandomProductToCart();
});

When("hago click en el carrito", async function () {
    await this.inventory.goToCart();
    this.cart = new cartPage(this.page);
});

When("hago click en el boton de checkout", async function () {
    await this.cart.goToYourInformation();
    this.yourInformation = new yourInformationPage(this.page);
});

When("ingreso mi informacion personal", async function () {
    await this.yourInformation.enterFirstname("Samuel");
    await this.yourInformation.enterLastName("Celis");
    await this.yourInformation.enterZipPostalCode("15008");
});

When("hago click en el boton de continue", async function () {
    await this.yourInformation.goToOverview();
    this.overview = new overviewPage(this.page);
});

When("hago click en el boton de finish", async function () {
    await this.overview.goToFinish();
});

Then("me redirige a la pagina del carrito", async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
});

Then("me redirige a la pagina de resumen de la orden", async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
});

Then("me redirige a la pagina de informacion del cliente", async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
});

Then("visualizo el producto agregado", async function () {
    await expect(this.cart.productTitle).toContainText(this.productTitle);   
});    

Then("me redirige a la pagina de compra finalizada", async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
});