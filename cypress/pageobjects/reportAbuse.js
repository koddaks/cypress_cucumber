class ReportAbusePage { 
  
  get reCaptchaStart(){   
    return cy.get('[id="recaptcha-accessible-status"]');
  }
  get reCaptchaImageSelect(){
    return cy.get('[id="rc-imageselect"]');
  }
  get reCaptchaForm(){
    return cy.get('[class="sc-d598de4c-0 hXPsjv"]');
  }
  
}
module.exports = new ReportAbusePage();