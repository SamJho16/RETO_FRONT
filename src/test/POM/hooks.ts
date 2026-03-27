import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { loginPage } from "../POM/pages/loginPage";
import { inventoryPage } from "./pages/inventoryPage";
import { cartPage } from "./pages/cartPage";
import { yourInformationPage } from "./pages/yourInformationPage";

setDefaultTimeout(60 * 1000); 

let browser: Browser;
let context: BrowserContext;  
let page: Page;
let login: loginPage;
let inventory: inventoryPage;
let cart: cartPage;
let yourInformation: yourInformationPage;

Before(async function () {
  browser = await chromium.launch({
  headless: false,
  slowMo: 1000
});

  context = await browser.newContext(); 
  page = await context.newPage();

  login = new loginPage(page);
  inventory = new inventoryPage(page);
  cart = new cartPage(page);
  yourInformation = new yourInformationPage(page);

  this.page = page;
  this.login = login;
  this.inventory = inventory;
  this.cart = cart;
  this.yourInformation = yourInformation;
});

After(async function () {
  try {
    if (page && !page.isClosed()) {
      await page.close();
    }
  } catch (e) {
    console.log("Error cerrando page:", e);
  }

  try {
    if (context) {
      await context.close();
    }
  } catch (e) {
    console.log("Error cerrando context:", e);
  }

  try {
    if (browser) {
      await browser.close();
    }
  } catch (e) {
    console.log("Error cerrando browser:", e);
  }
});

