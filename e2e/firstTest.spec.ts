import {test} from '@playwright/test'



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