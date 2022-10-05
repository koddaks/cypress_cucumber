const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    return config;
}

module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        supportFile: false,
        setupNodeEvents,
        devServer: {
            delay: 500,
            force404: false,
            ignore: (xhr) => {
                return true;
            },
        },
    },
});
