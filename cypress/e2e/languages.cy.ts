/// <reference types="cypress" />

describe('Change Language', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('user can change language', () => {
        cy.get('[aria-label="Language selector"]').click()
        cy.get('ul > li > a').click()

        cy.location('pathname').should('eq', '/es')
    })
})