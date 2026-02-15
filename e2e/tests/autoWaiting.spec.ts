import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('http://uitestingplayground.com/ajax');

});


test('auto waiting for elements to be visible',async({page})=>{

  await page.locator('#ajaxButton').click();

  const successButton = page.locator('.bg-success');
  // await expect(successButton).toBeVisible();
  // await expect(successButton).toHaveText('Data loaded with AJAX get request.');

  const text= await successButton.allTextContents();
  console.log(text);

  // expect(text).toContain('Data loaded with AJAX get request.');
  await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:21000});
  
});

test('timeout tests',async({page})=>{


  /**
   * There are different types of timeouts in Playwright:
   * 1. Navigation Timeout: This is the maximum time Playwright will wait for a page to load. You can set it using page.setDefaultNavigationTimeout(timeout) or page.setDefaultTimeout(timeout).
   * 2. Element Timeout: This is the maximum time Playwright will wait for an element to appear or become actionable. You can set it using page.setDefaultTimeout(timeout) or by passing a timeout option to specific actions like page.click(selector, {timeout: timeout}).
   * 3. Assertion Timeout: This is the maximum time Playwright will wait for an assertion to pass. You can set it using expect.setDefaultTimeout(timeout) or by passing a timeout option to specific assertions like expect(locator).toBeVisible({timeout: timeout}).
   * 4. Request Timeout: This is the maximum time Playwright will wait for a network request to complete. You can set it using page.setDefaultTimeout(timeout) or by passing a timeout option to specific request-related actions.
   * 5. Test Timeout: This is the maximum time a test can run before it is considered failed due to timeout. You can set it using test.setTimeout(timeout) or by passing a timeout option to specific test cases like test('test name', {timeout: timeout}, async ({page}) => { ... }).
   * 
   * You can adjust these timeouts based on the needs of your tests to ensure they are robust and reliable.
   */


  const startTime = Date.now();
  
  await page.locator('#ajaxButton').click();
  const successButton = page.locator('.bg-success');
  await expect(successButton).toBeVisible({timeout:21000});
    
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;
  console.log(`Elapsed time: ${elapsedTime} ms`);

  //TEST TIMEOUT
        
});