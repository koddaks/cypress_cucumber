Feature: “Sliders” on main page.

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Check “Sliders” on main page.
    When I scroll to the “How much will you save?” text of the page
    Then I check “Make outbound calls” slider