import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { FormsPage } from '../pages/FormsPage';

test.describe.serial('Test Suite Practice Form Screen',()=>{
    test.describe('Fill in a form and validate the saved information',()=>{
        let base: BasePage;
        let formsPage: FormsPage;    
        test.beforeEach(async({page})=>{
            base=new BasePage(page);
            formsPage=new FormsPage(page);
            await formsPage.gotoFormsScreen();
            await formsPage.validateScreen();
            await formsPage.goToPracticeForm();
        });
        test('Send form',async()=>{
            await formsPage.fillForm();
            await formsPage.validateSubmitInformation();
            
        })
    })

})