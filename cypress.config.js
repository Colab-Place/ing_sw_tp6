const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASEURL
  },
  env: {
    testemail: process.env.TESTEMAIL,
    testpass: process.env.TESTPASS
  }
})