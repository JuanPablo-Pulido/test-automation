import { BasePage } from "./basePage";
import { Page } from '@playwright/test';
import { alertsLocators } from "./locators/alerts";

export class AlertsPage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    async goToAlertsScreen(){
        try{
            await this.loadWeb("https://demoqa.com/");
            await this.clickOn(alertsLocators.alertsScreen);   

        }catch(e){
            console.error("Unable to go to the alerts screen", e)

        }
        
    }
    async validateAlertsScreen(){
        try{
            await this.validateURL(alertsLocators.alertsURL);
            await this.validateTitle(this.page,"DEMOQA");
        }catch(e){
            console.error("Not the alert screen",e)
        }
        
    }

    async goToAlertsOption(){
        try{
            await this.clickOn(alertsLocators.alertOptionScreen);
        }catch(e){
            console.error("Unabl to go to the alert option",e)
        }
        
    }
    async validateAlertsOptionScreen(){
        try{
            await this.validateURL(alertsLocators.alertsOptionScreenURL);
            await this.validateTitle(this.page,"DEMOQA");
        }catch(e){
            console.error(e)

        }
        
    }
    // Alerts Methods

    async InsertPrompt(prompt:string){
        try{
            const PrompText = `You entered ${prompt}`
            await this.expectHidden(alertsLocators.prompText)
            await Promise.all([
                this.clickOn(alertsLocators.promptAlertButton),
                this.respondToPrompt(prompt)
            ])
            await this.expectVisible(alertsLocators.prompText);
            await this.validateText(alertsLocators.prompText,PrompText)
            
        }catch(e){
            console.error("Insertion prompt error",e);
        }
        
    }
    async closeAlert(){
        try{
            await Promise.all([
                this.clickOn(alertsLocators.alertButton),
                this.acceptConfirmation()          
            ])
    }catch(e){
        console.error("Error when closing alert",e)

    }
    }
    async closeTimerAlert(){
        try{
            await Promise.all([
                this.clickOn(alertsLocators.timerAlertButton),
                this.acceptConfirmation()
            ])
        }catch(e){
            console.error("Error when closing timer alert",e)

        }
    }
    async confirmAlert(){
        try{
            await this.expectHidden(alertsLocators.confirmResultText)
            await Promise.all([
                this.clickOn(alertsLocators.confirmAlertButton),
                this.acceptConfirmation
            ])
            await this.expectVisible(alertsLocators.confirmAlertButton);
            await this.validateText(alertsLocators.confirmResultText, "You selected Ok")
        }catch(e){
            console.error("Error when choosing accept",e)

        }
    }

    async dismissAlert(){
        try{
            await this.page.reload();
            await this.expectHidden(alertsLocators.confirmResultText)
            await Promise.all([
                this.clickOn(alertsLocators.confirmAlertButton),
                this.dismissConfirmation()
            ])
            await this.expectVisible(alertsLocators.confirmAlertButton);
            await this.validateText(alertsLocators.confirmResultText, "You selected Cancel")


        }catch(e){
            console.error("Error when choosing cancel",e)
        }
    }
}