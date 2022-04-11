context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.get('[name$=username]').clear().type('admin')
    cy.get('[placeholder="Password"]').clear().type('init')
    cy.get('.btn-block').click()
    
    
  })

  it('Navigate through Step WebPage', () => {
    // http://localhost:8080/
   //explore some tabs from page
    cy.get('.navbar-nav').contains('Plans').click()
    cy.get('[ng-click="addPlan()"]').should('be.visible')

    cy.get('.navbar-nav').contains('Keywords').click()
    cy.get('[ng-click="addFunctionPackage()"]').should('be.visible')

    cy.get('.navbar-nav').contains('Parameters').click()
    cy.get('[ng-click="addParameter()"]').should('be.visible')
     
    cy.get('.navbar-nav').contains('Executions').click()
    cy.get('[ng-click="selectTab(tab.id)"]').should('be.visible')

    cy.get('.navbar-nav').contains('Scheduler').click()
    cy.get('[ng-click="addSchedulerEntry()"]').should('be.visible')

    cy.get('.navbar-nav').contains('Grid').click()
    cy.get('.nav-tabs').contains('Tokens').click
    cy.get('.nav-tabs').contains('Token Groups').click
    cy.get('.nav-tabs').contains('Quota Manager').click
    cy.get('.nav-tabs').contains('Agents').should('be.visible')
    cy.get('.navbar-nav').contains('Admin').click()
    // create new user "user1" with Admin rights
    cy.get('[ ng-click="addUser()"]').click()
    cy.get('[ng-model="user.username"]').type('user1')
    cy.get('[ng-click="save()"]').click()
    cy.get('[ng-model="password"]').should('be.visible')
    cy.get('[ng-click="close()"]').click()
    

    
  })

  
})
