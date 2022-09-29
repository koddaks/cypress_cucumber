const cookiesButton = '//*[contains(text(),"Accept and close")';
const mainUrl = 'https://telnyx.com/';
class Base{
    get cookiesButton() {
        return cy.get(cookiesButton);
    };
    navigate(){
         cy.visit(mainUrl);
    };
    scrollandclick(Element){
         Element.scrollIntoView();
         Element.click({force: true});
    }
};
module.exports = new Base();