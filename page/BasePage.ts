//BasePage contains only functionality that can be shared by multiple pages.



import { Page } from "@playwright/test";

export class BasePage {
    protected page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async goto(url: string) {
        await this.page.goto(url)

    }
    async getTitle() {
        return await this.page.title();
       // newly added for git test. 
        await this.page.pause();
    }

}