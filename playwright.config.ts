// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

/**
 * Central Playwright configuration
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Where your tests live (you’re using e2e/)
  testDir: './e2e/tests',

  // Parallelism & retries
  fullyParallel: true,
  forbidOnly: !!process.env.CI,         // fail CI if test.only slipped in
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: 'html',                     // open with: npx playwright show-report

  // Global defaults for all projects (can be overridden per-project)
  use: {
    headless: false,                    // run headed by default; override with --headless
    trace: 'on-first-retry',            // collect trace on retry
    // baseURL: 'http://localhost:3000', // uncomment to enable relative page.goto('/')
    // storageState: 'storage/cardbalance.json', // uncomment to apply to ALL projects
    // screenshot: 'only-on-failure',    // 'off' | 'on' | 'only-on-failure'
    // video: 'retain-on-failure',       // 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'
    // viewport: { width: 1280, height: 800 },
    // actionTimeout: 15_000,            // default action timeout
    // navigationTimeout: 30_000,
  },

  /**
   * Projects: run the same tests in different browsers / devices.
   * You can add/remove blocks below as needed.
   */
  projects: [
    // --- Desktop Chromium (with saved cookies for cardbalance) ---
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storage/cardbalance.json', // make sure this file exists (bootstrap it once)
        // channel: 'chrome',                      // use installed Chrome instead of bundled Chromium
      },
    },

    // --- Desktop WebKit (Safari engine) ---
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    // --- Enable Firefox if you want it ---
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // --- Mobile emulation examples ---
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // --- Branded browsers (installed locally) ---
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    // --- Example of a project-specific override (headed+tracing) ---
    // {
    //   name: 'chromium-debug',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     headless: false,
    //     trace: 'on',
    //   },
    // },
  ],

  // Start a dev server before tests (uncomment and edit if your app needs it)
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120_000,
  // },
});
