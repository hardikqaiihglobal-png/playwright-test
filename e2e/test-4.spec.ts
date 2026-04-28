import { test, expect } from '@playwright/test';

test('Create 10 Dentists', async ({ page }) => {

  await page.goto('https://damira-document.iihdev.com/login');

  // Login
  await page.getByRole('textbox', { name: 'Email' }).fill('masteradmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'For Dentists' }).click();
  for (let i = 1; i <= 10; i++) {

    // Navigate each time (depends on app behavior)
        await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Add Dentist' }).click();

    const title = `SS${i}`;
    const link = `https://www.ea.com/`;

    await page.getByRole('textbox', { name: 'Title' }).fill(title);
    await page.getByRole('textbox', { name: 'Link' }).fill(link);

    await page.getByRole('button', { name: 'Create' }).click();

    
  }
});