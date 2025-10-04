// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter : "cypress-mochawesome-reporter",    // for html reports
//   e2e: {
//     video : true,
//     // screenshotOnRunFailure : true,
    
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on); // for html report
//       // implement node event listeners here
//     },
//   },
// });
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
// });
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
  
    setupNodeEvents(on, config) {
      // Add Cucumber Preprocessor
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
  },
});