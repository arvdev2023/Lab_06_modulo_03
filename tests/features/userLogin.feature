@login @ui-tests
Feature: Login into Todoist App

Scenario: Todoist Login
    Given The user sets the email
    And The user sets the password
    When The user clicks the Login button
    #Then The user should see "app/today" text on the URL
