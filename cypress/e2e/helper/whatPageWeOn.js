class WhatPageWeOn {
  whatPageWeOn(expectedPage){
    cy.location().should((loc) => {
      expect(loc.href).to.eq(expectedPage);
    })
  }
}
module.exports = new WhatPageWeOn();