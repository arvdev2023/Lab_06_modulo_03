@login @ui-tests
Feature: Login into Todoist App

Scenario: Todoist Login
    Given the user sets the email
    And the user sets the password
    When the user clicks the Login button
    Then the user should see "app/today159" text on the URL
