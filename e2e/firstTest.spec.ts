import {expect, test} from '@playwright/test'



test.beforeEach(async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
})
test('Differnt locator syntax',async({page})=>{

  await page.getByText('Swag Labs');  
  
  // by Tag name
  await page.locator('[data-test="username"]')  

  // by ID
  await page.locator('#username');
  //by Class value
  await page.locator('.form_control');

  //combine different slectors
  
})

test('Login test with valid credentials',async({page})=>{

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

await page.locator('.app_logo'); // by class
await page.getByText('Swag Labs'); // by visible text
await expect(page.getByText('Swag Labs')).toBeVisible();

await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();


});