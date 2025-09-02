// bootstrap.cardbalance.spec.ts
import { test } from '@playwright/test';

test('Bootstrap: solve verification once and save state', async ({ page, context }) => {
  await page.goto('https://www.cardbalance.com.au/', { waitUntil: 'domcontentloaded' });

  // If a verification screen appears, pause so you can solve it manually.
  const verificationVisible = await page.getByText(/verification required/i)
    .isVisible().catch(() => false);

  if (verificationVisible) {
    console.log('Solve the verification in the browser window, then resume.');
    await page.pause(); // opens Playwright Inspector so you can solve & continue
  }

  // Save cookies/localStorage so future tests can skip verification.
  await context.storageState({ path: 'storage/cardbalance.json' });
});
