import { log } from "console";
import { BasePage } from "./basePage";
import { elementsLocators } from "./locators/elements";
import {Page, Locator, BrowserContext, expect} from '@playwright/test';
import path from "path";

export class ElementsPage extends BasePage{
     
    constructor(page: Page, context?: BrowserContext){
        super(page, context);
    }

    async reviewElementsTools(){
        await this.expectVisible(elementsLocators.textBox);
        await this.expectVisible(elementsLocators.checkBox);
        await this.expectVisible(elementsLocators.radioButton);
        await this.expectVisible(elementsLocators.webTables);
        await this.expectVisible(elementsLocators.buttons);
        await this.expectVisible(elementsLocators.links);
        await this.expectVisible(elementsLocators.brokenLinks);
        await this.expectVisible(elementsLocators.uploadDownload);
        await this.expectVisible(elementsLocators.dynamicProperties);

        await this.expectHidden(elementsLocators.practiceForm);
        await this.expectHidden(elementsLocators.browserWindows);
        await this.expectHidden(elementsLocators.alerts);
        await this.expectHidden(elementsLocators.frames);
        await this.expectHidden(elementsLocators.nestedFrames);
        await this.expectHidden(elementsLocators.modalDialogs);
        await this.expectHidden(elementsLocators.accordian);
        await this.expectHidden(elementsLocators.autoComplete);
        await this.expectHidden(elementsLocators.datePicker);
        await this.expectHidden(elementsLocators.slider);
        await this.expectHidden(elementsLocators.progressBar);
        await this.expectHidden(elementsLocators.tabs);
        await this.expectHidden(elementsLocators.toolTips);
        await this.expectHidden(elementsLocators.menu);
        await this.expectHidden(elementsLocators.selectMenu);
        await this.expectHidden(elementsLocators.sortable);
        await this.expectHidden(elementsLocators.selectable);
        await this.expectHidden(elementsLocators.resizable);
        await this.expectHidden(elementsLocators.droppable);
        await this.expectHidden(elementsLocators.dragabble);
        await this.expectHidden(elementsLocators.login);
        await this.expectHidden(elementsLocators.bookStore);
        await this.expectHidden(elementsLocators.profile);
        await this.expectHidden(elementsLocators.bookStore);      
    }

    async goToTextBoxScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.textBox);
        await this.validateText(elementsLocators.h1Text,"Text Box");
    }

    async goToCheckBoxScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.checkBox);
        await this.validateText(elementsLocators.h1Text,"Check Box");
    }

    async goToRadioButtonScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.radioButton);
        await this.validateText(elementsLocators.h1Text,"Radio Button");
    }
    async goToWebTablesScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.webTables);
        await this.validateText(elementsLocators.h1Text,"Web Tables");
    }
    async goButtonsScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.buttons);
        await this.validateText(elementsLocators.h1Text,"Buttons");
    }

    async goToLinksScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.links);
        await this.validateText(elementsLocators.h1Text,"Links");

    }
    async goToDynamicScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.dynamicProperties);
        await this.validateText(elementsLocators.h1Text,"Dynamic Properties");

    }
    async goToUploadScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.uploadDownload);
        await this.validateText(elementsLocators.h1Text,"Upload and Download");

    }
    async validateInputs(name:string,email:string,address:string, permanentAddrees:string){
        await this.fillShield(elementsLocators.fullNameInput,name);
        await this.fillShield(elementsLocators.EmailInput,email);
        await this.fillShield(elementsLocators.CurrentAdressInput,address);
        await this.fillShield(elementsLocators.PermanentAddressInput,permanentAddrees);
        await this.clickOn(elementsLocators.submitButton);
    }

    async validateSavedInformation(name:string,email:string,address:string, permanentAddrees:string){
        await this.extractText(elementsLocators.savedName,":",1,name);
        await this.extractText(elementsLocators.savedEmail,":",1,email);
        await this.extractText(elementsLocators.savedCAddress,":",1,address);
        await this.extractText(elementsLocators.savedPAddress,":",1,permanentAddrees);

    }

    async validateEmailShield(name:string,email:string,address:string, permanentAddrees:string){
        await this.fillShield(elementsLocators.fullNameInput,name);
        await this.fillShield(elementsLocators.CurrentAdressInput,address);
        await this.fillShield(elementsLocators.PermanentAddressInput,permanentAddrees);
        await this.validateClass(elementsLocators.EmailInput,"mr-sm-2 form-control");
        await this.fillShield(elementsLocators.EmailInput,"test");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.EmailInput,"mr-sm-2 field-error form-control");
        await this.fillShield(elementsLocators.EmailInput,"test@");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.EmailInput,"mr-sm-2 field-error form-control");
        await this.fillShield(elementsLocators.EmailInput,"test@test");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.EmailInput,"mr-sm-2 field-error form-control");
        await this.fillShield(elementsLocators.EmailInput,"test@test.com");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.EmailInput,"mr-sm-2 form-control");
    }

    async pressHomeButton(){
        await this.clickOn(elementsLocators.homeButton)
        await this.containText(elementsLocators.homeText,'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    }
    async pressSubButtons(){
        await this.clickOn(elementsLocators.toogleHome);
        await this.clickOn(elementsLocators.desktopButton);
        await this.validateText(elementsLocators.homeText,"You have selected :desktopnotescommands");
        await this.clickOn(elementsLocators.downloadsButton);
        await this.validateText(elementsLocators.homeText,"You have selected :desktopnotescommandsdownloadswordFileexcelFile");
        await this.clickOn(elementsLocators.documentsButton);
        await this.validateText(elementsLocators.homeText,"You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile");
        await this.clickOn(elementsLocators.desktopButton);
        await this.validateText(elementsLocators.homeText,"You have selected :documentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile");
        await this.clickOn(elementsLocators.downloadsButton);
        await this.validateText(elementsLocators.homeText,"You have selected :documentsworkspacereactangularveuofficepublicprivateclassifiedgeneral");
        await this.clickOn(elementsLocators.documentsButton);
        await this.expectHidden(elementsLocators.homeText);
    }

    async yesButton(){
        await this.clickOn(elementsLocators.yesButton);
        await this.validateText(elementsLocators.radioButtonText,"Yes")
    }

    async impressiveButton(){
        await this.clickOn(elementsLocators.impressiveButton);
        await this.validateText(elementsLocators.radioButtonText,"Impressive")
    }

    async noButton(){
        await this.elementDisabled(elementsLocators.nosButton)
    }

    //Web Tables Methods
    async addNewRow(){
        await this.clickOn(elementsLocators.addButton);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.fillShield(elementsLocators.lastNameInput,"Test");
        await this.fillShield(elementsLocators.emailInput,"test@automation.com");
        await this.fillShield(elementsLocators.ageInput,"12");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.fillShield(elementsLocators.departmentInput,"IT");
        await this.clickOn(elementsLocators.submitButton);
    }

    async validateFirstNameInput(){
        await this.clickOn(elementsLocators.addButton);
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.lastNameInput,"Test");
        await this.fillShield(elementsLocators.emailInput,"test@automation.com");
        await this.fillShield(elementsLocators.ageInput,"12");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.fillShield(elementsLocators.departmentInput,"IT");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.clickOn(elementsLocators.submitButton);
        await this.expectHidden(elementsLocators.errorClassForm);

    }

    async validateLastNameInput(){
        await this.clickOn(elementsLocators.addButton);
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.fillShield(elementsLocators.emailInput,"test@automation.com");
        await this.fillShield(elementsLocators.ageInput,"12");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.fillShield(elementsLocators.departmentInput,"IT");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.lastNameInput,"Test");
        await this.clickOn(elementsLocators.submitButton);
        await this.expectHidden(elementsLocators.errorClassForm);

    }

    async validateEmailInput(){
        await this.clickOn(elementsLocators.addButton);
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.fillShield(elementsLocators.lastNameInput,"Test");
        await this.fillShield(elementsLocators.ageInput,"12");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.fillShield(elementsLocators.departmentInput,"IT");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.emailInput,"juan");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.emailInput,"juan@");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.emailInput,"juan@test");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.emailInput,"juan@test,com");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.emailInput,"juan@test.com");
        await this.clickOn(elementsLocators.submitButton);
        await this.expectHidden(elementsLocators.errorClassForm);
    }

    async validateAgeInput(){
        await this.clickOn(elementsLocators.addButton);
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.fillShield(elementsLocators.lastNameInput,"Test");
        await this.fillShield(elementsLocators.emailInput,"test@automation.com");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.fillShield(elementsLocators.departmentInput,"IT");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.ageInput,"a");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.ageInput,"1,1");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.ageInput,"@");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.ageInput,"1");
        await this.clickOn(elementsLocators.submitButton);
        await this.expectHidden(elementsLocators.errorClassForm);
        }

        async validateSalaryInput(){
            await this.clickOn(elementsLocators.addButton);
            await this.clickOn(elementsLocators.submitButton);
            await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
            await this.fillShield(elementsLocators.firstNameInput,"Juan");
            await this.fillShield(elementsLocators.lastNameInput,"Test");
            await this.fillShield(elementsLocators.emailInput,"test@automation.com");
            await this.fillShield(elementsLocators.ageInput,"12");
            await this.fillShield(elementsLocators.departmentInput,"IT");
            await this.clickOn(elementsLocators.submitButton);
            await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
            await this.fillShield(elementsLocators.salaryInput,"a");
            await this.clickOn(elementsLocators.submitButton);
            await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
            await this.fillShield(elementsLocators.salaryInput,"1,1");
            await this.clickOn(elementsLocators.submitButton);
            await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
            await this.fillShield(elementsLocators.salaryInput,"@");
            await this.clickOn(elementsLocators.submitButton);
            await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
            await this.fillShield(elementsLocators.salaryInput,"1");
            await this.clickOn(elementsLocators.submitButton);
            await this.expectHidden(elementsLocators.errorClassForm);
            }

    async validateDepartmanentInput(){
        await this.clickOn(elementsLocators.addButton);
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.firstNameInput,"Juan");
        await this.fillShield(elementsLocators.lastNameInput,"test");
        await this.fillShield(elementsLocators.emailInput,"test@automation.com");
        await this.fillShield(elementsLocators.ageInput,"12");
        await this.fillShield(elementsLocators.salaryInput,"1312312");
        await this.clickOn(elementsLocators.submitButton);
        await this.validateClass(elementsLocators.form,elementsLocators.errorClassForm);
        await this.fillShield(elementsLocators.departmentInput,"Test");
        await this.clickOn(elementsLocators.submitButton);
        await this.expectHidden(elementsLocators.errorClassForm);
    }

    //Butttons Methods

    async doubleClickMe(){
        await this.expectHidden(elementsLocators.messageDoubleClick);
        await this.doubleClick(elementsLocators.doubleClickButton);
        await this.expectVisible(elementsLocators.messageDoubleClick);
        await this.validateText(elementsLocators.messageDoubleClick,"You have done a double click");
    }
    async rightClickMe(){
        await this.expectHidden(elementsLocators.messageRightClick);
        await this.rightClick(elementsLocators.rightClickButton);
        await this.expectVisible(elementsLocators.messageRightClick);
        await this.validateText(elementsLocators.messageRightClick,"You have done a right click");
    }
    async clickMe(){
        await this.expectHidden(elementsLocators.messageClick);
        await this.clickOn(elementsLocators.clickMeButton);
        await this.expectVisible(elementsLocators.messageClick);
        await this.validateText(elementsLocators.messageClick,"You have done a dynamic click");
    }

    //Links Screen methods
    async validateContextLinks(){
        const newPage=(await this.validateNewContextClick(elementsLocators.homeLink,"https://demoqa.com/"));
        await this.validateTitle(newPage,"DEMOQA");
        const thirdPage=(await this.validateNewContextClick(elementsLocators.homeodbqD,"https://demoqa.com/"));
        await this.validateTitle(thirdPage,"DEMOQA");
        await this.clickOn(elementsLocators.created);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 201 and status text Created");

    }

    async validateCreatedLink(){
        await this.clickOn(elementsLocators.created);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 201 and status text Created");
    }
    async validateNoContentLink(){
        await this.clickOn(elementsLocators.noContent);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 204 and status text No Content");
    }
    
    async validateBadRequestLink(){
        await this.clickOn(elementsLocators.badRequest);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 400 and status text Bad Request");
    }
    async validateMovedLink(){
        await this.clickOn(elementsLocators.moved);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 301 and status text Moved Permanently");
    }
    async validateForbiddenLink(){
        await this.clickOn(elementsLocators.forbidden);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 403 and status text Forbidden");
    }
    async validateUnauthorizedLink(){
        await this.clickOn(elementsLocators.unauthorized);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 401 and status text Unauthorized");
    }
    async validateNotFoundLink(){
        await this.clickOn(elementsLocators.notFound);
        await this.validateText(elementsLocators.responseText,"Link has responded with staus 404 and status text Not Found");
    }

    //Dynamic properties screes methods

    async validateDynamicId(){
        const first_id= await this.getAttribute(elementsLocators.dynamicId,'id');
        console.log(first_id);
        await this.page.reload()
        const next_id=await this.getAttribute(elementsLocators.dynamicId,'id');
        console.log(next_id)
        expect(first_id).not.toBe(next_id);
    }
    async validateEnabledButton(){
        this.elementDisabled(elementsLocators.enabledButtton);
        await this.page.waitForTimeout(5000)
        this.elementEnabled(elementsLocators.enabledButtton);
    }

    async validateVisibleButton(){
        this.expectHidden(elementsLocators.visibleButton);
        await this.page.waitForTimeout(5000);
        this.expectVisible(elementsLocators.visibleButton);
    }

    //Upload and Download

    async validateUploadFile(){
        const file_path=path.resolve(__dirname,"../data/sampleFile.jpeg")
        await this.UploadFile(elementsLocators.UploadButton,file_path);
        await this.validateText(elementsLocators.textUpload,'C:\\fakepath\\sampleFile.jpeg')
    }

    async validateDownloadFile(){
        await this.page.pause()
        const file_path=path.resolve(__dirname,"../downloads/sampleFile.jpeg");
        await this.downloadFile(elementsLocators.DownloadButton,file_path);


    }

    
}
