import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { ElementsPage } from '../pages/ElementsPage';
import { elementsLocators } from '../pages/locators/elements';
import { userData } from '../data/data';



test.describe.serial('Test Suite Elements Screen',()=>{
    test.describe('Validate Elements Screen',()=>{
        test('The elements option is ok', async ({ page }) =>{
        const base = new BasePage(page);
        const elementsPage = new ElementsPage(page);
        //Go to the page
        await base.loadWeb('https://demoqa.com/');
        //Expect the title name
        await base.validateTitle("DEMOQA");
        //Select Elements button
        await base.clickOn(elementsLocators.elements);
        //Validate elements section
        await elementsPage.reviewElementsTools();
        });   
    })
    test.describe('Validate TextBox screen',()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
        base = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await elementsPage.goToTextBoxScreen();
        });
        test('Validate inputs',async()=>{
        await elementsPage.validateInputs(userData.name,userData.email,userData.current_address,userData.permanent_address);
        });
        test('Validate saved information',async()=>{
        await elementsPage.validateInputs(userData.name,userData.email,userData.current_address,userData.permanent_address);
        await elementsPage.validateSavedInformation(userData.name,userData.email,userData.current_address,userData.permanent_address);

        });
        test('Validate email input shield', async()=>{
        await elementsPage.validateEmailShield(userData.name,userData.email,userData.current_address,userData.permanent_address);
        });
    });
    test.describe.serial('Validate CheckBox Screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
        base = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await elementsPage.goToCheckBoxScreen();
        });
        test('validate home button',async()=>{
        await elementsPage.pressHomeButton();
        })
        test('Validate CheckBox',async()=>{
        await elementsPage.pressSubButtons(); 

        });
    });

});
