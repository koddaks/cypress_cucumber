const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

function setConfigurationFromFile(config) {
  Object.keys(configQA).forEach(key =>{
    config[key] = configQA[key];
  })
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },    
    chromeWebSecurity: false,
  },
  screenshotOnRunFailure:	true,
  video:true,
  defaultCommandTimeout: 6000,
  execTimeout: 5000,
  taskTimeout: 5000,
  pageLoadTimeout: 30000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos', 
  viewportHeight:	1080,
  viewportWidth: 1980,
e2e: {
  specPattern: "**/*.feature",
  supportFile: false, 
  devServer: {
    delay: 500,
    force404: false,
    ignore: (xhr) => {
        return true;
  },
},
},
});