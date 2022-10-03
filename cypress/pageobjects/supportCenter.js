class SupportCenter{
get searchField(){
  return cy.get('[name="q"]');
}
get searchResultHowSignUp(){
  return cy.get('[href="/en/articles/5295540-how-to-sign-up-for-a-telnyx-account"]');
}
get searchResultSignUpImage(){
  return cy.get('[alt*="Sign-up form"]');
}


}
module.exports = new SupportCenter();