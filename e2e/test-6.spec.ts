import { test, expect } from '@playwright/test';

test('Create 15 brands with incremental values', async ({ page }) => {
  // --- Login ---
  await page.goto('https://mvw-stage.iihdev.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'your@email.com' }).fill('superadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Superadmin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // --- Navigate to Brands ---
  await page.getByRole('link', { name: 'Brands' }).click();

  // --- Create 15 Brands in a loop ---
  for (let i = 1; i <= 15; i++) {
    await page.getByRole('button', { name: 'Add Brand' }).click();

    await page.getByRole('textbox', { name: 'Enter brand name' }).fill(`rsd${i}`);
    await page.getByRole('textbox', { name: 'Enter model' }).fill(`dawe${i}`);
    await page.getByRole('textbox', { name: 'Enter year or range' }).fill(`${2000 + i}`);

    // First "Enter length" field
    const lengthFields = page.getByRole('textbox', { name: 'Enter length' });
    await lengthFields.first().fill(`${10 + i}`);

    await page.getByRole('textbox', { name: 'Enter roof height' }).fill(`${40 + i}`);

    // Second "Enter length" field (if separate)
    await lengthFields.last().fill(`${20 + i}`);

    await page.getByRole('button', { name: 'Create' }).click();

    // Wait for the brand list to reload before next iteration
    await page.waitForLoadState('networkidle');

    console.log(`✅ Brand ${i}/15 created: Brand_${i}`);
  }
});