const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    fromCity: "Mar del Plata",
    toCity: "Buenos Aires",
    fromDate: "27/07/2022",
    qtyAdults: "1",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
