import { After, Before, Status } from "@cucumber/cucumber";

import { driverInstance } from "../../src/core/driver";

Before({name: 'Before UI Hook', tags: '@ui-tests'},async function() {
    await driverInstance.startDriver()
});

After({name: 'After UI Hook', tags: '@ui-tests'},async function() {    
    await driverInstance.closeDriver();
});
