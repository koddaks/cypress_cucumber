Feature: LinkedIn page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Click “Connect on LinkedIn” link.
    When I scroll to “Connect on LinkedIn” link at the bottom of the page
    Then I click into “Connect on LinkedIn” link
    Then I redirected to “LinkedIn” page
