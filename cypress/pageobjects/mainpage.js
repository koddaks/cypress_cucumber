class MainPage {
   get cookiesButton() {
    return cy.get('//*[contains(text(),"Accept and close")');
   }
  
   get listOfAwards() {
    return cy.get('div[class="sc-639a09db-0 kDMByb"]');
   }
   get listOfAwardsBestRelationshipSummer() {
    return cy.get('img[src*="best-relationship-summer-2021__1_.svg?"]');
   }
   get listOfAwardsBestResultsSummer() {
    return cy.get('img[src*="best-results-summer-2021__1_.svg?"]');
   }
   get listOfAwardsBestUsabilitySummer() {
    return cy.get('img[src*="best-usability-summer-2021__1__1_1.svg?"]');
   }
   get listOfAwardsLeaderSummer() {
    return cy.get('img[src*="g2-leader-summer-2021__1_.svg?"]');
   }
   get listOfAwardsBestMomentumLeaderSummer() {
    return cy.get('img[src*="g2-momentum-leader-summer-2021__1_.svg?"]');
   }
   get listOfAwardsBestMostImplementableSummer() {
    return cy.get('img[src*="g2-most-implementable-summer-2021__1_.svg?"]');
   }

   get dataPrivacyLink(){
    return cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get reportAbuseLink(){
    return cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(5) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get supportCenterLink(){
    return cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  
  get termsAndConditionsLink(){
    return cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span');
  }
  get facebookLink(){
    return cy.get('[href="https://www.facebook.com/Telnyx/"]');
  }
  get twitterLink(){
    return cy.get('[href="https://twitter.com/telnyx"]');
  }
  get linkedinLink(){
    return cy.get('[href="https://www.linkedin.com/company/telnyx/"]');
  }

  


}

module.exports = new MainPage();