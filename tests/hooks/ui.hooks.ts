import { After, Before, Status } from "@cucumber/cucumber";
import { BasePage } from "../../src/pages/base.page";

import { driverInstance } from "../../src/core/driver";
import { configPage } from "../../userData";

Before({ name: 'Before UI Hook', tags: '@ui-tests' }, async function () {
    await driverInstance.startDriver()
    await driverInstance.goToPage(configPage.linkLogin)
});

After({ name: 'After UI Hook', tags: '@ui-tests' }, async function () {
    await driverInstance.closeDriver();
});
