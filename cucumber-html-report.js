const newLocal = "multiple-cucumber-html-reporter";
const report = require(newLocal);
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport",
  metadata: {
    browser: {
      name: "chrome",
      version: "106",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});