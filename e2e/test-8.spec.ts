import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cbd-courierbidz.iihdev.com/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('kashishiih@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('@Test123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'View All Jobs' }).click();
  await page.getByRole('button', { name: 'Create Job' }).click();
  await page.getByRole('button', { name: 'Manual mode' }).click();
});