import { BasePage } from "./basePage";
import { elementsLocators } from "./locators/elements";
import {Page, Locator} from '@playwright/test';

export class ElementsPage extends BasePage{
     
    constructor(page: Page){
        super(page);
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
        await this.clickOn(elementsLocators.textBoxButton);
        await this.validateText(elementsLocators.textBoxText,"Text Box");
    }

    async goToCheckBoxScreen(){
        await this.loadWeb('https://demoqa.com/');
        await this.clickOn(elementsLocators.elements);
        await this.clickOn(elementsLocators.ChecktBoxButton);
        await this.validateText(elementsLocators.checkBoxText,"Check Box");
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
}
