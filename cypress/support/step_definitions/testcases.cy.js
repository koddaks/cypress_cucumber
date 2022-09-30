import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/base");
const mainpage = require("../../pageobjects/mainpage");
const whatPageWeOn = require("../../e2e/helper/whatPageWeOn");

Given('I am on the Telnyx page and click the cookies', () => {
  base.navigate();
  // cy.contains('Accept and close').click();
});
//Scenario#1:
When('I scroll to “Explore our products” button and click into it', async() => {
base.scrollandclick(cy.contains('Explore our products'));
});
Then('I redirected to the products page', async() => {
  whatPageWeOn.whatPageWeOn('https://telnyx.com/products');
  });