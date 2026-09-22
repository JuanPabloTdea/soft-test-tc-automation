describe('TC01 - Login Page', () => {
  it('should login and logout successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.wait(5000)
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('button[type="submit"]').click()

    cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

    cy.get('.button').contains('Logout').click()

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  })

  it('TC2 InvalidUser', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('usuarioincorrecto')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('button[type="submit"]').click()

    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  })

  it('TC3 InvalidPassword', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('claves erronea')

    cy.get('button[type="submit"]').click()

    cy.get('#flash').should('contain.text', 'Your password is invalid!')
  })
})
