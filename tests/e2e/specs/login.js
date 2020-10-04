///<reference types="cypress"/>
describe('Iniciar sesión mail+pass, comprobar sesión activa', () => {
    beforeEach(() => {
        cy.visit('/login')
    }),
    it('Iniciar sesión', () => {
        cy
        .wait(3000)
        .get('#email').type('user1@mystore.com')
        .get('#password').type('password')
        .get('.button').click()
        .get('.navbar').contains('Usuario')
        .get('.navbar').should('not.contain','Login')
    })
})