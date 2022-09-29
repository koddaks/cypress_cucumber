import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/base");
const mainpage = require("../../pageobjects/mainpage");
const whatPageWeOn = require("../../e2e/helper/whatPageWeOn");


Given('I am on the Telnyx page and click the cookies', () => {
  base.navigate();
  base.CookiesButton.click();
});
//Scenario#1
When('I scroll to "Explore our products" button  and click into it', () => {
base.scrollandclick(mainpage.exploreOurProductsBtn);
});
Then('I redirected to the https://telnyx.com/products', () => {
  whatPageWeOn.whatPageWeOn('https://telnyx.com/products');
  });