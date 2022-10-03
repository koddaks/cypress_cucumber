class DataPrivacy {
get dataPrivacyImageInTheTop(){
  return cy.get('[src*="hero_sms_1_compressed.svg"]');
}

}
module.exports = new DataPrivacy()