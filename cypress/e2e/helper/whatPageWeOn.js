class WhatPageWeOn {
  pageShouldBe(expectedPage){
    cy.location().should((loc) => {
      expect(loc.href).to.eq(expectedPage);
    })
  }
  pageByHostname(expectedHostname){
    cy.location(cy.url()).should((loc) => {
      expect(location.hostname).to.eq(expectedHostname);
    })
  }
  currentUrlShouldInclude(expectedUrl){
  cy.url().should('include', expectedUrl);  
  }
  
}
module.exports = new WhatPageWeOn();