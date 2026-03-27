import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("navego hasta la pagina de login de Sauce Demo", async function () {
  await this.login.navigateToLoginPage();
  await this.page.waitForLoadState("networkidle");
});

Given("ingreso mis credenciales validas", async function () {
  await this.login.enterUsername("standard_user");
  await this.login.enterPassword("secret_sauce");
});

When("hago click en el boton de login", async function () {
    await this.login.clickLoginButton();
});

Then("me redirige a la pagina de productos", async function () {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

Given("ingreso mis credenciales bloqueadas", async function () {
    await this.login.enterUsername("locked_out_user");
    await this.login.enterPassword("secret_sauce");
});

Then("se muestra un mensaje de error indicando que el usuario esta bloqueado", async function () {
    const isVisible = await this.login.isLockedOutMessageVisible();
    expect(isVisible).toBeTruthy();
});