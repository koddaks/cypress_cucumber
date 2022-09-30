const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const configQA = require("./config/config");

function setConfigurationFromFile(config) {
  Object.keys(configQA).forEach(key =>{
    config[key] = configQA[key];
  })
}


module.exports = defineConfig({
  projectId: 'v7dtcf',
  e2e: {
    async setupNodeEvents(on, config) {
      setConfigurationFromFile(config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://telnyx.com",
    chromeWebSecurity: false,
  },
});
