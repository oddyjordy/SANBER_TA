const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  video: false
});
