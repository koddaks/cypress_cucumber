Feature: “Resource Hub” page

  Background:
    Given I am on the Telnyx page and click the cookies

  Scenario: Check eight titles and their corresponding images in “Resource Hub”
    When I scroll to the “Resource Hub” link
    Then I click “Resource Hub” link.
    Then I redirected to “Resource Hub” page
    Then I check “Resource Hub” for the presence of eight titles and their corresponding images