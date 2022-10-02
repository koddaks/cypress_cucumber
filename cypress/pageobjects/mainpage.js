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


}

module.exports = new MainPage();