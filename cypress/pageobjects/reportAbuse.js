class ReportAbusePage { 
  
  get reCaptchaStart(){   
    return cy.get('[id="recaptcha-accessible-status"]');
  }
  get reCaptchaImage(){
    return cy.get('[data-type="image"]');
  }
  get submitBtn(){
    return cy.get('[type="submit"]');
  }
  
}
module.exports = new ReportAbusePage();