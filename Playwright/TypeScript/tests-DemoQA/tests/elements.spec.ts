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
        await base.validateTitle(page,"DEMOQA");
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
    test.describe('Validate CheckBox Screen', ()=>{
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
    test.describe('Validate Radio Button Screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
        base = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await elementsPage.goToRadioButtonScreen();
        });
        test('validate Radio Button', async()=>{
            await elementsPage.yesButton();
            await elementsPage.noButton();
            await elementsPage.impressiveButton();
            await elementsPage.noButton();   
        });
    });
    test.describe('Validate Web Tables Screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
        base = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await elementsPage.goToWebTablesScreen();
        });
        test('Validate inputs when u add new row',async()=>{
        await elementsPage.addNewRow();
        await elementsPage.validateFirstNameInput();
        await elementsPage.validateLastNameInput();
        await elementsPage.validateEmailInput();
        await elementsPage.validateAgeInput();
        await elementsPage.validateSalaryInput();
        await elementsPage.validateDepartmanentInput();
        });
    });
   
    test.describe('Validate buttons Screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
        base = new BasePage(page);
        elementsPage = new ElementsPage(page);
        await elementsPage.goButtonsScreen();
        });
        test('Validate buttons and their messages',async()=>{
        await elementsPage.rightClickMe();
        await elementsPage.doubleClickMe();
        await elementsPage.clickMe();
        });
    });

    test.describe('Validate links screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page, context})=>{
            base = new BasePage(page);
            elementsPage = new ElementsPage(page, context);
            await elementsPage.goToLinksScreen();
            });
            test('Validate each link',async()=>{
            await elementsPage.validateContextLinks();
            await elementsPage.validateCreatedLink();
            await elementsPage.validateNoContentLink();
            await elementsPage.validateMovedLink();
            await elementsPage.validateBadRequestLink();
            await elementsPage.validateBadRequestLink();
            await elementsPage.validateUnauthorizedLink();
            await elementsPage.validateForbiddenLink();
            await elementsPage.validateNotFoundLink();
            
            });
    test.describe('Validate Dynamic porperties screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
            base = new BasePage(page);
            elementsPage = new ElementsPage(page);
            await elementsPage.goToDynamicScreen();
            });
            test('Validate dynamic buttons', async()=>{
                await elementsPage.validateDynamicId();
                await base.reloadPage();
                await elementsPage.validateEnabledButton();
                await base.reloadPage();
                await elementsPage.validateVisibleButton();

            })
        
    });
    test.describe.only('Validate Upload and Download screen', ()=>{
        let base: BasePage;
        let elementsPage: ElementsPage;
        test.beforeEach(async({page})=>{
            base = new BasePage(page);
            elementsPage = new ElementsPage(page);
            await elementsPage.goToUploadScreen();
            });
            test('Validate upload and Download Button', async()=>{
                await elementsPage.validateUploadFile();
                await elementsPage.validateDownloadFile();
            })
        
    });
    })
});
