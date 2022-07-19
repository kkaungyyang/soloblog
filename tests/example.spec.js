import { test, expect } from '@playwright/test';
import { load, close, getTitle } from './page_objects/index.js';
test.describe('React App', () => {
  test.beforeEach(async () => {
    await load();
  });

  test.afterEach(async () => {
    await close();
  });

  test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const title = page.locator('h1');
    console.log('This is title', title);
  });
});
