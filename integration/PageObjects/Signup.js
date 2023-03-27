/// <reference types="Cypress"
class SignUp{
    clickloignButton(){
        const button=cy.get('.shop-menu > .nav > :nth-child(4) > a')
        button.click()
        cy.wait(3000)
        cy.get(' .signup-form h2').should('have.text','New User Signup!')
    }
}

export default SignUp