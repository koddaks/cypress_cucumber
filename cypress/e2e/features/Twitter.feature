Feature: Twitter page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Click “Follow on Twitter” link.
    When I scroll to “Follow on Twitter” link at the bottom of the page
    Then I click into “Follow on Twitter” link
    Then I redirected to “Twitter” page