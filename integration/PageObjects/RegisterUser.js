/// <reference types="Cypress"

class RegisterUser{
    visit(){
    cy.visit('https://automationexercise.com/')
    cy.contains('Features Items')
    }
    loggedinasusernameVisibility(){
    cy.get(':nth-child(10) > a').should('contains', 'Logged in as, ${abv}')
    }
    //homepageVisible(){
      //  cy.contains('AutomationExercise')
    //}
    /*clickloignButton(){
        const button=cy.get('.shop-menu > .nav > :nth-child(4) > a')
        button.click()
        cy.wait(3000)
        cy.get(' .signup-form h2').should('have.text','New User Signup!')
    } */
    //verifynewusersignupisVisible(){
      //  cy.contains('New User Signup!')
    //}
    /*enterName(vlaue){
        const name=cy.get('[data-qa="signup-name"]')
        name.type(vlaue)
        return this
    }
    enterEmail(value){
        const email=cy.get('[data-qa="signup-email"]')
        email.type(value)
        return this
    }
    clicksignupButton(){
        const button=cy.get('[data-qa="signup-button"]')
        button.click()
        cy.contains('Enter Account Information')
    }
    checkTitle(){
        const title=cy.get('#id_gender1')
        title.check()
        return this
    }
    enterPassword(value){
        const password=cy.get('#password')
        password.type(value)
        return this
    }
    enterdateofBirth(value,a,b){
        cy.get('#days').select(value)
        cy.get('#months').select(a)
        cy.get('#years').select(b)
        
        return this
    } */
}
export default RegisterUser
