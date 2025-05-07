import { BrowserContext, Page, expect } from "@playwright/test";

export class BasePage{

    protected readonly page: Page;
    protected readonly context?: BrowserContext;

    constructor(page: Page, context?:BrowserContext ){
        this.page=page;
        this.context=context;

    }

    async loadWeb(url: string){
        await this.page.goto(url);
    }

    async clickOn(selector:string){ 
        await this.page.click(selector);
    }
    async doubleClick(selector:string){
        await this.page.dblclick(selector);
    }
    async rightClick(selector:string){
        await this.page.locator(selector).click({ button: 'right' });
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

    async validateTitle(c_page:Page,title:string){
        await expect(c_page).toHaveTitle(title);
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

    async validateNewContextClick(selector: string, expectedUrl:string){
        if (!this.context) {
            throw new Error("Contexto no definido en BasePage");
        }
        const [newPage]= await Promise.all([
            this.context.waitForEvent('page'),
            this.clickOn(selector)]);
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(expectedUrl);

        return newPage;

    };
    
    async compareText(firstText,secondText){
        expect(firstText===secondText)
    }

};