Feature: “Number Lookup” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: “Number Lookup” image in the top of page
    When I scroll to the “Number Lookup” link at the bottom of the page
    Then I click “Number Lookup” link.
    Then I check image to the right from “Know the details behind every number with Phone Number Lookup” header