import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://macdev.iihdev.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('finance@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('finance@123');
  await page.getByRole('button', { name: 'Sign in' }).click();


  await page.getByRole('link', { name: 'User Management ' }).click();
  await page.getByRole('link', { name: 'Quantity Surveyors', exact: true }).click();


  for (let i = 10; i <= 15; i++) {

    await page.getByRole('link', { name: 'Add Quantity Surveyor' }).click();

    const name = `QS${i}`;
    const email = `QS${i}@yopmail.com`; 
    // ensures uniqueness across runs

    await page.getByRole('textbox', { name: 'Full Name' }).fill(name);
    await page.getByRole('textbox', { name: 'Email' }).fill(email);

    await page.getByRole('button', { name: 'Create' }).click();

  
  }
});