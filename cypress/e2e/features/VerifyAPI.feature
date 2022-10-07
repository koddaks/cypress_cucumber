Feature: “Verify API” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Click “Verify API” link.
    When I scroll to “Verify API” link at the bottom of the page
    Then I click into “Verify API” link
    Then I redirected to “Verify API” page
    Then I click into “Get Free Testing Credit” button
    Then I redirected to “sign-up” page