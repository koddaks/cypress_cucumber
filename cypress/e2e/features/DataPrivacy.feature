Feature: “Data & Privacy” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Check “image” in the top of the Data & Privacy page.
    When I scroll to the “Data & Privacy” link
    Then I click “Data & Privacy” link.
    Then I check To the right of the heading "Data & Privacy" image