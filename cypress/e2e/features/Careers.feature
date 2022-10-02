Feature: Careers page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Click “Careers” link.
    When I scroll to “Careers” link at the bottom of the page
    Then I click into “Careers” link
    Then I redirected to “Careers” page
    Then I scroll to the headline “The Telnyx experience”