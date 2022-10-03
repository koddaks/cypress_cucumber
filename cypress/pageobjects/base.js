const cookiesButton = '//*[contains(text(),"Accept and close")';
const mainUrl = 'https://telnyx.com/';
const supportCenterUrl = 'https://support.telnyx.com/en/';
class Base{
    get cookiesButton() {
        return cy.get(cookiesButton);
    };
    navigate(){
         cy.visit(mainUrl);
    };
    navigateToSupportCenter(){
      cy.visit(supportCenterUrl);
 };
    scrollandclick(Element){
         Element.scrollIntoView();
         Element.click({force: true});
    }
};
module.exports = new Base();