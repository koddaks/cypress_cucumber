class ReportAbusePage { 
  
  get reCaptchaStart(){   
    return cy.get('[id="recaptcha-accessible-status"]');
  }
  get reCaptchaImage(){
    return cy.get('[class="sc-df3e57b4-6 ieJwwQ"]');
  }
  get submitBtn(){
    return cy.get('[type="submit"]');
  }
  
}
module.exports = new ReportAbusePage();