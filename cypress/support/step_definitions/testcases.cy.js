import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/base");
const mainpage = require("../../pageobjects/mainpage");
const whatPageWeOn = require("../../e2e/helper/whatPageWeOn");

Given('I am on the Telnyx page and click the cookies', () => {
  base.navigate();
  // cy.contains('Accept and close').click();
});
//Scenario#1
When('I scroll to “About Us” link at the bottom of the page', async() => {
cy.xpath('//span[contains(text(),"About Us")]').scrollIntoView();
});
Then('I click into “About Us” link', async() => {
  cy.xpath('//span[contains(text(),"About Us")]').click();
  });
Then('I redirected to “About Us” page', async() => {    
  whatPageWeOn.pageShouldBe('https://telnyx.com/company/about');
  });
  Then('I scroll to the headline “What makes us different”', async() => {    
    cy.xpath('//h2[contains(text(),"What makes us different")]').scrollIntoView();
    cy.xpath('//h3[contains(text(),"Security through a global backbone")]').should('be.visible');
    cy.xpath('//h3[contains(text(),"Multi-cloud uptime")]').should('be.visible');
    cy.xpath('//h3[contains(text(),"We own our own numbers")]').should('be.visible');
    cy.xpath('//h3[contains(text(),"Automated number portability")]').should('be.visible');
    
    });  
  //Scenario#2
  
  When('I scroll to “Careers” link at the bottom of the page', async() => {
   cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').scrollIntoView();
    });
  Then('I click into “Careers” link', async() => {
    cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click();
      });
  Then('I redirected to “Careers” page', async() => {    
      whatPageWeOn.pageShouldBe('https://telnyx.com/company/careers');
      });
  Then('I scroll to the headline “The Telnyx experience”', async() => {    
        cy.xpath('//h2[contains(text(),"The Telnyx experience")]').scrollIntoView();
        cy.xpath('//h3[contains(text(),"Flexible, global team")]').should('be.visible');
        cy.xpath('//h3[contains(text(),"Modern life, modern space")]').should('be.visible');
        cy.xpath('//h3[contains(text(),"Helping you grow")]').should('be.visible');
        cy.xpath('//h3[contains(text(),"We have fun too!")]').should('be.visible');
        
        });
        //Scenario#3
  
  When('I scroll to the “Momentum leader and highest satisfaction in G2 CPaaS grid” header of the page', async() => {
    cy.contains('Momentum leader and highest satisfaction in G2 CPaaS grid').scrollIntoView();
  });
  Then('I check for a “list of awards and nominations” for summer 2021.', async() => {
        mainpage.listOfAwardsBestRelationshipSummer.scrollIntoView().should('be.visible');
        mainpage.listOfAwardsBestResultsSummer.should('be.visible');
        mainpage.listOfAwardsBestUsabilitySummer.should('be.visible');
        mainpage.listOfAwardsLeaderSummer.should('be.visible');
        mainpage.listOfAwardsBestMomentumLeaderSummer.should('be.visible');
        mainpage.listOfAwardsBestMostImplementableSummer.should('be.visible');        
       });