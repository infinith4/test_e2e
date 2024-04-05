import { test, expect } from "@chromatic-com/playwright";

// Then use as normal 👇
test("Homepage", async ({ page }) => {  
  await page.goto("https://www.npmjs.com/package/typescript");  
  
  await expect(page).toHaveTitle("typescript - npm");  
  // ...
});