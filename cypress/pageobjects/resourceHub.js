class ResourceHub {
  get smsGuideImage(){
    return cy.get('[src*=icon_duotone_products_sms]');
  }
  get smsGuide(){
    return cy.get(':nth-child(1) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get smsGuideText(){
    return cy.get('');
  }

  
  get voipGuideImage(){
    return cy.get('[src*=Voice_API]');
  }
  get voipGuide(){
    return cy.get(':nth-child(2) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get voipGuideText(){
    return cy.get('');
  }


  get sipTrunkGuideImage(){
    return cy.get('[src*=icon_duotone_products_sip-trunking]');
  }
  get sipTrunkGuide(){
    return cy.get(':nth-child(3) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get sipTrunkGuideText(){
    return cy.get('');
  }


  get webRtcGuideImage(){
    return cy.get('[src*=icon_duotone_products_webrtc]');
  }
  get webRtcGuide(){
    return cy.get(':nth-child(4) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get webRtcGuideText(){
    return cy.get('');
  }


  get iotGuideImage(){
    return cy.get('[src*=icon_duotone_products_wireless]');
  }
  get iotGuide(){
    return cy.get(':nth-child(5) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get iotGuideText(){
    return cy.get('');
  }


  get twoFactorAuthenticationGuideImage(){
    return cy.get('[src*=icon_duotone_products_verify-api]');
  }
  get twoFactorAuthenticationGuide(){
    return cy.get(':nth-child(6) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get twoFactorAuthenticationGuideText(){
    return cy.get('');
  }


  get faxGuideImage(){
    return cy.get('[src*=icon_duotone_products_fax-api]');
  }
  get faxGuide(){
    return cy.get(':nth-child(7) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get faxGuideText(){
    return cy.get('');
  }


  get shakenStirGuideImage(){
    return cy.get('[src*=icon_duotone_products_shaken-stir]');
  }
  get shakenStirGuide(){
    return cy.get(':nth-child(8) > .sc-3e56386e-4 > .sc-3e56386e-5 > .sc-3e56386e-2 > .Text-sc-5o8owa-0');
  }
  get shakenStirGuideText(){
    return cy.get('');
  }

 

}
module.exports = new ResourceHub();
