export class BasePage{

    async loadWeb(url){
        cy.visit(url);
    }

    async clickOn(selector){
        cy.get(selector).click();
    }

    async fillShield(selector, text){
        cy.get(selector).type(text)
    }
    async  validateText(selector,text){
        cy.get(selector).should('include.text', text)
    }
    async clearShield(selector){
        cy.get(selector).clear();
    }
}