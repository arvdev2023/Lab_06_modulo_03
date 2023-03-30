import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";
import { formProject } from "../../src/pages/components/form-project.page";

setDefaultTimeout(60 * 1000)
Given('he user moves the mouse on ProjectLabel', async function () {
    await verticalMenu.hoverProjectLabel()
})
Given('The user clicks on addProject button', async function () {
    await verticalMenu.clickAddProject()
})
Given('The user fills the text on form', async function () {
    let nameProject = 'Nuevo Proyecto 01'
    await formProject.setProjectName(nameProject)
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