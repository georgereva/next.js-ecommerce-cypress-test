/// <reference types="cypress" />

describe('Alt Text For Images', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('images have the correct alt tags', () => {
        cy.getBySel('productCard-image')
            .eq(0)
            .find('img')
            .should('have.attr', 'alt')
            .then((altText) => {
                cy.wrap(altText).should('contain', 'Is This The Real Life Coding')
            })
    })
})