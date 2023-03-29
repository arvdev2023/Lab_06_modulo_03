import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "chai";
import { loginPage } from "../../src/pages/login.page";
import { configPage } from "../../userData";
import { headerPage } from "../../src/pages/components/header.page";
//https://todoist.com/app/today

setDefaultTimeout(60 * 1000)
Given('The user sets the email', async function () {
    await loginPage.setUserName(configPage.userName)
})

Given('The user sets the password', async function () {
    await loginPage.setPassword(configPage.passName)
})
When('The user clicks the Login button', async function () {
    await loginPage.submitLogin()
    await headerPage.isHomeIconVisible()
})
/**Then('he user should see {string} text on the URL', async function (url) {
    expect(url).equals("app/today")
})**/