Feature: “Website Terms and Conditions” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: “Terms and Conditions” should include 10 headers
    When I scroll to the “Website Terms and Conditions” link at the bottom of the page
    Then I click “Website Terms and Conditions” link.
    Then I scroll to Headline  “Terms and Conditions”