/// <reference types="cypress" />

describe('Shopping Cart', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('users can add products to the cart', () => {
        cy.getBySel('product-tag').eq(0).click()
        cy.get('[aria-label="Add to Cart"]').click()
        cy.get('[aria-label="Cart items: 1"]').contains('1')
    })

    it('users can add different products to the cart', () => {
        cy.getBySel('product-tag').eq(0).click()
        cy.get('[aria-label="Add to Cart"]').click()
        cy.get('[aria-label="Close"]').click()

        cy.getBySel("search-input").eq(0).type('sql{enter}')
        cy.getBySel("productCard-tag").click()
        cy.get('[aria-label="Add to Cart"]').click()
        cy.get('[aria-label="Cart items: 2"]').contains('2')
    })
})