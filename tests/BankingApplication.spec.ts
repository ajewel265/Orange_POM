
// Navigate the url
// Create a LoginPage OBJECT by using const
// then call loginpage.dologin
// Create a HomePage OBJECT by using const
// use 


import { expect, test } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";
import { HomePageQA2 } from "../page/HomePage";

test("Banking application", async ({ page }) => {
  await page.goto("https://bakkappan.github.io/Testers-Talk-Practice-Site/");
  // above statement will Open the application 

  const loginPage = new LoginPage(page);
  await loginPage.dologin("TestersTalk", "TestersTalk"); 
  // this statement will login to the application 

  const homePage = new HomePageQA2(page);
  await  homePage.VerifyWelcomeMsg(); // this statement will verify the application
  await page.pause();
});
