class TermsAndConditions{
    get termsAndConditionsHeader(){
      return cy.get('[class="sc-69277c81-0 Va-dul"]');
    }

    get terms(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(2)');
    }
    get termsText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(3)');
    }



    get useLicense(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(4)');
    }
    get useLicenseText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(5)');
    }
    

    get Disclaimer(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(6)');
    }
    get DisclaimerText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(7)');
    }


    get limitations(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(8)');
    }
    get limitationsText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(9)');
    }

    get revisionsAndErrors(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(10)');
    }
    get revisionsAndErrorsText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(11)');
    }


    get links(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(12)');
    }
    get linksText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(13)');
    }
    get linksRecaptchaText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(14)');
    }


    get modificationsInSiteTermsOfUse(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(15)');
    }
    get modificationsInSiteTermsOfUseText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(16)');
    }

    

    get governingLaw(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(17)');
    }
    get governingLawText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(18)');
    }



    get indemnification(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(19)');
    }
    get indemnificationText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(20)');
    }



    get termination(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(21)');
    }
    get terminationText(){
      return cy.get('.sc-d8f5e61f-5 > div > :nth-child(22)');
    }
   


  
}
module.exports = new TermsAndConditions();