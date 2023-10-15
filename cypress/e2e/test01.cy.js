/// <reference types="cypress" />

it('google search', () => {

    cy.visit('https://www.google.com/')

    cy.get('#W0wltc > .QS5gu').click()

    cy.get('#APjFqb').type('koncertek{enter}')

    

   
})