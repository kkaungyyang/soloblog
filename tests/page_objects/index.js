import { config } from '../../playwright.config.js';

const rootSelector = '#root';
let browser, context, page;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
  browser = await browserType.launch(config.launchConfig);
  context = await browser.newContext(config.contextConfig);
  page = await context.newPage(baseURL);
};

export const close = async () => await browser.close();

export const getTitle = async () => await page.title();
