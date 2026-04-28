import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uniform.fivestarcateringstaff.com/direct-ship/order');
  await page.evaluate(() => {
    const form = document.querySelector('form');
    if (form) {
      form.submit();
    }
  });

const response = await page.request.post('/api/submit', {
  data: {
    requiredField1: 'value1',
    requiredField2: 'value2',
    optionalField: null,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

expect(response.ok()).toBeTruthy();
console.log(await response.json()); // See response body


});



