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

    async checkOption(selector:string){
        await this.page.check(selector);
    }
    async selectOption(selector:string,value:string){
        await this.page.locator(selector).selectOption(value);
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

    async validateURL(url: string){
        await expect(this.page).toHaveURL(url)
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
    async elementEnabled(selector: string){
        await expect(this.page.locator(selector)).toBeEnabled();
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
    
    async getAttribute(selector: string, attribute:string){
        const getted_attribute= await this.page.locator(selector).getAttribute(attribute)
        return getted_attribute
    }

    async reloadPage(){
        await this.page.reload();
    }

    async UploadFile(selector: string, path: string){
        await this.page.locator(selector).setInputFiles(path);
    }
    
    async downloadFile(selector: string, path: string) {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'), 
            this.clickOn(selector)
        ]);
        await download.saveAs(path);
        expect(await download.path()).not.toBeNull();
    }

    async clickByText(text:string){
        await this.page.getByText(text, {exact: true}).click();

    }
};