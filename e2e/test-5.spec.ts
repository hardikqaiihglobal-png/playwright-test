import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone air');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  const iPhoneAirLightGoldName = 'iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life; Light Gold';

  const linkLocator = page.getByRole('link', { name: iPhoneAirLightGoldName, exact: true });

  // ✅ Option 1: Log the actual text from the DOM — visually verify in terminal
  const actualText = await linkLocator.textContent();
  console.log('Actual link text :', actualText?.trim());
  console.log('Expected variable :', iPhoneAirLightGoldName);

  // ✅ Option 2: Programmatic strict comparison — fails test if mismatch
  expect(actualText?.trim()).toBe(iPhoneAirLightGoldName);

  // ✅ Option 3: Accessible name assertion (checks what screen readers see)
  await expect(linkLocator).toHaveAccessibleName(iPhoneAirLightGoldName);

  await linkLocator.click();
});