const { devices } = require('@playwright/test'); // leave for later
const config = {
  workers: 2,
  retries: 2,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 1000,
    },
    video: 'on',
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: {
        browserName: 'chromium',
      },
    },
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
  ],
  timeout: 30000,
  globalTimeout: 600000,
  testDir: 'tests',
};

module.exports = config;
