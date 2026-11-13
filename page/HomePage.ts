// Verifying Welcome message # Welcome to Testers Talk!

// 1. Create a class 
// 2. Create a Locator Variable 
// 3. Create a constructor
// 4. Declare the Locator value (Welcome message) inside the constructor
// 5. to validate the message, need to use async function
// 6. Used "expect" assertion

// tips: shift+alt+F (alignment)


import { expect, Locator, Page } from "@playwright/test";


export class HomePageQA2 {

    private WelcomeMsg: Locator

    constructor(page: Page) {

        this.WelcomeMsg = page.locator("#welcomeMsg")

    }
    async VerifyWelcomeMsg() {
        await expect(this.WelcomeMsg).toBeVisible()
    }


}