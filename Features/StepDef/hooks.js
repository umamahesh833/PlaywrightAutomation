const { Before, After } = require('@cucumber/cucumber')


Before(async function () {
    console.log("Hooks ---- Before execution");
    console.log("Hooks ---- Delete cookies before execution");
})


After(async function (scenario) {
    console.log("Hooks ---- After execution");
    console.log("Hooks ---- End of each test, close all the browsers");
})