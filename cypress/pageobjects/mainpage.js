class MainPage {
   get cookiesButton() {
    return cy.get('//*[contains(text(),"Accept and close")');
   }
  
  get exploreOurProductsBtn() {
    return
    // return cy.get('//*[contains(text(),"Explore our products") and @href="/products"]');
  }



}

module.exports = new MainPage();