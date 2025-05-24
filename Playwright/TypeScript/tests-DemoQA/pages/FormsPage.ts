import { test, expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { formsLocators } from './locators/forms';
import path from 'path';
import { dataForm } from '../data/dataForms';

export class FormsPage extends BasePage{
    constructor(page: Page){
        super(page)
    }
    //Methods main screen
    async gotoFormsScreen(){
        try{
            await this.loadWeb("https://demoqa.com/");
            await this.clickOn(formsLocators.formsScreen);
        }catch(e){
            console.error("Could not go to the forms screen", e);

        } 
    }
    async validateScreen(){
        try{
        await this.validateURL("https://demoqa.com/forms");
        await this.validateTitle(this.page,"DEMOQA");
        }catch(e){
            console.error("Is not visible the form screen", e)
            
        } 
    }

    async goToPracticeForm(){
        try{
            await this.clickOn(formsLocators.practiceFormScren);
        }catch(e){
            console.error("Is not visible the practice form",e)
        }
        
    }
    async selectGender(gender:string): Promise<string>{
        switch (gender){
            case "Male":
                return "//label[@for='gender-radio-1']";
            case "Female":
                return "//label[@for='gender-radio-2']";
            case "Other":
                return "//label[@for='gender-radio-3']";
            default:
                throw new Error("Select a correct option (Male, Female, Other)")
        } 
    }
    async selectDay(value: number){
        return `${formsLocators.dayBirthday}[text()=${value}]`;
    }

    async selectHobby(hobbie: string){
        switch(hobbie){
            case "Sports":
                return "//label[@for='hobbies-checkbox-1']";
            case "Reading":
                return "//label[@for='hobbies-checkbox-2']";
            case "Music":
                return "//label[@for='hobbies-checkbox-3']";
            default:
                throw new Error("Select a correct option (Sports, Reading, Music)")
        }
    }
    //Methods fill form
    async fillForm(){
        try{
            const genderSelector= await this.selectGender(dataForm.gender);
            const daySelected= await this.selectDay(dataForm.day);
            const hobbySelected= await this.selectHobby(dataForm.hobbie);
            const file_path=path.resolve(__dirname,"../downloads/sampleFile.jpeg");
            await this.fillShield(formsLocators.nameInput,dataForm.name);
            await this.fillShield(formsLocators.lastName,dataForm.lastname);
            await this.fillShield(formsLocators.emailInput,dataForm.email);
            await this.clickOn(genderSelector);
            await this.fillShield(formsLocators.mobileInput,dataForm.mobile);
            await this.clickOn(formsLocators.dateBirthInput);
            await this.selectOption(formsLocators.monthBirthday,dataForm.month);
            await this.selectOption(formsLocators.yearBirthday,dataForm.year);
            await this.clickOn(daySelected);
            await this.checkOption(hobbySelected);
            await this.UploadFile(formsLocators.fileInput,file_path);
            await this.fillShield(formsLocators.currentAddressInput,dataForm.address);
            await this.clickOn(formsLocators.stateInput);
            await this.clickByText(dataForm.state)
            await this.clickOn(formsLocators.cityInput);
            await this.clickByText(dataForm.city);
            await this.clickOn(formsLocators.submitButton);
            await this.expectVisible(formsLocators.submitText);

        }catch(e){
            console.error("Could not complete the form",e)

        }
    }
    //Method to validate form information
    async validateSubmitInformation(){
        try{
            const fullName = `${dataForm.name} ${dataForm.lastname}`;
            const stateCity = `${dataForm.state} ${dataForm.city}`;
            await this.validateText(formsLocators.studentSubmit, fullName);
            await this.validateText(formsLocators.emailSubmit,dataForm.email);
            await this.validateText(formsLocators.genderSubmit,dataForm.gender);
            await this.validateText(formsLocators.mobileSubmit,dataForm.mobile);
            //await this.validateText(formsLocators.subjectSubmit);
            await this.validateText(formsLocators.hobbieSubmit,dataForm.hobbie);
            await this.validateText(formsLocators.addressSubmit,dataForm.address);
            await this.validateText(formsLocators.stateSubmit,stateCity);
            await this.clickOn(formsLocators.closeButton);
            await this.expectHidden(formsLocators.submitText)
        }catch(e){
            console.error("The information filled in is not the same as the saved information",e);
        }
        
    }
}