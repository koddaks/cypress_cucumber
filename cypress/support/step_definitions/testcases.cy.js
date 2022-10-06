import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
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
// cy.xpath('//span[contains(text(),"About Us")]').scrollIntoView();
cy.contains('About Us').scrollIntoView();
});
Then('I click into “About Us” link', async() => {
  // cy.xpath('//span[contains(text(),"About Us")]').click();
  cy.contains('About Us').click();
  });
Then('I redirected to “About Us” page', async() => {    
  whatPageWeOn.pageShouldBe('https://telnyx.com/company/about');
  });
  Then('I scroll to the headline “What makes us different”', async() => {    
    // cy.xpath('//h2[contains(text(),"What makes us different")]').scrollIntoView();
    cy.contains('What makes us different').scrollIntoView();
    // cy.xpath('//h3[contains(text(),"Security through a global backbone")]').should('be.visible');
    cy.contains('Security through a global backbone').should('be.visible');
    // cy.xpath('//h3[contains(text(),"Multi-cloud uptime")]').should('be.visible');
    cy.contains('Multi-cloud uptime').should('be.visible');
    // cy.xpath('//h3[contains(text(),"We own our own numbers")]').should('be.visible');
    cy.contains('We own our own numbers').should('be.visible');
    // cy.xpath('//h3[contains(text(),"Automated number portability")]').should('be.visible');
    cy.contains('Automated number portability').should('be.visible');    
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
    // cy.xpath('//h2[contains(text(),"The Telnyx experience")]').scrollIntoView();
    cy.contains('The Telnyx experience').scrollIntoView();
    // cy.xpath('//h3[contains(text(),"Flexible, global team")]').should('be.visible');
    cy.contains('Flexible, global team').should('be.visible');
    // cy.xpath('//h3[contains(text(),"Modern life, modern space")]').should('be.visible');
    cy.contains('Modern life, modern space').should('be.visible');
    // cy.xpath('//h3[contains(text(),"Helping you grow")]').should('be.visible');
    cy.contains('Helping you grow').should('be.visible');
    // cy.xpath('//h3[contains(text(),"We have fun too!")]').should('be.visible');
    cy.contains('We have fun too!').should('be.visible'); 
        });
  //Scenario#3
  When('I scroll to the “Momentum leader and highest satisfaction in G2 CPaaS grid” header of the page', async() => {
    cy.contains('Momentum leader and highest satisfaction in G2 CPaaS grid').scrollIntoView();
  });
  Then('I check for a “list of awards and nominations” for summer 2021.', async() => {
    mainpage.listOfAwardsEaseOfUse.scrollIntoView({ duration: 2000 }).should('be.visible');
    mainpage.listOfAwardsBestResults.should('be.visible');
    mainpage.listOfAwardsBestUsability.should('be.visible');
    mainpage.listOfAwardsLeader.should('be.visible');
    mainpage.listOfAwardsBestMomentumLeader.should('be.visible');
    mainpage.listOfAwardsBestMostImplementable.should('be.visible');
    mainpage.listOfAwardsBestMostImplementable.should('be.visible');        
    mainpage.listOfAwardsBestMostImplementable.should('be.visible');
       });
  //Scenario#4
  When('I scroll to the “Data & Privacy” link', async() => {
    mainpage.dataPrivacyLink.scrollIntoView();
         });
  Then('I click “Data & Privacy” link.', async() => {
    mainpage.dataPrivacyLink.click();
    whatPageWeOn.currentUrlShouldInclude('/data-privacy')
         
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
    whatPageWeOn.currentUrlShouldInclude('/report-abuse')
         
           });
  Then('I check “reCAPTCHA validation”', async() => {    
    reportAbusePage.submitBtn.scrollIntoView({ duration: 2000 });
    reportAbusePage.reCaptchaImage.should('be.visible');
    cy.screenshot();
           });
  //Scenario#6
   Given('I am on the Support Center page', () => {
   base.navigateToSupportCenter();
   whatPageWeOn.pageShouldBe('https://support.telnyx.com/en/');
          });
  When('I type “Sign up” in search field and press Enter on the keyboard', async() => {
    supportCenter.searchField.type('Sign up{Enter}');
  });
 
  Then('I click on the first search “result”', async() => {
    supportCenter.searchResultHowSignUp.click();
    whatPageWeOn.currentUrlShouldInclude('how-to-sign-up-for-a-telnyx-account');
           });
  Then('I scroll to header “Signing up for an account” and find example registration form image under it', async() => {
    supportCenter.searchResultSignUpImage.scrollIntoView({ duration: 2000 }).should('be.visible').screenshot();
           });
  //Scenario#7  
   When('I scroll to the “Website Terms and Conditions” link at the bottom of the page', async() => {
     mainpage.termsAndConditionsLink.scrollIntoView();
   });
  
   Then('I click “Website Terms and Conditions” link.', async() => {
    mainpage.termsAndConditionsLink.click();
    whatPageWeOn.currentUrlShouldInclude('/terms-and-conditions')
            });
   Then('I scroll to Headline  “Terms and Conditions”', async() => {
     termsAndConditions.termsAndConditionsHeader.scrollIntoView().screenshot();  
     termsAndConditions.terms.should('contain', 'Terms');
     termsAndConditions.termsText.should('contain', 'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.');


     termsAndConditions.useLicense.should('contain', 'Use License');
     termsAndConditions.useLicenseText.should('contain', 'Permission is granted to temporarily download one copy of the materials on Telnyx\’s website for personal, non-commercial transitory viewing only. This the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose, attempt to decompile or reverse engineer any software contained on Telnyx\’s website, remove any copyright or other proprietary notations from the materials, and transfer the materials to another person or “mirror” the materials on any other server.');


     termsAndConditions.Disclaimer.should('contain', 'Disclaimer');
     termsAndConditions.DisclaimerText.should('contain', 'The materials on Telnyx\’s website are provided “as is”. Telnyx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Telnyx does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.');


     termsAndConditions.limitations.should('contain', 'Limitations');
     termsAndConditions.limitationsText.should('contain', 'In no event shall Telnyx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Telnyx\’s website, even if Telnyx or a Telnyx authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.');


     termsAndConditions.revisionsAndErrors.should('contain', 'Revisions And Errors');
     termsAndConditions.revisionsAndErrorsText.should('contain', 'The materials appearing on our website could include technical, typographical, or photographic errors. Telnyx does not warrant that any of the materials on its website are accurate, complete, or current. Telnyx may make changes to the materials contained on its website at any time without notice. Telnyx does not, however, make any commitment to update the materials. We nor any party involved in creating, producing or delivering this website shall be liable for any direct, incidental, consequential, indirect or punitive damages or any damages whatsoever arising out of your access, use or inability to use this site or on any other hyper-linked website, or any errors or omissions in the content thereof.');


     termsAndConditions.links.should('contain', 'Links');
     termsAndConditions.linksText.should('contain', 'Telnyx has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. We are not responsible for the accuracy or reliability of the information on such linked websites and we cannot vouch for the data, opinions, advice or statements made there. Even if we visit those websites, we cannot be responsible for updating or correcting false or misleading information on any third-party web site. Further, we are not responsible for the goods or services that may be offered on other web sites.');


     termsAndConditions.modificationsInSiteTermsOfUse.should('contain', 'Modifications In Site Terms Of Use');
     termsAndConditions.modificationsInSiteTermsOfUseText.should('contain', 'Telnyx may revise these Terms of use for its website at any time without notice. By using our website you are agreeing to be bound by the current version of the Terms and Conditions of Use.');


     termsAndConditions.governingLaw.should('contain', 'Governing Law');
     termsAndConditions.governingLawText.should('contain', 'Any claim relating to Telnyx\’s website shall be governed by the laws of the State of Illinois without regard to its conflict of law provisions.');


     termsAndConditions.indemnification.should('contain', 'Indemnification');
     termsAndConditions.indemnificationText.should('contain', 'You agree to indemnify, defend and hold harmless Telnyx, its parent companies, subsidiaries, affiliated companies, joint venturers, business partners, licensors, employees, and agents from and against all claims, losses, expenses, damages and costs (including, but not limited to, direct, incidental, consequential, exemplary and indirect damages), and reasonable attorneys\’ fees, resulting from or arising out of your use, misuse, or inability to use the website or any violation by you of these Terms.');


     termsAndConditions.termination.should('contain', 'Termination');
     termsAndConditions.terminationText.should('contain', 'Telnyx reserves the right, without notice and in its sole discretion, to terminate your license to use the website and to block or prevent your future access to, and use of, the website.');
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
  cy.screenshot();
  // cy.get('[class="focus-page"]').screenshot(); I have exception. idkn why? but screenshot is done.
});