import { expect } from '@playwright/test';
import { test } from '../parameters';

test('checkout page', async ({ page, username }) => {
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

  await page.locator('[data-test="checkout"]').click();

  // on the shipping information form page, fill out the shipping information form by entering your first name, last name and zip code
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Edwin');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Bartlett');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('6000');
  await page.locator('[data-test="continue"]').click();

  // verify that the changes are reflected on the shipping information form page
  const cartItems = page.locator('[data-test="inventory-item"]');
  const cartItemsCount = await cartItems.count();
  expect(cartItemsCount).toBe(2);

  // complete the purchase process and verify that the order is successful
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});