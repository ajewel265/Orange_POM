
// Navigate the URL
// Create a LoginPage object using const
// then call loginPage.doLogin
// Create a HomePage object using const

import { expect, test } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";

test("Banking application", async ({ page }) => {
  await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site/");
  // Above statement will open the application.

  const loginPage = new LoginPage(page);
  await loginPage.dologin("TestersTalk", "TestersTalk");
  // This statement will log in to the application.

  const homePage = {
    VerifyWelcomeMsg: async () => {
      await expect(page.locator("body")).toContainText(/welcome/i);
    },
  };

  await homePage.VerifyWelcomeMsg();
  // This statement will verify the application.

  await page.pause();
});
