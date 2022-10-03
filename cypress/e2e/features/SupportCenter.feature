Feature: “Support Center” help to --> find example registration form

  Background:
    Given I am on the Support Center page

  Scenario: Search results for “Sign up” in Support Center search
    When I type “Sign up” in search field and press Enter on the keyboard
    Then I click on the first search “result”
    Then I scroll to header “Signing up for an account” and find example registration form image under it