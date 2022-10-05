Feature: “Report Abuse” form --> reCAPTCHA validation

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Check “reCAPTCHA validation required” in Report Abuse form
    When I scroll to the “Report Abuse” link in the bottom of the page
    Then I click “Report Abuse” link
    Then I check “reCAPTCHA validation”