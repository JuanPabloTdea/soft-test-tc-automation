describe('Pricing Page Assertions', () => {
  it('TC4 - Validate pricing plans', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
    cy.scrollTo('bottom')

    cy.get('.et_pb_pricing_table').eq(0).find('.et_pb_sum').should('contain.text', '$0')
    cy.get('.et_pb_pricing_table').eq(1).find('.et_pb_sum').should('contain.text', '$80')
    cy.get('.et_pb_pricing_table').eq(2).find('.et_pb_sum').should('contain.text', '$900')
  })

 
})

describe('Font Family Validation', () => {
  it('TC5 - Validate h1 font family', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')

    cy.get('h1').should('have.css', 'font-family', '"Nunito Sans", Helvetica, Arial, Lucida, sans-serif')
  })
})

describe('Validate button classes', () => {
 it('TC6 - Validate button classes', () => {
    cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
    cy.scrollTo('bottom')

    cy.get('.et_pb_button.et_pb_pricing_table_button').should('have.class', 'et_pb_button')
    cy.get('.et_pb_button.et_pb_pricing_table_button').should('have.class', 'et_pb_pricing_table_button')
  })
})