import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/base");
const mainpage = require("../../pageobjects/mainpage");
const dataPrivacyPage = require("../../pageobjects/dataPrivacy");
const reportAbusePage = require("../../pageobjects/reportAbuse");
const supportCenter = require("../../pageobjects/supportCenter");
const termsAndConditions = require("../../pageobjects/termsAndConditions");
const whatPageWeOn = require("../../e2e/helper/whatPageWeOn");

Given('I am on the Telnyx page and click the cookies', () => {
  base.navigate();
  cy.contains('Accept and close').click();
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
        mainpage.listOfAwardsBestMostImplementableSummer.should('be.visible');        
    mainpage.listOfAwardsBestMostImplementableSummer.should('be.visible');
       });

  //Scenario#4
  When('I scroll to the “Data & Privacy” link', async() => {
    mainpage.dataPrivacyLink.scrollIntoView();
         });
  Then('I click “Data & Privacy” link.', async() => {
    mainpage.dataPrivacyLink.click();
         
           });
  Then('I check To the right of the heading "Data & Privacy" image', async() => {
    dataPrivacyPage.dataPrivacyImageInTheTop.should('be.visible').screenshot();
           });

  //Scenario#5
  When('I scroll to the “Report Abuse” link in the bottom of the page', async() => {
    mainpage.reportAbuseLink.scrollIntoView();
         });
  Then('I click “Report Abuse” link', async() => {
    mainpage.reportAbuseLink.click();
         
           });
  Then('I check “reCAPTCHA validation”', async() => {
    reportAbusePage.submitBtn.scrollIntoView({ duration: 2000 });
    reportAbusePage.reCaptchaImage.should('be.visible').screenshot();
           });

  //Scenario#6
   Given('I am on the Support Center page', () => {
   base.navigateToSupportCenter();
   whatPageWeOn.pageShouldBe('https://support.telnyx.com/en/')
          });
  When('I type “Sign up” in search field and press Enter on the keyboard', async() => {
    supportCenter.searchField.type('Sign up{Enter}');
  });
 
  Then('I click on the first search “result”', async() => {
    supportCenter.searchResultHowSignUp.click();
    whatPageWeOn.pageShouldBe('https://support.telnyx.com/en/articles/5295540-how-to-sign-up-for-a-telnyx-account');
           });
  Then('I scroll to header “Signing up for an account” and find example registration form image under it', async() => {
    supportCenter.searchResultSignUpImage.scrollIntoView({ duration: 2000 }).screenshot();
           });

  //Scenario#7  
   When('I scroll to the “Website Terms and Conditions” link at the bottom of the page', async() => {
     mainpage.termsAndConditionsLink.scrollIntoView();
   });
  
   Then('I click “Website Terms and Conditions” link.', async() => {
    mainpage.termsAndConditionsLink.click();
            });
   Then('I scroll to Headline  “Terms and Conditions”', async() => {
     termsAndConditions.termsAndConditionsHeader.scrollIntoView().screenshot();
            });


  //Scenario#8
  When('I scroll to “Follow on Facebook” link at the bottom of the page', async() => {
    mainpage.facebookLink.scrollIntoView();
  }); 
  Then('I click into “Follow on Facebook” link', async() => {
   mainpage.facebookLink.invoke('removeAttr', 'target').click();   
           });
  Then('I redirected to “Facebook” page', async() => {
  whatPageWeOn.currentUrlShouldInclude('facebook.com');
  cy.screenshot();
           });

  
  //Scenario#9
  When('I scroll to “Follow on Twitter” link at the bottom of the page', async() => {
    mainpage.twitterLink.scrollIntoView();
  }); 
  Then('I click into “Follow on Twitter” link', async() => {
   mainpage.twitterLink.invoke('removeAttr', 'target').click();
  });
  Then('I redirected to “Twitter” page', async() => {
  whatPageWeOn.currentUrlShouldInclude('twitter.com');
  cy.screenshot();
           });

  //Scenario#10
  When('I scroll to “Connect on LinkedIn” link at the bottom of the page', async() => {
    mainpage.linkedinLink.scrollIntoView();
  }); 
  Then('I click into “Connect on LinkedIn” link', async() => {
   mainpage.linkedinLink.invoke('removeAttr', 'target').click();
  });
  Then('I redirected to “LinkedIn” page', async() => {
  whatPageWeOn.currentUrlShouldInclude('linkedin.com');  
  // cy.get('[class="focus-page"]').screenshot(); I have exception. idkn why? but screenshot is done.
});