/// <reference types="cypress" />

describe('Alt Text For Images', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('images have the correct alt tags', () => {
        cy.getBySel('cookie').find('button').should('contain', 'Accept cookies')
    })
})