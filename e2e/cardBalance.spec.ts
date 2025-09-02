// cardBalance.spec.ts
import { test, expect } from '@playwright/test';

test('Find the balance of the card', async ({ page }) => {
  await page.goto('https://www.cardbalance.com.au/', { waitUntil: 'domcontentloaded' });

  // Fill card number — use 16 digits, no spaces
  await page.getByPlaceholder('Card Number').fill('1111222233334444'); // <-- your card/test number

  // Click the submit/check button (tune exact text after you inspect)
  await page.getByRole('button', { name: /check balance|check|submit|continue/i }).click();

  // Wait for the result area (inspect once and replace with the exact selector you see)
  const result = page.locator('#balance, .balance-amount, [data-testid="balance"], text=/Balance/i');
  await expect(result).toBeVisible({ timeout: 15000 });

  const balanceText = (await result.textContent())?.trim() ?? '';
  console.log('Balance:', balanceText);
  await expect(result).toContainText(/\$?\s*\d/); // sanity check: looks like money
});
