class MainPage {
   get cookiesButton() {
    return cy.get('//*[contains(text(),"Accept and close")');
   }
  
   get listOfAwards() {
    return cy.get('div[class="sc-639a09db-0 kDMByb"]');
   }
   get listOfAwardsBestRelationship() {
    return cy.get('img[src*="best-relationship-summer-2021__1_.svg?"]');
   }
   get listOfAwardsEaseOfUse() {
    return cy.get('[src*="EaseOfUse.svg?w=94"]');
   }
   
   get listOfAwardsBestResults() {
    return cy.get('[src*="BestResults"]');
   }
   get listOfAwardsBestUsability() {
    return cy.get('[src*="BestUsability"]');
   }
   get listOfAwardsLeader() {
    return cy.get('[src*="CommunicationPlatformasaService_Leader_Leader"]');
   }
   get listOfAwardsBestMomentumLeader() {
    return cy.get('[src*="MomentumLeader"]');
   }
   get listOfAwardsBestMostImplementable() {
    return cy.get('[src*="MostLikelyToRecommend"]');
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