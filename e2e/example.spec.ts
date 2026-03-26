import { test, expect } from '@playwright/test';

test('Go to visit automation testing website', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Hardik Madanviya');

  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('hardik.madanviya@example.com');  

  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('1234567890');

  await page.getByRole('textbox', { name: 'Address:' }).fill('123 Main Street, City, Country');

  await page.getByRole('radio', { name: 'Female' }).click();

  await page.getByRole('checkbox', { name: 'Thursday' }).click();

  await page.getByRole('combobox', { name: 'Country:' }).selectOption('India');

  await page.locator('option').filter({ hasText: 'Green' }).first().click();

  await page.getByText('Cheetah', { exact: true }).click();

  await page.locator('#datepicker').fill('2026-03-26');

  await page.keyboard.press('Escape');


  // Select date 27 August 2000 in the #txtDate datepicker
  await page.evaluate(() => {
    ($('#txtDate') as any).datepicker('setDate', new Date(2000, 7, 27));
  });

 await page.locator('#start-date').fill('1999-10-10');

   await page.keyboard.press('Escape');

await page.locator('#end-date').fill('2000-03-26');

await page.locator('button.submit-btn').click();

await page.locator('#singleFileInput').setInputFiles('/home/user/Pictures/Logos/35322171_8_1sasa11.jpg');
await page.locator('#multipleFilesInput').setInputFiles([
  '/home/user/Pictures/Logos/35322171_8_1sasa11.jpg',
  '/home/user/Pictures/Logos/33601908_8041938.jpg'
]);

await page.locator(`//tr[td[normalize-space()='1']]//input[@type='checkbox']`).check();
await page.locator(`//tr[td[normalize-space()='5']]//input[@type='checkbox']`).check();
await page.locator('a').filter({ hasText: '3' }).first().click();

// wiki page search

await page.locator('#Wikipedia1_wikipedia-search-input').fill('Hardik');
await page.locator('input.wikipedia-search-button').click();

const [newPage] = await Promise.all([
  page.context().waitForEvent('page'),
  page.getByRole('link', { name: 'Hardik Pandya' }).click()
]);

await newPage.waitForTimeout(3000);


await newPage.close();

    

 });

