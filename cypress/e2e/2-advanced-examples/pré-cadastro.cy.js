/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadsatro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        let nameF = faker.name.firstName()
        let sobreF = faker.name.lastName()
        let emailFaker = faker.internet.email(nameF)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type("!teste@teste$")
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nameF)
        cy.get('#account_last_name').type(sobreF)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should("contain", "Detalhes da conta modificados com sucesso.")

    });



});