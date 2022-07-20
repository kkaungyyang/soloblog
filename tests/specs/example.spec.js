// import { test, expect } from '@playwright/test';
// import { load, close, getTitle } from './page_objects/index.js';
// test.describe('React App', () => {
//   test.beforeEach(async () => {
//     await load();
//   });

//   test.afterEach(async () => {
//     await close();
//   });

//   test('basic test', async ({ page }) => {
//     await page.goto('http://localhost:3000');
//     const title = page.locator('h1');
//     console.log('This is title', title);
//   });
// });
const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
  console.log('THIS IS THE URL: ', baseURL);
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
