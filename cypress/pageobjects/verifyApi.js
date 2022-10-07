class VerifyApiPage{
  get getFreeTestingCreditBtn(){
    return cy.get('.sc-31a8cefb-10 > .sc-2508c730-0 > .sc-2508c730-1 > :nth-child(1) > .sc-5d3a275a-0 > .sc-5d3a275a-1');
  }
}
module.exports = new VerifyApiPage();