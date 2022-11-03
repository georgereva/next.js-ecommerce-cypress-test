/// <reference types="cypress"/>

describe('Home Page', () => {
  it('displays all 3 products on the home page', () => {
    cy.visit('/')

    cy.getBySel("product-tag")
      .eq(0)
      .within(() => {
        cy.getBySel("product-name").should('contain', 'Is This The Real Life Coding')
        cy.getBySel("product-price").should('contain', '$25.00 USD')
      })

    cy.getBySel("product-tag")
      .eq(1)
      .within(() => {
        cy.getBySel("product-name").should('contain', 'Developer Essential')
        cy.getBySel("product-price").should('contain', '$25.00 USD')
      })

    cy.getBySel("product-tag")
      .eq(2)
      .within(() => {
        cy.getBySel("product-name").should('contain', 'Funny SQL')
        cy.getBySel("product-price").should('contain', '$25.00 USD')
      })
  })
})

export{}