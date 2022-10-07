Feature: “Release Notes” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: In the “Filter release notes by product” select all the checkboxes
    When I scroll to the “Release Notes” link in the bottom of the page
    Then I click “Release Notes” link.
    Then I select all the checkboxes in the “Filter release notes by product” section