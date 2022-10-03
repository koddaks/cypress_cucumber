class ReportAbusePage { 
  
  get reCaptchaStart(){   
    return cy.get('[id="recaptcha-accessible-status"]');
  }
  get reCaptchaImage(){
    return cy.get('[class="sc-d598de4c-0 hXPsjv"]');
  }
  get submitBtn(){
    return cy.get('[type="submit"]');
  }
  
}
module.exports = new ReportAbusePage();