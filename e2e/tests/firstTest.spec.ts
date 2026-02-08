import {expect, test} from '@playwright/test'



test.beforeEach(async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
})
test('Differnt locator syntax',async({page})=>{

  page.getByText('Swag Labs');  
  
  // by Tag name
  page.locator('[data-test="username"]')  

  // by ID
  page.locator('#username');
  //by Class value
  page.locator('.form_control');

  //combine different slectors
  
})

test('Login test with valid credentials',async({page})=>{

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  page.locator('.app_logo'); // by class
  page.getByText('Swag Labs'); // by visible text
await expect(page.getByText('Swag Labs')).toBeVisible();

await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

await expect(page.locator('.inventory_item_price').first()).toBeVisible(); 
await expect(page.locator('.inventory_item_name').first()).toBeVisible(); 
await expect(page.locator('.inventory_item_description').first()).toBeVisible();
});

test('Extract values from UI',async({page})=>{

const text = (await page.locator('[data-test="login-button"]').textContent())?.trim();

console.log(text);

//using playwright built in text assertion
await expect(page.locator('[data-test="login-button"]')).toHaveText('Login');

  
});

test('Extract different radio buttonvalues',async({page})=>{

  await page.goto('https://demoqa.com/radio-button');

  const radioButtonValues = page.locator('.custom-control.custom-radio label').allTextContents();
  
  console.log(await radioButtonValues);

  expect(await radioButtonValues).toContain('Impressive');

  expect(await radioButtonValues).toEqual(['Yes', 'Impressive', 'No']);



})

test('extract and assert values of attributes on the page',async({page})=>{
  
  
  await page.goto('https://demoqa.com/text-box');

  const placeholderEmailValue = await page.locator('[placeholder="name@example.com"]').getAttribute('placeholder');
  console.log(placeholderEmailValue);

  expect(placeholderEmailValue).toBe('name@example.com');


  const placeholdNameFieldValue = await page.locator('[id=userName]').getAttribute('placeholder');
  const abc = await page.getByRole('textbox', { name: 'Full Name' }).getAttribute('placeholder');

  console.log(placeholdNameFieldValue);

  expect(placeholdNameFieldValue).toBe('Full Name');
  expect(placeholdNameFieldValue).toBe(abc);
  
  const currentAddress= await page.locator('#currentAddress').getAttribute('id');
  console.log(currentAddress);
  expect(currentAddress).toBe('currentAddress');





})

test('different ways to assert values of attributes on a page',async({page})=>{
  await page.goto('https://demoqa.com/checkbox');

const homeNode = page.locator('.rct-node').first();
const desktopNode = page.locator('.rct-node').nth(1);

// Assert 'Home' is visible before interacting
await expect(homeNode.locator('.rct-title', { hasText: 'Home' })).toBeVisible();
// Click the toggle to expand 'Home'
await homeNode.locator('button').click();

// Explicitly wait for 'Desktop' title to appear (this waits for the child node to be ready)
await expect(homeNode.locator('.rct-title', { hasText: 'Desktop' })).toBeVisible();

// Now interact with 'Desktop' since we know it’s ready
await desktopNode.locator('button').click();

// Explicitly wait for 'Commands' to appear before asserting or interacting
await expect(page.locator('.rct-title', { hasText: 'Commands' })).toBeVisible();





})

