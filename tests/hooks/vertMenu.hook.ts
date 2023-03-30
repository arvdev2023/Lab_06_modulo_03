import { After, Before, Status } from "@cucumber/cucumber";
import { BasePage } from "../../src/pages/base.page";
import { loginPage } from "../../src/pages/login.page";

import { configPage } from "../../userData";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
Before({ name: 'Before UI Hook', tags: '@addProject' }, async function () {

    await driverInstance.startDriver()
    await driverInstance.goToPage(configPage.linkLogin)
    await loginPage.setUserName(configPage.userName)
    await loginPage.setPassword(configPage.passName)
    await loginPage.submitLogin()
    await headerPage.isHomeIconVisible()

});

After({ name: 'After UI Hook', tags: '@addProject' }, async function () {
    await driverInstance.closeDriver();
});