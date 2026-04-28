import { test, expect } from '@playwright/test';

test('Create multiple projects', async ({ page }) => {
  await page.goto('https://macdev.iihdev.com/login');

  // Login
  await page.getByRole('textbox', { name: 'Email' }).fill('finance@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('finance@123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Projects', exact: true }).click();

  // 🔁 Loop starts here
  for (let i = 1; i <= 3; i++) {

    await page.getByRole('link', { name: 'Add New Project' }).click();

    const projectNumber = `${110 + i}`;   // ensures uniqueness
    const projectName = `PN ${i}`;

    await page.getByRole('textbox', { name: 'Project Number' }).fill(projectNumber);
    await page.getByRole('textbox', { name: 'Project Name' }).fill(projectName);

    // Select Quantity Surveyors
    const qsDropdown = page.getByRole('searchbox', { name: 'Select Quantity Surveyors' });
    await qsDropdown.click();

    await page.getByRole('option', { name: 'QS' }).click();
    await page.getByRole('dialog', { name: 'Add Project' }).getByRole('combobox').click(); // Reopen to select next option 
    

    await page.getByRole('option', { name: 'Q1' }).click();

    await page.getByRole('button', { name: 'Create' }).click();

  
  } 
});