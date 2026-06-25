import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mocono_new.iihdev.com/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('mocononew_dev@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('select').selectOption('83');
  await page.goto('https://mocono_new.iihdev.com/dashboard');
  await page.getByRole('link', { name: 'Paid Members' }).click();
  await page.getByRole('button', { name: 'Add subscribers' }).click();
});