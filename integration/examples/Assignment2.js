/// <reference types="Cypress"
import {AccountInfo} from '../PageObjects/AccountAddressInfo'
import {AddressInfo} from '../PageObjects/AccountAddressInfo'
import ABC from '../PageObjects/AccountCreated'
import RegisterUser from '../PageObjects/RegisterUser'
import SignUp from '../PageObjects/Signup'
describe('Registration', function()
    {
           it('Registration', function()
        {
            const register=new RegisterUser()
            const signup=new SignUp()
            const accountinfo=new AccountInfo()
            const addressinfo=new AddressInfo()
            const accountcreated=new ABC()
            register.visit()
          //  ru.homepageVisible()
            signup.clickloignButton()
            //ru.verifynewusersignupisVisible()
            //let abv = accountinfo.enterName('Sanwan')
            accountinfo.enterName('Sanwan')

            cy.get('[data-qa="signup-name"]').then(($nam) =>{
                cy.log($nam)
                return this
              })
            //const abv1 = abv;
            // accountinfo.enterEmail('akopomtuhuhreeki@yopmail.com')
            // accountinfo.clicksignupButton()
            // accountinfo.checkTitle()
            // accountinfo.enterPassword('78669')
            // accountinfo.enterdateofBirth('4','May','1999')
            // accountinfo.checkBox()
            // addressinfo.addressInfo('Sanwan','Aslam','Devsinc','Opposite KFC','Opposite SCB','Singapore','Dont Know','Lahore','3000','034904903499')
            // addressinfo.createAccountButton()
            // accountcreated.checkAccountCreated
            // accountcreated.continueButton()
            // register.loggedinasusernameVisibility()
            // accountcreated.deleteAccount()
            // accountcreated.continueButton()
        })
    
    
    })