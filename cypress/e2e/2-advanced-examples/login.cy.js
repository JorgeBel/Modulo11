/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');
context("Funcionalidade Login", () =>{

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    ///login com e-mail e senha já cadastrados / TER SUCESSO!
    it("Deve fazer login com sucesso", () => {
        
        cy.get("#username").type("avaliacaoebac@gmail.com")
        cy.get("#password").type("ebaceduca@ebac")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain", "Olá,")
    })

    ///login com e-mail e senha não cadastrados! / APRESENTAR ERRO!
    it("Deve fazer alerta de login inválido", () => {
        
        cy.get("#username").type("avalic@@gmail.com")
        cy.get("#password").type("straatd001")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("contain", "o usuário avalic@@gmail.com não está cadastrado neste site.")
    })

    ///login realizado com faker aleatoriamente / APRESENTAR ERRO!

    it("Deve fazer alerta de login inválido", () => {

        let emailFaker = faker.internet.email()
        
        cy.get("#username").type(emailFaker)
        cy.get("#password").type("9312039120jdaisdjai")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should("contain", "Endereço de e-mail desconhecido.")



    });

});