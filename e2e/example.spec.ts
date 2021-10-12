// example.spec.ts
import { test, expect } from '@playwright/test';

test('example test fails', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.7});
})

test('example test passes', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.8});
})
