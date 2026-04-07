import { test, expect, Page, Locator } from '@playwright/test';

test('Go to UPHQ webite', async ({ page }) => {
  
     
await page.goto('https://coaches-office.ultimateplayerhq.com/login', {

});



//  ! Login to UPHQ

  await page.locator('a.custom-btn.coach-login-btn').click();

  await page.getByPlaceholder('Enter username').fill('developeriih');

  await page.locator('#password:visible').fill('Developer@Test2024');

await page.getByRole('button', { name: 'Login' }).click();

  //  ! Click on whiteboard

  await page.locator("body > div:nth-child(2) > div:nth-child(2) > section:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)").click();


// ! click on project

await page.locator('#sidebar_button_project').click();


// ! Click on teams

await page.getByRole('button', { name: 'Teams' }).click();
await page.locator('#teamName1').fill('Test Team');
await page.locator('#teamName2').fill('Test Team 2');

// ! Change color 


await page.getByRole('textbox').nth(2).click();
await page.getByRole('textbox').nth(2).fill('#635a21');
await page.locator('#team-1-style-7').click();

await page.locator('input[name="clrs"]').nth(4).click();
await page.locator('input[name="clrs"]').nth(4).fill('#b8d331');
await page.locator('#team-2-style-5').click();

await page.locator('#team_setting').getByRole('button', { name: 'Save' }).click();



  await page.getByPlaceholder('Session Name').fill('Test 2Session');

  await page.locator("#sliderText").click();

  // ! Click on Tools 

 await page.locator('img[src*="tools_collapsed.svg"]').click();

 //  ! added text

 await page.getByRole('button', { name: 'Text' }).click();

 await page.getByText('Add Textbox', { exact: true }).click();

 await page.locator('#textBox-0').fill('This is a test textbox added using Playwright automation.');

 await page.getByRole('button', { name: '22' }).click();

 await page.getByRole('link', { name: '10' }).click();

 await page.locator("//button[@id='closeTextTab']//img").click();

//  ! Click on Players

await page.getByRole('button', { name: 'Players' }).click();

 await page.getByRole('button', { name: 'Animation' }).click();

 await page.waitForSelector('#team1player1');
  await page.waitForSelector('#droppable-area');

  const source = page.locator('#team1player1');
  const target = page.locator('#droppable-area');

  const sourceBounds = await source.boundingBox();
  const targetBounds = await target.boundingBox();

  await page.mouse.move(
    sourceBounds!.x + sourceBounds!.width / 2,
    sourceBounds!.y + sourceBounds!.height / 2
  );

  await page.mouse.down();

  await page.mouse.move(
    targetBounds!.x + 300,  // ← change X position (left → right)
    targetBounds!.y + 200,  // ← change Y position (top → bottom)
    { steps: 15 }
  );

  await page.mouse.up();

 

  // ! Move player 1_1 to new position frame 1

  await page.waitForSelector('#team1player1_1');
  await page.waitForSelector('#droppable-area');

  const target2 = page.locator('#droppable-area');
  const targetBounds2 = await target.boundingBox();

  // Current position of the dropped element (where it was dropped before)
  const currentX = targetBounds2!.x + 300;  // ← current X position
  const currentY = targetBounds2!.y + 200;  // ← current Y position

  // Step 1: Pick up from current position
  await page.mouse.move(currentX, currentY);
  await page.mouse.down();

  // Step 2: Move to new position
  await page.mouse.move(
    targetBounds2!.x + 500,  // ← new X position
    targetBounds2!.y + 400,  // ← new Y position
    { steps: 15 }
  );
  await page.mouse.up();

  await page.locator('#closePlayersTab').click();

  await page.getByRole('button', { name: 'Animate' }).click();

  await page.locator("//img[@src='https://coaches-office.ultimateplayerhq.com/assets/images/session_images/add_frame.svg']").click();
  
  // ! new animation frame 2


  await page.waitForSelector('#team1player1_1');
  await page.waitForSelector('#droppable-area');

  const target3 = page.locator('#droppable-area');
  const targetBounds3 = await target3.boundingBox();

  // Current position of the dropped element (where it was dropped before)
  const currentX1 = targetBounds3!.x + 500;  // ← current X position
  const currentY1 = targetBounds3!.y + 400;  // ← current Y position

  // Step 1: Pick up from current position
  await page.mouse.move(currentX1, currentY1);
  await page.mouse.down();

  // Step 2: Move to new position
  await page.mouse.move(
    targetBounds3!.x + 600,  // ← new X position
    targetBounds3!.y + 600,  // ← new Y position
    { steps: 15 }
  );
  await page.mouse.up();
  
  // ! 2nd movement in frame 2

   await page.waitForSelector('#team1player1_1');
  await page.waitForSelector('#droppable-area');

  const target4 = page.locator('#droppable-area');
  const targetBounds4 = await target4.boundingBox();

  // Current position of the dropped element (where it was dropped before)
  const currentX2 = targetBounds4!.x + 600;  // ← current X position
  const currentY2 = targetBounds4!.y + 600;  // ← current Y position

  // Step 1: Pick up from current position
  await page.mouse.move(currentX2, currentY2);
  await page.mouse.down();

  // Step 2: Move to new position
  await page.mouse.move(
    targetBounds4!.x + 600,  // ← new X position
    targetBounds4!.y + 200,  // ← new Y position
    { steps: 15 }
  );
  await page.mouse.up();

  //! click on play button

  await page.getByRole('img').first().click();    

  //! click on download animation

  await page.getByRole('img', { name: 'Record' }).click();

  //! click on pop up ok button
   await page.pause(); // ⬅️ Opens Playwright Inspector, freeze test here
await page.getByRole('button', { name: 'Ok' }).click();
 // await page.  getByRole('button', { name: 'Ok' }).click();


  // ! Click on project button side bar


  await page.getByRole('button', { name: 'Save', exact: true }).click();
 await page.pause();
  await page.getByRole('button', { name: 'Ok' }).click();

  // ! change pitch

  await page.getByRole('button', { name: 'Field' }).click();

  await page.locator('div:nth-child(3) > img').click();

  await page.getByRole('button', { name: 'Save', exact: true }).click();


// !  Save as image


await page.getByRole('button', { name: 'Save as Image' }).click();

await page.getByRole('button', { name: 'OK' }).click();

// ! Take a tour

await page.getByRole('button', { name: 'Take a Tour' }).click();await page.getByRole('button', { name: 'Next' }).click();

const nextBtn = page.getByRole('button', { name: 'Next' });

for (let i = 0; i < 29; i++) {
  await nextBtn.click();
  await page.waitForTimeout(500);
}


await page.getByRole('button', { name: 'Finish' }).click();



});

