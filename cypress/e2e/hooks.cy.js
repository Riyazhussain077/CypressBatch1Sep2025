describe('Login Test' , () => {

    beforeEach(() => {
        cy.visit('https://www.cypress.io/');
    });

    it('Login with credentials' , () => {
        cy.log("Running Basic Test");
        cy.title().should('include' , 'Cypress');
    });

    it('Login with invalid credentials' , () => {
        cy.log('Running critical Test');
        cy.url().should('include' , 'cypress');
    });

});

it.only('Runs for this time' , () => {
    cy.log('This is Test 1..')
});

it.skip('Runs alone' , () => {
    cy.log('This is Test 2')
});
