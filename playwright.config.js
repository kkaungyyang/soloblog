export const config = {
  testDir: 'tests',
  timeout: 30000,
  browserType: 'chrome',
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 120 * 1000,
  },
  launchConfig: {
    headless: false,
  },
  contextConfig: {
    viewport: { width: 1280, height: 720 },
  },
  use: {
    // Configure browser and context here
    baseURL: 'http://localhost:3000',
    browserName: 'firefox',
    headless: false,
    launchOptions: {
      slowMo: 50,
    },
  },
};
