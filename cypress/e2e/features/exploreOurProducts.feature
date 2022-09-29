Feature: Verify “Telnyx adds AnchorSite™ Point of Presence in Miami” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Click Explore our products button.
     When I scroll to "Explore our products" button  and click into it
     Then I redirected to the https://telnyx.com/products