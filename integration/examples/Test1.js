//import { mailosaurApiKey } from './config'; // import Mailosaur API key from a separate config file
//import mailosaur from 'cypress-mailosaur';

describe('Registration', function()
    {
           it('Registration with mandotary fields', function()
        {
            cy.visit("https://demo.opencart.com/"
            );
            cy.get('.fas.fa-user').click()
            cy.get(":nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item").click()
            cy.get('#input-firstname').type('Sanwan')
            cy.get('#input-lastname').type('Aslam')
            cy.get('#input-email').type('sanwan.aslam@devsinc.com')
            cy.get('#input-password').type('sanwan1234')
            cy.get("[type='checkbox']").check()
            cy.get("[type='submit']").click()


        }
        )
        it.only('Account registering', function()
        {

            cy.visit("https://www.opencart.com")
            cy.wait(10000)
            cy.get('.btn.btn-black.navbar-btn').click()
            cy.wait(5000)
            cy.contains('Register for OpenCart account')
            cy.get('#input-username').type('Sanwan Aslam')
            cy.get('#input-firstname').type('Sanwan')
            cy.get('#input-lastname').type('Aslam')
            cy.get('#input-email').type('sanwan.aslam@devsinc.com')
            cy.get('#input-country').select('Pakistan')
            cy.get('#input-password').type('sanwan1234')
            cy.wait(3000)
            cy.get('.btn.btn-primary.btn-lg.hidden-xs').click()

            //cy.wait(5000); // wait for the email to be delivered
          
            // mailosaur.getMessages({
            //   sentTo: 'sanwan.aslam@devsinc.com',
            //   subject: 'Thank you for registering',
            // }).then((messages) => {
            //   expect(messages.items).to.have.lengthOf(1);
            //   const message = messages.items[0];
            //   expect(message.html.body).to.contain('WELCOME TO OPENCART');
            //   expect(message.html.body).to.contain('Please, click to verify account');
            //   //expect(message.html.body).to.contain('https://example.com/confirm');
            // });

        })

       /* it('should send an email to the entered email', () => {
            // fill in the registration form and submit it
          
            cy.wait(5000); // wait for the email to be delivered
          
            mailosaur.getMessages({
              sentTo: 'sanwan.aslam@devsinc.com',
              subject: 'Registration confirmation',
            }).then((messages) => {
              expect(messages.items).to.have.lengthOf(1);
              const message = messages.items[0];
              expect(message.html.body).to.contain('WELCOME TO OPENCART');
              expect(message.html.body).to.contain('Please, click to verify account');
              //expect(message.html.body).to.contain('https://example.com/confirm');
            });
          }); */
    })