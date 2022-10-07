class NumberLookup{
  get numberLookupImageToTheRightFromFirstHeader(){
    return cy.get('[src*="hero_number_lookup__2_compressed"]');
  }
}
module.exports = new NumberLookup();