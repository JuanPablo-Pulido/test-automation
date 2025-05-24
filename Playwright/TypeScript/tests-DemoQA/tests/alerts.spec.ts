import { AlertsPage } from "../pages/AlertsPage";
import { test } from '@playwright/test';

test.describe.serial('Test Suite Alerts Screen', ()=>{
    test.describe('Validate each alert type', ()=>{
        let alertPage: AlertsPage;
        test.beforeEach(async({page})=>{
            alertPage= new AlertsPage(page);
            await alertPage.goToAlertsScreen();
            await alertPage.validateAlertsScreen();
            await alertPage.goToAlertsOption();
            await alertPage.validateAlertsOptionScreen();
        });
        test('Close alert',async()=>{
            await alertPage.closeAlert();
            await alertPage.closeTimerAlert();
            await alertPage.confirmAlert();
            await alertPage.dismissAlert();
            await alertPage.InsertPrompt("Test");
        })
    })
})

