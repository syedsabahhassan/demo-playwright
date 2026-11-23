import { test, expect } from '@playwright/test';



test.describe('interacting with UI components', () => {
    test.beforeEach(async ({ page }) => {       
        // Go straight to the Practice Form. The old long nth-child CSS chain broke
        // whenever demoqa changed its home page layout.
        await page.goto('https://demoqa.com/automation-practice-form');
        await expect(page.locator('#firstName')).toBeVisible();

    });

    test('Interacting with the text box', async ({ page }) => {
        const firstNameInput = page.locator('#firstName');
        await firstNameInput.clear();
        await firstNameInput.fill('John');
        await expect(firstNameInput).toHaveValue('John');

        const lastNameInput = page.locator('#lastName');
        
        await lastNameInput.fill('Doe');
        // await lastNameInput.pressSequentially('Doe',{delay:4000})
        await expect(lastNameInput).toHaveValue('Doe');

        const emailInput = page.locator('#userEmail');
        await emailInput.fill('johndoe@gmail.com');
        await expect(emailInput).toHaveValue('johndoe@gmail.com');

    });

});
