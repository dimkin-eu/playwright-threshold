// example.spec.ts
import { test, expect } from '@playwright/test';

test('example test minor changes, default threashhold', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
})

test('example test minor changes, threashhold 0.1', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.1});
})

test('example test minor changes, threashhold 0.2', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.2});
})

test('example test minor changes, threashhold 0.3', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.3});
})

test('example test minor changes, threashhold 0.4', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.4});
})

test('example test minor changes, threashhold 0.5', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.5});
})

test('example test minor changes, threashhold 0.6', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.6});
})

test('example test minor changes, threashhold 0.7', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.7});
})

test('example test minor changes, threashhold 0.8', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.8});
})

test('example test minor changes, threashhold 0.9', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:0.9});
})

test('example test minor changes, threashhold 1', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing.png', {threshold:1});
})

test('example test major changes, default threashhold', async ({ page }) => {
    await page.goto('https://playwright.dev');
    expect(await page.screenshot()).toMatchSnapshot('landing2.png');
  })

test('example test major changes, threashhold 0.1', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.1});
})

test('example test major changes, threashhold 0.2', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.2});
})

test('example test major changes, threashhold 0.3', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.3});
})

test('example test major changes, threashhold 0.4', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.4});
})

test('example test major changes, threashhold 0.5', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.5});
})

test('example test major changes, threashhold 0.6', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.6});
})

test('example test major changes, threashhold 0.7', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.7});
})

test('example test major changes, threashhold 0.8', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.8});
})

test('example test major changes, threashhold 0.9', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:0.9});
})

test('example test major changes, threashhold 1', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.screenshot()).toMatchSnapshot('landing2.png', {threshold:1});
})
