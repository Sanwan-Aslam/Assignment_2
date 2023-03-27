/// <reference types="Cypress"

export class AccountInfo{
    enterName(vlaue){
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
        //const password=cy.get('#password')
        //password.type(value)
        //return this
        cy.get('#password').type(value)
    }
    enterdateofBirth(value,a,b){
        cy.get('#days').select(value)
        cy.get('#months').select(a)
        cy.get('#years').select(b)
        return this
    }
    checkBox(){
        cy.get('#newsletter').check()
        cy.get('#optin').check()
    }
    
}

    export class AddressInfo{
        addressInfo(a,b,c,d,e,f,g,h,i,j){
            cy.get('#first_name').type(a)
            cy.get('#last_name').type(b)
            cy.get('#company').type(c)
            cy.get('#address1').type(d)
            cy.get('#address2').type(e)
            cy.get('#country').select(f)
            cy.get('#state').type(g)
            cy.get('#city').type(h)
            cy.get('#zipcode').type(i)
            cy.get('#mobile_number').type(j)
            return this
        }
        createAccountButton(){
            cy.get('[data-qa="create-account"]').click()
        }
    } 

