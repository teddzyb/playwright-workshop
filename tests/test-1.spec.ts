import { expect } from '@playwright/test';
import { test } from '../parameters';

test('login page', async ({ page, username }) => {
  // open the web application
  await page.goto('https://www.saucedemo.com/');

  // verify that the login page is displayed
  await expect(page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first()).toBeVisible();

  // enter valid credentials and click the login button
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // verify that the home/products page is displayed after successful login
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
});
