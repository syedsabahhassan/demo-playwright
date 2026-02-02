# 🎭 Playwright Demo - Tutorial & Learning Repository

A comprehensive tutorial repository demonstrating **Playwright** for end-to-end testing. This project serves as a hands-on learning guide for automation testing with Playwright.

## 📚 About This Project

This repository is a **tutorial attempt** to master Playwright testing framework. It covers essential concepts and practical examples for web automation, including:

- ✅ Different locator strategies
- ✅ User interactions (fill, click, hover)
- ✅ Assertions and validations
- ✅ Login workflows
- ✅ UI element extraction
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)

## 🛠️ Tech Stack

- **Playwright** v1.56.1 - Modern web automation framework
- **TypeScript** - Type-safe test scripts
- **Node.js** - JavaScript runtime

## 📦 Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test e2e/cardBalance.spec.ts
```

### Run with UI mode (interactive)
```bash
npx playwright test --ui
```

### Run in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test by name
```bash
npx playwright test -g "test name"
```

### Generate and view HTML report
```bash
npx playwright show-report
```

## 📁 Project Structure

```
demo-playwright/
├── e2e/                      # End-to-end tests
│   ├── bootstrap.cardbalance.spec.ts
│   ├── cardBalance.spec.ts
│   └── tests/
│       ├── example.spec.ts
│       └── firstTest.spec.ts
├── tests-examples/           # Playwright example tests
│   └── demo-todo-app.spec.ts
├── playwright-report/        # Test reports (auto-generated)
├── storage/                  # Test data & storage
├── playwright.config.ts      # Playwright configuration
└── package.json             # Project dependencies
```

## 🧪 Test Examples

### Locator Strategies
```typescript
// By text
page.getByText('Swag Labs')

// By data attribute
page.locator('[data-test="username"]')

// By ID
page.locator('#username')

// By class
page.locator('.form_control')
```

### Login Test
```typescript
test('Login test with valid credentials', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.getByText('Swag Labs')).toBeVisible();
});
```

### UI Extraction & Assertion
```typescript
test('Extract values from UI', async ({ page }) => {
  const textContent = await page.locator('[data-test="login-button"]').textContent();
  expect(textContent?.trim()).toEqual('Login');
});
```

## 🌐 Test Applications

- **Sauce Demo** - `https://www.saucedemo.com/`
- **Todo Demo App** - Built-in Playwright examples

## 📊 Browsers Tested

- ✓ Chromium
- ✓ Firefox
- ✓ WebKit

## 📝 Configuration

Playwright configuration is defined in `playwright.config.ts`. You can customize:
- Browser options
- Test timeout
- Screenshot/video on failure
- Retry policy
- Test workers

## 🎯 Learning Objectives

Through this tutorial, you'll learn:

1. **Locators** - Different ways to identify elements
2. **Interactions** - Clicking, typing, hovering
3. **Assertions** - Verifying expected outcomes
4. **Navigation** - Page routing and waits
5. **Cross-browser** - Testing across multiple browsers
6. **Debugging** - Using Playwright Inspector & debugging tools

## 💡 Tips & Best Practices

- Use `page.pause()` to debug tests interactively
- Use `--headed` mode to watch tests run
- Use `--debug` flag for step-by-step execution
- Keep selectors unique and stable
- Use meaningful test names

## 🔗 Resources

- [Playwright Official Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Sauce Demo App](https://www.saucedemo.com/)

## 📄 License

MIT

---

**Happy Testing! 🚀** - This is a learning journey into Playwright automation.
