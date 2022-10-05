Feature: Facebook page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Redirect to “Facebook”.
    When I scroll to “Follow on Facebook” link at the bottom of the page
    Then I click into “Follow on Facebook” link
    Then I redirected to “Facebook” page
    