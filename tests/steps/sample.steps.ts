import { Given, When, Then } from '@cucumber/cucumber'
Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 1');

});
When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 2');
});
Then('I should be told {string}', function (input: string) {
    // Write code here that turns the phrase above into concrete actions
    console.log('Step 3', input);
});