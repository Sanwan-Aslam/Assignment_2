/// <reference types="Cypress"
export class ABC{
    checkAccountCreated(){
        cy.contains('Account Created!')
        return this
    }
    continueButton(){
        cy.get('.btn.btn-primary').click()
        return this
    }
}
export default ABC