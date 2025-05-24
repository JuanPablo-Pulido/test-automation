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
        try{
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
        }catch(e){
            console.error(e)
        }
        }

    async goToTextBoxScreen(){
        try{
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.textBox);
            await this.validateText(elementsLocators.h1Text,"Text Box");
        }catch(e){
            console.error(e)  
        }
         }

    async goToCheckBoxScreen(){
        try{
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.checkBox);
            await this.validateText(elementsLocators.h1Text,"Check Box");
        }catch(e){
            console.error(e)  
        }
          }

    async goToRadioButtonScreen(){
        try{ 
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.radioButton);
            await this.validateText(elementsLocators.h1Text,"Radio Button");
        }catch(e){
            console.error(e)  
        }
       }
    async goToWebTablesScreen(){
        try{ 
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.webTables);
            await this.validateText(elementsLocators.h1Text,"Web Tables");
        }catch(e){
            console.error(e)  
        }
        }
    async goButtonsScreen(){
        try{ 
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.buttons);
            await this.validateText(elementsLocators.h1Text,"Buttons");
        }catch(e){
            console.error(e)  
        }
         }

    async goToLinksScreen(){
        try{
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.links);
            await this.validateText(elementsLocators.h1Text,"Links");
        }catch(e){
            console.error(e)  
        }
        
    }
    async goToDynamicScreen(){
        try{
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.dynamicProperties);
            await this.validateText(elementsLocators.h1Text,"Dynamic Properties");
        }catch(e){
            console.error(e)  
        }  
    }
    async goToUploadScreen(){
        try{ 
            await this.loadWeb('https://demoqa.com/');
            await this.clickOn(elementsLocators.elements);
            await this.clickOn(elementsLocators.uploadDownload);
            await this.validateText(elementsLocators.h1Text,"Upload and Download");
        }catch(e){
            console.error(e)  
        }     
    }
    async validateInputs(name:string,email:string,address:string, permanentAddrees:string){
        try{ 
            await this.fillShield(elementsLocators.fullNameInput,name);
            await this.fillShield(elementsLocators.EmailInput,email);
            await this.fillShield(elementsLocators.CurrentAdressInput,address);
            await this.fillShield(elementsLocators.PermanentAddressInput,permanentAddrees);
            await this.clickOn(elementsLocators.submitButton);

        }catch(e){
            console.error(e)  
        }
       }

    async validateSavedInformation(name:string,email:string,address:string, permanentAddrees:string){
        try{
            await this.extractText(elementsLocators.savedName,":",1,name);
            await this.extractText(elementsLocators.savedEmail,":",1,email);
            await this.extractText(elementsLocators.savedCAddress,":",1,address);
            await this.extractText(elementsLocators.savedPAddress,":",1,permanentAddrees);
        }catch(e){
            console.error(e)  
        }       
    }

    async validateEmailShield(name:string,email:string,address:string, permanentAddrees:string){
        try{
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
   
        }catch(e){
            console.error(e)  
        }
         }

    async pressHomeButton(){
        try{
            await this.clickOn(elementsLocators.homeButton)
            await this.containText(elementsLocators.homeText,'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
        }catch(e){
            console.error(e)  
        }
        }
    async pressSubButtons(){
        try{
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
        }catch(e){
            console.error(e)  
        }
        }

    async yesButton(){
        try{
            await this.clickOn(elementsLocators.yesButton);
            await this.validateText(elementsLocators.radioButtonText,"Yes")
        }catch(e){
            console.error(e)  
        }
         }

    async impressiveButton(){
        try{
            await this.clickOn(elementsLocators.impressiveButton);
            await this.validateText(elementsLocators.radioButtonText,"Impressive")
        }catch(e){
            console.error(e)  
        }
        }

    async noButton(){
        try{ 
            await this.elementDisabled(elementsLocators.nosButton)

        }catch(e){
            console.error(e)  
        }  
    }

    //Web Tables Methods
    async addNewRow(){
        try{
            await this.clickOn(elementsLocators.addButton);
            await this.fillShield(elementsLocators.firstNameInput,"Juan");
            await this.fillShield(elementsLocators.lastNameInput,"Test");
            await this.fillShield(elementsLocators.emailInput,"test@automation.com");
            await this.fillShield(elementsLocators.ageInput,"12");
            await this.fillShield(elementsLocators.salaryInput,"1312312");
            await this.fillShield(elementsLocators.departmentInput,"IT");
            await this.clickOn(elementsLocators.submitButton);
        }catch(e){
            console.error(e)  
        }
        }

    async validateFirstNameInput(){
        try{
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
        }catch(e){
            console.error(e)  
        }     
    }

    async validateLastNameInput(){
        try{
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
        }catch(e){
            console.error(e)  
        }      
    }
    async validateEmailInput(){
        try{ 
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
        }catch(e){
            console.error(e)  
        }
       }

    async validateAgeInput(){
        try{ 
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
        }catch(e){
            console.error(e)  
        }
       }

        async validateSalaryInput(){
            try{
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

        }catch(e){
            console.error(e)  
        }
             }

    async validateDepartmanentInput(){
        try{
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
        }catch(e){
            console.error(e)  
        }
        }

    //Butttons Methods

    async doubleClickMe(){
        try{
            await this.expectHidden(elementsLocators.messageDoubleClick);
            await this.doubleClick(elementsLocators.doubleClickButton);
            await this.expectVisible(elementsLocators.messageDoubleClick);
            await this.validateText(elementsLocators.messageDoubleClick,"You have done a double click");
        }catch(e){
            console.error(e)  
        }
        }
    async rightClickMe(){
        try{
            await this.expectHidden(elementsLocators.messageRightClick);
            await this.rightClick(elementsLocators.rightClickButton);
            await this.expectVisible(elementsLocators.messageRightClick);
            await this.validateText(elementsLocators.messageRightClick,"You have done a right click");
        }catch(e){
            console.error(e)  
        }
         }
    async clickMe(){
        try{
            await this.expectHidden(elementsLocators.messageClick);
            await this.clickOn(elementsLocators.clickMeButton);
            await this.expectVisible(elementsLocators.messageClick);
            await this.validateText(elementsLocators.messageClick,"You have done a dynamic click");
        }catch(e){
            console.error(e)  
        }
        }

    //Links Screen methods
    async validateContextLinks(){
        try{
            const newPage=(await this.validateNewContextClick(elementsLocators.homeLink,"https://demoqa.com/"));
            await this.validateTitle(newPage,"DEMOQA");
            const thirdPage=(await this.validateNewContextClick(elementsLocators.homeodbqD,"https://demoqa.com/"));
            await this.validateTitle(thirdPage,"DEMOQA");
            await this.clickOn(elementsLocators.created);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 201 and status text Created");
        }catch(e){
            console.error(e)  
        }   
    }

    async validateCreatedLink(){
        try{
            await this.clickOn(elementsLocators.created);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 201 and status text Created");
        }catch(e){
            console.error(e)  
        }
         }
    async validateNoContentLink(){
        try{
            await this.clickOn(elementsLocators.noContent);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 204 and status text No Content");
        }catch(e){
            console.error(e)  
        }
        }
    
    async validateBadRequestLink(){
        try{
            await this.clickOn(elementsLocators.badRequest);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 400 and status text Bad Request");

        }catch(e){
            console.error(e)  
        }
         }
    async validateMovedLink(){
        try{
            await this.clickOn(elementsLocators.moved);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 301 and status text Moved Permanently");

        }catch(e){
            console.error(e)  
        }
        }
    async validateForbiddenLink(){
        try{ 
            await this.clickOn(elementsLocators.forbidden);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 403 and status text Forbidden");
        }catch(e){
            console.error(e)  
        }
       }
    async validateUnauthorizedLink(){
        try{
            await this.clickOn(elementsLocators.unauthorized);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 401 and status text Unauthorized");
        }catch(e){
            console.error(e)  
        }
        }
    async validateNotFoundLink(){
        try{
            await this.clickOn(elementsLocators.notFound);
            await this.validateText(elementsLocators.responseText,"Link has responded with staus 404 and status text Not Found");
        }catch(e){
            console.error(e)  
        }
         }

    //Dynamic properties screes methods

    async validateDynamicId(){
        try{
            const first_id= await this.getAttribute(elementsLocators.dynamicId,'id');
            console.log(first_id);
            await this.page.reload()
            const next_id=await this.getAttribute(elementsLocators.dynamicId,'id');
            console.log(next_id)
            expect(first_id).not.toBe(next_id);
        }catch(e){
            console.error(e)  
        }
         }
    async validateEnabledButton(){
        try{
            this.elementDisabled(elementsLocators.enabledButtton);
            await this.page.waitForTimeout(5000)
            this.elementEnabled(elementsLocators.enabledButtton); 

        }catch(e){
            console.error(e)  
        }
        }

    async validateVisibleButton(){
        try{
            this.expectHidden(elementsLocators.visibleButton);
            await this.page.waitForTimeout(5000);
            this.expectVisible(elementsLocators.visibleButton);
        }catch(e){
            console.error(e)  
        }
        }

    //Upload and Download

    async validateUploadFile(){
        try{
            const file_path=path.resolve(__dirname,"../data/sampleFile.jpeg")
            await this.UploadFile(elementsLocators.UploadButton,file_path);
            await this.validateText(elementsLocators.textUpload,'C:\\fakepath\\sampleFile.jpeg')
        }catch(e){
            console.error(e)  
        }
        }

    async validateDownloadFile(){
        try{
            const file_path=path.resolve(__dirname,"../downloads/sampleFile.jpeg");
            await this.downloadFile(elementsLocators.DownloadButton,file_path);
        }catch(e){
            console.error(e)  
        }
    }  
}
