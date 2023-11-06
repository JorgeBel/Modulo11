/// <reference types="cypress"/>

describe('Funcionalidade páginas de produtos', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    });

    it('Deve selecionar o produto 1 da lista', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains("Caesar Warm-Up Pant").click()
        cy.get('.button-variable-item-32').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    });

    
    it('Deve adicionar o produto 2 ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains("Beaumont Summit Kit").click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.visit("http://lojaebac.ebaconline.art.br/produtos/")
    });
  
    it('Deve adicionar o produto 3 ao carrinho', () => {
            var quantidade = 3
            cy.get('[class="product-block grid"]')
                .contains("Chaz Kangeroo Hoodie").click()
            cy.get('.button-variable-item-XL').click()
            cy.get('.button-variable-item-Gray').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

        });
    });

