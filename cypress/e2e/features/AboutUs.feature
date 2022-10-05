Feature: “About Us” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Click “About Us” link.
    When I scroll to “About Us” link at the bottom of the page
    Then I click into “About Us” link
    Then I redirected to “About Us” page
    Then I scroll to the headline “What makes us different”