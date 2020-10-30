Feature: Creation of a business profile
         

Scenario: creation of business profile
    Given User visits the community platform and logs in   
    And   User clicks on view profile    
    When  User goes to edit profile      
    And   User taps on organization title
    And   User taps on website
    And   User taps on phone number
    And   User taps on Region
    And   User taps on digital address
    And   User taps on Town
    And   User taps on Description
    And   User taps on category   
    Then  when user click on save
    Then  user should be told profile updated   
    