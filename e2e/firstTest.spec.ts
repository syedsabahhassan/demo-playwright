import {test} from '@playwright/test'



test.beforeEach(async ({page})=>{

    await page.goto('https://practice.expandtesting.com/login')
})
test('Differnt locator syntax',async({page})=>{

  page.locator('class=[form-control]');

  // by Tag name
  page.locator('input');

  // by ID
  page.locator('#username').click();

  //by Class value
  page.locator('.form-control');

  //by attribute
  page.locator('[name="username"]').click();

  //combine different slectors
  page.locator('input[.form-control][name="username"]');

  
})