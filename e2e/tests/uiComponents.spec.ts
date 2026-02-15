import { test, expect } from '@playwright/test';



test.describe('interacting with UI components', () => {
    test.beforeEach(async ({ page }) => {       
        await page.goto('http://demoqa.com');
        await page.locator('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h5:nth-child(1)').click();
        
        await page.locator('.router-link[href="/automation-practice-form"]').click();

    });

    test('Interacting with the text box', async ({ page }) => {
        const firstNameInput = page.locator('#firstName');
        await firstNameInput.fill('John');
        await expect(firstNameInput).toHaveValue('John');

        const lastNameInput = page.locator('#lastName');
        await lastNameInput.fill('Doe');
        await expect(lastNameInput).toHaveValue('Doe');

        const emailInput = page.locator('#userEmail');
        await emailInput.fill('johndoe@gmail.com');
        await expect(emailInput).toHaveValue('johndoe@gmail.com');

    });





});
