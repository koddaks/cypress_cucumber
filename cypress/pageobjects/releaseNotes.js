class ReleaseNotes{
  get voiceApi(){
    return cy.get('[for="voice api"]');
  }
  get whatsApp(){
    return cy.get('[for="whatsapp"]');
  }
  get dlc(){
    return cy.get('[for="10dlc"]');
  }
  get videoRooms(){
    return cy.get('[for="video rooms"]');
  }
  get verifyApi(){
    return cy.get('[for="verify api"]');
  }
  get fax(){
    return cy.get('[for="fax"]');
  }
  get reporting(){
    return cy.get('[for="reporting"]');
  }
  get telephony(){
    return cy.get('[for="telephony"]');
  }
  get network(){
    return cy.get('[for="network"]');
  }
  get wireless(){
    return cy.get('[for="wireless"]');
  }
  get webrtc(){
    return cy.get('[for="webrtc"]');
  }
  get missionControlPortal(){
    return cy.get('[for="mission control portal"]');
  }
  get api(){
    return cy.get('[for="api"]');
  }
  get account(){
    return cy.get('[for="account"]');
  }
  get messaging(){
    return cy.get('[for="messaging"]');
  }
  get voiceApi(){
    return cy.get('[for="numbers"]');
  }

}
module.exports = new ReleaseNotes();