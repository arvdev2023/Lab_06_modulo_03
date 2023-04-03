import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { loginPage } from "../../src/pages/login.page";
import { headerPage } from "../../src/pages/components/header.page";
import { formProject } from "../../src/pages/components/form-project.page";
import { configPage } from "../../userData";

setDefaultTimeout(60 * 1000)

Given("The user fills the user and password", async function () {
    await loginPage.setUserName(configPage.userName)
    await loginPage.setPassword(configPage.passName)
})
Given("The user logins into the app", async function () {
    await loginPage.submitLogin()
    await headerPage.isHomeIconVisible()
})


Given('The user moves the mouse on ProjectLabel', async function () {
    await verticalMenu.hoverProjectLabel()
})
Given('The user clicks on addProject button', async function () {
    await verticalMenu.clickAddProject()
    await formProject.formIsVisible()
})
Given('The user fills {string} on the form title', async function (titleForm: string) {
    //let nameProject = 'Nuevo Proyecto 01'
    await formProject.setProjectName(titleForm)
})
Given('The user clicks  on Favorite Option', async function () {
    await formProject.clickCheckProject()
})
Given('The user clicks on Panel Option', async function () {
    await formProject.clickPanelBoard()
})
When('The user clicks on submit button', async function () {
    await formProject.actionSubmit()
})