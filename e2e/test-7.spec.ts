import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mvw-stage.iihdev.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'your@email.com' }).fill('superadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Superadmin@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Templates' }).click();

  const startPrice = 200;
  const increment = 1000;
  const iterations = 12;

  for (let i = 0; i < iterations; i++) {
    const templatePrice = startPrice + i * increment;

    await page.getByRole('button', { name: 'Add Template' }).click();
    await page.getByRole('button', { name: 'Select Brand ▼' }).click();
    await page.getByRole('menuitem', { name: 'rsd2' }).click();
    await page.getByRole('button', { name: 'Select Model ▼' }).click();
    await page.getByRole('menuitem', { name: 'dawe2' }).click();
    await page.getByRole('button', { name: 'Select Year ▼' }).click();
    await page.getByRole('menuitem', { name: '2002' }).click();
    await page.getByRole('button', { name: 'Select Length ▼' }).click();
    await page.getByRole('menuitem', { name: '22' }).click();
    await page.getByRole('button', { name: 'Select Roof Height ▼' }).click();
    await page.getByRole('menuitem', { name: '42' }).click();
    await page.getByRole('button', { name: 'Select variant ▼' }).click();
    await page.getByRole('menuitem', { name: '/2 Kit' }).click();
    await page.getByRole('textbox', { name: 'Template Price *' }).fill(String(templatePrice));

    // PDF upload — intercepts the file manager dialog
    const [pdfChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.getByText('Drop PDF file here').click()
    ]);
    await pdfChooser.setFiles('/home/user/Documents/Test data/3MB_PDF.pdf');

    // Image upload — intercepts the file manager dialog
    const [imgChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.getByText('Drop Image file here').click()
    ]);
    await imgChooser.setFiles('/home/user/Documents/Test data/1MB_JPG.jpg');

    await page.getByRole('button', { name: 'Add Template' }).click();
  }
});