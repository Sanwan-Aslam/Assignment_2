/// <reference types="Cypress"
describe('API Automation Test Suite', function(){
    it('Get User List', function(){
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).as('getUserList');

        cy.get('@getUserList').then(Response =>{
            expect(Response.status).to.eq(200);
            cy.log(JSON.stringify(Response.body));
        })
    })

    it('Post Create User', function(){
        cy.request({
            method: "POST",
            url: "https://reqres.in//api/users",
            body: {
                "name": "morpheus",
                "job": "leader",
            }
        }).as ('postCreateUser');
        cy.get("@postCreateUser").then(Response =>{
            expect(Response.status).to.eq(201);
            cy.log(JSON.stringify(Response.body));
        })
    })
})