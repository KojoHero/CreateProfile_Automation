@COMMUNITY-370
@REQ_COMMUNITY-2
Feature: Marketplace

	#Tests An organizer user should be able to create a profile page on the platform.
	#
	#*Acceptance Criteria:*
	#
	#Given: The business user should have signed up and logged in (View individual Profile)
	#
	## A user should be able to view the profile page with the details they provided when they click on the Profile
	## The page consists of these fields: *business Title, *Category, region/province/state, description, city, town *location (GPS), *email, *phone, website, description, and profile logo
	## All fields should be validated.
	## On pressing a save button, form data should be saved in the database
	## The user should be able to update this information via add, remove, update operations when clicked Edit
	## Email can only be changed from account settings
	@TEST_COMMUNITY-422 @REQ_COMMUNITY-15 @TESTSET_COMMUNITY-421
	Scenario: Verify if users can update their profile information
		Given User visits the community platform and logs in      
				    When  User goes to edit profile      
				    And   User taps on organization title
				    And   User taps on website
				    And   User taps on phone number
				    And   User taps on digital address
				    And   User taps on Town
				    And   User taps on Description  
				    Then  when user click on save
				    Then  user should be told profile updated
