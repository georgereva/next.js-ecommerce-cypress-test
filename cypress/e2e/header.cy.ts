/// <reference types="cypress"/>

describe('Header', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('links to the correct pages', () => {

    cy.getBySel("logo").click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel("nav-link-search").click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySel("nav-link-home-page").click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })
  
  it("the search bar returns the correct search results", () => {
    cy.getBySel("search-input").eq(0).type('sql{enter}')

    cy.getBySel("productCard-tag")
      .eq(0)
      .within(() => {
        cy.getBySel("productCard-name").should('contain', 'Funny SQL')
        cy.getBySel("productCard-price").should('contain', '$25.00 USD')
      })
  })
})