import { expect } from '@playwright/test';
import { test } from '../parameters';

test('adding products', async ({ page, username }) => {
  // open the web application
  await page.goto('https://www.saucedemo.com/');

  // enter valid credentials and click the login button
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // ddd one specific product (sauce labs fleece jacket) to the shopping cart
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  // add any one random product to the shopping cart, selection should be dynamic
  const inventoryItems = page.locator('button:text("Add to cart")');
  const inventoryItemsCount = await inventoryItems.count();
  await inventoryItems.nth(Math.floor(Math.random() * inventoryItemsCount - 1)).click();

  // navigate to the shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // verify that there are 2 products successfully added to the cart
  const cartItems = page.locator('[data-test="inventory-item"]');
  const cartItemsCount = await cartItems.count();
  expect(cartItemsCount).toBe(2);
});