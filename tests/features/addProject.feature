@addProject

Feature: Add Project on Todoist App

Scenario: Add Project
Given The user fills the user and password
And The user logins into the app 
And The user moves the mouse on ProjectLabel
And The user clicks on addProject button
And The user fills "Proyecto Test" on the form title
And The user clicks  on Favorite Option
And The user clicks on Panel Option
When The user clicks on submit button