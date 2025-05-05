import { Page, expect } from "@playwright/test";

export class BasePage{

    protected readonly page: Page;

    constructor(page: Page){
        this.page=page;

    }

    async loadWeb(url: string){
        await this.page.goto(url);
    }

    async clickOn(selector:string){ 
        await this.page.click(selector);
    }
    async fillShield(selector:string, value: string){
        await this.page.locator(selector).fill(value)
    }

    async expectVisible(selector:string){
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async expectHidden(selector:string){
        await expect(this.page.locator(selector)).toBeHidden();
    }

    async validateTitle(title:string){
        await expect(this.page).toHaveTitle(title);
    }

    async validateText(selector:string, message: string){
        await expect(this.page.locator(selector)).toHaveText(message);
    }

    async containText(selector: string, text:string){
        await expect(this.page.locator(selector)).toContainText(text);
    }

    async extractText(selector:string, split:string, index: number,expect_text:string){
        const text= await this.page.locator(selector).innerText();
        const result= text.split(split)[index].trim();
        expect(result).toBe(expect_text)
    }

    async validateClass(selector:string, expect_class:string){
        await expect(this.page.locator(selector)).toHaveClass(expect_class);

    }

    async elementDisabled(selector: string){
        await expect(this.page.locator(selector)).toBeDisabled();
    }

    async countElements(selector:string){
        await this.page.locator(selector).count()
    }

}