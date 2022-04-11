
describe('The Step WebPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get('[name$=username]').clear().type('admin')
    cy.get('[placeholder="Password"]').clear().type('init')
    cy.get('.btn-block').click()
    
  })

  it('Check application login', () => {
      
    cy.get('.navbar-nav').contains('Plans').click()
    cy.get('.navbar-right').contains('admin').click()
    cy.get('.dropdown-menu').contains('My account').click()
      .should ('have.text', ' My account')
    cy.get('.glyphicon-user')
        .should('have.class', 'glyphicon')
    
  })

  it('Logout from application', () => {
    cy.get('.glyphicon-user').click()
    cy.get('.glyphicon-off').click()
    cy.get('[type="submit"]').should('be.visible')
   
  })
  
})