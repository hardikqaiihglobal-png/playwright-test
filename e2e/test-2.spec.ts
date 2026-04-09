import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uniform.fivestarcateringstaff.com/direct-ship/order');
  await page.evaluate(() => {
    const form = document.querySelector('form');
    if (form) {
      form.submit();
    }
  });

await page.getByRole('button', { name: 'Submit' }).click();

});



