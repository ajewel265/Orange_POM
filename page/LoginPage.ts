// 1. Create a LoginPage class
// 2. Going to store loginPage's locator 
// 3. import Locator & Page from Playwright
// 4. Declare a page:Page variable by using constructor
// 5. Create locators for username, password & login button
// 6. Create a method representing ACTION that can be perfomed on the loginPage
// to do that use aysnc/ await method
// tips: shift+alt+F (for alignment)


import { Locator, Page } from "@playwright/test"; // :Locator (type) 

export class LoginPage {
  private usernameTextbox: Locator; // usernameTextbox (locator name)
  private passwordTextbox: Locator;  // :Locator (type) 
  private loginButton: Locator;   // 


  constructor(page: Page) {

    // Initialize locators 
    this.usernameTextbox = page.getByPlaceholder("Username");
    this.passwordTextbox = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole('button', { name: 'Login' });

    // this.loginButton=page.getByText("Login").nth(1)

    
  }
  
  // Creating action by using async/await meyhod

  async dologin(username: string, password: string) { // dologin # method name
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();
  }
}

// steps : import-> class->locators->constructor->initialize locator->method/ action